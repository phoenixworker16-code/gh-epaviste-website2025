import { PageData } from '../types'

export const valDoiseData: PageData = {
  slug: 'val-doise',
  entityType: 'Department',
  metaTitle: "Épaviste Val-d'Oise (95) | Enlèvement Épave Gratuit 24h",
  metaDescription: "Faites enlever gratuitement votre épave dans tout le Val-d'Oise (95). De Cergy à Sarcelles, GH Épaviste intervient rapidement et légalement. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-utilitaire-epave",
    "reprise-vehicule-hors-usage",
    "enlevement-voiture-sans-carte-grise"
  ],
  relatedCitiesSlugs: [
    "cergy", "argenteuil", "sarcelles", "garges-les-gonesse", "pontoise"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave gratuit dans le Val-d'Oise (95)",
      subtitle: "Un épaviste réactif pour débarrasser vos épaves et véhicules en panne sur tout le territoire du 95.",
      badge: "Département 95 - Val-d'Oise",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Service d'épaviste gratuit dans le Val-d'Oise",
      content: "Le Val-d'Oise présente deux visages : des zones fortement urbanisées comme Argenteuil, Sarcelles ou l'agglomération de Cergy-Pontoise, et des espaces beaucoup plus ruraux comme le parc naturel du Vexin. Qu'il s'agisse de dégager un vieux véhicule ventouse du parking de votre résidence, ou de retirer un utilitaire accidenté sur une départementale, l'expertise logistique est de mise.\n\nGH Épaviste vous propose l'enlèvement gratuit de voitures, motos ou camionnettes (VHU). Dès que le véhicule n'est plus apte à circuler (moteur cassé, chocs, incendie), nous prenons le relais."
    },
    {
      type: 'VehicleTypes',
      title: "Tous types de véhicules légers",
      accepted: [
        "Véhicules de tourisme (berlines, citadines)",
        "Fourgonnettes et petits utilitaires",
        "Motos et Scooters (125cc ou plus)",
        "Véhicules électriques",
        "Voitures de société"
      ]
    },
    {
      type: 'ZfeAlert',
      title: "Crit'Air et mise au rebut dans le 95",
      content: "Si le véhicule que vous possédez est devenu trop ancien pour les normes actuelles et que vous souhaitez acquérir un véhicule propre, l'enlèvement d'épave est la première étape de la Prime à la Conversion. Notre prestation aboutit toujours à la création d'un certificat de destruction qui vous permettra de faire valoir vos aides d'État.",
      level: 'info'
    },
    {
      type: 'LocalCoverage',
      title: "Intervention rapide sur l'ensemble du 95",
      intro: "Nos équipes d'intervention rayonnent dans tout le Val-d'Oise.",
      zones: [
        {
          name: "Vallée de Montmorency & Argenteuil",
          delay: "Sous 24h",
          specificities: "Forte densité, interventions possibles en heures creuses."
        },
        {
          name: "Agglomération de Cergy-Pontoise",
          delay: "Sous 24h",
          specificities: "Desserte optimale via l'A15."
        },
        {
          name: "Vexin Français et Nord 95",
          delay: "Sous 24 à 48h",
          specificities: "Nous couvrons également les zones les plus rurales."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Évitez la fraude, choisissez la filière VHU",
      content: "Céder son véhicule à un acheteur de 'ferraille' non enregistré est risqué. L'acheteur pourrait abandonner la carcasse après en avoir pris les pièces, et vous resteriez responsable pénalement. GH Épaviste, en tant que partenaire de collecte, s'engage à acheminer votre épave exclusivement vers un **centre agréé VHU**. Seul ce centre a l'autorisation préfectorale de détruire le véhicule et de vous décharger de votre responsabilité via le certificat officiel (ANTS)."
    },
    {
      type: 'FaqLocal',
      title: "Foire Aux Questions - Val-d'Oise",
      questions: [
        {
          q: "Je n'ai plus la carte grise, que dois-je faire ?",
          a: "Si elle a été perdue, une déclaration de perte auprès de la police (Cerfa 13753) sera requise pour l'enlèvement. Si le véhicule est un don sans papiers que vous n'avez pas immatriculé, la procédure VHU est bloquée légalement."
        },
        {
          q: "Le véhicule est embourbé dans un jardin dans le Vexin, pouvez-vous le sortir ?",
          a: "Si la dépanneuse peut approcher à moins de 15/20 mètres sur un sol dur, notre treuil devrait suffire. Il faudra confirmer la configuration avec nous par téléphone."
        },
        {
          q: "Retirez-vous les caravanes hors d'usage ?",
          a: "Non. Le recyclage des caravanes est très spécifique (fibre de verre, amiante parfois) et n'est pas pris en charge par notre service gratuit."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Enlèvement gratuit dans le Val-d'Oise",
      subtitle: "Contactez-nous pour planifier votre intervention dès aujourd'hui."
    }
  ]
}
