# Solution Documentation Schema

## YAML Frontmatter

**Required fields:**

```yaml
---
date: 2026-01-14              # ISO 8601 date
problem_type: build-error     # See types below
severity: high                # critical|high|medium|low
tags: [drizzle, migration]    # Searchable keywords
stack: [next, drizzle, neon]  # Technologies involved
---
```

## Problem Types → Folders

| `problem_type` | Folder | When to use |
|----------------|--------|-------------|
| `build-error` | `docs/solutions/build-errors/` | TypeScript errors, bundler fails, compilation issues |
| `test-failure` | `docs/solutions/test-failures/` | Flaky tests, mocking issues, test isolation |
| `runtime-error` | `docs/solutions/runtime-errors/` | Crashes, unhandled exceptions, server errors |
| `performance` | `docs/solutions/performance/` | Slow queries, memory leaks, N+1, bundle size |
| `ui-bug` | `docs/solutions/ui-bugs/` | Layout issues, state bugs, hydration mismatches |
| `integration` | `docs/solutions/integrations/` | API issues, auth problems, third-party services |
| `config` | `docs/solutions/config/` | Environment setup, tooling, deployment |

## Severity Levels

| Level | Meaning |
|-------|---------|
| `critical` | Blocks deployment, data loss risk, security issue |
| `high` | Major functionality broken, affects many users |
| `medium` | Feature degraded, workaround exists |
| `low` | Minor issue, cosmetic, edge case |

## Tags (Examples)

Use lowercase, hyphenated keywords:

- Stack: `next`, `react`, `drizzle`, `neon`, `clerk`, `trpc`, `tailwind`
- Patterns: `n-plus-one`, `hydration`, `race-condition`, `memory-leak`
- Areas: `auth`, `database`, `api`, `ui`, `testing`, `deployment`

## Filename Convention

`[problem-summary]-[YYYYMMDD].md`

- Lowercase with hyphens
- Descriptive but concise (< 60 chars)
- Date suffix for uniqueness

**Good:**
- `clerk-session-not-persisting-20260114.md`
- `drizzle-push-silently-fails-20260114.md`
- `tailwind-v4-source-not-scanning-20260114.md`

**Bad:**
- `bug-fix.md` (not descriptive)
- `the_problem_with_authentication_in_our_app.md` (too long, wrong format)
