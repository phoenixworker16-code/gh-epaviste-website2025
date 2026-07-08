import { PageData } from '../types'

export const massyData: PageData = {
  slug: 'massy',
  entityType: 'City',
  metaTitle: "Épaviste Massy (91) | Enlèvement d'Épave Gratuit",
  metaDescription: "Faites enlever gratuitement votre épave à Massy (91300). Intervention rapide, même en parking souterrain. Démarches légales assurées. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "certificat-cession-vehicule"
  ],
  relatedCitiesSlugs: [
    "essonne",
    "palaiseau", "chilly-mazarin", "antony"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste gratuit sur Massy (91300)",
      subtitle: "Un service de collecte de véhicules hors d'usage sur Massy et l'agglomération de Paris-Saclay.",
      badge: "Massy (91300)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Libérez votre place de stationnement",
      content: "Pôle économique et hub de transport (Gare TGV, RER B et C), Massy voit transiter des milliers de véhicules. Un véhicule en panne sur le parking de la gare, dans le quartier Atlantis ou dans une résidence d'Opéra nécessitera très vite d'être évacué. GH Épaviste s'en charge gratuitement."
    },
    {
      type: 'VhuCompliance',
      title: "Démarche éco-responsable",
      content: "Nous acheminons les véhicules récupérés à Massy vers un **centre de traitement VHU agréé**. C'est là qu'intervient la dépollution (retrait de la batterie, des huiles et liquides toxiques) avant la destruction finale, en toute légalité."
    },
    {
      type: 'FaqLocal',
      title: "F.A.Q Massy",
      questions: [
        {
          q: "Ma voiture est au -2 du parking du quartier Atlantis, est-ce possible ?",
          a: "Oui, nous disposons d'un 4x4 de remorquage surbaissé, parfait pour manœuvrer dans les parkings souterrains récents."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Une épave à enlever sur Massy ?",
      subtitle: "Un seul numéro pour prendre rendez-vous."
    }
  ]
}
