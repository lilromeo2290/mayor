'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SectionHeading } from '@/components/site/section-heading'
import { toast } from 'sonner'

const OFFICES = [
  { name: 'National HQ', address: '12 Liberation Avenue, Ridge, Accra', phone: '+233 30 555 0142' },
  { name: 'Kumasi Regional Office', address: 'Adum High Street, Kumasi', phone: '+233 32 555 0188' },
  { name: 'Tamale Regional Office', address: 'Old Cemetery Road, Tamale', phone: '+233 37 555 0199' },
]

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function ContactSection() {
  const [submitting, setSubmitting] = React.useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Message sent!', {
        description: 'Our team will respond within 48 hours.',
      })
      form.reset()
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              Let’s Build the <span className="text-gradient-gold">Future Together</span>
            </>
          }
          description="Questions, requests, media inquiries, or community visit requests — our team is ready to help. Reach out and a member of our team will respond within 48 hours."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Left: contact info + offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <Card className="p-6 shadow-premium bg-patriot-navy text-white border-0">
              <h3 className="font-serif text-xl font-bold">Direct Contact</h3>
              <p className="mt-1 text-sm text-white/70">Mon–Fri, 8 AM to 8 PM</p>
              <div className="mt-5 space-y-3">
                <a href="tel:+233305550142" className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-patriot-gold group-hover:text-patriot-navy transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Phone</div>
                    <div className="font-medium">+233 30 555 0142</div>
                  </div>
                </a>
                <a href="https://wa.me/233305550142" className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-patriot-gold group-hover:text-patriot-navy transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">WhatsApp</div>
                    <div className="font-medium">+233 30 555 0142</div>
                  </div>
                </a>
                <a href="mailto:info@mensahcampaign.example" className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-patriot-gold group-hover:text-patriot-navy transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Email</div>
                    <div className="font-medium">info@mensahcampaign.example</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-widest text-patriot-gold font-semibold mb-3">
                  Follow the Movement
                </div>
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
              </div>
            </Card>

            {/* Regional offices */}
            <Card className="p-6 shadow-premium">
              <h3 className="font-serif text-lg font-bold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-patriot-red" />
                Regional Offices
              </h3>
              <div className="mt-4 space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.name} className="flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-patriot-red/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-patriot-red" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-foreground">{o.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{o.address}</div>
                      <div className="text-xs text-patriot-navy dark:text-patriot-gold font-medium mt-0.5">{o.phone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right: form + map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <Card className="p-6 sm:p-8 shadow-premium-lg">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name">Full name *</Label>
                    <Input id="c-name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-email">Email *</Label>
                    <Input id="c-email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="c-phone">Phone</Label>
                    <Input id="c-phone" name="phone" placeholder="+233 24 000 0000" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-subject">Subject</Label>
                    <Select name="subject">
                      <SelectTrigger id="c-subject"><SelectValue placeholder="Select a topic" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer / campaign</SelectItem>
                        <SelectItem value="media">Media / press</SelectItem>
                        <SelectItem value="donation">Donation</SelectItem>
                        <SelectItem value="visit">Request a visit</SelectItem>
                        <SelectItem value="policy">Policy feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-message">Message *</Label>
                  <Textarea id="c-message" name="message" required rows={5} placeholder="Tell us how we can help…" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white font-semibold"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? 'Sending…' : 'Send Message'}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We respond to every message within 48 hours.
                </p>
              </form>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden shadow-premium">
              <div className="relative h-64 sm:h-72 bg-patriot-navy/10">
                <iframe
                  title="Campaign HQ location"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.22%2C5.55%2C-0.18%2C5.58&layer=mapnik"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between flex-wrap gap-2 bg-muted/40">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-patriot-red" />
                  <span className="font-medium">Mon–Fri, 8 AM – 8 PM</span>
                </div>
                <Badge className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90">
                  Live chat available
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
