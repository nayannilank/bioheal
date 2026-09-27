import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { conditions } from '@/lib/conditions'
import ConditionClient from './ConditionClient'

const conditionMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  pcos: {
    title: 'PCOS & Hormonal Imbalances — Root-Cause Approach',
    description: 'Functional medicine approach to PCOS. Address insulin resistance, inflammation, and hormonal imbalances through personalised nutrition and lifestyle interventions.',
    keywords: ['PCOS treatment India', 'PCOS root cause', 'hormonal imbalance functional medicine', 'PCOS nutrition plan'],
  },
  thyroid: {
    title: 'Thyroid Disorders — Beyond TSH',
    description: 'Complete thyroid support through functional medicine. Hashimoto\'s, hypothyroidism, and subclinical thyroid issues addressed through nutrition, gut health, and lifestyle.',
    keywords: ['thyroid functional medicine', 'Hashimotos support', 'hypothyroidism root cause', 'thyroid nutrition India'],
  },
  'gut-health': {
    title: 'Gut Health & Digestive Issues — Heal From Within',
    description: 'Functional medicine approach to IBS, bloating, acid reflux, and food sensitivities. Personalised gut healing protocols using nutrition and lifestyle interventions.',
    keywords: ['gut health specialist India', 'IBS functional medicine', 'bloating treatment', 'digestive health'],
  },
  diabetes: {
    title: 'Type 2 Diabetes & Metabolic Health — Lifestyle-First',
    description: 'Reverse insulin resistance through functional medicine. Blood sugar management, personalised nutrition, and lifestyle interventions for Type 2 diabetes.',
    keywords: ['diabetes reversal India', 'insulin resistance treatment', 'metabolic health', 'blood sugar management'],
  },
  autoimmune: {
    title: 'Autoimmune Conditions — Calming Inflammation Naturally',
    description: 'Functional medicine support for autoimmune conditions. Identify triggers, heal gut barrier, reduce inflammation through personalised protocols.',
    keywords: ['autoimmune functional medicine', 'autoimmune diet India', 'inflammation reduction'],
  },
  fatigue: {
    title: 'Chronic Fatigue & Low Energy — Find the Root Cause',
    description: 'Persistent exhaustion has a reason. Functional medicine approach to chronic fatigue — addressing adrenal health, nutrients, thyroid, and mitochondrial function.',
    keywords: ['chronic fatigue treatment India', 'adrenal fatigue', 'low energy root cause'],
  },
  'weight-management': {
    title: 'Unexplained Weight Gain — Beyond Calories',
    description: 'When diets don\'t work, the problem isn\'t willpower. Functional medicine approach to stubborn weight — addressing hormones, insulin, thyroid, and inflammation.',
    keywords: ['unexplained weight gain', 'weight loss functional medicine', 'hormonal weight gain India'],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = conditionMeta[slug]

  if (!meta) {
    return { title: 'Condition Not Found' }
  }

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/conditions/${slug}`,
    keywords: meta.keywords,
  })
}

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }))
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ConditionClient slug={slug} />
}
