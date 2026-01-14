<overview>
Frontend work requires intentional aesthetic direction. Generic "AI slop" (purple gradients, predictable layouts) is unacceptable. Every UI decision should be deliberate and memorable.
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
- NEVER: Roboto, Arial, system-ui defaults
- DO: Distinctive, characterful fonts that elevate the design
- Pair a display font with a refined body font

**Recommended fonts:**
- Sans: Inter, DM Sans, Sohne, Scto Grotesk, Instrument Sans, Space Grotesk, Bricolage Grotesque, Outfit
- Serif: Instrument Serif, Newsreader, Fraunces, Cormorant, Crimson Pro, Libre Baskerville
- Display: Novarese, Editorial New
- Mono: Geist Mono, IBM Plex Mono, JetBrains Mono, Fira Code

**Commercial foundries (require license):**
- Grilli Type: GT America, GT Walsheim, GT Sectra, GT Flexa
- Commercial Type: Graphik, Canela, Dala Floda, Austin
- Klim: Söhne, Untitled Sans, Tiempos
- Colophon: Apercu, Reader, Basis Grotesque
- Dinamo: ABC Favorit, ABC Diatype, ABC Arizona
- Sharp Type: Sharp Grotesk, Sharp Sans

Ask the user where their fonts folder is to check available licensed fonts before selecting.

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
- Roboto/Arial/system-ui defaults
- Purple-to-blue gradients
- White backgrounds with gray cards
- Predictable grid layouts
- Rounded corners on everything
- Generic icons
- Cookie-cutter component patterns
- Safe, forgettable choices
</anti_patterns>
