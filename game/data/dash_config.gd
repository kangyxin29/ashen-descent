# Dash tunables for Ashen Descent player dodge.
# All dash numbers live here — not scattered through code.
# Tweaking these values should immediately affect dash feel.

const DISTANCE := 96.0        # Total displacement in pixels (exact from spec)
const DURATION := 0.33        # Seconds — dash lasts this long
const INVIC_DURATION := 0.22   # Seconds — invincibility window from dash start (exact from spec)
const COOLDOWN := 1.2         # Seconds — minimum time between dashes (exact from spec)

# Derived — do not edit directly
const SPEED := DISTANCE / DURATION  # ≈ 291 px/s
