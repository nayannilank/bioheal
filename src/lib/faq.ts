export interface FAQItem {
  question: string
  answer: string
  category?: 'general' | 'services' | 'booking' | 'conditions'
}

export const faqItems: FAQItem[] = [
  {
    question: 'What is functional medicine?',
    answer: 'Functional medicine is an approach that focuses on identifying and addressing the root causes of disease, rather than just managing symptoms. It looks at how all systems in your body are interconnected — your gut, hormones, immune system, metabolism — and uses nutrition, lifestyle, and targeted interventions to restore balance.',
    category: 'general',
  },
  {
    question: 'How is BioHeal different from seeing a regular doctor?',
    answer: "We don't replace your doctor — we complement their work. While conventional medicine excels at acute care and emergencies, BioHeal focuses on the chronic, lifestyle-driven conditions that need deeper investigation. Our consultations are 60-90 minutes (not 10), we look at your full health timeline, and we build sustainable protocols around nutrition, sleep, stress, and movement.",
    category: 'general',
  },
  {
    question: 'What conditions do you work with?',
    answer: 'We work with adults dealing with PCOS, thyroid disorders, gut health issues (IBS, bloating, food sensitivities), Type 2 diabetes, insulin resistance, autoimmune conditions, chronic fatigue, and unexplained weight gain. For children, we address recurring allergies, digestive issues, skin conditions, food sensitivities, and nutritional concerns.',
    category: 'conditions',
  },
  {
    question: 'Do you work with children?',
    answer: "Yes! Children's health is an important part of what we do. Kids with recurring allergies, gut issues, eczema, food sensitivities, or nutritional deficiencies deserve the same root-cause investigation as adults. We create age-appropriate, family-friendly protocols.",
    category: 'conditions',
  },
  {
    question: 'What does the first consultation look like?',
    answer: "Your first session is a deep dive — 60 to 90 minutes where we map your complete health story. We'll review your history, existing lab reports, lifestyle patterns, and current concerns. You'll leave with clarity about what's happening, why, and what the next steps look like. It's a conversation, not an interrogation.",
    category: 'services',
  },
  {
    question: 'Do I need to be in Bangalore for consultations?',
    answer: 'Not at all. We offer virtual consultations for anyone across India. Many of our clients work with us entirely online via video calls. In-person sessions are available in Bangalore for those who prefer it.',
    category: 'booking',
  },
  {
    question: 'Will you prescribe medications?',
    answer: "No. BioHeal does not prescribe pharmaceutical medications. Our approach focuses on nutrition, lifestyle modifications, and evidence-based supplement recommendations where appropriate. We work alongside your existing healthcare providers.",
    category: 'services',
  },
  {
    question: 'How long before I see results?',
    answer: "It depends on your condition, its complexity, and how long it's been present. Some people notice improvements within weeks (energy, digestion, sleep), while deeper hormonal or autoimmune patterns may take 3-6 months. We track progress carefully and adjust your plan as your body responds.",
    category: 'general',
  },
  {
    question: "What if I've already tried everything?",
    answer: "Many people who come to us feel exactly this way. The difference is that we start from a different place — we ask 'why is this happening?' rather than 'what else can we try?' Often, the missing piece isn't another diet or supplement — it's understanding the root cause that connects all your symptoms.",
    category: 'general',
  },
  {
    question: 'How do I get started?',
    answer: "The simplest way is to book a free 15-minute discovery conversation. It's a no-pressure chat where you share what's going on, we explain our approach, and together we decide if BioHeal is the right fit for you. No commitment required.",
    category: 'booking',
  },
]
