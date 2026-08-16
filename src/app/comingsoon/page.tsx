
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function ComingSoonPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-lavender-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-lavender-100/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-sage-100/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/logo.png"
              alt="BioHeal Logo"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
          </motion.div>

          {/* Brand name */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BioHeal
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-heading text-lg sm:text-xl text-purple-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Healing Through Lifestyle, Guided by Science
          </motion.p>

          {/* WIP Message */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-3xl border border-purple-100/60 p-8 sm:p-10 mb-8 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-5 text-2xl">
              🌱
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-purple-900 mb-4">
              Something beautiful is growing here
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              This page is currently being crafted with the same care and attention
              we bring to everything at BioHeal. We&apos;re building something
              meaningful — and it&apos;ll be ready soon.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              In the meantime, feel free to explore what&apos;s already live or
              reach out to us directly — we&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20BioHeal%2C%20I'd%20like%20to%20know%20more"
              variant="secondary"
              size="lg"
            >
              Message on WhatsApp
            </Button>
          </motion.div>

          {/* Descriptor */}
          <motion.p
            className="mt-10 text-xs text-purple-400 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Functional Medicine · Lifestyle Transformation · Root-Cause Healing
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

