
#!/bin/bash
set -e
echo "🔧 Writing lib files and styles..."

# --- utils.ts ---
cat > src/lib/utils.ts << 'EOF'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF
echo "✅ src/lib/utils.ts"

# --- constants.ts ---
cat > src/lib/constants.ts << 'EOF'
export const SITE_CONFIG = {
  name: 'BioHeal',
  tagline: 'Healing Through Lifestyle, Guided by Science',
  descriptor: 'Functional Medicine · Lifestyle Transformation · Root-Cause Healing',
  url: 'https://bioheal.co.in',
  email: 'hello@bioheal.co.in',
  phone: '+91-XXXXXXXXXX',
  whatsapp: 'https://wa.me/91XXXXXXXXXX',
  instagram: 'https://instagram.com/bioheal.co.in',
  location: 'Bangalore, India',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Conditions', href: '/conditions' },
    { label: 'FAQs', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ],
  conditions: [
    { label: 'PCOS', href: '/conditions/pcos' },
    { label: 'Thyroid', href: '/conditions/thyroid' },
    { label: 'Gut Health', href: '/conditions/gut-health' },
    { label: 'Diabetes', href: '/conditions/diabetes' },
    { label: 'Autoimmune', href: '/conditions/autoimmune' },
    { label: 'Fatigue', href: '/conditions/fatigue' },
    { label: "Children's Health", href: '/conditions/childrens-health' },
  ],
  connect: [
    { label: 'Book a Call', href: '/contact' },
    { label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
    { label: 'Instagram', href: 'https://instagram.com/bioheal.co.in' },
    { label: 'Email', href: 'mailto:hello@bioheal.co.in' },
  ],
}
EOF
echo "✅ src/lib/constants.ts"

# --- testimonials.ts ---
cat > src/lib/testimonials.ts << 'EOF'
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
EOF
echo "✅ src/lib/testimonials.ts"

# --- faq.ts ---
cat > src/lib/faq.ts << 'EOF'
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
EOF
echo "✅ src/lib/faq.ts"

# --- globals.css ---
cat > src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply font-body text-gray-800 bg-white;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
EOF
echo "✅ src/styles/globals.css"

echo ""
echo "🎉 Part 1 done! Now run Part 2 (UI components)."

