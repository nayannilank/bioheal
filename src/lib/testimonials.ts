export interface Testimonial {
  id: string
  text: string
  author: string
  condition: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: "After years of being told my thyroid was 'borderline normal,' BioHeal helped me understand the full picture. Within 3 months, my energy was back and brain fog lifted completely.",
    author: 'Priya S.',
    condition: 'Thyroid & Fatigue',
    initials: 'PS',
  },
  {
    id: '2',
    text: "I'd tried every diet for PCOS. BioHeal's approach was different — they looked at my gut, stress, and inflammation together. My cycles regulated naturally within 4 months.",
    author: 'Ananya R.',
    condition: 'PCOS & Hormonal Balance',
    initials: 'AR',
  },
  {
    id: '3',
    text: "The personalised nutrition plan wasn't restrictive — it was sustainable. I've lost 12 kg in 6 months without feeling deprived. My blood sugar is now stable.",
    author: 'Vikram M.',
    condition: 'Diabetes & Weight Management',
    initials: 'VM',
  },
  {
    id: '4',
    text: "My son had recurring eczema and stomach issues for 2 years. No one connected the two until BioHeal. Addressing his gut health cleared both within weeks.",
    author: 'Meera K.',
    condition: "Children's Health — Gut & Skin",
    initials: 'MK',
  },
  {
    id: '5',
    text: "I was exhausted all the time — doctors said everything was 'normal.' BioHeal found iron, B12, and cortisol patterns that explained everything. Finally, answers.",
    author: 'Sneha D.',
    condition: 'Chronic Fatigue',
    initials: 'SD',
  },
  {
    id: '6',
    text: "What I appreciated most was being heard. The first consultation was 90 minutes — no rushing, no judgement. For the first time, someone connected all the dots.",
    author: 'Rahul T.',
    condition: 'Gut Health & Autoimmune',
    initials: 'RT',
  },
]
