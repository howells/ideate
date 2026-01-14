---
description: Test strategy and execution
references: references/testing-patterns.md
uses: disciplines/test-driven-development.md
---

# Test Workflow

Create or review test strategy. Optionally run test suite. Skews vitest and playwright.

## Process

### Step 1: Detect Test Setup

```bash
# Check for test frameworks
ls vitest.config.* 2>/dev/null && echo "vitest"
ls playwright.config.* 2>/dev/null && echo "playwright"
ls jest.config.* 2>/dev/null && echo "jest"
ls cypress.config.* 2>/dev/null && echo "cypress"
```

### Step 2: Determine Intent

"What would you like to do?"
1. **Review strategy** — Analyze current test coverage and approach
2. **Create strategy** — Design test plan for a feature
3. **Run tests** — Execute test suite
4. **Fix failing tests** — Debug and fix

### For "Review Strategy"

Analyze:
```bash
# Count test files
find . -name "*.test.*" -o -name "*.spec.*" | wc -l

# Check coverage config
grep -r "coverage" vitest.config.* playwright.config.* 2>/dev/null
```

Report:
- Number of test files
- Unit vs E2E balance
- Coverage gaps (if measurable)
- Missing test patterns

### For "Create Strategy"

For the given feature:

1. **Unit tests** (vitest)
   - Pure functions
   - Component rendering
   - Hooks behavior

2. **Integration tests** (vitest)
   - Component interactions
   - API mocking

3. **E2E tests** (playwright)
   - Critical user flows
   - Happy path + key error states

Output test plan:
```markdown
## Test Strategy: [Feature]

### Unit Tests
- [ ] [Test case]: [What it verifies]

### Integration Tests
- [ ] [Test case]: [What it verifies]

### E2E Tests
- [ ] [Test case]: [What it verifies]
```

### For "Run Tests"

```bash
# Vitest
pnpm vitest run

# Playwright
pnpm playwright test

# With coverage
pnpm vitest run --coverage
```

Report results. If failures, offer to debug.

### For "Fix Failing Tests"

Follow `disciplines/systematic-debugging.md`:
1. Read error message carefully
2. Understand what test expects
3. Determine if test or code is wrong
4. Fix at source

## Test Patterns

From `references/testing-patterns.md`:

**Good tests:**
- Test behavior, not implementation
- One assertion per concept
- Clear names describing what's tested
- Real code over mocks when possible

**Bad tests:**
- Testing mock behavior
- Vague names ("test1", "it works")
- Implementation details in assertions
