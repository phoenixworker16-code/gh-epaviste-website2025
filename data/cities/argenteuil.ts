import { PageData } from '../types'

export const argenteuilData: PageData = {
  slug: 'argenteuil',
  entityType: 'City',
  metaTitle: "Épaviste Argenteuil (95) | Enlèvement d'Épave Gratuit",
  metaDescription: "Votre épaviste gratuit à Argenteuil (95100). Dépannage rapide d'épaves et VHU. Service partenaire VHU. Contact: 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "enlevement-utilitaire-epave"
  ],
  relatedCitiesSlugs: [
    "val-doise",
    "bezons", "sannois", "cormeilles-en-parisis"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Enlèvement d'épave à Argenteuil (95100)",
      subtitle: "Service d'épaviste gratuit et réactif sur toute la commune d'Argenteuil.",
      badge: "Argenteuil (95100)"
    },
    {
      type: 'Introduction',
      title: "L'épaviste de proximité à Argenteuil",
      content: "Commune la plus peuplée du Val-d'Oise, Argenteuil requiert une logistique sans faille. Entre les coteaux escarpés et les zones très urbaines (Val d'Argent), GH Épaviste retire vos épaves gratuitement grâce à une flotte de dépanneuses équipées de treuils puissants."
    },
    {
      type: 'VhuCompliance',
      title: "Dépollution réglementaire obligatoire",
      content: "Une voiture épave est un déchet dangereux. Elle doit être remise à un **centre VHU agréé** par la préfecture du Val-d'Oise. En faisant appel à GH Épaviste, nous agissons en tant que collecteur officiel pour ces centres."
    },
    {
      type: 'FaqLocal',
      title: "F.A.Q Argenteuil",
      questions: [
        {
          q: "Puis-je faire enlever une camionnette ?",
          a: "Oui, nous enlevons tous types d'utilitaires légers (PTAC < 3,5T) gratuitement."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Une épave à Argenteuil ?",
      subtitle: "Prenez rendez-vous, nous intervenons souvent sous 24h."
    }
  ]
}
