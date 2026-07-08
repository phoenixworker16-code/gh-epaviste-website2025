import { PageData } from '../types'

export const nanterreData: PageData = {
  slug: 'nanterre',
  entityType: 'City',
  metaTitle: "Épaviste Nanterre (92) | Enlèvement d'Épave Gratuit",
  metaDescription: "Service d'enlèvement d'épave à Nanterre (92000). Récupération gratuite de voitures, utilitaires, motos. Centre VHU partenaire. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "enlevement-vehicule-sans-controle-technique"
  ],
  relatedCitiesSlugs: [
    "hauts-de-seine",
    "puteaux", "courbevoie", "colombes", "rueil-malmaison"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste Gratuit à Nanterre (92000)",
      subtitle: "Nous enlevons rapidement votre VHU partout à Nanterre (Centre, La Défense, Université).",
      badge: "Nanterre (92000)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Un épaviste adapté à Nanterre",
      content: "Ville préfecture des Hauts-de-Seine, Nanterre mixe vastes ensembles résidentiels, pôle universitaire et quartiers d'affaires. Une voiture en panne dans les sous-sols de La Défense ou dans une rue du Vieux Pont nécessite l'intervention d'un épaviste équipé. GH Épaviste intervient sans frais."
    },
    {
      type: 'ZfeAlert',
      title: "ZFE et Crit'Air",
      content: "Nanterre, située à l'intérieur de l'A86, est strictement soumise à la ZFE du Grand Paris. Les anciens véhicules polluants ne peuvent plus circuler. Nous les enlevons pour vous afin d'enclencher la procédure de destruction officielle.",
      level: 'warning'
    },
    {
      type: 'VhuCompliance',
      title: "Destruction dans les règles de l'art",
      content: "Pas de dépôts sauvages. En nous confiant votre épave, elle est directement remorquée vers un **centre VHU agréé**. Ce partenaire officiel garantit le recyclage des métaux et la création du certificat de destruction administratif."
    },
    {
      type: 'Cta',
      title: "Épave à enlever à Nanterre ?",
      subtitle: "L'intervention est gratuite. Contactez-nous."
    }
  ]
}
