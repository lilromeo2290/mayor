'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Package,
  Image as ImageIcon,
  Film,
  Palette,
  Download,
  Headphones,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'
import { MEDIA_DOWNLOADS, FAQ_ITEMS } from '@/lib/data/campaign'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const ICON_MAP = {
  pdf: FileText,
  press: Package,
  logo: Palette,
  photo: ImageIcon,
  video: Film,
  brand: Palette,
} as const

export function MediaCenterSection() {
  return (
    <section id="media" className="py-20 sm:py-28 bg-patriot-cream dark:bg-background/40 scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Media Center"
          title={
            <>
              Resources for <span className="text-gradient-gold">Press &amp; Supporters</span>
            </>
          }
          description="Download the manifesto, press kit, official photos, video B-roll, and brand assets. All resources are free for editorial and campaign use."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MEDIA_DOWNLOADS.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="group p-6 h-full hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-patriot-navy to-patriot-red text-patriot-gold group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.type} · {item.size}
                    </Badge>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-5 w-full border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white dark:border-patriot-gold dark:text-patriot-gold dark:hover:bg-patriot-gold dark:hover:text-patriot-navy group/btn"
                  >
                    <Download className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    Download
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="mt-24 grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <Badge className="bg-patriot-red/10 text-patriot-red hover:bg-patriot-red/15 mb-4">
              <Headphones className="h-3 w-3 mr-1" />
              Got Questions?
            </Badge>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Frequently <span className="text-gradient-gold">Asked Questions</span>
            </h3>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Everything you need to know about voting, volunteering, donating, and engaging with the campaign. Can’t find your answer? Use the contact form below.
            </p>
            <a href="#contact">
              <Button className="mt-6 bg-patriot-navy hover:bg-patriot-navy/90 text-white">
                Contact the Team
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8 shadow-premium">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-semibold hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
