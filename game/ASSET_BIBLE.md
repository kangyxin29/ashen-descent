# ASSET_BIBLE — Ashen Descent / 灰烬回响
## Art Pipeline & Placeholder-to-Final Mapping

> Last updated: after sprite selection pass
> **All paths below refer to files physically present in the repo.**

---

## Sprite Selection Summary

### What Was Changed
After analyzing the Kenney spritesheets, we selected better sprites based on:
- Fill ratio (more opaque pixels = better visibility)
- Color compatibility with ember/dark theme
- Readability at game scale

### Selection Rationale

| Entity | Selected Sprite | Source Frame | Why This Choice |
|--------|----------------|--------------|-----------------|
| Player | `player_frame0.png` | Frame 0 | Light colored (99% light), high fill (64%), 164 opaque pixels - good visibility |
| Training Dummy | `training_dummy_frame1.png` | Frame 1 | Similar to player, provides comparison |
| Contact Enemy (placeholder) | `enemy_candidate_7.png` | Frame 7 (row 0) | Orange tones (72%), 95 opaque pixels - ember-themed enemy |
| Floor Tile | `floor_tile_frame0.png` | Frame 0 (row 0) | Line-art stone floor from dungeon sheet |
| Wall Tile | `wall_tile_frame1.png` | Frame 1 (row 0) | Line-art wall from dungeon sheet |

### Dungeon Tileset Note
The Kenney dungeon tileset is designed for top-down roguelike games with **sparse, line-art style tiles**. All tiles have low fill ratios (typically 2-18% opaque pixels). This is intentional - the transparency creates the "underground" void effect. The floor and wall tiles are correct for the style.

---

## Folder Structure (current state)

```
/game/assets/
  _vendor/                          ← original Kenney source zips (do not modify)
    kenney/
      roguelike_characters/           ← roguelike_characters zip extracted here
      roguelike_caves_dungeons/       ← roguelike_caves_dungeons zip extracted here
      ui_pack_pixel_adventure/        ← ui_pack_pixel_adventure zip extracted here
      smoke_particles/                ← smoke_particles zip extracted here
      impact_sounds/                  ← impact_sounds zip extracted here
  art/                              ← curated in-game assets
    characters/
      player/
        player_frame0.png              ← IN USE (player sprite)
        training_dummy_frame1.png      ← IN USE (training dummy sprite)
        enemy_candidate_7.png          ← IN USE (contact enemy placeholder)
        enemy_candidate_6.png          ← AVAILABLE (enemy option)
        enemy_candidate_8.png         ← AVAILABLE (enemy option)
        roguelike_characters_cropped.png ← IMPORTED BUT NOT WIRED (superseded)
        roguelike_characters_transparent.png ← ORIG/REFERENCE only
    environments/
      tilesets/
        floor_tile_frame0.png          ← IN USE (prototype room floor)
        wall_tile_frame1.png          ← IN USE (prototype room walls)
        contact_enemy_frame5.png      ← IMPORTED BUT NOT WIRED (old placeholder)
        roguelikeDungeon_cropped.png   ← IMPORTED BUT NOT WIRED (superseded)
        roguelikeDungeon_transparent.png ← ORIG/REFERENCE only
    ui/
      ui_preview.png                  ← IMPORTED BUT NOT WIRED
    vfx/
      (VFX files pending Phase 1.6)
  audio/sfx/
    (SFX files pending Phase 1.6)
```

---

## Sprite Sheet Specifications (ORIGINAL SOURCE)

### Character Spritesheet (SOURCE — for reference only)
- **File:** `_vendor/kenney/roguelike_characters/Spritesheet/roguelikeChar_transparent.png`
- **Dimensions:** 918 × 203 pixels
- **Tile size:** 16 × 16 pixels, stride = 17px (16 tile + 1px margin)
- **Grid:** 54 columns × 11 rows
- **Extraction formula:** `frame = row * 54 + col`, extract at `x = col * 17 + 1, y = row * 17 + 1`

### Dungeon Tileset (SOURCE — for reference only)
- **File:** `_vendor/kenney/roguelike_caves_dungeons/Spritesheet/roguelikeDungeon_transparent.png`
- **Dimensions:** 492 × 305 pixels (RGBA format)
- **Tile size:** 16 × 16 pixels, stride = 17px (16 tile + 1px margin)
- **Grid:** 28 columns × 17 rows
- **Extraction formula:** `frame = row * 28 + col`, extract at `x = col * 17 + 1, y = row * 17 + 1`

---

## Curated Asset Assignments — ACTIVE

