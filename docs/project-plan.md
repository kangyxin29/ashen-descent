# Ashen Descent - Project Plan

**Version:** 1.0
**Last Updated:** March 2026
**Status:** In Preparation

---

## 1. Project Overview

### 1.1 Summary

- **Title:** Ashen Descent
- **Type:** Dark pixel-art top-down action roguelite
- **Theme:** Broken Sanctuary / Ember Temple
- **Positioning:** Light soulslike atmosphere with scoped ambition
- **Duration:** 8-week development cycle targeting complete v1.0

### 1.2 Core Pillars

1. **Complete the loop first** - Every system serves the core run-loop before expansion
2. **Death should hurt, not kill** - Painful enough to matter, forgiving enough to continue
3. **Pacing over scale** - Every room intentional, not sprawling
4. **Unified art direction** - Consistency with open-source assets
5. **Ship v1.0 finished** - Quality over quantity

---

## 2. Game Design

### 2.1 Core Loop

```
Start Run → Enter Randomized Rooms → Fight → Choose Reward → Build Evolves
→ Reach Boss → Die or Prevail → Resolve Resources → Return to Hub → Start Again
```

### 2.2 Player Experience

- Player awakens at the Ember Altar repeatedly
- Each run enters a shifting sanctuary rift
- Relics, embers, and fragments are gathered
- Death destroys most unpurified gains
- Permanent restoration progress remains
- The sanctuary can be gradually repaired

### 2.3 Death Design (Critical)

**Lost on Death:**
- Run-specific relics and temporary build pieces
- Unpurified ember currency collected during the run
- All consumables and one-time-use items
- Progress toward current room or boss

**Preserved on Death:**
- Permanent hub upgrades and sanctuary restoration progress
- Small ember reserve (banked at altar before descent)
- Character level and intrinsic stat growth
- Unlocked relic blueprints for future runs

**Design Intent:** Death feels like a setback, not a catastrophe. Player thinks "one more run to recover" not "why bother."

---

## 3. Technical Specification

### 3.1 Technology

- **Engine:** Godot 4.x (desktop, PC-only target)
- **Language:** GDScript (primary), Godot Shaders (visual effects)
- **Build target:** PC executable (export template)
- **Repository:** Single repo with two sibling folders
  - `/game` = Godot project (runtime game code, scenes, assets)
  - `/site` = Static promotional website (bilingual EN/ZH)

### 3.2 Architecture

```
ashen-descent/
├── game/                    # Godot 4.x project (game runtime)
│   ├── project.godot        # Engine configuration
│   ├── scenes/              # Scene (.tscn) files
│   ├── scripts/              # GDScript (.gd) files
│   ├── data/                 # Config/data files (tunables)
│   └── assets/               # Game-specific assets
│
├── site/                    # Static promotional website
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── site-content/
│
├── docs/                    # Project documentation
├── DEPLOYMENT.md            # Website deployment guide
└── ASSET_CREDITS.md         # Asset license tracking
```

---

## 4. Scope Definition

### 4.1 MVP (v1.0) Requirements

- [ ] 1 playable character with full move set
- [ ] 3 enemy types (fast, heavy, ranged)
- [ ] 1 boss with multi-phase encounters
- [ ] 4-5 room types with different layouts
- [ ] 3 build directions (aggressive, defensive, hybrid)
- [ ] 1 hub area (Ember Altar)
- [ ] Readable UI (health, ember count, relic effects)
- [ ] Death/resource resolution system
- [ ] 1 complete run loop (hub → rift → boss → return → hub)

### 4.2 Future Scope (Optional)

- [ ] Secret/hidden rooms
- [ ] Event rooms
- [ ] Altar banking depth
- [ ] Resonance system
- [ ] Additional enemy types
- [ ] Multiple playable characters
- [ ] Extended lore content

---

## 5. Art Strategy

### 5.1 Constraints

- No dedicated artist on team
- Must use open-source/reusable assets
- Limited to 2-3 consistent asset packs
- Must maintain visual cohesion

### 5.2 Requirements

- Tile size: 16x16 or 32x32 pixels
- Color palette: Dark fantasy with ember accents
- All assets documented with licenses
- Unified perspective and lighting

### 5.3 Sources

All assets must come from:
- CC0 licensed packs
- Permissive CC licenses
- Explicitly reusable game art packs

Document all sources in `ASSET_CREDITS.md`.

---

## 6. 8-Week Timeline

| Week | Focus | Key Deliverables |
|------|-------|------------------|
| 1 | Foundation | Standards, folder structure, engine, movement base |
| 2 | Combat Systems | Enemies, HP, UI, combat rooms |
| 3 | Procedural Structure | Room randomization, reward system, build prototypes |
| 4 | Full Loop | Boss, death resolution, hub return, v1.0 complete |
| 5 | Hub & Meta | Hub progression, meta resources |
| 6 | Polish | Screen shake, hit-stop, sound, flow |
| 7 | Content Expansion | Hidden rooms, events, altar banking |
| 8 | Final Push | Bug fixes, balancing, presentation |

---

## 7. Success Criteria

### 7.1 v1.0 is Complete When

1. Player can complete a full run from hub to boss to return
2. Death resolution correctly separates temporary vs permanent gains
3. At least 3 build paths are viable
4. UI is readable and consistent
5. Game feels polished and intentional
6. Documentation is complete

### 7.2 Quality Standards

- No critical bugs blocking progression
- Consistent visual style throughout
- Controls feel responsive and deliberate
- Death penalty creates tension without causing frustration
- Game loop is satisfying even on failure

---

## 8. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep | Delay or incomplete product | Strict adherence to MVP checklist |
| Asset inconsistency | Poor visual cohesion | Limit to 2-3 sources, strict style guide |
| Burnout | Abandoned project | Realistic 8-week timeline, sustainable pace |
| Technical blockers | Cannot deliver features | Buffer time in weeks 3-4 |

---

## 9. Future Considerations

- Multiple playable characters
- Extended biome areas
- Dynamic music system
- Leaderboard/seed sharing
- Mobile/touch controls
- Controller support

---

*Every death brings restoration closer.*
