# Blooming Lotus Yoga — Next.js + GSAP

A multi-page, responsive website for **Blooming Lotus Yoga**, a heart-based, holistic yoga school in Ubud, Bali.
Content and imagery come from [blooming-lotus-yoga.com](https://www.blooming-lotus-yoga.com/). The visual direction
(editorial, calm, image-led) is inspired by House of Om.

> **Training project.** This is a design and engineering exercise, not the official Blooming Lotus Yoga website.
> The site is set to `noindex`, and the footer carries a disclaimer.

## Stack

- Next.js 16 (App Router), React 19, JavaScript
- CSS Modules + design tokens (`src/styles/tokens.css`)
- GSAP 3 + ScrollTrigger
- `next/image` (AVIF/WebP) and `next/font` (Bagnard display serif, self-hosted under the SIL OFL, + DM Sans)

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Routes

`/` · `/yoga-teacher-training` · `/yoga-retreats` · `/yoga-retreats/4-day-escape` · `/yoga-retreats/7-day-bliss` ·
`/meditation-retreats` · `/about` · `/retreat-center` · `/reviews` · `/contact` · `/terms` · `/privacy`

## Structure

```text
src/
  app/                 routes, metadata, sitemap.js, robots.js, not-found.jsx
  animations/          GSAP setup + reusable motion (reveals, heading reveals, parallax, hero, header state)
  components/
    layout/            Header, MenuOverlay, Footer, WhatsAppButton, SkipLink, MotionProvider
    ui/                Button, Eyebrow, SectionHeading, Accordion, Tabs, Carousel, GlassCard, Badge
    sections/          shared/ (reusable page sections) + page-specific folders
  data/                all copy: programmes, retreats, YTT, teachers, testimonials, FAQs, venue, contact
  styles/              tokens, globals, typography, utilities
public/assets/         optimised local images, logos, badges and PDFs (see ASSETS.md)
```

## Animation system

Server components declare their motion with data attributes. `MotionProvider` wires these to GSAP and ScrollTrigger on every route:

| Attribute | Effect |
| --- | --- |
| `data-reveal` | 0.9s soft fade-up on scroll (`="fade"` for opacity only) |
| `data-stagger` | staggered reveal of children |
| `data-reveal-image` | clip-path + scale image reveal |
| `data-split` | heading fade-up (whole block, never clipped) |
| `data-parallax` | subtle scrubbed parallax (desktop only) |
| `data-hero` / `data-hero-item` | CSS opacity fade on first paint (no movement, no JS wait) + scroll fade |

Client components handle the rest: the header uses ScrollTrigger to switch from transparent to frosted and to hide on scroll; the menu runs a GSAP timeline with a focus trap and scroll lock; the YTT daily schedule is pinned with ScrollTrigger on desktop only; the in-page nav tracks the active section. The accordion, tabs, gallery lightbox and reviews filter all use GSAP transitions.

Smooth, eased scrolling on every page comes from Lenis (`components/layout/SmoothScroll.jsx`), driven by GSAP's ticker so ScrollTrigger stays in sync; touch devices keep native scrolling, and it pauses while the menu or a lightbox is open. Any content block without its own `data-*` reveal fades up automatically as it scrolls into view.

`gsap.matchMedia()` gates everything. With `prefers-reduced-motion`, smooth scrolling, transforms, parallax and pinning are switched off and only simple opacity fades remain.

## Deployment

The site is deployed on Vercel (framework preset: Next.js, `npm run build`) and needs no environment variables. The site URL used for metadata comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`.
