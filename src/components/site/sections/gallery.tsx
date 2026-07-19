'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/site/section-heading'
import { GALLERY_ITEMS } from '@/lib/data/campaign'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Filling of Nomination Form'] as const

export function GallerySection() {
  const [active, setActive] = React.useState<(typeof CATEGORIES)[number]>('All')
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)

  const filtered = React.useMemo(
    () => (active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active)),
    [active]
  )

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const showPrev = React.useCallback(() => {
    setLightboxIndex((cur) => {
      if (cur === null || filtered.length === 0) return cur
      return (cur - 1 + filtered.length) % filtered.length
    })
  }, [filtered.length])

  const showNext = React.useCallback(() => {
    setLightboxIndex((cur) => {
      if (cur === null || filtered.length === 0) return cur
      return (cur + 1) % filtered.length
    })
  }, [filtered.length])

  // Keyboard navigation
  React.useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    // Lock body scroll while lightbox is open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex, showPrev, showNext])

  // Touch swipe navigation
  const touchStartX = React.useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
    const dx = endX - touchStartX.current
    if (Math.abs(dx) > 50) {
      if (dx < 0) showNext()
      else showPrev()
    }
    touchStartX.current = null
  }

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-background scroll-anchor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments from <span className="text-gradient-gold">the Movement</span>
            </>
          }
        />

        {/* Filter tabs (hidden when no items exist) */}
        {GALLERY_ITEMS.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  active === cat
                    ? 'bg-patriot-navy text-white shadow-premium'
                    : 'bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Masonry grid */}
        {GALLERY_ITEMS.length > 0 && (
          <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              onClick={() => openLightbox(i)}
              className="group relative w-full mb-5 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer break-inside-avoid block"
            >
              <img
                src={item.src}
                alt={item.title}
                className={cn(
                  'w-full object-cover transition-transform duration-500 group-hover:scale-105',
                  item.span === 'tall' && 'aspect-[3/4]',
                  item.span === 'wide' && 'aspect-[4/3]',
                  (!item.span || item.span === 'normal') && 'aspect-square'
                )}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-patriot-navy/90 via-patriot-navy/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute top-3 left-3">
                <Badge className="bg-white/90 text-patriot-navy hover:bg-white/90 backdrop-blur-sm">
                  {item.category}
                </Badge>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center shadow-premium-lg">
                    <Play className="h-6 w-6 text-patriot-red ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left">
                <div className="inline-flex items-center gap-1.5 text-xs text-patriot-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-3.5 w-3.5" /> View
                </div>
              </div>
            </motion.button>
          ))}
          </div>
        )}

        {GALLERY_ITEMS.length === 0 && (
          <p className="text-center py-16 text-muted-foreground">
            Gallery updates coming soon.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
            )}

            {/* Next */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            )}

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="w-full max-h-[78vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center text-white">
                <Badge className="bg-patriot-gold text-patriot-navy mb-2">
                  {filtered[lightboxIndex].category}
                </Badge>
                {filtered[lightboxIndex].title && (
                  <h4 className="font-serif text-xl font-bold">{filtered[lightboxIndex].title}</h4>
                )}
                {filtered.length > 1 && (
                  <div className="mt-2 text-xs text-white/60 font-medium">
                    {lightboxIndex + 1} / {filtered.length} · use ← → to navigate
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
