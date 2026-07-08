import { PageData } from '../types'

export const evryCourcouronnesData: PageData = {
  slug: 'evry-courcouronnes',
  entityType: 'City',
  metaTitle: "Épaviste Évry-Courcouronnes (91) | Enlèvement Épave Gratuit",
  metaDescription: "Enlèvement gratuit de voitures, motos et épaves sur Évry-Courcouronnes (91000). Sous-sol, voie publique. Centre VHU partenaire. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "enlevement-voiture-brulee"
  ],
  relatedCitiesSlugs: [
    "essonne",
    "corbeil-essonnes", "ris-orangis", "lisses"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste Évry-Courcouronnes (91)",
      subtitle: "Intervention rapide et 100% gratuite dans la préfecture de l'Essonne.",
      badge: "Évry-Courcouronnes (91000)",
      bgType: 'urban'
    },
    {
      type: 'Introduction',
      title: "Un service de remorquage gratuit",
      content: "À Évry-Courcouronnes, le stationnement peut s'avérer complexe, particulièrement aux abords du Centre-Ville, de l'Université ou des quartiers denses. GH Épaviste intervient rapidement pour enlever tout type de véhicules (accidentés, calcinés, pannes irréparables) sans que cela ne vous coûte un centime."
    },
    {
      type: 'UndergroundParking',
      title: "Extraction en parking d'Évry",
      content: "Les dalles et parkings souterrains d'Évry exigent une logistique spécifique (dépanneuses extra-basses). Nous sommes équipés pour ces interventions difficiles.",
      maxHeight: "1m90"
    },
    {
      type: 'VhuCompliance',
      title: "Filière VHU Agréée",
      content: "Chaque épave collectée par nos soins est obligatoirement déposée en **centre VHU agréé**. C'est une obligation légale que nous respectons scrupuleusement pour protéger l'environnement urbain d'Évry."
    },
    {
      type: 'Cta',
      title: "Enlevez votre épave à Évry-Courcouronnes",
      subtitle: "Planifiez votre intervention gratuite dès maintenant."
    }
  ]
}
