import { PageData } from '../types'

export const boulogneBillancourtData: PageData = {
  slug: 'boulogne-billancourt',
  entityType: 'City',
  metaTitle: "Épaviste Boulogne-Billancourt (92) | Enlèvement d'Épave Gratuit",
  metaDescription: "Enlèvement d'épave gratuit à Boulogne-Billancourt (92100). Intervention rapide en sous-sol et voie publique. Service conforme VHU. Appelez le 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain", 
    "enlevement-epave-gratuit", 
    "reprise-vehicule-hors-usage"
  ],
  relatedCitiesSlugs: [
    "hauts-de-seine", // Parent department
    "issy-les-moulineaux", 
    "saint-cloud", 
    "sevres" // Villes limitrophes
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave gratuit à Boulogne-Billancourt",
      subtitle: "Service d'épaviste rapide et 100% gratuit dans tous les quartiers de Boulogne-Billancourt (92100).",
      badge: "Boulogne-Billancourt (92100)"
    },
    {
      type: 'Introduction',
      title: "Votre épaviste de proximité à Boulogne-Billancourt",
      content: "La ville de Boulogne-Billancourt est l'une des communes les plus denses d'Île-de-France. Trouver une place de stationnement y est un défi quotidien, et y laisser un véhicule hors d'usage (VHU) immobilisé peut rapidement vous coûter cher en amendes ou frais de fourrière.\n\nQue vous habitiez près du Pont de Sèvres, dans le quartier des Passages, ou vers Marcel Sembat, GH Épaviste intervient dans les meilleurs délais pour retirer gratuitement votre véhicule."
    },
    {
      type: 'UndergroundParking',
      title: "Extraction de votre épave en parking souterrain",
      content: "De très nombreuses résidences à Boulogne-Billancourt disposent de parkings souterrains avec des rampes exiguës. Nos dépanneuses surbaissées 4x4 sont spécifiquement conçues pour ce type d'environnement. Nous pouvons extraire votre véhicule en panne ou accidenté même si celui-ci se trouve au 3ème sous-sol d'un parking résidentiel étroit.",
      maxHeight: "1m90"
    },
    {
      type: 'LocalCoverage',
      title: "Intervention rapide dans tous les quartiers",
      intro: "Nos dépanneuses sillonnent quotidiennement les Hauts-de-Seine et Boulogne-Billancourt pour garantir une réactivité maximale.",
      zones: [
        {
          name: "Secteur Centre-Ville (Les Passages, Marcel Sembat)",
          delay: "Sous 2h à 12h",
          specificities: "Intervention privilégiée en heures creuses pour éviter les bouchons de l'Avenue du Général Leclerc."
        },
        {
          name: "Secteur Sud (Pont de Sèvres, Trapèze)",
          delay: "Sous 12h à 24h",
          specificities: "Accès facile via la N118 et les quais de Seine."
        },
        {
          name: "Secteur Nord (Roland Garros, Parchamp)",
          delay: "Sous 12h à 24h",
          specificities: "Prise en charge discrète dans les zones résidentielles."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Un traitement écologique et légal",
      content: "GH Épaviste est le prestataire logistique de confiance qui fait le lien entre vous et les **centres VHU agréés**. En nous confiant votre épave à Boulogne-Billancourt, vous avez la certitude que celle-ci ne finira pas dans une filière illégale. Elle sera dépolluée selon les normes environnementales strictes, et vous recevrez le certificat de destruction requis pour résilier votre assurance et faire valoir vos droits (ex: prime à la conversion)."
    },
    {
      type: 'FaqLocal',
      title: "Questions fréquentes : Enlèvement à Boulogne-Billancourt",
      questions: [
        {
          q: "Ma voiture a été vandalisée sur un parking de la ville, l'enlevez-vous ?",
          a: "Oui, nous pouvons retirer un véhicule vandalisé (vitres brisées, pneus crevés). Veillez toutefois à ce que le moteur soit toujours présent pour que la gratuité soit maintenue."
        },
        {
          q: "La mairie de Boulogne-Billancourt m'a mis en demeure de retirer mon véhicule, que faire ?",
          a: "Contactez-nous immédiatement. Nous planifierons un enlèvement express pour vous éviter l'envoi du véhicule en fourrière, dont les frais d'enlèvement et de garde seraient à votre charge."
        },
        {
          q: "Dois-je me déplacer à la préfecture des Hauts-de-Seine après l'enlèvement ?",
          a: "Non. Toute la procédure de cession se fait sur le site internet de l'ANTS. Nous vous fournirons le certificat de cession (Cerfa 15776) dument rempli lors de notre intervention pour réaliser cette démarche."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Ne laissez pas votre épave vous encombrer",
      subtitle: "Contactez GH Épaviste pour une intervention rapide à Boulogne-Billancourt."
    }
  ]
}
