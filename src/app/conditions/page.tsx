
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { conditions } from '@/lib/conditions'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ConditionsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Conditions We Support</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
              Your symptoms have a story
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We work with people navigating chronic health concerns — conditions that
              conventional medicine often manages but rarely resolves. Here&apos;s where
              functional medicine can make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Conditions Grid ──────────────────────────────── */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="card-elevated block h-full group"
                >
                  <div className="icon-container-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {condition.icon}
                  </div>
                  <h2 className="font-heading text-lg font-semibold text-purple-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {condition.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {condition.shortDescription}
                  </p>
                  <span className="text-purple-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Children's Section ───────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
            <div className="glass-panel p-8 sm:p-10 rounded-3xl text-center">
              <div className="icon-container-lg mx-auto mb-5">👶</div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-purple-900 mb-4">
                Children&apos;s Health
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Children&apos;s bodies are still developing — and they respond beautifully to
                gentle, nutrition-based interventions. We work with parents to address
                allergies, digestive issues, food sensitivities, recurrent infections,
                and behavioural concerns through non-invasive, lifestyle-first approaches.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {['Allergies', 'Digestive Issues', 'Food Sensitivities', 'Picky Eating', 'Recurrent Infections', 'Focus & Behaviour'].map((tag) => (
                  <span key={tag} className="pill-badge">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">
                All children&apos;s consultations are guided through parents — gentle, safe, and age-appropriate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Approach Note ────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" {...fadeInUp}>
            <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100/40">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-medium text-purple-800">Our approach:</span>{' '}
                We don&apos;t treat conditions — we support people living with them. Every protocol
                is personalised, evidence-informed, and designed to work alongside your existing
                medical care. We never diagnose, prescribe, or replace your primary physician.
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
              Don&apos;t see your concern listed?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Functional medicine isn&apos;t limited to specific conditions. If you&apos;re
              dealing with something chronic that hasn&apos;t been resolved, we&apos;re happy
              to have a conversation.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                Learn Our Approach
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

