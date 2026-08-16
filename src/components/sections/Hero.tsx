'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-lavender-50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-lavender-100/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-sage-100/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Functional Medicine · Lifestyle Transformation · Root-Cause Healing
              <span className="w-2 h-2 rounded-full bg-purple-400" />
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Healing Through Lifestyle,{' '}
            <span className="text-purple-600">Guided by Science</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your body is an interconnected system — and when something feels off,
            there&apos;s always a reason. BioHeal helps you uncover the root causes of
            chronic health concerns and build a personalised path to lasting
            wellness through nutrition, lifestyle, and evidence-informed guidance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Begin Your Journey
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn Our Approach
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            For adults &amp; children · Bangalore &amp; across India (virtual)
          </motion.p>
        </div>
      </div>
    </section>
  )
}
