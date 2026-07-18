# Project Worklog — Amekplenu Campaign Website

This worklog tracks all changes made to the campaign website and serves as the
canonical record for commits pushed to the GitHub repository at
`https://github.com/lilromeo2290/mayor.git`.

**Repository**: https://github.com/lilromeo2290/mayor.git
**Branch**: `main`
**Project root**: `/home/z/my-project`
**Started**: 2026-07-18

---

## Workflow Convention

Every time a meaningful set of edits is made to the site, the agent MUST:

1. Append a new dated entry to this file (use the `---` separator).
2. Stage all changed files: `git add -A`
3. Commit with a clear, descriptive message:
   `git commit -m "<short summary of changes>"`
4. Push to origin: `git push origin main`

If a push fails due to auth, retry once. If it still fails, log the failure in
this file and continue — do NOT block user-facing work on a push.

---

## Project Overview

Premium political campaign website for **Emmanuel Senyo Amekplenu**, Volta
Regional Youth Organizer Hopeful, running under the **New Patriotic Party
(NPP)**. Built with Next.js + TypeScript + Tailwind CSS + Framer Motion.

NPP brand colors:
- Red: `#DA251D`
- Royal Blue: `#1B3A8E`
- Gold: `#D4AF37` (accent)
- White

---

## Initial Setup

- Date: 2026-07-18
- Agent: main
- Task: Wire project to GitHub remote and perform initial push.

Work Log:
- Verified existing git repo at `/home/z/my-project` on branch `main`.
- Added remote `origin` pointing to `https://github.com/lilromeo2290/mayor.git`
  using the provided GitHub token for authentication.
- Added `/upload/` to `.gitignore` (temporary user-uploaded image staging area
  should not be version-controlled).
- Created this worklog file as the canonical record of changes.
- Pushed existing local history to `origin/main` (new branch on remote).

Stage Summary:
- Remote configured: `origin` → `github.com/lilromeo2290/mayor.git`
- Initial push successful; `main` branch tracking `origin/main`.
- `.gitignore` updated to exclude `/upload/`.

---

## Customization History (pre-push recap)

The following changes were already applied locally before the initial push.
Future commits should append new entries below this section with concrete
details, not retroactive summaries.

### Rebranding: Alexander K. Mensah → Emmanuel Senyo Amekplenu

- `src/lib/data/campaign.ts`: candidate name, shortName, title
  (`Volta Regional Youth Organizer Hopeful`), party (`New Patriotic Party`),
  slogan (`Service. Excellence. Accountability.`).
- Bio fully rewritten for a youth-organizer profile.
- News article titles, testimonials, FAQ entries all renamed.
- `src/app/layout.tsx`: SEO metadata, Schema.org Person, site name
  (`Amekplenu Campaign 2024`).

### Navigation simplifications

- `NAV_LINKS`: removed "Projects" item (10 items total).
- Page flow: Hero → About → Vision → Manifesto → News → Events → Gallery →
  Testimonials → Volunteer → Donate → Media Center → Contact.
- Removed `<LiveTracker />` and `<AchievementsSection />` from `page.tsx`.

### Hero section

- Portrait: `/candidate-portrait.jpg` with `object-top`.
- Slogan replaced with `Service. Excellence. Accountability.` (gold gradient).
- Removed "Join the Movement" CTA button.
- Removed floating stats block (22 Years / 4,500,000 Lives / etc.).
- Removed declaration image that appeared above the slogan.

### About / Vision / Manifesto

- About: heading "Meet Emmanuel Senyo Amekplenu", removed "Download Full CV
  (PDF)" button.
- Vision: limited to first 6 pillars; "Twelve pillars" → "Six pillars"; Key
  Goals block conditionally rendered when `goals.length > 0`.
- Manifesto: limited to first 6 items; counter "of 12" → "of 6".
- Economic Development pillar: `goals: []` and `detail: ''` (entire detail
  paragraph removed per user request).

### News / Events / Gallery / Media Center

- News: limited to 3 items (1 featured + 2 compact).
- Events: removed Eastern Region Community Tour entry; removed "Events & RSVP"
  eyebrow.
