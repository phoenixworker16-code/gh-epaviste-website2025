"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Euro, Shield, CheckCircle, Phone, Mail, Clock, MapPin, Star, Truck, Bike } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import ScrollToTop from "@/components/scroll-to-top"

export default function VehiculesPage() {
  const vehicleTypes = [
    {
      icon: Car,
      title: "Voitures",
      description: "Berlines, SUV, citadines, breaks",
      examples: ["Renault Clio", "Peugeot 308", "BMW Série 3", "Audi A4"]
    },
    {
      icon: Truck,
      title: "Utilitaires",
      description: "Camionnettes, fourgons, pick-up",
      examples: ["Renault Kangoo", "Peugeot Partner", "Ford Transit", "Iveco Daily"]
    },
    {
      icon: Bike,
      title: "Deux-roues",
      description: "Motos, scooters, quads",
      examples: ["Yamaha MT-07", "Honda PCX", "Suzuki Burgman", "Kawasaki Z900"]
    }
  ]

  const advantages = [
    {
      icon: Euro,
      title: "Évaluation Gratuite",
      description: "Estimation rapide et transparente de votre véhicule"
    },
    {
      icon: Clock,
      title: "Rachat Immédiat",
      description: "Paiement comptant dès l'accord trouvé"
    },
    {
      icon: Shield,
      title: "Démarches Simplifiées",
      description: "Nous nous occupons de toute la paperasse"
    },
    {
      icon: CheckCircle,
      title: "Service Professionnel",
      description: "Plus de 10 ans d'expérience dans l'automobile"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-black text-white py-16 lg:py-24">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image
            src="/images/tow-truck-hero.jpg"
            alt="Véhicules GH Épaviste"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-500">Achat de Véhicules</span>
                <br />
                Nous Rachetons Votre Auto au Meilleur Prix
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Spécialistes de l'achat de véhicules d'occasion, nous proposons des solutions rapides et avantageuses pour la vente de votre automobile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4"
                  >
                    OBTENIR UNE ESTIMATION
                  </Button>
                </Link>
                <Link href="tel:+33659128819">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-4"
                  >
                    APPELER MAINTENANT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Activité */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                <span className="text-yellow-500">Notre Expertise</span> en Achat de Véhicules
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez GH Épaviste, nous ne nous contentons pas d'enlever les épaves. Nous sommes également des professionnels 
                de l'achat de véhicules d'occasion. Que votre voiture soit en parfait état, qu'elle nécessite des réparations 
                ou qu'elle soit accidentée, nous étudions toutes les propositions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types de Véhicules */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Types de Véhicules <span className="text-yellow-500">Recherchés</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {vehicleTypes.map((type, index) => (
                <Card key={index} className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center justify-center">
                      <type.icon className="w-8 h-8 text-yellow-500 mr-3" />
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-bold text-black">Exemples :</h4>
                      {type.examples.map((example, idx) => (
                        <Badge key={idx} variant="outline" className="mr-2 mb-2">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <Card className="bg-yellow-50 border-2 border-yellow-200">
                <CardContent className="p-8">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Nous Achetons Tous Types de Véhicules
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    Peu importe l'état, l'âge ou la marque de votre véhicule, nous sommes intéressés. 
                    Nos experts évaluent chaque véhicule selon ses spécificités et vous proposent 
                    le meilleur prix du marché.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div>
                      <h4 className="font-bold text-black mb-2">États acceptés :</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Véhicules en parfait état</li>
                        <li>• Véhicules à réparer</li>
                        <li>• Véhicules accidentés</li>
                        <li>• Véhicules en panne</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Spécialités :</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Véhicules de collection</li>
                        <li>• Véhicules de luxe</li>
                        <li>• Véhicules utilitaires</li>
                        <li>• Véhicules récents</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Processus d'Achat */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Comment Ça <span className="text-yellow-500">Fonctionne</span> ?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Contact</h3>
                  <p className="text-gray-600">
                    Contactez-nous par téléphone ou via notre formulaire avec les détails de votre véhicule.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Évaluation</h3>
                  <p className="text-gray-600">
                    Nos experts évaluent votre véhicule et vous proposent un prix d'achat compétitif.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-2xl">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Finalisation</h3>
                  <p className="text-gray-600">
                    Si vous acceptez notre offre, nous nous occupons de tout : paperasse et paiement immédiat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'Intervention */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
                <span className="text-yellow-500">Zone d'Intervention</span>
              </h2>
              
              <Card className="border-2 border-yellow-200">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Toute l'Île-de-France
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    Nous intervenons dans tous les départements franciliens pour l'achat de votre véhicule.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-bold text-black mb-3">Départements couverts :</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Paris (75)</li>
                        <li>• Seine-et-Marne (77)</li>
                        <li>• Yvelines (78)</li>
                        <li>• Essonne (91)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-3">&nbsp;</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Hauts-de-Seine (92)</li>
                        <li>• Seine-Saint-Denis (93)</li>
                        <li>• Val-de-Marne (94)</li>
                        <li>• Val-d'Oise (95)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Prêt à Vendre Votre Véhicule ?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Obtenez une estimation gratuite et sans engagement de votre véhicule dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-yellow-500 font-bold text-lg px-8 py-4"
                >
                  DEMANDER UNE ESTIMATION
                </Button>
              </Link>
              <Link href="tel:+33659128819">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-yellow-500 font-bold text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  06 59 12 88 19
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <ScrollToTop />
    </div>
  )
}