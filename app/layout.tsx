import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import SiteFooter from "@/components/site-footer"
import MobileNav from "@/components/mobile-nav"
import AnalyticsLoader from "@/components/analytics-loader"
import WhatsAppFloat from "@/components/whatsapp-float"
import ScrollToTop from "@/components/scroll-to-top"
import { headers } from "next/headers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  // ─── Titre & Description ───────────────────────────────
  title: {
    default: "GH Épaviste | Enlèvement d'Épave Gratuit en Île-de-France",
    template: "%s - GH Épaviste",
  },
  description:
    "Épaviste professionnel en Île-de-France. Enlèvement gratuit de votre épave avec intervention rapide 24h/24 et 7j/7 dans les 75, 77, 78, 91, 92, 93, 94 et 95. Contactez-nous maintenant au 07 53 12 07 93.",
  keywords:
    "épaviste, enlèvement épave, gratuit, Île-de-France, épaviste Paris, épaviste 75, enlèvement épave 77, épaviste gratuit, enlèvement d'épave gratuit, épaviste Île-de-France, enlèvement véhicule hors d'usage, épaviste rapide, épaviste intervention 24h, épaviste 93, épaviste 94, épaviste 92, épaviste 91, épaviste 95, épaviste 78",

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
    title: "GH Épaviste | Enlèvement d'Épave Gratuit en Île-de-France",
    description:
      "Service professionnel d'enlèvement d'épaves en Île-de-France. Enlèvement gratuit de votre épave avec intervention rapide 24h/24 et 7j/7. Appelez le 07 53 12 07 93.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GH Épaviste - Enlèvement d'épave gratuit en Île-de-France",
      },
    ],
  },

  // ─── Twitter Card (X / Twitter) ───────────────────────
  twitter: {
    card: "summary_large_image",
    title: "GH Épaviste | Enlèvement d'Épave Gratuit Île-de-France",
    description:
      "Votre épave enlevée gratuitement en Île-de-France. Intervention rapide 24h/24. Service professionnel.",
    images: ["/og-image.jpg"],
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
  const headersList = headers()
  const nonce = headersList.get('x-nonce') || undefined

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://gh-epaviste.fr/#organization",
      "name": "GH Épaviste",
      "description": "Service professionnel d'enlèvement et de remorquage de véhicules hors d'usage en Île-de-France. Chaque véhicule est confié à un centre de traitement agréé partenaire conformément à la réglementation VHU.",
      "url": "https://gh-epaviste.fr",
      "telephone": "+33753120793",
      "priceRange": "0€",
      "image": "https://gh-epaviste.fr/images/gh-logo.png",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gh-epaviste.fr/images/gh-logo.png",
        "width": 292,
        "height": 422
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Villeneuve-Saint-Georges",
        "postalCode": "94190",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Paris", "identifier": "75" },
        { "@type": "AdministrativeArea", "name": "Seine-et-Marne", "identifier": "77" },
        { "@type": "AdministrativeArea", "name": "Yvelines", "identifier": "78" },
        { "@type": "AdministrativeArea", "name": "Essonne", "identifier": "91" },
        { "@type": "AdministrativeArea", "name": "Hauts-de-Seine", "identifier": "92" },
        { "@type": "AdministrativeArea", "name": "Seine-Saint-Denis", "identifier": "93" },
        { "@type": "AdministrativeArea", "name": "Val-de-Marne", "identifier": "94" },
        { "@type": "AdministrativeArea", "name": "Val-d'Oise", "identifier": "95" }
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
        "availableLanguage": "French",
        "areaServed": ["75","77","78","91","92","93","94","95"]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services d'enlèvement de véhicules hors d'usage",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enlèvement épave gratuit" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remorquage voiture accidentée" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enlèvement véhicule électrique" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enlèvement sans carte grise" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Démarches administratives VHU" } }
        ]
      },
      "sameAs": ["https://gh-epaviste.fr"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'enlèvement d'épave est-il vraiment gratuit ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, le service d'enlèvement est 100% gratuit. GH Épaviste prend en charge le déplacement et le remorquage de votre véhicule hors d'usage sans aucun frais." }
        },
        {
          "@type": "Question",
          "name": "Quels documents faut-il pour l'enlèvement d'épave ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Vous devez préparer la carte grise originale, une pièce d'identité valide et un certificat de non-gage de moins de 15 jours. Nous gérons la co-signature du certificat de cession." }
        },
        {
          "@type": "Question",
          "name": "Qui émet le certificat de destruction du véhicule ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Le certificat de destruction est émis par le centre de traitement agréé VHU partenaire auquel votre véhicule est confié. GH Épaviste vous le transmet dès réception." }
        },
        {
          "@type": "Question",
          "name": "Dans quels départements intervenez-vous ?",
          "acceptedAnswer": { "@type": "Answer", "text": "GH Épaviste intervient dans les 8 départements d'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95)." }
        }
      ]
    }
  ]

  return (
    <html lang="fr" className={inter.variable}>
      <head>
      </head>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
        />
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/images/gh-logo-new.png"
                alt="GH Épaviste"
                width={292}
                height={422}
                style={{ height: '64px', width: '44px' }}
                className="flex-shrink-0"
                priority
                fetchPriority="high"
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
              <Link href="/blog" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                BLOG
              </Link>
              <Link href="/a-propos" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                À PROPOS
              </Link>
              <Link href="/contact" className="text-black hover:text-yellow-500 font-medium transition-colors p-2 min-h-[44px] flex items-center">
                CONTACT
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="tel:+33753120793" aria-label="Appeler l'épaviste au 07 53 12 07 93" className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 min-h-[44px] rounded items-center transition">
                <Phone className="w-4 h-4 mr-2" />
                APPELER MAINTENANT
              </Link>
              <MobileNav />
            </div>
          </div>
        </header>
        {children}
        <WhatsAppFloat />
        <ScrollToTop />
        <SiteFooter />
        <AnalyticsLoader gaId="G-0SF8DFE0VW" />
      </body>
    </html>
  )
}