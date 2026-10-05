import { routes, siteUrl } from "@/data/site";

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
