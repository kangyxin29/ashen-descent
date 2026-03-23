# Ashen Descent - Version Roadmap

Detailed roadmap for all planned versions.

---

## Version Overview

| Version | Name | Purpose |
|---------|------|---------|
| 0.1 | Preparation Build | Foundation and core systems |
| 1.0 | Minimum Playable Product | Complete core experience |
| 1.5 | Feel & Presentation Polish | Moment-to-moment refinement |
| 2.0 | Signature Feature Build | Define unique identity |
| 3.0 | Expanded Showcase Build | Content expansion (optional) |

---

## v0.1 - Preparation Build

**Status: COMPLETE (2026-03)**

**Purpose:** Establish the foundation—movement, combat skeleton, art standards, and project infrastructure.

### Completed
- Movement system (8-directional with acceleration) ✓
- Basic attack (windup, active, recovery frames) ✓
- 1 Enemy type (prototype — contact enemy, stationary) ✓
- Placeholder art standards document ✓ (see `game/ASSET_BIBLE.md`)
- Project folder structure finalized ✓
- Development standards established ✓

### Why This Matters
A stable foundation prevents costly rewrites. The team must agree on core systems before writing content. No matter how exciting the vision, a shaky base will collapse.

**Note:** As of March 2026, the project is in Phase ~1.5 (polishing the v0.1 prototype and establishing sustainable development workflow). The features above are implemented. See `docs/ACTIVE_MILESTONE.md` for current phase details.

---

## v1.0 - Minimum Playable Product

**Purpose:** Deliver the complete core experience—a full run from hub to boss to return.

### Must Have
- 3 Enemy types (fast, heavy, ranged)
- 1 Boss with distinct attack patterns
- 4-5 Room types with varied layouts
- 3 Build directions (aggressive, defensive, hybrid)
- Death/resource resolution working
- Hub return loop functional
- Basic UI (health, ember, relics)
- Complete documentation

### Optional
- Secret rooms
- Event rooms
- Altar banking system

### Why This Matters
v1.0 is the commitment: a polished, complete demo that can be shared and played start-to-finish. This is not a "preview" or "tech demo"—it's the game, ready to play.

---

## v1.5 - Feel & Presentation Polish

**Purpose:** Refine the moment-to-moment sensation. Screen shake, sound design, UI feedback, and flow adjustments.

### Must Have
- Screen shake tuned (on hit, on heavy attacks)
- Hit-stop frames on impact
- UI polish (animations, transitions, readability)
- Sound design pass (SFX for all actions)
- Balancing adjustments based on playtesting

### Optional
- Dynamic music system
- Particle effect upgrades
- Trail effects on attacks

### Why This Matters
How a game *feels* is often more important than what it *includes*. Polish is the difference between "good" and "memorable." Players will forgive limited content if every moment feels intentional.

---

## v2.0 - Signature Feature Build

**Purpose:** Introduce the defining mechanic that makes Ashen Descent unique among roguelites.

### Must Have
- Sanctuary restoration system (visible hub changes)
- Altar banking depth (strategic resource management)
- Hidden room integration (discovery rewards exploration)
- Signature relic set (defining playstyle items)

### Optional
- Elite enemy variants
- Challenge modifiers
- New boss phases

### Why This Matters
Every great roguelite has a signature hook. Dead Cells has weapon swapping. Hades has narrative progression. This version carves Ashen Descent's identity into something unforgettable.

---

## v3.0 - Expanded Showcase Build

**Purpose:** Blow out content while maintaining quality. More variety, more reasons to keep playing.

### Must Have
- Additional enemy types (5-7 total)
- More room variations (7-10 types)
- Extended build directions (5+ paths)
- New hub features (additional upgrade trees)

### Optional
- Multiple playable characters
- New biome sections (deeper sanctuary areas)
- Extended lore content

### Why This Matters
A showcase build demonstrates scope while proving the foundation scales. This is *optional ambition*—v1.0 is the priority. Only attempt v3.0 if v1.5 is polished and there's sustained interest.

---

## Version Dependencies

```
v0.1 ──┬── v1.0 ── v1.5 ── v2.0 ── v3.0 (optional)
       │                    ↑
       │                    └── Can skip to v2.0 if v1.0 is strong
       │
       └── Essential foundation (do not skip)
```

---

## Release Cadence

| Phase | Duration | Focus |
|-------|----------|-------|
| Preparation | 1 week | v0.1 |
| Core Development | 3 weeks | v1.0 |
| Polish | 2 weeks | v1.5 |
| Signature Features | 2 weeks | v2.0 |
| Expansion | Variable | v3.0 |

---

*Every death brings restoration closer.*
