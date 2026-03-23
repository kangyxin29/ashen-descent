# TASK_BOARD.md — Ashen Descent / 灰烬回响

> Concrete, executable tasks with status columns.
> Only small, safe tasks that fit in one working session.
> Updated every Claude Code session.

---

## STATUS COLUMNS

| Column | Meaning |
|--------|---------|
| **TODO** | Not started; ready to pick up |
| **IN PROGRESS** | Being worked on in current session |
| **DONE** | Completed and verified |
| **BLOCKED** | Cannot proceed; waiting on something |
| **DEFERRED** | Not in current phase; moved to later phase |

---

## CURRENT PHASE: 1.5 — Prototype Polish & Documentation Foundation

---

## TASK BOARD

### PHASE 1.5 DOCUMENTATION (this session)

#### DONE

- [x] **Create CLAUDE.md** — entry point for future sessions
- [x] **Create PROJECT_LOCK.md** — scope, identity, non-goals
- [x] **Create ACTIVE_MILESTONE.md** — current phase and objectives
- [x] **Create ARCHITECTURE_RULES.md** — directory responsibilities, ownership
- [x] **Create SESSION_HANDOFF.md** — session log with template
- [x] **Create DECISIONS.md** — record this session's decisions
- [x] **Create TASK_BOARD.md** — this file
- [x] **Update README.md** — Godot-first, /game+/site split clear
- [x] **Update roadmap.md** — note v0.1 features are complete
- [x] **Deprecate DEPLOYMENT.md** — mark as website-only
- [x] **Harmonize root ASSET_CREDITS.md** — redirect to game/ASSET_CREDITS.md

---

### PHASE 1.5 → PHASE 2 TRANSITION (near-term)

#### TODO (ordered by priority)

- [ ] **Hurt feedback readability pass** — IN PROGRESS (patch applied, pending playtest verification)
  - Goal: player clearly perceives when hit
  - Patch applied: `HURT_LOCK_DURATION 0.12s → 0.18s` in `hurt_config.gd`
  - Still uncertain: whether 0.18s is the right value, flash toggle speed (80ms), screen shake weight (5.0)
  - Verify: hit contact enemy, observe whether lock moment is perceptible
  - Next: if 0.18s feels right, mark DONE; if not, tune further in small increments

- [ ] **Attack feel readability pass**
  - Goal: windup is clearly telegraphed, active window is fair
  - Tune: windup duration, active duration, hitbox visual clarity
  - File: `game/scripts/player/player.gd`, `game/data/attack_config.gd`
  - Verify: attack training dummy, observe readability of each phase

- [ ] **Verify player state machine correctness**
  - Goal: no impossible state transitions
  - Check: all state transitions are valid, no unreachable states
  - File: `game/scripts/player/player.gd`
  - Verify: edge cases (e.g., dash during attack recovery, attack during hurt)

#### BLOCKED

- [ ] **Minimum viable enemy (simple chase AI)**
  - Blocked by: hurt feedback must be clear first (player needs to understand damage)
  - What: one enemy with simple chase behavior, can be hit and destroyed
  - Files: `scenes/enemies/`, `scripts/enemies/`, sprite from ASSET_BIBLE

- [ ] **Room spawn system**
  - Blocked by: no enemy exists to spawn
  - What: room manages enemy instantiation and cleared state

#### DEFERRED (Phase 2+)

- [ ] **Ranged enemy type** — Phase 2
- [ ] **Heavy enemy type** — Phase 2
- [ ] **Room-to-room transitions** — Phase 3
- [ ] **Boss encounter** — Phase 4
- [ ] **Hub area / Ember Altar** — Phase 3
- [ ] **Loot/reward system** — Phase 3+
- [ ] **SFX wiring** — Phase 1.6 (after feel passes, before Phase 2)
- [ ] **VFX wiring** — Phase 1.6

---

## TASK DETAIL: Hurt Feedback Readability Pass

**Why this first:** The contact enemy already exists and deals damage. The player needs to clearly understand when they are hit. Currently the hurt feedback has a 0.12s lock, 0.55s flash with 80ms toggle, and 5.0 screen shake. The question is whether these values feel clear and readable.

**Steps:**
1. Read `game/data/hurt_config.gd` — understand current values
2. Read `game/scripts/player/player.gd` — understand hurt state implementation
3. Playtest: run into contact enemy, observe feedback clarity
4. Tune values in `hurt_config.gd` if needed (small changes only)
5. Do NOT change the flash toggle logic (it works); tune durations only
6. Document any changes in `docs/DECISIONS.md`

**Success criteria:**
- Player clearly knows they were hit (not confused about whether damage occurred)
- Screen shake communicates impact weight
- Flash is noticeable but not disorienting

---

## TASK DETAIL: Attack Feel Readability Pass

**Why this second:** Attack windup/active/recovery already work. The question is whether the timing feels deliberate and readable — does the player know when the hitbox is active?

**Steps:**
1. Read `game/data/attack_config.gd` — understand current timing
2. Read `game/scripts/player/player.gd` — understand attack state implementation
3. Playtest: attack training dummy from different distances/angles
4. Tune: WINDUP (commit window), ACTIVE (damage window), RECOVERY (fair recovery)
5. Verify hitbox visual (orange windup, red active) is visible and readable
6. Document any changes in `docs/DECISIONS.md`

**Success criteria:**
- Windup is long enough to be clearly visible as a tell
- Active window is fair (player can read it)
- Recovery is long enough to be punishable but not frustrating

---

## PLAYTEST PROTOCOL

Before marking any feel pass as DONE, run these checks:

1. **Hurt test:** Walk into contact enemy. Do you clearly know you were hit?
2. **Attack test:** Attack the training dummy. Can you tell when the hitbox was active?
3. **Dash test:** Dash through contact enemy. Do i-frames clearly work?
4. **Death test:** Take lethal damage. Does respawn work correctly?
5. **State test:** Try attacking while dashing, dashing while hurt, etc. No crashes.

---

## HOW TO UPDATE THIS FILE

After each session:
1. Move completed tasks from TODO/IN PROGRESS to DONE
2. Move newly discovered blocked items to BLOCKED
3. Move tasks from future phases to DEFERRED
4. Add any new tasks discovered during work
5. Keep tasks small enough for one session

**No vague mega-tasks.** If a task is large, break it into smaller steps.
