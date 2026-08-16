
# BioHeal — Technical Architecture Reference

## Stack
| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 14 (App Router) | Static export (`output: 'export'`) |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Custom design tokens in tailwind.config.ts |
| Animations | Framer Motion | Scroll reveals, page transitions |
| Deployment | Cloudflare Pages | Via GitHub Actions CI/CD |
| Forms | Formspree / Getform | No server required |
| Booking | Cal.com | Embedded iframe widget |
| Fonts | next/font/google | Plus Jakarta Sans, Inter, Playfair Display |
| Icons | Emoji + custom SVG | No icon library dependency |

## Pages
| Route | Page | Status |
|-------|------|--------|
| `/` | Homepage | Building |
| `/about` | About + Philosophy | Pending |
| `/services` | Services | Pending |
| `/conditions` | Conditions Overview | Pending |
| `/conditions/[slug]` | Individual Condition (×7) | Pending |
| `/contact` | Contact + Booking | Pending |
| `/blog` | Blog (Phase 2) | Deferred |

## Condition Slugs
- `pcos` — PCOS & Hormonal Imbalance
- `thyroid` — Thyroid Disorders
- `gut-health` — Gut Health (IBS, SIBO, Food Sensitivities)
- `diabetes` — Type 2 Diabetes & Insulin Resistance
- `autoimmune` — Autoimmune Conditions
- `fatigue` — Chronic Fatigue & Low Energy
- `childrens-health` — Children's Health

## Component Architecture
