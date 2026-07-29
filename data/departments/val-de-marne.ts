import { PageData } from '../types'

export const valDeMarneData: PageData = {
  slug: 'val-de-marne',
  entityType: 'Department',
  metaTitle: "Épaviste Gratuit Val-de-Marne (94) | Enlèvement Rapide",
  metaDescription: "Faites appel à GH Épaviste pour un enlèvement d'épave gratuit dans le 94 (Créteil, Vitry, Champigny). Intervention sécurisée en sous-sol. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-gratuit",
    "demarches-administratives-vhu",
    "enlevement-epave-parking-souterrain"
  ],
  relatedCitiesSlugs: [
    "creteil", "vitry-sur-seine", "champigny-sur-marne", "saint-maur-des-fosses", "ivry-sur-seine"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Votre Épaviste dans le Val-de-Marne (94)",
      subtitle: "Un service d'enlèvement de véhicules gratuit, réactif et respectueux de la loi.",
      badge: "Département 94 - Val-de-Marne",
      bgType: 'city'
    },
    {
      type: 'Introduction',
      title: "Assistance rapide pour l'enlèvement VHU dans le 94",
      content: "Le Val-de-Marne, de par sa proximité immédiate avec Paris, présente un trafic routier très dense. Un véhicule hors d'usage stationné trop longtemps dans les rues de Créteil, Vitry-sur-Seine ou Champigny-sur-Marne vous expose rapidement à des verbalisations, voire une mise en fourrière onéreuse.\n\nNotre mission chez GH Épaviste est de vous éviter ces tracas. Nous récupérons gratuitement tout véhicule (auto, moto, utilitaire léger) en état d'épave, accidenté ou simplement en panne irréparable. Notre proximité nous permet d'intervenir souvent dans la journée."
    },
    {
      type: 'DocsPreparation',
      title: "Préparez l'enlèvement dans le Val-de-Marne",
      intro: "La cession pour destruction est encadrée. Nous vous aiderons à remplir le Cerfa 15776 (certificat de cession). Avant notre arrivée, rassemblez :",
      specialCase: "Si le propriétaire est décédé (succession), il faut réunir une attestation du notaire, l'accord des héritiers, et le certificat de décès. Nous avons l'habitude d'accompagner ces dossiers délicats."
    },
    {
      type: 'LocalCoverage',
      title: "Nos secteurs phares dans le Val-de-Marne",
      intro: "Une couverture totale pour ne laisser aucune épave encombrer le 94.",
      zones: [
        {
          name: "Secteur Nord-Ouest (Ivry, Vitry, Villejuif)",
          delay: "Sous 24 heures",
          specificities: "Secteurs denses où nous privilégions les petits gabarits de dépanneuses."
        },
        {
          name: "Secteur Centre (Créteil, Choisy, Maisons-Alfort)",
          delay: "Sous 24 heures",
          specificities: "Réactivité optimale."
        },
        {
          name: "Secteur Est (Champigny, Saint-Maur)",
          delay: "Sous 24 à 48 heures",
          specificities: "Gestion des accès résidentiels et pavillonnaires."
        }
      ]
    },
    {
      type: 'TipsAndMistakes',
      title: "Nos conseils pour le 94",
      tips: [
        "Récupérez votre macaron d'assurance et de contrôle technique avant que nous chargions la voiture.",
        "Si l'épave est au fond d'une allée pavillonnaire étroite, prévenez-nous pour que nous adaptions le câble de treuillage."
      ],
      mistakes: [
        "Vouloir emmener soi-même le véhicule : le tractage par corde ou barre est illégal sur la voie publique si vous n'êtes pas un professionnel du remorquage.",
        "Attendre de recevoir une contravention de stationnement très gênant."
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Un traitement VHU 100% encadré",
      content: "Il est primordial de s'assurer de la destination de votre épave. GH Épaviste ne pratique pas la vente de pièces illégale dans la rue. Nous collectons votre véhicule et le déposons dans un **centre de traitement VHU agréé**. C'est ce partenaire qui est officiellement mandaté par la préfecture pour effectuer la dépollution du véhicule (fluides, climatisation, huiles) et l'émission de l'attestation de destruction."
    },
    {
      type: 'FaqLocal',
      title: "Foire Aux Questions - Val-de-Marne",
      questions: [
        {
          q: "Reprenez-vous les utilitaires des artisans du BTP ?",
          a: "Absolument. Nous prenons en charge les utilitaires légers (moins de 3,5T). Pour une entreprise (artisan, SAS, SARL), pensez à préparer le Kbis de la société."
        },
        {
          q: "Puis-je vous confier ma voiture même si elle n'a plus de contrôle technique depuis 5 ans ?",
          a: "Oui, la mise au rebut d'un véhicule (procédure VHU) n'exige en aucun cas que le contrôle technique soit à jour."
        },
        {
          q: "Est-ce gratuit même si on habite à l'extrémité du Val-de-Marne ?",
          a: "Oui, la promesse de gratuité s'applique à la totalité des communes du département 94."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Faites appel à GH Épaviste dans le 94",
      subtitle: "Un appel, un rendez-vous, et votre épave n'est plus qu'un mauvais souvenir."
    }
  ]
}
