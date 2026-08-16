
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const pillars = [
  {
    icon: '🔍',
    title: 'Root-Cause Approach',
    description:
      'We look beyond symptoms to identify the underlying imbalances — hormonal, nutritional, or environmental — driving your condition.',
  },
  {
    icon: '🌿',
    title: 'Lifestyle as Medicine',
    description:
      'Nutrition, movement, sleep, and stress management become your primary tools for healing — sustainable changes that transform your biology.',
  },
  {
    icon: '💜',
    title: 'Personalised Care',
    description:
      'Every individual is unique. Your plan is built around your genetics, environment, history, and goals — because one-size-fits-all doesn\'t heal.',
  },
]

const values = [
  {
    title: 'Deep Listening',
    description: 'We hear what you say — and what you don\'t. Every detail matters.',
  },
  {
    title: 'Critical Thinking',
    description: 'We connect the dots between your symptoms, labs, history, and lifestyle to find the real story.',
  },
  {
    title: 'Compassionate Guidance',
    description: 'No judgement, no rushing. Just steady, evidence-informed support at your pace.',
  },
  {
    title: 'Education Over Prescription',
    description: 'We empower you to understand your body — so healing becomes something you own, not something done to you.',
  },
  {
    title: 'Sustainability Over Quick Fixes',
    description: 'We build protocols that fit your real life — your kitchen, your schedule, your culture.',
  },
  {
    title: 'Science Without Rigidity',
    description: 'Evidence-informed, not dogmatic. We stay curious, keep learning, and adapt as new research emerges.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Philosophy</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
              Healing begins with understanding
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              BioHeal is a functional medicine &amp; lifestyle health space — a place where
              chronic health concerns are met with curiosity, not dismissal. Where your
              body&apos;s signals are listened to, not silenced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── The Problem We Solve ─────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <div className="glass-panel p-8 sm:p-12 rounded-3xl">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-purple-900 mb-6">
                Maybe this sounds familiar...
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  You&apos;ve been to multiple doctors. Your reports come back &ldquo;normal.&rdquo;
                  But you still don&apos;t feel right. The fatigue, the bloating, the weight that
                  won&apos;t budge, the cycles that never regulate — they&apos;re real. And they
                  deserve more than a 5-minute consultation and a generic prescription.
                </p>
                <p>
                  Conventional medicine is extraordinary at acute care — emergencies, surgeries,
                  infections. But for chronic, lifestyle-driven conditions? It often treats the
                  symptom, not the source. The relief is temporary. The pattern repeats.
                </p>
                <p className="font-medium text-purple-800 italic font-accent text-xl">
                  &ldquo;What if there&apos;s another way?&rdquo;
                </p>
                <p>
                  That question is exactly where BioHeal begins.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── What is Functional Medicine ──────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center mb-12" {...fadeInUp}>
            <span className="section-label">Functional Medicine</span>
            <h2 className="section-title">A different lens on health</h2>
            <p className="section-description">
              Functional medicine asks <em>why</em> — not just <em>what</em>. It looks at your body
              as an interconnected system, not a collection of isolated symptoms. It uses advanced
              lab interpretation, nutrition science, and lifestyle interventions to address the
              root cause — not just manage the surface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Three Pillars ────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Three pillars of BioHeal</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="card-elevated text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="icon-container-lg mx-auto mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-purple-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The BioHeal Way ──────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <div className="text-center mb-12">
              <span className="section-label">The BioHeal Way</span>
              <h2 className="section-title">Understand → Restore → Thrive</h2>
              <p className="section-description">
                This isn&apos;t a quick fix. It&apos;s a journey — and we walk it with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-heading">
                  1
                </div>
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-2">
                  Understand
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We listen deeply, review your history, interpret labs with a functional lens,
                  and map the connections between your symptoms.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-heading">
                  2
                </div>
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-2">
                  Restore
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We build a personalised protocol — nutrition, movement, sleep, stress management,
                  and targeted supplementation — designed for your real life.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-lavender-100 text-purple-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-heading">
                  3
                </div>
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-2">
                  Thrive
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As your body responds, we refine and evolve your plan. The goal isn&apos;t
                  dependence — it&apos;s building health literacy that lasts a lifetime.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Our Values ───────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our promises to you</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Serve ─────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <div className="text-center mb-10">
              <span className="section-label">Who We Serve</span>
              <h2 className="section-title">Adults &amp; children, across India</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Adults */}
              <div className="card-elevated">
                <h3 className="font-heading text-xl font-semibold text-purple-900 mb-4">
                  For Adults (25–55)
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    PCOS &amp; hormonal imbalances
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Thyroid disorders (hypo/hyper)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Gut health &amp; digestive issues
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Type 2 Diabetes &amp; metabolic health
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Autoimmune conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    Chronic fatigue &amp; unexplained weight gain
                  </li>
                </ul>
              </div>

              {/* Children */}
              <div className="card-elevated">
                <h3 className="font-heading text-xl font-semibold text-purple-900 mb-4">
                  For Children
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-0.5">•</span>
                    Allergies &amp; food sensitivities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-0.5">•</span>
                    Digestive issues &amp; picky eating
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-0.5">•</span>
                    Recurrent infections
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-0.5">•</span>
                    Behavioural &amp; focus concerns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-500 mt-0.5">•</span>
                    Growth &amp; nutrition optimisation
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500 italic">
                  Guided through parents — gentle, non-invasive approaches
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── What BioHeal is NOT ──────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-purple-200/40">
              <h2 className="font-heading text-2xl font-bold text-purple-900 mb-6 text-center">
                What BioHeal is <span className="italic">not</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Not a hospital or diagnostic lab',
                  'Not a replacement for emergency care',
                  'Not a pharmacy or supplement store',
                  'Not a place that diagnoses diseases',
                  'Not a place that prescribes medications',
                  'Not a quick-fix or miracle-cure promise',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 text-lg leading-none mt-0.5">✕</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-gray-500 text-sm italic">
                BioHeal complements your existing medical care — it doesn&apos;t replace it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
              Ready to explore a different path?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No pressure. No urgency. Just a conversation about what&apos;s possible
              when someone truly listens.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Begin Your Journey
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

