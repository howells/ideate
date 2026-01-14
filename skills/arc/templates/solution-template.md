---
date: YYYY-MM-DD
problem_type: build-error|test-failure|runtime-error|performance|ui-bug|integration|config
severity: critical|high|medium|low
tags: [keyword1, keyword2]
stack: [next, drizzle, etc]
---

# [Clear Problem Title]

## Problem

[1-2 sentence description of what went wrong and the impact]

## Symptoms

- [Exact error message or observable behavior #1]
- [Exact error message or observable behavior #2]
- [Continue as needed - be specific, copy-paste errors]

## What Didn't Work

**Attempt 1:** [What you tried first]
- Why it failed: [Technical reason this didn't solve it]

**Attempt 2:** [What you tried next]
- Why it failed: [Technical reason]

[Continue for significant attempts. If solved on first try:]
**Direct solution:** Problem identified and fixed on first attempt.

## Solution

[Clear description of what actually fixed the problem]

**Code changes:**

```typescript
// Before (broken):
[problematic code]

// After (fixed):
[corrected code with brief explanation]
```

**Commands run** (if applicable):

```bash
[any CLI commands that were part of the fix]
```

## Why This Works

[Technical explanation of:]
1. What was the ROOT CAUSE?
2. Why does the solution address it?
3. What was the underlying issue (API misuse, config error, version incompatibility, etc.)?

[Be detailed enough that future you understands the "why", not just the "what"]

## Prevention

How to avoid this in future:

- [Specific practice or check to follow]
- [What to watch out for]
- [How to catch this early]

## Related

[Links to similar issues if any exist in docs/solutions/:]
- See also: [related-issue.md](../category/related-issue.md)

[If none:]
No related issues documented yet.
