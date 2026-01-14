<overview>
Each task is one TDD cycle: 2-5 minutes of focused work. Small enough to complete confidently, large enough to be meaningful.
</overview>

<task_structure>
**Every task follows this template:**

```markdown
### Task N: [Descriptive Name]

**Files:**
- Create: `exact/path/to/file.tsx`
- Modify: `exact/path/to/existing.tsx:42-58`
- Test: `exact/path/to/file.test.tsx`

**Step 1: Write failing test**

```typescript
// exact test code
```

**Step 2: Run test, verify it fails**

```bash
pnpm vitest run src/path/to/file.test.tsx -t "test name"
```

Expected: FAIL with "[specific error message]"

**Step 3: Implement minimal code**

```typescript
// exact implementation code
```

**Step 4: TypeScript + Lint**

```bash
pnpm tsc --noEmit
pnpm biome check --write .
```

**Step 5: Run test, verify it passes**

```bash
pnpm vitest run src/path/to/file.test.tsx -t "test name"
```

Expected: PASS

**Step 6: Commit**

```bash
git add src/path/
git commit -m "feat(scope): add specific feature"
```
```
</task_structure>

<granularity_examples>
**Too big (don't do this):**
```
Task 1: Create user authentication system
- Add login form
- Add registration form
- Add password reset
- Add session management
- Add tests
```

**Right size:**
```
Task 1: Create User type
Task 2: Create login form component (UI only)
Task 3: Add login form validation
Task 4: Add login API call
Task 5: Add login success redirect
Task 6: Add login error handling
Task 7: Create registration form component (UI only)
... etc
```

**Each task = one thing that can fail.**
</granularity_examples>

<ordering>
**Build from foundation up:**

1. **Types/Interfaces** - Define the shape of data
2. **Utilities** - Pure functions for business logic
3. **Components (dumb)** - UI without logic
4. **Components (smart)** - UI with state/effects
5. **Integration** - Wire components together
6. **E2E tests** - Full user flows

**Why this order:**
- Types catch errors early
- Utilities can be tested in isolation
- Dumb components are easy to test
- Smart components use tested utilities
- Integration uses tested components
- E2E validates the whole chain
</ordering>

<commit_messages>
**Use conventional commits:**

```
feat(scope): add new feature
fix(scope): fix specific bug
refactor(scope): improve code without changing behavior
test(scope): add or update tests
docs(scope): update documentation
```

**Scope = feature area:**
- `feat(auth): add login form`
- `feat(cart): add quantity selector`
- `fix(checkout): handle empty cart`

**Keep messages short but descriptive:**
- Good: `feat(auth): add password visibility toggle`
- Bad: `add stuff`
- Bad: `feat(auth): add a toggle button that allows users to see their password when they click on an eye icon in the password input field`
</commit_messages>

<checkpoints>
**After every 3 tasks, pause:**

```
Completed:
- Task 1: Create User type ✓
- Task 2: Create login form UI ✓
- Task 3: Add form validation ✓

Tests passing: 3/3
TypeScript: clean
Lint: clean

Ready for feedback?
```

**Why checkpoints:**
- Catch mistakes early
- Get user input before going too far
- Natural pause for questions
- Prevents runaway implementation
</checkpoints>
