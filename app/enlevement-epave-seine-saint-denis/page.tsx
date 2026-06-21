import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Épaviste 93 - Enlèvement gratuit de voitures et utilitaires (Seine-Saint-Denis)",
  description:
    "Votre véhicule a subi un sinistre, est gravement accidenté ou ne passe plus le contrôle technique ? Notre centre d'appel planifie votre enlèvement de VHU gratuit partout en Seine-Saint-Denis.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-seine-saint-denis" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Épaviste 93 - Enlèvement gratuit de voitures et utilitaires (Seine-Saint-Denis)",
    description: "Votre véhicule a subi un sinistre, est gravement accidenté ou ne passe plus le contrôle technique ? Notre centre d'appel planifie votre enlèvement de VHU gratuit partout en Seine-Saint-Denis.",
    url: "https://gh-epaviste.fr/enlevement-epave-seine-saint-denis",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Épaviste 93 - Enlèvement gratuit de voitures et utilitaires (Seine-Saint-Denis)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Épaviste 93 - Enlèvement gratuit de voitures et utilitaires (Seine-Saint-Denis)",
    description:
      "Votre véhicule a subi un sinistre, est gravement accidenté ou ne passe plus le contrôle technique ? Notre centre d'appel planifie votre enlèvement de VHU gratuit partout en Seine-Saint-Denis.",
    images: ["/og-image.jpg"],
  },
}

const cities = ["Saint-Denis", "Montreuil", "Aubervilliers", "Bobigny", "Aulnay-sous-Bois", "Pantin", "Noisy-le-Grand", "Saint-Ouen", "Épinay-sur-Seine", "Bagnolet"]

export default function EpavisteSeineSaintDenis() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit en Seine-Saint-Denis",
    description: "Service professionnel d'enlèvement d'épaves en Seine-Saint-Denis (93). Intervention rapide 24h/24.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Seine-Saint-Denis (93)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Seine-Saint-Denis — Département 93
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-500">Épaviste 93 - Enlèvement gratuit de voitures</span><br />
            et utilitaires (Seine-Saint-Denis)
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Votre véhicule a subi un sinistre, est gravement accidenté ou ne passe plus le contrôle technique ? Notre centre d&apos;appel planifie votre enlèvement de VHU gratuit partout en Seine-Saint-Denis. Nous connaissons parfaitement le secteur du 93 et assurons des rotations continues autour de Saint-Denis, Montreuil, Aulnay-sous-Bois, Aubervilliers et Drancy. Appelez-nous à toute heure du jour ou de la nuit : nous remorquons votre épave et vous aidons à clôturer votre dossier d&apos;assurance instantanément.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">Demander un Enlèvement Gratuit</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre service en <span className="text-yellow-500">Seine-Saint-Denis</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Toutes communes couvertes", desc: "Nous intervenons dans toutes les communes du 93, zones urbaines et périphériques." },
              { title: "Zéro frais", desc: "Service entièrement gratuit, sans frais cachés ni coût de déplacement." },
              { title: "Réactivité maximale", desc: "Intervention sous 24h, parfois le jour même en cas d'urgence." },
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
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Principales villes couvertes en Seine-Saint-Denis</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <span key={city} className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full font-medium text-sm">{city}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Seine-Saint-Denis (93)</h2>
          <div className="space-y-6">
            {[
              { q: "Enlevez-vous les épaves abandonnées sur la voie publique dans le 93 ?", a: "Nous enlevons les épaves se trouvant sur des propriétés privées accessibles. Pour les épaves sur voie publique, contactez la mairie ou la police municipale." },
              { q: "Intervenez-vous dans les cités et quartiers difficiles d'accès du 93 ?", a: "Oui, notre équipe est habituée aux interventions dans les zones urbaines denses de Seine-Saint-Denis. Nous nous adaptons à chaque situation." },
              { q: "Le service est-il vraiment gratuit dans tout le 93 ?", a: "Absolument. L'enlèvement est 100% gratuit dans toute la Seine-Saint-Denis, sous réserve que le véhicule soit accessible et complet." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Épave dans le 93 ? Nous intervenons !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit dans toute la Seine-Saint-Denis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
