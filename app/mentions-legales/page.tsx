import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ScrollToTop from "@/components/scroll-to-top";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbNav />

      <main className="py-12" id="main-content">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle id="mentions-legales-heading" className="text-3xl font-bold text-black">Mentions Légales</CardTitle>
              <p className="text-gray-600">Informations légales concernant GH Épaviste</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-8">
                <section aria-labelledby="informations-entreprise">
                  <h2 id="informations-entreprise" className="text-2xl font-bold text-black mb-4">
                    1. Informations sur l&apos;entreprise
                  </h2>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p>
                      <strong>Raison sociale :</strong> GH Épaviste
                    </p>
                    <p>
                      <strong>Forme juridique :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Adresse du siège social :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Téléphone :</strong>{" "}
                      <a href="tel:+33659128819" className="text-gray-700 hover:text-yellow-600">
                        +33 6 59 12 88 19
                      </a>
                    </p>
                    <p>
                      <strong>Email :</strong>{" "}
                      <a href="mailto:contact@gh-epaviste.fr" className="text-gray-700 hover:text-yellow-600">
                        contact@gh-epaviste.fr
                      </a>
                    </p>
                    <p>
                      <strong>SIRET :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Code APE :</strong> [À compléter]
                    </p>
                  </div>
                </section>

                <section aria-labelledby="agrement-vhu">
                  <h2 id="agrement-vhu" className="text-2xl font-bold text-black mb-4">
                    2. Agrément VHU
                  </h2>
                  <p className="text-gray-700">
                    GH Épaviste est agréé pour la prise en charge des Véhicules Hors d&apos;Usage (VHU) conformément à la
                    réglementation en vigueur.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p>
                      <strong>Numéro d&apos;agrément VHU :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Préfecture de délivrance :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Date de délivrance :</strong> [À compléter]
                    </p>
                  </div>
                </section>

                <section aria-labelledby="directeur-publication">
                  <h2 id="directeur-publication" className="text-2xl font-bold text-black mb-4">
                    3. Directeur de publication
                  </h2>
                  <p className="text-gray-700">
                    Le directeur de la publication du site web est [Nom du dirigeant], en qualité de [Fonction].
                  </p>
                </section>

                <section aria-labelledby="hebergement-site">
                  <h2 id="hebergement-site" className="text-2xl font-bold text-black mb-4">
                    4. Hébergement du site
                  </h2>
                  <p className="text-gray-700">Ce site est hébergé par :</p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <p>
                      <strong>Hébergeur :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Adresse :</strong> [À compléter]
                    </p>
                    <p>
                      <strong>Téléphone :</strong> [À compléter]
                    </p>
                  </div>
                </section>

                <section aria-labelledby="propriete-intellectuelle">
                  <h2 id="propriete-intellectuelle" className="text-2xl font-bold text-black mb-4">
                    5. Propriété intellectuelle
                  </h2>
                  <p className="text-gray-700">
                    L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et
                    la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                    documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                </section>

                <section aria-labelledby="responsabilite">
                  <h2 id="responsabilite" className="text-2xl font-bold text-black mb-4">
                    6. Responsabilité
                  </h2>
                  <p className="text-gray-700">
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                    différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions. Si
                    vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir
                    le signaler par email, à l&apos;adresse{" "}
                    <a href="mailto:contact@gh-epaviste.fr" className="text-yellow-600 hover:text-yellow-700">
                      contact@gh-epaviste.fr
                    </a>
                    , en décrivant le problème de la façon la plus précise possible.
                  </p>
                </section>

                <section aria-labelledby="liens-hypertextes">
                  <h2 id="liens-hypertextes" className="text-2xl font-bold text-black mb-4">
                    7. Liens hypertextes
                  </h2>
                  <p className="text-gray-700">
                    Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres
                    ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de GH Épaviste.
                  </p>
                </section>

                <section aria-labelledby="donnees-personnelles">
                  <h2 id="donnees-personnelles" className="text-2xl font-bold text-black mb-4">
                    8. Collecte et traitement de données personnelles
                  </h2>
                  <p className="text-gray-700">
                    Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez d&apos;un
                    droit d&apos;accès, de modification et de suppression des données qui vous concernent. Pour exercer ce
                    droit, adressez-vous à :{" "}
                    <a href="mailto:contact@gh-epaviste.fr" className="text-yellow-600 hover:text-yellow-700">
                      contact@gh-epaviste.fr
                    </a>
                  </p>
                  <p className="text-gray-700 mt-4">
                    Pour plus d&apos;informations sur le traitement de vos données personnelles, consultez notre
                    <Link
                      href="/confidentialite"
                      className="text-yellow-600 hover:text-yellow-700 font-medium"
                      aria-label="Consulter notre politique de confidentialité"
                    >
                      {" "}
                      Politique de Confidentialité
                    </Link>
                    .
                  </p>
                </section>

                <section aria-labelledby="droit-applicable">
                  <h2 id="droit-applicable" className="text-2xl font-bold text-black mb-4">
                    9. Droit applicable
                  </h2>
                  <p className="text-gray-700">
                    Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit
                    français, quel que soit le lieu d&apos;utilisation. En cas de contestation éventuelle, et après l&apos;échec
                    de toute tentative de recherche d&apos;une solution amiable, les tribunaux français seront seuls
                    compétents pour connaître de ce litige.
                  </p>
                </section>

                <section aria-labelledby="contact-mentions-legales">
                  <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                    <h3 id="contact-mentions-legales" className="text-lg font-bold text-black mb-2">Contact</h3>
                    <p className="text-gray-700">
                      Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>
                        • Par téléphone :{" "}
                        <a href="tel:+33659128819" className="text-yellow-600 hover:text-yellow-700" aria-label="Appeler au +33 6 59 12 88 19">
                          +33 6 59 12 88 19
                        </a>
                      </li>
                      <li>
                        • Par email :{" "}
                        <a href="mailto:contact@gh-epaviste.fr" className="text-yellow-600 hover:text-yellow-700" aria-label="Envoyer un email à contact@gh-epaviste.fr">
                          contact@gh-epaviste.fr
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
        <ScrollToTop />
      </main>
    </div>
  );
}