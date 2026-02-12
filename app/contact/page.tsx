import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ScrollToTop from "@/components/scroll-to-top";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbNav />

      <main className="py-12 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              Contactez <span className="text-yellow-500">GH Épaviste</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une épave à enlever ? Contactez-nous dès maintenant pour un service rapide et gratuit en Île-de-France.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <section aria-labelledby="contact-direct-heading">
              <Card>
                <CardHeader>
                  <CardTitle id="contact-direct-heading" className="text-2xl text-black flex items-center">
                    <Phone className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Contact Direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <Phone className="w-8 h-8 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black text-lg">Téléphone</h3>
                      <a href="tel:+33753120793" className="text-2xl font-bold text-yellow-600 hover:text-yellow-700" aria-label="Appeler au 00 33 7 53 12 07 93">
                        00 33 7 53 12 07 93
                      </a>
                      <p className="text-sm text-gray-600">Disponible 24h/24 - 7j/7</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-8 h-8 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black text-lg">Email</h3>
                      <a href="mailto:contact@gh-epaviste.fr" className="text-lg text-gray-700 hover:text-yellow-600" aria-label="Envoyer un email à contact@gh-epaviste.fr">
                        contact@gh-epaviste.fr
                      </a>
                      <p className="text-sm text-gray-600">Réponse sous 2h</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-8 h-8 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black text-lg">Zone d&apos;intervention</h3>
                      <p className="text-lg text-gray-700">Île-de-France</p>
                      <p className="text-sm text-gray-600">Tous départements (75, 77, 78, 91, 92, 93, 94, 95)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-8 h-8 text-yellow-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black text-lg">Horaires</h3>
                      <p className="text-lg text-gray-700">24h/24 - 7j/7</p>
                      <p className="text-sm text-gray-600">Intervention d&apos;urgence possible</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-500">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-black mb-4">Intervention Immédiate</h2>
                  <p className="text-black mb-6">Besoin d&apos;un enlèvement urgent ? Appelez-nous maintenant !</p>
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    <a href="tel:+33753120793" aria-label="Appeler maintenant pour une intervention immédiate">
                      APPELER MAINTENANT
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Formulaire de contact rapide et engagements */}
            <section aria-labelledby="demande-rapide-heading">
              <Card>
                <CardHeader>
                  <CardTitle id="demande-rapide-heading" className="text-2xl text-black">Demande Rapide</CardTitle>
                  <p className="text-gray-600">Ou remplissez notre formulaire complet</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-8 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-bold text-black mb-4">Formulaire Détaillé</h3>
                      <p className="text-gray-600 mb-6">
                        Pour une prise en charge optimale, utilisez notre formulaire complet qui nous permet de mieux
                        préparer votre enlèvement.
                      </p>
                      <Link href="/formulaire">
                        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" aria-label="Accéder au formulaire d&apos;enlèvement détaillé">
                          ACCÉDER AU FORMULAIRE
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-bold text-black text-lg">Nos engagements :</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                          <span className="text-gray-700">Enlèvement 100% gratuit</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                          <span className="text-gray-700">Intervention sous 24h</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                          <span className="text-gray-700">Service professionnel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
        <ScrollToTop />
      </main>
    </div>
  );
}