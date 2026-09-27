import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import ContactClient from './ContactClient'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact & Booking — Begin Your Journey',
  description:
    'Book a functional medicine consultation with BioHeal. In-person (Bangalore) or virtual (all India). No pressure, no commitment — just a conversation about your health.',
  path: '/contact',
  keywords: ['book functional medicine consultation', 'health consultation Bangalore', 'online nutrition consultation India'],
})

export default function ContactPage() {
  return <ContactClient />
}
