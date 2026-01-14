---
name: arc
description: Complete development lifecycle from vision to shipped code. Covers ideation, design, implementation, testing, and production readiness.
---

# Arc

The full arc from idea to shipped code.

## Command Hierarchy

```
WHY     /vision     - High-level goals (500-700 words)
          ↓
WHAT    /ideate     - Socratic exploration → PRD
          ↓
HOW     /detail     - Detailed implementation plan
          ↓
DO      /implement  - Execute the plan with TDD
        /design     - UI/UX design with wireframes
        /build      - Quick build (no formal plan)
        /test       - Test strategy and execution
        /letsgo     - Production readiness checklist
        /deslop     - Remove LLM artifacts

CROSS-CUTTING
        /tasklist   - Persistent task backlog
        /document   - Feature documentation
        /suggest    - Opinionated next-step recommendations
```

## Primary Flow

The main entry point is `/ideate`, which can flow all the way through:

```
/ideate → /detail → /implement
```

Each step asks if the user wants to continue to the next. The user can also enter at any point:
- Have a design doc already? Start at `/detail`
- Have an implementation plan? Start at `/implement`

## Quick Reference

| Command | When to use | Output location |
|---------|-------------|-----------------|
| /vision | Starting a new project | `docs/vision.md` |
| /ideate | Turn idea into design | `docs/plans/YYYY-MM-DD-<feature>.md` |
| /detail | Create implementation plan | `docs/plans/YYYY-MM-DD-<feature>-impl.md` |
| /implement | Execute a plan | Code changes |
| /design | UI/UX work | Wireframes + code |
| /build | Quick implementation | Code changes |
| /test | Test strategy | Test files |
| /letsgo | Ship to production | Deployment |
| /deslop | Clean LLM artifacts | Code cleanup |
| /tasklist | Manage backlog | `docs/tasklist.md` |
| /document | Document features | `docs/features/<feature>.md` |
| /suggest | What to work on next | Recommendations |

## Routing

Commands are handled by workflows in `workflows/`:

| Command | Workflow |
|---------|----------|
| /vision | `workflows/vision.md` |
| /ideate | `workflows/ideate.md` |
| /detail | `workflows/detail.md` |
| /implement | `workflows/implement.md` |
| /design | `workflows/design.md` |
| /build | `workflows/build.md` |
| /test | `workflows/test.md` |
| /letsgo | `workflows/letsgo.md` |
| /deslop | `workflows/deslop.md` |
| /tasklist | `workflows/tasklist.md` |
| /document | `workflows/document.md` |
| /suggest | `workflows/suggest.md` |

Supporting workflows:
- `workflows/expert-review.md` - Parallel expert review
- `workflows/quick-validation.md` - Fast sanity check

## Essential Principles

**Review is woven throughout, not bolted on at the end.**
Design incrementally → Validate each section → Review findings inform next section

**Reviewers advise, the user decides.**
Present reviewer input as recommendations. The user knows their domain.

**One question at a time.**
Don't overwhelm. Prefer multiple choice when possible.

**YAGNI where appropriate.**
Suggest simplifications, but don't force them.

**TDD for implementation.**
Write tests first, then make them pass. See `disciplines/test-driven-development.md`.

## Reviewer Selection

Select reviewers based on detected project type. Use local agent definitions in `agents/review/`.

**Daniel's projects (detected by `@materia/` imports or `.ruler/` directory):**
- `agents/review/daniel-reviewer.md`
- `agents/review/code-simplicity-reviewer.md`

**TypeScript/React projects:**
- `agents/review/daniel-reviewer.md`
- `agents/review/senior-reviewer.md`
- `agents/review/architecture-strategist.md`

**Next.js projects:**
- `agents/review/lee-nextjs-reviewer.md`
- `agents/review/daniel-reviewer.md`
- `agents/review/senior-reviewer.md`

**Python projects:**
- `agents/review/senior-reviewer.md`
- `agents/review/performance-oracle.md`
- `agents/review/architecture-strategist.md`

**General/Unknown:**
- `agents/review/senior-reviewer.md`
- `agents/review/architecture-strategist.md`
- `agents/review/code-simplicity-reviewer.md`

**Specialized agents:**
- `agents/review/security-sentinel.md` — Security audits
- `agents/review/data-integrity-guardian.md` — Database/migration reviews
- `agents/research/git-history-analyzer.md` — Git archaeology
- `agents/design/figma-implement.md` — Implement UI from Figma designs
- `agents/workflow/spec-flow-analyzer.md` — Spec analysis

## Directory Structure

```
skills/arc/
├── SKILL.md              # This file - routing and principles
├── workflows/            # Command implementations
│   ├── vision.md
│   ├── ideate.md
│   ├── detail.md
│   ├── implement.md
│   ├── design.md
│   ├── figma.md
│   ├── build.md
│   ├── test.md
│   ├── letsgo.md
│   ├── deslop.md
│   ├── tasklist.md
│   ├── document.md
│   ├── suggest.md
│   ├── expert-review.md
│   └── quick-validation.md
├── agents/               # Specialized reviewers and researchers
│   ├── review/
│   ├── research/
│   ├── design/
│   └── workflow/
├── disciplines/          # Implementation methodologies
│   ├── test-driven-development.md
│   ├── systematic-debugging.md
│   ├── verification-before-completion.md
│   └── ...
├── references/           # Domain knowledge
│   ├── design-phases.md
│   ├── testing-patterns.md
│   ├── task-granularity.md
│   └── ...
└── templates/            # Output templates
```

## Interop

Commands work together:

- `/suggest` reads `/tasklist`, codebase, and `/vision` (priority cascade)
- `/ideate` can flow to `/detail` → `/implement`
- `/build` suggests `/ideate` if scope is too large
- `/letsgo` runs `/test` and `/deslop` as part of quality checks
- `/implement` follows `disciplines/test-driven-development.md`
- Any command can add to `/tasklist`

## Knowledge Loop

```
vision → ideate → detail → implement → encounter problem → solve → document
   ↑                                                                   |
   └───────────────────────────────────────────────────────────────────┘
                    informs future design sessions
```

When starting `/ideate`, episodic-memory searches `docs/` to surface past learnings.
