'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const adultConditions = [
  { slug: 'pcos', title: 'PCOS & Hormonal Imbalance', icon: '⚖️', brief: 'Irregular cycles, weight gain, acne, hair loss' },
  { slug: 'thyroid', title: 'Thyroid Disorders', icon: '🦋', brief: 'Fatigue, weight changes, brain fog, hair thinning' },
  { slug: 'gut-health', title: 'Gut Health', icon: '🌱', brief: 'Bloating, IBS, food sensitivities, SIBO' },
  { slug: 'diabetes', title: 'Type 2 Diabetes & Insulin Resistance', icon: '📊', brief: 'Blood sugar imbalance, metabolic health' },
  { slug: 'autoimmune', title: 'Autoimmune Conditions', icon: '🛡️', brief: 'Chronic inflammation, flares, immune dysregulation' },
  { slug: 'fatigue', title: 'Chronic Fatigue', icon: '🔋', brief: 'Persistent exhaustion, low energy, burnout' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Conditions() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Conditions We Address"
          title="Root-cause guidance for chronic health concerns"
          description="Whether it's a condition that's been dismissed, misunderstood, or only partially addressed — we look deeper."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {adultConditions.map((condition) => (
            <motion.div key={condition.slug} variants={cardVariants}>
              <Link
                href={`/conditions/${condition.slug}`}
                className="group block p-6 rounded-2xl bg-white border border-purple-100/60 hover:border-purple-200 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{condition.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-purple-900 group-hover:text-purple-600 transition-colors mb-1">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{condition.brief}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-purple-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/conditions/childrens-health"
            className="group block p-6 rounded-2xl bg-gradient-to-r from-sage-50 to-white border border-sage-100 hover:border-sage-300 hover:shadow-card transition-all duration-300 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">🧒</span>
              <div>
                <h3 className="font-heading font-semibold text-purple-900 group-hover:text-purple-600 transition-colors mb-1">
                  Children&apos;s Health
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Recurring allergies, gut issues, food sensitivities, skin conditions, nutritional deficiencies &amp; behavioural concerns
                </p>
              </div>
              <svg className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
