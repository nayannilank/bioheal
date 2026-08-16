
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-lavender-50">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-lavender-100/30 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Top bar: Logo left, CTAs right */}
        <motion.div
          className="flex items-center justify-between py-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo — top left */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="BioHeal Logo"
              width={72}
              height={72}
              className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
              priority
            />
          </div>

          {/* CTAs — top right */}
          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Begin Your Journey
            </Button>
            <Button href="/about" variant="secondary" size="sm">
              Learn Our Approach
            </Button>
          </div>
        </motion.div>

        {/* Brand hierarchy — centered */}
        <motion.div
          className="text-center pb-12 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Brand name — largest */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-900 leading-none mb-4">
            BioHeal
          </h1>

          {/* Tagline — medium */}
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-purple-700 mb-3">
            Healing Through Lifestyle, Guided by Science
          </p>

          {/* Descriptor — smallest */}
          <p className="text-sm sm:text-base lg:text-lg font-medium text-purple-500 tracking-wide">
            Functional Medicine · Lifestyle Transformation · Root-Cause Healing
          </p>
        </motion.div>
      </div>
    </section>
  )
}

