/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Retina-friendly breakpoints up to 2560px wide.
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [96, 160, 256, 384, 512],
    // Default images are served at 85; full-bleed heroes request 95.
    qualities: [85, 95],
    minimumCacheTTL: 2678400,
  },
  poweredByHeader: false,
};

export default nextConfig;
