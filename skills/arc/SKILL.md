---
name: arc
description: The main entry point. Understands your codebase, asks what you want to do, and routes to the right workflow. Use this when starting work or unsure which command to use.
---

# /arc

The front door to Arc. Understands context, asks what you want to do, routes to the right workflow.

## Process

### Step 1: Gather Context (in parallel)

**Explore the codebase:**
```
Task Explore model: haiku: "Quick overview of this codebase:
- What is this project? (framework, language, purpose)
- Key directories and their purposes
- Any obvious patterns or conventions

Keep it brief — 5-10 bullet points max."
```

**Check for existing Arc artifacts:**
```bash
ls docs/vision.md docs/tasklist.md docs/plans/*.md 2>/dev/null | head -10
```

**Search memory for recent work:**
```
Task episodic-memory:search-conversations model: haiku: "Search for recent conversations
about this project. Look for: what was worked on, any open items, recent decisions."
```

### Step 2: Present Context

Briefly share what you found:
- Project type and key patterns
- Any existing plans or tasks
- Recent work from memory (if found)

### Step 3: Ask What They Want to Do

Present options based on context:

**If tasklist has items:**
"You have [N] items in your tasklist. Want to:"
1. Work on one of those
2. Start something new
3. See suggestions (/arc:suggest)

**If recent plans exist:**
"I found a plan for [topic]. Want to:"
1. Continue that work
2. Start something different

**If fresh codebase:**
"What would you like to work on?"
- Describe a feature or change
- Fix a bug
- Explore what needs work (/arc:suggest)

### Step 4: Route to Workflow

Based on their answer:

| Intent | Route to |
|--------|----------|
| "I want to build [feature]" | /arc:ideate |
| "Quick fix/small change" | /arc:build |
| "Continue [existing plan]" | /arc:implement or /arc:detail |
| "Not sure what to work on" | /arc:suggest |
| "Review/improve existing code" | /arc:deslop or /arc:review |
| "Ship to production" | /arc:letsgo |
| "Run tests" | /arc:test |

**Invoke the skill:**
```
Skill arc:[chosen]: "[user's description]"
```

## What /arc is NOT

- Not a replacement for specific commands — it routes TO them
- Not for when you already know what command to use
- Not a status dashboard (use /arc:suggest for that)

## Interop

- Routes to all other /arc:* commands
- Reads /arc:tasklist, /arc:vision for context
- Uses /arc:suggest when user is unsure
