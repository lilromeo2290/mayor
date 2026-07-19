'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Scale,
  Eye,
  FileSearch,
  ShieldCheck,
  Megaphone,
  Users,
  ArrowRight,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'

const PILLARS = [
  {
    icon: Eye,
    title: 'Transparency in Governance',
    description:
      'Pushing for proactive disclosure of public budgets, contracts, and decisions so citizens can see exactly how power is exercised and resources are allocated at every level.',
  },
  {
    icon: FileSearch,
    title: 'Simplified Information Requests',
    description:
      'Advocating for a faster, cheaper, and friendlier RTI request process — with clear timelines, plain-language forms, and an independent review mechanism when requests are delayed.',
  },
  {
    icon: ShieldCheck,
    title: 'Whistleblower Protection',
    description:
      'Standing up for the public servants, journalists, and citizens who expose wrongdoing. Strong legal protection, secure reporting channels, and zero tolerance for retaliation.',
  },
  {
    icon: Megaphone,
    title: 'Civic Education & Awareness',
    description:
      'Grassroots campaigns that teach communities what their right to information means in practice, how to file a request, and how to use the answers to hold leaders accountable.',
  },
  {
    icon: Users,
    title: 'Youth-Led Accountability Clubs',
    description:
      'Empowering young people in every district to monitor local projects, track promises, and publish findings — turning RTI from a legal right into a daily habit of citizenship.',
  },
  {
    icon: Scale,
    title: 'Stronger Enforcement',
    description:
      'Campaigning for an independent RTI Commission with real teeth: the power to compel disclosure, sanction non-compliance, and report publicly on agency performance.',
  },
] as const

export function RtiAdvocacySection() {
  return (
    <section id="rti" className="py-20 sm:py-28 bg-patriot-cream dark:bg-background/40 scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="RTI Advocacy"
          title={
            <>
              The Right to Know is the{' '}
              <span className="text-gradient-gold">Right to Hold Power</span>
            </>
          }
          description="Information is the lifeblood of accountability. Emmanuel Amekplenu is committed to a Volta Region — and a Ghana — where every citizen can ask, every agency must answer, and every decision is open to public scrutiny."
        />

        {/* Pillars grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="group p-6 h-full hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-patriot-navy to-patriot-red text-patriot-gold group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="relative overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-patriot-navy to-patriot-navy/90 text-white shadow-premium-lg">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-patriot-gold/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-patriot-red/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <Badge className="bg-patriot-gold/20 text-patriot-gold border-patriot-gold/30 mb-4">
                  <Megaphone className="h-3 w-3 mr-1" />
                  Join the Movement
                </Badge>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Stand with us for an open, accountable Volta Region.
                </h3>
                <p className="mt-4 text-white/85 leading-relaxed max-w-2xl">
                  Sign up as an RTI Champion in your district. You will receive
                  training on filing information requests, monitoring local
                  projects, and publishing findings that drive real change.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <a href="#volunteer" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white shadow-premium"
                  >
                    Become an RTI Champion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/40 text-white hover:bg-white/10 hover:text-white"
                  >
                    Request a Briefing
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
