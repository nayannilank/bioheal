
'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import HomeTabs, { type TabId } from '@/components/ui/HomeTabs'
import TabPanel from '@/components/ui/TabPanel'

// Tab: Home
import TrustBar from '@/components/sections/TrustBar'

// Tab: Our Approach
import Philosophy from '@/components/sections/Philosophy'
import Differentiators from '@/components/sections/Differentiators'

// Tab: Conditions
import Conditions from '@/components/sections/Conditions'

// Tab: How It Works
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>('home')

  return (
    <>
      {/* Hero is ALWAYS visible above tabs */}
      <Hero />

      {/* Segmented control tabs — sticky below navbar */}
      <HomeTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab content panels — pre-rendered, show/hide */}
      <div className="min-h-[60vh]">
        <TabPanel id="home" activeTab={activeTab}>
          <TrustBar />
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  Your body is an interconnected system — and when something feels off,
                  there&apos;s always a reason. BioHeal helps you uncover the root causes of
                  chronic health concerns and build a personalised path to lasting
                  wellness through nutrition, lifestyle, and evidence-informed guidance.
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-900 mb-6">
                  Your body isn&apos;t broken. It&apos;s asking to be understood.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Something brought you here — maybe a symptom that won&apos;t resolve, a question
                  no one&apos;s answered, or just a quiet feeling that there&apos;s more to your
                  health story.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  BioHeal is a functional medicine &amp; lifestyle health space that helps people
                  of all ages — adults and children alike — understand the root causes of chronic
                  health concerns and build a personalised path to lasting wellness.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We don&apos;t silence symptoms. We listen to what they&apos;re saying.
                </p>
              </div>
            </div>
          </section>
        </TabPanel>

        <TabPanel id="approach" activeTab={activeTab}>
          <Philosophy />
          <Differentiators />
        </TabPanel>

        <TabPanel id="conditions" activeTab={activeTab}>
          <Conditions />
        </TabPanel>

        <TabPanel id="how-it-works" activeTab={activeTab}>
          <HowItWorks />
          <FAQ />
        </TabPanel>
      </div>
    </>
  )
}

