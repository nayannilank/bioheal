'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-10 sm:p-14 lg:p-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-lavender-300/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to understand your body better?
            </h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Your healing journey begins with a single conversation. No pressure,
              no commitment — just an honest exploration of what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="white" size="lg">
                Begin Your Journey
              </Button>
              <Button
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20BioHeal%2C%20I'd%20like%20to%20know%20more"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Message on WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-sm text-purple-200 italic">
              Whenever you&apos;re ready, we&apos;re here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
