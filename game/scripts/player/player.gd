extends CharacterBody2D
## Player character — 8-directional movement + attack + dash + health/hurt.
## Uses CharacterBody2D for future combat extensibility.

const MovementConfig = preload("res://data/movement_config.gd")
const AttackConfig   = preload("res://data/attack_config.gd")
const DashConfig    = preload("res://data/dash_config.gd")
const HurtConfig    = preload("res://data/hurt_config.gd")

## ---- Exported for debug visibility ---------------------------------
@export var current_speed: float = 0.0

## ---- State -----------------------------------------------------------
enum State {
	IDLE,
	ATTACK_WINDUP, ATTACK_ACTIVE, ATTACK_RECOVERY,
	DASH,
	HURT,
	DEAD
}
var state: State = State.IDLE
var attack_timer: float = 0.0
var attack_cooldown: float = 0.0

## ---- Facing ----------------------------------------------------------
var last_facing := Vector2(0, 1)

## ---- Health ----------------------------------------------------------
var max_hp: int = HurtConfig.MAX_HP
var current_hp: int = max_hp
var is_dead: bool = false

## ---- Hurt / Invulnerability -----------------------------------------
var hurt_lock_timer: float = 0.0    # movement lock — short, punchy
var hurt_flash_total_timer: float = 0.0  # total flash duration (flash ends when this hits 0)
var hurt_flash_toggle_timer: float = 0.0 # fixed 0.08s interval for toggle alternation
var hurt_invulnerable_timer: float = 0.0  # invulnerability window
var hurt_flash_on: bool = false           # current flash state (white or red)
var death_timer: float = 0.0

const SPAWN_POSITION := Vector2(360, 300)

## ---- Dash variables --------------------------------------------------
var dash_timer: float = 0.0
var dash_cooldown: float = 0.0
var dash_direction: Vector2 = Vector2.ZERO
var is_invincible: bool = false  # dash i-frames (post-hurt invuln is separate)

## ---- Hitbox reference ------------------------------------------------
@onready var hitbox: Area2D = $AttackHitbox
@onready var hitbox_shape: CollisionShape2D = $AttackHitbox/CollisionShape2D
@onready var hitbox_visual: ColorRect = $AttackHitbox/HitboxVisual
@onready var sprite: Sprite2D = $Sprite2D
@onready var hurtbox: Area2D = $PlayerHurtbox
@onready var camera: Camera2D = $Camera2D

## ---- Screen shake ----------------------------------------------------
var screen_shake: float = 0.0  # current shake magnitude in pixels
const SCREEN_SHAKE_DECAY := 8.0 # shake decay rate in pixels/sec

## ---- Debug -----------------------------------------------------------
var debug_label: Label = null

func _ready() -> void:
	debug_label = get_node_or_null("/root/Main/DebugLabel")
	hitbox.body_entered.connect(_on_hitbox_body_entered)
	hurtbox.body_entered.connect(_on_hurtbox_body_entered)
	_hitbox_teardown()
	sprite.modulate = Color(1, 1, 1, 1)
	screen_shake = 0.0
	if camera:
		camera.offset = Vector2.ZERO
	_hitbox_visual_hide()  # start with hitbox visual hidden