- Gallery: rebuilt — 12 images all categorized under "Filling of Nomination
  Form" (renamed from "Campaign Highlights"); removed section description and
  title overlay on each card; category badge still shown top-left.
- Media Center: limited to 3 items (Manifesto PDF, Press Kit, Logo Pack).

### Volunteer / Donate / Contact / Testimonials

- Volunteer: removed "Join the Movement" badge and "Become a Volunteer" H2.
- Donate: updated fundraising stats (₵3,513,984 raised; 28,560 donors; avg
  gift ₵123); gradient updated to NPP blue `#1f3a8a`.
- Contact: simplified to single National HQ office; only Facebook social link.
- Testimonials: "Alexander Mensah" → "Emmanuel Amekplenu".

### NPP color branding

- `src/app/globals.css`: `--patriot-red` → `#DA251D` (light) / `#F0312A`
  (dark); `--patriot-navy` → `#1B3A8E` (light) / `#2A4FA8` (dark); primary
  hue shifted from 25 (red) to 258 (blue); all chart/sidebar/ring/accent
  variables updated.
- `.glass-dark`, `.shadow-premium`, `.shadow-premium-lg` rgba values updated
  to NPP blue.
- `live-tracker.tsx` and `donate.tsx`: hardcoded gradients updated.

### Site navigation styling

- `src/components/site/site-nav.tsx`: desktop nav links bumped to
  `text-[15px] font-bold`; brand name to `text-lg font-extrabold`; party label
  to `font-semibold`; mobile drawer links to `font-bold`.

### Public assets added

- `/public/candidate-portrait.jpg` — candidate portrait.
- `/public/gallery-1.jpg` through `/public/gallery-12.jpg` — gallery images
  sourced from user uploads.

---

## Changelog (forward-looking)

Append new entries below this line using the format:

```
---
## YYYY-MM-DD — <short title>

- Agent: <main | subagent-name>
- Files changed:
  - <path>
  - <path>
- Summary: <what changed and why>

Commit: <commit hash or "pending">
```

---
## 2026-07-19 — Add RTI Advocacy menu and section

- Agent: main
- Files changed:
  - `src/components/site/sections/rti-advocacy.tsx` (new)
  - `src/app/page.tsx`
  - `src/lib/data/campaign.ts`
- Summary:
  - Created a new `RtiAdvocacySection` component with six advocacy pillars
    (Transparency in Governance, Simplified Information Requests,
    Whistleblower Protection, Civic Education & Awareness, Youth-Led
    Accountability Clubs, Stronger Enforcement) plus a CTA card inviting
    supporters to become RTI Champions.
  - Added `<RtiAdvocacySection />` to the page flow between Gallery and
    Testimonials.
  - Added `RTI Advocacy` entry to `NAV_LINKS` (placed after Gallery, before
    Events) — links to `#rti`.
- Section styling matches the existing premium look (NPP navy/red gradients,
    gold accents, patriot-cream background, SectionHeading, motion reveal).

Commit: e8901c1

---
## 2026-07-19 — Vision as submenu under About

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
  - `src/components/site/site-nav.tsx`
- Summary:
  - Extended `NAV_LINKS` data type with optional `children` array, and moved
    Vision into About's children (no longer a top-level link).
  - Desktop nav: items with children now render with a chevron indicator and
    a hover-triggered dropdown panel containing the child links.
  - Mobile drawer: items with children render the parent link followed by
    nested child links indented under a left border.
  - Top-level menu now: Home, About (▸ Vision), Manifesto, News, Gallery,
    RTI Advocacy, Events, Volunteer, Donate, Contact.

Commit: d0a46c0

---
## 2026-07-19 — Rename Events menu to Resources

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
- Summary:
  - Top-level menu label "Events" → "Resources". The href still points to
    `#events` (the events section id is unchanged); only the visible label
    in the desktop nav and mobile drawer is renamed.

Commit: 847070a

