import { PageData } from '../types'

export const saintDenisData: PageData = {
  slug: 'saint-denis',
  entityType: 'City',
  metaTitle: "Épaviste Saint-Denis (93) | Enlèvement d'Épave Gratuit",
  metaDescription: "Épaviste gratuit sur Saint-Denis (93200). Enlèvement de voitures accidentées, vandalisées. Intervention rapide. Centre VHU agréé partenaire. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-voiture-brulee",
    "enlevement-epave-gratuit"
  ],
  relatedCitiesSlugs: [
    "seine-saint-denis",
    "aubervilliers", "saint-ouen", "la-courneuve"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave à Saint-Denis (93200)",
      subtitle: "Intervention d'urgence ou sur rendez-vous pour retirer les véhicules accidentés ou épaves.",
      badge: "Saint-Denis (93200)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Votre épaviste à Saint-Denis",
      content: "La densité urbaine de Saint-Denis (Plaine Saulnier, Franc-Moisin, Stade de France) rend problématique la présence de véhicules abandonnés ou vandalisés. Ces derniers s'abîment vite et attirent les ennuis. GH Épaviste vient récupérer votre voiture, utilitaire ou moto, quel que soit son état, gratuitement."
    },
    {
      type: 'VehicleTypes',
      title: "VHU pris en charge",
      accepted: [
        "Véhicules en panne irréparable",
        "Véhicules accidentés",
        "Véhicules calcinés (avec déclaration)",
        "Utilitaires légers"
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Respect de la loi",
      content: "Attention au marché noir de la pièce détachée. En passant par GH Épaviste, votre véhicule est remis à un **centre VHU agréé**. Il y sera broyé et recyclé selon les normes, garantissant la fin de votre responsabilité civile."
    },
    {
      type: 'Cta',
      title: "Faites enlever votre épave",
      subtitle: "Appelez GH Épaviste pour une prise en charge sur Saint-Denis."
    }
  ]
}
