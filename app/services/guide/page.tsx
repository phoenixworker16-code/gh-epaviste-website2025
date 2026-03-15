import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata = {
  title: "Comment faire enlever votre épave ? | GH Épaviste",
  description: "Guide étape par étape pour l'enlèvement gratuit de votre épave par GH Épaviste en Île-de-France.",
};

export default function GuideEpavePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo noir en haut */}
      <div className="flex justify-center py-8">
        <Image
          src="/images/gh-logo-new.png"
          alt="GH Épaviste Logo"
          width={220}
          height={120}
          className="h-24 w-auto"
          priority
        />
      </div>
      <main className="container mx-auto px-4 py-6 max-w-3xl flex-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500 text-center">
          Comment faire enlever votre épave par GH Épaviste ?
        </h1>
        <p className="mb-8 text-black text-center">
          Vous avez une épave qui encombre votre garage ou votre jardin et vous souhaitez vous en débarrasser ? GH Épaviste vous accompagne à chaque étape pour un enlèvement gratuit, rapide et professionnel. Suivez ce guide simple pour nous aider à prendre en charge votre véhicule en toute sérénité.
        </p>

        <ol className="space-y-10 list-decimal list-inside">
          <li>
            <h2 className="text-xl font-bold mb-2 text-black">1. Contactez-nous pour prendre rendez-vous</h2>
            <p className="text-black">
              La première étape est de nous contacter pour planifier l&apos;enlèvement de votre épave. Vous pouvez le faire par téléphone&nbsp;:
              <a href="tel:+33753120793" className="text-yellow-500 font-bold underline ml-1">
                <Phone className="inline w-4 h-4 mr-1" />00 33 7 53 12 07 93
              </a>
              {" "}ou via notre{" "}
              <Link href="/formulaire" className="text-yellow-500 font-bold underline">formulaire de contact</Link>.
            </p>
            <p className="mt-2 text-black">Merci de nous fournir :</p>
            <ul className="list-disc list-inside ml-4 mt-2 text-black">
              <li>Le type de véhicule (voiture, moto, utilitaire, etc.)</li>
              <li>La marque et le modèle</li>
              <li>L&apos;emplacement de l&apos;épave (adresse précise)</li>
              <li>Vos disponibilités pour l&apos;enlèvement</li>
            </ul>
            <p className="mt-2 text-black">Nous conviendrons ensemble d&apos;un rendez-vous qui vous arrange. Notre équipe se déplace directement sur le lieu de l&apos;épave.</p>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-2 text-black">2. Préparez les documents nécessaires</h2>
            <p className="text-black">
              Pour que l&apos;enlèvement de votre épave se déroule sans encombre, certains documents sont indispensables. Veuillez les préparer avant notre arrivée :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-black">
              <li>
                <strong>Carte grise du véhicule</strong> : non barrée, ou barrée avec la mention "Vendu le [date]" ou "Cédé le [date]", et signée. Si vous n&apos;avez plus la carte grise, contactez-nous.
              </li>
              <li>
                <strong>Pièce d&apos;identité</strong> : photocopie recto-verso du titulaire de la carte grise.
              </li>
              <li>
                <strong>Déclaration de cession</strong> : Cerfa n°15776*02 à remplir le jour J (nous l&apos;apportons, ou&nbsp;
                <a
                  href="https://www.service-public.fr/particuliers/vosdroits/R203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 underline"
                >
                  téléchargez-le ici
                </a>
                ).
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl font-bold mb-2 text-black">3. Laissez-nous faire le reste !</h2>
            <p className="text-black">
              Une fois les documents vérifiés et l&apos;épave chargée, nous procédons à l&apos;enlèvement de votre véhicule. Pensez à informer votre assureur de la cession du véhicule.
            </p>
          </li>
        </ol>
      </main>

      <ScrollToTop />
    </div>
  );
}