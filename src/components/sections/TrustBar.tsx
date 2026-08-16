'use client'

import { motion } from 'framer-motion'

const trustItems = [
  { icon: '🔬', label: 'Evidence-Informed' },
  { icon: '🧬', label: 'Root-Cause Focused' },
  { icon: '🫶', label: 'Personalised Protocols' },
  { icon: '🌿', label: 'Lifestyle as Medicine' },
  { icon: '👨‍👩‍👧', label: 'All Ages' },
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-y border-purple-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