### Player — The Vessel of Embers
- **Extracted file:** `res://assets/art/characters/player/player_frame0.png`
- **Scene:** `scenes/player/player.tscn` → Sprite2D node
- **Sprite dimensions:** 16 × 16 pixels
- **Texture filter:** nearest (pixel-perfect, already set)
- **Analysis:** fill=64%, 164 opaque pixels, 99% light colored - good visibility

### Prototype Room — Stone Sanctuary
- **Floor file:** `res://assets/art/environments/tilesets/floor_tile_frame0.png`
- **Wall file:** `res://assets/art/environments/tilesets/wall_tile_frame1.png`
- **Scene:** `scenes/room/prototype_room.tscn`
- **Rendering approach:** Repeated tiling via `texture_repeat = ENABLED`
  - Floor: single Sprite2D, centered=false, scale=Vector2(800,600), repeats 16x16 tile seamlessly
  - Walls: each wall Sprite2D uses centered=false, scale matches collision shape, texture repeats
- **Why this approach:** Stretched single tiles amplified transparency gaps. Repeated tiling fills the room with visible floor pattern.
- **Floor:** scale `Vector2(50, 37.5)` — covers 800×600 room
- **Walls:** scale `Vector2(50, 1)` for top/bottom, `Vector2(1, 37.5)` for left/right
- **Note:** Dungeon tileset is sparse line-art style - this is correct for top-down roguelike aesthetic

### Training Dummy
- **Extracted file:** `res://assets/art/characters/player/training_dummy_frame1.png`
- **Scene:** `scenes/debug/training_dummy.tscn` → Sprite2D
- **Sprite dimensions:** 16 × 16 pixels

### Contact Enemy (Cinder Candelabrum) — PLACEHOLDER
- **Extracted file:** `res://assets/art/characters/player/enemy_candidate_7.png`
- **Scene:** `scenes/debug/contact_enemy.tscn` → Sprite2D
- **Analysis:** fill=37%, 95 opaque pixels, 72% orange - ember-themed
- **Note:** This is a PLACEHOLDER - correct enemy sprite not yet assigned

---

## Alternative Sprites Available

The following sprites were extracted during analysis and are available for future use:

### Character Alternatives
| File | Frame | Fill | Color Profile |
|------|-------|------|--------------|
| `enemy_candidate_6.png` | 6 | 29% | gray 61% |
| `enemy_candidate_7.png` | 7 | 37% | orange 72% (IN USE) |
| `enemy_candidate_8.png` | 8 | 33% | orange 68% |
| `enemy_candidate_11.png` | 11 | 37% | gray 80% |

### Dungeon Tiles
All dungeon tiles have low fill (2-18%). Higher fill doesn't necessarily mean better - sparse tiles are correct for the style.

---

## Import Settings Checklist (Godot)

When Godot imports the new standalone PNG files, verify in the Import dock:

- [ ] **Filter:** `Nearest` (NOT Linear) — for pixel-art sharpness
- [ ] **Mipmaps:** `Off` — prevents blur at distance
- [ ] **Canvas Items Texture** (in project settings) — already set to `Nearest`
- [ ] **Compress Mode:** `Lossless` or `Uncompressed` preferred for pixel art

---

## Remaining TODOs

| Item | Status | Next Action |
|---|---|---|
| Player sprite | VERIFIED | Frame 0 selected - good visibility |
| Training Dummy | VERIFIED | Frame 1 selected |
| Contact Enemy | PLACEHOLDER | Using character sprite - needs proper enemy art |
| Enemy scenes | NOT CREATED | Create enemy scenes + extract proper sprites |
| Elite scene | NOT CREATED | Create elite scene + extract proper sprites |
| Boss scene | NOT CREATED | Create boss scene + extract proper sprites |
| SFX wiring | DEFERRED | Phase 1.6 — add AudioStreamPlayer nodes |
| VFX wiring | DEFERRED | Phase 1.6 — add AnimatedSprite2D |
| Proper HUD UI | DEFERRED | Create HUD scene from UI pack elements |

---

## What Was Changed in This Session

### Sprite selection (better visibility):
- **Player:** `player_frame0.png` - light colored, 64% fill, good visibility
- **Training Dummy:** `training_dummy_frame1.png` - same style as player
- **Contact Enemy:** `enemy_candidate_7.png` - orange/ember tones, 37% fill
- **Floor:** `floor_tile_frame0.png` - line-art stone floor
- **Wall:** `wall_tile_frame1.png` - line-art wall

### Scene files modified:
- `scenes/debug/contact_enemy.tscn` — now uses `enemy_candidate_7.png` (character sprite)

### Documentation updated:
- ASSET_BIBLE.md — updated sprite selections and rationale
- ASSET_CREDITS.md — updated sprite assignments
