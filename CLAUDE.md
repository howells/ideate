# Arc Plugin

The full arc from idea to shipped code. This plugin provides skills for the complete development lifecycle.

## Structure

```
arc/
├── .claude-plugin/
│   └── manifest.json      # Plugin metadata
├── skills/
│   ├── ideate/            # Design & planning skill
│   │   ├── SKILL.md       # Main router
│   │   ├── workflows/     # Step-by-step procedures
│   │   ├── references/    # Domain knowledge
│   │   └── agents/        # Specialized agents
│   └── design/            # Frontend design skill
│       └── SKILL.md
├── commands/
│   ├── ideate.md          # /ideate slash command
│   ├── design.md          # /design slash command
│   └── compound.md        # /compound slash command
├── CLAUDE.md              # This file
├── README.md              # Documentation
└── LICENSE                # MIT
```

## Development

To test changes locally:
1. Edit files in `skills/`
2. Run `/ideate` to test the main skill
3. Iterate based on results

## Publishing

1. Bump version in `.claude-plugin/manifest.json`
2. Commit and push to GitHub
3. Users update via `claude plugins update`

## Key Principles

- **Reviewers advise, user decides** — Suggestions are questions, not mandates
- **One question at a time** — Never overwhelm
- **Frontend-design integrated** — Bold aesthetic direction, not generic AI slop
- **TDD mandatory** — Tests first, implementation second
- **Continuous quality** — TS/lint after every task
- **Knowledge compounds** — Solved problems documented for future sessions
