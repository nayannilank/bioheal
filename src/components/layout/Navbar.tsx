
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-soft border-b border-purple-100/40 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="BioHeal Logo"
                width={44}
                height={44}
                className={cn(
                  'transition-all duration-300',
                  isScrolled ? 'w-9 h-9' : 'w-11 h-11'
                )}
                priority
              />
              <span
                className={cn(
                  'font-heading font-bold text-purple-900 transition-all duration-300',
                  isScrolled ? 'text-lg' : 'text-xl'
                )}
              >
                BioHeal
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="primary" size="sm">
                Begin Your Journey
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-purple-50 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={cn(
                    'block h-0.5 w-5 bg-purple-900 rounded-full transition-all duration-300 origin-center',
                    isMobileMenuOpen && 'rotate-45 translate-y-[7px]'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-5 bg-purple-900 rounded-full transition-all duration-300',
                    isMobileMenuOpen && 'opacity-0 scale-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-5 bg-purple-900 rounded-full transition-all duration-300 origin-center',
                    isMobileMenuOpen && '-rotate-45 -translate-y-[7px]'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-prominent"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                {/* Nav Links */}
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-lg font-medium text-purple-900 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-purple-100" />

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                  >
                    Begin Your Journey
                  </Button>
                </motion.div>

                {/* Bottom info */}
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-2">Reach out anytime</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-gray-400 mt-4">
                    Bangalore · All India (Virtual)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

