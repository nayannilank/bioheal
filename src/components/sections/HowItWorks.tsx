'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const steps = [
  { number: '01', title: 'Discovery Conversation', description: "A brief, no-pressure conversation to understand your concerns, explain our approach, and see if we're the right fit for you.", note: 'Free · 15 minutes' },
  { number: '02', title: 'Deep Dive Assessment', description: 'A comprehensive, unhurried session where we map your full health story — history, labs, lifestyle, environment — and begin connecting the dots.', note: '60–90 minutes' },
  { number: '03', title: 'Your Personalised Protocol', description: 'You receive a tailored roadmap: nutrition plan, lifestyle adjustments, supplement guidance, and a clear monitoring plan — built for your life.', note: 'Actionable & sustainable' },
  { number: '04', title: 'Ongoing Guidance & Adjustment', description: 'Regular follow-ups to track progress, troubleshoot challenges, and refine your plan as your body responds and heals.', note: 'Bi-weekly / monthly' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Your path from confusion to clarity"
          description="No rush. No pressure. Just a clear, guided process that meets you where you are."
        />

        <motion.div
          className="max-w-3xl mx-auto mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={stepVariants} className="relative flex gap-6 pb-12 last:pb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-purple-200 to-purple-50" />
              )}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-100 text-purple-600 font-heading font-bold text-sm flex items-center justify-center border-2 border-purple-200">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                <span className="inline-block text-xs font-medium text-purple-500 bg-purple-50 px-3 py-1 rounded-full">{step.note}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
