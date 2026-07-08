import { PageData } from '../types'

export const seineEtMarneData: PageData = {
  slug: 'seine-et-marne',
  entityType: 'Department',
  metaTitle: "Épaviste Seine-et-Marne (77) | Enlèvement d'Épave Gratuit 7j/7",
  metaDescription: "Besoin de faire enlever votre épave dans le 77 ? GH Épaviste intervient gratuitement dans toute la Seine-et-Marne. Centre VHU partenaire. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-utilitaire-epave",
    "enlevement-epave-gratuit",
    "enlevement-vehicule-sans-assurance"
  ],
  relatedCitiesSlugs: [
    "meaux", "melun", "chelles", "fontainebleau", "provins"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement gratuit de véhicules dans le 77",
      subtitle: "Intervention sur l'ensemble de la Seine-et-Marne. Particuliers et professionnels, zones urbaines et rurales.",
      badge: "Département 77 - Seine-et-Marne",
      bgType: 'nature'
    },
    {
      type: 'Introduction',
      title: "L'expertise d'un épaviste dans un grand département",
      content: "La Seine-et-Marne est le plus vaste département d'Île-de-France. Elle mêle de denses agglomérations (comme Marne-la-Vallée ou Meaux) à de vastes étendues agricoles. Cette géographie nécessite une couverture logistique performante.\n\nGH Épaviste s'est organisé pour couvrir 100% des communes du 77. Que votre véhicule (voiture, fourgonnette, utilitaire agricole léger) soit en panne au bord d'une route départementale, ou garé dans la cour d'une ferme, notre équipe dispose des dépanneuses plateaux adaptées pour effectuer un remorquage gratuit et rapide."
    },
    {
      type: 'TipsAndMistakes',
      title: "Réussir son enlèvement en Seine-et-Marne",
      tips: [
        "Dans les secteurs ruraux, assurez-vous que le chemin d'accès à l'épave est praticable pour notre dépanneuse (sol stabilisé, absence de branches basses).",
        "Préparez un justificatif de domicile si l'adresse sur la carte grise n'est pas celle où se situe le véhicule.",
        "Si l'épave est au fond d'un champ, essayez si possible de la rapprocher de la voirie carrossable."
      ],
      mistakes: [
        "Abandonner l'épave dans la nature : la législation environnementale sanctionne l'abandon d'une amende pouvant aller jusqu'à 75 000€.",
        "Donner son véhicule à un 'ferrailleur' non enregistré : vous restez pénalement responsable du véhicule."
      ]
    },
    {
      type: 'LocalCoverage',
      title: "Nos secteurs d'intervention en Seine-et-Marne",
      intro: "Nous organisons nos tournées pour minimiser l'attente, quelle que soit votre localisation dans le 77.",
      zones: [
        {
          name: "Secteur Nord (Meaux, Chelles, Marne-la-Vallée)",
          delay: "Sous 24 heures",
          specificities: "Desserte très rapide via la N3, l'A104 et l'A4."
        },
        {
          name: "Secteur Sud & Centre (Melun, Fontainebleau, Brie)",
          delay: "24 à 48 heures",
          specificities: "Regroupement des interventions pour optimiser le déplacement."
        },
        {
          name: "Secteur Est (Provins, Coulommiers)",
          delay: "Sous 48 heures",
          specificities: "Prévoir un créneau d'intervention en journée."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Écologie et respect des normes ICPE",
      content: "La Seine-et-Marne possède de nombreuses zones naturelles protégées. Les véhicules hors d'usage qui y croupissent laissent échapper des huiles de moteur, du liquide de frein et des métaux lourds dans les sols. En confiant votre épave à GH Épaviste, nous la transportons vers un centre VHU (Véhicule Hors d'Usage) agréé par la préfecture. Ce partenaire spécialisé réalisera la dépollution intégrale et vous transmettra le certificat de destruction, preuve juridique de votre démarche écologique."
    },
    {
      type: 'FaqLocal',
      title: "Vos questions sur l'enlèvement dans le 77",
      questions: [
        {
          q: "Venez-vous récupérer des vieilles camionnettes de livraison ?",
          a: "Oui, nous acceptons tous les véhicules légers et utilitaires dont le PTAC est inférieur ou égal à 3,5 tonnes, même si la carrosserie est rouillée."
        },
        {
          q: "Je suis agriculteur, retirez-vous les vieux tracteurs ?",
          a: "Non. Notre service est dédié aux véhicules immatriculés relevant de la catégorie VHU (voitures, motos, camionnettes). Les engins agricoles lourds nécessitent un ferrailleur industriel."
        },
        {
          q: "Puis-je fixer un rendez-vous le dimanche ?",
          a: "Absolument, nous opérons 7 jours sur 7 dans toute la Seine-et-Marne."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Faites place nette, gratuitement !",
      subtitle: "Appelez GH Épaviste pour enlever votre épave dans la journée en Seine-et-Marne."
    }
  ]
}
