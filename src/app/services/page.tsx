
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const services = [
  {
    icon: '🔬',
    title: '1:1 Functional Medicine Consultation',
    duration: '60–90 minutes',
    description:
      'A deep-dive conversation where we map your health story — symptoms, history, lifestyle, labs, and goals. This isn\'t a rushed appointment. It\'s the kind of listening you\'ve been looking for.',
    includes: [
      'Comprehensive health history review',
      'Symptom mapping & timeline analysis',
      'Functional interpretation of existing labs',
      'Identification of root-cause patterns',
      'Personalised next-step recommendations',
      'Follow-up summary & action plan',
    ],
    bestFor: 'Anyone starting their functional medicine journey or seeking a second opinion on chronic concerns.',
    format: 'In-person (Bangalore) or Virtual (all India)',
  },
  {
    icon: '📊',
    title: 'Functional Lab Interpretation',
    duration: '45–60 minutes',
    description:
      'Your lab reports tell a story — but conventional ranges often miss the nuance. We interpret your bloodwork, hormones, thyroid panels, gut markers, and metabolic labs through a functional lens to uncover what\'s really happening.',
    includes: [
      'Review of existing lab reports (blood, hormones, thyroid, metabolic)',
      'Functional range analysis (not just "normal" ranges)',
      'Pattern identification across multiple markers',
      'Correlation with symptoms & history',
      'Recommendations for additional testing if needed',
      'Written summary of findings',
    ],
    bestFor: 'Those with "normal" reports who still don\'t feel right, or anyone wanting deeper insight from their labs.',
    format: 'Virtual (share reports ahead of session)',
  },
  {
    icon: '🥗',
    title: 'Personalised Nutrition Planning',
    duration: 'Ongoing support',
    description:
      'Food is medicine — but only when it\'s the right food for your body, your condition, and your kitchen. We create Indian kitchen-friendly meal frameworks that are practical, sustainable, and therapeutic.',
    includes: [
      'Condition-specific nutrition strategy',
      'Indian kitchen-friendly meal frameworks',
      'Food-as-medicine recommendations',
      'Anti-inflammatory & gut-healing protocols',
      'Supplement guidance (targeted, not generic)',
      'Adjustments based on progress & feedback',
    ],
    bestFor: 'Anyone managing PCOS, thyroid, gut issues, diabetes, or autoimmune conditions through food.',
    format: 'Virtual with ongoing WhatsApp/email support',
  },
  {
    icon: '🌙',
    title: 'Lifestyle Coaching',
    duration: 'Ongoing support',
    description:
      'Health isn\'t just what you eat. Sleep, stress, movement, and daily rhythms shape your biology as much as nutrition does. We help you build sustainable lifestyle habits that support your healing — without overwhelming your life.',
    includes: [
      'Sleep hygiene & circadian rhythm optimisation',
      'Stress management & nervous system support',
      'Movement guidance (gentle, condition-appropriate)',
      'Daily routine & rhythm structuring',
      'Supplement & lifestyle stack recommendations',
      'Regular check-ins & protocol adjustments',
    ],
    bestFor: 'Those dealing with fatigue, burnout, hormonal imbalances, or anyone wanting to build a healthier daily rhythm.',
    format: 'Virtual with regular check-ins',
  },
]

const howWeWork = [
  {
    step: '01',
    title: 'Book a Consultation',
    description: 'Start with a 1:1 session where we listen, map your story, and understand your goals.',
  },
  {
    step: '02',
    title: 'Get Your Personalised Plan',
    description: 'Based on your consultation, we create a tailored protocol — nutrition, lifestyle, and targeted support.',
  },
  {
    step: '03',
    title: 'Implement with Guidance',
    description: 'We walk with you through implementation — answering questions, adjusting plans, and celebrating progress.',
  },
  {
    step: '04',
    title: 'Review & Evolve',
    description: 'As your body responds, we refine. Health is dynamic — your plan should be too.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Services</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
              How we can help
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Every service is designed around one principle: understand first, then guide.
              No cookie-cutter plans. No generic advice. Just thoughtful, personalised support
              built for your body and your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ────────────────────────────────── */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card-elevated"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="icon-container-lg">{service.icon}</div>
                      <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-purple-900">
                          {service.title}
                        </h2>
                        <span className="pill-badge mt-1">{service.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Best for */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-purple-700 mb-1">Best for:</p>
                      <p className="text-sm text-gray-600 italic">{service.bestFor}</p>
                    </div>

                    {/* Format */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>📍</span>
                      <span>{service.format}</span>
                    </div>
                  </div>

                  {/* Right: What's included */}
                  <div className="mt-6 lg:mt-0 lg:w-80 flex-shrink-0">
                    <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100/40">
                      <h3 className="font-heading text-sm font-semibold text-purple-700 uppercase tracking-wide mb-3">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Work Together ─────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <span className="section-label">The Process</span>
            <h2 className="section-title">How we work together</h2>
            <p className="section-description">
              Simple, structured, and always at your pace.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 text-sm font-bold font-heading">
                  {step.step}
                </div>
                <h3 className="font-heading text-base font-semibold text-purple-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What to Expect ───────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
            <div className="glass-panel p-8 sm:p-10 rounded-3xl">
              <h2 className="font-heading text-2xl font-bold text-purple-900 mb-6 text-center">
                What to expect when you work with us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-sm font-semibold text-purple-700 uppercase tracking-wide mb-3">
                    You will get
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Unhurried, focused attention',
                      'Evidence-informed recommendations',
                      'Indian kitchen-friendly meal plans',
                      'Clear explanations (no jargon)',
                      'Ongoing support between sessions',
                      'A partner in your health journey',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-sage-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-purple-700 uppercase tracking-wide mb-3">
                    You won&apos;t get
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Rushed 5-minute consultations',
                      'Generic one-size-fits-all plans',
                      'Pressure to buy supplements',
                      'Fear-based urgency tactics',
                      'Medical diagnoses or prescriptions',
                      'Promises of overnight miracles',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-purple-400 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Pricing Note ─────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
            <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100/40">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-medium text-purple-800">A note on pricing:</span>{' '}
                We believe in transparency. Consultation fees will be shared when you book,
                and there are never hidden charges. Our focus is on delivering value through
                genuine care — not upselling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
              Not sure where to start?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              That&apos;s completely okay. Most people begin with a 1:1 consultation —
              it&apos;s the best way for us to understand your story and recommend the
              right path forward.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20BioHeal%2C%20I%20have%20a%20question%20about%20your%20services"
                variant="secondary"
                size="lg"
              >
                Ask a Question
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400 italic">
              No commitment required. Just a conversation.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

