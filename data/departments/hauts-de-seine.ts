import { PageData } from '../types'

export const hautsDeSeineData: PageData = {
  slug: 'hauts-de-seine',
  entityType: 'Department',
  metaTitle: "Épaviste Hauts-de-Seine (92) | Enlèvement Épave Gratuit",
  metaDescription: "Enlèvement d'épave gratuit dans les Hauts-de-Seine (92). Spécialiste parkings souterrains et accès difficiles. Boulogne, Nanterre, Courbevoie. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "reprise-vehicule-hors-usage",
    "enlevement-voiture-sans-carte-grise"
  ],
  relatedCitiesSlugs: [
    "boulogne-billancourt", "nanterre", "courbevoie", "colombes", "rueil-malmaison"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave gratuit Hauts-de-Seine (92)",
      subtitle: "Service d'épaviste premium en milieu très urbain. Retrait rapide en parking, sous-sol ou voirie.",
      badge: "Département 92 - Hauts-de-Seine",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "L'épaviste des environnements denses",
      content: "Les Hauts-de-Seine constituent le département le plus densément peuplé après Paris. L'espace public y est extrêmement prisé, et posséder un véhicule en panne ou hors d'usage à Nanterre, Boulogne-Billancourt ou Courbevoie devient vite un gouffre financier (amendes, frais de fourrière).\n\nFace aux contraintes du stationnement majoritairement en sous-sol ou dans des rues étroites, GH Épaviste a conçu un service sur-mesure pour le 92. Nous intervenons rapidement pour enlever gratuitement voitures, motos et utilitaires, quel que soit l'état du véhicule."
    },
    {
      type: 'ZfeAlert',
      title: "ZFE-m dans le 92",
      content: "La quasi-totalité du département des Hauts-de-Seine est incluse dans le périmètre de la Zone à Faibles Émissions délimité par l'A86. Les véhicules les plus anciens font face à des restrictions de circulation permanentes. Pour mettre au rebut un véhicule banni par la ZFE, faites appel à nous. Nous le retirons gratuitement sur place.",
      level: 'warning'
    },
    {
      type: 'UndergroundParking',
      title: "Spécialistes des sous-sols (La Défense, Résidences)",
      content: "L'architecture du 92, en particulier autour du quartier de La Défense ou dans les vastes ensembles résidentiels, impose des parkings souterrains parfois labyrinthiques. L'extraction d'un véhicule dont le moteur ne démarre plus ou dont les pneus sont à plat nécessite un équipement spécial : dépanneuses extra-basses et treuils de levage. Nous maîtrisons ces interventions sans aucun risque pour l'infrastructure.",
      maxHeight: "1m90"
    },
    {
      type: 'LocalCoverage',
      title: "Délais d'intervention dans le 92",
      intro: "La densité nous impose d'être stratégiques. Nos équipes sont réparties pour agir vite.",
      zones: [
        {
          name: "Boucle Nord (Colombes, Asnières, Gennevilliers)",
          delay: "Intervention sous 24h",
          specificities: "Desserte rapide via l'A86."
        },
        {
          name: "Centre (Nanterre, Courbevoie, Rueil)",
          delay: "Intervention sous 24h",
          specificities: "Expertise sur les parkings du quartier de La Défense."
        },
        {
          name: "Sud (Boulogne, Issy, Montrouge)",
          delay: "Intervention sous 24h",
          specificities: "Créneaux flexibles pour éviter la forte affluence routière."
        }
      ]
    },
    {
      type: 'Copropriety',
      title: "Épaves en résidence privée",
      content: "Si votre véhicule est immobilisé dans le parking de votre copropriété, prévenez simplement le gardien ou le syndic de notre passage. Si vous êtes un syndic souhaitant vous débarrasser d'un véhicule 'ventouse' abandonné par un tiers, nous vous guidons sur la procédure légale de mise en demeure à respecter avant notre intervention."
    },
    {
      type: 'VhuCompliance',
      title: "Destruction légale garantie",
      content: "Pour lutter contre la prolifération des dépôts sauvages et la pollution des sols en milieu urbain, il est impératif que les VHU soient dépollués. GH Épaviste remplit la fonction de transporteur : nous récupérons le véhicule et l'amenons directement à un **centre VHU agréé**. Ce partenaire de la filière réglementaire s'assurera de la traçabilité des déchets toxiques (huiles, plomb) et vous émettra le certificat de destruction."
    },
    {
      type: 'FaqLocal',
      title: "Vos questions : Épaviste dans le 92",
      questions: [
        {
          q: "Ma voiture a été emboutie alors qu'elle était garée dans la rue à Neuilly. Puis-je la faire enlever ?",
          a: "Oui, nous pouvons l'enlever. Assurez-vous d'avoir fait votre constat et d'avoir l'accord de votre assurance si elle prend en charge le sinistre, car l'enlèvement est irréversible."
        },
        {
          q: "Le véhicule est au -3 d'un parking très bas (1m85). Pouvez-vous intervenir ?",
          a: "Oui, nos 4x4 d'intervention sont conçus spécifiquement pour passer sous les portiques de 1m85 et 1m90 très fréquents dans les Hauts-de-Seine."
        },
        {
          q: "L'intervention est-elle payante si le véhicule est difficile d'accès ?",
          a: "Non, notre engagement d'enlèvement gratuit tient même si l'extraction depuis un parking souterrain s'avère complexe."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Libérez votre espace de stationnement",
      subtitle: "Appelez-nous pour planifier l'enlèvement de votre véhicule dans les Hauts-de-Seine."
    }
  ]
}
