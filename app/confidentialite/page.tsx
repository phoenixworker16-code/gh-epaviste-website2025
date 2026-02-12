import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import ScrollToTop from "@/components/scroll-to-top"

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbNav />

      <main className="py-12" id="main-content">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-black flex items-center">
                <Shield className="w-8 h-8 text-yellow-500 mr-3" aria-hidden="true" />
                Politique de Confidentialité
              </CardTitle>
              <p className="text-gray-600">Protection et traitement de vos données personnelles.</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-8">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-black mb-2 flex items-center">
                    <Lock className="w-5 h-5 text-yellow-500 mr-2" aria-hidden="true" />
                    Notre Engagement
                  </h3>
                  <p className="text-gray-700">
                    GH Épaviste s&apos;engage à protéger la confidentialité de vos données personnelles et à respecter la
                    réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
                  </p>
                </div>

                <section aria-labelledby="section-responsable">
                  <h2 id="section-responsable" className="text-2xl font-bold text-black mb-4">1. Responsable du traitement</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <address className="not-italic">
                      <p>
                        <strong>Responsable :</strong> GH Épaviste
                      </p>
                      <p>
                        <strong>Adresse :</strong> [À compléter - Ex: 123 Rue de l&apos;Exemple, 75001 Paris]
                      </p>
                      <p>
                        <strong>Téléphone :</strong>{" "}
                        <a href="tel:+33753120793" className="text-gray-700 hover:underline">
                          +33 6 59 12 88 19
                        </a>
                      </p>
                      <p>
                        <strong>Email :</strong>{" "}
                        <a href="mailto:contact@gh-epaviste.fr" className="text-gray-700 hover:underline">
                          contact@gh-epaviste.fr
                        </a>
                      </p>
                    </address>
                  </div>
                </section>

                <section aria-labelledby="section-donnees-collectees">
                  <h2 id="section-donnees-collectees" className="text-2xl font-bold text-black mb-4">2. Données collectées</h2>
                  <p className="text-gray-700 mb-4">
                    Dans le cadre de nos services d&apos;enlèvement d&apos;épaves, nous collectons les données suivantes :
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-yellow-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-black">Données d&apos;identification</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>Nom et prénom</li>
                          <li>Adresse postale</li>
                          <li>Numéro de téléphone</li>
                          <li>Adresse email</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-black">Données du véhicule</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>Marque et modèle</li>
                          <li>Année de mise en circulation</li>
                          <li>État du véhicule</li>
                          <li>Localisation</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section aria-labelledby="section-finalites-traitement">
                  <h2 id="section-finalites-traitement" className="text-2xl font-bold text-black mb-4">3. Finalités du traitement</h2>
                  <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                        <p className="text-gray-700">Organiser l&apos;enlèvement de votre véhicule.</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                        <p className="text-gray-700">Vous contacter pour planifier l&apos;intervention.</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                        <p className="text-gray-700">Établir le certificat de destruction.</p>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                        <p className="text-gray-700">Respecter nos obligations légales.</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                        <p className="text-gray-700">Améliorer nos services.</p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                        <p className="text-gray-700">Assurer le suivi de notre relation commerciale.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                <section aria-labelledby="section-base-legale">
                  <h2 id="section-base-legale" className="text-2xl font-bold text-black mb-4">4. Base légale du traitement</h2>
                  <p className="text-gray-700">Le traitement de vos données personnelles est fondé sur :</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                      <p className="text-gray-700">
                        <strong>L&apos;exécution du contrat</strong> : pour réaliser la prestation d&apos;enlèvement.
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                      <p className="text-gray-700">
                        <strong>L&apos;obligation légale</strong> : pour respecter la réglementation .
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" aria-hidden="true"></div>
                      <p className="text-gray-700">
                        <strong>L&apos;intérêt légitime</strong> : pour améliorer nos services.
                      </p>
                    </li>
                  </ul>
                </section>

                <section aria-labelledby="section-duree-conservation">
                  <h2 id="section-duree-conservation" className="text-2xl font-bold text-black mb-4">5. Durée de conservation</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont
                      été collectées :
                    </p>
                    <ul className="mt-3 space-y-1 list-disc list-inside">
                      <li>
                        <strong>Données client :</strong> 3 ans après la fin de la relation commerciale.
                      </li>
                      <li>
                        <strong>Données de facturation :</strong> 10 ans (obligation légale).
                      </li>
                      <li>
                        <strong>Certificats de destruction :</strong> 3 ans (obligation réglementaire ).
                      </li>
                    </ul>
                  </div>
                </section>

                <section aria-labelledby="section-destinataires-donnees">
                  <h2 id="section-destinataires-donnees" className="text-2xl font-bold text-black mb-4">6. Destinataires des données</h2>
                  <p className="text-gray-700 mb-4">Vos données peuvent être transmises à :</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      Nos équipes internes pour la gestion de votre dossier.
                    </li>
                    <li>
                      Les autorités compétentes dans le cadre de nos obligations légales.
                    </li>
                    <li>
                      Nos partenaires techniques (hébergeur, prestataires informatiques).
                    </li>
                  </ul>
                </section>

                <section aria-labelledby="section-vos-droits">
                  <h2 id="section-vos-droits" className="text-2xl font-bold text-black mb-4">7. Vos droits</h2>
                  <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-black mb-2 flex items-center">
                          <Eye className="w-4 h-4 text-green-500 mr-2" aria-hidden="true" />
                          Droit d&apos;accès
                        </h4>
                        <p className="text-sm text-gray-700">Obtenir une copie de vos données personnelles.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-black mb-2 flex items-center">
                          <Lock className="w-4 h-4 text-blue-500 mr-2" aria-hidden="true" />
                          Droit de rectification
                        </h4>
                        <p className="text-sm text-gray-700">Corriger vos données inexactes ou incomplètes.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-black mb-2 flex items-center">
                          <Lock className="w-4 h-4 text-red-500 mr-2" aria-hidden="true" />
                          Droit d&apos;effacement
                        </h4>
                        <p className="text-sm text-gray-700">Demander la suppression de vos données.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-black mb-2 flex items-center">
                          <Shield className="w-4 h-4 text-orange-500 mr-2" aria-hidden="true" />
                          Droit d&apos;opposition
                        </h4>
                        <p className="text-sm text-gray-700">Vous opposer au traitement de vos données.</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section aria-labelledby="section-exercer-vos-droits">
                  <h2 id="section-exercer-vos-droits" className="text-2xl font-bold text-black mb-4">8. Exercer vos droits</h2>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">Pour exercer vos droits, contactez-nous :</p>
                    <ul className="space-y-2">
                      <li>
                        <strong>Par téléphone :</strong>{" "}
                        <a href="tel:+33753120793" className="text-yellow-600 hover:text-yellow-700" aria-label="Appeler au +33 6 59 12 88 19">
                          +33 6 59 12 88 19
                        </a>
                      </li>
                      <li>
                        <strong>Par email :</strong>{" "}
                        <a href="mailto:contact@gh-epaviste.fr" className="text-yellow-600 hover:text-yellow-700" aria-label="Envoyer un email à contact@gh-epaviste.fr">
                          contact@gh-epaviste.fr
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois.
                    </p>
                  </div>
                </section>

                <section aria-labelledby="section-securite-donnees">
                  <h2 id="section-securite-donnees" className="text-2xl font-bold text-black mb-4">9. Sécurité des données</h2>
                  <p className="text-gray-700">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                    données personnelles contre la perte, l&apos;utilisation abusive, l&apos;accès non autorisé, la divulgation,
                    l&apos;altération ou la destruction.
                  </p>
                </section>

                <section aria-labelledby="section-reclamation">
                  <h2 id="section-reclamation" className="text-2xl font-bold text-black mb-4">10. Réclamation</h2>
                  <p className="text-gray-700">
                    Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous
                    avez le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique
                    et des Libertés).
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <address className="not-italic">
                      <p>
                        <strong>CNIL</strong>
                      </p>
                      <p>3 Place de Fontenoy - TSA 80715</p>
                      <p>75334 PARIS CEDEX 07</p>
                      <p>
                        Téléphone :{" "}
                        <a href="tel:+33153732222" className="text-gray-700 hover:underline">
                          01 53 73 22 22
                        </a>
                      </p>
                      <p>
                        Site web :{" "}
                        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                          www.cnil.fr
                        </a>
                      </p>
                    </address>
                  </div>
                </section>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-black mb-2">Mise à jour</h3>
                  <p className="text-gray-700">
                    Cette politique de confidentialité peut être mise à jour. La version en vigueur est celle publiée
                    sur notre site web.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Dernière mise à jour : <span className="font-medium">[Date à compléter - Ex: 1er Juillet 2025]</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <ScrollToTop />
      </main>
    </div>
  )
}
