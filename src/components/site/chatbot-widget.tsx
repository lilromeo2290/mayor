'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { CANDIDATE } from '@/lib/data/campaign'

type Msg = { role: 'bot' | 'user'; text: string }

const QUICK_PROMPTS = [
  'How can I vote?',
  'How do I volunteer?',
  'Where does my donation go?',
  'When is the next event?',
  'Read the manifesto',
]

function answer(q: string): string {
  const lower = q.toLowerCase()
  if (lower.includes('vote'))
    return 'To vote for Emmanuel Amekplenu, you must be on the national electoral roll. Visit your district electoral office with a valid national ID before the registration deadline. Polling day is 7 December 2026. Want me to connect you to our voter helpline?'
  if (lower.includes('volunteer'))
    return 'Volunteering is easy! Scroll to the Volunteer section, complete the form, and our regional coordinator will reach out within 48 hours. We have roles for canvassing, phone banking, social media, logistics, healthcare outreach, and more.'
  if (lower.includes('donat') || lower.includes('donation') || lower.includes('money'))
    return 'Your donation goes directly to field organising (45%), advertising (25%), events (18%), compliance (7%), and admin (5%). Every donation above ₵100 is disclosed quarterly on our transparency portal.'
  if (lower.includes('event') || lower.includes('rally'))
    return 'Our next event is the Grand Rally at Independence Square on 5 December 2026. Scroll to the Events section for the full calendar and to RSVP. Most events are free and open to all supporters.'
  if (lower.includes('manifesto'))
    return 'You can read the full 84-page manifesto in the Media Center section, or browse the 13-point summary in the Manifesto section. The manifesto covers economy, roads, education, health, jobs, digital economy, tourism, industry, agriculture, energy, water, housing, and anti-corruption.'
  if (lower.includes('contact') || lower.includes('phone') || lower.includes('email'))
    return 'You can reach us at +233 30 555 0142 (phone/WhatsApp), info@mensahcampaign.example, or via the Contact form on this page. Our team responds within 48 hours.'
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey'))
    return `Hello! I'm the ${CANDIDATE.shortName} campaign assistant. I can help with voting, volunteering, donations, events, and the manifesto. What would you like to know?`
  return `Great question! Our team can give you a detailed answer. Try the Contact form at the bottom of this page, or call our helpline at +233 30 555 0142. In the meantime, you can also explore the Vision and Manifesto sections above.`
}

export function ChatbotWidget() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Msg[]>([
    {
      role: 'bot',
      text: `Hello! I'm VoteBot, your AI assistant for the ${CANDIDATE.shortName} campaign. Ask me about voting, volunteering, donations, events, or the manifesto.`,
    },
  ])
  const [input, setInput] = React.useState('')
  const [typing, setTyping] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages((m) => [...m, { role: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { role: 'bot', text: answer(text) }])
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-patriot-red text-white shadow-premium-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-patriot-gold ring-2 ring-background">
            <span className="absolute inset-0 rounded-full bg-patriot-gold animate-ping" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96"
          >
            <Card className="overflow-hidden shadow-premium-lg border-patriot-navy/20">
              {/* Header */}
              <div className="gradient-patriot p-4 text-white flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-patriot-gold" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-patriot-navy" />
                </div>
                <div>
                  <div className="font-serif text-sm font-bold flex items-center gap-1.5">
                    VoteBot
                    <Sparkles className="h-3 w-3 text-patriot-gold" />
                  </div>
                  <div className="text-[11px] text-white/70">AI Assistant · Online</div>
                </div>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-3 bg-muted/30">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-patriot-red text-white rounded-br-sm'
                          : 'bg-background border border-border rounded-bl-sm'
                      }`}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-background border border-border rounded-2xl rounded-bl-sm px-3 py-2.5 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick prompts */}
              {messages.length <= 1 && (
                <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="px-2.5 py-1 rounded-full text-[11px] bg-muted hover:bg-patriot-red hover:text-white transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  send(input)
                }}
                className="p-3 border-t border-border flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question…"
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="bg-patriot-red hover:bg-patriot-red/90 text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
