import { PageData } from '../types'

export const essonneData: PageData = {
  slug: 'essonne',
  entityType: 'Department',
  metaTitle: "Enlèvement d'Épave Gratuit Essonne (91) | GH Épaviste",
  metaDescription: "Service d'enlèvement d'épave gratuit dans tout le 91 (Essonne). Évry, Massy, Corbeil-Essonnes. Démarches VHU sécurisées. Appelez le 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-voiture-accidentee",
    "enlevement-voiture-brulee",
    "certificat-cession-vehicule"
  ],
  relatedCitiesSlugs: [
    "evry-courcouronnes", "massy", "corbeil-essonnes", "palaiseau", "sainte-genevieve-des-bois"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste gratuit en Essonne (91)",
      subtitle: "Nous enlevons votre auto ou moto hors d'usage dans le 91. Intervention rapide et sans aucun frais de remorquage.",
      badge: "Département 91 - Essonne"
    },
    {
      type: 'Introduction',
      title: "Votre service épaviste réactif dans l'Essonne",
      content: "L'Essonne est un département dynamique, traversé par des axes très denses comme la N20, la Francilienne (N104) et l'A6. Une voiture immobilisée sur un parking public ou privé à Évry, Massy ou Corbeil-Essonnes peut rapidement devenir une source de stress et de dépenses.\n\nEn faisant appel à GH Épaviste, vous choisissez la sérénité. Nous enlevons tout véhicule de moins de 3,5 tonnes (voitures, utilitaires, deux-roues) qu'il soit accidenté, brûlé ou simplement en fin de vie mécanique. Notre équipe vous accompagne du premier appel jusqu'à la signature du Cerfa de cession."
    },
    {
      type: 'ZfeAlert',
      title: "Circulation des véhicules polluants",
      content: "Bien que l'Essonne ne soit pas intégralement dans la ZFE de la petite couronne, l'accès à Paris et à ses abords (A6) est restreint pour les vieux véhicules diesels et essences. Si votre véhicule ne passe plus le contrôle technique ou est trop polluant pour être revendu, sa mise au rebut est souvent l'option la plus judicieuse.",
      level: 'info'
    },
    {
      type: 'TipsAndMistakes',
      title: "Conseils pratiques avant notre arrivée",
      tips: [
        "Videz tous vos effets personnels du véhicule (lunettes, badges de péage, documents dans la boîte à gants).",
        "Retirez la carte d'invalidité de stationnement ou autres macarons personnels.",
        "Préparez une copie de votre pièce d'identité et le certificat de non-gage imprimé."
      ],
      mistakes: [
        "Oublier de retirer les plaques d'immatriculation si vous souhaitez les garder en souvenir (bien que le véhicule soit détruit avec).",
        "Attendre que la mairie engage des poursuites pour véhicule ventouse."
      ]
    },
    {
      type: 'LocalCoverage',
      title: "Secteurs de l'Essonne desservis",
      intro: "Aucune commune du 91 n'est oubliée, du nord très urbanisé au sud rural.",
      zones: [
        {
          name: "Nord Essonne (Massy, Palaiseau, Les Ulis)",
          delay: "Sous 24h",
          specificities: "Secteur très dense, interventions possibles en soirée."
        },
        {
          name: "Centre Essonne (Évry, Corbeil, Brétigny)",
          delay: "Sous 24h",
          specificities: "Desserte optimale via la Francilienne."
        },
        {
          name: "Sud Essonne (Étampes, Dourdan)",
          delay: "Sous 24 à 48h",
          specificities: "Regroupement des interventions pour garantir la gratuité sur la distance."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Conformité de la destruction",
      content: "Nous tenons à vous informer que GH Épaviste est un prestataire de collecte et de transport. Nous avons noué des partenariats stricts avec des **centres VHU agréés** situés en Île-de-France. Seuls ces centres possèdent l'agrément préfectoral (numéro PR) nécessaire pour dépolluer légalement le véhicule et générer le certificat de destruction officiel que vous réclamera l'ANTS."
    },
    {
      type: 'FaqLocal',
      title: "Foire Aux Questions - Essonne",
      questions: [
        {
          q: "Ma voiture a été vandalisée sur le parking de la gare de Massy-Palaiseau, que faire ?",
          a: "Si elle ne roule plus, il faut agir vite pour éviter la fourrière. Si vous avez la carte grise, nous pouvons l'enlever. Précisez s'il manque des roues pour que nous préparions le treuil."
        },
        {
          q: "Prenez-vous les voitures calcinées ?",
          a: "Oui, un véhicule brûlé est un déchet toxique urgent à enlever. Nous avons l'équipement pour remorquer ce type de carcasse en toute sécurité."
        },
        {
          q: "Le service est-il vraiment gratuit jusqu'à Étampes ?",
          a: "Absolument. La gratuité s'applique à tout le département de l'Essonne, sans aucuns frais de déplacement cachés."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Débarrassez-vous de votre VHU en Essonne",
      subtitle: "Prenez rendez-vous dès maintenant pour un enlèvement express."
    }
  ]
}
