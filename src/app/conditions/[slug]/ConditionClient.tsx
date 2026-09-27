'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import { conditions } from '@/lib/conditions'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

interface Props {
  slug: string
}

export default function ConditionClient({ slug }: Props) {
  const condition = conditions.find((c) => c.slug === slug)

  if (!condition) {
    notFound()
  }

  return (
    <>
      {/* ─── Breadcrumb ───────────────────────────────────── */}
      <div className="pt-8 pb-2">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/conditions" className="hover:text-purple-600 transition-colors">
              Conditions
            </Link>
            <span>/</span>
            <span className="text-gray-700">{condition.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-container-lg mx-auto mb-6 text-4xl">
              {condition.icon}
            </div>
            <span className="section-label">{condition.title}</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 mt-3">
              {condition.heroHeading}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {condition.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── What Is It ───────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div className="card-base" {...fadeInUp}>
              <h2 className="font-heading text-xl font-bold text-purple-900 mb-4">
                The bigger picture
              </h2>
              <p className="text-gray-600 leading-relaxed">{condition.whatIsIt}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Two Approaches ───────────────────────────────── */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="card-base border-l-4 border-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-base font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                Conventional approach
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {condition.conventionalApproach}
              </p>
            </motion.div>

            <motion.div
              className="card-base border-l-4 border-purple-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-base font-semibold text-purple-600 mb-3 uppercase tracking-wide">
                Functional medicine approach
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {condition.functionalApproach}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Root Causes & Symptoms ───────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Root Causes */}
            <motion.div {...fadeInUp}>
              <h2 className="font-heading text-xl font-bold text-purple-900 mb-5">
                Root causes we investigate
              </h2>
              <ul className="space-y-3">
                {condition.rootCauses.map((cause) => (
                  <li key={cause} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Symptoms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="font-heading text-xl font-bold text-purple-900 mb-5">
                Common symptoms
              </h2>
              <div className="flex flex-wrap gap-2">
                {condition.symptoms.map((symptom) => (
                  <span key={symptom} className="pill-badge">
                    {symptom}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── How We Help ──────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-purple-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="font-heading text-2xl font-bold text-purple-900 mb-8 text-center">
                How we help
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {condition.howWeHelp.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-soft">
                    <span className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Lifestyle Focus ──────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="font-heading text-2xl font-bold text-purple-900 mb-6 text-center">
                Lifestyle as medicine
              </h2>
              <div className="space-y-3">
                {condition.lifestyleFocus.map((item) => (
                  <div key={item} className="flex items-start gap-3 card-base py-3">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Who Is This For ──────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div className="glass-panel p-8 sm:p-10 rounded-3xl" {...fadeInUp}>
              <h2 className="font-heading text-xl font-bold text-purple-900 mb-5 text-center">
                This is for you if…
              </h2>
              <ul className="space-y-3">
                {condition.whoIsThisFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-purple-900 mb-4">
              Ready to explore a root-cause approach?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              No pressure. Reach out and share your concern — we&apos;ll let you know
              honestly if we can help.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/conditions" variant="secondary" size="lg">
                View All Conditions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
