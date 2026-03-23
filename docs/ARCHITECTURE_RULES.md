# ARCHITECTURE_RULES.md — Ashen Descent / 灰烬回响

> Directory responsibilities, script ownership, scene separation, dependency rules.
> How to add new systems safely without creating a God-object architecture.

---

## DIRECTORY RESPONSIBILITIES

### `/game/scenes/`

| Subdirectory | Responsibility |
|-------------|---------------|
| `main.tscn` | Entry point scene. Scene tree is built here. `main.gd` holds boot logic only. |
| `player/` | Player character scene and child nodes |
| `room/` | Room scenes (prototype room already exists) |
| `debug/` | Debug-only scenes (training dummy, contact enemy) |
| `enemies/` | Enemy scenes (not yet created) |
| `ui/` | HUD, menus (not yet created) |
| `hub/` | Hub area scenes (not yet created) |

**Rule:** No gameplay logic in `main.gd`. It only prints a boot message. All gameplay is in its respective scene's script.

### `/game/scripts/`

| Subdirectory | Responsibility |
|-------------|---------------|
| `main.gd` | Scene tree setup only. No gameplay logic. |
| `player/` | Player controller: movement, attack, dash, hurt, death, respawn |
| `debug/` | Debug entity scripts: training dummy, contact enemy |
| `enemies/` | Enemy AI scripts (not yet created) |
| `room/` | Room logic (not yet created) |
| `ui/` | UI logic (not yet created) |

### `/game/data/`

**All tunable values live here. No magic numbers in scripts.**

| File | Responsibility |
|------|---------------|
| `movement_config.gd` | Speed, acceleration, friction, diagonal normalize |
| `attack_config.gd` | Windup, active, recovery, cooldown, damage, hitbox geometry |
| `dash_config.gd` | Distance, duration, invincibility window, cooldown |
| `hurt_config.gd` | Max HP, hurt lock duration, flash duration, invuln duration, death delay |

**Rule:** Scripts `preload` their config file. Do not pass tunable values as magic number arguments.

### `/game/assets/`

| Subdirectory | Responsibility |
|-------------|---------------|
| `_vendor/` | Original Kenney source packs (do not modify) |
| `art/characters/player/` | Player and test target sprites |
| `art/environments/tilesets/` | Room floor/wall tiles |
| `art/environments/rooms/` | Room-specific environment art (not yet created) |
| `art/characters/enemies/` | Enemy sprites (not yet created) |
| `art/ui/` | UI element sprites (not yet wired) |
| `audio/sfx/` | Sound effect files (not yet wired) |

---

## SCRIPT OWNERSHIP BOUNDARIES

### Player Script (`player.gd`)

**Owns:**
- Player state machine (IDLE, ATTACK_*, DASH, HURT, DEAD)
- Movement input and physics
- Attack hitbox management (spawn, teardown)
- Hurt/death/respawn sequence
- Screen shake management
- Debug label updates

**Does NOT own:**
- Enemy AI (each enemy owns its own behavior)
- Room state (room owns its own state)
- UI elements (UI owns its own state)
- Global game state (use signals or a minimal game manager if needed)

### Enemy Scripts

**Each enemy owns its own:**
- AI behavior (patrol, chase, ranged, etc.)
- HP and damage handling
- Death sequence

**Enemies do NOT:**
- Directly modify player HP (they call `player.take_damage()` — player guards its own state)
- Access other enemies' state
- Control room state

### Room Script (when created)

**Owns:**
- Room boundary/walls
- Enemy spawn points
- Room state (cleared, active, etc.)
- Transition triggers

**Does NOT own:**
- Player state
- Enemy AI (enemies are children, but they own their own behavior)

---

## SCENE AND SYSTEM SEPARATION

### Scene Tree Rules

1. **Player** is a top-level child of `main.tscn` (or a dedicated game scene)
2. **Enemies** are children of the **Room** scene, not the Player
3. **UI** is a top-level child of `main.tscn` (or its own canvas layer)
4. **Room** is a top-level child of `main.tscn`

