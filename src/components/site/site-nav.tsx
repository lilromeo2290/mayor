'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Search, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { NAV_LINKS, FAQ_ITEMS, CANDIDATE } from '@/lib/data/campaign'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-premium'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Brand */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 rounded-full bg-patriot-navy flex items-center justify-center shadow-premium">
                <span className="font-serif text-xl font-bold text-patriot-gold">M</span>
                <span className="absolute inset-0 rounded-full border-2 border-patriot-gold/40 group-hover:border-patriot-gold transition-colors" />
              </div>
              <div className="hidden sm:block leading-tight">
                <div
                  className={cn(
                    'font-serif text-lg font-extrabold tracking-tight',
                    scrolled ? 'text-foreground' : 'text-foreground'
                  )}
                >
                  {CANDIDATE.shortName}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                  {CANDIDATE.party}
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children && link.children.length > 0 ? (
                  <div key={link.href} className="group relative">
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 px-3 py-2 text-[15px] font-bold text-foreground/85 hover:text-patriot-red transition-colors rounded-md hover:bg-muted/60"
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </a>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="min-w-[200px] rounded-xl border border-border bg-popover shadow-premium-lg p-1.5">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-patriot-red hover:bg-muted rounded-md transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-[15px] font-bold text-foreground/85 hover:text-patriot-red transition-colors rounded-md hover:bg-muted/60"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Search">
                    <Search className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Search the campaign</DialogTitle>
                  </DialogHeader>
                  <SearchBox onPick={() => setSearchOpen(false)} />
                </DialogContent>
              </Dialog>

              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              <a href="#donate" className="hidden md:inline-flex">
                <Button className="bg-patriot-red hover:bg-patriot-red/90 text-white shadow-premium">
                  Donate
                </Button>
              </a>

              {/* Mobile menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="xl:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[420px] p-0">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                      <SheetTitle className="font-serif text-lg font-bold">
                        {CANDIDATE.shortName}
                      </SheetTitle>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" aria-label="Close menu">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>
                    <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
                      {NAV_LINKS.map((link) => (
                        <div key={link.href}>
                          <SheetClose asChild>
                            <a
                              href={link.href}
                              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-bold text-foreground hover:bg-muted transition-colors"
                            >
                              {link.label}
                              {link.children && link.children.length > 0 && (
                                <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                              )}
                            </a>
                          </SheetClose>
                          {link.children && link.children.length > 0 && (
                            <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                              {link.children.map((child) => (
                                <SheetClose asChild key={child.href}>
                                  <a
                                    href={child.href}
                                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/75 hover:text-patriot-red hover:bg-muted transition-colors"
                                  >
                                    {child.label}
                                  </a>
                                </SheetClose>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                    <div className="border-t border-border p-6 space-y-3">
                      <a href="#volunteer" className="block">
                        <SheetClose asChild>
                          <Button variant="outline" className="w-full">
                            Join as Volunteer
                          </Button>
                        </SheetClose>
                      </a>
                      <a href="#donate" className="block">
                        <SheetClose asChild>
                          <Button className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white">
                            Donate Now
                          </Button>
                        </SheetClose>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <div className="h-20" aria-hidden />
    </>
  )
}

function SearchBox({ onPick }: { onPick: () => void }) {
  const [q, setQ] = React.useState('')
  const results = React.useMemo(() => {
    if (!q) return []
    const lower = q.toLowerCase()
    const r: { title: string; href: string; kind: string }[] = []
    NAV_LINKS.forEach((l) => {
      if (l.label.toLowerCase().includes(lower)) {
        r.push({ title: l.label, href: l.href, kind: 'Page' })
      }
    })
    FAQ_ITEMS.forEach((f, i) => {
      if (f.q.toLowerCase().includes(lower) || f.a.toLowerCase().includes(lower)) {
        r.push({ title: f.q, href: '#faq', kind: 'FAQ' })
      }
    })
    return r.slice(0, 8)
  }, [q])

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search policies, FAQ, pages…"
          className="pl-9"
        />
      </div>
      <div className="max-h-80 overflow-y-auto">
        {results.length === 0 && q && (
          <p className="text-sm text-muted-foreground py-6 text-center">
            No matches for “{q}”.
          </p>
        )}
        {results.length === 0 && !q && (
          <p className="text-sm text-muted-foreground py-6 text-center">
            Try “donate”, “education”, “events”, or “volunteer”.
          </p>
        )}
        <AnimatePresence>
          {results.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              onClick={onPick}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.03 }}
              className="block rounded-md px-3 py-3 hover:bg-muted transition-colors"
            >
              <div className="text-sm font-medium">{r.title}</div>
              <div className="text-xs text-muted-foreground">{r.kind}</div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
