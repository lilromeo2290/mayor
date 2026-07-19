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

Commit: 5c24644

---
## 2026-07-19 — Use uploaded logo.png as site logo

- Agent: main
- Files changed:
  - `public/logo.png` (new)
  - `src/components/site/site-nav.tsx`
  - `src/components/site/sections/footer.tsx`
  - `src/app/layout.tsx`
- Summary:
  - Copied `logo.png` from `/upload/` to `/public/logo.png`.
  - Header brand: replaced the navy circle with gold "M" monogram with a
    circular image badge containing the new logo. Size slightly increased
    to 12×12 (mobile) / 14×14 (sm+) so the logo reads cleanly. Gold ring
    kept as a frame, with hover ring brightening.
  - Footer brand: same swap — replaced the "M" monogram with the logo
    image inside a 14×14 circular badge.
  - Favicon: added `icons` config in metadata pointing `/logo.png` to
    icon, shortcut, and apple icon entries so the logo also appears in
    browser tabs and on iOS home screens.

Commit: f701da4

---
## 2026-07-19 — Passcode-gate the Responses Received section

- Agent: main
- Files changed:
  - `src/lib/data/campaign.ts`
  - `src/components/site/sections/rti-tracker.tsx`
- Summary:
  - Added `RTI_RESPONSES_ACCESS_CODE` constant to `campaign.ts` (default
    value: `amekplenu2026`). Change this string to rotate the code.
  - Added a new `ResponsesGate` sub-component in `rti-tracker.tsx`:
    - Lock + key icon header, "Access Restricted" title, explainer copy.
    - Password input with show/hide toggle (eye icon).
    - "Unlock Section" submit button; on incorrect code, shows red
      "Incorrect access code" error inline.
    - On correct code: persists unlock to `localStorage` under key
      `rti-responses-unlocked` so returning visitors don't re-enter.
  - The Responses Received section is now wrapped: when locked, the
    gate card is shown; when unlocked, the existing responses list
    (or empty-state card) is shown.
  - Section title now appends a red "Locked" badge with lock icon when
    locked. Description also swaps to a locked-state message.
  - The "Responses Received" submenu link still works — it scrolls to
    `#rti-responses`, where the locked card is now shown instead of the
    responses list.
  - Note: this is a client-side gate (not cryptographic security). It
    hides the section from casual viewing and protects against the
    average visitor, but a determined user could inspect the JS bundle.
    For real secrecy, responses should also be omitted from the bundle
    until the code is verified server-side.

Commit: 1f050cc

---
## 2026-07-19 — Enrich website background with layered depth

- Agent: main
- Files changed:
  - `src/app/globals.css`
- Summary:
  - Replaced the flat `--background` body fill with a layered composition:
    1. Tinted radial gradient top-left (NPP navy at 6% opacity).
    2. Tinted radial gradient bottom-right (NPP red at 5% opacity).
    3. Soft gold ellipse wash across the center (3% opacity).
    4. Subtle 32px dot-grid SVG pattern (navy at 2.5% opacity).
  - Background is `fixed` so the layers stay anchored while content
    scrolls — creates a parallax-like depth effect.
  - Added a thin gold top-accent line via `body::before` (6px tall,
    8% opacity) for a premium framing edge at the very top of the page.
  - Added `body > * { position: relative; z-index: 1 }` so content
    always sits above the background layers.
  - Added a `.section-divider` utility class — a horizontal gradient
    hairline (transparent → navy → gold → red → transparent) that can
    be inserted between sections for a layered feel. Not yet used
    anywhere; available for future section separators.
  - All tints use `color-mix(in oklch, ...)` so they automatically
    adapt to dark mode (the dark-mode `--patriot-*` vars already point
    at brighter versions of the same hues).

Commit: eb24d30

---
## 2026-07-19 — Add Request Access button to RTI responses gate

- Agent: main
- Files changed:
  - `src/components/site/sections/rti-tracker.tsx`
- Summary:
  - Added a divider ("or") and a new "Request Access" button below the
    "Unlock Section" form in the ResponsesGate component.
  - Button is outlined in NPP red with key-round icon, links to `#contact`.
  - Helper text below the button: "Don't have a code? Send a request to
    the campaign team and we'll get back to you."
  - Lets visitors without a code self-route to the contact section
    instead of being stuck on the locked card.

Commit: a62864c

---
## 2026-07-19 — Rebrand Volunteer CTAs to RTI Advocacy

- Agent: main
- Files changed:
  - `src/components/site/sections/hero.tsx`
  - `src/components/site/site-nav.tsx`
- Summary:
  - Hero CTA button: "Volunteer" → "RTI Advocacy"; link `#volunteer` →
    `#rti`. Kept the Users icon.
  - Mobile drawer CTA: "Join as Volunteer" → "Join RTI Advocacy"; link
    `#volunteer` → `#rti`.
  - Both buttons now route visitors to the RTI Advocacy section instead
    of the Volunteer form.
  - The Volunteer section itself (with its signup form at `#volunteer`)
    remains on the page unchanged. The "Become an RTI Champion" button
    inside the RTI Advocacy section still links to `#volunteer` (the
    form), so visitors who want to sign up can still do so.

Commit: 02a8092

---
## 2026-07-19 — Remove Donate CTAs from hero, header, and mobile drawer

- Agent: main
- Files changed:
  - `src/components/site/sections/hero.tsx`
  - `src/components/site/site-nav.tsx`
- Summary:
  - Removed the red "Donate" button from the desktop header right cluster
    (was visible on md+ screens).
  - Removed the "Donate Now" CTA from the bottom of the mobile drawer.
    The "Join RTI Advocacy" outline CTA remains in the drawer footer.
  - Removed the "Donate" outline CTA from the hero section's button row
    (now: RTI Advocacy, Read Our Manifesto). Dropped the unused `Heart`
    icon import from hero.tsx.
  - The Donate section itself (`#donate`) remains on the page — only the
    CTA buttons were removed. Visitors can still reach it via the
    "Read latest report" link in the footer or via direct URL.

Commit: c25fa9e

---
## 2026-07-19 — Remove Download CV button from About section

- Agent: main
- Files changed:
  - `src/components/site/sections/about.tsx`
- Summary:
  - Removed the navy "Download CV" button that was anchored at the
    bottom edge of the candidate portrait card in the About section.
    It previously linked to `#media` (the Media Center).
  - Dropped the now-unused `Download` icon import and the unused
    `Button` import from about.tsx.
  - No other Download-CV references exist on the site.

Commit: b4629b3
