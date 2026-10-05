/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Retina-friendly breakpoints up to 2560px wide.
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [96, 160, 256, 384, 512],
    // Every <Image> is served at quality 85 (Next picks the closest allowed value).
    qualities: [85],
    minimumCacheTTL: 2678400,
  },
  poweredByHeader: false,
};

export default nextConfig;
