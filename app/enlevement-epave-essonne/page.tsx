import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Épaviste Gratuit Essonne (91) - Remorquage de véhicules hors d'usage",
  description:
    "Situé à proximité immédiate du 91, GH Épaviste est votre partenaire local privilégié pour l'enlèvement gratuit de voitures cassettes, brûlées ou simplement trop vieilles pour rouler.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-essonne" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Épaviste Gratuit Essonne (91) - Remorquage de véhicules hors d'usage",
    description: "Situé à proximité immédiate du 91, GH Épaviste est votre partenaire local privilégié pour l'enlèvement gratuit de voitures cassettes, brûlées ou simplement trop vieilles pour rouler.",
    url: "https://gh-epaviste.fr/enlevement-epave-essonne",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Épaviste Gratuit Essonne (91)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Épaviste Gratuit Essonne (91) - Remorquage de véhicules hors d'usage",
    description:
      "Situé à proximité immédiate du 91, GH Épaviste est votre partenaire local privilégié pour l'enlèvement gratuit de voitures cassettes, brûlées ou simplement trop vieilles pour rouler.",
    images: ["/og-image.jpg"],
  },
}

const cities = ["Évry-Courcouronnes", "Corbeil-Essonnes", "Massy", "Palaiseau", "Gif-sur-Yvette", "Sainte-Geneviève-des-Bois", "Ris-Orangis", "Longjumeau", "Athis-Mons", "Viry-Châtillon"]

export default function EpavisteEssonne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit en Essonne",
    description: "Service professionnel d'enlèvement d'épaves en Essonne (91). Intervention rapide 24h/24.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Essonne (91)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Essonne — Département 91
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-500">Épaviste Gratuit Essonne (91)</span><br />
            Remorquage de véhicules hors d&apos;usage
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Situé à proximité immédiate du 91, GH Épaviste est votre partenaire local privilégié pour l&apos;enlèvement gratuit de voitures cassettes, brûlées ou simplement trop vieilles pour rouler. Nous couvrons l&apos;intégralité de l&apos;Essonne avec une réactivité record sur les zones d&apos;Évry-Courcouronnes, Corbeil-Essonnes, Massy, Savigny-sur-Orge et Sainte-Geneviève-des-Bois. Disponibles 7j/7 et 24h/24, nous nous adaptons à vos contraintes horaires pour vous offrir un service professionnel, transparent et totalement gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">Demander un Enlèvement Gratuit</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre service en <span className="text-yellow-500">Essonne</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Couverture complète", desc: "Nous intervenons dans toutes les communes de l'Essonne, des grandes villes aux villages." },
              { title: "Service 100% gratuit", desc: "Enlèvement sans frais, déplacement compris, quel que soit votre localisation dans le 91." },
              { title: "Rapide et fiable", desc: "Prise de contact sous 2h, intervention planifiée sous 24h." },
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
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Principales villes couvertes en Essonne</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <span key={city} className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full font-medium text-sm">{city}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Essonne (91)</h2>
          <div className="space-y-6">
            {[
              { q: "Intervenez-vous dans toute l'Essonne ?", a: "Oui, nous couvrons l'intégralité du département de l'Essonne (91), du plateau de Saclay jusqu'aux rives de la Seine." },
              { q: "Quel est le délai d'intervention en Essonne ?", a: "Nous intervenons généralement sous 24h après réception de votre demande. En urgence, contactez-nous directement par téléphone." },
              { q: "Enlevez-vous les épaves dans les copropriétés ?", a: "Oui, nous intervenons dans les parkings de copropriétés, sous réserve d'accès et d'accord du syndic si nécessaire." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Épave en Essonne ? Contactez-nous !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit dans tout le département 91</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
