import Link from "next/link"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld";
import { Metadata } from "next"
import {
  Phone,
  Shield,
  Users,
  MapPin,
  CheckCircle,
  Star,
  Truck,
  FileText,
  Recycle,
  Award,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "À Propos de GH Épaviste | Qui Sommes-Nous ? — Service Professionnel en Île-de-France",
  description:
    "GH Épaviste : épaviste professionnel en Île-de-France depuis plusieurs années. Enlèvement gratuit de véhicules hors d'usage, conformité réglementaire VHU, intervention 24h/7j dans les 8 départements. Découvrez notre équipe et nos engagements.",
  alternates: { canonical: "https://gh-epaviste.fr/a-propos" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "À Propos de GH Épaviste | Service Professionnel en Île-de-France",
    description:
      "Épaviste professionnel en Île-de-France. Enlèvement gratuit de véhicules hors d'usage, conformité VHU, intervention 24h/7j. Découvrez notre équipe.",
    url: "https://gh-epaviste.fr/a-propos",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "À Propos de GH Épaviste" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos de GH Épaviste | Service Professionnel en Île-de-France",
    description:
      "Épaviste professionnel en Île-de-France. Enlèvement gratuit, conformité VHU, 24h/7j.",
    images: ["/og-image.jpg"],
  },
}

