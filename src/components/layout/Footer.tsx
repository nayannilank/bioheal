
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-purple-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="BioHeal Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert opacity-90"
              />
              <span className="font-heading font-bold text-xl text-white">
                BioHeal
              </span>
            </Link>
            <p className="text-purple-200 text-sm leading-relaxed mb-6">
              Healing Through Lifestyle, Guided by Science.
              A functional medicine &amp; lifestyle health space dedicated to
              uncovering root causes and building lasting wellness.
            </p>
            <p className="text-purple-300 text-xs italic leading-relaxed border-l-2 border-purple-700 pl-3">
              &ldquo;We promise to listen deeply, think critically, and guide
              compassionately.&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-purple-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-purple-300 mb-5">
              Conditions
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.conditions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-purple-300 mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Location */}
            <div className="mt-8">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-purple-300 mb-3">
                Location
              </h3>
              <p className="text-purple-200 text-sm">
                📍 {SITE_CONFIG.location}
              </p>
              <p className="text-purple-300 text-xs mt-1">
                In-person &amp; virtual consultations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800/50">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-purple-400 text-xs">
              © {currentYear} BioHeal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/coming-soon"
                className="text-purple-400 hover:text-purple-200 text-xs transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/coming-soon"
                className="text-purple-400 hover:text-purple-200 text-xs transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/coming-soon"
                className="text-purple-400 hover:text-purple-200 text-xs transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <p className="text-purple-500 text-[10px] leading-relaxed mt-4 max-w-3xl">
            Disclaimer: BioHeal provides functional medicine guidance and lifestyle coaching.
            We do not diagnose diseases, prescribe medications, or replace your primary care physician.
            Our services complement conventional medical care.
          </p>
        </div>
      </div>
    </footer>
  )
}

