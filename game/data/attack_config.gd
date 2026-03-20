# Attack tunables for Ashen Descent player light attack.
# All combat numbers live here — not scattered through code.
# Tweaking these values should immediately affect attack feel.

const WINDUP := 0.13        # Seconds — player commits before hitbox appears (tuned for readability)
const ACTIVE := 0.12        # Seconds — window where hitbox can deal damage (tuned for readability)
const RECOVERY := 0.18      # Seconds — cooldown after hitbox closes
const COOLDOWN := 0.40      # Seconds — minimum time between attacks

const BASE_DAMAGE := 25     # Flat damage per hit (before scaling)

# Hitbox geometry — rectangle in front of player during active window
# NOTE: player sprite is scaled 0.5x, so visual offset = HITBOX_OFFSET * 0.5
const HITBOX_WIDTH := 22.0  # Length along facing axis (forward reach)
const HITBOX_THICK := 14.0  # Width perpendicular to facing axis
const HITBOX_OFFSET := 28.0 # Distance from player center to hitbox center (visual: ~14px at 0.5x scale)

# Cooldown between attacks starts at end of recovery
# COOLDOWN should be >= WINDUP + ACTIVE + RECOVERY
