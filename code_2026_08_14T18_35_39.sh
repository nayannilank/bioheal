# 1. Replace the default page.tsx with our homepage
cat > src/app/page.tsx << 'EOF'
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
EOF

# 2. Fix the layout to use our styles path
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BioHeal | Functional Medicine & Lifestyle Health',
    template: '%s | BioHeal',
  },
  description:
    'Uncover the root causes of chronic illness. Personalised functional medicine guidance for PCOS, thyroid, gut health, diabetes & more. Adults & children.',
  metadataBase: new URL('https://bioheal.co.in'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
EOF

# 3. Also check if the default globals.css exists and remove it
rm -f src/app/globals.css

# 4. Restart the dev server
# Press Ctrl+C in the terminal running npm run dev, then:
npm run dev
