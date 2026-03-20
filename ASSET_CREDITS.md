# Asset Credits — Ashen Descent / 灰烬回响

This document tracks all external assets used in Ashen Descent, including their sources and license terms.

---

## Principles

1. **Only use assets with permissive licenses** (CC0, permissive CC, or explicitly reusable)
2. **Limit sources to the locked Kenney ecosystem** for visual cohesion
3. **Document everything** with original license terms
4. **Consistency over variety** — unified dark pixel-art style matters more than diverse sources
5. **No fake paths** — only list assets that are physically present in the repo

---

## Locked Art Direction

- Primary ecosystem: Kenney.nl public domain assets
- All assets below are covered by the Kenney EULA (royalty-free, credit appreciated)
- Art direction: dark pixel-art with ember-orange accents
- Perspective: Soul Knight style faux-top-down / 3/4 top-down — visible full-body characters

---

## Officially Approved Asset Packs

### 1. Kenney Roguelike Characters
- **URL:** https://kenney.nl/assets/roguelike-characters
- **License:** CC0 (public domain)
- **Contains:** Player, enemy, elite, boss base sprites
- **Used for:** Player (Vessel of Embers), all 4 normal enemies, elite (Flamekeeper Knight), boss (Ashen Warden)
- **Selection rule:** Only humanoid sprites with full-body presentation — reject head-top-only sprites

### 2. Kenney Roguelike Dungeons
- **URL:** https://kenney.nl/assets/roguelike-dungeons
- **License:** CC0 (public domain)
- **Contains:** Dungeon tiles, walls, floors, props
- **Used for:** Room environments (hub, combat, elite, rest, boss rooms), environmental props

### 3. Kenney UI Pack - Pixel Adventure
- **URL:** https://kenney.nl/assets/ui-pack-pixel-adventure
- **License:** CC0 (public domain)
- **Contains:** HUD elements, menu panels, buttons, bars
- **Used for:** HP bar, dash cooldown, attack feedback, boss HP bar, reward panel, death panel

### 4. Kenney Smoke Particles
- **URL:** https://kenney.nl/assets/smoke-particles
- **License:** CC0 (public domain)
- **Contains:** Ash, smoke, fire, impact particle sprites
- **Used for:** Ember trails, attack hit bursts, enemy death dissolve, boss ash explosion, ambient floating embers

### 5. Kenney Impact Sounds (if SFX needed)
- **URL:** https://kenney.nl/assets/impact-sounds
- **License:** CC0 (public domain)
- **Contains:** Pixel-style impact SFX
- **Used for:** Attack hit sounds, hurt feedback, dash whoosh, enemy death

---

## Asset Manifest (as physically imported)

| Asset File | Pack | Status | Purpose |
|---|---|---|---|
| `res://assets/player_placeholder.png` | (generated) | **IN USE** — PLACEHOLDER | Player sprite placeholder |
| `res://assets/roguelike_characters.png` | Roguelike Characters | **NOT IMPORTED** | Final player + enemies + elite + boss |
| `res://assets/roguelike_dungeons.png` | Roguelike Dungeons | **NOT IMPORTED** | Room tiles + props |
| `res://assets/ui_pack.png` | UI Pack Pixel Adventure | **NOT IMPORTED** | HUD + menu UI |
| `res://assets/smoke_particles.png` | Smoke Particles | **NOT IMPORTED** | Particle effects |

---

## Final Sprite Assignment (when assets arrive)

| Entity | Sprite Source | Animation Frames Needed |
|---|---|---|
| The Vessel of Embers (player) | `roguelike_characters.png` — TBD humanoid | idle, walk, attack, hurt, death |
| Ashen Servitor (enemy 1) | `roguelike_characters.png` — TBD | idle, move, melee attack, hurt, death |
| Incense Disciple (enemy 2) | `roguelike_characters.png` — TBD | idle, move, ranged attack, hurt, death |
| Chain Penitent (enemy 3) | `roguelike_characters.png` — TBD | idle, charge windup, charge, hurt, death |
| Cinder Candelabrum (enemy 4) | `roguelike_dungeons.png` — candelier + smoke | proximity hazard, hurt, death |
| Flamekeeper Knight (elite) | `roguelike_characters.png` — TBD bulky | same as enemy + elite rage mode |
| Ashen Warden (boss) | `roguelike_characters.png` — TBD largest | all states + boss-only attacks |

---

## How to Add Assets

When importing new Kenney assets:

1. Download from the official Kenney.nl URL above
2. Place the `.png` sprite sheet in `res://assets/`
3. Create a `.import` file or let Godot auto-import
4. Update this manifest table
5. Update `ASSET_BIBLE.md` sprite assignment section
6. Recalibrate hitbox sizes in the relevant `.tscn` file

### Style Check (mandatory before import)
- [ ] Sprite shows full body, not head-top-only
- [ ] Color palette matches dark ember theme (no bright cartoon colors)
- [ ] Consistent pixel density with other imported assets
- [ ] Readable facing direction in 8-directional combat

---

## License Reference

| License | Commercial Use | Modification | Attribution Required |
|---------|---------------|--------------|----------------------|
| CC0 / Public Domain | Yes — unlimited | Yes — unlimited | No (but appreciated) |
| Kenney EULA | Yes — royalty-free | Yes | Yes (credit Kenney.nl) |

> All Kenney assets used in this project are CC0 / public domain.
> Credit line: "Assets created by Kenney.nl (kenney.nl)"

---

## Updating This File

Whenever a new asset pack is imported, add a row to the Asset Manifest table above.
Format: `| filename.png | Pack Name | IN USE / NOT IMPORTED | purpose`
