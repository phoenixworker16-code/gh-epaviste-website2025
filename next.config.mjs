/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ─── Compression Gzip ───────────────────────────────────────────
  compress: true,

  // ─── Optimisation Images ─────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
  },

  // ─── Headers Cache Statique ──────────────────────────────────────
  async headers() {
    return [
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*\\.(?:js|css|woff2|woff|ttf))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
}

export default nextConfig