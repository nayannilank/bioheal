
#!/bin/bash
set -e

echo "🔍 BioHeal SEO & Metadata Setup"
echo "================================"
echo ""

# ─── STEP 2: Refactor pages (Server + Client split) ─────────────────────

echo "📁 Step 2: Splitting pages into Server + Client components..."

# --- About Page ---
if [ -f "src/app/about/page.tsx" ]; then
  mv src/app/about/page.tsx src/app/about/AboutClient.tsx
  echo "  ✅ Renamed about/page.tsx → AboutClient.tsx"
fi

cat > src/app/about/page.tsx << 'EOF'
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
EOF
echo "  ✅ Created about/page.tsx (server wrapper)"

# --- Services Page ---
if [ -f "src/app/services/page.tsx" ]; then
  mv src/app/services/page.tsx src/app/services/ServicesClient.tsx
  echo "  ✅ Renamed services/page.tsx → ServicesClient.tsx"
fi

cat > src/app/services/page.tsx << 'EOF'
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
EOF
echo "  ✅ Created services/page.tsx (server wrapper)"

# --- Conditions Overview Page ---
if [ -f "src/app/conditions/page.tsx" ]; then
  mv src/app/conditions/page.tsx src/app/conditions/ConditionsClient.tsx
  echo "  ✅ Renamed conditions/page.tsx → ConditionsClient.tsx"
fi

cat > src/app/conditions/page.tsx << 'EOF'
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
EOF
echo "  ✅ Created conditions/page.tsx (server wrapper)"

# --- Conditions [slug] Page ---
mkdir -p src/app/conditions/\[slug\]

if [ -f "src/app/conditions/[slug]/page.tsx" ]; then
  mv "src/app/conditions/[slug]/page.tsx" "src/app/conditions/[slug]/ConditionClient.tsx"
  echo "  ✅ Renamed conditions/[slug]/page.tsx → ConditionClient.tsx"
fi

cat > "src/app/conditions/[slug]/page.tsx" << 'EOF'
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
EOF
echo "  ✅ Created conditions/[slug]/page.tsx (server wrapper with dynamic metadata)"

# --- Contact Page ---
if [ -f "src/app/contact/page.tsx" ]; then
  mv src/app/contact/page.tsx src/app/contact/ContactClient.tsx
  echo "  ✅ Renamed contact/page.tsx → ContactClient.tsx"
fi

cat > src/app/contact/page.tsx << 'EOF'
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
EOF
echo "  ✅ Created contact/page.tsx (server wrapper)"

# --- Fix ConditionClient to accept slug prop ---
# The [slug] client component needs to accept slug as a prop now
if [ -f "src/app/conditions/[slug]/ConditionClient.tsx" ]; then
  # Replace useParams with prop-based slug
  sed -i '' "s/const params = useParams()//" "src/app/conditions/[slug]/ConditionClient.tsx" 2>/dev/null || true
  sed -i '' "s/const slug = params.slug as string//" "src/app/conditions/[slug]/ConditionClient.tsx" 2>/dev/null || true
  # Add slug prop to component signature
  sed -i '' "s/export default function ConditionPage()/export default function ConditionClient({ slug }: { slug: string })/" "src/app/conditions/[slug]/ConditionClient.tsx" 2>/dev/null || true
  # Remove useParams import
  sed -i '' "s/import { useParams } from 'next\/navigation'//" "src/app/conditions/[slug]/ConditionClient.tsx" 2>/dev/null || true
  echo "  ✅ Updated ConditionClient.tsx to accept slug prop"
fi

echo ""
echo "📁 Step 2 complete!"
echo ""

# ─── STEP 3: Create new SEO files ───────────────────────────────────────

echo "📄 Step 3: Creating SEO files..."

# --- src/lib/metadata.ts ---
cat > src/lib/metadata.ts << 'EOF'
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
EOF
echo "  ✅ Created src/lib/metadata.ts"

# --- src/components/seo/StructuredData.tsx ---
mkdir -p src/components/seo

