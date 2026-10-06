/**
 * Warm Vercel's image-optimization cache after a deploy, so visitors never
 * wait for an image to be optimized for the first time (a cold optimized
 * image takes ~1s on Vercel; a cached one ~0.15s).
 *
 * Crawls every page in /sitemap.xml, collects each next/image variant and
 * CSS background, and requests them as AVIF and WebP.
 *
 * usage: node scripts/warm-images.mjs https://your-site.vercel.app [concurrency]
 * For protected preview deployments set VERCEL_PROTECTION_BYPASS=<secret>.
 */
const [base, concurrencyArg = "16"] = process.argv.slice(2);
if (!base) {
  console.error("usage: node scripts/warm-images.mjs <base-url> [concurrency]");
  process.exit(1);
}
const origin = base.replace(/\/$/, "");
const headers = process.env.VERCEL_PROTECTION_BYPASS
  ? { "x-vercel-protection-bypass": process.env.VERCEL_PROTECTION_BYPASS }
  : {};

const decode = (s) => s.replace(/&amp;/g, "&");

const sitemap = await (await fetch(`${origin}/sitemap.xml`, { headers })).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
// Blog articles are linked from /blog rather than listed in the sitemap.
const blog = await (await fetch(`${origin}/blog`, { headers })).text();
for (const m of blog.matchAll(/href="(\/blog\/[^"#]+)"/g)) pages.push(m[1]);

const urls = new Set();
for (const path of new Set(pages)) {
  const html = decode(await (await fetch(origin + path, { headers })).text());
  for (const m of html.matchAll(/\/_next\/image\?url=[^"\s,]+/g)) urls.add(m[0]);
  for (const m of html.matchAll(/url\(["']?(\/assets\/[^)"']+)/g)) urls.add(m[1]);
}

const jobs = [];
for (const u of urls) {
  if (u.startsWith("/_next/image")) {
    jobs.push([u, "image/avif,image/webp,*/*"], [u, "image/webp,*/*"]);
  } else {
    jobs.push([u, "*/*"]);
  }
}

let done = 0;
let hits = 0;
let failed = 0;
const started = Date.now();
async function worker() {
  while (jobs.length) {
    const [u, accept] = jobs.pop();
    try {
      const res = await fetch(origin + u, { headers: { ...headers, accept } });
      await res.arrayBuffer();
      if (!res.ok) failed++;
      if (res.headers.get("x-vercel-cache") === "HIT") hits++;
    } catch {
      failed++;
    }
    done++;
  }
}
await Promise.all(Array.from({ length: Number(concurrencyArg) }, worker));
console.log(
  `pages ${new Set(pages).size} | requests ${done} | already cached ${hits} | failed ${failed} | ${Math.round((Date.now() - started) / 1000)}s`
);
