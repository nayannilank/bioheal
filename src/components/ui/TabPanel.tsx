
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { TabId } from '@/components/ui/HomeTabs'

interface TabPanelProps {
  id: TabId
  activeTab: TabId
  children: React.ReactNode
}

export default function TabPanel({ id, activeTab, children }: TabPanelProps) {
  const isActive = id === activeTab

  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      hidden={!isActive}
    >
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

