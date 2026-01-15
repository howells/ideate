---
name: letsgo
description: Production readiness checklist. Covers domains, Vercel config, SEO, meta, security, and everything needed to ship.
---

# Letsgo Workflow

Prepare a codebase for production. Covers domains, Vercel config, SEO, meta, and everything needed to ship.

## Process

### Step 1: Run Checklist

Go through each category. Check status, note gaps.

```markdown
## Production Readiness Checklist

### Domain & Hosting
- [ ] Domain purchased and configured
- [ ] DNS records set up
- [ ] SSL certificate active
- [ ] Vercel project linked
- [ ] Environment variables set in Vercel
- [ ] Production branch configured

### SEO & Meta
- [ ] Page titles set (unique per page)
- [ ] Meta descriptions written
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Favicon and app icons
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Canonical URLs set

### Performance
- [ ] Images optimized (next/image or similar)
- [ ] Fonts optimized (display: swap)
- [ ] Bundle size reasonable
- [ ] No console errors in production build
- [ ] Core Web Vitals passing
- [ ] React/Next.js best practices applied (see Step 1b)

### Security
- [ ] No secrets in client code
- [ ] HTTPS enforced
- [ ] CSP headers (if applicable)
- [ ] Auth tokens secure

### Quality
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] No lint errors
- [ ] /arc:deslop run (no LLM artifacts)

### Legal & Compliance
- [ ] Privacy policy (if collecting data)
- [ ] Cookie consent (if using cookies)
- [ ] Terms of service (if applicable)

### Monitoring
- [ ] Error tracking set up (Sentry, etc.)
- [ ] Analytics configured (if wanted)
- [ ] Uptime monitoring (optional)
```

### Step 1b: React/Next.js Performance Review (Optional)

If this is a React/Next.js project and `vercel-react-best-practices` skill is available:
```
Skill vercel-react-best-practices: "Review performance patterns in this Next.js app.
Check: component rendering, data fetching, bundle optimization"
```

This provides expert guidance from Vercel Engineering on React/Next.js optimization.

### Step 2: Address Gaps

For each unchecked item:
1. Explain what's needed
2. Offer to fix it or provide instructions

### Step 3: Final Verification

```bash
# Build production
pnpm build

# Run tests
pnpm test

# Check for issues
pnpm tsc --noEmit
pnpm biome check .
```

### Step 4: Ship

If all checks pass:
```bash
# Deploy via Vercel CLI
vercel --prod

# Or via git (if Vercel GitHub integration set up)
git push origin main
```

**If `vercel:deploy` skill is available:**
```
Skill vercel:deploy
```
This handles the deployment workflow with proper verification.

## Interop

- Runs **/arc:test** as part of quality check
- Runs **/arc:deslop** as part of quality check
- References **/arc:vision** to verify alignment
- Can invoke **vercel-react-best-practices** skill for performance review (if available)
- Can invoke **vercel:deploy** skill for deployment (if available)
