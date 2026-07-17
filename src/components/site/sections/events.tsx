'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, CalendarCheck, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/section-heading'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EVENT_ITEMS, type EventItem } from '@/lib/data/campaign'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

function useCountdown(target: string) {
  const compute = React.useCallback(() => {
    const diff = new Date(target).getTime() - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  }, [target])
  const [time, setTime] = React.useState(compute)
  React.useEffect(() => {
    const id = setInterval(() => setTime(compute()), 1000)
    return () => clearInterval(id)
  }, [compute])
  return time
}

export function EventsSection() {
  const next = EVENT_ITEMS[0]
  const t = useCountdown(next.date)

  return (
    <section id="events" className="py-20 sm:py-28 bg-patriot-cream dark:bg-background/40 scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events & RSVP"
          title={
            <>
              Join Us on the <span className="text-gradient-gold">Campaign Trail</span>
            </>
          }
          description="Rallies, town halls, community visits, and fundraisers across all 16 regions. RSVP to secure your spot and receive event updates."
        />

        {/* Countdown hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <Card className="overflow-hidden shadow-premium-lg">
            <div className="grid lg:grid-cols-2">
              {/* Left: countdown */}
              <div className="relative p-8 lg:p-12 gradient-patriot text-white">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                <div className="relative">
                  <Badge className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90">
                    <CalendarCheck className="h-3 w-3 mr-1" />
                    Next Event
                  </Badge>
                  <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    {next.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(next.date).toLocaleDateString('en-GB', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {next.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {next.location}
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
                    {[
                      { v: t.d, l: 'Days' },
                      { v: t.h, l: 'Hours' },
                      { v: t.m, l: 'Min' },
                      { v: t.s, l: 'Sec' },
                    ].map((unit) => (
                      <div
                        key={unit.l}
                        className="rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-3 text-center"
                      >
                        <div className="font-serif text-2xl sm:text-4xl font-bold text-patriot-gold tabular-nums">
                          {String(unit.v).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1">
                          {unit.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <RSVPDialog event={next} />
                  </div>
                </div>
              </div>

              {/* Right: map placeholder */}
              <div className="relative min-h-[280px] lg:min-h-full bg-patriot-navy/10 dark:bg-patriot-navy/30">
                <iframe
                  title="Event location map"
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=0,0,0,0&layer=mapnik&marker=0,0`}
                  style={{ border: 0 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-patriot-navy/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Card className="p-6 max-w-sm text-center bg-white/95 dark:bg-card/95 backdrop-blur-md">
                    <div className="inline-flex h-12 w-12 rounded-full bg-patriot-red/10 items-center justify-center mx-auto">
                      <MapPin className="h-6 w-6 text-patriot-red" />
                    </div>
                    <h4 className="mt-3 font-serif text-lg font-bold">{next.location}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{next.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(next.location + ', ' + next.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center text-sm font-medium text-patriot-red hover:underline"
                    >
                      Open in Google Maps
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other events */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EVENT_ITEMS.slice(1).map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <Card className="group p-6 h-full flex flex-col hover:shadow-premium-lg transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="flex flex-col items-center justify-center h-14 w-14 rounded-xl bg-patriot-navy text-white shadow-premium">
            <span className="font-serif text-xl font-bold leading-none">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-patriot-gold mt-0.5">
              {new Date(event.date).toLocaleDateString('en-GB', { month: 'short' })}
            </span>
          </div>
          <div>
            <Badge variant="outline" className="text-[10px] border-patriot-gold/40 text-patriot-red">
              {event.type}
            </Badge>
            <h4 className="mt-1.5 font-serif text-base font-bold leading-snug text-foreground group-hover:text-patriot-red transition-colors">
              {event.title}
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" /> {event.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" /> {event.location}
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground/75 leading-relaxed flex-1 line-clamp-3">
        {event.description}
      </p>

      <div className="mt-5 pt-4 border-t border-border">
        <RSVPDialog event={event} />
      </div>
    </Card>
  )
}

function RSVPDialog({ event }: { event: EventItem }) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [guests, setGuests] = React.useState('1')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(`RSVP confirmed for ${event.title}!`, {
      description: `Confirmation sent to ${email}. We'll see you on ${new Date(event.date).toLocaleDateString()}.`,
    })
    setOpen(false)
    setName('')
    setEmail('')
    setGuests('1')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            'w-full bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90 font-semibold'
          )}
        >
          <CalendarCheck className="h-4 w-4 mr-2" />
          RSVP Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>RSVP — {event.title}</DialogTitle>
          <DialogDescription>
            {new Date(event.date).toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            at {event.time} · {event.location}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label htmlFor="rsvp-name">Full name</Label>
            <Input
              id="rsvp-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="rsvp-email">Email</Label>
            <Input
              id="rsvp-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="rsvp-guests">Number of guests (including you)</Label>
            <Input
              id="rsvp-guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-patriot-red hover:bg-patriot-red/90 text-white">
              Confirm RSVP
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
