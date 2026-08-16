'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Accordion from '@/components/ui/Accordion'
import { faqItems } from '@/lib/faq'

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Common Questions"
          title="Curious? Here's what people usually ask"
          description="If your question isn't here, we'd love to hear it — reach out anytime."
        />

        <motion.div
          className="max-w-3xl mx-auto mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
