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
| `images/giving/` | Charity project photos (Bali Children’s Project, food and disaster relief) |
| `images/guide/` | “YTT Unfiltered” guide cover |
| `logos/`, `badges/`, `icons/` | Wordmark, lotus mark, Amrita logo, Yoga Alliance / award badges, favicon |
| `video/` | Home hero loops (rendered from the HD aerial photos) |
| `docs/` | PDFs: YTT Unfiltered guide, Amrita menu, retreat welcome guide |

## Images

Images were exported from the largest original available on the source site (WordPress `-WxH` size suffixes stripped), saved as WebP at quality 88 and capped at 2560px wide. Originals narrower than 900px were enlarged 2× with Lanczos resampling — the source site does not publish larger versions of those files (teacher portraits, food photos, a few 540px practice photos), so they are only used where they display at or below their native size.

## Home hero

A crisp drone-style loop rendered from the HD aerial photos supplied for this project. The source site's own hero video (`Yoga+Retreats+Bali.mp4`) was tried, but it is 720p with a misty watercolor effect, so it was replaced for quality.

| File | Size | Used on |
| --- | --- | --- |
| `video/villas-aerial-1080p.mp4` | 1920×1080, 30 fps, 15 s, ~4.4 MB | Screens wider than 600px |
| `video/villas-aerial-portrait.mp4` | 1080×1920, 30 fps, 15 s, ~4.1 MB | Phones (≤600px, via `<source media>`) |
| `images/hero/villas-aerial.webp` | 2096×1184 | First paint, screens > 600px |
| `images/hero/villas-aerial-portrait.webp` | 1152×2032 | First paint on phones |

- **Playback:** `autoplay muted loop playsinline preload="metadata"`, written as raw markup so `muted` is in the first HTML (iOS autoplay needs it). Sources are attached after the page has loaded (the HD still is the first paint) and the video fades in once playing. Never loads with `prefers-reduced-motion` or data-saver; paused when off-screen.
- **Encoding:** x264 `veryslow`, CRF 26, `+faststart` (SSIM 0.989 vs. the previous encode at about half the size).
- **Overlay:** a clean vertical shade only (no haze or glow), deepest under the header and the trust cards.
- **Reproducible:** `scripts/render-hero.py desktop|portrait out.mp4` (Python, Pillow, imageio-ffmpeg; photos in `scripts/source-photos/`).

## Other assets added for the correction pass

| Folder / file | Source |
| --- | --- |
| `src/app/fonts/Bagnard.otf` | Bagnard by Sébastien Sanfilippo (github.com/sebsan/Bagnard), SIL Open Font License — `OFL.txt` alongside |
| `images/lotus-watermark.webp` | Built from the gold outline of `logos/lotus-mark.png`, repeated radially, at low opacity |
| `logos/featured/` | “We’re Featured On” logos from the source homepage (270×94) |
| `images/giving/*.webp` (backpacks, school, food-aid, disaster-relief, donations) | Photos from the source article “Spreading the Light” (500×500) |
| `images/blog/` | Featured images of the 32 BLISS! Magazine posts (blog page and homepage carousel) |
| `images/blog/articles/<slug>/` + `src/data/articles/*.json` | The 32 BLISS! Magazine articles and the YTT price review, converted to local pages (`/blog/<slug>`); links to the source site are mapped to this site's pages |
| `images/vidya/` | Course, album and eBook covers from the Vidya online-learning page and courses site |
| `images/giving/` posters (spreading-the-light, empower, bali-projects, india-projects) | Charitable Fund posters from the source /giving page, shown full size on /charitable-activities |
| `images/video/experience-oneness.webp` | The source's thumbnail for the “Experience Oneness” YouTube video (510×287) |

## PDFs

| File | Source |
| --- | --- |
| `docs/ytt-unfiltered.pdf` | YTT-Unfiltered-Blooming-Lotus-Yoga-2.pdf |
| `docs/amrita-menu.pdf` | Amrita-Menu.pdf |
| `docs/retreat-welcome-guide.pdf` | Welcome-To-The-Blooming-Lotus-Yoga-Retreats-2022-2.pdf |
