import { Metadata } from "next"
import VehiculesContent from "@/components/vehicules-content"

export const metadata: Metadata = {
  title: "Rachat de Véhicules d'Occasion & en Panne | GH Épaviste",
  description: "Vous vendez votre auto ? GH Épaviste propose l'estimation et le rachat immédiat de votre véhicule d'occasion, en panne ou accidenté en Île-de-France.",
  alternates: { canonical: "https://gh-epaviste.fr/vehicules" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rachat de Véhicules d'Occasion & en Panne | GH Épaviste",
    description: "Estimation et rachat immédiat de votre véhicule d'occasion ou en panne en Île-de-France. Démarches simplifiées.",
    url: "https://gh-epaviste.fr/vehicules",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rachat de véhicules d'occasion GH Épaviste" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachat de Véhicules d'Occasion & en Panne | GH Épaviste",
    description: "Estimation et rachat immédiat de votre véhicule d'occasion ou en panne en Île-de-France. Démarches simplifiées.",
    images: ["/og-image.jpg"],
  },
}

export default function VehiculesPage() {
  return <VehiculesContent />
}
