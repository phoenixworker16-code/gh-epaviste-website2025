import { PageData } from '../types'

export const vitrySurSeineData: PageData = {
  slug: 'vitry-sur-seine',
  entityType: 'City',
  metaTitle: "Épaviste Vitry-sur-Seine (94) | Enlèvement Épave Gratuit",
  metaDescription: "Besoin d'un épaviste à Vitry-sur-Seine (94400) ? Enlèvement gratuit de véhicules. Partenaire filière VHU. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-gratuit",
    "enlevement-voiture-accidentee"
  ],
  relatedCitiesSlugs: [
    "val-de-marne",
    "ivry-sur-seine", "choisy-le-roi", "alfortville"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste Vitry-sur-Seine (94400)",
      subtitle: "Remorquage gratuit de VHU sur toute la commune de Vitry.",
      badge: "Vitry-sur-Seine (94400)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Intervention rapide à Vitry",
      content: "Que votre épave soit dans un quartier pavillonnaire ou au pied d'une barre d'immeuble, nous disposons des camions adaptés. GH Épaviste garantit un service gratuit et un accompagnement dans vos formalités."
    },
    {
      type: 'DocsPreparation',
      title: "Papiers nécessaires",
      intro: "Prévoyez le jour J :",
      specialCase: "Carte grise originale barrée 'cédée pour destruction', copie recto/verso de la pièce d'identité du titulaire, certificat de situation administrative."
    },
    {
      type: 'VhuCompliance',
      title: "Conformité et écologie",
      content: "Nous travaillons uniquement avec un **centre VHU agréé**. Il dépolluera la voiture (huiles, batterie) pour éviter toute contamination des sols, conformément à la réglementation environnementale."
    },
    {
      type: 'Cta',
      title: "Faites de la place à Vitry-sur-Seine",
      subtitle: "Appelez-nous."
    }
  ]
}
