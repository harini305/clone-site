# Assets

All media lives in `public/assets/` and is served as-is from `/assets/...`. Vercel serves these files byte-for-byte; images rendered through `next/image` are additionally resized and re-encoded (AVIF/WebP) per screen size.

Source: [blooming-lotus-yoga.com](https://www.blooming-lotus-yoga.com/) (WordPress uploads), plus the home hero aerials supplied for this project. Used for a training project.

## Folders

| Folder | Contents |
| --- | --- |
| `images/hero/` | Full-bleed page header images, including the home hero aerials |
| `images/venue/` | Villas, pools, river, temple, shala, spa, dining |
| `images/rooms/` | Room types, bedrooms, bathrooms |
| `images/practice/` | Classes and students |
| `images/meditation/` | Meditation imagery |
| `images/community/` | Guests and staff |
| `images/food/` | Amrita restaurant dishes |
| `images/teachers/` | Mandy, Via, Lily and the lineage masters |
| `images/giving/` | Charitable fund posters |
| `images/guide/` | “YTT Unfiltered” guide cover |
| `logos/`, `badges/`, `icons/` | Wordmark, lotus mark, Amrita logo, Yoga Alliance / award badges, favicon |
| `video/` | Home hero loops (rendered from the HD aerial photos) |
| `docs/` | PDFs: YTT Unfiltered guide, Amrita menu, retreat welcome guide |

## Images

Images were exported from the largest original available on the source site (WordPress `-WxH` size suffixes stripped), saved as WebP at quality 88 and capped at 2560px wide. Originals narrower than 900px were enlarged 2× with Lanczos resampling — the source site does not publish larger versions of those files (teacher portraits, food photos, a few 540px practice photos), so they are only used where they display at or below their native size.

## Home hero

The home hero is a slow, drone-style video loop rendered from HD aerial photographs supplied for this project (the original drone footage on the source site was 1080p and visibly soft). The HD photo sits underneath as the poster / first paint, and the video fades in over it.

| File | Size | Used on |
| --- | --- | --- |
| `video/villas-aerial-1080p.mp4` | 1920×1080, 30 fps, 15 s, ~8 MB | Screens wider than 600px |
| `video/villas-aerial-portrait.mp4` | 1080×1920, 30 fps, 15 s, ~6 MB | Phones (≤600px) |
| `images/hero/villas-aerial.webp` | 2096×1184 | Poster / first paint, screens > 600px |
| `images/hero/villas-aerial-portrait.webp` | 1152×2032 | Poster / first paint on phones |
| `images/hero/aerial-pool.webp` | 2080×1136 | 7-Day Bliss hero and the location section |

How the video was made:

- **Desktop loop:** opens on the whole villas photo, holds briefly, then a drone-style camera glides in over the upper villas, travels right along the terraces, and pulls back out to the full photo, so the loop is seamless.
- **Phone loop:** the same move on the tall villas photo, travelling down the terraces toward the pool.
- **Why one photo per screen shape:** putting the tall photo into the wide frame (or the reverse) would mean enlarging it about 1.6×, so each screen shape uses the photo that matches it.
- **Resampling:** each frame is cut with sub-pixel Lanczos resampling along a smooth keyframed camera path.
- **How far it zooms:** the tightest framing is about 1.65× the photo's native resolution (desktop), so the travel reads clearly while staying clean. The opening and closing frames are the full photo.
- **Encoding:** x264, CRF 21 (desktop) and CRF 23 (phone).
- **Photos:** saved as WebP (quality 92) at native size, with no sharpening. Phones get the portrait photo through `<picture>` art direction (`next/image` `getImageProps`), served at quality 95.
- **Reproducible:** the loops can be regenerated with `scripts/render-hero.py` (needs Python, Pillow and imageio-ffmpeg; place the photos in `scripts/source-photos/` as `villas-wide.jpg` and `villas-tall.jpg`).
- **Loading:** the video never loads with `prefers-reduced-motion` or data-saver enabled, and pauses when the hero is off-screen.

## PDFs

| File | Source |
| --- | --- |
| `docs/ytt-unfiltered.pdf` | YTT-Unfiltered-Blooming-Lotus-Yoga-2.pdf |
| `docs/amrita-menu.pdf` | Amrita-Menu.pdf |
| `docs/retreat-welcome-guide.pdf` | Welcome-To-The-Blooming-Lotus-Yoga-Retreats-2022-2.pdf |
