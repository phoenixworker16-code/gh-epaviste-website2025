import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import ScrollToTop from "@/components/scroll-to-top"

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbNav />

      <main className="py-12 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-black flex items-center">
                <HelpCircle className="w-8 h-8 text-yellow-500 mr-3" aria-hidden="true" />
                Foire Aux Questions (FAQ)
              </CardTitle>
              <p className="text-gray-600">Toutes les réponses à vos questions sur l’enlèvement d’épave GH Épaviste.</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-black mb-4">1. L’enlèvement est-il vraiment gratuit&nbsp;?</h2>
                  <p className="text-gray-700">
                    Oui, l’enlèvement de votre véhicule hors d’usage (épave) est totalement gratuit partout en Île-de-France, sous réserve que le véhicule soit complet et accessible.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-black mb-4">2. Quels documents dois-je fournir&nbsp;?</h2>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>La carte grise du véhicule (barrée et signée)</li>
                    <li>Un certificat de non-gage de moins de 15 jours</li>
                    <li>Une pièce d’identité</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-black mb-4">3. Comment prendre rendez-vous&nbsp;?</h2>
                  <p className="text-gray-700">
                    Contactez-nous par téléphone au{" "}
                    <a href="tel:+33659128819" className="text-yellow-500 hover:text-yellow-600 font-bold">
                      00 33 7 53 12 07 93
                    </a>
                    {" "}ou via notre <a href="/formulaire" className="text-yellow-500 hover:text-yellow-600 font-bold">formulaire de contact</a>.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-black mb-4">4. Intervenez-vous le week-end&nbsp;?</h2>
                  <p className="text-gray-700">
                    Oui, notre équipe intervient 7j/7, même le dimanche et les jours fériés, de 8h à 22h.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-black mb-4">5. Que devient mon véhicule après l’enlèvement&nbsp;?</h2>
                  <p className="text-gray-700">
                    Votre véhicule est pris en charge dans un centre VHU agréé pour dépollution, recyclage et destruction dans le respect de la réglementation.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-black mb-4">6. Puis-je faire enlever une épave sans carte grise&nbsp;?</h2>
                  <p className="text-gray-700">
                    Oui, dans certains cas (vol, perte, destruction), contactez-nous pour connaître la procédure adaptée.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
        <ScrollToTop />
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 text-center py-3 z-50">
        <span className="text-gray-600 text-sm">
          © 2025 GH Épaviste. Tous droits réservés. Powered By PhOeNiX
        </span>
      </footer>
    </div>
  )
}
