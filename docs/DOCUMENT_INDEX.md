# DOCUMENT_INDEX.md — Ashen Descent / 灰烬回响

> **Start here for understanding this repository.**
> This index explains every important document in the repo: what it is, who reads it, and when.
> Also explains the role of external context files that live at the repo root.

---

## GITHUB VISITORS START HERE

This is a **Godot 4.6 game project** with a promotional website. The gameplay code lives in `/game`. The website lives in `/site`.

**Quick summary:**
- The game is a dark fantasy action roguelite in early prototype state
- The `/game` directory is the actual Godot runtime — open in Godot 4.6 to play
- The `/site` directory is the static promotional website — not the game
- Documentation for development is in `/docs`

**If you want to understand the project:** Read this index, then `README.md`, then `docs/roadmap.md`.

**If you want to work on the game:** Read `CLAUDE.md` first.

---

## OPERATIONAL DOCS (Day-to-Day Development)

These are the living documents that govern how the project is worked on.

| File | Purpose | Who Reads It |
|------|---------|-------------|
| [CLAUDE.md](../CLAUDE.md) | **Entry point for AI sessions.** Session start/stop workflow, truth priority order, forbidden actions, how to choose the next safe task. **Read this before every Claude Code session.** | AI sessions, developers |
| [docs/ACTIVE_MILESTONE.md](./ACTIVE_MILESTONE.md) | **Current phase.** What phase the project is in, what's being worked on right now, what is blocked. Updated every session. | AI sessions, developers |
| [docs/TASK_BOARD.md](./TASK_BOARD.md) | **Concrete task list.** Small, executable tasks with status columns (TODO / IN PROGRESS / DONE / BLOCKED / DEFERRED). Updated every session. | AI sessions, developers |
| [docs/SESSION_HANDOFF.md](./SESSION_HANDOFF.md) | **Session continuity log.** Append-only record of what was done in each session. Latest entry is at the bottom. | AI sessions, developers |
| [docs/DECISIONS.md](./DECISIONS.md) | **Decision log.** Architectural decisions with rationale and date. New entries added at top. | AI sessions, developers |

---

## PROJECT FOUNDATION DOCS (Stable Reference)

These rarely change. They lock the project's identity, scope, and architecture.

| File | Purpose | Who Reads It |
|------|---------|-------------|
| [docs/PROJECT_LOCK.md](./PROJECT_LOCK.md) | **Project identity lock.** Genre, engine (Godot 4.6), scope boundaries, non-goals, phase gates. | Everyone |
| [docs/ARCHITECTURE_RULES.md](./ARCHITECTURE_RULES.md) | **How the codebase is organized.** Directory responsibilities, script ownership, naming conventions, data-driven principles, how to add new systems safely. | Developers |
| [docs/roadmap.md](./roadmap.md) | **Version milestones.** v0.1 → v3.0 with what's in each version. v0.1 is complete. | Everyone |
| [docs/project-plan.md](./project-plan.md) | **Full game specification.** Core loop, death design, technical spec, scope, art strategy, success criteria. | Designers, developers |

---

## ASSET DOCS

| File | Purpose | Who Reads It |
|------|---------|-------------|
| [game/ASSET_BIBLE.md](../game/ASSET_BIBLE.md) | **Sprite assignments and import settings.** Which sprites are wired to which scenes, extraction formulas, what is still placeholder. | Artists, developers |
| [game/ASSET_CREDITS.md](../game/ASSET_CREDITS.md) | **Authoritative asset source tracking.** Which Kenney packs are used, license terms, what's imported and wired. | Everyone |

---

## WEBSITE DOCS

| File | Purpose |
|------|---------|
| [site/index.html](../site/index.html) | Promotional website. Pure HTML/CSS/JS. Not the game. |
| [docs/content-guide.md](./content-guide.md) | How to edit website text content (EN/ZH JSON files). |

---

## OTHER ROOT-LEVEL FILES

| File | Purpose |
|------|---------|
| [README.md](../README.md) | Project overview, controls, how to play, links to all docs. Start here. |
| [DEPLOYMENT.md](../DEPLOYMENT.md) | **Deprecated.** Was website-only deployment guide. Game uses Godot export. |
| [ASSET_CREDITS.md](../ASSET_CREDITS.md) | **Deprecated.** Redirects to `game/ASSET_CREDITS.md` as authoritative. |
| [ARCHITECTURE.md](../ARCHITECTURE.md) | Quick reference for `/game` vs `/site` split and Godot conventions. |

