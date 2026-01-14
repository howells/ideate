<required_reading>
**Read these reference files NOW:**
1. references/review-patterns.md
</required_reading>

<process>
## Phase 1: Find the Plan

**Check if plan file path provided as argument:**
- If yes → read that file and proceed to Phase 2
- If no → search for plans

**Search strategy:**

1. **Check conversation context first** — Look for Claude Code plan mode output
   - Look back through recent conversation messages
   - Search for plan structure markers:
     - "# Plan" or "## Plan" headings
     - "Implementation Steps" sections
     - Task lists with implementation details
     - Step-by-step procedures
   - If found → extract the plan content and proceed to Phase 2

2. **Search docs/plans/ folder** — Look for plan files
   ```bash
   ls -t docs/plans/*.md | head -10
   ```
   - Sort by modification time (newest first)
   - Show all plan files (design, implementation, etc.)

3. **Present options if multiple found:**
   - List up to 5 most recent plans
   - Show: filename, modification date, brief preview
   - Ask user: "Which plan should I review?"

4. **If no plans found:**
   - "I couldn't find any plans in the conversation or in `docs/plans/`.
   - Can you point me to a plan file, or paste the plan you'd like me to review?"

**Once plan located:**
- Store the plan content
- Note the source (conversation, file path, or user-provided)
- Proceed to Phase 2

## Phase 2-7: Follow Expert Review Process

**Now follow the process defined in `workflows/expert-review.md` Steps 2-6:**

This includes:
- Detecting project type and selecting reviewers
- Running parallel expert review (3 agents with model: sonnet)
- Consolidating and presenting findings as Socratic questions
- Applying user decisions
- Finalizing the plan with updates and commits

See `workflows/expert-review.md` for the complete review process.

## Phase 8: Next Steps

After review completes, offer:
- "Ready to create an implementation plan?" → suggest `workflows/detail.md`
- "Want to start implementing?" → suggest `workflows/implement.md`
- "Done for now" → end

</process>

<success_criteria>
Review is complete when:
- [ ] Plan located (conversation, file, or user-provided)
- [ ] Project type detected and reviewers selected
- [ ] Parallel expert review completed (3 agents)
- [ ] All findings presented as Socratic questions
- [ ] User made decisions on each finding
- [ ] Plan updated (if from file)
- [ ] Summary presented
- [ ] User offered next steps
</success_criteria>
