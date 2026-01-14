---
name: ideate
description: Turn ideas into validated designs through collaborative dialogue with built-in expert review. Use before any creative work - features, components, refactors.
---

<essential_principles>
**Review is woven throughout, not bolted on at the end.**

Traditional workflow: Design everything → Review → Fix problems
This workflow: Design incrementally → Validate each section → Review findings inform next section

**Reviewers advise, the user decides.** Reviewers often suggest cutting features they see as unnecessary. Present their input as recommendations. The user knows their domain - they decide what to keep.

**One question at a time.** Don't overwhelm. Prefer multiple choice when possible.

**YAGNI where appropriate.** Suggest simplifications, but don't force them. The user may have context you don't.

**Incremental validation.** Present design in 200-300 word sections. Check each before continuing.
</essential_principles>

<intake>
What would you like to do?

1. **Start fresh** - Turn an idea into a validated design
2. **Create implementation plan** - Turn a design doc into TDD tasks
3. **Execute plan** - Implement a plan with checkpoints
4. **Review existing plan** - Have experts review a completed plan
5. **Quick validation** - Sanity-check an approach before diving in
6. **Document solution** - Capture a solved problem for future reference

**Wait for response before proceeding.**
</intake>

<routing>
| Response | Workflow |
|----------|----------|
| 1, "start", "new", "fresh", "idea" | `workflows/full-design.md` |
| 2, "implementation", "tasks", "tdd" | `workflows/create-implementation-plan.md` |
| 3, "execute", "implement", "build" | `workflows/execute.md` |
| 4, "review", "existing", "plan" | `workflows/expert-review.md` |
| 5, "quick", "sanity", "validate", "check" | `workflows/quick-validation.md` |
| 6, "document", "compound", "solved", "fixed" | `workflows/compound.md` |

**Intent-based routing (if user provides clear intent without selecting menu):**
- User describes a feature/idea → `workflows/full-design.md`
- User has a design doc, wants implementation plan → `workflows/create-implementation-plan.md`
- User has implementation plan, wants to execute → `workflows/execute.md`
- User shares a plan file for review → `workflows/expert-review.md`
- User asks "is this approach okay?" → `workflows/quick-validation.md`
- User says "that worked", "it's fixed", "problem solved" → `workflows/compound.md`

**After reading the workflow, follow it exactly.**
</routing>

<reviewer_selection>
Select reviewers based on detected project type. Use local agent definitions in `agents/review/`.

**Daniel's projects (detected by `@materia/` imports or `.ruler/` directory):**
- `agents/review/daniel-reviewer.md`
- `agents/review/code-simplicity-reviewer.md`

**TypeScript/React projects:**
- `agents/review/daniel-reviewer.md` (if Daniel's project, else kieran)
- `agents/review/kieran-typescript-reviewer.md`
- `agents/review/architecture-strategist.md`

**Rails projects:**
- `agents/review/dhh-rails-reviewer.md`
- `agents/review/kieran-rails-reviewer.md`
- `agents/review/code-simplicity-reviewer.md`

**Python projects:**
- `agents/review/kieran-python-reviewer.md`
- `agents/review/performance-oracle.md`
- `agents/review/code-simplicity-reviewer.md`

**General/Unknown:**
- `agents/review/architecture-strategist.md`
- `agents/review/pattern-recognition-specialist.md`
- `agents/review/code-simplicity-reviewer.md`

**Other specialized agents:**
- `agents/review/security-sentinel.md` — Security audits
- `agents/review/data-integrity-guardian.md` — Database/migration reviews
- `agents/research/git-history-analyzer.md` — Git archaeology

Detect project type by checking for: `.ruler/` or `@materia/` (Daniel's), `Gemfile` (Rails), `package.json` with React/TypeScript (TS), `pyproject.toml`/`requirements.txt` (Python).
</reviewer_selection>

<reference_index>
All domain knowledge in `references/`:

**Design:**
- [design-phases.md](references/design-phases.md) - Understanding → exploration → design → review → finalize
- [review-patterns.md](references/review-patterns.md) - Socratic review, collaborative simplification
- [ascii-ui-patterns.md](references/ascii-ui-patterns.md) - UI wireframe patterns and examples
- [design skill](../../design/SKILL.md) - Aesthetic direction, typography, anti-generic-AI principles

**Implementation:**
- [testing-patterns.md](references/testing-patterns.md) - Vitest, Playwright, TDD cycle
- [task-granularity.md](references/task-granularity.md) - Bite-sized tasks, commit patterns
- [model-strategy.md](references/model-strategy.md) - Haiku/sonnet/opus allocation for agents

**Knowledge capture:**
- [solution-schema.md](references/solution-schema.md) - YAML frontmatter, problem types, severity levels
</reference_index>

<workflows_index>
| Workflow | Purpose |
|----------|---------|
| full-design.md | Idea → validated design with ASCII wireframes |
| create-implementation-plan.md | Design → TDD tasks with exact code |
| execute.md | Implementation with checkpoints + TS/lint |
| expert-review.md | Parallel expert review of existing plan |
| quick-validation.md | Fast sanity check on approach |
| compound.md | Capture solved problems as searchable docs |
</workflows_index>

<knowledge_loop>
**The full cycle:**

```
ideate (design) → implement → encounter problem → solve → compound (document)
       ↑                                                        |
       └────────────────────────────────────────────────────────┘
                    informs future design sessions
```

When starting ideate, episodic-memory searches `docs/solutions/` to surface past learnings.
</knowledge_loop>
