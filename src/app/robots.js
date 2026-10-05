import { siteUrl } from "@/data/site";

// Training project: disallow crawling so this copy is never indexed
// alongside the official Blooming Lotus Yoga website.
export default function robots() {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
