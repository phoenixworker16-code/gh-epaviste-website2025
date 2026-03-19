import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import SiteFooter from "@/components/site-footer"
import MobileNav from "@/components/mobile-nav"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  // ─── Titre & Description ───────────────────────────────
  title: {
    default: "GH Épaviste Agréé | Enlèvement d'Épave Gratuit en Île-de-France",
    template: "%s | GH Épaviste Agréé Île-de-France",
  },
  description:
    "Épaviste agréé en Île-de-France. Enlèvement gratuit de votre épave avec intervention rapide 24h/24 et 7j/7 dans les 75, 77, 78, 91, 92, 93, 94 et 95. Contactez-nous maintenant au 07 53 12 07 93.",
  keywords:
    "épaviste, enlèvement épave, gratuit, Île-de-France, épaviste agréé, épaviste Paris, épaviste 75, enlèvement épave 77, épaviste gratuit, enlèvement d'épave gratuit, épaviste Île-de-France, enlèvement véhicule hors d'usage, épaviste rapide, épaviste intervention 24h, épaviste 93, épaviste 94, épaviste 92, épaviste 91, épaviste 95, épaviste 78",

  // ─── URL Canonique ────────────────────────────────────
  metadataBase: new URL("https://gh-epaviste.fr"),
  alternates: {
    canonical: "/",
  },

  // ─── Robots (Indexation) ───────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Open Graph (Facebook, WhatsApp, LinkedIn) ─────────
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gh-epaviste.fr",
    siteName: "GH Épaviste",
    title: "GH Épaviste Agréé | Enlèvement d'Épave Gratuit en Île-de-France",
    description:
      "Épaviste agréé en Île-de-France. Enlèvement gratuit de votre épave avec intervention rapide 24h/24 et 7j/7. Appelez le 07 53 12 07 93.",
    images: [
      {
        url: "/images/epaviste-enlevement-epave-ile-de-france.jpg",
        width: 1200,
        height: 630,
        alt: "GH Épaviste - Camion d'enlèvement d'épave en Île-de-France",
      },
    ],
  },

  // ─── Twitter Card (X / Twitter) ───────────────────────
  twitter: {
    card: "summary_large_image",
    title: "GH Épaviste | Enlèvement d'Épave Gratuit Île-de-France",
    description:
      "Votre épave enlevée gratuitement en Île-de-France. Intervention rapide 24h/24. Service professionnel et certifié.",
    images: ["/images/epaviste-enlevement-epave-ile-de-france.jpg"],
  },

  // ─── Icônes & Thème ──────────────────────────────────
  icons: {
    icon: "/images/gh-logo.png",
    apple: "/images/gh-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#f6ba06",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gh-epaviste.fr/#business",
    "name": "GH Épaviste",
    "description": "Épaviste agréé en Île-de-France. Enlèvement gratuit de votre épave avec intervention rapide 24h/24 et 7j/7.",
    "url": "https://gh-epaviste.fr",
    "telephone": "+33753120793",
    "priceRange": "Gratuit",
    "image": "https://gh-epaviste.fr/images/gh-logo.png",
    "logo": "https://gh-epaviste.fr/images/gh-logo.png",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Paris (75)" },
      { "@type": "AdministrativeArea", "name": "Seine-et-Marne (77)" },
      { "@type": "AdministrativeArea", "name": "Yvelines (78)" },
      { "@type": "AdministrativeArea", "name": "Essonne (91)" },
      { "@type": "AdministrativeArea", "name": "Hauts-de-Seine (92)" },
      { "@type": "AdministrativeArea", "name": "Seine-Saint-Denis (93)" },
      { "@type": "AdministrativeArea", "name": "Val-de-Marne (94)" },
      { "@type": "AdministrativeArea", "name": "Val-d'Oise (95)" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33753120793",
      "contactType": "customer service",
      "availableLanguage": "French"
    }
  }

  return (
    <html lang="fr" className={inter.variable}>
      <head>
      </head>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/gh-logo-new.png"
                alt="GH Épaviste"
                width={160}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                ACCUEIL
              </Link>
              <Link href="/services" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                SERVICES
              </Link>
              <Link href="/vehicules" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                NOS VÉHICULES
              </Link>
              <Link href="/formulaire" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                FORMULAIRE D'ENLÈVEMENT
              </Link>
              <Link href="/contact" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                CONTACT
              </Link>
              <Link href="/services/guide" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                GUIDE
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="tel:+33753120793" className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 min-h-[44px] rounded items-center transition">
                <Phone className="w-4 h-4 mr-2" />
                APPELER MAINTENANT
              </Link>
              <MobileNav />
            </div>
          </div>
        </header>
        {children}
        <SiteFooter />
        <GoogleAnalytics gaId="G-0SF8DFE0VW" />
      </body>
    </html>
  )
}