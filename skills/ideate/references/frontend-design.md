<overview>
Frontend work requires intentional aesthetic direction. Generic "AI slop" (Inter font, purple gradients, predictable layouts) is unacceptable. Every UI decision should be deliberate and memorable.
</overview>

<design_thinking>
**Before any UI code, answer these:**

1. **Purpose**: What problem does this solve? Who uses it?
2. **Tone**: Pick a direction and commit:
   - Brutally minimal
   - Maximalist chaos
   - Retro-futuristic
   - Organic/natural
   - Luxury/refined
   - Playful/toy-like
   - Editorial/magazine
   - Brutalist/raw
   - Art deco/geometric
   - Soft/pastel
   - Industrial/utilitarian
3. **Differentiation**: What's the ONE thing someone will remember?
4. **Constraints**: Framework, performance, accessibility requirements

**Capture in design doc:**
```markdown
## Aesthetic Direction
- **Tone**: [chosen direction]
- **Memorable element**: [what makes it unforgettable]
- **Typography**: [display font] + [body font]
- **Color strategy**: [dominant + accent approach]
- **Motion philosophy**: [where/how animation is used]
```
</design_thinking>

<aesthetic_principles>
**Typography:**
- NEVER: Inter, Roboto, Arial, system fonts
- DO: Distinctive, characterful fonts that elevate the design
- Pair a display font with a refined body font

**Color:**
- NEVER: Purple gradients on white (AI cliché)
- DO: Commit to a cohesive palette with dominant + sharp accents
- Use CSS variables for consistency

**Motion:**
- Focus on high-impact moments (page load, reveals)
- One well-orchestrated animation > scattered micro-interactions
- Use `animation-delay` for staggered reveals
- CSS-only when possible; Motion library for React

**Spatial Composition:**
- Unexpected layouts, asymmetry, overlap
- Grid-breaking elements
- Generous negative space OR controlled density
- Never predictable/cookie-cutter

**Backgrounds & Details:**
- Create atmosphere and depth
- Gradient meshes, noise textures, geometric patterns
- Layered transparencies, dramatic shadows
- Custom cursors, grain overlays where appropriate
</aesthetic_principles>

<implementation_matching>
**Match code complexity to aesthetic vision:**

- **Maximalist design** → elaborate code, extensive animations, rich effects
- **Minimalist design** → restraint, precision, perfect spacing/typography

Elegance = executing the vision fully, not hedging.
</implementation_matching>

<anti_patterns>
**Generic AI aesthetics to avoid:**
- Inter/Roboto/Arial fonts
- Purple-to-blue gradients
- White backgrounds with gray cards
- Predictable grid layouts
- Rounded corners on everything
- Generic icons
- Cookie-cutter component patterns
- Safe, forgettable choices
</anti_patterns>
