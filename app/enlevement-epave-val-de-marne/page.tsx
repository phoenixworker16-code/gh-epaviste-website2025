import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CitiesList } from "@/components/cities-list"
export const metadata: Metadata = {
  title: "Épaviste Pro dans le Val-de-Marne (94) : Intervention ultra-rapide 24/7",
  description:
    "Basés au cœur du Val-de-Marne à Villeneuve-Saint-Georges, nous sommes vos épavistes de proximité. Cette implantation stratégique nous permet d'être sur place en un temps record pour l'enlèvement gratuit de votre épave.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-val-de-marne" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Épaviste Pro dans le Val-de-Marne (94) : Intervention ultra-rapide 24/7",
    description: "Basés au cœur du Val-de-Marne à Villeneuve-Saint-Georges, nous sommes vos épavistes de proximité. Cette implantation stratégique nous permet d'être sur place en un temps record pour l'enlèvement gratuit de votre épave.",
    url: "https://gh-epaviste.fr/enlevement-epave-val-de-marne",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Épaviste Pro dans le Val-de-Marne (94) : Intervention ultra-rapide 24/7" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Épaviste Pro dans le Val-de-Marne (94) : Intervention ultra-rapide 24/7",
    description:
      "Basés au cœur du Val-de-Marne à Villeneuve-Saint-Georges, nous sommes vos épavistes de proximité. Cette implantation stratégique nous permet d'être sur place en un temps record pour l'enlèvement gratuit de votre épave.",
    images: ["/og-image.jpg"],
  },
}

const cities = ["Créteil", "Vincennes", "Vitry-sur-Seine", "Ivry-sur-Seine", "Champigny-sur-Marne", "Saint-Maur-des-Fossés", "Alfortville", "Maisons-Alfort", "Charenton-le-Pont", "Nogent-sur-Marne"]

export default function EpavisteValDeMarne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit dans le Val-de-Marne",
    description: "Service professionnel d'enlèvement d'épaves dans le Val-de-Marne (94). Intervention rapide 24h/24.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Val-de-Marne (94)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Val-de-Marne — Département 94
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-500">Épaviste Pro dans le Val-de-Marne (94) :</span><br />
            Intervention ultra-rapide 24/7
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Basés au cœur du Val-de-Marne à Villeneuve-Saint-Georges, nous sommes vos épavistes de proximité. Cette implantation stratégique nous permet d&apos;être sur place en un temps record pour l&apos;enlèvement gratuit de votre épave à Créteil, Vitry-sur-Seine, Champigny-sur-Marne, Saint-Maur-des-Fossés et Ivry-sur-Seine. En tant qu&apos;acteurs locaux, nous vous garantissons la plus grande réactivité du marché pour libérer vos voies d&apos;accès ou vos parkings, avec un suivi administratif rigoureux et immédiat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">Demander un Enlèvement Gratuit</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre service dans le <span className="text-yellow-500">Val-de-Marne</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tout le 94 couvert", desc: "De Vincennes au bord de Marne, nous intervenons dans toutes les communes du Val-de-Marne." },
              { title: "Gratuit sans exception", desc: "Enlèvement sans frais dans tout le département, déplacement inclus." },
              { title: "Intervention rapide", desc: "Contactez-nous et nous planifions l'enlèvement sous 24h." },
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
      <CitiesList depNumber="94" departementName="Val-de-Marne" />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Val-de-Marne (94)</h2>
          <div className="space-y-6">
            {[
              { q: "Intervenez-vous dans les bords de Marne ?", a: "Oui, nous intervenons dans toutes les communes en bord de Marne : Champigny, Nogent, Saint-Maur, Joinville-le-Pont, etc." },
              { q: "Enlevez-vous les épaves dans les résidences fermées du 94 ?", a: "Oui, sous réserve d'un accès possible pour notre matériel. N'hésitez pas à nous décrire la situation lors de votre demande." },
              { q: "Délai d'intervention dans le Val-de-Marne ?", a: "Nous intervenons généralement sous 24h. Pour les situations urgentes, appelez-nous directement." },
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
          <h2 className="text-3xl font-bold text-black mb-4">Épave dans le Val-de-Marne ? Appelez-nous !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit dans tout le département 94</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
