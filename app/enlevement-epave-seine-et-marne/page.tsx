import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Épaviste Seine-et-Marne 77 | Enlèvement d'Épave Gratuit",
  description:
    "Épaviste en Seine-et-Marne (77) : enlèvement gratuit de votre épave 24h/24. Melun, Meaux, Chelles, Pontault-Combault et tout le 77. Appelez le 07 53 12 07 93.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-seine-et-marne" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Épaviste Seine-et-Marne 77 | GH Épaviste",
    description: "Enlèvement d'épave gratuit en Seine-et-Marne (77). Intervention rapide 24h/24.",
    url: "https://gh-epaviste.fr/enlevement-epave-seine-et-marne",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Épaviste Seine-et-Marne 77" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Épaviste Seine-et-Marne 77 | Enlèvement d'Épave Gratuit",
    description:
      "Épaviste en Seine-et-Marne (77) : enlèvement gratuit de votre épave 24h/24. Melun, Meaux, Chelles, Pontault-Combault et tout le 77. Appelez le 07 53 12 07 93.",
    images: ["/og-image.jpg"],
  },
}

const cities = ["Melun", "Meaux", "Chelles", "Pontault-Combault", "Champs-sur-Marne", "Savigny-le-Temple", "Montereau", "Provins", "Fontainebleau", "Lagny-sur-Marne"]

export default function EpavisteSeineMarne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit en Seine-et-Marne",
    description: "Service professionnel d'enlèvement d'épaves en Seine-et-Marne (77). Intervention rapide 24h/24.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Seine-et-Marne — Département 77
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Épaviste Seine-et-Marne (77)</span>
            <br />Enlèvement d&apos;Épave Gratuit
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            GH Épaviste intervient dans tout le département de Seine-et-Marne pour enlever votre épave gratuitement.
            Zones rurales et urbaines, nous nous déplaçons partout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">
                Demander un Enlèvement Gratuit
              </Button>
            </Link>
            <a href="tel:+33753120793">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8">
                <Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Notre service en <span className="text-yellow-500">Seine-et-Marne</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Grand territoire couvert", desc: "Zones rurales, zones pavillonnaires ou centres-villes : nous intervenons partout en 77." },
              { title: "Enlèvement 100% gratuit", desc: "Aucun frais de déplacement, même pour les zones éloignées." },
              { title: "Disponible 7j/7", desc: "Week-ends et jours fériés inclus. Intervention sous 24h garantie." },
            ].map((item, i) => (
              <Card key={i} className="text-center border-2 border-yellow-100 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Principales villes couvertes en Seine-et-Marne</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <span key={city} className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full font-medium text-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Seine-et-Marne (77)</h2>
          <div className="space-y-6">
            {[
              { q: "Intervenez-vous dans les zones rurales du 77 ?", a: "Oui, nous couvrons tout le département de Seine-et-Marne, y compris les zones rurales éloignées, sans frais supplémentaires." },
              { q: "L'enlèvement est-il vraiment gratuit dans le 77 ?", a: "Absolument. Notre service d'enlèvement est 100% gratuit partout en Seine-et-Marne, sous réserve que le véhicule soit complet et accessible." },
              { q: "Quels documents faut-il préparer ?", a: "Vous aurez besoin de la carte grise barrée et signée, d'un certificat de non-gage (moins de 15 jours) et d'une pièce d'identité." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Épave en Seine-et-Marne ? On s&apos;en occupe !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit, intervention rapide dans tout le 77</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Formulaire en Ligne</Button>
            </Link>
            <a href="tel:+33753120793">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8">
                <Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
