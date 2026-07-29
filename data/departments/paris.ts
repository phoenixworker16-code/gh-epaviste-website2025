import { PageData } from '../types'

export const parisData: PageData = {
  slug: 'paris',
  entityType: 'Department',
  metaTitle: "Enlèvement d'épave gratuit à Paris (75) | Épaviste Intra-Muros",
  metaDescription: "Service d'enlèvement d'épave gratuit dans les 20 arrondissements de Paris. Intervention en sous-sol, gestion ZFE-m. Partenaire centre VHU agréé. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-gratuit", 
    "enlevement-epave-parking-souterrain", 
    "enlevement-voiture-sans-carte-grise", 
    "demarches-administratives-vhu"
  ],
  relatedCitiesSlugs: [
    "boulogne-billancourt", "clichy", "levallois-perret", "vincennes", "montreuil" // Villes limitrophes
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave gratuit à Paris (75)",
      subtitle: "Service premium 24h/7j intra-muros. Retrait d'épaves sur voie publique et dans les parkings souterrains parisiens.",
      badge: "Département 75 - Paris"
    },
    {
      type: 'ZfeAlert',
      title: "Impact de la ZFE-m à Paris sur votre véhicule",
      content: "La Zone à Faibles Émissions mobilité (ZFE-m) du Grand Paris s'applique de manière stricte dans la capitale. Si votre véhicule est classé Crit'Air 4, 5 ou non classé, ses jours de circulation sont comptés voire terminés. Si vous décidez de vous en séparer, GH Épaviste intervient gratuitement pour l'enlever, même s'il est immobilisé dans la rue ou dans votre parking, vous évitant ainsi des amendes de stationnement répétées.",
      level: 'warning'
    },
    {
      type: 'Introduction',
      title: "Un épaviste adapté à la densité parisienne",
      content: "Intervenir à Paris exige une logistique particulière. La densité du trafic, les rues étroites (notamment dans les arrondissements centraux comme le Marais ou Montmartre), et le stationnement majoritairement en sous-sol rendent l'enlèvement d'une épave complexe pour une dépanneuse classique.\n\nGH Épaviste a adapté sa flotte pour la capitale : nous disposons de dépanneuses surbaissées 4x4 et de treuils puissants capables d'extraire un véhicule des situations les plus difficiles. Que votre véhicule soit accidenté sur le périphérique, en panne définitive dans votre box privé, ou vandalisé sur la voie publique, nous assurons un enlèvement rapide et totalement gratuit."
    },
    {
      type: 'UndergroundParking',
      title: "Spécialiste de l'extraction en parking souterrain",
      content: "À Paris, plus de 60% des véhicules sont stationnés en sous-sol. L'extraction d'un véhicule hors d'usage (VHU) depuis un parking souterrain parisien (type Vinci, Indigo ou parking de résidence des années 70) est notre grande spécialité. Nous manœuvrons dans des rampes étroites et des espaces confinés sans endommager l'infrastructure.",
      maxHeight: "1m80"
    },
    {
      type: 'DocsPreparation',
      title: "Documents requis pour la mise au rebut à Paris",
      intro: "La Préfecture de Police de Paris est stricte concernant la destruction des VHU. Le jour de l'enlèvement, vous devrez fournir les documents suivants pour remplir le Cerfa 15776 :",
      specialCase: "Si votre véhicule a été enlevé par la fourrière parisienne, vous devez d'abord obtenir une mainlevée au commissariat avant que nous puissions intervenir. Si la carte grise a été perdue, une déclaration de perte (Cerfa 13753) visée par le commissariat est indispensable."
    },
    {
      type: 'LocalCoverage',
      title: "Délais d'intervention dans les 20 arrondissements",
      intro: "Nous quadrillons la capitale pour vous garantir une réactivité optimale, de jour comme de nuit.",
      zones: [
        {
          name: "Paris Centre (1er au 4e, 9e au 11e)",
          delay: "Sous 2h à 12h",
          specificities: "Interventions privilégiées en soirée ou très tôt le matin pour éviter les blocages de circulation."
        },
        {
          name: "Paris Périphérie (12e au 20e, 5e au 8e)",
          delay: "Sous 12h à 24h",
          specificities: "Accès facilité par les axes majeurs (Boulevards des Maréchaux, Périphérique)."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Partenaire de la filière VHU agréée",
      content: "GH Épaviste intervient en tant que prestataire de collecte. Nous ne stockons pas les véhicules sur la voie publique. Votre épave est immédiatement remorquée vers un **centre VHU agréé partenaire** situé en périphérie de Paris. Ce centre est le seul habilité par la préfecture pour procéder à la dépollution du véhicule (retrait des fluides toxiques, huiles, batteries) et à sa destruction physique. C'est ce même centre agréé qui émettra le certificat de destruction, garantissant l'annulation de votre immatriculation."
    },
    {
      type: 'Copropriety',
      title: "Gestion des épaves en copropriété parisienne",
      content: "Une épave abandonnée dans la cour de votre immeuble haussmannien ou dans le parking de votre copropriété ? Le syndic doit entamer une procédure de mise en demeure. Une fois l'autorisation de la police obtenue (véhicule considéré comme épave), GH Épaviste peut intervenir pour enlever le véhicule gratuitement à la demande du syndic."
    },
    {
      type: 'VehicleTypes',
      title: "Véhicules pris en charge",
      accepted: [
        "Citadines et berlines",
        "Deux-roues (Motos & Scooters)",
        "Utilitaires légers (<3.5T)",
        "Véhicules électriques",
        "Véhicules de collection HS"
      ]
    },
    {
      type: 'TipsAndMistakes',
      title: "Conseils pour un enlèvement réussi à Paris",
      tips: [
        "Prévenez le gardien de votre immeuble de notre arrivée pour faciliter l'accès.",
        "Si le véhicule est sur la voie publique, gardez votre ticket de stationnement valide jusqu'à l'enlèvement.",
        "Assurez-vous que les pneus soient gonflés si possible, cela facilite le remorquage en sous-sol."
      ],
      mistakes: [
        "Laisser l'assurance courir : résiliez-la dès réception du certificat de cession.",
        "Désosser le véhicule sur le trottoir (fortement verbalisé à Paris).",
        "Vendre le véhicule pour pièces (illégal sans statut de professionnel)."
      ]
    },
    {
      type: 'FaqLocal',
      title: "Foire Aux Questions - Paris (75)",
      questions: [
        {
          q: "Puis-je bénéficier de la prime à la conversion en détruisant ma voiture à Paris ?",
          a: "Oui. Étant donné que nous confions votre véhicule à un centre VHU agréé partenaire, vous recevrez le certificat de destruction nécessaire pour constituer votre dossier de prime à la conversion ou d'aide de la Métropole du Grand Paris."
        },
        {
          q: "L'enlèvement est-il payant le week-end ?",
          a: "Non. GH Épaviste maintient la gratuité totale de l'enlèvement d'épave à Paris 7 jours sur 7, week-ends et jours fériés inclus."
        },
        {
          q: "Que faire de mon assurance habitation si le véhicule a brûlé dans mon parking ?",
          a: "Vous devez d'abord déclarer le sinistre. L'expert passera examiner le véhicule. Une fois son accord donné pour la destruction, nous intervenons pour l'évacuation, souvent en coordination avec la copropriété pour le nettoyage des suies."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Libérez votre place de stationnement aujourd'hui",
      subtitle: "Appelez-nous pour planifier le retrait gratuit de votre VHU à Paris intra-muros."
    }
  ]
}
