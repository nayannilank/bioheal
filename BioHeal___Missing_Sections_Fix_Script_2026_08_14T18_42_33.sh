
#!/bin/bash
# ============================================================
# BioHeal — Write Missing Section Components
# Run from inside your bioheal/ directory
# ============================================================

set -e
echo "🌿 Writing section components..."

# --- Hero ---
cat > src/components/sections/Hero.tsx << 'EOF'
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
EOF
echo "✅ Hero.tsx"

# --- TrustBar ---
cat > src/components/sections/TrustBar.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'

const trustItems = [
  { icon: '🔬', label: 'Evidence-Informed' },
  { icon: '🧬', label: 'Root-Cause Focused' },
  { icon: '🫶', label: 'Personalised Protocols' },
  { icon: '🌿', label: 'Lifestyle as Medicine' },
  { icon: '👨‍👩‍👧', label: 'All Ages' },
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-y border-purple-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
EOF
echo "✅ TrustBar.tsx"

# --- Philosophy ---
cat > src/components/sections/Philosophy.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const pillars = [
  {
    icon: '🔍',
    title: 'Root-Cause Approach',
    description: 'We look beyond symptoms to identify the underlying imbalances — hormonal, nutritional, or environmental — driving your condition.',
    detail: 'Instead of asking "what drug covers this symptom?" we ask "what imbalance is creating it?" — and address it at its source.',
  },
  {
    icon: '🌿',
    title: 'Lifestyle as Medicine',
    description: 'Nutrition, movement, sleep, and stress management become your primary tools for healing — sustainable changes that transform your biology.',
    detail: "These aren't add-ons to treatment — they ARE the treatment. Medications and supplements play a supporting role, not the lead.",
  },
  {
    icon: '💜',
    title: 'Personalised Care',
    description: "Every individual is unique. Your plan is built around your genetics, environment, history, and goals — because one-size-fits-all doesn't heal.",
    detail: "A child's gut issue needs a different approach than an adult's. We design around the individual — their biology, their life, their capacity for change.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Our Philosophy"
          title="Three pillars that guide everything we do"
          description="These aren't just principles — they're the foundation of every conversation, every protocol, and every outcome."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-purple-50/50 to-white border border-purple-100/60 hover:border-purple-200 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-purple-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{pillar.description}</p>
              <p className="text-sm text-gray-500 leading-relaxed border-t border-purple-50 pt-4">{pillar.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
EOF
echo "✅ Philosophy.tsx"

# --- Conditions ---
cat > src/components/sections/Conditions.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const adultConditions = [
  { slug: 'pcos', title: 'PCOS & Hormonal Imbalance', icon: '⚖️', brief: 'Irregular cycles, weight gain, acne, hair loss' },
  { slug: 'thyroid', title: 'Thyroid Disorders', icon: '🦋', brief: 'Fatigue, weight changes, brain fog, hair thinning' },
  { slug: 'gut-health', title: 'Gut Health', icon: '🌱', brief: 'Bloating, IBS, food sensitivities, SIBO' },
  { slug: 'diabetes', title: 'Type 2 Diabetes & Insulin Resistance', icon: '📊', brief: 'Blood sugar imbalance, metabolic health' },
  { slug: 'autoimmune', title: 'Autoimmune Conditions', icon: '🛡️', brief: 'Chronic inflammation, flares, immune dysregulation' },
  { slug: 'fatigue', title: 'Chronic Fatigue', icon: '🔋', brief: 'Persistent exhaustion, low energy, burnout' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Conditions() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Conditions We Address"
          title="Root-cause guidance for chronic health concerns"
          description="Whether it's a condition that's been dismissed, misunderstood, or only partially addressed — we look deeper."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {adultConditions.map((condition) => (
            <motion.div key={condition.slug} variants={cardVariants}>
              <Link
                href={`/conditions/${condition.slug}`}
                className="group block p-6 rounded-2xl bg-white border border-purple-100/60 hover:border-purple-200 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{condition.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-purple-900 group-hover:text-purple-600 transition-colors mb-1">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{condition.brief}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-purple-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/conditions/childrens-health"
            className="group block p-6 rounded-2xl bg-gradient-to-r from-sage-50 to-white border border-sage-100 hover:border-sage-300 hover:shadow-card transition-all duration-300 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">🧒</span>
              <div>
                <h3 className="font-heading font-semibold text-purple-900 group-hover:text-purple-600 transition-colors mb-1">
                  Children&apos;s Health
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Recurring allergies, gut issues, food sensitivities, skin conditions, nutritional deficiencies &amp; behavioural concerns
                </p>
              </div>
              <svg className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
EOF
echo "✅ Conditions.tsx"

# --- HowItWorks ---
cat > src/components/sections/HowItWorks.tsx << 'EOF'
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
EOF
echo "✅ HowItWorks.tsx"

# --- Differentiators ---
cat > src/components/sections/Differentiators.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const differentiators = [
  { icon: '🧠', title: 'Medical + Analytical', description: "Founded by a medically qualified professional with expertise in health data analytics. Your labs aren't just read — they're analysed for patterns others miss." },
  { icon: '🔗', title: 'Multi-Disciplinary', description: 'A rare combination of medical training, health management, nutrition science, and functional medicine — creating a uniquely comprehensive approach.' },
  { icon: '🌱', title: 'Sustainable, Not Sensational', description: 'No miracle cures or 21-day transformations. We build protocols that work with your life — practical, evidence-based, and designed to last.' },
  { icon: '📚', title: 'Education-First', description: "Every person who works with us leaves understanding their own body better. We don't create dependency — we create health literacy." },
  { icon: '🎯', title: 'Data-Informed Personalisation', description: 'Using biomarker analysis and health data interpretation to create truly individualised protocols — not generic templates.' },
  { icon: '👨‍👩‍👧‍👦', title: 'All Ages Welcome', description: 'From childhood gut issues to adult metabolic disorders — we address root-cause health concerns across all life stages.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Differentiators() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-purple-50/40 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="What Makes Us Different"
          title="Not just another wellness space"
          description="BioHeal combines root-cause functional medicine with data-driven lab interpretation and nutrition science — not just intuition, but evidence."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-white border border-purple-100/50 hover:shadow-card transition-shadow duration-300"
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="font-heading font-semibold text-purple-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
EOF
echo "✅ Differentiators.tsx"

# --- Testimonials ---
cat > src/components/sections/Testimonials.tsx << 'EOF'
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
EOF
echo "✅ Testimonials.tsx"

# --- FAQ ---
cat > src/components/sections/FAQ.tsx << 'EOF'
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
EOF
echo "✅ FAQ.tsx"

# --- CTA ---
cat > src/components/sections/CTA.tsx << 'EOF'
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
EOF
echo "✅ CTA.tsx"

echo ""
echo "🎉 All 9 section components written!"
echo "👉 Now restart your dev server: npm run dev"
echo "👉 Then open http://localhost:3000"

