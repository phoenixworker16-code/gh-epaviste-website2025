import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "GH Épaviste - Enlèvement Gratuit d'Épaves en Île-de-France",
  description:
    "Service d'enlèvement gratuit et rapide d'épaves en Île-de-France. Intervention 24/7.",
  keywords: "épaviste, enlèvement épave, gratuit, Île-de-France",
  icons: {
    icon: "/images/gh-logo.png",
    shortcut: "/images/gh-logo.png",
    apple: "/images/gh-logo.png",
    other: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "114x114", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "120x120", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "144x144", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/images/gh-logo.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/images/gh-logo.png" },
    ],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gh-epaviste.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gh-epaviste.fr",
    title: "GH Épaviste - Enlèvement Gratuit d'Épaves",
    description: "Service d'enlèvement gratuit et rapide d'épaves en Île-de-France",
    siteName: "GH Épaviste",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        {/* Header/menu global */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/gh-logo-new.png"
                alt="GH Épaviste - Enlèvement d'épave rapide et gratuit en Île-de-France"
                width={160}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-yellow-500 font-medium transition-colors">
                ACCUEIL
              </Link>
              <Link href="/services" className="text-black hover:text-yellow-500 font-medium transition-colors">
                SERVICES
              </Link>
              <Link href="/vehicules" className="text-black hover:text-yellow-500 font-medium transition-colors">
                NOS VÉHICULES
              </Link>
              <Link href="/formulaire" className="text-black hover:text-yellow-500 font-medium transition-colors">
                FORMULAIRE D'ENLÈVEMENT
              </Link>
              <Link href="/contact" className="text-black hover:text-yellow-500 font-medium transition-colors">
                CONTACT
              </Link>
              <Link href="/services/guide" className="text-black hover:text-yellow-500 font-medium transition-colors">
                GUIDE
              </Link>
            </nav>
            <Link href="tel:+33753120793" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded flex items-center transition">
              <Phone className="w-4 h-4 mr-2" />
              APPELER MAINTENANT
            </Link>
          </div>
        </header>
        {/* Contenu de la page */}
        {children}
      </body>
    </html>
  )
}