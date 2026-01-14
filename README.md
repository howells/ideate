# Ideate

Turn ideas into validated designs through collaborative dialogue, then implement with TDD.

## What It Does

Ideate combines brainstorming, expert review, frontend-design, and execution into one unified workflow:

1. **Design** — Socratic dialogue to refine your idea, with expert review woven throughout
2. **Plan** — Break design into bite-sized TDD tasks with exact code
3. **Execute** — Implement with continuous quality checks and checkpoints

## Key Principles

- **Review is woven throughout, not bolted on at the end** — Each design section gets micro-reviewed before moving on
- **Reviewers advise, the user decides** — Suggestions are presented as questions, not mandates
- **One question at a time** — Never overwhelm with multiple questions
- **YAGNI where appropriate** — Simplifications suggested, but user has final say
- **Frontend-design integrated** — Bold aesthetic direction, not generic AI slop

## Installation

```bash
claude plugins add github:danielhowells/ideate
```

## Usage

```bash
# Start the skill
/ideate

# Or with an idea
/ideate add user authentication with magic links
```

## Workflows

| Entry Point | Purpose |
|-------------|---------|
| **Start fresh** | Idea → validated design with ASCII wireframes |
| **Create implementation plan** | Design doc → TDD tasks with exact code |
| **Execute plan** | Implementation with checkpoints + TS/lint |
| **Review existing plan** | Parallel expert review of completed plan |
| **Quick validation** | Fast sanity check on approach |

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

## Agents Used

The skill spawns specialized agents throughout:

| Phase | Agents |
|-------|--------|
| Context gathering | `episodic-memory`, `Explore`, `git-history-analyzer` |
| Implementation planning | `code-explorer`, `pattern-recognition-specialist`, `framework-docs-researcher` |
| Design review | Project-specific reviewers (Rails/TypeScript/Python) |
| Execution | `debugging-toolkit:debugger`, `frontend-design`, quality agents |
| Final review | `code-simplicity-reviewer`, `architecture-strategist`, `security-sentinel` |

## Reference Materials

Figma links, images, and external docs shared during conversation are:
- Captured immediately (screenshots saved to `docs/plans/assets/`)
- Included in design doc under "Reference Materials"
- Referenced in implementation tasks with MCP commands for fresh fetch

## License

MIT
