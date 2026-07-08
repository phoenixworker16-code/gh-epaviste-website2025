import { PageData } from '../types'

export const meauxData: PageData = {
  slug: 'meaux',
  entityType: 'City',
  metaTitle: "Épaviste Meaux (77) | Enlèvement d'Épave Gratuit",
  metaDescription: "Besoin d'un épaviste à Meaux (77100) ? Enlèvement 100% gratuit, rapide. Voiture, moto, utilitaire HS. Partenaire VHU. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-utilitaire-epave",
    "enlevement-voiture-sans-assurance"
  ],
  relatedCitiesSlugs: [
    "seine-et-marne",
    "nanteuil-les-meaux", "trilport", "villenoy"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave à Meaux (77100)",
      subtitle: "Intervention sur le Pays de Meaux pour particuliers et professionnels.",
      badge: "Meaux (77100)",
      bgType: 'city'
    },
    {
      type: 'Introduction',
      title: "Intervention rapide sur Meaux et alentours",
      content: "La ville de Meaux et ses communes limitrophes bénéficient d'un service d'épaviste gratuit grâce à GH Épaviste. Que vous soyez dans le centre-ville historique ou dans les zones d'activités (Z.I. Sud, Pôle d'activité du Pays de Meaux), nous retirons votre véhicule accidenté ou en panne."
    },
    {
      type: 'LocalCoverage',
      title: "Secteurs de Meaux",
      intro: "Délai moyen d'intervention :",
      zones: [
        {
          name: "Centre-Ville & Quartiers",
          delay: "24h à 48h",
          specificities: "Prise en charge des véhicules ventouses sur demande du propriétaire."
        },
        {
          name: "Zones d'Activités",
          delay: "24h",
          specificities: "Enlèvement des véhicules utilitaires d'artisans (moins de 3,5T)."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Légalité de destruction",
      content: "Un véhicule abandonné sur l'espace public est passible de poursuites. Nous le remorquons pour vous jusqu'à un **centre de traitement VHU agréé** pour qu'il y soit détruit en bonne et due forme."
    },
    {
      type: 'Cta',
      title: "Ne laissez pas votre épave",
      subtitle: "Contactez-nous pour l'enlèvement gratuit à Meaux."
    }
  ]
}
