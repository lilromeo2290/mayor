'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ShieldCheck,
  Heart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { NAV_LINKS, CANDIDATE } from '@/lib/data/campaign'
import { toast } from 'sonner'

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const QUICK_LINKS_1 = NAV_LINKS.slice(0, 6)
const QUICK_LINKS_2 = NAV_LINKS.slice(6)

export function SiteFooter() {
  const [email, setEmail] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Subscribed!', {
        description: 'Welcome to the movement. Check your inbox to confirm.',
      })
      setEmail('')
    } catch {
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <footer className="bg-patriot-navy text-white relative overflow-hidden">
      {/* Decorative top stripe */}
      <div className="h-1.5 gradient-gold" />

      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-6 items-center"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Join the <span className="text-gradient-gold">Movement</span>
              </h3>
              <p className="mt-2 text-white/70">
                Get the latest campaign news, event invites, and policy updates — straight to your inbox.
              </p>
            </div>
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-patriot-gold"
              />
              <Button
                type="submit"
                disabled={submitting}
                className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90 font-semibold whitespace-nowrap"
              >
                {submitting ? 'Subscribing…' : 'Subscribe'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/10 ring-2 ring-patriot-gold/40 flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-patriot-gold">M</span>
              </div>
              <div>
                <div className="font-serif text-lg font-bold">{CANDIDATE.shortName}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-patriot-gold">
                  {CANDIDATE.party}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              {CANDIDATE.slogan}. {CANDIDATE.tagline}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a href="tel:+233305550142" className="flex items-center gap-2 hover:text-patriot-gold transition-colors">
                <Phone className="h-4 w-4" /> +233 30 555 0142
              </a>
              <a href="mailto:info@mensahcampaign.example" className="flex items-center gap-2 hover:text-patriot-gold transition-colors">
                <Mail className="h-4 w-4" /> info@mensahcampaign.example
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> 12 Liberation Avenue, Ridge, Accra
              </div>
            </div>
          </div>

          {/* Quick links 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-patriot-gold mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS_1.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-patriot-gold mb-4">
              Engage
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS_2.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + transparency */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-patriot-gold mb-4">
              Follow & Share
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-lg bg-white/10 hover:bg-patriot-gold hover:text-patriot-navy flex items-center justify-center transition-colors"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-patriot-gold font-semibold text-sm">
                <ShieldCheck className="h-4 w-4" />
                Transparency Pledge
              </div>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Every donation above ₵100 is published in our quarterly transparency report. No anonymous donations. No foreign money.
              </p>
              <a href="#donate" className="mt-3 inline-flex items-center text-xs font-medium text-patriot-gold hover:underline">
                Read latest report <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <div>
              © 2026 {CANDIDATE.party}. All rights reserved. Authorized by the {CANDIDATE.shortName} Campaign.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <span className="flex items-center gap-1.5">
                Built with <Heart className="h-3 w-3 fill-patriot-red text-patriot-red" /> for the people
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
