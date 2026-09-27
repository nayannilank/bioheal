import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import ConditionsClient from './ConditionsClient'

export const metadata: Metadata = generatePageMetadata({
  title: 'Conditions We Support — PCOS, Thyroid, Gut Health & More',
  description:
    'Functional medicine support for PCOS, thyroid disorders, gut health, Type 2 diabetes, autoimmune conditions, chronic fatigue, and unexplained weight gain. Adults & children.',
  path: '/conditions',
  keywords: ['PCOS functional medicine', 'thyroid root cause', 'gut health specialist', 'diabetes reversal lifestyle', 'autoimmune support India'],
})

export default function ConditionsPage() {
  return <ConditionsClient />
}
