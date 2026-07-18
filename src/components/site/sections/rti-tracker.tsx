'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  FileSearch,
  FileCheck2,
  Clock,
  Building2,
  Calendar,
  ExternalLink,
  Inbox,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/section-heading'

export type RtiRequest = {
  id: string
  title: string
  agency: string
  dateFiled: string
  status: 'Pending' | 'Acknowledged' | 'Response Received' | 'Overdue'
  summary: string
}

export type RtiResponse = {
  id: string
  title: string
  agency: string
  dateReceived: string
  summary: string
  documentUrl?: string
}

const RTI_REQUESTS: RtiRequest[] = []

const RTI_RESPONSES: RtiResponse[] = []

const STATUS_STYLES: Record<RtiRequest['status'], string> = {
  Pending: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  Acknowledged: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  'Response Received':
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  Overdue: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

export function RtiTrackerSection() {
  return (
    <>
      {/* Requested Information */}
      <section
        id="rti-requests"
        className="py-20 sm:py-28 bg-background scroll-anchor"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="RTI Advocacy"
            title={
              <>
                Requested <span className="text-gradient-gold">Information</span>
              </>
            }
            description="A public log of every Right to Information request filed by the campaign. We disclose what we ask, who we ask, and when — so the public can track the answers alongside us."
          />

          {RTI_REQUESTS.length > 0 ? (
            <div className="mt-12 grid gap-4">
              {RTI_REQUESTS.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-premium-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-serif text-lg font-bold text-foreground">
                            {r.title}
                          </h3>
                          <Badge className={STATUS_STYLES[r.status]} variant="outline">
                            {r.status}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {r.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 className="h-3.5 w-3.5" />
                            {r.agency}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            Filed {r.dateFiled}
                          </span>
                        </div>
                      </div>
                      <div className="flex sm:flex-col gap-2 sm:items-end">
                        <FileSearch className="hidden sm:block h-6 w-6 text-patriot-navy dark:text-patriot-gold" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <Card className="p-12 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  No requests filed yet
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  Information requests submitted by the campaign will be
                  published here as soon as they are filed. Check back for
                  updates.
                </p>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Responses Received */}
      <section
        id="rti-responses"
        className="py-20 sm:py-28 bg-patriot-cream dark:bg-background/40 scroll-anchor"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="RTI Advocacy"
            title={
              <>
                Responses <span className="text-gradient-gold">Received</span>
              </>
            }
            description="When an agency replies, the response is published here in full — including any documents, summaries, and the time taken between request and reply."
          />

          {RTI_RESPONSES.length > 0 ? (
            <div className="mt-12 grid gap-4">
              {RTI_RESPONSES.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-premium-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-serif text-lg font-bold text-foreground">
                            {r.title}
                          </h3>
                          <Badge
                            className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                            variant="outline"
                          >
                            <FileCheck2 className="h-3 w-3 mr-1" />
                            Response Received
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {r.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 className="h-3.5 w-3.5" />
                            {r.agency}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            Received {r.dateReceived}
                          </span>
                        </div>
                      </div>
                      {r.documentUrl && (
                        <a
                          href={r.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <Button
                            variant="outline"
                            className="border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white dark:border-patriot-gold dark:text-patriot-gold dark:hover:bg-patriot-gold dark:hover:text-patriot-navy"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Document
                          </Button>
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <Card className="p-12 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Inbox className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  No responses received yet
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  When agencies reply to our information requests, the
                  responses and any supporting documents will be published
                  here in full.
                </p>
              </Card>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
