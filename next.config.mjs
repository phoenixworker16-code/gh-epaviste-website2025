/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ─── Sécurité ────────────────────────────────────────────────────
  poweredByHeader: false, // Cache "X-Powered-By: Next.js"

  // ─── Compression ─────────────────────────────────────────────────
  compress: true,

  // ─── Optimisation Images (AVIF + WebP) ───────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
  },

  // ─── Optimisations expérimentales ───────────────────────────
  experimental: {
    // Optimise et inline le CSS critique → réduit le CSS bloquant le rendu
    optimizeCss: true,
    // Tree-shaking des imports lourds → réduit le JS inutilisé
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
      "@radix-ui/react-tooltip",
      "recharts",
      "date-fns",
    ],
  },

  // ─── Headers Cache + Sécurité ────────────────────────────────────
  async headers() {
    return [
      // Sécurité globale sur toutes les routes
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // ─── COOP : isole le contexte de navigation, protège contre Spectre ──
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // "same-origin" bloque les popups OAuth/WhatsApp
          },
          // ─── CORP : cross-origin car le site charge Google Fonts, GA, images CDN ──
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
          // ─── COEP : active l'isolation cross-origin (SharedArrayBuffer, etc.) ──
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none", // "require-corp" casserait Google Fonts / Analytics
          },
        ],
      },
      // Cache long terme pour assets statiques
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
        source: "/(.*\\.(?:js|css|woff2|woff|ttf|otf))",
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