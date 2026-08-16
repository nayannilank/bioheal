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
