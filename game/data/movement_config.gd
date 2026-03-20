# Movement tunables for Ashen Descent player character.
# All movement numbers live here — not scattered through code.
# Tweaking these values should immediately affect gameplay feel.

const SPEED := 180.0           # Max walk speed in pixels/sec
const ACCEL := 1200.0          # Pixels/sec added per second when accelerating
const FRICTION := 900.0       # Pixels/sec subtracted per second when decelerating
const DIAGONAL_NORMALIZE := true  # Prevents faster diagonal movement
