<overview>
Testing is mandatory, not optional. Every feature gets unit tests (vitest) and E2E tests (playwright) where applicable.
</overview>

<detection>
**Detect test runner from project files:**

| File | Runner |
|------|--------|
| `vitest.config.ts` | vitest |
| `vitest.config.js` | vitest |
| `playwright.config.ts` | playwright |
| `jest.config.js` | jest |
| `cypress.config.ts` | cypress |

**Detect package manager:**

| File | Manager | Command prefix |
|------|---------|----------------|
| `pnpm-lock.yaml` | pnpm | `pnpm` |
| `yarn.lock` | yarn | `yarn` |
| `package-lock.json` | npm | `npm run` |
</detection>

<vitest_patterns>
**File naming:** `[name].test.ts` or `[name].test.tsx`

**Basic test structure:**
```typescript
import { describe, it, expect } from "vitest";
import { myFunction } from "./my-function";

describe("myFunction", () => {
  it("should handle basic case", () => {
    const result = myFunction("input");
    expect(result).toBe("expected");
  });

  it("should handle edge case", () => {
    const result = myFunction("");
    expect(result).toBeNull();
  });
});
```

**React component test:**
```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./my-component";

describe("MyComponent", () => {
  it("should render title", () => {
    render(<MyComponent title="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("should call onClick when button clicked", async () => {
    const onClick = vi.fn();
    render(<MyComponent onClick={onClick} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
```

**Commands:**
```bash
# Run all tests
pnpm vitest run

# Run single file
pnpm vitest run src/path/to/file.test.tsx

# Run matching tests
pnpm vitest run -t "should handle"

# Watch mode
pnpm vitest

# With coverage
pnpm vitest run --coverage
```
</vitest_patterns>

<playwright_patterns>
**File naming:** `[name].spec.ts`

**Basic E2E test:**
```typescript
import { test, expect } from "@playwright/test";

test.describe("Feature Name", () => {
  test("should complete user flow", async ({ page }) => {
    // Navigate
    await page.goto("/feature");

    // Interact
    await page.getByRole("button", { name: "Start" }).click();

    // Fill form
    await page.getByLabel("Email").fill("test@example.com");

    // Submit
    await page.getByRole("button", { name: "Submit" }).click();

    // Assert
    await expect(page.getByText("Success")).toBeVisible();
  });
});
```

**With fixtures:**
```typescript
import { test, expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    // Setup: login or seed data
    await page.goto("/login");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Password").fill("password");
    await page.getByRole("button", { name: "Sign in" }).click();
  });

  test("should show user data", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.getByText("Welcome")).toBeVisible();
  });
});
```

**Commands:**
```bash
# Run all tests
pnpm playwright test

# Run single file
pnpm playwright test tests/feature.spec.ts

# Run matching tests
pnpm playwright test -g "should complete"

# With UI
pnpm playwright test --ui

# Debug mode
pnpm playwright test --debug

# Generate code
pnpm playwright codegen http://localhost:3000
```
</playwright_patterns>

<tdd_cycle>
**Red-Green-Refactor:**

**1. RED - Write failing test first:**
```typescript
it("should calculate total with tax", () => {
  const result = calculateTotal(100, 0.1);
  expect(result).toBe(110);
});
```

Run: `pnpm vitest run -t "calculate total"`
Expected: FAIL (function doesn't exist)

**2. GREEN - Minimal implementation:**
```typescript
export function calculateTotal(amount: number, taxRate: number): number {
  return amount + (amount * taxRate);
}
```

Run: `pnpm vitest run -t "calculate total"`
Expected: PASS

**3. REFACTOR - Improve if needed:**
```typescript
export function calculateTotal(amount: number, taxRate: number): number {
  const tax = amount * taxRate;
  return amount + tax;
}
```

Run: `pnpm vitest run -t "calculate total"`
Expected: Still PASS
</tdd_cycle>

<what_to_test>
**Unit tests (vitest):**
- Pure functions
- Business logic
- Data transformations
- Utility functions
- Hooks (with renderHook)
- Components (with testing-library)

**E2E tests (playwright):**
- Critical user flows
- Form submissions
- Navigation flows
- Authentication
- Error handling from user perspective

**Don't test:**
- Implementation details
- Third-party libraries
- Trivial getters/setters
- Framework behavior
</what_to_test>
