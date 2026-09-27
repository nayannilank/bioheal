import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = generatePageMetadata({
  title: 'Services — Consultations, Nutrition & Lifestyle Coaching',
  description:
    '1:1 functional medicine consultations, lab interpretation, personalised nutrition planning, and lifestyle coaching. In-person (Bangalore) and virtual (all India).',
  path: '/services',
  keywords: ['functional medicine consultation', 'nutrition planning India', 'lifestyle coaching', 'online health consultation India'],
})

export default function ServicesPage() {
  return <ServicesClient />
}
