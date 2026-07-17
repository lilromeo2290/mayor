'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/section-heading'
import { NEWS_ITEMS } from '@/lib/data/campaign'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  'All',
  'Campaign News',
  'Press Releases',
  'Interviews',
  'Opinion',
  'Speeches',
  'Videos',
  'Media Statements',
] as const

export function NewsSection() {
  const [active, setActive] = React.useState<(typeof CATEGORIES)[number]>('All')
  const filtered = React.useMemo(
    () => (active === 'All' ? NEWS_ITEMS : NEWS_ITEMS.filter((n) => n.category === active)),
    [active]
  )

  return (
    <section id="news" className="py-20 sm:py-28 bg-background scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="News & Updates"
          title={
            <>
              The Latest from <span className="text-gradient-gold">the Campaign</span>
            </>
          }
          description="Stay informed with the latest announcements, speeches, interviews, and policy positions from the candidate and the campaign team."
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                active === cat
                  ? 'bg-patriot-red text-white shadow-premium'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured (first item) */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {filtered[0] && <FeaturedNewsCard item={filtered[0]} />}

          {/* List of secondary items */}
          <div className="grid sm:grid-cols-2 gap-5">
            {filtered.slice(1, 5).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CompactNewsCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Remaining items grid */}
        {filtered.length > 5 && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(5).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CompactNewsCard item={item} />
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center py-12 text-muted-foreground">
            No articles in this category yet. Check back soon.
          </p>
        )}

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white">
            View All Articles
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeaturedNewsCard({ item }: { item: (typeof NEWS_ITEMS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden h-full hover:shadow-premium-lg transition-all duration-300 cursor-pointer">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-patriot-red text-white hover:bg-patriot-red/90 shadow-premium">
              Featured · {item.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(item.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {item.readTime}
            </span>
          </div>
          <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-foreground group-hover:text-patriot-red transition-colors">
            {item.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {item.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs">
              <User className="h-3 w-3 text-muted-foreground" />
              <span className="font-medium text-foreground">{item.author}</span>
            </span>
            <ArrowUpRight className="h-5 w-5 text-patriot-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function CompactNewsCard({ item }: { item: (typeof NEWS_ITEMS)[number] }) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col hover:shadow-premium transition-all duration-300 cursor-pointer">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Badge variant="outline" className="self-start text-[10px] uppercase tracking-wide border-patriot-gold/40 text-patriot-red mb-3">
          {item.category}
        </Badge>
        <h4 className="font-serif text-base font-bold leading-snug text-foreground group-hover:text-patriot-red transition-colors line-clamp-2">
          {item.title}
        </h4>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {item.excerpt}
        </p>
        <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
          <span>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
          <span>·</span>
          <span>{item.readTime}</span>
        </div>
      </div>
    </Card>
  )
}
