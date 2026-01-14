# Arc

The full arc from idea to shipped code.

## What It Does

Arc combines design, planning, TDD execution, expert review, and knowledge capture into one unified development workflow:

1. **Design** — Socratic dialogue to refine your idea, with expert review woven throughout
2. **Plan** — Break design into bite-sized TDD tasks with exact code
3. **Execute** — Implement with continuous quality checks and checkpoints
4. **Compound** — Document solutions to feed future sessions

## Key Principles

- **Review is woven throughout, not bolted on at the end** — Each design section gets micro-reviewed before moving on
- **Reviewers advise, the user decides** — Suggestions are presented as questions, not mandates
- **One question at a time** — Never overwhelm with multiple questions
- **YAGNI where appropriate** — Simplifications suggested, but user has final say
- **Frontend-design integrated** — Bold aesthetic direction, not generic AI slop

## Installation

```bash
claude plugins add github:howells/arc
```

## Usage

```bash
# Start the ideate skill
/ideate

# Or with an idea
/ideate add user authentication with magic links

# Document a solved problem
/compound
```

## Workflows

| Entry Point | Purpose |
|-------------|---------|
| **Start fresh** | Idea → validated design with ASCII wireframes |
| **Create implementation plan** | Design doc → TDD tasks with exact code |
| **Execute plan** | Implementation with checkpoints + TS/lint |
| **Review existing plan** | Parallel expert review of completed plan |
| **Quick validation** | Fast sanity check on approach |
| **Document solution** | Capture solved problems for future reference |

## What Makes It Different

### vs Brainstorming alone
- Adds implementation planning + execution
- Has Socratic review integrated (not bolted on)
- ASCII UI wireframes + Figma capture
- TDD with vitest/playwright mandatory
- Continuous TS/lint checking

### vs Plan Review alone
- "Reviewers advise, user decides" — won't gut your features
- Questions, not mandates
- Part of a complete workflow, not standalone

### Frontend-Design Integration
- Aesthetic direction captured during design (tone, memorable element, typography, color, motion)
- Skill invoked during build for creative decisions
- Agent review after completion for quality check
- No generic AI slop (Inter, purple gradients, cookie-cutter layouts)

## Agents

Arc includes 15+ specialized agents for different stages:

| Category | Agents |
|----------|--------|
| **Research** | framework-docs-researcher, git-history-analyzer |
| **Review** | architecture-strategist, code-simplicity-reviewer, daniel-reviewer, data-integrity-guardian, dhh-rails-reviewer, kieran-{typescript,rails,python}-reviewer, pattern-recognition-specialist, performance-oracle, security-sentinel |
| **Design** | design-implementation-reviewer |
| **Workflow** | spec-flow-analyzer |

## Reference Materials

Figma links, images, and external docs shared during conversation are:
- Captured immediately (screenshots saved to `docs/plans/assets/`)
- Included in design doc under "Reference Materials"
- Referenced in implementation tasks with MCP commands for fresh fetch

## License

MIT
