# Ashen Descent / 灰烬回响

**A Dark Fantasy Action Roguelite — Built with Godot 4.6**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Project Status: Active Development — Phase 1.5

The game is in early playable prototype state. Current focus is prototype polish and establishing a sustainable development workflow.

**What works:** 8-directional movement, attack (windup/active/recovery), dash with i-frames, hurt/death/respawn, prototype room with floor and walls, test targets (training dummy, contact enemy).

**What's next:** Hurt feedback readability, attack feel readability, minimum viable enemy.

---

## Repository Layout

```
ashen-descent/
│
├── game/                   # Godot 4.x project (ACTUAL GAME RUNTIME)
│   ├── project.godot       # Engine configuration
│   ├── scenes/             # Scene files (.tscn)
│   ├── scripts/            # GDScript files (.gd)
│   ├── data/               # Config files (tunable values)
│   └── assets/             # Sprites, audio, Kenney asset packs
│
├── site/                   # Promotional website only (NOT game runtime)
│   ├── index.html          # Open this for website preview
│   ├── styles.css
│   ├── script.js
│   └── site-content/       # EN/ZH text content
│
├── docs/                   # Game development documentation
├── CLAUDE.md               # AI session entry point (READ THIS FIRST)
└── [other root files]
```

### Important: `/game` is the game, `/site` is the website

- **`/game`** — Open in Godot 4.6 to play the game. This is the gameplay runtime.
- **`/site`** — Static promotional website. No game logic. Pure HTML/CSS/JS.

---

## Controls

| Action | Key |
|--------|-----|
| Move | WASD / Arrow keys |
| Attack | Z / Space |
| Dash | Shift |

Run into the orange enemies to test hurt feedback. Attack the training dummy to test hitbox.

---

## Development Documentation

| File | Purpose |
|------|---------|
| [CLAUDE.md](CLAUDE.md) | **Entry point for AI sessions — read this first** |
| [docs/PROJECT_LOCK.md](docs/PROJECT_LOCK.md) | Project identity, scope, non-goals |
| [docs/ACTIVE_MILESTONE.md](docs/ACTIVE_MILESTONE.md) | Current phase and objectives |
| [docs/ARCHITECTURE_RULES.md](docs/ARCHITECTURE_RULES.md) | Directory structure, script ownership |
| [docs/TASK_BOARD.md](docs/TASK_BOARD.md) | Concrete task list |
| [docs/SESSION_HANDOFF.md](docs/SESSION_HANDOFF.md) | Session continuity log |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Decision history with rationale |
| [docs/roadmap.md](docs/roadmap.md) | Version milestones |
| [docs/project-plan.md](docs/project-plan.md) | Full game specification |
| [game/ASSET_BIBLE.md](game/ASSET_BIBLE.md) | Sprite assignments, import settings |
| [game/ASSET_CREDITS.md](game/ASSET_CREDITS.md) | Authoritative asset license tracking |

---

## Current Development Phase: ~1.5

See [docs/ACTIVE_MILESTONE.md](docs/ACTIVE_MILESTONE.md) for full details.

**Phase 1 (Foundation) — COMPLETE:**
- Movement, attack, dash, hurt/death/respawn, prototype room

**Phase 1.5 (Current) — Polish & Documentation:**
- Hurt feedback readability, attack feel, documentation system

**Phase 2 (Next) — Minimum viable enemy:**
- One enemy with simple AI, room spawn system

---

## Playing the Game

1. Open Godot 4.6
2. Import or open the `game/` directory as a Godot project
3. Press F5 to run (main scene: `scenes/main.tscn`)

The game opens in a prototype room with a training dummy and two contact enemies.

---

## Playing the Website

```bash
cd ashen-descent/site
python3 -m http.server 8000
```
Then open: http://localhost:8000

---

## Development Status

| Version | Status | Description |
|---------|--------|-------------|
| v0.1 | **Complete** | Foundation: movement, attack, dash, hurt, prototype room |
| v1.0 | Planned | Complete playable demo: enemy types, boss, room loop, hub |
| v1.5 | Planned | Feel & presentation polish |
| v2.0 | Planned | Signature features |
| v3.0 | Optional | Content expansion |

---

## Asset Credits

All game assets are from Kenney.nl packs (CC0/public domain).
**Authoritative source:** [game/ASSET_CREDITS.md](game/ASSET_CREDITS.md)

---

*Every death brings restoration closer.*
