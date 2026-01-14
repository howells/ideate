# Arc Plugin

The full arc from idea to shipped code. This plugin provides 12 commands for the complete development lifecycle.

## Structure

```
arc/
├── .claude-plugin/
│   └── manifest.json      # Plugin metadata
├── skills/
│   └── arc/               # Main skill
│       ├── SKILL.md       # Router and principles
│       ├── workflows/     # Command implementations
│       │   ├── vision.md
│       │   ├── ideate.md
│       │   ├── detail.md
│       │   ├── implement.md
│       │   ├── design.md
│       │   ├── build.md
│       │   ├── test.md
│       │   ├── letsgo.md
│       │   ├── deslop.md
│       │   ├── tasklist.md
│       │   ├── document.md
│       │   └── suggest.md
│       ├── agents/        # Specialized reviewers
│       │   ├── review/
│       │   ├── research/
│       │   ├── design/
│       │   └── workflow/
│       ├── disciplines/   # Implementation methodologies
│       ├── references/    # Domain knowledge
│       └── templates/     # Output templates
├── commands/              # Slash commands
│   ├── vision.md
│   ├── ideate.md
│   ├── detail.md
│   ├── implement.md
│   ├── design.md
│   ├── build.md
│   ├── test.md
│   ├── letsgo.md
│   ├── deslop.md
│   ├── tasklist.md
│   ├── document.md
│   └── suggest.md
├── CLAUDE.md              # This file
├── README.md              # Documentation
└── LICENSE                # MIT
```

## Command Hierarchy

```
WHY     /vision     - High-level goals
WHAT    /ideate     - Socratic exploration → PRD
HOW     /detail     - Detailed implementation plan
DO      /implement, /design, /build, /test, /letsgo, /deslop
CROSS   /tasklist, /document, /suggest
```

## Development

To test changes locally:
1. Edit workflows in `skills/arc/workflows/`
2. Run the corresponding command (e.g., `/ideate`)
3. Iterate based on results

## Key Principles

- **Reviewers advise, user decides** — Suggestions are questions, not mandates
- **One question at a time** — Never overwhelm
- **TDD mandatory** — Tests first, implementation second
- **Continuous quality** — TS/lint after every task
- **Knowledge compounds** — Solved problems documented for future sessions

## Publishing

1. Bump version in `.claude-plugin/manifest.json`
2. Commit and push to GitHub
3. Users update via `claude plugins update`
