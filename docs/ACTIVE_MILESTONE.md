# ACTIVE_MILESTONE.md — Ashen Descent / 灰烬回响

> Current project phase, objective, success criteria, and blocked items.
> Updated at the start of each Claude Code session.

---

## CURRENT PHASE

**Phase 1.5 — Prototype Polish & Sustainable Development Foundation**

**Started:** March 2026 (this session)
**Previous phase:** Phase 1 (Foundation) — movement, attack, dash, hurt, death, prototype room — **COMPLETE**

**Phase 1 was completed when:**
- Player can move in 8 directions with acceleration/friction
- Attack has distinct windup → active → recovery → cooldown phases
- Dash has invincibility frames and cooldown
- Hurt state has brief lock + invulnerability window with red/white flash
- Death and respawn work
- Prototype room with tiled floor and boundary walls exists
- Training dummy and contact enemies exist as test targets

---

## CURRENT OBJECTIVE

Establish a durable documentation and workflow foundation so that every future Claude Code session can:
1. Read the current state accurately without guessing
2. Pick up work immediately from where the last session left off
3. Make safe, small, incremental changes

**Specifically this session (Phase 1.5):**
- Create all missing documentation (CLAUDE.md, PROJECT_LOCK, ARCHITECTURE_RULES, etc.)
- Align README and roadmap with current reality
- Deprecate conflicting/outdated docs (DEPLOYMENT.md, root ASSET_CREDITS.md)
- Establish task board and session handoff system
- THEN: optionally make ONE smallest safe gameplay patch

---

## SUCCESS CRITERIA FOR PHASE 1.5

- [x] CLAUDE.md created and enforces startup/shutdown workflow
- [x] PROJECT_LOCK.md created and scope boundaries clear
- [x] ARCHITECTURE_RULES.md created with directory responsibilities
- [x] TASK_BOARD.md created with concrete next actions
- [x] SESSION_HANDOFF.md created with template and first entry
- [x] DECISIONS.md created with Phase 1.5 decisions logged
- [x] README.md updated — Godot-first, /game+/site split clear
- [x] roadmap.md updated — v0.1 completion noted
- [x] DEPLOYMENT.md marked as website-only / deprecated
- [x] Root ASSET_CREDITS.md harmonized with game/ASSET_CREDITS.md
- [ ] **Optional:** One smallest safe gameplay patch (hurt feedback OR attack readability)

---

## BLOCKED / DEFERRED ITEMS

The following are explicitly **NOT YET** in scope:

| Item | Blocker | Ready for |
|------|---------|----------|
| Minimum viable enemy AI | No enemy scene exists beyond contact damage | Phase 2 |
| Room progression loop | No room manager, no spawn system | Phase 3 |
| Boss encounter | No boss scene, no boss AI | Phase 4 |
| Loot/reward system | No reward entities, no build system | Phase 3+ |
| Hub area | No hub scene, no ember altar | Phase 3 |
| Multiple enemy types | Only contact_enemy (stationary) exists | Phase 2 |
| SFX wiring | AudioStreamPlayer nodes not in scenes | Phase 1.6 |
| VFX wiring | AnimatedSprite2D for particles not in scenes | Phase 1.6 |
| UI scene (HUD) | No HUD scene; debug label only | Phase 2 |

---

## NEAR-TERM DEVELOPMENT PRIORITIES (Phase 1.5 continuation → Phase 2)

In priority order:

1. **Hurt feedback readability** — refine the hurt flash timing, lock duration feel, screen shake weight
2. **Attack readability / feel** — tune windup/active/recovery timing for better readability
3. **Minimum viable formal enemy** — one enemy with simple AI (patrol or chase) that can be damaged and destroyed
4. **Room progression loop** — basic room-to-room transition, enemy spawning

---

## WHAT ABSOLUTELY SHOULD NOT BE WORKED ON YET

- Boss encounters (no boss scene, no boss AI, no boss sprites)
- Multiple enemy types beyond the first minimum viable enemy
- Loot/reward/relic systems
- Procedural room generation at scale
- Hub area / meta progression
- SFX/VFX wiring (these can be prepared but not blocking)
- Any system that requires a new sprite not yet assigned in ASSET_BIBLE.md

---

## PHASE GATE CHECKLIST

Before advancing from Phase 1.5 to Phase 2, verify:

- [ ] Hurt feedback is readable: player clearly knows when they are hit
- [ ] Attack feel is deliberate: windup is visible, active window is clear, recovery is fair
- [ ] Dash feel is responsive: i-frames are obvious, cooldown is sensible
- [ ] Debug tools confirm all state transitions work correctly
- [ ] Documentation is stable: future sessions can continue without confusion
- [ ] At least one test target (training dummy or enemy) confirms hitbox works

---

*Current phase: 1.5 | Next phase: 2 (minimum viable enemy)*
