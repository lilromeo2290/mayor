'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Film } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'

export type VideoItem = {
  id: string
  title: string
  description?: string
  thumbnail: string
  youtubeId: string
}

const VIDEOS: VideoItem[] = []

export function VideosSection() {
  const [active, setActive] = React.useState<VideoItem | null>(null)

  return (
    <section id="videos" className="py-20 sm:py-28 bg-background scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Videos"
          title={
            <>
              Watch the <span className="text-gradient-gold">Movement</span>
            </>
          }
        />

        {VIDEOS.length > 0 && (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((v, i) => (
              <motion.button
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onClick={() => setActive(v)}
                className="group relative w-full rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-patriot-navy/90 via-patriot-navy/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-premium-lg group-hover:scale-110 transition-transform">
                      <Play className="h-7 w-7 text-patriot-red ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-patriot-navy hover:bg-white/90 backdrop-blur-sm">
                      <Film className="h-3 w-3 mr-1" />
                      Video
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="font-serif text-base font-bold leading-tight">
                      {v.title}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {VIDEOS.length === 0 && (
          <div className="mt-12">
            <Card className="p-12 text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Play className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                Videos coming soon
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Campaign highlights, rally speeches, and community engagements
                will be published here. Please check back shortly.
              </p>
            </Card>
          </div>
        )}
      </div>

      {/* Lightbox with YouTube embed */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="mt-4 text-center text-white">
                <h4 className="font-serif text-xl font-bold">{active.title}</h4>
                {active.description && (
                  <p className="mt-1 text-sm text-white/70">{active.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
