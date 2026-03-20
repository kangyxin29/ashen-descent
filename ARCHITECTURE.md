# Ashen Descent — Architecture Reference

**Purpose:** Quick reference for the `/game` vs `/site` split and Godot 4.x project conventions.
**Audience:** All developers on the team.

---

## Repository Layout

```
ashen-descent/          ← Repository root
├── game/               ← Godot 4.x project (THE GAME)
│   ├── project.godot   ← Engine config (edit this to add scenes, input, display)
│   ├── scenes/         ← .tscn scene files
│   ├── scripts/        ← .gd GDScript files
│   ├── data/           ← Config/constants (tunable values, not hidden magic numbers)
│   ├── assets/         ← Game sprites, audio, tilesets
│   └── icon.svg
│
├── site/               ← Static promotional website (NOT game runtime)
│   ├── index.html
│   ├── styles.css
│   ├── script.js       ← Pure website JS (no game logic)
│   └── site-content/
│       ├── en.json
│       └── zh.json
│
├── docs/               ← Game design docs, roadmap, content guide
├── DEPLOYMENT.md       ← Website deployment (GitHub Pages)
└── ASSET_CREDITS.md    ← Asset license tracking
```

---

## Key Rules

1. **Game logic belongs in `/game/` only.** The website (`/site/`) must never run game code.
2. **Website files never go into `/game/` game runtime.** Static assets that need sharing (logos, key art) can live in `/site/assets/` and be referenced read-only.
3. **Godot uses GDScript.** All gameplay code is `.gd` files attached to `.tscn` scenes.
4. **Data-driven design.** Combat tunables (player speed, dash cooldown, enemy HP, damage values) go in `data/` config files or exported constants — not scattered through code.
5. **PC keyboard only.** No controller support in v1.0.
6. **Do not invent content outside 1.0 scope without team consensus.**

---

## Godot Project Conventions

### Scene structure
- `scenes/main.tscn` — Entry point (set in project.godot as `run/main_scene`)
- `scenes/player/` — Player character and related nodes
- `scenes/enemies/` — Enemy scenes
- `scenes/rooms/` — Room/dungeon scenes
- `scenes/ui/` — HUD, menus

### Script naming
- `scripts/player.gd` — Player controller
- `scripts/enemy.gd` — Base enemy class
- `scripts/room.gd` — Room logic
- `scripts/data/` — `player_stats.gd`, `enemy_stats.gd`, `balance_constants.gd`

### Input
All input is declared in `project.godot` under `[input]`. Use `Input.get_action_strength()` for 8-directional movement.

---

## Website vs. Game

| | `/site/` | `/game/` |
|---|---|---|
| Purpose | Promotional/info | Game runtime |
| Tech | HTML/CSS/JS | Godot 4.x / GDScript |
| Entry | `index.html` | `project.godot` |
| Lives on | GitHub Pages | Exported PC build |
| Has game logic? | No | Yes |

---

## Next Milestone

See `docs/roadmap.md` for v0.1 (Preparation Build) goals:
- Movement system (8-directional with acceleration)
- Basic attack (windup, active, recovery frames)
- Placeholder art standards

See `docs/project-plan.md` for full v1.0 scope.

---

*Every death brings restoration closer.*
