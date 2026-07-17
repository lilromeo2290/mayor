'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/section-heading'
import { TESTIMONIALS } from '@/lib/data/campaign'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const [index, setIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(1)

  const next = () => {
    setDirection(1)
    setIndex((i) => (i + 1) % TESTIMONIALS.length)
  }
  const prev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  React.useEffect(() => {
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [])

  const current = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-patriot-navy relative overflow-hidden scroll-anchor">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--patriot-gold) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--patriot-red) 0%, transparent 40%)",
        }}
      />
      <Quote className="absolute top-12 left-1/2 -translate-x-1/2 h-32 w-32 text-patriot-gold/10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Endorsements"
          title={
            <>
              Trusted by <span className="text-gradient-gold">People Like You</span>
            </>
          }
          description="Community leaders, professionals, business owners, traditional rulers, and ordinary citizens share why they stand with Emmanuel Amekplenu."
          className="[&_h2]:text-white [&_p]:text-white/80"
        />

        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-8 sm:p-12 bg-white/5 backdrop-blur-md border-white/10 text-white text-center">
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-patriot-gold text-patriot-gold" />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-patriot-gold mx-auto mb-5" />
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium italic">
                    “{current.quote}”
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-patriot-gold text-patriot-navy font-serif text-lg font-bold flex items-center justify-center">
                      {current.initials}
                    </div>
                    <div className="text-left">
                      <div className="font-serif text-lg font-bold">{current.name}</div>
                      <div className="text-sm text-patriot-gold">{current.role}</div>
                      <div className="text-xs text-white/60">{current.location}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 h-11 w-11 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'bg-patriot-gold w-8' : 'bg-white/30 hover:bg-white/50 w-2'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 h-11 w-11 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
