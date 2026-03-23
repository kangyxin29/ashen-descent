# Health, hurt, and death tunables for Ashen Descent player.
# All survivability numbers live here — not scattered through code.

const MAX_HP := 100
# Hurt state has three independent timers:
# 1. HURT_LOCK_DURATION  — movement frozen (short, punchy, ~0.12s)
# 2. HURT_FLASH_DURATION — red flash total duration (~0.55s, matches invuln)
# 3. HURT_INVULN_DURATION — invulnerability window (~0.55s, ends with flash)
# Flash and invulnerability are intentionally coupled: both end at the same time.
const HURT_LOCK_DURATION := 0.18   # Seconds — movement locked (longer for readability)
const HURT_FLASH_DURATION := 0.55  # Seconds — red flash visible (post-lock, player can move)
const HURT_INVULN_DURATION := 0.55 # Seconds — invulnerable after hurt ends (aligned with flash)
const DEATH_DELAY := 2.0           # Seconds — auto-respawn delay after death
