import { PageData } from '../types'

export const saintGermainEnLayeData: PageData = {
  slug: 'saint-germain-en-laye',
  entityType: 'City',
  metaTitle: "Épaviste Saint-Germain-en-Laye (78) | Enlèvement Épave Gratuit",
  metaDescription: "Enlèvement d'épave gratuit à Saint-Germain-en-Laye (78100). Service pro et respectueux de l'environnement (Centre VHU). Appel gratuit au 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-vehicule-hybride",
    "enlevement-epave-gratuit",
    "certificat-cession-vehicule"
  ],
  relatedCitiesSlugs: [
    "yvelines",
    "le-pecq", "chambourcy", "le-mesnil-le-roi", "marly-le-roi"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste à Saint-Germain-en-Laye",
      subtitle: "Nous retirons gratuitement votre véhicule accidenté ou en panne définitive dans tout le 78100.",
      badge: "Saint-Germain-en-Laye (78100)",
      bgType: 'nature'
    },
    {
      type: 'Introduction',
      title: "Intervention rapide et propre",
      content: "Ville forestière et résidentielle, Saint-Germain-en-Laye requiert une approche soignée. GH Épaviste intervient dans tous les quartiers (Hyper-centre, Bel-Air, Hennemont, etc.) pour procéder à l'enlèvement gratuit de véhicules (voitures, utilitaires légers, motos). Que votre véhicule soit garé dans une allée pavillonnaire étroite ou dans un parking résidentiel, nous avons la logistique adaptée."
    },
    {
      type: 'LocalCoverage',
      title: "Nous couvrons tous les quartiers",
      intro: "Une réactivité maximale garantie.",
      zones: [
        {
          name: "Centre-ville & Quartier du Château",
          delay: "Sous 24 heures",
          specificities: "Interventions avec petits gabarits pour les rues étroites."
        },
        {
          name: "Bel-Air & Lisière de Forêt",
          delay: "Sous 24 heures",
          specificities: "Accès rapides."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Protection du domaine forestier",
      content: "L'abandon d'une épave à proximité de la forêt de Saint-Germain est lourdement sanctionné. Ne prenez pas le risque d'une amende environnementale. Nous acheminons systématiquement les véhicules vers un **centre VHU agréé** pour une dépollution complète."
    },
    {
      type: 'FaqLocal',
      title: "F.A.Q. Saint-Germain-en-Laye",
      questions: [
        {
          q: "Puis-je bénéficier de la prime à la conversion ?",
          a: "Oui, le certificat de destruction délivré par le centre VHU agréé partenaire est le seul document officiel valable pour l'État."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Libérez votre place dès aujourd'hui",
      subtitle: "Contactez-nous pour l'enlèvement gratuit à Saint-Germain-en-Laye."
    }
  ]
}
