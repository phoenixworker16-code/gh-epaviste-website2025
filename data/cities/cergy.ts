import { PageData } from '../types'

export const cergyData: PageData = {
  slug: 'cergy',
  entityType: 'City',
  metaTitle: "Épaviste Cergy (95) | Enlèvement d'Épave Gratuit",
  metaDescription: "Épaviste gratuit sur Cergy (95000). Retrait rapide de véhicules accidentés ou en panne (Préfecture, St-Christophe). Appelez le 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-gratuit",
    "enlevement-voiture-accidentee"
  ],
  relatedCitiesSlugs: [
    "val-doise",
    "pontoise", "osny", "vaureal"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste Gratuit à Cergy (95000)",
      subtitle: "Intervention rapide sur l'agglomération de Cergy-Pontoise.",
      badge: "Cergy (95000)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Remorquage VHU à Cergy",
      content: "De Cergy Préfecture à Cergy Saint-Christophe, l'abandon de véhicule ventouse est un problème récurrent dans l'agglomération. GH Épaviste vous propose une solution gratuite pour retirer un VHU de la voie publique ou d'un parking résidentiel."
    },
    {
      type: 'DocsPreparation',
      title: "Cession administrative",
      intro: "La destruction légale passe par la présentation des documents suivants le jour J :",
      specialCase: "Carte grise barrée, certificat de non-gage de moins de 2 semaines, et pièce d'identité du titulaire de la carte grise."
    },
    {
      type: 'VhuCompliance',
      title: "Filière VHU Agréée",
      content: "Il est de votre responsabilité de vous assurer que l'épave n'est pas abandonnée dans la nature. Nous garantissons sa livraison dans un **centre de traitement VHU agréé** pour dépollution et recyclage."
    },
    {
      type: 'Cta',
      title: "Enlèvement gratuit sur Cergy",
      subtitle: "Appelez GH Épaviste pour un rendez-vous rapide."
    }
  ]
}
