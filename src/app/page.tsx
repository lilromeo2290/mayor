'use client'

import { SiteNav } from '@/components/site/site-nav'
import { HeroSection } from '@/components/site/sections/hero'
import { AboutSection } from '@/components/site/sections/about'
import { VisionSection } from '@/components/site/sections/vision'
import { ManifestoSection } from '@/components/site/sections/manifesto'
import { NewsSection } from '@/components/site/sections/news'
import { EventsSection } from '@/components/site/sections/events'
import { GallerySection } from '@/components/site/sections/gallery'
import { VideosSection } from '@/components/site/sections/videos'
import { RtiAdvocacySection } from '@/components/site/sections/rti-advocacy'
import { VolunteerSection } from '@/components/site/sections/volunteer'
import { DonationSection } from '@/components/site/sections/donate'
import { TestimonialsSection } from '@/components/site/sections/testimonials'
import { MediaCenterSection } from '@/components/site/sections/media-center'
import { ContactSection } from '@/components/site/sections/contact'
import { SiteFooter } from '@/components/site/sections/footer'
import { ChatbotWidget } from '@/components/site/chatbot-widget'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ManifestoSection />
        <NewsSection />
        <EventsSection />
        <GallerySection />
        <VideosSection />
        <RtiAdvocacySection />
        <TestimonialsSection />
        <VolunteerSection />
        <DonationSection />
        <MediaCenterSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ChatbotWidget />
    </div>
  )
}
