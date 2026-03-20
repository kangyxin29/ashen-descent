# Asset Credits — Ashen Descent / 灰烬回响

This document tracks all external assets used in Ashen Descent, including their sources and license terms.

---

## Sprite Selection Rationale

After viewport testing revealed visual issues (mostly black room, poor sprite visibility), we re-selected sprites prioritizing:

1. **Readability** — sprites with higher fill ratios and good color contrast
2. **Theme compatibility** — orange/ember tones for enemies, dark tones for atmosphere
3. **Visibility at scale** — 16x16 sprites scaled up need clear silhouettes

### Selected Sprites

| Entity | Sprite File | Source Frame | Selection Reason |
|--------|-------------|--------------|-----------------|
| Player | `player_frame0.png` | Frame 0 | Light colored, 64% fill, 164 opaque pixels |
| Training Dummy | `training_dummy_frame1.png` | Frame 1 | Similar to player for comparison |
| Contact Enemy (placeholder) | `enemy_candidate_7.png` | Frame 7 | Orange tones (72%), ember-compatible |
| Floor | `floor_tile_frame0.png` | Frame 0 | Line-art stone floor from dungeon |
| Wall | `wall_tile_frame1.png` | Frame 1 | Line-art wall from dungeon |

---

## Source Whitelist (Officially Approved)

All assets in this project come exclusively from the following Kenney.nl packs.
**Do NOT add assets from any other source without approval.**

| Pack | URL | License |
|---|---|---|
| Kenney Roguelike Characters | https://kenney.nl/assets/roguelike-characters | CC0 |
| Kenney Roguelike Caves & Dungeons | https://kenney.nl/assets/roguelike-caves-dungeons | CC0 |
| Kenney UI Pack - Pixel Adventure | https://kenney.nl/assets/ui-pack-pixel-adventure | CC0 |
| Kenney Smoke Particles | https://kenney.nl/assets/smoke-particles | CC0 |
| Kenney Impact Sounds | https://kenney.nl/assets/impact-sounds | CC0 |

---

## Art Direction Lock

- **Perspective:** Soul Knight style faux-top-down / 3/4 top-down — visible full-body sprites
- **Palette:** charcoal gray, stone gray, bone white, dark metal, ember orange, muted blood red
- **Rejection rules:** No head-top-only sprites, no flat tokens, no bright cartoon colors, no mixed pixel styles
- **Attribution required:** "Assets created by Kenney.nl (kenney.nl)"

---

## Asset Manifest — Physically Present Files

### IN USE (Active)
| File | Source Pack | Used In | Analysis |
|---|---|---|---|
| `art/characters/player/player_frame0.png` | Roguelike Characters | `player.tscn` | fill=64%, 164px, light=99% |
| `art/characters/player/training_dummy_frame1.png` | Roguelike Characters | `training_dummy.tscn` | fill=64%, 164px, light=98% |
| `art/characters/player/enemy_candidate_7.png` | Roguelike Characters | `contact_enemy.tscn` | fill=37%, 95px, orange=72% |
| `art/environments/tilesets/floor_tile_frame0.png` | Roguelike Caves | `prototype_room.tscn` | floor tile |
| `art/environments/tilesets/wall_tile_frame1.png` | Roguelike Caves | `prototype_room.tscn` | wall tile |

### Alternative Sprites Available
| File | Frame | Fill | Color | Notes |
|---|---|---|---|---|
| `enemy_candidate_6.png` | 6 | 29% | gray 61% | gray enemy option |
| `enemy_candidate_8.png` | 8 | 33% | orange 68% | orange enemy option |
| `enemy_candidate_11.png` | 11 | 37% | gray 80% | gray enemy option |
| `enemy_candidate_54.png` | 54 | 64% | light 71% | row 1 variant |
| `enemy_candidate_60.png` | 60 | 23% | orange 34% | row 1 orange |
| `enemy_candidate_61.png` | 61 | 28% | orange 37% | row 1 orange |

### IMPORTED BUT NOT WIRED
| File | Source Pack | Status | Notes |
|---|---|---|---|
| `roguelike_characters_cropped.png` | Roguelike Characters | Superseded | Replaced by standalone sprites |
| `roguelikeDungeon_cropped.png` | Roguelike Caves | Superseded | Replaced by standalone sprites |
| `roguelike_characters_transparent.png` | Roguelike Characters | ORIG/REFERENCE | Source extraction only |
| `roguelikeDungeon_transparent.png` | Roguelike Caves | ORIG/REFERENCE | Source extraction only |
| `contact_enemy_frame5.png` | Roguelike Caves | Old placeholder | Replaced by character sprite |
| `ui_preview.png` | UI Pack | Not yet in scene | Pending HUD work |
| `vfx/explosion00.png` | Smoke Particles | Not yet wired | Pending Phase 1.6 |
| `vfx/flash00.png` | Smoke Particles | Not yet wired | Pending Phase 1.6 |
| `audio/sfx/impactPunch_heavy_000.ogg` | Impact Sounds | Not yet wired | Pending Phase 1.6 |
| `audio/sfx/impactSoft_heavy_000.ogg` | Impact Sounds | Not yet wired | Pending Phase 1.6 |
| `audio/sfx/impactMining_000.ogg` | Impact Sounds | Not yet wired | Pending Phase 1.6 |
| `audio/sfx/impactBell_heavy_000.ogg` | Impact Sounds | Not yet wired | Pending Phase 1.6 |

