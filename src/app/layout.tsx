
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased relative min-h-screen bg-purple-50/30" suppressHydrationWarning>
        {/* Fixed background — Tree of Life with purple tint */}
        <div className="fixed inset-0 z-0" aria-hidden="true">
          {/* Purple base tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50/50" />

          {/* Tree of Life image — visible */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply"
            style={{ backgroundImage: 'url(/background.jpg)' }}
          />

          {/* Soft purple overlay to unify */}
          <div className="absolute inset-0 bg-purple-100/20" />
        </div>

        {/* Content layer */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  )
}

