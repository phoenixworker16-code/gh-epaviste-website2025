import { PageData } from '../types'

export const melunData: PageData = {
  slug: 'melun',
  entityType: 'City',
  metaTitle: "Épaviste Melun (77) | Enlèvement d'Épave Gratuit",
  metaDescription: "Service d'épaviste gratuit à Melun (77000). Remorquage de voitures en panne, accidentées. Traitement en centre VHU agréé. Tél : 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-gratuit",
    "enlevement-voiture-accidentee"
  ],
  relatedCitiesSlugs: [
    "seine-et-marne",
    "le-mee-sur-seine", "dammarie-les-lys", "vaux-le-penil"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste gratuit sur Melun (77000)",
      subtitle: "Remorquage et destruction certifiée pour tous les VHU dans la préfecture de Seine-et-Marne.",
      badge: "Melun (77000)"
    },
    {
      type: 'Introduction',
      title: "Un service de proximité à Melun",
      content: "Ville centre d'une vaste agglomération, Melun connaît des problématiques de stationnement en hyper-centre mais aussi dans les quartiers plus périphériques (Almont, Schuman). GH Épaviste enlève votre véhicule hors d'usage gratuitement."
    },
    {
      type: 'DocsPreparation',
      title: "Démarches simplifiées",
      intro: "La préfecture de Melun demande une traçabilité parfaite. Préparez simplement :",
      specialCase: "Certificat de non-gage de moins de 15 jours, pièce d'identité valide, et carte grise originale."
    },
    {
      type: 'VhuCompliance',
      title: "Dépollution réglementaire",
      content: "Votre véhicule sera transporté dans un **centre VHU agréé** pour sécuriser les fluides et métaux lourds. La législation est très stricte sur ce point, et nous en sommes les garants logistiques."
    },
    {
      type: 'Cta',
      title: "Faites enlever votre épave à Melun",
      subtitle: "Appelez GH Épaviste pour une intervention sous 24 à 48h."
    }
  ]
}