// JSON-LD structuré pour E-E-A-T
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GH Épaviste",
  "url": "https://gh-epaviste.fr",
  "telephone": "+33753120793",
  "email": "contact@gh-epaviste.fr",
  "description": "Service professionnel d'enlèvement gratuit de véhicules hors d'usage en Île-de-France. Intervenant agréé travaillant exclusivement avec des centres de traitement VHU agréés par la préfecture.",
  "areaServed": {
    "@type": "State",
    "name": "Île-de-France"
  },
  "knowsAbout": [
    "Enlèvement de véhicules hors d'usage",
    "Réglementation VHU (véhicule hors d'usage)",
    "Certificat de cession et certificat de destruction",
    "Recyclage automobile conforme à la réglementation"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Partenariat avec centres de traitement VHU agréés préfecture Île-de-France"
  }
}

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "À Propos", url: "https://gh-epaviste.fr/a-propos" },
      ]} />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-black text-white py-20" aria-labelledby="apropos-hero-heading">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 mr-2" aria-hidden="true" />
            Épaviste professionnel — Île-de-France
          </div>
          <h1 id="apropos-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            À propos de <span className="text-yellow-500">GH Épaviste</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Un service de confiance pour l&apos;enlèvement gratuit de vos véhicules hors d&apos;usage en Île-de-France.
            Nous intervenons rapidement dans les 8 départements, en conformité avec la réglementation VHU en vigueur.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Qui sommes-nous */}
        <section className="py-16 bg-white" aria-labelledby="qui-sommes-nous-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="qui-sommes-nous-heading" className="text-3xl font-bold text-black mb-6">
                  Qui sommes-nous ?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  <strong>GH Épaviste</strong> est un service spécialisé dans l&apos;enlèvement gratuit de
                  véhicules hors d&apos;usage (VHU) en Île-de-France. Nous intervenons dans l&apos;ensemble des
                  8 départements de la région — Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91),
                  Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d&apos;Oise (95).
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Notre activité consiste à prendre en charge votre véhicule hors d&apos;usage — qu&apos;il soit
                  accidenté, brûlé, en panne définitive ou simplement inutilisable — pour le confier à un
                  <strong> centre de traitement agréé VHU partenaire</strong>, conformément à la réglementation
                  environnementale européenne et française en vigueur.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nous sommes un intermédiaire professionnel : nous collectons votre véhicule, gérons les
                  formalités administratives (certificat de cession, non-gage), et assurons sa transmission
                  dans la filière de recyclage officielle. Le <strong>certificat de destruction</strong> est
                  ensuite émis par le centre VHU agréé et vous est transmis dès réception.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield,  label: "Service garanti",       value: "100%" },
                  { icon: Users,   label: "Clients accompagnés",   value: "500+" },
                  { icon: MapPin,  label: "Départements couverts", value: "8" },
                  { icon: Clock,   label: "Disponibilité",         value: "24h/7j" },
                ].map((stat, i) => (
                  <div key={i} className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-center">
                    <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notre rôle dans la filière VHU — Transparence E-E-A-T */}
        <section className="py-16 bg-gray-50" aria-labelledby="filiere-vhu-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="filiere-vhu-heading" className="text-3xl font-bold text-center text-black mb-4">
              Notre rôle dans la <span className="text-yellow-500">filière VHU</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              En France, le traitement des véhicules hors d&apos;usage est strictement encadré par la réglementation.
              Voici comment nous intervenons en toute transparence.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10 flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Point de conformité important</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  GH Épaviste n&apos;est <strong>pas</strong> un centre VHU agréé. Nous sommes un prestataire
                  de collecte et de transport. Votre véhicule est confié à un{" "}
                  <strong>centre de traitement VHU agréé par la préfecture</strong>, seul habilité à
                  réaliser les opérations de dépollution et à émettre le certificat de destruction officiel.
                  Cette distinction est importante pour votre protection légale.
                </p>
              </div>
            </div>

            {/* Étapes du processus */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  icon: Phone,
                  title: "Demande de collecte",
                  desc: "Vous nous contactez via le formulaire ou par téléphone. Nous planifions l'intervention sous 24h.",
                },
                {
                  step: "2",
                  icon: FileText,
                  title: "Formalités administratives",
                  desc: "Co-signature du certificat de cession. Vous remettez la carte grise et un non-gage de moins de 15 jours.",
                },
                {
                  step: "3",
                  icon: Truck,
                  title: "Enlèvement gratuit",
                  desc: "Notre équipe déplace votre véhicule sans frais. Intervention sur voie publique, parking ou propriété privée.",
                },
                {
                  step: "4",
                  icon: Recycle,
                  title: "Transmission au centre VHU",
                  desc: "Le véhicule est confié à notre centre partenaire agréé. Le certificat de destruction vous est transmis dès émission.",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-yellow-400 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                        {item.step}
                      </div>
                      <item.icon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-black mb-2 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-16 bg-white" aria-labelledby="equipe-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="equipe-heading" className="text-3xl font-bold text-center text-black mb-4">
              Notre <span className="text-yellow-500">équipe</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Des professionnels formés aux procédures d&apos;enlèvement et aux exigences réglementaires VHU.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  role: "Opérateurs de collecte",
                  desc: "Nos opérateurs terrain sont formés à la manipulation sécurisée des véhicules hors d'usage (véhicules accidentés, brûlés, sur terrain non stabilisé). Ils interviennent avec des dépanneuses professionnelles adaptées à chaque situation.",
                  detail: "Formation sécurité + manipulation VHU",
                },
                {
                  role: "Coordinateur administratif",
                  desc: "Un coordinateur dédié gère les formalités administratives : vérification des documents (certificat de cession, non-gage), liaison avec le centre VHU agréé partenaire et transmission du certificat de destruction.",
                  detail: "Procédures ANTS + réglementation VHU",
                },
                {
                  role: "Permanence téléphonique",
                  desc: "Une ligne disponible 24h/24 et 7j/7 pour répondre à vos questions, planifier vos enlèvements urgents et vous accompagner dans vos démarches.",
                  detail: "Disponible au 07 53 12 07 93",
                },
              ].map((member, i) => (
                <Card key={i} className="border-2 border-gray-100 hover:border-yellow-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-yellow-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-black text-lg mb-3">{member.role}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.desc}</p>
                    <div className="bg-yellow-50 rounded-lg px-3 py-1.5 text-xs text-yellow-700 font-medium">
                      {member.detail}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nos engagements */}
        <section className="py-16 bg-gray-50" aria-labelledby="engagements-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="engagements-heading" className="text-3xl font-bold text-center text-black mb-12">
              Nos Engagements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Gratuité totale",
                  desc: "L'enlèvement de votre épave est entièrement gratuit. Aucun frais de déplacement, aucun frais de remorquage, aucune mauvaise surprise. La gratuité est notre modèle économique.",
                },
                {
                  title: "Intervention sous 24h",
                  desc: "Nous nous engageons à intervenir dans les 24h suivant votre demande. Pour les situations urgentes (véhicule gênant sur voie publique), nous pouvons intervenir le jour même.",
                },
                {
                  title: "Conformité réglementaire",
                  desc: "Tous nos enlèvements sont réalisés conformément à la législation VHU. Votre véhicule est confié à un centre agréé. Vous êtes protégé légalement avec le certificat de destruction.",
                },
                {
                  title: "Transparence documentaire",
                  desc: "Nous vous guidons sur chaque document requis : non-gage, certificat de cession, carte grise barrée. Aucune démarche cachée, tout est expliqué en amont de l'intervention.",
                },
                {
                  title: "Couverture complète Île-de-France",
                  desc: "Nous intervenons dans les 8 départements d'Île-de-France. Des axes majeurs aux zones résidentielles, nos équipes couvrent l'intégralité de la région parisienne.",
                },
                {
                  title: "Respect de l'environnement",
                  desc: "Les véhicules collectés sont remis à des centres de traitement agréés respectant les normes environnementales européennes pour le dépollution et le recyclage des matériaux.",
                },
              ].map((v, i) => (
                <Card key={i} className="border-2 border-yellow-100 hover:border-yellow-400 transition-colors">
                  <CardContent className="p-6">
                    <CheckCircle className="w-10 h-10 text-yellow-500 mb-4" aria-hidden="true" />
                    <h3 className="font-bold text-black text-lg mb-3">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents exigés */}
        <section className="py-16 bg-white" aria-labelledby="documents-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="documents-heading" className="text-3xl font-bold text-center text-black mb-4">
              Documents <span className="text-yellow-500">requis</span> pour l&apos;enlèvement
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
              Pour une procédure conforme et rapide, munissez-vous de ces documents le jour de l&apos;enlèvement.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Carte grise originale",
                  desc: "La carte grise (certificat d'immatriculation) doit être barrée avec la mention 'Vendu le [date]' et co-signée au moment de la cession.",
                  required: true,
                },
                {
                  icon: Shield,
                  title: "Pièce d'identité",
                  desc: "Carte nationale d'identité ou passeport en cours de validité du propriétaire du véhicule.",
                  required: true,
                },
                {
                  icon: FileText,
                  title: "Certificat de non-gage",
                  desc: "Attestation de situation administrative (non-gage) de moins de 15 jours. Gratuit et disponible en ligne sur le site officiel histovec.interieur.gouv.fr.",
                  required: true,
                },
              ].map((doc, i) => (
                <div key={i} className="bg-gray-50 border-2 border-gray-200 hover:border-yellow-400 rounded-xl p-6 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <doc.icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black mb-1">{doc.title}</h3>
                      {doc.required && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded font-medium">
                          Obligatoire
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{doc.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Vous n&apos;avez pas votre carte grise ? <Link href="/blog/enlever-voiture-sans-carte-grise" className="text-yellow-600 underline hover:text-yellow-700">Consultez notre guide pour l&apos;enlèvement sans carte grise</Link>.
            </p>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-gray-50" aria-labelledby="zone-intervention-heading">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 id="zone-intervention-heading" className="text-3xl font-bold text-black mb-4">
              Notre Zone d&apos;Intervention
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              GH Épaviste intervient dans l&apos;ensemble de l&apos;Île-de-France, couvrant les 8 départements de la région.
              Nos équipes se déplacent quotidiennement sur les principaux axes routiers (A1, A4, A6, A10, A13, A86, Francilienne).
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {[
                { label: "Paris (75)",              href: "/enlevement-epave-paris" },
                { label: "Seine-et-Marne (77)",     href: "/enlevement-epave-seine-et-marne" },
                { label: "Yvelines (78)",            href: "/enlevement-epave-yvelines" },
                { label: "Essonne (91)",             href: "/enlevement-epave-essonne" },
                { label: "Hauts-de-Seine (92)",      href: "/enlevement-epave-hauts-de-seine" },
                { label: "Seine-Saint-Denis (93)",   href: "/enlevement-epave-seine-saint-denis" },
                { label: "Val-de-Marne (94)",        href: "/enlevement-epave-val-de-marne" },
                { label: "Val-d'Oise (95)",          href: "/enlevement-epave-val-d-oise" },
              ].map((dept) => (
                <Link
                  key={dept.label}
                  href={dept.href}
                  className="bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-full font-semibold text-sm transition-colors"
                >
                  {dept.label}
                </Link>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              {[
                { icon: Star, label: "Temps moyen d'intervention", value: "< 24h" },
                { icon: Truck, label: "Interventions par mois", value: "100+" },
                { icon: MapPin, label: "Communes desservies", value: "1 200+" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                  <stat.icon className="w-8 h-8 text-yellow-500 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-black text-lg">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-yellow-500" aria-labelledby="apropos-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="apropos-cta-heading" className="text-3xl font-bold text-black mb-4">
              Besoin d&apos;un enlèvement d&apos;épave ?
            </h2>
            <p className="text-black/80 mb-8 text-lg max-w-xl mx-auto">
              Contactez-nous dès maintenant. Intervention gratuite sous 24h dans toute l&apos;Île-de-France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formulaire">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">
                  Demander un Enlèvement Gratuit
                </Button>
              </Link>
              <a href="tel:+33753120793">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  07 53 12 07 93
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
