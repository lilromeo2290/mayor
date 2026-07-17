'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Building2, Globe, ShieldCheck, Repeat, Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const AMOUNTS = [25, 50, 100, 250, 500, 1000]
const METHODS = [
  { id: 'card', label: 'Credit Card', icon: CreditCard, desc: 'Visa · Mastercard' },
  { id: 'momo', label: 'Mobile Money', icon: Smartphone, desc: 'MTN · Vodafone · AirtelTigo' },
  { id: 'bank', label: 'Bank Transfer', icon: Building2, desc: 'Direct deposit' },
  { id: 'paypal', label: 'PayPal', icon: Globe, desc: 'International donors' },
]

export function DonationSection() {
  const [amount, setAmount] = React.useState<number>(100)
  const [custom, setCustom] = React.useState('')
  const [method, setMethod] = React.useState('card')
  const [recurring, setRecurring] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)

  const finalAmount = custom ? Number(custom) : amount
  const goal = 5_000_000
  const raised = 3_513_984
  const pct = Math.min(100, (raised / goal) * 100)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!finalAmount || finalAmount < 1) {
      toast.error('Please enter a valid amount.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount, method, recurring }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success(`Thank you for your ${recurring ? 'monthly ' : ''}donation of ₵${finalAmount.toLocaleString()}!`, {
        description: 'A receipt has been sent to your email. Every cedi fuels the movement.',
      })
      setCustom('')
    } catch {
      toast.error('Donation failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="donate" className="py-20 sm:py-28 bg-background scroll-anchor relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-patriot-red/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-patriot-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fuel the Movement"
          title={
            <>
              Your Donation. <span className="text-gradient-gold">Our Future.</span>
            </>
          }
          description="Every contribution, large or small, fuels a people-powered campaign that puts citizens first. All donations are processed securely and disclosed quarterly."
        />

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="p-6 sm:p-8 shadow-premium-lg bg-gradient-to-br from-patriot-navy to-[#10294a] text-white border-0">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="text-xs uppercase tracking-widest text-patriot-gold font-semibold">
                  Fundraising Goal
                </div>
                <div className="mt-1 font-serif text-3xl sm:text-4xl font-bold">
                  ₵{raised.toLocaleString()}{' '}
                  <span className="text-base text-white/60 font-normal">of ₵{goal.toLocaleString()}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-2xl font-bold text-patriot-gold">{pct.toFixed(1)}%</div>
                <div className="text-xs text-white/70">funded by 28,560 donors</div>
              </div>
            </div>
            <div className="mt-5 h-3 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full gradient-gold rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse" />
              </motion.div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="font-serif text-xl font-bold text-patriot-gold">28,560</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Donors</div>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-patriot-gold">₵123</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Avg. gift</div>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-patriot-gold">94%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Under ₵250</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Donation form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid lg:grid-cols-5 gap-6"
        >
          <Card className="lg:col-span-3 p-6 sm:p-8 shadow-premium">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Amount picker */}
              <div>
                <Label className="text-sm font-semibold">Choose an amount (₵)</Label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {AMOUNTS.map((a) => (
                    <button
                      type="button"
                      key={a}
                      onClick={() => { setAmount(a); setCustom('') }}
                      className={cn(
                        'relative py-3 rounded-xl font-serif text-lg font-bold transition-all',
                        !custom && amount === a
                          ? 'bg-patriot-red text-white shadow-premium'
                          : 'bg-muted hover:bg-muted/70 text-foreground'
                      )}
                    >
                      ₵{a.toLocaleString()}
                      {!custom && amount === a && (
                        <span className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-white flex items-center justify-center">
                          <Check className="h-3 w-3 text-patriot-red" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-3 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-serif font-bold">₵</span>
                  <Input
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>

              {/* Recurring toggle */}
              <button
                type="button"
                onClick={() => setRecurring(!recurring)}
                className={cn(
                  'w-full flex items-center justify-between gap-3 p-4 rounded-xl border transition-all text-left',
                  recurring
                    ? 'border-patriot-gold bg-patriot-gold/5'
                    : 'border-border bg-muted/30 hover:bg-muted/60'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'h-10 w-10 rounded-lg flex items-center justify-center',
                    recurring ? 'bg-patriot-gold text-patriot-navy' : 'bg-muted text-muted-foreground'
                  )}>
                    <Repeat className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Make this a monthly donation</div>
                    <div className="text-xs text-muted-foreground">Sustained support powers long-term organising</div>
                  </div>
                </div>
                <div className={cn(
                  'h-6 w-11 rounded-full transition-colors flex items-center px-0.5',
                  recurring ? 'bg-patriot-red justify-end' : 'bg-border justify-start'
                )}>
                  <span className="h-5 w-5 rounded-full bg-white shadow-sm transition-transform" />
                </div>
              </button>

              {/* Payment method */}
              <div>
                <Label className="text-sm font-semibold">Payment method</Label>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {METHODS.map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-xl border transition-all text-left',
                        method === m.id
                          ? 'border-patriot-red bg-patriot-red/5'
                          : 'border-border bg-background hover:bg-muted/50'
                      )}
                    >
                      <m.icon className={cn(
                        'h-5 w-5 flex-shrink-0',
                        method === m.id ? 'text-patriot-red' : 'text-muted-foreground'
                      )} />
                      <div className="min-w-0">
                        <div className="text-sm font-medium">{m.label}</div>
                        <div className="text-[10px] text-muted-foreground truncate">{m.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="d-email">Email (for receipt)</Label>
                <Input id="d-email" name="email" type="email" required placeholder="you@example.com" />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white font-semibold shadow-premium-lg"
              >
                <Heart className="h-4 w-4 mr-2" />
                {submitting
                  ? 'Processing…'
                  : `Donate ₵${(finalAmount || 0).toLocaleString()}${recurring ? ' / month' : ''}`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-patriot-navy dark:text-patriot-gold" />
                Secured by 256-bit SSL · PCI-DSS compliant
              </div>
            </form>
          </Card>

          {/* Right: transparency */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6 shadow-premium">
              <div className="font-serif text-lg font-bold text-foreground">Where Your Money Goes</div>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Field organising & volunteer stipends', pct: 45, color: 'bg-patriot-red' },
                  { label: 'Advertising & voter outreach', pct: 25, color: 'bg-patriot-navy' },
                  { label: 'Events & rallies', pct: 18, color: 'bg-patriot-gold' },
                  { label: 'Compliance & reporting', pct: 7, color: 'bg-muted-foreground' },
                  { label: 'Administrative', pct: 5, color: 'bg-border' },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-foreground/80">{row.label}</span>
                      <span className="font-semibold text-foreground">{row.pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className={cn('h-full rounded-full', row.color)} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-premium bg-patriot-navy text-white border-0">
              <Badge className="bg-patriot-gold text-patriot-navy hover:bg-patriot-gold/90 mb-2">
                Transparency Pledge
              </Badge>
              <h4 className="font-serif text-lg font-bold">100% Disclosed Quarterly</h4>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Every donation above ₵100 is published in our quarterly transparency report. No anonymous donations. No foreign money. No hidden donors.
              </p>
              <Button variant="outline" className="mt-4 border-white/40 text-white hover:bg-white/10 hover:text-white">
                Read Latest Report
              </Button>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
