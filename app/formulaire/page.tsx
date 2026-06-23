import { Metadata } from "next"
import FormulaireContent from "@/components/formulaire-content"

export const metadata: Metadata = {
  title: "Formulaire d'Enlèvement d'Épave Gratuit | GH Épaviste",
  description: "Demandez l'enlèvement gratuit de votre véhicule hors d'usage en Île-de-France. Remplissez notre formulaire en ligne ou appelez le 07 53 12 07 93.",
  alternates: { canonical: "https://gh-epaviste.fr/formulaire" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Formulaire d'Enlèvement d'Épave Gratuit | GH Épaviste",
    description: "Planifiez l'enlèvement gratuit de votre épave (voiture, moto, utilitaire) sous 24h en Île-de-France. Service rapide et professionnel.",
    url: "https://gh-epaviste.fr/formulaire",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Formulaire d'Enlèvement d'Épave Gratuit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formulaire d'Enlèvement d'Épave Gratuit | GH Épaviste",
    description: "Planifiez l'enlèvement gratuit de votre épave (voiture, moto, utilitaire) sous 24h en Île-de-France. Service rapide et professionnel.",
    images: ["/og-image.jpg"],
  },
}

export default function FormulairePage() {
  return <FormulaireContent />
}