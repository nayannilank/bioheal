import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import AboutClient from './AboutClient'

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Philosophy — Root-Cause Functional Medicine',
  description:
    'BioHeal is a functional medicine & lifestyle health space. We uncover root causes of chronic illness through personalised nutrition, lifestyle coaching, and evidence-informed guidance.',
  path: '/about',
  keywords: ['functional medicine philosophy', 'root cause approach', 'lifestyle medicine India', 'holistic health Bangalore'],
})

export default function AboutPage() {
  return <AboutClient />
}
