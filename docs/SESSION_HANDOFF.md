# SESSION_HANDOFF.md — Ashen Descent / 灰烬回响

> Append-only session log. Every Claude Code session must append a filled entry before ending.
> The latest entry is at the bottom. Read the latest entry first to continue work.

---

## SESSION LOG

---

### SESSION 2026-03-24 — Phase 1.5: Documentation Foundation

**Active Milestone:** Phase 1.5 — Prototype Polish & Sustainable Development Foundation

**What was completed:**
- Created `CLAUDE.md` — entry point for all future AI sessions, enforces startup/shutdown workflow
- Created `docs/PROJECT_LOCK.md` — long-term project identity, genre, scope, non-goals, engine locks
- Created `docs/ACTIVE_MILESTONE.md` — current phase is ~1.5, v0.1 (movement/attack/dash/hurt/death) is complete
- Created `docs/ARCHITECTURE_RULES.md` — directory responsibilities, script ownership, scene separation, naming conventions
- Created `docs/TASK_BOARD.md` — concrete task list, ordered by priority, with playtest protocol
- Created `docs/SESSION_HANDOFF.md` — this file with template and first entry
- Created `docs/DECISIONS.md` — decision log for this session
- Updated `README.md` — Godot-first, /game is game runtime, /site is website, current phase noted
- Updated `docs/roadmap.md` — added clarifying note that v0.1 features are implemented, current phase is ~1.5
- Updated `DEPLOYMENT.md` — added deprecation notice: website-only deployment guide, game uses Godot export
- Updated `ASSET_CREDITS.md` (root) — replaced with redirect note pointing to `game/ASSET_CREDITS.md` as authoritative

**Exact modified files:**
- `CLAUDE.md` (created)
- `docs/PROJECT_LOCK.md` (created)
- `docs/ACTIVE_MILESTONE.md` (created)
- `docs/ARCHITECTURE_RULES.md` (created)
- `docs/TASK_BOARD.md` (created)
- `docs/SESSION_HANDOFF.md` (created)
- `docs/DECISIONS.md` (created)
- `README.md` (updated)
- `docs/roadmap.md` (updated)
- `DEPLOYMENT.md` (updated with deprecation notice)
- `ASSET_CREDITS.md` (updated with redirect)

**What was verified:**
- All files created without errors
- `game/ASSET_BIBLE.md` and `game/ASSET_CREDITS.md` confirmed as accurate — left unchanged
- `docs/project-plan.md` confirmed as accurate — left unchanged
- No gameplay code was modified

**What remains uncertain:**
- Whether the hurt feedback timing (0.12s lock, 0.55s flash) is actually readable — needs playtest
- Whether the attack timing (0.13 windup, 0.12 active) feels deliberate — needs playtest

**Next recommended step:**
1. Read `CLAUDE.md` first (as always)
2. Read `docs/ACTIVE_MILESTONE.md`
3. Read the latest SESSION_HANDOFF.md entry (this one)
4. Run `git status` to see current state
5. Proceed to **Hurt feedback readability pass** — the top item in `docs/TASK_BOARD.md`
   - Playtest: walk into contact enemy, observe feedback clarity
   - Tune `hurt_config.gd` if needed (small changes only)
   - Document changes in `docs/DECISIONS.md`
6. After hurt feedback is stable, proceed to **Attack feel readability pass**

**Copy-pastable next session startup prompt:**
```
Read CLAUDE.md, docs/ACTIVE_MILESTONE.md, and the latest entry in docs/SESSION_HANDOFF.md.
Then run git status and git log --oneline -5.
Current priority: hurt feedback readability pass (top item in docs/TASK_BOARD.md).
```

---

## SESSION LOG TEMPLATE

Copy this template for each new session:

```
---

### SESSION [DATE] — [Phase/Milestone Name]

**Active Milestone:** [From ACTIVE_MILESTONE.md]

**What was completed:**
- [Bullet list of what was done]

**Exact modified files:**
- [List of files created/updated]

**What was verified:**
- [What you tested/confirmed worked]

**What remains uncertain:**
- [Known unknowns]

**Next recommended step:**
1. [Step 1]
2. [Step 2]

**Copy-pastable next session startup prompt:**
```
Read CLAUDE.md, docs/ACTIVE_MILESTONE.md, and the latest entry in docs/SESSION_HANDOFF.md.
Then run git status and git log --oneline -5.
Current priority: [from TASK_BOARD.md].
```
```

---

## HOW TO USE THIS FILE

1. **At session start:** Read the latest entry (at the bottom) to understand where the last session left off
2. **At session end:** Append a new entry using the template above
3. **Never delete or overwrite** previous entries — this is an append-only log
4. **Keep entries factual** — what was done, what was verified, what remains uncertain

---

*Append-only log. Do not delete entries.*
