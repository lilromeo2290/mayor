'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Users, Send, Heart, Megaphone } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SectionHeading } from '@/components/site/section-heading'
import { REGIONS, CONSTITUENCIES, SKILLS, VOLUNTEER_INTERESTS } from '@/lib/data/campaign'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export function VolunteerSection() {
  const [skills, setSkills] = React.useState<string[]>([])
  const [interests, setInterests] = React.useState<string[]>([])
  const [submitting, setSubmitting] = React.useState(false)

  const toggle = (arr: string[], v: string, set: (a: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email'),
      region: data.get('region'),
      constituency: data.get('constituency'),
      availability: data.get('availability'),
      skills,
      interests,
      message: data.get('message'),
    }
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Welcome to the movement!', {
        description: 'Our regional coordinator will contact you within 48 hours.',
      })
      form.reset()
      setSkills([])
      setInterests([])
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="volunteer" className="py-20 sm:py-28 bg-patriot-cream dark:bg-background/40 scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              This is a people-powered campaign. Across 312 constituencies, 50,000 volunteers are knocking on doors, making calls, and organising their communities. Your skills, your time, and your voice can make the difference.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: Users, title: 'Be part of something bigger', desc: 'Join 50,000+ volunteers nationwide' },
                { icon: Heart, title: 'Make a real impact', desc: 'Direct voter contact moves the needle' },
                { icon: Megaphone, title: 'Lead in your community', desc: 'Become a constituency coordinator' },
              ].map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-patriot-red/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-patriot-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{b.title}</div>
                    <div className="text-sm text-muted-foreground">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-patriot-navy/5 dark:bg-patriot-navy/15 border border-patriot-navy/10">
              <div className="font-serif text-3xl font-bold text-patriot-navy dark:text-patriot-gold">
                50,000+
              </div>
              <div className="text-sm text-muted-foreground">Active volunteers across 16 regions</div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8 shadow-premium-lg">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="v-name">Full name *</Label>
                    <Input id="v-name" name="name" required placeholder="Akosua Mensah" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="v-phone">Phone *</Label>
                    <Input id="v-phone" name="phone" required placeholder="+233 24 000 0000" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="v-email">Email *</Label>
                    <Input id="v-email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="v-region">Region *</Label>
                    <Select name="region" required>
                      <SelectTrigger id="v-region"><SelectValue placeholder="Select region" /></SelectTrigger>
                      <SelectContent>
                        {REGIONS.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="v-constituency">Constituency</Label>
                    <Select name="constituency">
                      <SelectTrigger id="v-constituency"><SelectValue placeholder="Select constituency" /></SelectTrigger>
                      <SelectContent>
                        {CONSTITUENCIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="v-availability">Availability</Label>
                    <Select name="availability">
                      <SelectTrigger id="v-availability"><SelectValue placeholder="Select availability" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="evenings">Evenings</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="events-only">Events only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>Skills (select all that apply)</Label>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggle(skills, s, setSkills)}
                        className={cn(
                          'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                          skills.includes(s)
                            ? 'bg-patriot-navy text-white'
                            : 'bg-muted text-muted-foreground hover:bg-muted/70'
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>Interests</Label>
                  <div className="flex flex-wrap gap-2">
                    {VOLUNTEER_INTERESTS.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggle(interests, s, setInterests)}
                        className={cn(
                          'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                          interests.includes(s)
                            ? 'bg-patriot-red text-white'
                            : 'bg-muted text-muted-foreground hover:bg-muted/70'
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="v-message">Anything else we should know?</Label>
                  <Textarea
                    id="v-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your background, your motivation, or any constraints."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white font-semibold"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? 'Submitting…' : 'Submit Volunteer Application'}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive campaign updates. We respect your privacy and never share your data.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
