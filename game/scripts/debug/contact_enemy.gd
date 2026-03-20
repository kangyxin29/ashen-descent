extends Area2D
## Minimal contact-damage hostile for testing player hurt/death loop.
## No AI. No movement. Damages player on body contact with a cooldown.

const CONTACT_DAMAGE := 15
const CONTACT_INTERVAL := 1.0  # seconds between damage applications

var contact_timer := 0.0

func _ready() -> void:
	body_entered.connect(_on_body_entered)

func _process(delta: float) -> void:
	if contact_timer > 0:
		contact_timer -= delta

func _on_body_entered(body: Node2D) -> void:
	if contact_timer > 0:
		return
	if body.has_method("take_damage"):
		contact_timer = CONTACT_INTERVAL
		body.take_damage(CONTACT_DAMAGE)
		print("CONTACT ENEMY HIT PLAYER! damage=%d" % CONTACT_DAMAGE)
