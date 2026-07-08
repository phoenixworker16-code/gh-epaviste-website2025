import { PageData } from '../types'

export const courbevoieData: PageData = {
  slug: 'courbevoie',
  entityType: 'City',
  metaTitle: "Épaviste Courbevoie (92) | Enlèvement Épave Gratuit",
  metaDescription: "Service de remorquage et d'enlèvement d'épave gratuit à Courbevoie (92400). Intervention 24h, La Défense, parkings. Centre VHU partenaire. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "enlevement-epave-gratuit"
  ],
  relatedCitiesSlugs: [
    "hauts-de-seine",
    "puteaux", "nanterre", "la-garenne-colombes"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste sur Courbevoie (92400)",
      subtitle: "Enlèvement 100% gratuit de véhicules hors d'usage, même dans les accès très difficiles.",
      badge: "Courbevoie (92400)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Libérez l'espace à Courbevoie",
      content: "Courbevoie accueille une grande partie du quartier d'affaires de La Défense ainsi que de nombreux grands ensembles résidentiels. Le stationnement y est complexe et cher. Conserver une voiture en panne dans un parking n'a aucun sens économique. GH Épaviste vous propose son enlèvement totalement gratuit."
    },
    {
      type: 'UndergroundParking',
      title: "Les parkings de Courbevoie",
      content: "Nos dépanneuses surbaissées sont prévues pour s'infiltrer dans les parkings souterrains exigus typiques des constructions des années 70-80 à Courbevoie.",
      maxHeight: "1m90"
    },
    {
      type: 'VhuCompliance',
      title: "Traitement VHU",
      content: "Chaque véhicule est remorqué vers un **centre VHU agréé**. C'est une garantie de respect de l'environnement (dépollution) et de légalité (certificat de destruction délivré)."
    },
    {
      type: 'Cta',
      title: "Ne payez plus pour une épave",
      subtitle: "Contactez-nous pour organiser l'enlèvement gratuit à Courbevoie."
    }
  ]
}
