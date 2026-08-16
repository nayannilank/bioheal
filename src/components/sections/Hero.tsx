
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-lavender-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-lavender-100/30 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Brand hierarchy — centered, clean */}
        <motion.div
          className="text-center py-12 lg:py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand name — largest */}
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-purple-900 leading-none mb-5">
            BioHeal
          </h1>

          {/* Tagline — medium */}
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-purple-700 mb-3">
            Healing Through Lifestyle, Guided by Science
          </p>

          {/* Descriptor — smallest */}
          <p className="text-sm sm:text-base lg:text-lg font-medium text-purple-500 tracking-wide mb-10">
            Functional Medicine · Lifestyle Transformation · Root-Cause Healing
          </p>

          {/* CTAs — centered below descriptor */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Begin Your Journey
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn Our Approach
            </Button>
          </motion.div>

          {/* Subtle location note */}
          <motion.p
            className="mt-6 text-sm text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            For adults &amp; children · Bangalore &amp; across India (virtual)
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

