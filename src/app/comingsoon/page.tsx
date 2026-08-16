
'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

function ComingSoonContent() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')

  // Convert slug to readable name
  const getPageName = (path: string | null): string | null => {
    if (!path) return null
    const segments = path.split('/').filter(Boolean)
    const last = segments[segments.length - 1]
    return last
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const pageName = getPageName(from)

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="icon-container-lg mx-auto mb-6">🌱</div>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
            {pageName ? `${pageName} is` : 'This page is'} growing
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-3">
            We&apos;re nurturing this part of BioHeal and it&apos;ll be ready soon.
          </p>

          <p className="text-gray-500 text-sm mb-8">
            In the meantime, explore what&apos;s already here — or reach out directly
            if you have questions.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>

          {from && (
            <p className="mt-8 text-xs text-gray-400">
              Requested: <code className="bg-purple-50 px-2 py-0.5 rounded text-purple-500">{from}</code>
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default function ComingSoonPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse-soft text-purple-400">Loading...</div>
      </div>
    }>
      <ComingSoonContent />
    </Suspense>
  )
}

