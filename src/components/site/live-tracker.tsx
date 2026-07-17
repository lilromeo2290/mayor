'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, TrendingUp, Users } from 'lucide-react'

export function LiveTracker() {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const TARGET_RAISED = 3_489_000
  const [raised, setRaised] = React.useState(3_470_500)
  const [donors, setDonors] = React.useState(28_400)
  const [secondsLeft, setSecondsLeft] = React.useState(() => {
    const election = new Date('2026-12-07T07:00:00Z').getTime()
    return Math.max(0, Math.floor((election - Date.now()) / 1000))
  })
  const animatedRef = React.useRef(false)

  // Initial "count up" effect when the tracker scrolls into view (runs once)
  React.useEffect(() => {
    if (!inView || animatedRef.current) return
    animatedRef.current = true
    let raf = 0
    const start = 3_470_500
    const end = TARGET_RAISED
    const duration = 1800
    const startTime = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setRaised(Math.round(start + (end - start) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView])

  // Live ticking (increment every second after initial count-up)
  React.useEffect(() => {
    if (!inView) return
    const id = setInterval(() => {
      setRaised((r) => r + Math.floor(Math.random() * 70) + 30)
      setDonors((d) => d + (Math.random() > 0.6 ? 1 : 0))
      setSecondsLeft((s) => Math.max(0, s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [inView])

  const days = Math.floor(secondsLeft / 86400)
  const hours = Math.floor((secondsLeft % 86400) / 3600)
  const mins = Math.floor((secondsLeft % 3600) / 60)
  const secs = secondsLeft % 60

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-r from-patriot-navy via-[#0f2a4d] to-patriot-red text-white border-y border-patriot-gold/30 overflow-hidden"
    >
      {/* Marquee glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-patriot-gold/30 blur-3xl animate-pulse-ring" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4 flex-wrap text-xs sm:text-sm">
          {/* Election countdown */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-patriot-gold opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-patriot-gold" />
              </span>
              <span className="font-semibold uppercase tracking-widest text-patriot-gold text-[10px] sm:text-xs">
                Election Countdown
              </span>
            </div>
            <div className="font-serif font-bold tabular-nums text-sm sm:text-base">
              {days}d {String(hours).padStart(2, '0')}h {String(mins).padStart(2, '0')}m {String(secs).padStart(2, '0')}s
            </div>
          </div>

          {/* Live donation tracker */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Flame className="h-3.5 w-3.5 text-patriot-gold" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70">Raised</span>
              <span className="font-serif font-bold tabular-nums text-sm sm:text-base text-patriot-gold">
                ₵{raised.toLocaleString()}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-patriot-gold" />
              <span className="text-[10px] uppercase tracking-widest text-white/70">Donors</span>
              <span className="font-serif font-bold tabular-nums text-sm sm:text-base">
                {donors.toLocaleString()}
              </span>
            </div>
            <a
              href="#donate"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-patriot-gold text-patriot-navy text-[11px] font-semibold hover:bg-patriot-gold/90 transition-colors"
            >
              <TrendingUp className="h-3 w-3" />
              Donate
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
