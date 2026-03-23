# PROJECT_LOCK.md — Ashen Descent / 灰烬回响

> Long-term project identity, scope boundaries, and non-goals.
> This document should rarely change. It locks what the project IS and IS NOT.

---

## PROJECT IDENTITY

**Title:** Ashen Descent / 灰烬回响
**Genre:** Dark fantasy action roguelite (top-down, pixel-art)
**Engine:** Godot 4.6 (GDScript, PC export only)
**Setting:** Broken Sanctuary / Ember Temple — player descends into ruins, collects relics, fights guardians, restores what was lost

**Core Fantasy:** "Every death brings restoration closer." Death is a setback, not a catastrophe. The sanctuary can be gradually repaired across runs.

---

## REPO STRUCTURE LOCK

```
ashen-descent/           ← repository root
├── game/               ← Godot 4.x project (THE GAME RUNTIME)
│   ├── project.godot   ← engine config (edit to add scenes, input, display)
│   ├── scenes/         ← .tscn scene files
│   ├── scripts/        ← .gd GDScript files
│   ├── data/           ← config/constants (tunable values only)
│   └── assets/         ← game sprites, audio, tilesets
│
├── site/               ← Static promotional website (NOT game runtime)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── site-content/
│       ├── en.json
│       └── zh.json
│
├── docs/               ← Game design docs, roadmap, content guide
├── CLAUDE.md           ← AI session entry point (for Claude Code)
└── [root-level files]  ← README, ASSET_CREDITS (redirect), DEPLOYMENT (deprecated)
```

**Rule:** `/game` is always the gameplay runtime. `/site` never contains game logic. No exceptions.

---

## SCOPE BOUNDARIES

### In Scope (What We Are Building)
- 1 playable character with full move set (move, attack, dash, hurt, death, respawn)
- 3 enemy types (fast, heavy, ranged) — minimum viable enemy loop
- 1 boss with distinct attack patterns
- 4-5 room types with varied layouts
- 3 build directions (aggressive, defensive, hybrid)
- Death/resource resolution (temporary vs permanent gains)
- Hub area (Ember Altar)
- Readable UI (health, ember count, relic effects)
- 1 complete run loop (hub → rift → boss → return → hub)

### Out of Scope (Non-Goals)
- Web/HTML5 game (website is promotional only)
- Unity or any engine other than Godot 4.6
- Mobile or touch controls
- Controller support in v1.0
- Multiple playable characters
- Extended biome areas beyond the sanctuary
- Dynamic music system
- Leaderboard or seed sharing
- Multiplayer
- Open-world design

---

## ENGINE CONSTRAINTS

- **Godot 4.6 only.** Do not migrate to other engines.
- **PC export only** for v1.0. No web, no mobile.
- **No Unity runtime** exists in this repository.
  - External Unity projects may exist as design references only.
  - They are not to be merged, ported directly, or treated as active repo architecture.
- **Kenney.nl asset ecosystem** — all game assets from approved Kenney packs (CC0 or Kenney EULA).
  - No assets from unapproved sources.
  - All assets documented in `game/ASSET_CREDITS.md`.

---

## ART DIRECTION LOCK

- **Perspective:** Soul Knight style faux-top-down / 3/4 top-down — visible full-body sprites
- **Palette:** charcoal gray, stone gray, bone white, dark metal, ember orange, muted blood red
- **Rejection rules:**
  - No head-top-only sprites
  - No flat tokens
  - No bright cartoon colors
  - No mixed pixel styles
- **Tile size:** 16×16 or 32×32 pixels
- **Attribution:** "Assets created by Kenney.nl (kenney.nl)"

---

## DEVELOPMENT CONSTRAINTS

- **Readability over flashy complexity** in early phases
- **Small safe patches** over sweeping refactors
- **Completion of small loops** over giant unfinished systems
- **Data-driven design:** all tunable values (speeds, damages, cooldowns, etc.) live in `/game/data/` config files — not scattered through code
- **Scene ownership:** each `.tscn` scene has exactly one owning script; cross-scene logic goes through well-defined interfaces
- **No God-object architecture:** do not create manager nodes that know too much; keep systems modular

---

## PHASE BOUNDARIES

| Phase | Focus | Gate |
|-------|-------|------|
| Phase 1 | Foundation | Movement, attack, dash, hurt, prototype room |
| Phase 1.5 | Polish & readability | Hurt feedback, attack feel, prototype polish |
| Phase 2 | Minimum viable enemy | 1+ functional enemy with AI, room damage |
| Phase 3 | Room loop | Room progression, enemy spawning |
| Phase 4 | Boss | 1 boss encounter |
| Phase 5+ | Content expansion | v1.0 completion, then optional expansion |

**Current phase: Phase 1.5** — prototype polish and sustainable workflow establishment.

**Rule:** Do not start Phase 2 work until Phase 1.5 polish is stable. Do not start Phase 4 (boss) until Phase 3 (room loop) is functional.

---

## RULES FOR FUTURE CHANGES

1. Any new system added must have a clear owner (which script/node is responsible)
2. Any new tunable value must be added to the appropriate config file in `/game/data/`
3. Any new asset must be documented in `game/ASSET_CREDITS.md` before use
4. Any new scene must follow the naming conventions in `docs/ARCHITECTURE_RULES.md`
5. Any architectural decision must be recorded in `docs/DECISIONS.md` with rationale and date

---

*Locked: do not change without explicit project-wide review.*