---

## EXTERNAL CONTEXT FILES

These files live at the repo root. They are high-level context and collaboration reference files, not operational development documents. The markdown docs above are the primary source of truth for day-to-day development.

---

### 总指令2.0.docx

**Role:** Higher-level project operating rules.

**Contents cover:**
- Scope control and forbidden moves
- Art/asset integration constraints
- Milestone logic
- Long-term project direction lock

**How to use it:** Reference for project-wide rules and constraints. The markdown docs in `/docs/` encode the operational equivalent of these rules in machine-readable form.

**Status:** External context / collaboration reference. Not the primary day-to-day source of truth.

---

### continue prompt - Ashen Descent.docx

**Role:** Claude Code continuation protocol and AI session rules.

**Contents cover:**
- Source-of-truth priority order
- Preflight truth check before editing
- Phase lock and game-first iteration lock
- `/site` frozen by default rule
- Safe patch workflow

**How to use it:** This file influenced the design of `CLAUDE.md`. If `CLAUDE.md` and this file conflict, `CLAUDE.md` reflects the current operational decision. This file is the historical source of the workflow rules.

**Status:** External context / collaboration protocol reference. The markdown docs are the primary operational layer.

---

### Ashen_Descent_第一阶段现状总结_交接文档.pdf

**Role:** Phase 1 completion judgment and Phase 1.5 transition handoff.

**Contents cover:**
- Phase 1 completion status (movement, attack, dash, hurt, prototype room)
- Godot 4.6 baseline confirmation
- /game + /site split confirmation
- Current working prototype status
- Recommended next-step order

**How to use it:** Historical record of Phase 1 → Phase 1.5 transition. The markdown docs reflect the current operational state that grew out of this handoff.

**Status:** External context / handoff history. Superseded as a working reference by the markdown docs but kept for historical context.

---

### 二创Rogue.txt

**Role:** Rationale for using an external Unity roguelike project as design reference only.

**Contents cover:**
- External Unity project is inspiration/design reference only
- Not a migration target
- Not an active runtime architecture in this repo

**How to use it:** Documents that the project uses an external Unity repo as a design reference. The non-negotiable locks in `PROJECT_LOCK.md` encode this rule in machine-readable form.

**Status:** External context / design rationale reference. The rule itself is encoded in `docs/PROJECT_LOCK.md`.

**Note:** This file was referenced but not confirmed present in the repo at time of writing. If absent, the policy still applies via `PROJECT_LOCK.md`.

---

## HOW THE DOCS FIT TOGETHER

```
You are here (GitHub visitor)
    ↓
README.md — overall summary
    ↓
This file (DOCUMENT_INDEX.md) — find what you need
    ↓
┌─────────────────────────────────────────┐
│ AI sessions / active development:       │
│   CLAUDE.md → ACTIVE_MILESTONE.md →    │
│   SESSION_HANDOFF.md (latest entry) →  │
│   TASK_BOARD.md                        │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ Project foundations (stable):          │
│   PROJECT_LOCK.md → ARCHITECTURE_RULES │
│   roadmap.md → project-plan.md         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ Assets:                                 │
│   game/ASSET_BIBLE.md + ASSET_CREDITS  │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ External context (historical):          │
│   总指令2.0.docx                        │
│   continue prompt - Ashen Descent.docx │
│   Ashen_Descent_第一阶段现状总结_交接文档.pdf│
│   二创Rogue.txt (if present)           │
└─────────────────────────────────────────┘
```

---

## VERSION TRUTH TABLE

| What | Where |
|------|-------|
| Current phase | `docs/ACTIVE_MILESTONE.md` |
| Current tasks | `docs/TASK_BOARD.md` |
| Latest session | `docs/SESSION_HANDOFF.md` (latest entry) |
| Next action | `docs/SESSION_HANDOFF.md` (latest entry "Next recommended step") |
| Phase gate rules | `docs/PROJECT_LOCK.md` |
| All decisions | `docs/DECISIONS.md` |

---

*Every death brings restoration closer.*