func _physics_process(delta: float) -> void:
	var input_dir := _read_input()

	if input_dir.length() > 0:
		last_facing = input_dir.normalized()

	match state:
		State.IDLE:
			_normal_movement(input_dir, delta)
			if dash_cooldown <= 0 and Input.is_action_just_pressed("dash"):
				_dash_start(input_dir)
			elif attack_cooldown <= 0 and Input.is_action_just_pressed("attack"):
				_attack_start()

		State.ATTACK_WINDUP:
			velocity = Vector2.ZERO
			move_and_slide()
			attack_timer -= delta
			# Show windup indicator once at start — ember-orange warning
			_hitbox_visual_show(Color(1.0, 0.5, 0.1))  # orange
			if attack_timer <= 0:
				state = State.ATTACK_ACTIVE
				attack_timer = AttackConfig.ACTIVE
				_hitbox_spawn()
				# Swap to active hit color
				_hitbox_visual_show(Color(1.0, 0.15, 0.1))  # red

		State.ATTACK_ACTIVE:
			velocity = Vector2.ZERO
			move_and_slide()
			attack_timer -= delta
			if attack_timer <= 0:
				state = State.ATTACK_RECOVERY
				attack_timer = AttackConfig.RECOVERY
				_hitbox_teardown()

		State.ATTACK_RECOVERY:
			_normal_movement(input_dir, delta)
			if dash_cooldown <= 0 and Input.is_action_just_pressed("dash"):
				_dash_start(input_dir)
			attack_timer -= delta
			if attack_timer <= 0:
				state = State.IDLE
				attack_cooldown = AttackConfig.COOLDOWN

		State.DASH:
			velocity = dash_direction * DashConfig.SPEED
			move_and_slide()
			dash_timer -= delta
			if dash_timer <= (DashConfig.DURATION - DashConfig.INVIC_DURATION):
				_clear_dash_invincibility()
			var t := 1.0 - (dash_timer / DashConfig.DURATION)
			sprite.modulate = Color(1, 1, 1, 1.0 - (0.5 * (1.0 - t)))
			if dash_timer <= 0:
				_end_dash()

		State.HURT:
			# Movement locked during hurt_lock_timer only
			if hurt_lock_timer > 0:
				hurt_lock_timer -= delta
				velocity = Vector2.ZERO
				move_and_slide()
			else:
				# Lock expired — player can move again, but still invulnerable + flashing
				velocity = Vector2.ZERO
				_normal_movement(input_dir, delta)  # real input, player can dodge
				move_and_slide()

			hurt_invulnerable_timer -= delta

			# Flash: fixed 0.08s toggle interval, gated by total duration
			hurt_flash_total_timer -= delta
			if hurt_flash_total_timer > 0:
				hurt_flash_toggle_timer -= delta
				if hurt_flash_toggle_timer <= 0:
					hurt_flash_on = !hurt_flash_on
					hurt_flash_toggle_timer = 0.08  # fixed 80ms interval
				# Red flash when flash_on=true, normal white when flash_on=false
				if hurt_flash_on:
					sprite.modulate = Color(1.0, 0.2, 0.2, 1.0)
				else:
					sprite.modulate = Color(1, 1, 1, 1)
			else:
				# Total flash expired — sprite back to normal, keep flashing off
				sprite.modulate = Color(1, 1, 1, 1)
				hurt_flash_on = false

			# Exit HURT state only when invulnerability expires
			if hurt_invulnerable_timer <= 0:
				state = State.IDLE
				sprite.modulate = Color(1, 1, 1, 1)
				hurt_flash_on = false

		State.DEAD:
			velocity = Vector2.ZERO
			death_timer -= delta
			sprite.visible = false
			if death_timer <= 0:
				_respawn()

	# NOTE: hurt_invulnerable_timer is decremented inside State.HURT and State.DEAD
	# to avoid double-decrementing. Do NOT add a second decrement here.

	# Cooldown ticks
	if attack_cooldown > 0:
		attack_cooldown -= delta
	if dash_cooldown > 0:
		dash_cooldown -= delta

	# Screen shake decay — applied every frame
	if screen_shake > 0:
		screen_shake = maxf(0.0, screen_shake - SCREEN_SHAKE_DECAY * delta)
		camera.offset = _get_shake_offset()
	else:
		camera.offset = Vector2.ZERO

	current_speed = velocity.length()
	_update_debug_label()

## True if dash i-frames OR post-hurt invulnerability is active.
func is_total_invincible() -> bool:
	return is_invincible or hurt_invulnerable_timer > 0

## Apply damage to the player. Guards: not dead, not invulnerable.
func take_damage(amount: int) -> void:
	if is_dead:
		return
	if is_total_invincible():
		print("PLAYER TOOK NO DAMAGE (invincible)")
		return
	current_hp -= amount
	print("PLAYER DAMAGED! hp=%d/%d" % [current_hp, max_hp])
	if current_hp <= 0:
		current_hp = 0
		_die()
	else:
		_start_hurt()

## Begin the hurt state — brief lock + invulnerability window.
func _start_hurt() -> void:
	hurt_lock_timer = HurtConfig.HURT_LOCK_DURATION
	hurt_flash_total_timer = HurtConfig.HURT_FLASH_DURATION
	hurt_flash_toggle_timer = 0.08  # first toggle at 80ms
	hurt_invulnerable_timer = HurtConfig.HURT_INVULN_DURATION
	hurt_flash_on = false
	screen_shake = 5.0        # hurt shake — clear hit feedback
	state = State.HURT

## Transition to dead state.
func _die() -> void:
	is_dead = true
	death_timer = HurtConfig.DEATH_DELAY
	state = State.DEAD
	print("PLAYER DIED — respawning in %s seconds" % HurtConfig.DEATH_DELAY)

## Restore player to spawn state.
func _respawn() -> void:
	current_hp = max_hp
	is_dead = false
	state = State.IDLE
	position = SPAWN_POSITION
	hurt_invulnerable_timer = 0.0
	dash_cooldown = 0.0
	attack_cooldown = 0.0
	hurt_lock_timer = 0.0
	hurt_flash_on = false
	hurt_flash_total_timer = 0.0
	screen_shake = 0.0
	velocity = Vector2.ZERO
	sprite.visible = true
	sprite.modulate = Color(1, 1, 1, 1)
	if camera:
		camera.offset = Vector2.ZERO
	_hitbox_teardown()
	print("PLAYER RESPAWNED at ", SPAWN_POSITION)

