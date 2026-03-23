# CLAUDE.md — Ashen Descent / 灰烬回响

> **This is the entry point for every Claude Code session.**
> Read this file first. Do not skip. Do not assume.

---

## REPO TRUTH PRIORITY ORDER

When in doubt, follow this order of precedence:

1. **`CLAUDE.md`** (this file) — session start/stop rules, constraints
2. **`docs/PROJECT_LOCK.md`** — project identity, scope boundaries, non-goals
3. **`docs/ACTIVE_MILESTONE.md`** — current phase, what to work on, what to avoid
4. **`docs/SESSION_HANDOFF.md`** — latest session log; pick up where last session left off
5. **`game/` source code** — actual GDScript and scenes; ground truth over prose
6. **`docs/ARCHITECTURE_RULES.md`** — directory responsibilities, script ownership
7. **`game/ASSET_BIBLE.md`** — sprite assignments, import settings, what's wired
8. **`game/ASSET_CREDITS.md`** — authoritative asset source tracking
9. Other `docs/` files — roadmap, project-plan, content-guide

---

## MANDATORY STARTUP WORKFLOW

Every future Claude Code session must:

1. Read `CLAUDE.md` (this file)
2. Read `docs/PROJECT_LOCK.md`
3. Read `docs/ACTIVE_MILESTONE.md`
4. Read the latest entry in `docs/SESSION_HANDOFF.md`
5. Run `git log --oneline -5` and `git status` to see recent changes and current state
6. Inspect the modified files from the last session (listed in SESSION_HANDOFF.md)
7. Propose the smallest safe next patch before editing anything

---

## ENGINE & STRUCTURE LOCKS

- **Engine:** Godot 4.6 only. Do not suggest or implement engine migration.
- **Repo structure:** `/game` + `/site` is fixed.
  - `/game` = Godot 4.x project (gameplay runtime)
  - `/site` = static promotional website (HTML/CSS/JS, no game logic)
- **No Unity.** No Unity runtime exists in this repo. External Unity projects may be used as design reference only — not to be merged, ported, or treated as active architecture.
- **Do not replace working systems** unless there is a concrete reason.
- **No large-scale scope creep.** Small safe patches > sweeping refactors.
- **No boss/content expansion** until the minimum viable enemy and room loop exist.

---

## CURRENT DEVELOPMENT PHILOSOPHY

- Readability > flashy complexity
- Completion of small loops > giant unfinished systems
- Consistency > feature sprawl
- Small safe patches > sweeping refactors
- Maintainability and AI-maintainability are first-class concerns

**Current stage:** ~Phase 1.5 — prototype polish and sustainable development workflow

---

## MANDATORY SHUTDOWN / HANDOFF WORKFLOW

Before ending every session, you MUST:

1. Append a filled-in entry to `docs/SESSION_HANDOFF.md`
2. Update `docs/TASK_BOARD.md` to reflect completed/in-progress/deferred tasks
3. If a gameplay change was made, update `docs/ACTIVE_MILESTONE.md` if milestone status changed
4. Commit the documentation changes before ending

**Handoff entry must include:**
- Date and active milestone
- What was completed
- Exact modified files
- What was verified
- What remains uncertain
- Next recommended step
- A copy-pastable "next session" startup prompt

---

## HOW TO CHOOSE THE NEXT TASK SAFELY

1. Check `docs/ACTIVE_MILESTONE.md` — work only in the current milestone's scope
2. Check `docs/TASK_BOARD.md` — pick the topmost TODO item
3. If no TODO items, check `docs/SESSION_HANDOFF.md` for the last recommended step
4. If uncertain, ask the user before proceeding
5. Prefer `attack readability / feel` and `hurt feedback readability` as safe early patches

**Forbidden without explicit user approval:**
- Adding enemy AI beyond minimal contact damage
- Adding room progression or procedural generation
- Adding boss encounters
- Adding loot/reward systems
- Rewriting the combat system
- Adding new scenes that require new sprites not yet assigned
- Modifying `project.godot` input bindings

---

## WHAT THIS PROJECT IS

- Dark fantasy pixel-art top-down action roguelite
- Godot 4.6, GDScript, PC export target
- 8-directional movement, deliberate combat, ember/dark theme
- Kenney.nl CC0 asset ecosystem (roguelike characters, dungeons, UI, particles, sounds)
- Single-player, single character ("Vessel of Embers")

## WHAT THIS PROJECT IS NOT

- Web/HTML5 game (the website is promotional only)
- Unity project
- Mobile game
- Multiplayer
- Open-world
- A complete shipped product (currently a prototype)

---

*Every death brings restoration closer.*
