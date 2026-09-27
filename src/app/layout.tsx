import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { defaultMetadata } from '@/lib/metadata'
import StructuredData from '@/components/seo/StructuredData'

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

export const metadata: Metadata = defaultMetadata

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
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body className="antialiased relative min-h-screen bg-purple-50/30" suppressHydrationWarning>
        {/* Fixed background */}
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50/50" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply"
            style={{ backgroundImage: 'url(/background.jpg)' }}
          />
          <div className="absolute inset-0 bg-purple-100/20" />
        </div>

        {/* Content */}
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
