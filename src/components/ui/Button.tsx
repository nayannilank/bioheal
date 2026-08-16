
'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { isLivePage } from '@/lib/routes'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants = {
  primary:
    'bg-purple-600 text-white hover:bg-purple-700 shadow-soft hover:shadow-card active:bg-purple-800',
  secondary:
    'bg-white text-purple-700 border border-purple-200 hover:border-purple-300 hover:bg-purple-50 shadow-soft',
  ghost:
    'text-purple-600 hover:text-purple-700 hover:bg-purple-50',
  white:
    'bg-white text-purple-700 hover:bg-purple-50 shadow-soft',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3 text-base rounded-xl',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  // If it's a link
  if (href) {
    // Check if the page exists — if not, redirect to coming-soon
    const resolvedHref = isLivePage(href) ? href : `/coming-soon?from=${encodeURIComponent(href)}`

    // External links open in new tab
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={resolvedHref} className={baseClasses}>
        {children}
      </Link>
    )
  }

  // If it's a button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  )
}

