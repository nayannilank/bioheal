import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Philosophy from '@/components/sections/Philosophy'
import Conditions from '@/components/sections/Conditions'
import HowItWorks from '@/components/sections/HowItWorks'
import Differentiators from '@/components/sections/Differentiators'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Philosophy />
      <Conditions />
      <HowItWorks />
      <Differentiators />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
