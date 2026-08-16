
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  phone: string
  concern: string
  ageGroup: string
  message: string
  howFound: string
}

const concerns = [
  'PCOS & Hormonal Imbalances',
  'Thyroid Disorders',
  'Gut Health & Digestive Issues',
  'Type 2 Diabetes & Metabolic Health',
  'Autoimmune Conditions',
  'Chronic Fatigue & Low Energy',
  'Unexplained Weight Gain',
  'Children\'s Health',
  'Other / Not Sure',
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    concern: '',
    ageGroup: '',
    message: '',
    howFound: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        concern: '',
        ageGroup: '',
        message: '',
        howFound: '',
      })
    } catch {
      setError('Something went wrong. Please try WhatsApp or email us directly at care@bioheal.co.in')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <span className="section-label">Get in Touch</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
              Let&apos;s start a conversation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              No pressure. No commitment. Just a chance to share what&apos;s on your mind
              and explore whether BioHeal is the right fit for your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content: Form + Sidebar ─────────────────── */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ─── Contact Form (3/5 width) ─────────────────── */}
            <motion.div className="lg:col-span-3" {...fadeInUp}>
              {isSubmitted ? (
                <div className="card-elevated text-center py-16">
                  <div className="icon-container-lg mx-auto mb-6">💜</div>
                  <h2 className="font-heading text-2xl font-bold text-purple-900 mb-4">
                    Thank you for reaching out
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    We&apos;ve received your message and will get back to you within 24–48 hours.
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    In the meantime, feel free to explore our{' '}
                    <a href="/about" className="text-purple-600 underline">philosophy</a>{' '}
                    or{' '}
                    <a href="/conditions" className="text-purple-600 underline">conditions we support</a>.
                  </p>
                  <Button href="/" variant="secondary" size="md">
                    Back to Home
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-elevated">
                  <h2 className="font-heading text-xl font-bold text-purple-900 mb-6">
                    Tell us about yourself
                  </h2>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                        placeholder="Full name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone (WhatsApp preferred)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Age Group */}
                    <div>
                      <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1.5">
                        This is for
                      </label>
                      <select
                        id="ageGroup"
                        name="ageGroup"
                        value={formData.ageGroup}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="adult-self">Myself (Adult)</option>
                        <option value="adult-other">Another adult (family member)</option>
                        <option value="child">My child</option>
                      </select>
                    </div>

                    {/* Primary Concern */}
                    <div>
                      <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Primary concern <span className="text-purple-400">*</span>
                      </label>
                      <select
                        id="concern"
                        name="concern"
                        required
                        value={formData.concern}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                      >
                        <option value="">What brings you here?</option>
                        {concerns.map((concern) => (
                          <option key={concern} value={concern}>
                            {concern}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Anything you&apos;d like us to know?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all resize-none"
                        placeholder="A brief note about your health journey, symptoms, or what you're hoping for... (optional)"
                      />
                    </div>

                    {/* How did you find us */}
                    <div>
                      <label htmlFor="howFound" className="block text-sm font-medium text-gray-700 mb-1.5">
                        How did you find BioHeal?
                      </label>
                      <select
                        id="howFound"
                        name="howFound"
                        value={formData.howFound}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-white/70 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-300 transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="google">Google Search</option>
                        <option value="instagram">Instagram</option>
                        <option value="referral">Friend / Family Referral</option>
                        <option value="doctor">Doctor Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 shadow-soft hover:shadow-card transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-gray-400">
                      We typically respond within 24–48 hours. Your information is kept confidential.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* ─── Sidebar (2/5 width) ──────────────────────── */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Quick Contact */}
              <div className="card-base">
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-4">
                  Prefer to reach out directly?
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:care@bioheal.co.in"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      ✉️
                    </span>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-xs text-gray-400">care@bioheal.co.in</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/91XXXXXXXXXX?text=Hi%20BioHeal%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors">
                      💬
                    </span>
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-xs text-gray-400">Quick questions? Message us</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Consultation Info */}
              <div className="card-base">
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      1
                    </span>
                    <p className="text-sm text-gray-600">
                      We review your message and understand your concern
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      2
                    </span>
                    <p className="text-sm text-gray-600">
                      We reach out to schedule a convenient time for your consultation
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      3
                    </span>
                    <p className="text-sm text-gray-600">
                      Your first session — unhurried, focused, and entirely about you
                    </p>
                  </li>
                </ol>
              </div>

              {/* Availability */}
              <div className="card-base">
                <h3 className="font-heading text-lg font-semibold text-purple-900 mb-3">
                  Availability
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>In-person</span>
                    <span className="text-purple-600 font-medium">Bangalore</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Virtual</span>
                    <span className="text-purple-600 font-medium">All India</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response time</span>
                    <span className="text-purple-600 font-medium">24–48 hours</span>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100/40">
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;We don&apos;t believe in pressure or urgency. Take your time.
                  When you&apos;re ready, we&apos;re here.&rdquo;
                </p>
                <p className="text-xs text-purple-500 mt-2 font-medium">— Team BioHeal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Mini Section ─────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
            <h2 className="font-heading text-2xl font-bold text-purple-900 mb-8 text-center">
              Common questions before booking
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Do I need a referral to book?',
                  a: 'No. You can reach out directly. No referral needed.',
                },
                {
                  q: 'What if I\'m not sure BioHeal is right for me?',
                  a: 'That\'s completely okay. Send us a message with your concern and we\'ll honestly tell you if we can help — or point you in the right direction.',
                },
                {
                  q: 'Is this a replacement for my doctor?',
                  a: 'No. BioHeal complements your existing medical care. We work alongside your doctors, not instead of them.',
                },
                {
                  q: 'How much does a consultation cost?',
                  a: 'We\'ll share consultation fees when you reach out. There are no hidden charges, and we never upsell.',
                },
                {
                  q: 'Can I book for my child?',
                  a: 'Yes! We work with children through their parents. Select "My child" in the form above and tell us about their concern.',
                },
              ].map((faq) => (
                <div key={faq.q} className="card-base">
                  <h3 className="font-heading text-sm font-semibold text-purple-900 mb-1.5">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

