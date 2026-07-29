import { PageData } from '../types'

export const seineSaintDenisData: PageData = {
  slug: 'seine-saint-denis',
  entityType: 'Department',
  metaTitle: "Épaviste Seine-Saint-Denis (93) | Enlèvement Épave Rapide & Gratuit",
  metaDescription: "Enlèvement d'épave gratuit dans tout le 93 (Seine-Saint-Denis). Voitures accidentées, brûlées ou pannes définitives. Montreuil, St-Denis. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-voiture-brulee",
    "remorquage-epave-urgence",
    "enlevement-vehicule-sans-controle-technique"
  ],
  relatedCitiesSlugs: [
    "saint-denis", "montreuil", "aubervilliers", "aulnay-sous-bois", "drancy"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave gratuit en Seine-Saint-Denis (93)",
      subtitle: "Intervention rapide et sécurisée sur les 40 communes du 93. Voitures, utilitaires et motos hors d'usage.",
      badge: "Département 93 - Seine-Saint-Denis",
      bgType: 'city'
    },
    {
      type: 'Introduction',
      title: "Un service réactif pour dépolluer le 93",
      content: "La Seine-Saint-Denis est un département dense où les véhicules hors d'usage (VHU) abandonnés sur la voie publique, dans les cités ou sur les terrains vagues créent de réelles nuisances (sécurité, environnement, esthétisme).\n\nGH Épaviste intervient avec rapidité dans tout le département. Que votre véhicule soit vandalisé, incendié, accidenté suite à un choc ou simplement en fin de course avec un moteur HS, nous le retirons gratuitement. Notre but : assainir l'espace public et privé avec efficacité et professionnalisme."
    },
    {
      type: 'VehicleTypes',
      title: "Les profils de véhicules que nous enlevons dans le 93",
      accepted: [
        "Véhicules accidentés (chocs lourds)",
        "Véhicules vandalisés",
        "Véhicules calcinés (avec préavis)",
        "Utilitaires d'artisans en fin de vie",
        "Scooters et Motos hors d'usage"
      ]
    },
    {
      type: 'TipsAndMistakes',
      title: "L'enlèvement dans le 93 : à savoir",
      tips: [
        "Si votre véhicule a brûlé sur la voie publique, contactez d'abord la police pour le constat avant de nous appeler.",
        "Ayez toujours avec vous le certificat de non-gage imprimé ou en PDF sur votre téléphone.",
        "Prévenez le gardiennage de votre immeuble (pour les résidences HLM ou privées) afin qu'il facilite le passage de notre dépanneuse."
      ],
      mistakes: [
        "Laisser le véhicule se dégrader dans la rue : vous êtes responsable des dommages causés par votre véhicule même si vous ne l'utilisez plus.",
        "Le vendre sans carte grise : c'est strictement interdit et vous expose à des poursuites."
      ]
    },
    {
      type: 'LocalCoverage',
      title: "Interventions rapides sur tous les secteurs du 93",
      intro: "Nous connaissons parfaitement le maillage routier (A86, A1, A3) pour intervenir rapidement.",
      zones: [
        {
          name: "Plaine Commune (St-Denis, Aubervilliers, St-Ouen)",
          delay: "Sous 24h",
          specificities: "Intervention experte dans les environnements urbains denses."
        },
        {
          name: "Est Ensemble (Montreuil, Pantin, Bobigny)",
          delay: "Sous 24h",
          specificities: "Réseau de dépanneuses adaptées aux rues étroites."
        },
        {
          name: "Grand Paris Grand Est (Aulnay, Noisy-le-Grand)",
          delay: "Sous 24h",
          specificities: "Desserte rapide pour les véhicules utilitaires."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Partenariat Centre VHU et Légalité",
      content: "GH Épaviste agit en tant qu'opérateur de collecte. Lors de l'enlèvement, nous cosignons avec vous le certificat de cession (Cerfa 15776). Le véhicule est ensuite tracté jusqu'à un **centre de destruction VHU agréé**. C'est cet établissement partenaire, seul habilité, qui gèrera le recyclage des métaux, la destruction des pneus et l'émission du certificat de destruction administratif. La chaîne de traitement est 100% légale."
    },
    {
      type: 'FaqLocal',
      title: "Vos questions concernant le 93",
      questions: [
        {
          q: "Enlevez-vous des voitures dont le pot catalytique a été volé ?",
          a: "Oui. Le vol de catalyseur est hélas fréquent. Nous enlèverons le véhicule sans frais même s'il manque cette pièce, tant que le véhicule reste globalement complet (moteur présent)."
        },
        {
          q: "La carte grise est à mon ancienne adresse, est-ce grave ?",
          a: "Non, pour la destruction, une carte grise à votre nom suffit, même si l'adresse n'a pas été mise à jour. Pensez à présenter une pièce d'identité."
        },
        {
          q: "Je n'ai pas les clés, la voiture est bloquée. Est-ce possible ?",
          a: "Oui, nos dépanneuses sont équipées de patins glisseurs et de treuils. Nous pourrons la hisser sur le plateau malgré les roues bloquées."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Un épaviste rapide pour le 93",
      subtitle: "Ne laissez plus l'épave encombrer. Contactez-nous pour fixer un rdv dans la journée."
    }
  ]
}
