import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CitiesList } from "@/components/cities-list"
export const metadata: Metadata = {
  title: "Enlèvement d'épave gratuit dans les Yvelines (78) sous 24h",
  description:
    "Spécialiste de la récupération de véhicules hors d'usage, GH Épaviste se déplace gratuitement dans tout le département des Yvelines. Qu'il s'agisse d'un utilitaire léger, d'une moto ou d'une berline en panne, nous venons récupérer votre encombrant.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-yvelines" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enlèvement d'épave gratuit dans les Yvelines (78) sous 24h",
    description: "Spécialiste de la récupération de véhicules hors d'usage, GH Épaviste se déplace gratuitement dans tout le département des Yvelines.",
    url: "https://gh-epaviste.fr/enlevement-epave-yvelines",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enlèvement d'épave gratuit dans les Yvelines (78)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlèvement d'épave gratuit dans les Yvelines (78) sous 24h",
    description:
      "Spécialiste de la récupération de véhicules hors d'usage, GH Épaviste se déplace gratuitement dans tout le département des Yvelines.",
    images: ["/og-image.jpg"],
  },
}

const cities = ["Versailles", "Saint-Germain-en-Laye", "Mantes-la-Jolie", "Poissy", "Rambouillet", "Sartrouville", "Houilles", "Plaisir", "Chatou", "Vélizy-Villacoublay"]

export default function EpavisteYvelines() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit dans les Yvelines",
    description: "Service professionnel d'enlèvement d'épaves dans les Yvelines (78). Intervention rapide 24h/24.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Yvelines (78)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Yvelines — Département 78
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-500">Enlèvement d&apos;épave gratuit dans les Yvelines (78)</span><br />
            sous 24h
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Spécialiste de la récupération de véhicules hors d&apos;usage, GH Épaviste se déplace gratuitement dans tout le département des Yvelines. Qu&apos;il s&apos;agisse d&apos;un utilitaire léger, d&apos;une moto ou d&apos;une berline en panne, nous venons récupérer votre encombrant directement chez vous ou sur votre lieu de travail. Nos camions de remorquage desservent efficacement les secteurs de Versailles, Sartrouville, Mantes-la-Jolie, Saint-Germain-en-Laye et Poissy. Repartez l&apos;esprit tranquille avec votre certificat de cession remis en main propre.
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
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre service dans les <span className="text-yellow-500">Yvelines</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tout le département", desc: "Des grandes agglomérations aux communes rurales, nous intervenons partout dans les Yvelines." },
              { title: "Zéro frais", desc: "Enlèvement totalement gratuit, déplacement inclus, quel que soit l'endroit dans le 78." },
              { title: "Réactivité maximale", desc: "Contact sous 2h, intervention planifiée dans les 24h." },
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

      <CitiesList depNumber="78" departementName="Yvelines" />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Yvelines (78)</h2>
          <div className="space-y-6">
            {[
              { q: "Intervenez-vous dans toutes les communes des Yvelines ?", a: "Oui, nous couvrons l'intégralité du département des Yvelines (78), des villes comme Versailles jusqu'aux communes rurales les plus éloignées." },
              { q: "Peut-on faire enlever un véhicule sans carte grise dans le 78 ?", a: "Oui, dans certains cas (vol, perte, destruction du document). Contactez-nous pour connaître la procédure adaptée à votre situation." },
              { q: "Votre intervention est-elle rapide dans les zones pavillonnaires ?", a: "Absolument. Nous sommes habitués aux interventions dans les zones pavillonnaires, avec accès privé ou portail. Nous nous adaptons à chaque configuration." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Épave dans les Yvelines ? Intervention sous 24h !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit dans tout le département 78</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
