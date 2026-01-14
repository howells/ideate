<required_reading>
**Read these reference files NOW:**
1. references/review-patterns.md
</required_reading>

<process>
## Step 1: Load the Plan

**If plan path provided:** Read the plan file.

**If no path provided:** Ask user for the plan file path or to paste the plan content.

## Step 2: Detect Project Type

Check for project markers:
- `package.json` with Next.js/React → TypeScript
- `pyproject.toml` or `requirements.txt` → Python
- `go.mod` → Go
- None of above → General

Select reviewers based on project type (see SKILL.md `<reviewer_selection>`).

## Step 3: Run Parallel Expert Review

Spawn 3 reviewer agents in parallel using Task tool.

**Model selection for reviewers:**
- Most reviewers: `model: sonnet` (balanced cost/quality for code review)
- Architecture strategist: `model: sonnet` (systems thinking)
- Daniel reviewer (for Daniel's projects): `model: sonnet`

Each reviewer gets:
- The full plan content
- Instructions to focus on their specialty
- Reminder that they're providing recommendations, not requirements

## Step 4: Consolidate and Present

<critical_principle>
**Reviewers advise, the user decides.**

Present all findings as questions, not mandates:
- "Simplicity reviewer suggests removing X. Is this intentional complexity or should we simplify?"
- "Architecture reviewer flags Y as unusual. Is there context they're missing?"
- "Security reviewer notes Z. Is this a real concern for your use case?"
</critical_principle>

**Group findings by category:**
1. **Security flags** - Things that might be vulnerabilities
2. **Architecture concerns** - Structural issues or anti-patterns
3. **Simplification suggestions** - Features reviewers think are unnecessary
4. **Style/convention notes** - Minor improvements

**For each finding, ask:**
"Do you want to: (1) Accept this change, (2) Keep as-is, (3) Discuss further?"

## Step 5: Apply User Decisions

For accepted changes:
- Update the plan document
- Note the change and reasoning

For kept items:
- Document the user's reasoning
- Add to "Design Decisions" section of plan

## Step 6: Finalize

If plan was modified:
- Write updated plan
- Commit changes

Present summary of review outcomes.
</process>

<success_criteria>
Review is complete when:
- [ ] All reviewer findings presented to user
- [ ] User made decision on each finding
- [ ] Plan updated with accepted changes
- [ ] User reasoning documented for rejected suggestions
</success_criteria>
