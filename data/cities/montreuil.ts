import { PageData } from '../types'

export const montreuilData: PageData = {
  slug: 'montreuil',
  entityType: 'City',
  metaTitle: "Épaviste Montreuil (93) | Enlèvement Épave Gratuit",
  metaDescription: "Retrait gratuit d'épaves sur Montreuil (93100). Enlèvement en sous-sol et rues étroites. Centre VHU partenaire. Appelez GH Épaviste au 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "enlevement-utilitaire-epave"
  ],
  relatedCitiesSlugs: [
    "seine-saint-denis",
    "bagnolet", "vincennes", "fontenay-sous-bois"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste gratuit sur Montreuil (93100)",
      subtitle: "Un service de retrait de véhicules réactif, couvrant l'ensemble des quartiers montreuillois.",
      badge: "Montreuil (93100)"
    },
    {
      type: 'Introduction',
      title: "L'expertise logistique à Montreuil",
      content: "Montreuil est la ville la plus peuplée du 93. Son réseau de rues très escarpées (secteur Murs à Pêches) et ses multiples parkings souterrains (Croix de Chavaux, Mairie) demandent des dépanneuses adaptées. Nous garantissons un enlèvement rapide et sûr de votre épave, sans bloquer la circulation."
    },
    {
      type: 'TipsAndMistakes',
      title: "Ce qu'il faut savoir",
      tips: [
        "Vérifiez que vous avez le certificat de non-gage de moins de 15 jours.",
        "Signalez-nous si le véhicule est garé dans une rue à sens unique très étroite."
      ],
      mistakes: [
        "Laisser l'épave sur un trottoir : amende majorée assurée."
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Un traitement VHU encadré",
      content: "Nous ne stockons aucune pièce. GH Épaviste récupère l'épave et la transporte directement chez notre **centre VHU agréé partenaire**. Vous obtenez la certitude d'une destruction légale et écologique."
    },
    {
      type: 'Cta',
      title: "Une épave à débarrasser à Montreuil ?",
      subtitle: "Contactez-nous pour un rdv immédiat."
    }
  ]
}
