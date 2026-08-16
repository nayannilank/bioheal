
#!/bin/bash
set -e
echo "🔧 Writing UI components..."

# --- Button.tsx ---
cat > src/components/ui/Button.tsx << 'EOF'
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
    return (
      <Link href={href} className={classes}>
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
EOF
echo "✅ src/components/ui/Button.tsx"

# --- SectionHeader.tsx ---
cat > src/components/ui/SectionHeader.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      className={`max-w-2xl ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-block text-sm font-medium text-purple-500 tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
EOF
echo "✅ src/components/ui/SectionHeader.tsx"

# --- Accordion.tsx ---
cat > src/components/ui/Accordion.tsx << 'EOF'
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index)
        return (
          <div
            key={index}
            className={cn(
              'rounded-2xl border transition-all duration-200',
              isOpen
                ? 'border-purple-200 bg-purple-50/30 shadow-soft'
                : 'border-purple-100/60 bg-white hover:border-purple-200'
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-medium text-purple-900 pr-4">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
EOF
echo "✅ src/components/ui/Accordion.tsx"

# --- FloatingWhatsApp.tsx ---
cat > src/components/ui/FloatingWhatsApp.tsx << 'EOF'
'use client'

import { SITE_CONFIG } from '@/lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={`${SITE_CONFIG.whatsapp}?text=Hi%20BioHeal%2C%20I'd%20like%20to%20know%20more%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-elevated hover:shadow-prominent transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse-soft" />
    </a>
  )
}
EOF
echo "✅ src/components/ui/FloatingWhatsApp.tsx"

echo ""
echo "🎉 Part 2 done! Now run Part 3 (section components)."

