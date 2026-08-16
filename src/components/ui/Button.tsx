
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
    'bg-purple-600 text-white hover:bg-purple-700 shadow-soft hover:shadow-elevated active:scale-[0.98]',
  secondary:
    'bg-white text-purple-600 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 active:scale-[0.98]',
  ghost:
    'bg-transparent text-purple-600 hover:bg-purple-50 border border-transparent hover:border-purple-100',
  white:
    'bg-white text-purple-700 hover:bg-purple-50 shadow-soft hover:shadow-elevated active:scale-[0.98]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-2xl',
}

// Pages that are live — everything else redirects to /coming-soon
const LIVE_PAGES = ['/', '/#faq', '/coming-soon', '/about']

function getResolvedHref(href: string): string {
  // External links always pass through
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href
  }
  // Live pages pass through
  if (LIVE_PAGES.includes(href)) {
    return href
  }
  // Everything else → coming soon
  return '/coming-soon'
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
  const classes = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    const resolvedHref = getResolvedHref(href)
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

    if (isExternal) {
      return (
        <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }

    return (
      <Link href={resolvedHref} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

