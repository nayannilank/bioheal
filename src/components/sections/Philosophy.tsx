'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const pillars = [
  {
    icon: '🔍',
    title: 'Root-Cause Approach',
    description: 'We look beyond symptoms to identify the underlying imbalances — hormonal, nutritional, or environmental — driving your condition.',
    detail: 'Instead of asking "what drug covers this symptom?" we ask "what imbalance is creating it?" — and address it at its source.',
  },
  {
    icon: '🌿',
    title: 'Lifestyle as Medicine',
    description: 'Nutrition, movement, sleep, and stress management become your primary tools for healing — sustainable changes that transform your biology.',
    detail: "These aren't add-ons to treatment — they ARE the treatment. Medications and supplements play a supporting role, not the lead.",
  },
  {
    icon: '💜',
    title: 'Personalised Care',
    description: "Every individual is unique. Your plan is built around your genetics, environment, history, and goals — because one-size-fits-all doesn't heal.",
    detail: "A child's gut issue needs a different approach than an adult's. We design around the individual — their biology, their life, their capacity for change.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Our Philosophy"
          title="Three pillars that guide everything we do"
          description="These aren't just principles — they're the foundation of every conversation, every protocol, and every outcome."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-purple-50/50 to-white border border-purple-100/60 hover:border-purple-200 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-purple-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{pillar.description}</p>
              <p className="text-sm text-gray-500 leading-relaxed border-t border-purple-50 pt-4">{pillar.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