## Normal movement when the player is not in a locked attack or dash state.
func _normal_movement(input_dir: Vector2, delta: float) -> void:
	if input_dir.length() > 0:
		velocity = velocity.move_toward(input_dir * MovementConfig.SPEED, MovementConfig.ACCEL * delta)
	else:
		velocity = velocity.move_toward(Vector2.ZERO, MovementConfig.FRICTION * delta)
	move_and_slide()

## Begin a dash.
func _dash_start(input_dir: Vector2) -> void:
	if input_dir.length() > 0:
		dash_direction = input_dir.normalized()
	else:
		dash_direction = last_facing if last_facing != Vector2.ZERO else Vector2(0, 1)
	dash_timer = DashConfig.DURATION
	is_invincible = true
	sprite.modulate = Color(1, 1, 1, 0.5)
	state = State.DASH

func _end_dash() -> void:
	state = State.IDLE
	dash_cooldown = DashConfig.COOLDOWN
	_clear_dash_invincibility()
	sprite.modulate = Color(1, 1, 1, 1)

func _clear_dash_invincibility() -> void:
	# Only clear dash invincibility — post-hurt invuln is separate
	if hurt_invulnerable_timer <= 0:
		is_invincible = false
	else:
		is_invincible = false  # post-hurt still active but we check is_total_invincible

## Begin the attack sequence.
func _attack_start() -> void:
	state = State.ATTACK_WINDUP
	attack_timer = AttackConfig.WINDUP
	if last_facing == Vector2.ZERO:
		last_facing = Vector2(0, 1)
	# Pre-position the hitbox so the visual appears in the right place during windup
	var offset := last_facing * AttackConfig.HITBOX_OFFSET
	hitbox.position = offset
	hitbox.rotation = last_facing.angle()

## Position and enable the hitbox during the active window.
func _hitbox_spawn() -> void:
	var offset := last_facing * AttackConfig.HITBOX_OFFSET
	hitbox.position = offset
	hitbox.rotation = last_facing.angle()
	hitbox.monitoring = true
	hitbox_shape.disabled = false

## Disable and hide the hitbox.
func _hitbox_teardown() -> void:
	hitbox.monitoring = false
	hitbox_shape.disabled = true
	_hitbox_visual_hide()

## Show the hitbox visual as a colored rect (call each frame during windup/active).
## color: ember-orange for windup, bright red for active hit window.
func _hitbox_visual_show(color: Color) -> void:
	hitbox_visual.color = Color(color.r, color.g, color.b, 0.55)  # semi-transparent

## Hide the hitbox visual.
func _hitbox_visual_hide() -> void:
	hitbox_visual.color = Color(1, 0.4, 0.1, 0.0)  # back to invisible

## Called when the player's attack hitbox touches a body.
func _on_hitbox_body_entered(body: Node2D) -> void:
	if body.has_method("take_hit"):
		body.take_hit(AttackConfig.BASE_DAMAGE)
		screen_shake = 3.5     # attack hit shake — weighty impact feedback
		print("PLAYER ATTACK HIT: ", body.name)

## Called when the player's hurtbox touches an enemy's area.
func _on_hurtbox_body_entered(body: Node2D) -> void:
	pass  # Damage is initiated from the enemy's side (contact_enemy calls take_damage directly)

## Returns normalized 8-directional input vector.
func _read_input() -> Vector2:
	var d := Vector2(
		Input.get_action_strength("move_right") - Input.get_action_strength("move_left"),
		Input.get_action_strength("move_down") - Input.get_action_strength("move_up")
	)
	if d.length() > 1.0 and MovementConfig.DIAGONAL_NORMALIZE:
		d = d.normalized()
	return d

## Returns a random 2D offset scaled by current screen_shake magnitude.
func _get_shake_offset() -> Vector2:
	if screen_shake <= 0:
		return Vector2.ZERO
	return Vector2(
		randf_range(-screen_shake, screen_shake),
		randf_range(-screen_shake, screen_shake)
	)

## Updates the on-screen debug label.
func _update_debug_label() -> void:
	if debug_label:
		var state_names := ["IDLE", "WINDUP", "ACTIVE", "RECOVERY", "DASH", "HURT", "DEAD"]
		var state_str: String = state_names[state] if state < 7 else "?"
		var atk_str: String = "%.1f" % maxf(0.0, attack_cooldown) if attack_cooldown > 0 else "READY"
		var dsh_str: String = "%.1f" % maxf(0.0, dash_cooldown) if dash_cooldown > 0 else "READY"
		var inv_str: String = "ON" if is_total_invincible() else "OFF"
		debug_label.text = "HP:%d/%d ST:%s ATK:%s DSH:%s IFR:%s" % [
			current_hp, max_hp, state_str, atk_str, dsh_str, inv_str]
