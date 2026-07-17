'use client'

import * as React from 'react'
import {
  useInView,
  useMotionValue,
  useSpring,
  motion,
} from 'framer-motion'
import { SectionHeading } from '@/components/site/section-heading'
import { ACHIEVEMENTS } from '@/lib/data/campaign'
import { Card } from '@/components/ui/card'

function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 })

  React.useEffect(() => {
    if (inView) mv.set(value)
  }, [inView, value, mv])

  React.useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toLocaleString() + suffix
      }
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-patriot-navy relative overflow-hidden scroll-anchor">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, var(--patriot-gold) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--patriot-red) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title={
            <>
              A Record of <span className="text-gradient-gold">Delivered Results</span>
            </>
          }
          description={
            <span className="text-white/80">
              Numbers don't lie. These are verified, audited outcomes delivered under Emmanuel Amekplenu's leadership over the past six years.
            </span>
          }
          className="[&_h2]:text-white [&_p]:text-white/80"
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <Card className="relative p-5 sm:p-6 h-full bg-white/5 border-white/10 backdrop-blur-sm text-white overflow-hidden group hover:bg-white/10 transition-colors">
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-patriot-gold/10 group-hover:bg-patriot-gold/20 transition-colors" />
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-patriot-gold/15 text-patriot-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-patriot-gold">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-white/70 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm text-white">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">2026 Campaign Promise Tracker</span>
              <span className="text-patriot-gold font-bold">67% Delivered</span>
            </div>
            <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '67%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full gradient-gold rounded-full"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/60">
              <span>167 promises kept</span>
              <span className="text-center">52 in progress</span>
              <span className="text-right">31 scheduled</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
