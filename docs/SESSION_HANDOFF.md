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

---

### SESSION 2026-03-24 (continued) — Phase 1.5: Hurt Feedback Patch

**Active Milestone:** Phase 1.5 — Prototype Polish & Sustainable Development Foundation

**What was completed:**
- Hurt feedback readability patch: `HURT_LOCK_DURATION` increased from `0.12s` to `0.18s` in `game/data/hurt_config.gd`
- This extends the movement-freeze moment when hit, making the damage register more clearly
- One-line change, no structural modifications

**Exact modified files:**
- `game/data/hurt_config.gd` — `HURT_LOCK_DURATION: 0.12 → 0.18`

**What was verified:**
- Change is isolated to one tunable constant
- No other hurt feedback logic was touched
- No changes to flash timing, screen shake, or invulnerability window

**What remains uncertain:**
- Whether 0.18s is the right value — needs playtest to confirm it reads as impactful but not sluggish
- Flash toggle interval (80ms, 7 flashes in 0.55s) may still be too fast — may need tuning in a future session
- Screen shake weight (5.0) may need separate tuning pass

**Next recommended step:**
1. Playtest the hurt feedback: walk into a contact enemy, observe whether the lock moment is now more perceptible
2. If 0.18s feels right, mark hurt feedback readability as DONE in TASK_BOARD.md
3. If it feels too long or too short, adjust `HURT_LOCK_DURATION` in small increments (0.15 or 0.20)
4. After hurt feedback is stable, proceed to **Attack feel readability pass**

**Copy-pastable next session startup prompt:**
```
Read CLAUDE.md, docs/ACTIVE_MILESTONE.md, and the latest entry in docs/SESSION_HANDOFF.md.
Then run git status and git log --oneline -5.
Current priority: verify hurt feedback readability patch (HURT_LOCK_DURATION=0.18s).
If it feels right, mark DONE in TASK_BOARD.md and proceed to attack feel pass.
```

---

### SESSION 2026-03-24 (GitHub sync) — Phase 1.5: Documentation Truth & GitHub Clarity

**Active Milestone:** Phase 1.5 — Prototype Polish & Sustainable Development Foundation

**What was completed:**
- Final doc truth audit: all docs verified consistent, no conflicts found
- Created `docs/DOCUMENT_INDEX.md` — GitHub-facing doc index explaining every repo document and external context file
- Updated `README.md` — added "Documentation Guide" section linking to DOCUMENT_INDEX.md, clarified how development docs work
- External context files documented in DOCUMENT_INDEX.md: 总指令2.0.docx, continue prompt - Ashen Descent.docx, Ashen_Descent_第一阶段现状总结_交接文档.pdf (二创Rogue.txt not found in repo — noted in doc)
- Verified: docs/project-plan.md is accurate (Godot 4.6, PC target, /game+/site split) — no outdated browser references found
- All docs confirmed mutually consistent

**Exact modified files:**
- `docs/DOCUMENT_INDEX.md` (created)
- `README.md` (updated — added Documentation Guide section)

**What was verified:**
- No contradictory planning docs remain
- No browser/HTML5/runtime assumptions anywhere in active docs
- Root ASSET_CREDITS.md correctly redirects to game/ASSET_CREDITS.md
- DEPLOYMENT.md correctly marked deprecated
- /site was not touched
- No gameplay code was touched

**What remains uncertain:**
- Whether 二创Rogue.txt exists (referenced in project but not found in repo) — the policy it encodes is correctly in PROJECT_LOCK.md regardless
- No remaining doc conflicts identified

**Next recommended step:**
1. Read CLAUDE.md, docs/ACTIVE_MILESTONE.md, latest SESSION_HANDOFF.md entry
2. Run `git status` and `git log --oneline -5`
3. Proceed to playtest/verify the hurt feedback patch (HURT_LOCK_DURATION=0.18s)
4. If confirmed readable, mark hurt feedback DONE and proceed to attack feel pass

**Copy-pastable next session startup prompt:**
```
Read CLAUDE.md, docs/ACTIVE_MILESTONE.md, and the latest entry in docs/SESSION_HANDOFF.md.
Then run git status and git log --oneline -5.
Current priority: verify hurt feedback patch (HURT_LOCK_DURATION=0.18s).
If confirmed, mark DONE in TASK_BOARD.md and proceed to attack feel readability pass.
```

---

*Append-only log. Do not delete entries.*
