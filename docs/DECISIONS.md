# DECISIONS.md — Ashen Descent / 灰烬回响

> Architectural and workflow decisions, with rationale, date, and why-not-alternative.
> An append-only decision log. New decisions are added at the top.

---

## DECISION LOG

---

### DECISION-001 — Phase 1.5 Documentation Foundation

**Date:** 2026-03-24
**Status:** DECIDED

**Decision:** Create a comprehensive documentation foundation for future AI session continuity. The repo truth audit revealed that the project had accurate `game/ASSET_BIBLE.md` and `game/ASSET_CREDITS.md` but was missing all project management, workflow, and session continuity documentation.

**Rationale:**
- Future Claude Code sessions cannot reliably continue work without an entry point and truth hierarchy
- The absence of CLAUDE.md, SESSION_HANDOFF.md, and TASK_BOARD.md meant every session started from scratch
- Multiple conflicting documents existed (root ASSET_CREDITS.md vs game/ASSET_CREDITS.md, DEPLOYMENT.md with wrong structure)

**What was decided:**
1. Create `CLAUDE.md` at repo root as mandatory entry point
2. Create `docs/PROJECT_LOCK.md`, `docs/ACTIVE_MILESTONE.md`, `docs/ARCHITECTURE_RULES.md`, `docs/TASK_BOARD.md`, `docs/SESSION_HANDOFF.md`, `docs/DECISIONS.md`
3. Update README.md to be Godot-first
4. Update roadmap.md to reflect current phase
5. Deprecate DEPLOYMENT.md (website-only, wrong structure)
6. Redirect root ASSET_CREDITS.md to game/ASSET_CREDITS.md

**Why not the alternative:**
- Alternative: only create a CLAUDE.md without the supporting docs — rejected because a single file cannot cover project identity, task state, and handoff simultaneously
- Alternative: update existing documents without creating new ones — rejected because PROJECT_LOCK.md, ACTIVE_MILESTONE.md, TASK_BOARD.md, SESSION_HANDOFF.md, DECISIONS.md address distinct concerns that didn't exist at all

---

### DECISION-002 — Phase Label: Phase 1.5

**Date:** 2026-03-24
**Status:** DECIDED

**Decision:** Label the current phase as ~Phase 1.5 — prototype polish and sustainable workflow establishment.

**Rationale:**
- Phase 1 (foundation: movement, attack, dash, hurt, death, prototype room) is complete
- The project is not yet in Phase 2 (minimum viable enemy) because no enemy with real AI exists
- Phase 1.5 is a transitional polish phase between foundation and enemy work
- This matches the user's description: "Phase 1.5 = polish prototype readability"

**Why not Phase 2 immediately:**
- No enemy with AI exists beyond stationary contact damage
- Room progression loop does not exist
- It would be premature to claim Phase 2 before hurt feedback and attack feel are verified

**Why not stay in Phase 1:**
- The foundation features (movement, attack, dash, hurt, death) work correctly
- Phase 1 is complete by any reasonable definition
- Starting Phase 2 without polishing feel would make later refactoring harder

---

### DECISION-003 — Config Files in /game/data/ for All Tunables

**Date:** 2026-03-24 (retroactive codification)
**Status:** LOCKED

**Decision:** All tunable values (speeds, damages, durations, cooldowns, etc.) must live in `/game/data/` config files as constants, not scattered through scripts.

**Rationale:**
- Already established pattern in existing code: `movement_config.gd`, `attack_config.gd`, `dash_config.gd`, `hurt_config.gd`
- Makes tuning faster — change one number, see immediate effect
- Reduces risk of inconsistent values across the codebase
- Future AI sessions can understand the tuning surface area at a glance

**Why not hardcode in scripts:**
- Magic numbers make tuning difficult and error-prone
- Inconsistent values across files (e.g., two scripts using different speed values)
- Harder for AI to understand what to tune

---

### DECISION-004 — Script Ownership: Player Owns Player State, Enemies Own Enemy State

**Date:** 2026-03-24 (retroactive codification)
**Status:** LOCKED

**Decision:** Player script (`player.gd`) owns player state machine, health, hurt/death/respawn. Each enemy script owns its own AI, health, and death. Room owns room state. No central manager node.

**Rationale:**
- Already the pattern in existing code: `contact_enemy.gd` calls `player.take_damage()`, player guards its own state
- Low coupling: player doesn't know about enemies, enemies don't know about each other
- Testing is easier: each component can be tested in isolation

**Why not a central GameManager:**
- God-object anti-pattern: one node that knows everything becomes a maintenance burden
- AI sessions would need to understand the full game state to modify anything
- Easier to add new enemy types when they don't share a manager

---

### DECISION-005 — No Gameplay Patches Until Documentation is Complete

**Date:** 2026-03-24
**Status:** DECIDED

**Decision:** This session (Phase 1.5) will not modify gameplay code until documentation foundation is established.

**Rationale:**
- The session's primary goal is sustainable development foundation
- Jumping to gameplay patches before truth alignment creates inconsistent docs
- After docs are complete, the first gameplay patch will be hurt feedback readability

**Why this order:**
- Documentation enables future sessions to continue reliably
- A hurt feedback patch without docs would leave the next session without context
- Documentation first is the correct priority for a foundation-building session

---

## HOW TO ADD A DECISION

1. Copy the template below
2. Fill in all fields (Date, Status, Decision, Rationale, Why not alternative)
3. Add it at the TOP of the DECISION LOG section (newest first)
4. Do not delete or modify previous decisions

**Decision template:**
```
### DECISION-[N] — [Short Title]

**Date:** YYYY-MM-DD
**Status:** DECIDED | DEPRECATED | SUPERSEDED

**Decision:** [What was decided]

**Rationale:** [Why this was chosen]

**Why not the alternative:** [What was rejected and why]
```

---

## STATUS DEFINITIONS

| Status | Meaning |
|--------|---------|
| DECIDED | Active decision, currently in effect |
| DEPRECATED | No longer best practice but kept for historical reference |
| SUPERSEDED | Replaced by a later decision |

---

*Append-only log. Do not delete or overwrite decisions.*
