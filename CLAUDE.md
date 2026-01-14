# Ideate Plugin

This plugin provides the `ideate` skill for turning ideas into validated designs and implementations.

## Structure

```
ideate/
├── .claude-plugin/
│   └── manifest.json      # Plugin metadata
├── skills/
│   └── ideate/
│       ├── SKILL.md       # Main router
│       ├── workflows/     # Step-by-step procedures
│       └── references/    # Domain knowledge
├── commands/
│   └── ideate.md          # /ideate slash command
├── CLAUDE.md              # This file
├── README.md              # Documentation
└── LICENSE                # MIT
```

## Development

To test changes locally:
1. Edit files in `skills/ideate/`
2. Run `/ideate` to test the skill
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
