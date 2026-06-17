import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Épaviste Paris 75 | Enlèvement d'Épave Gratuit à Paris",
  description:
    "Épaviste à Paris (75) : enlèvement gratuit de votre épave 24h/24 et 7j/7. Intervention rapide dans tous les arrondissements. Appelez le 07 53 12 07 93.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-paris" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Épaviste Paris 75 | GH Épaviste",
    description: "Enlèvement d'épave gratuit à Paris. Intervention rapide 24h/24.",
    url: "https://gh-epaviste.fr/enlevement-epave-paris",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Épaviste Paris 75" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Épaviste Paris 75 | Enlèvement d'Épave Gratuit à Paris",
    description:
      "Épaviste à Paris (75) : enlèvement gratuit de votre épave 24h/24 et 7j/7. Intervention rapide dans tous les arrondissements. Appelez le 07 53 12 07 93.",
    images: ["/og-image.jpg"],
  },
}

export default function EpavisteParis() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit à Paris",
    description: "Service professionnel d'enlèvement d'épaves à Paris (75). Intervention rapide 24h/24 et 7j/7.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "City", name: "Paris", containedInPlace: { "@type": "State", name: "Île-de-France" } },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Paris — Département 75
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Épaviste Paris (75)</span>
            <br />Enlèvement d&apos;Épave Gratuit
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            GH Épaviste intervient dans tous les arrondissements de Paris pour enlever votre épave gratuitement,
            24h/24 et 7j/7. Rapide, professionnel et sans frais.
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

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Pourquoi choisir GH Épaviste à <span className="text-yellow-500">Paris</span> ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Intervention rapide", desc: "Nous intervenons dans tous les arrondissements parisiens sous 24h." },
              { title: "100% Gratuit", desc: "L'enlèvement de votre épave est entièrement gratuit, sans frais cachés." },
              { title: "Service 24h/24", desc: "Disponible 7 jours sur 7, y compris les jours fériés." },
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

      {/* Zone couverte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Zones couvertes à Paris</h2>
          <p className="text-center text-gray-600 mb-10">
            GH Épaviste intervient dans l&apos;ensemble des arrondissements de Paris pour l&apos;enlèvement de votre épave.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-2xl mx-auto">
            {Array.from({ length: 20 }, (_, i) => `${i + 1}e`).map((arr) => (
              <div key={arr} className="text-center bg-yellow-50 border border-yellow-200 rounded-lg py-3 font-semibold text-yellow-700 text-sm">
                Paris {arr}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Paris</h2>
          <div className="space-y-6">
            {[
              { q: "Intervenez-vous dans tous les arrondissements de Paris ?", a: "Oui, nous couvrons l'intégralité des 20 arrondissements de Paris (75001 à 75020) pour l'enlèvement d'épaves." },
              { q: "Le stationnement à Paris pose-t-il problème pour l'enlèvement ?", a: "Non. Nous disposons du matériel adapté pour intervenir en milieu urbain dense, y compris dans les ruelles ou les parkings souterrains." },
              { q: "Combien de temps pour intervenir à Paris ?", a: "Nous intervenons généralement sous 24h après votre demande, parfois le jour même selon notre planning." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Votre épave à Paris ? Nous l&apos;enlevons gratuitement !</h2>
          <p className="text-black/80 mb-8 text-lg">Contactez-nous dès maintenant — intervention sous 24h</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">
                Formulaire en Ligne
              </Button>
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
