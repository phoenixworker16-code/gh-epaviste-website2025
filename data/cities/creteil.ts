import { PageData } from '../types'

export const creteilData: PageData = {
  slug: 'creteil',
  entityType: 'City',
  metaTitle: "Épaviste Créteil (94) | Enlèvement d'Épave Gratuit",
  metaDescription: "Épaviste gratuit à Créteil (94000). Remorquage de voitures en panne ou accidentées. Procédure VHU légale garantie. Contactez-nous au 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-gratuit",
    "enlevement-voiture-sans-assurance"
  ],
  relatedCitiesSlugs: [
    "val-de-marne",
    "choisy-le-roi", "maisons-alfort", "bonneuil-sur-marne"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste gratuit à Créteil (94000)",
      subtitle: "Enlèvement d'épave rapide pour libérer les places de stationnement à Créteil et alentours.",
      badge: "Créteil (94000)",
      bgType: 'city'
    },
    {
      type: 'Introduction',
      title: "Épaviste au cœur du Val-de-Marne",
      content: "Préfecture du 94, Créteil abrite le grand lac, des quartiers résidentiels denses (Mont-Mesly, l'Échat) et le pôle universitaire. Une voiture immobilisée prend une place précieuse. GH Épaviste intervient pour retirer votre véhicule de manière 100% gratuite."
    },
    {
      type: 'ZfeAlert',
      title: "Restriction ZFE-m",
      content: "Comme le reste de la petite couronne, Créteil est impacté par la ZFE. Si votre vieille voiture diesel ne peut plus rouler, l'enlèvement pour destruction est le meilleur choix économique.",
      level: 'info'
    },
    {
      type: 'VhuCompliance',
      title: "Une destruction 100% tracée",
      content: "Faire appel à nous, c'est choisir la sécurité. Nous transportons le véhicule vers un **centre VHU agréé**. C'est le seul moyen d'obtenir l'attestation de destruction exigée par l'assurance et la préfecture."
    },
    {
      type: 'Cta',
      title: "Faites retirer votre VHU à Créteil",
      subtitle: "Prenez rendez-vous, nous gérons tout le reste."
    }
  ]
}