### Signal Usage

- Player uses signals to communicate damage to enemies (via `hitbox.body_entered`)
- Enemies communicate damage to player via `player.take_damage()` method (player guards its own state)
- Room communicates cleared/transition events via custom signals

**Rule:** Do not use a central "GameManager" node that everything connects to. Keep coupling low.

---

## DEPENDENCY RULES

### Config Preloading

```gdscript
const MovementConfig = preload("res://data/movement_config.gd")
```

Config files are constants-only. They have no runtime state. Preloading is safe and efficient.

### Scene References

Use `@onready` for child node references:
```gdscript
@onready var hitbox: Area2D = $AttackHitbox
```

Use `get_node_or_null()` for optional parent/sibling references:
```gdscript
debug_label = get_node_or_null("/root/Main/DebugLabel")
```

### No Circular Dependencies

- `player.gd` does not import room logic
- `enemy.gd` does not import player state
- Room does not import enemy scripts (enemies are instantiated by room)

---

## DATA-DRIVEN PRINCIPLES

1. **Every tunable number** goes in a config file in `/game/data/`
2. **No magic numbers** in scripts (speed=180 is `MovementConfig.SPEED`)
3. **Config files are constants** — they have no state, only tuning values
4. **When tuning, edit the config file** — not the script that uses it

---

## HOW TO ADD A NEW SYSTEM SAFELY

### Step 1: Identify the owner
Which existing script or node should be responsible for this system?

### Step 2: Keep it small
If the new system needs more than ~200 lines of script, split it.

### Step 3: Use a config file if there are tunables
Create `/game/data/new_system_config.gd` with constant values.

### Step 4: Document the decision
Add an entry to `docs/DECISIONS.md` with rationale.

### Step 5: Update ASSET_BIBLE if it involves sprites
If the new system needs new sprites, update `game/ASSET_BIBLE.md`.

---

## HOW TO AVOID GOD-OBJECT ARCHITECTURE

**Signs you are making a God object:**
- A single script that knows about player, enemies, room, UI, and game state
- A "Manager" node with children that everything references
- A script with 500+ lines doing many unrelated things

**Prevention:**
- Each entity type (player, enemy, room) owns its own state
- Cross-entity communication is via well-defined interfaces (signals, `take_damage()`, etc.)
- If you need shared state (e.g., room cleared), use a minimal data class or signal
- If a script gets large, ask: can part of this be its own scene with its own script?

---

## NAMING CONVENTIONS

| Thing | Convention | Example |
|-------|-----------|---------|
| Scene files | snake_case | `prototype_room.tscn`, `player.tscn` |
| Script files | snake_case | `player.gd`, `contact_enemy.gd` |
| Config files | snake_case | `attack_config.gd`, `dash_config.gd` |
| Node names | PascalCase | `Player`, `AttackHitbox`, `DebugLabel` |
| State enums | UPPER_SNAKE | `State.IDLE`, `State.ATTACK_WINDUP` |
| Config constants | UPPER_SNAKE | `SPEED`, `WINDUP`, `BASE_DAMAGE` |

---

## ADDING A NEW ENEMY TYPE

1. Create `scenes/enemies/new_enemy.tscn` with sprite, collision, Area2D for hurtbox
2. Create `scripts/enemies/new_enemy.gd` with AI logic
3. Update `game/ASSET_BIBLE.md` with sprite assignment
4. Add tunable values to a new or existing config file
5. Document decision in `docs/DECISIONS.md`
6. Add to `docs/TASK_BOARD.md` as a task

**Do NOT:** Give the enemy script knowledge of player internal state. Use `player.take_damage()`.

---

## ASSET SPRITE CONVENTIONS

- All game sprites are 16×16 pixels (from Kenney packs)
- Texture filter: **Nearest** (pixel-perfect)
- All imported PNGs use the same `import` settings
- Sprite sheets are NOT used in-scene — use individual extracted PNGs

See `game/ASSET_BIBLE.md` for the current sprite assignments and extraction formulas.
