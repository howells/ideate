# Arc

The full arc from idea to shipped code.

## What It Does

Arc provides 12 commands covering the complete development lifecycle:

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

## Key Principles

- **Review is woven throughout, not bolted on at the end** — Each design section gets micro-reviewed before moving on
- **Reviewers advise, the user decides** — Suggestions are presented as questions, not mandates
- **One question at a time** — Never overwhelm with multiple questions
- **YAGNI where appropriate** — Simplifications suggested, but user has final say
- **TDD mandatory** — Tests first, implementation second
- **Frontend-design integrated** — Bold aesthetic direction, not generic AI slop

## Installation

```bash
claude plugins add github:howells/arc
```

## Usage

```bash
# Start with vision (optional)
/vision

# Main entry point - design and plan
/ideate add user authentication with magic links

# Quick build (no formal planning)
/build add a logout button

# What should I work on next?
/suggest

# Ready to ship?
/letsgo
```

## Primary Flow

The main entry point is `/ideate`, which can flow all the way through:

```
/ideate → /detail → /implement
```

Each step asks if you want to continue. You can also enter at any point:
- Have a design doc already? Start at `/detail`
- Have an implementation plan? Start at `/implement`

## Commands

| Command | When to use | Output |
|---------|-------------|--------|
| `/vision` | Starting a new project | `docs/vision.md` |
| `/ideate` | Turn idea into design | `docs/plans/YYYY-MM-DD-<feature>.md` |
| `/detail` | Create implementation plan | `docs/plans/YYYY-MM-DD-<feature>-impl.md` |
| `/implement` | Execute a plan | Code changes |
| `/design` | UI/UX work | Wireframes + code |
| `/build` | Quick implementation | Code changes |
| `/test` | Test strategy | Test files |
| `/letsgo` | Ship to production | Deployment |
| `/deslop` | Clean LLM artifacts | Code cleanup |
| `/tasklist` | Manage backlog | `docs/tasklist.md` |
| `/document` | Document features | `docs/features/<feature>.md` |
| `/suggest` | What to work on next | Recommendations |

## Agents

Arc includes 15+ specialized agents:

| Category | Agents |
|----------|--------|
| **Research** | framework-docs-researcher, git-history-analyzer |
| **Review** | architecture-strategist, code-simplicity-reviewer, daniel-reviewer, data-integrity-guardian, dhh-rails-reviewer, kieran-{typescript,rails,python}-reviewer, pattern-recognition-specialist, performance-oracle, security-sentinel |
| **Design** | design-implementation-reviewer |
| **Workflow** | spec-flow-analyzer |

## Disciplines

Implementation methodologies in `skills/arc/disciplines/`:

- **test-driven-development** — Red-green-refactor cycle
- **systematic-debugging** — Methodical bug investigation
- **verification-before-completion** — Prove it works before claiming done
- **using-git-worktrees** — Isolated development branches
- **subagent-driven-development** — Parallel agent execution

## Interop

Commands work together:

- `/suggest` reads `/tasklist`, codebase, and `/vision` (priority cascade)
- `/ideate` can flow to `/detail` → `/implement`
- `/build` suggests `/ideate` if scope is too large
- `/letsgo` runs `/test` and `/deslop` as part of quality checks
- Any command can add to `/tasklist`

## License

MIT
