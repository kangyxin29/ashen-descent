extends Area2D
## Minimal training dummy — verifies hitbox collision works.
## No AI, no movement. Flashes and prints on hit.
## The player's AttackHitbox Area2D detects collision and calls take_hit().

var hp := 100

func take_hit(damage: int) -> void:
	hp -= damage
	modulate = Color(1.0, 0.3, 0.1, 1.0)  # red flash
	print("TRAINING DUMMY HIT! damage=%d  remaining_hp=%d" % [damage, hp])
	# Recover color after 0.15s
	await get_tree().create_timer(0.15).timeout
	modulate = Color(1, 1, 1, 1)
	if hp <= 0:
		print("TRAINING DUMMY DESTROYED — respawning in 1s")
		await get_tree().create_timer(1.0).timeout
		hp = 100
		print("TRAINING DUMMY respawned")
