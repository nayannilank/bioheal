'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const differentiators = [
  { icon: '🧠', title: 'Medical + Analytical', description: "Founded by a medically qualified professional with expertise in health data analytics. Your labs aren't just read — they're analysed for patterns others miss." },
  { icon: '🔗', title: 'Multi-Disciplinary', description: 'A rare combination of medical training, health management, nutrition science, and functional medicine — creating a uniquely comprehensive approach.' },
  { icon: '🌱', title: 'Sustainable, Not Sensational', description: 'No miracle cures or 21-day transformations. We build protocols that work with your life — practical, evidence-based, and designed to last.' },
  { icon: '📚', title: 'Education-First', description: "Every person who works with us leaves understanding their own body better. We don't create dependency — we create health literacy." },
  { icon: '🎯', title: 'Data-Informed Personalisation', description: 'Using biomarker analysis and health data interpretation to create truly individualised protocols — not generic templates.' },
  { icon: '👨‍👩‍👧‍👦', title: 'All Ages Welcome', description: 'From childhood gut issues to adult metabolic disorders — we address root-cause health concerns across all life stages.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Differentiators() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-purple-50/40 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="What Makes Us Different"
          title="Not just another wellness space"
          description="BioHeal combines root-cause functional medicine with data-driven lab interpretation and nutrition science — not just intuition, but evidence."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-white border border-purple-100/50 hover:shadow-card transition-shadow duration-300"
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="font-heading font-semibold text-purple-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
