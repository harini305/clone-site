// Vercel exposes the production domain at build time; fall back to localhost.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteName = "Blooming Lotus Yoga";

export const defaultDescription =
  "Heart-based, holistic yoga school & lifelong community in Ubud, Bali. 225-hour Yoga Alliance teacher training, 4 & 7-day yoga retreats and silent meditation retreats.";

/** Build consistent per-page metadata with canonical + Open Graph. */
export function pageMetadata({ title, description = defaultDescription, path = "/", image = "/assets/images/hero/aerial-villas.webp" }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${siteName}` : siteName,
      description,
      url: path,
      siteName,
      images: [{ url: image, width: 1920, height: 1080 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteName}` : siteName,
      description,
      images: [image],
    },
  };
}

export const routes = [
  { path: "/", priority: 1 },
  { path: "/yoga-teacher-training", priority: 0.9 },
  { path: "/yoga-retreats", priority: 0.9 },
  { path: "/yoga-retreats/4-day-escape", priority: 0.8 },
  { path: "/yoga-retreats/7-day-bliss", priority: 0.8 },
  { path: "/meditation-retreats", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/retreat-center", priority: 0.7 },
  { path: "/reviews", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/graduate-students", priority: 0.5 },
  { path: "/continuing-education", priority: 0.5 },
  { path: "/charitable-activities", priority: 0.5 },
  { path: "/blog", priority: 0.5 },
  { path: "/podcast", priority: 0.5 },
  { path: "/terms", priority: 0.2 },
  { path: "/privacy", priority: 0.2 },
];
