
# CLAUDE.md — BioHeal Project Context

## Quick Reference
This is the BioHeal website project — a functional medicine & lifestyle health space.
Website: bioheal.co.in

## Key Files
- `AGENTS.md` — Full project spec, design system, and coding conventions
- `src/lib/constants.ts` — Brand constants, nav links, site config
- `src/lib/conditions.ts` — All condition page data
- `src/lib/services.ts` — Service offerings data
- `src/lib/testimonials.ts` — Client testimonials
- `src/lib/faq.ts` — FAQ content
- `tailwind.config.ts` — Complete design system tokens

## Common Tasks

### Adding a new page
1. Create `src/app/[page-name]/page.tsx`
2. Export metadata object for SEO
3. Import section components or create new ones in `src/components/sections/`
4. Follow the pattern: SectionHeader + content + CTA at bottom

### Adding a new condition page
1. Add condition data to `src/lib/conditions.ts` following the `Condition` interface
2. The dynamic route `src/app/conditions/[slug]/page.tsx` will pick it up automatically
3. Include: heroText, whatItIs, rootCauses[], ourApproach, whatToExpect[], relatedConditions[]

### Creating a new component
1. Place in appropriate folder: `ui/` (reusable), `sections/` (page-specific), `layout/` (structural)
2. Use TypeScript with explicit props interface
3. Add `'use client'` only if using hooks/state/browser APIs
4. Use `cn()` for conditional classes
5. Follow existing component patterns for consistency

### Styling decisions
- Primary purple (#8B5CF6) for interactive elements and accents
- Dark purple (#5E35A1) for headings
- White/purple-50 for backgrounds
- Cards: rounded-2xl or rounded-3xl, border-purple-100/60, shadow-card on hover
- Sections alternate between white and purple-50/30 backgrounds
- All transitions: duration-300 for hover, duration-500-700 for scroll reveals

## Build & Deploy
```bash
npm run dev          # Local development (localhost:3000)
npm run build        # Production build (static export)
npm run lint         # ESLint check