---
## 2026-07-19 — Move Gallery under Resources as a submenu

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
- Summary:
  - Removed Gallery from top-level nav.
  - Added children to the Resources entry: Events (#events) and Gallery
    (#gallery). The parent Resources href stays #events.
  - Top-level menu now: Home, About (▸ Vision), Manifesto, News, RTI Advocacy,
    Resources (▸ Events, Gallery), Volunteer, Donate, Contact.

Commit: 615ce7f

---
## 2026-07-19 — Replace Events with Videos under Resources

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
  - `src/components/site/sections/videos.tsx` (new)
  - `src/app/page.tsx`
- Summary:
  - Resources submenu children changed from [Events, Gallery] to
    [Gallery, Videos]. Parent Resources href now points to #gallery.
  - Created a new `VideosSection` component (`#videos`) with:
    - Grid of video thumbnail cards (16:9 aspect, play button overlay,
      "Video" badge in top-left).
    - Click-to-open lightbox with embedded YouTube iframe (autoplay on
      open).
    - Empty state card ("Videos coming soon") when no videos are defined.
  - `VIDEOS` array in `videos.tsx` is intentionally empty for now —
    user can add `{ id, title, thumbnail, youtubeId }` entries to
    populate the section.
  - Added `<VideosSection />` to the page flow right after Gallery.
  - Top-level menu: Home, About (▸ Vision), Manifesto, News, RTI Advocacy,
    Resources (▸ Gallery, Videos), Volunteer, Donate, Contact.

Commit: 1ff8dbe

---
## 2026-07-19 — Remove Donate from top-level nav

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
- Summary:
  - Removed the standalone "Donate" entry from `NAV_LINKS`.
  - Note: the Donate section itself remains on the page (`#donate`), and
    the standalone red "Donate" button in the header right cluster
    (visible on md+ screens) plus the "Donate Now" CTA at the bottom of
    the mobile drawer are unchanged — those are CTAs, not nav items.
  - Top-level menu now: Home, About (▸ Vision), Manifesto, News, RTI
    Advocacy, Resources (▸ Gallery, Videos), Volunteer, Contact.

Commit: 0afeb5a

---
## 2026-07-19 — Add RTI Advocacy submenus (Requested Information, Responses Received)

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
  - `src/components/site/sections/rti-tracker.tsx` (new)
  - `src/app/page.tsx`
- Summary:
  - Added `children` to the RTI Advocacy nav entry:
    - Requested Information → `#rti-requests`
    - Responses Received → `#rti-responses`
  - Created a new `RtiTrackerSection` component exporting two sections:
    1. **Requested Information** (`#rti-requests`) — list of RTI requests
       filed by the campaign. Each card shows title, status badge
       (Pending / Acknowledged / Response Received / Overdue), summary,
       agency, and date filed. Empty-state shown when no requests exist.
    2. **Responses Received** (`#rti-responses`) — list of agency replies.
       Each card shows title, "Response Received" badge, summary, agency,
       date received, and optional "View Document" button linking to the
       response file. Empty-state shown when no responses exist.
  - Added `<RtiTrackerSection />` to the page flow right after
    `<RtiAdvocacySection />`.
  - `RTI_REQUESTS` and `RTI_RESPONSES` arrays are intentionally empty —
    user can supply entries to populate the tracker.
  - Top-level menu: Home, About (▸ Vision), Manifesto, News, RTI Advocacy
    (▸ Requested Information, Responses Received), Resources (▸ Gallery,
    Videos), Volunteer, Contact.

Commit: cdb26f3

---
## 2026-07-19 — Remove News and Volunteer from top-level nav

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
- Summary:
  - Removed "News" and "Volunteer" entries from `NAV_LINKS`.
  - News section (`#news`) and Volunteer section (`#volunteer`) remain on
    the page — only the nav menu items were removed.
  - Top-level menu now: Home, About (▸ Vision), Manifesto, RTI Advocacy
    (▸ Requested Information, Responses Received), Resources (▸ Gallery,
    Videos), Contact.

Commit: bc54a7a

---
## 2026-07-19 — Update hero badge: 22+ Years -> 10+ Years

- Agent: main
- Files changed:
  - `src/components/site/sections/hero.tsx`
- Summary:
  - Floating badge on the candidate portrait (top-right) updated from
    "22+ Years / In Public Service" to "10+ Years / In Public Service".

Commit: pending
