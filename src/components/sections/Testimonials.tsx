'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/testimonials'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Healing Stories"
          title="Real people, real transformations"
          description="Every journey is unique. Here's what people experience when root causes are finally addressed."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-purple-50/30 to-white border border-purple-100/50"
            >
              <span className="absolute top-4 right-6 text-5xl text-purple-100 font-accent leading-none select-none">
                &ldquo;
              </span>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm flex items-center justify-center">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-medium text-purple-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
