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
    sameAs: ['https://www.instagram.com/sj.bioheal/'],
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
