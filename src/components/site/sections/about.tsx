'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Award,
  Download,
  Quote,
  BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'
import { CANDIDATE } from '@/lib/data/campaign'

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Candidate"
          title={
            <>
              Meet <span className="text-gradient-gold">Hon. Alexander K. Mensah</span>
            </>
          }
          description="A seasoned public servant, accomplished economist, and devoted community leader with a 22-year record of integrity, competence, and service."
        />

        {/* Bio + portrait */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl gradient-gold opacity-20 blur-xl" />
              <Card className="relative overflow-hidden rounded-2xl shadow-premium-lg">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/candidate-portrait.jpg"
                    alt={CANDIDATE.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-patriot-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <Badge className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90 mb-2">
                      <BadgeCheck className="h-3 w-3 mr-1" />
                      Verified Candidate
                    </Badge>
                    <div className="font-serif text-2xl font-bold">{CANDIDATE.name}</div>
                    <div className="text-sm text-white/80">{CANDIDATE.title}</div>
                    <div className="text-xs text-white/60 mt-1">{CANDIDATE.party}</div>
                  </div>
                </div>
              </Card>
              <a
                href="#media"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex"
              >
                <Button className="bg-patriot-navy hover:bg-patriot-navy/90 text-white shadow-premium-lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 pt-2"
          >
            {CANDIDATE.bio.map((p, i) => (
              <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}

            {/* Philosophy cards */}
            <div className="pt-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Quote className="h-5 w-5 text-patriot-gold" />
                Political Philosophy
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {CANDIDATE.philosophy.map((phi, i) => (
                  <motion.div
                    key={phi.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="p-5 h-full hover:shadow-premium transition-shadow group">
                      <div className="text-patriot-red font-serif text-3xl font-bold leading-none mb-2">
                        0{i + 1}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-patriot-red transition-colors">
                        {phi.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {phi.body}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-patriot-red/10 text-patriot-red">
              <GraduationCap className="h-5 w-5" />
            </span>
            Education
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {CANDIDATE.education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-premium transition-shadow border-l-4 border-l-patriot-gold">
                  <Badge className="bg-patriot-navy text-white hover:bg-patriot-navy/90 mb-3">
                    {edu.year}
                  </Badge>
                  <h4 className="font-serif text-lg font-bold text-foreground">{edu.title}</h4>
                  <div className="text-sm font-medium text-patriot-red mt-1">{edu.institution}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership timeline */}
        <div className="mt-24">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-patriot-red/10 text-patriot-red">
              <Briefcase className="h-5 w-5" />
            </span>
            Leadership Experience
          </h3>
          <div className="mt-10 relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />
            <div className="space-y-8">
              {CANDIDATE.leadership.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 ${
                    i % 2 === 0 ? '' : 'sm:[direction:rtl]'
                  }`}
                >
                  <div className={`sm:[direction:ltr] ${i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:col-start-2 sm:pl-8'}`}>
                    <Card className="p-5 inline-block text-left max-w-md hover:shadow-premium transition-shadow">
                      <Badge className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90 mb-2">
                        {exp.year}
                      </Badge>
                      <h4 className="font-serif text-lg font-bold text-foreground">{exp.role}</h4>
                      <div className="text-sm font-medium text-patriot-red">{exp.org}</div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{exp.detail}</p>
                    </Card>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 h-3 w-3 rounded-full bg-patriot-red ring-4 ring-background" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards + Certificates */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-patriot-red/10 text-patriot-red">
                <Award className="h-5 w-5" />
              </span>
              Awards &amp; Honours
            </h3>
            <div className="mt-6 space-y-3">
              {CANDIDATE.awards.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="p-4 flex items-start gap-4 hover:shadow-premium transition-shadow">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full gradient-gold flex items-center justify-center text-patriot-navy font-serif font-bold">
                      {a.year.slice(-2)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{a.title}</div>
                      <div className="text-xs text-patriot-red font-medium">{a.org}</div>
                      <div className="text-sm text-muted-foreground mt-1">{a.detail}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-patriot-red/10 text-patriot-red">
                <BadgeCheck className="h-5 w-5" />
              </span>
              Certificates &amp; Training
            </h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {CANDIDATE.certificates.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="p-4 h-full hover:shadow-premium transition-shadow flex items-start gap-3">
                    <BadgeCheck className="h-5 w-5 text-patriot-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-snug">{c}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
            <a href="#media" className="mt-6 inline-flex">
              <Button variant="outline" className="border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Download Full CV (PDF)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
