---
name: deslop
description: |
  Remove LLM-generated artifacts from code. Cleans unnecessary comments and defensive checks.
  Use when asked to "clean up the code", "remove AI slop", "deslop this", or after
  AI-assisted coding sessions to remove artifacts that don't match codebase style.
license: MIT
metadata:
  author: howells
  argument-hint: <codebase|branch>
---

# Deslop Workflow

Remove AI-generated slop from the codebase. Based on Cursor team's approach.

## Modes

1. **Branch mode** (default): Check diff against main, clean this branch only
2. **Codebase mode**: Scan entire codebase

## Process

### Step 1: Determine Mode

If argument is "codebase":
```bash
# Scan all files
git ls-files '*.ts' '*.tsx' '*.js' '*.jsx'
```

Otherwise (default):
```bash
# Get changed files vs main
git diff --name-only main...HEAD
```

### Step 2: For Each File, Detect Slop

**What to look for:**

1. **Extra comments inconsistent with the file**
   - Comments a human wouldn't add
   - Comments that state the obvious
   - Comments inconsistent with file's style

2. **Defensive checks abnormal for the codebase**
   - Try/catch blocks in trusted codepaths
   - Null checks where types guarantee non-null
   - Extra validation already handled upstream

3. **Type escapes**
   - `as any`
   - `// @ts-ignore`
   - `!` assertions that shouldn't be needed

4. **Style inconsistencies**
   - Different naming conventions than the file
   - Different formatting patterns
   - Verbose where file is terse (or vice versa)

### Step 3: Context-Aware Analysis

For each potential issue:
1. Read surrounding code
2. Check if pattern exists elsewhere in file
3. Only flag if genuinely inconsistent

**Good comment (keep):**
```typescript
// Retry logic handles transient network failures
```

**Slop comment (remove):**
```typescript
// This function processes the user data and returns the result
function processUserData(data: UserData): Result {
```

### Step 4: Fix Issues

For each confirmed slop:
1. Remove or fix it
2. Don't add new code, just clean

### Step 5: Report

```markdown
## Deslop Summary

Cleaned [N] files:
- Removed [X] unnecessary comments
- Removed [Y] defensive checks
- Fixed [Z] type escapes

[1-3 sentence summary]
```

<progress_append>
After cleaning the codebase, append to progress journal:

```markdown
## YYYY-MM-DD HH:MM — /arc:deslop
**Task:** Clean [scope]
**Outcome:** Complete
**Files:** [N] files cleaned
**Decisions:**
- Removed: [X] comments, [Y] checks, [Z] escapes
**Next:** Continue working

---
```
</progress_append>

## What Deslop Does NOT Do

- Add new functionality
- Refactor working code
- Change behavior
- Make "improvements"

It only removes things that shouldn't be there.
