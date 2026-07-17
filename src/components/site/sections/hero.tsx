'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Heart, Users, FileText, ChevronDown, Flag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CANDIDATE } from '@/lib/data/campaign'

export function HeroSection() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] overflow-hidden scroll-anchor">
      {/* Animated background layers */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-patriot animate-gradient" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-patriot-gold/20 blur-3xl animate-pulse-ring" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-patriot-red/30 blur-3xl animate-pulse-ring" style={{ animationDelay: '1.5s' }} />
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium ring-1 ring-white/20"
            >
              <Flag className="h-3.5 w-3.5 text-patriot-gold" />
              <span>{CANDIDATE.party} · {CANDIDATE.constituency}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Leadership
              <br />
              <span className="text-gradient-gold">Service. Excellence. Accountability.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed"
            >
              {CANDIDATE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#volunteer">
                <Button size="lg" className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-semibold shadow-premium-lg">
                  Join the Movement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#volunteer">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Volunteer
                </Button>
              </a>
              <a href="#donate">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Button>
              </a>
              <a href="#manifesto">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Our Manifesto
                </Button>
              </a>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
            >
              {CANDIDATE.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                  className="glass rounded-2xl p-4 text-white"
                >
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-patriot-gold">
                    {s.value.toLocaleString()}
                  </div>
                  <div className="text-xs text-white/75 mt-1 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-[2rem] border border-patriot-gold/30" />
              <div className="absolute -inset-1.5 rounded-[1.75rem] border border-white/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-premium-lg ring-1 ring-white/20">
                <img
                  src="/candidate-portrait.jpg"
                  alt={`${CANDIDATE.name} — official portrait`}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-patriot-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-2xl font-bold">{CANDIDATE.name}</div>
                  <div className="text-sm text-white/80">{CANDIDATE.title}</div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-2 sm:right-4 glass-dark rounded-2xl p-4 text-white shadow-premium-lg"
              >
                <div className="text-[10px] uppercase tracking-widest text-patriot-gold font-semibold">
                  Trusted Leader
                </div>
                <div className="font-serif text-xl font-bold mt-1">22+ Years</div>
                <div className="text-xs text-white/70">In Public Service</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-10 w-6 rounded-full border border-white/40 flex justify-center">
          <motion.span
            className="absolute top-2 h-2 w-1 rounded-full bg-patriot-gold"
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 -z-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" className="w-full h-12 sm:h-20" preserveAspectRatio="none">
          <path d="M0,40 C320,100 720,0 1080,40 C1260,60 1380,80 1440,40 L1440,100 L0,100 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