---

## Sprite Sheet Specifications (ORIGINAL SOURCE)

### Character Spritesheet — Original Source
- **File:** `_vendor/kenney/roguelike_characters/Spritesheet/roguelikeChar_transparent.png`
- **Dimensions:** 918 × 203 px (indexed color with transparency)
- **Tile size:** 16×16 px, stride = 17px (16 tile + 1px margin)
- **Grid:** 54 columns × 11 rows
- **Extraction formula:** `frame = row * 54 + col`, extract at `x = col * 17 + 1, y = row * 17 + 1`

### Dungeon Tileset — Original Source
- **File:** `_vendor/kenney/roguelike_caves_dungeons/Spritesheet/roguelikeDungeon_transparent.png`
- **Dimensions:** 492 × 305 px (RGBA format)
- **Tile size:** 16×16 px, stride = 17px (16 tile + 1px margin)
- **Grid:** 28 columns × 17 rows
- **Note:** All tiles are sparse line-art style (2-18% fill) - this is intentional

---

## Final Sprite Assignments

| Entity | Sprite File | Source Frame | Scene | Verified |
|---|---|---|---|---|
| The Vessel of Embers (player) | `player_frame0.png` | frame 0 | `player.tscn` | YES |
| Prototype room floor | `floor_tile_frame0.png` | frame 0 | `prototype_room.tscn` | YES |
| Prototype room walls | `wall_tile_frame1.png` | frame 1 | `prototype_room.tscn` | YES |
| Training dummy | `training_dummy_frame1.png` | frame 1 | `training_dummy.tscn` | YES |
| Contact enemy (placeholder) | `enemy_candidate_7.png` | frame 7 | `contact_enemy.tscn` | YES (placeholder) |
| Ashen Servitor (enemy 1) | NOT ASSIGNED | ~2 | NOT CREATED | NO |
| Incense Disciple (enemy 2) | NOT ASSIGNED | ~4 | NOT CREATED | NO |
| Chain Penitent (enemy 3) | NOT ASSIGNED | ~6 | NOT CREATED | NO |
| Cinder Candelabrum (enemy 4) | NOT ASSIGNED | ~5 | NOT CREATED | NO |
| Flamekeeper Knight (elite) | NOT ASSIGNED | ~56 | NOT CREATED | NO |
| Ashen Warden (boss) | NOT ASSIGNED | ~200+ | NOT CREATED | NO |

---

## How to Extract More Sprites

When you need to extract additional sprites from the Kenney sheets:

### Character Sheet (Index PNG)
```python
# Character sheet: 54 columns, 17px cells
# Frame N: col = N % 54, row = N / 54
# Extract at: x = col * 17 + 1, y = row * 17 + 1, size 16x16
```

### Dungeon Sheet (RGBA PNG)
```python
# Dungeon sheet: 28 columns, 17px cells
# Frame N: col = N % 28, row = N / 28
# Extract at: x = col * 17 + 1, y = row * 17 + 1, size 16x16
```

1. Identify the frame number you need
2. Calculate col and row from the frame formula
3. Extract at `(col * 17 + 1, row * 17 + 1)` with size `16x16`
4. Save as standalone PNG
5. Update scene to reference the new sprite
6. Update this document

---

## SFX Credits

All SFX are from Kenney Impact Sounds (CC0).

| File | Type | Suggested Use |
|---|---|---|
| `impactPunch_heavy_000.ogg` | Heavy impact / punch | Player attack hit |
| `impactSoft_heavy_000.ogg` | Soft thud | Enemy hurt |
| `impactMining_000.ogg` | Mining / digging | Stone breaking |
| `impactBell_heavy_000.ogg` | Bell chime | Altar / boss telegraph |

---

## Updating This File

After confirming a sprite in Godot:
1. Note the frame number and extraction coordinates
2. Extract the sprite from source using the formula
3. Update the "Sprite File" column in the Final Sprite Assignments table
4. Change "Verified" from "NO" to "YES"
5. Note any observations about visibility/quality
