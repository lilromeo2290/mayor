'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/section-heading'
import { VISION_ITEMS } from '@/lib/data/campaign'
import { cn } from '@/lib/utils'

export function VisionSection() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section id="vision" className="py-20 sm:py-28 bg-patriot-cream dark:bg-background/40 scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Vision"
          title={
            <>
              A Vision for <span className="text-gradient-gold">Every Citizen</span>
            </>
          }
          description="Twelve pillars that will define a Mensah administration — each grounded in evidence, designed for impact, and delivered with integrity. Tap any pillar to explore the detail."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VISION_ITEMS.map((item, i) => {
            const isOpen = open === i
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card
                  className={cn(
                    'p-6 h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-premium-lg group relative overflow-hidden',
                    isOpen && 'ring-2 ring-patriot-gold shadow-premium-lg'
                  )}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 h-24 w-24 bg-patriot-gold/5 rounded-bl-full transition-all group-hover:bg-patriot-gold/10 group-hover:h-32 group-hover:w-32" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-patriot-navy text-patriot-gold group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-patriot-red/10 text-patriot-red"
                      aria-label={isOpen ? 'Collapse' : 'Expand'}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </Button>
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-foreground group-hover:text-patriot-navy dark:group-hover:text-patriot-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.short}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-border">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-patriot-red mb-3">
                            <Target className="h-3.5 w-3.5" />
                            Key Goals
                          </div>
                          <ul className="space-y-2 mb-4">
                            {item.goals.map((g) => (
                              <li key={g} className="flex items-start gap-2 text-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-patriot-gold mt-1.5 flex-shrink-0" />
                                <span className="text-foreground/80">{g}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-5 text-xs font-medium text-patriot-red">
                    {isOpen ? 'Tap to collapse' : 'Tap to expand'}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
