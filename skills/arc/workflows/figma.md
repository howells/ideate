---
description: Implement UI from Figma designs
agent: agents/design/figma-implement.md
---

# Figma Implementation Workflow

Implement UI components directly from Figma designs using the Figma MCP.

## Process

Follow the instructions in `agents/design/figma-implement.md`:

1. **Extract Design Intent** — Use Figma MCP to get specs (colors, typography, spacing, shadows, component hierarchy)

2. **Understand Codebase Context** — Find existing design system, component patterns, styling methodology

3. **Implement with Fidelity** — Write code using existing tokens, get padding/spacing right (most commonly missed)

4. **Review and Compare** — Screenshot the result, compare against Figma, fix discrepancies, iterate until matching

## Required Input

- Figma URL (file or specific node)
- OR description of what to find in an already-shared Figma file

## Interop

- Use **/design** if you need to create a design from scratch (no Figma reference)
- Use **/build** for quick implementations without Figma
- Use **/implement** for planned multi-step implementations
