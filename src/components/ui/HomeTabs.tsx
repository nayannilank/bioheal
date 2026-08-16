
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type TabId = 'home' | 'approach' | 'conditions' | 'how-it-works' | 'stories'

interface Tab {
  id: TabId
  label: string
}

const tabs: Tab[] = [
  { id: 'home', label: 'Home' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'stories', label: 'Stories' },
]

interface HomeTabsProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function HomeTabs({ activeTab, onTabChange }: HomeTabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const activeElement = tabsRef.current?.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      })
    }
  }, [activeTab])

  // Scroll active tab into view on mobile
  useEffect(() => {
    const activeElement = tabsRef.current?.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement
    if (activeElement && tabsRef.current) {
      const container = tabsRef.current
      const scrollLeft = activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [activeTab])

  return (
    <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-purple-100/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={tabsRef}
          className="relative flex items-center justify-center gap-1 py-3 overflow-x-auto scrollbar-hide"
          role="tablist"
          aria-label="Homepage sections"
        >
          {/* Animated background indicator */}
          <motion.div
            className="absolute top-3 h-[calc(100%-24px)] bg-purple-100 rounded-xl"
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />

          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'relative z-10 px-4 sm:px-5 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors duration-200 cursor-pointer',
                activeTab === tab.id
                  ? 'text-purple-700'
                  : 'text-gray-500 hover:text-purple-600'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

