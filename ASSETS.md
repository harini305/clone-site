# Assets

All media lives in `public/assets/` and is served as-is from `/assets/...`. Vercel serves these files byte-for-byte; images rendered through `next/image` are additionally resized and re-encoded (AVIF/WebP) per screen size.

Source: [blooming-lotus-yoga.com](https://www.blooming-lotus-yoga.com/) (WordPress uploads and the site's S3 video bucket). Used for a training project.

## Folders

| Folder | Contents |
| --- | --- |
| `images/hero/` | Full-bleed page header images and the hero video posters |
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
| `video/` | Home hero loops |
| `docs/` | PDFs: YTT Unfiltered guide, Amrita menu, retreat welcome guide |

## Images

Images were exported from the largest original available on the source site (WordPress `-WxH` size suffixes stripped), saved as WebP at quality 88 and capped at 2560px wide. Originals narrower than 900px were enlarged 2× with Lanczos resampling — the source site does not publish larger versions of those files (teacher portraits, food photos, a few 540px practice photos), so they are only used where they display at or below their native size.

## Home hero video

| File | Resolution | FPS | Bitrate | Size | Used on |
| --- | --- | --- | --- | --- | --- |
| `video/bali-aerial-1080p.mp4` | 1916×1080 | 60 | ~12 Mbps | ~21 MB | Screens wider than 600px |
| `video/bali-aerial-portrait.mp4` | 608×1080 | 30 | ~5.5 Mbps | ~5.4 MB | Phones (≤600px) |
| `images/hero/aerial-video-poster.webp` | 1916×1080 | – | – | – | Poster / first paint (landscape) |
| `images/hero/aerial-video-poster-portrait.webp` | 608×1080 | – | – | – | Poster on phones |

- **Source:** `Epic Overhead.mp4` from the Blooming Lotus Yoga S3 bucket (`BLY Accommodations/`), 1916×1080, 60 fps, ~12 Mbps H.264. This is the highest-resolution version available; the only other hero-style clip (`Yoga Retreats Bali.mp4`) is 1280×720.
- **Desktop file** is a lossless stream copy of the source (trimmed to 14 s from the keyframe at 0.967 s, audio removed) — no resize and no re-encode, so it carries exactly the source's pixels.
- **Portrait file** is a centre crop of the source at native resolution (no scaling), re-encoded once with x264 (CRF 23, 8 s loop) to keep it light on mobile data.
- **Posters** are the exact first frame of each loop, saved without any sharpening.
- The video is never loaded with `prefers-reduced-motion` or data-saver enabled, and pauses when the hero is off-screen.

**Limit:** the source is 1080 pixels tall. On a 1× desktop screen the hero shows it at or below native size. On high-DPI (retina) displays and phones the browser must upscale it, so it cannot be fully pin-sharp there — that is the source resolution, not the implementation.

## PDFs

| File | Source |
| --- | --- |
| `docs/ytt-unfiltered.pdf` | YTT-Unfiltered-Blooming-Lotus-Yoga-2.pdf |
| `docs/amrita-menu.pdf` | Amrita-Menu.pdf |
| `docs/retreat-welcome-guide.pdf` | Welcome-To-The-Blooming-Lotus-Yoga-Retreats-2022-2.pdf |
