'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'
import { MANIFESTO_ITEMS } from '@/lib/data/campaign'

export function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 sm:py-28 bg-background scroll-anchor relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--patriot-navy) 1px, transparent 0)",
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Manifesto"
          title={
            <>
              Thirteen Commitments. <span className="text-gradient-gold">One Future.</span>
            </>
          }
          description="A clear, costed, deliverable plan to rebuild our economy, modernise our infrastructure, and uplift every citizen. Read the full 84-page manifesto in the Media Center."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MANIFESTO_ITEMS.slice(0, 6).map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="group relative p-6 h-full overflow-hidden hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Hover gradient border */}
                  <div className="absolute inset-x-0 top-0 h-1 gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                  <div className="flex items-start justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-patriot-gold/30 blur-md group-hover:blur-lg transition-all" />
                      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-patriot-navy to-patriot-red text-patriot-gold group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="font-serif text-4xl font-bold text-muted-foreground/15 group-hover:text-patriot-gold/40 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <span className="inline-flex h-4 w-4 mt-0.5 rounded-full bg-patriot-red/10 items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-patriot-red" />
                        </span>
                        <span className="text-foreground/80">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                    <Badge variant="outline" className="text-xs font-medium">
                      Commitment {i + 1} of 6
                    </Badge>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-patriot-red group-hover:rotate-12 transition-all" />
                  </div>
                </Card>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-premium-lg"
          >
            <div className="absolute inset-0 gradient-patriot" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            <div className="relative p-6 h-full flex flex-col justify-between text-white min-h-[260px]">
              <div>
                <Badge className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90">
                  Full Document
                </Badge>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">
                  Download the Complete 84-Page Manifesto
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Every commitment, every cost, every timeline — fully transparent and costed by an independent economist panel.
                </p>
              </div>
              <a
                href="#media"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-semibold px-4 py-2.5 text-sm transition-colors"
              >
                Download PDF
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
