
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">

        {/* Page Title */}
        <div className="mb-16 text-center">
          <h1 className="font-heading text-display-md text-purple-900 mb-2">
            Design System Verification
          </h1>
          <p className="font-body text-body-lg text-gray-500">
            If everything below looks correct, your tokens are working.
          </p>
        </div>

        {/* ─── 1. COLORS ─────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Colors</h2>
          <h3 className="section-title mb-8">Purple Scale</h3>
          <div className="grid grid-cols-5 sm:grid-cols-11 gap-2">
            {[
              { shade: '50', bg: 'bg-purple-50' },
              { shade: '100', bg: 'bg-purple-100' },
              { shade: '200', bg: 'bg-purple-200' },
              { shade: '300', bg: 'bg-purple-300' },
              { shade: '400', bg: 'bg-purple-400' },
              { shade: '500', bg: 'bg-purple-500' },
              { shade: '600', bg: 'bg-purple-600' },
              { shade: '700', bg: 'bg-purple-700' },
              { shade: '800', bg: 'bg-purple-800' },
              { shade: '900', bg: 'bg-purple-900' },
              { shade: '950', bg: 'bg-purple-950' },
            ].map((c) => (
              <div key={c.shade} className="text-center">
                <div className={`${c.bg} w-full aspect-square rounded-xl mb-2`} />
                <span className="text-caption text-gray-500">{c.shade}</span>
              </div>
            ))}
          </div>

          <h3 className="section-title mt-10 mb-8">Accent Colors</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-lavender-50 w-full aspect-square rounded-xl mb-2 border border-purple-100" />
              <span className="text-caption text-gray-500">lavender-50</span>
            </div>
            <div className="text-center">
              <div className="bg-lavender-100 w-full aspect-square rounded-xl mb-2" />
              <span className="text-caption text-gray-500">lavender-100</span>
            </div>
            <div className="text-center">
              <div className="bg-lavender-300 w-full aspect-square rounded-xl mb-2" />
              <span className="text-caption text-gray-500">lavender-300</span>
            </div>
            <div className="text-center">
              <div className="bg-sage-100 w-full aspect-square rounded-xl mb-2" />
              <span className="text-caption text-gray-500">sage-100</span>
            </div>
            <div className="text-center">
              <div className="bg-sage-300 w-full aspect-square rounded-xl mb-2" />
              <span className="text-caption text-gray-500">sage-300</span>
            </div>
            <div className="text-center">
              <div className="bg-sage-500 w-full aspect-square rounded-xl mb-2" />
              <span className="text-caption text-gray-500">sage-500</span>
            </div>
          </div>
        </section>

        {/* ─── 2. TYPOGRAPHY ──────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Typography</h2>
          <h3 className="section-title mb-8">Font Families & Sizes</h3>

          <div className="space-y-6 bg-purple-50/30 rounded-3xl p-8">
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-heading · display-xl</span>
              <p className="font-heading text-display-xl text-purple-900">BioHeal</p>
            </div>
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-heading · display-lg</span>
              <p className="font-heading text-display-lg text-purple-900">Healing Through Lifestyle</p>
            </div>
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-heading · display-sm</span>
              <p className="font-heading text-display-sm text-purple-700">Root-Cause Approach</p>
            </div>
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-heading · heading-lg</span>
              <p className="font-heading text-heading-lg text-purple-900">Personalised Care</p>
            </div>
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-body · body-lg</span>
              <p className="font-body text-body-lg text-gray-600">Your body is an interconnected system — and when something feels off, there&apos;s always a reason.</p>
            </div>
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-body · body-md</span>
              <p className="font-body text-body-md text-gray-600">BioHeal helps you uncover the root causes of chronic health concerns and build a personalised path to lasting wellness.</p>
            </div>
            <div>
              <span className="text-caption text-purple-500 block mb-1">font-accent · italic</span>
              <p className="font-accent text-2xl italic text-purple-700">&ldquo;We don&apos;t silence symptoms. We listen to what they&apos;re saying.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* ─── 3. SHADOWS ─────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Shadows</h2>
          <h3 className="section-title mb-8">Elevation Scale</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'shadow-soft', cls: 'shadow-soft' },
              { name: 'shadow-card', cls: 'shadow-card' },
              { name: 'shadow-elevated', cls: 'shadow-elevated' },
              { name: 'shadow-prominent', cls: 'shadow-prominent' },
              { name: 'shadow-glow', cls: 'shadow-glow' },
            ].map((s) => (
              <div key={s.name} className={`${s.cls} bg-white rounded-2xl p-6 text-center border border-purple-100/40`}>
                <span className="text-body-sm text-gray-600">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. BUTTONS ─────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Buttons</h2>
          <h3 className="section-title mb-8">Variants & Sizes</h3>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">Primary SM</Button>
              <Button variant="primary" size="md">Primary MD</Button>
              <Button variant="primary" size="lg">Primary LG</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="sm">Secondary SM</Button>
              <Button variant="secondary" size="md">Secondary MD</Button>
              <Button variant="secondary" size="lg">Secondary LG</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" size="sm">Ghost SM</Button>
              <Button variant="ghost" size="md">Ghost MD</Button>
              <Button variant="ghost" size="lg">Ghost LG</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 bg-purple-700 p-6 rounded-2xl">
              <Button variant="white" size="sm">White SM</Button>
              <Button variant="white" size="md">White MD</Button>
              <Button variant="white" size="lg">White LG</Button>
            </div>
          </div>
        </section>

        {/* ─── 5. CARDS ───────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Cards</h2>
          <h3 className="section-title mb-8">Component Classes</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-base">
              <div className="icon-container mb-4">🔍</div>
              <h4 className="font-heading text-heading-sm text-purple-900 mb-2">card-base</h4>
              <p className="text-body-sm text-gray-600">Default card with hover shadow and border transition.</p>
            </div>
            <div className="card-elevated">
              <div className="icon-container-lg mb-4">🌿</div>
              <h4 className="font-heading text-heading-sm text-purple-900 mb-2">card-elevated</h4>
              <p className="text-body-sm text-gray-600">Featured card with lift on hover and prominent shadow.</p>
            </div>
            <div className="glass-panel p-6 sm:p-8">
              <div className="icon-container mb-4">✨</div>
              <h4 className="font-heading text-heading-sm text-purple-900 mb-2">glass-panel</h4>
              <p className="text-body-sm text-gray-600">Glassmorphism panel with backdrop blur.</p>
            </div>
          </div>
        </section>

        {/* ─── 6. ANIMATIONS ──────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Animations</h2>
          <h3 className="section-title mb-8">Live Preview</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl mx-auto animate-float" />
              <span className="text-caption text-gray-500 mt-3 block">animate-float</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 mx-auto animate-morph" />
              <span className="text-caption text-gray-500 mt-3 block">animate-morph</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-500 rounded-2xl mx-auto animate-pulse-soft" />
              <span className="text-caption text-gray-500 mt-3 block">animate-pulse-soft</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-300 rounded-full mx-auto animate-spin-slow" />
              <span className="text-caption text-gray-500 mt-3 block">animate-spin-slow</span>
            </div>
          </div>
        </section>

        {/* ─── 7. UTILITIES ───────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Utilities</h2>
          <h3 className="section-title mb-8">Custom Classes</h3>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill-badge">Functional Medicine</span>
              <span className="pill-badge">Root-Cause</span>
              <span className="pill-badge">Lifestyle</span>
              <span className="pill-badge">Personalised</span>
            </div>

            <div className="bg-gradient-cta rounded-3xl p-8 text-center">
              <p className="text-white font-heading text-heading-lg">bg-gradient-cta</p>
              <p className="text-purple-200 text-body-sm mt-2">Purple gradient for CTA sections</p>
            </div>

            <div className="bg-gradient-hero rounded-3xl p-8 text-center border border-purple-100/40">
              <p className="text-purple-900 font-heading text-heading-lg">bg-gradient-hero</p>
              <p className="text-gray-500 text-body-sm mt-2">Soft lavender gradient for hero sections</p>
            </div>

            <div className="border-gradient rounded-2xl p-6 text-center">
              <p className="font-heading text-heading-sm text-purple-900">border-gradient</p>
              <p className="text-body-sm text-gray-500 mt-1">Animated gradient border effect</p>
            </div>

            <div>
              <p className="text-gradient font-heading text-display-sm">text-gradient</p>
              <span className="text-caption text-gray-500">Gradient text utility</span>
            </div>
          </div>
        </section>

        {/* ─── 8. FRAMER MOTION ───────────────────────────────── */}
        <section className="mb-16">
          <h2 className="section-label">Framer Motion</h2>
          <h3 className="section-title mb-8">Scroll Reveal Test</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="card-base text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="icon-container-lg mx-auto mb-4">
                  {i === 1 ? '🔬' : i === 2 ? '🌱' : '💜'}
                </div>
                <h4 className="font-heading text-heading-sm text-purple-900 mb-2">
                  Card {i}
                </h4>
                <p className="text-body-sm text-gray-600">
                  Scroll reveal with stagger delay of {i * 100}ms
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── CHECKLIST ──────────────────────────────────────── */}
        <section className="bg-purple-50/50 rounded-3xl p-8 sm:p-10">
          <h2 className="section-label">Verification Checklist</h2>
          <h3 className="section-title mb-6">What to Check</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Purple scale shows 11 distinct shades (light → dark)',
              'Lavender & sage accent colors are visible',
              'Headings use Plus Jakarta Sans (bold, tight tracking)',
              'Body text uses Inter (regular, relaxed line-height)',
              'Accent text uses Playfair Display (italic, serif)',
              'Shadows increase in intensity from soft → prominent',
              'Buttons have 4 variants × 3 sizes each',
              'Cards show hover effects (shadow + lift)',
              'Float animation moves up/down smoothly',
              'Morph animation changes border-radius',
              'Pulse-soft animation fades in/out gently',
              'Scroll reveal cards animate in when scrolled to',
              'Pill badges have purple bg + border',
              'Gradient text shows purple gradient on text',
              'CTA gradient is deep purple (600 → 800)',
              'Hero gradient is soft lavender (50 → white)',
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-body-sm text-gray-700 group-hover:text-purple-700 transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

