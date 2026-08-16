'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      className={`max-w-2xl ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-block text-sm font-medium text-purple-500 tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