cat > src/components/seo/StructuredData.tsx << 'EOF'
export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://bioheal.co.in/#organization',
    name: 'BioHeal',
    alternateName: 'BioHeal Functional Medicine',
    url: 'https://bioheal.co.in',
    logo: 'https://bioheal.co.in/logo.png',
    image: 'https://bioheal.co.in/og-image.jpg',
    description:
      'Functional medicine & lifestyle health space dedicated to uncovering root causes of chronic illness through personalised lifestyle interventions.',
    slogan: 'Healing Through Lifestyle, Guided by Science',
    email: 'care@bioheal.co.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'Country', name: 'India' },
    ],
    serviceType: [
      'Functional Medicine Consultation',
      'Lifestyle Coaching',
      'Nutrition Planning',
      'Lab Interpretation',
    ],
    medicalSpecialty: ['Functional Medicine', 'Lifestyle Medicine', 'Nutrition Science'],
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: ['https://www.instagram.com/bioheal.in'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://bioheal.co.in/#website',
    name: 'BioHeal',
    url: 'https://bioheal.co.in',
    description: 'Functional medicine & lifestyle health space',
    publisher: { '@id': 'https://bioheal.co.in/#organization' },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://bioheal.co.in/#localbusiness',
    name: 'BioHeal',
    url: 'https://bioheal.co.in',
    email: 'care@bioheal.co.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946',
    },
    priceRange: '₹₹',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
EOF
echo "  ✅ Created src/components/seo/StructuredData.tsx"

# --- next-sitemap.config.js ---
cat > next-sitemap.config.js << 'EOF'
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bioheal.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/coming-soon', '/design-system', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/coming-soon', '/design-system'],
      },
    ],
  },
  transform: async (config, path) => {
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() }
    }
    if (['/about', '/services', '/conditions', '/contact'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() }
    }
    if (path.startsWith('/conditions/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() }
    }
    return { loc: path, changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() }
  },
}
EOF
echo "  ✅ Created next-sitemap.config.js"

# --- public/manifest.json ---
cat > public/manifest.json << 'EOF'
{
  "name": "BioHeal — Functional Medicine & Lifestyle Health",
  "short_name": "BioHeal",
  "description": "Healing Through Lifestyle, Guided by Science",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF5FF",
  "theme_color": "#7C3AED",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
EOF
echo "  ✅ Created public/manifest.json"

# --- public/robots.txt ---
cat > public/robots.txt << 'EOF'
User-agent: *
Allow: /
Disallow: /api/
Disallow: /coming-soon
Disallow: /design-system

Sitemap: https://bioheal.co.in/sitemap.xml
EOF
echo "  ✅ Created public/robots.txt"

echo ""
echo "📄 Step 3 complete!"
echo ""

# ─── STEP 4: Update layout.tsx ───────────────────────────────────────────

echo "🖼️  Step 4: Updating layout.tsx..."

cat > src/app/layout.tsx << 'EOF'
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
EOF
echo "  ✅ Updated src/app/layout.tsx"

echo ""
echo "🖼️  Step 4 complete!"
echo ""

# ─── STEP 5: Install package & update scripts ───────────────────────────

echo "📦 Step 5: Installing next-sitemap & updating package.json..."

npm install next-sitemap --save-dev

# Add postbuild script to package.json
# Using node to safely modify JSON
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts.postbuild = 'next-sitemap';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"
echo "  ✅ Installed next-sitemap"
echo "  ✅ Added postbuild script to package.json"

echo ""
echo "📦 Step 5 complete!"
echo ""

# ─── SUMMARY ─────────────────────────────────────────────────────────────

echo "═══════════════════════════════════════════════════"
echo "✅ ALL DONE! SEO & Metadata Setup Complete"
echo "═══════════════════════════════════════════════════"
echo ""
echo "Files created/modified:"
echo "  📄 src/lib/metadata.ts"
echo "  📄 src/components/seo/StructuredData.tsx"
echo "  📄 next-sitemap.config.js"
echo "  📄 public/manifest.json"
echo "  📄 public/robots.txt"
echo "  📄 src/app/layout.tsx (updated)"
echo "  📄 src/app/about/page.tsx (server wrapper)"
echo "  📄 src/app/about/AboutClient.tsx (renamed)"
echo "  📄 src/app/services/page.tsx (server wrapper)"
echo "  📄 src/app/services/ServicesClient.tsx (renamed)"
echo "  📄 src/app/conditions/page.tsx (server wrapper)"
echo "  📄 src/app/conditions/ConditionsClient.tsx (renamed)"
echo "  📄 src/app/conditions/[slug]/page.tsx (server wrapper)"
echo "  📄 src/app/conditions/[slug]/ConditionClient.tsx (renamed)"
echo "  📄 src/app/contact/page.tsx (server wrapper)"
echo "  📄 src/app/contact/ContactClient.tsx (renamed)"
echo ""
echo "⚠️  MANUAL STEPS REMAINING:"
echo "  1. If ConditionClient.tsx still uses useParams(), update it to accept { slug } prop"
echo "  2. Create image assets (og-image.jpg, favicons) — use realfavicongenerator.net"
echo "  3. After deploy: Set up Google Search Console"
echo ""
echo "🚀 Run 'npm run dev' to verify everything works!"

