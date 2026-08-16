
import { conditions } from '@/lib/conditions'

/**
 * All live routes on the site.
 * Condition pages are auto-generated from the conditions data.
 * Add new static pages here as you build them.
 */
export const LIVE_PAGES: string[] = [
  // Static pages
  '/',
  '/about',
  '/services',
  '/conditions',
  '/contact',

  // Dynamic condition pages (auto-generated)
  ...conditions.map((c) => `/conditions/${c.slug}`),

  // Anchors
  '/#faq',
]

/**
 * Check if a given href points to a live page.
 * Handles external links (always live), anchors, and query params.
 */
export function isLivePage(href: string): boolean {
  // External links are always "live"
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return true
  }

  // WhatsApp links
  if (href.startsWith('https://wa.me')) {
    return true
  }

  // Strip query params and trailing slashes for comparison
  const cleanHref = href.split('?')[0].replace(/\/$/, '') || '/'

  return LIVE_PAGES.includes(cleanHref)
}

