import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Phone, Car, CheckCircle, FileText, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ScrollToTop from "@/components/scroll-to-top";
import { StructuredData } from "@/components/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services d'Enlèvement d'Épaves - GH Épaviste Île-de-France",
  description: "Découvrez nos services d'enlèvement gratuit d'épaves en Île-de-France : voitures, motos, utilitaires. Intervention rapide 24/7.",
  keywords: "services épaviste, enlèvement épave gratuit, Île-de-France",
  openGraph: {
    title: "Services d'Enlèvement d'Épaves - GH Épaviste",
    description: "Services professionnels d'enlèvement gratuit d'épaves en Île-de-France. Agréé VHU, intervention rapide.",
    url: "https://gh-epaviste.fr/services",
  },
  alternates: {
    canonical: "https://gh-epaviste.fr/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="Service" 
        data={{
          name: "Services d'enlèvement d'épaves",
          description: "Services professionnels d'enlèvement gratuit d'épaves automobiles en Île-de-France",
          url: "https://gh-epaviste.fr/services"
        }}
      />
      <BreadcrumbNav aria-label="Chemin de navigation" />

      <main id="main-content">
        {/* Hero Services */}
        <section className="py-16 bg-black text-white" aria-labelledby="hero-services-heading">
          <div className="container mx-auto px-4 text-center">
            <h1 id="hero-services-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-yellow-500">Services</span> d&apos;Enlèvement
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              GH Épaviste vous propose une gamme complète de services pour l&apos;enlèvement gratuit de tous types de
              véhicules en Île-de-France.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
              <Link href="/formulaire" aria-label="Demander un enlèvement gratuit de votre épave">
                DEMANDER UN ENLÈVEMENT
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Principaux */}
        <section className="py-16 bg-gray-50" aria-labelledby="main-services-heading">
          <div className="container mx-auto px-4">
            <h2 id="main-services-heading" className="text-3xl font-bold text-center mb-12 text-black">Nos Services Principaux</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Truck className="w-8 h-8 text-black" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-center text-black">Enlèvement Gratuit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Enlèvement de votre véhicule hors d&apos;usage sans aucun frais, où que vous soyez en Île-de-France.
                  </p>
                  <ul className="space-y-2 text-sm" aria-label="Avantages de l&apos;enlèvement gratuit">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Aucun coût pour vous</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Intervention rapide</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Équipe professionnelle</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Shield className="w-8 h-8 text-black" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-center text-black">Service Professionnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Service professionnel et sécurisé pour l&apos;enlèvement de votre véhicule.
                  </p>
                  <ul className="space-y-2 text-sm" aria-label="Avantages du service professionnel">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Équipe qualifiée</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Matériel adapté</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Intervention sécurisée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types de Véhicules Détaillés */}
        <section className="py-16 bg-white" aria-labelledby="vehicle-types-heading">
          <div className="container mx-auto px-4">
            <h2 id="vehicle-types-heading" className="text-3xl font-bold text-center mb-12 text-black">Véhicules Pris en Charge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Car className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Véhicules Légers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-black mb-2">Types :</h4>
                      <ul className="space-y-1 text-sm text-gray-600" aria-label="Types de véhicules légers enlevés">
                        <li>• Berlines</li>
                        <li>• Breaks</li>
                        <li>• Coupés</li>
                        <li>• Cabriolets</li>
                        <li>• SUV</li>
                        <li>• 4x4</li>
                        <li>• Citadines</li>
                        <li>• Monospaces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">États pris en charge :</h4>
                      <div className="space-y-2">
                        <Badge variant="outline" className="w-full text-center border-red-300 text-red-600">
                          Accidentés
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-orange-300 text-orange-600">
                          Brûlés
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-gray-300 text-gray-600">
                          Abandonnés / Épaves
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-blue-300 text-blue-600">
                          Non roulants
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-purple-300 text-purple-600">
                          Sans carte grise
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Truck className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Autres Véhicules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-black mb-2">Types :</h4>
                      <ul className="space-y-1 text-sm text-gray-600" aria-label="Autres types de véhicules enlevés">
                        <li>• Motos</li>
                        <li>• Scooters</li>
                        <li>• Quads</li>
                        <li>• Utilitaires légers</li>
                        <li>• Camionnettes</li>
                        <li>• Fourgons</li>
                        <li>• Pick-up</li>
                        <li>• Caravanes (petites)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Spécialités :</h4>
                      <ul className="space-y-1 text-sm text-gray-600" aria-label="Spécialités d&apos;enlèvement de véhicules">
                        <li>• Véhicules de collection</li>
                        <li>• Véhicules de luxe</li>
                        <li>• Véhicules anciens</li>
                        <li>• Véhicules modifiés ou tunés</li>
                        <li>• Véhicules agricoles (sur demande)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Zone d&apos;Intervention */}
        <section className="py-16 bg-gray-50" aria-labelledby="intervention-zone-heading">
          <div className="container mx-auto px-4">
            <h2 id="intervention-zone-heading" className="text-3xl font-bold text-center mb-12 text-black">Zone d&apos;Intervention</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-black flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Île-de-France - Tous Départements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6" role="list" aria-label="Liste des départements de l&apos;Île-de-France couverts">
                    {[
                      { code: "75", name: "Paris" },
                      { code: "77", name: "Seine-et-Marne" },
                      { code: "78", name: "Yvelines" },
                      { code: "91", name: "Essonne" },
                      { code: "92", name: "Hauts-de-Seine" },
                      { code: "93", name: "Seine-Saint-Denis" },
                      { code: "94", name: "Val-de-Marne" },
                      { code: "95", name: "Val-d'Oise" },
                    ].map((dept) => (
                      <div key={dept.code} className="text-center p-3 bg-yellow-50 rounded-lg" role="listitem">
                        <div className="text-2xl font-bold text-yellow-600">{dept.code}</div>
                        <div className="text-sm text-gray-700">{dept.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Intervention rapide et gratuite dans <strong>toute l&apos;Île-de-France</strong>, y compris les zones urbaines denses,
                      périurbaines et rurales.
                    </p>
                    <div className="flex justify-center flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800">Zones Urbaines</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Zones Périurbaines</Badge>
                      <Badge className="bg-orange-100 text-orange-800">Zones Rurales</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Accès difficile</Badge>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Image
                        src="/images/ma-carte-idf-speciale.png"
                        alt="Carte Île-de-France"
                        width={420}
                        height={420}
                        className="rounded shadow"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-black text-white" aria-labelledby="final-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="final-cta-heading" className="text-3xl font-bold mb-6">
              Besoin d&apos;un <span className="text-yellow-500">Enlèvement Rapide</span> ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez GH Épaviste dès maintenant pour un service professionnel et gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                <Link href="/formulaire" aria-label="Demander un enlèvement d&apos;épave via le formulaire">
                  DEMANDER UN ENLÈVEMENT
                </Link>
              </Button>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black font-bold" asChild>
                <a href="tel:+33753120793" aria-label="Appeler GH Épaviste au 00 33 7 53 12 07 93">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  00 33 7 53 12 07 93
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}