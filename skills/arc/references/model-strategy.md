# Model Strategy for Agents

This skill uses different models for different agent tasks to optimize cost vs quality.

## Model Tiers

| Model | Cost | Use Case |
|-------|------|----------|
| **haiku** | Cheapest | Mechanical tasks, simple checks, pattern matching |
| **sonnet** | Balanced | Code review, debugging, moderate reasoning |
| **opus** | Premium | Creative decisions, complex architecture, aesthetic judgment |

## Task Allocation

### Haiku (fast, cheap)

- TypeScript error fixing
- Lint/format checks
- Running test suites
- Simple file operations
- Pattern-based fixes

```
Task general-purpose model: haiku: "Run tsc --noEmit and fix errors"
```

### Sonnet (balanced)

- Code reviews (all reviewer agents)
- Debugging failing tests
- Security analysis
- Data integrity checks
- Most subagent work

```
Task debugging-toolkit:debugger model: sonnet: "Debug failing test..."
Task code-simplicity-reviewer model: sonnet: "Review this code..."
```

### Opus (full power)

- Frontend design review (aesthetic judgment)
- Complex architecture decisions
- Creative/design work
- Nuanced trade-off analysis

```
Task compound-engineering:frontend-design model: opus: "Review UI implementation..."
```

## Rationale

**Why not opus everywhere?**
- Cost: Opus is ~10-20x more expensive than haiku
- Speed: Haiku responds faster for simple tasks
- Diminishing returns: Mechanical tasks don't benefit from more intelligence

**Why not haiku everywhere?**
- Quality: Code review needs nuanced judgment
- Context: Debugging requires reasoning across multiple files
- Creativity: Design work needs aesthetic sensibility

**Why sonnet is the default for reviews?**
- Hits the sweet spot for code analysis
- Understands patterns and anti-patterns well
- Cost-effective for multiple parallel reviewers

## When to Override

Use `model: inherit` when you want the agent to match the parent conversation's model. Useful when:
- User is already on opus and wants consistent quality
- Testing with a specific model
