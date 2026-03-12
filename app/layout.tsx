import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Épaviste Agréé Île-de-France | Enlèvement d'Épave Gratuit 24h/24",
  description:
    "Épaviste agréé en Île-de-France. Enlèvement d'épave gratuit avec intervention rapide 24h/24 et 7j/7. Service professionnel et déplacement dans toute la région.",
  keywords: "épaviste, enlèvement épave, gratuit, Île-de-France, épaviste agréé, épaviste Paris, épaviste 75, enlèvement épave 77, épaviste gratuit, enlèvement d'épave gratuit, épaviste Île-de-France, enlèvement véhicule hors d'usage, épaviste rapide, épaviste intervention 24h, épaviste 93, épaviste 94, épaviste 92, épaviste 91, épaviste 95, épaviste 78",
  icons: {
    icon: "/images/gh-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
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
        {children}
      </body>
    </html>
  )
}