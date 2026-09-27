import type { Metadata } from 'next'

const BASE_URL = 'https://bioheal.co.in'
const SITE_NAME = 'BioHeal'
const DEFAULT_DESCRIPTION =
  'Functional medicine & lifestyle health space. Uncover root causes of chronic illness through personalised nutrition, lifestyle coaching, and evidence-informed guidance. For adults & children.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'BioHeal | Functional Medicine & Lifestyle Health',
    template: '%s | BioHeal',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'functional medicine',
    'lifestyle medicine',
    'root cause healing',
    'PCOS treatment',
    'thyroid specialist',
    'gut health',
    'diabetes reversal',
    'autoimmune support',
    'nutrition planning',
    'lifestyle coaching',
    'Bangalore',
    'India',
    'holistic health',
    'personalised care',
  ],
  authors: [{ name: 'BioHeal', url: BASE_URL }],
  creator: 'BioHeal',
  publisher: 'BioHeal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: 'BioHeal | Healing Through Lifestyle, Guided by Science',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BioHeal — Functional Medicine & Lifestyle Health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioHeal | Healing Through Lifestyle, Guided by Science',
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const image = ogImage || '/og-image.jpg'

  return {
    title,
    description,
    keywords: [
      'functional medicine',
      'lifestyle medicine',
      'root cause healing',
      'BioHeal',
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | BioHeal`,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      title: `${title} | BioHeal`,
      description,
      images: [image],
    },
  }
}
