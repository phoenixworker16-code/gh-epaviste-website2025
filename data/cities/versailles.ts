import { PageData } from '../types'

export const versaillesData: PageData = {
  slug: 'versailles',
  entityType: 'City',
  metaTitle: "Épaviste Versailles (78) | Enlèvement Épave Gratuit 24h",
  metaDescription: "Service d'enlèvement d'épaves gratuit à Versailles (78000). Interventions discrètes, parkings souterrains et copropriétés. Contactez GH Épaviste au 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-epave-parking-souterrain",
    "enlevement-voiture-en-panne",
    "enlevement-voiture-sans-carte-grise"
  ],
  relatedCitiesSlugs: [
    "yvelines", // Parent
    "le-chesnay-rocquencourt", "viroflay", "buc", "saint-cyr-l-ecole"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Épaviste Gratuit à Versailles (78000)",
      subtitle: "Intervention sur mesure dans toute la ville royale, que vous soyez dans le centre historique ou dans les quartiers résidentiels.",
      badge: "Versailles (78000)"
    },
    {
      type: 'Introduction',
      title: "L'expertise d'un épaviste à Versailles",
      content: "La ville de Versailles présente un patrimoine historique exceptionnel, mais ses ruelles du quartier Saint-Louis ou de Notre-Dame ne sont pas toujours adaptées au passage des grosses dépanneuses. De plus, de nombreuses copropriétés privées exigent des interventions discrètes et rapides.\n\nGH Épaviste intervient avec une flotte de véhicules adaptés aux spécificités versaillaises (4x4, dépanneuses surbaissées) pour extraire gratuitement votre véhicule hors d'usage, qu'il soit stationné près du Château, à Porchefontaine ou à Montreuil."
    },
    {
      type: 'UndergroundParking',
      title: "Extraction en parking souterrain versaillais",
      content: "Si votre véhicule en panne définitive se trouve bloqué dans un parking Vinci (ex: Parking de l'Europe) ou dans le sous-sol de votre résidence, nous pouvons l'extraire. Nos dépanneuses spéciales peuvent franchir des hauteurs de 1m85 et treuiller des véhicules dont les roues sont bloquées.",
      maxHeight: "1m85"
    },
    {
      type: 'Copropriety',
      title: "Syndics de copropriété à Versailles",
      content: "Nous travaillons fréquemment avec les syndics versaillais pour assainir les cours privées et les parkings de résidences encombrés par des véhicules 'ventouses'. Nous vous guidons dans les démarches administratives pour vous protéger légalement avant l'enlèvement."
    },
    {
      type: 'VhuCompliance',
      title: "Une mise au rebut écologique et réglementaire",
      content: "La préservation de l'environnement est essentielle. GH Épaviste est le garant que votre épave sera dépolluée selon les normes en vigueur par un **centre VHU agréé**. Le certificat de destruction remis attestera de l'annulation de l'immatriculation."
    },
    {
      type: 'FaqLocal',
      title: "Questions sur l'enlèvement à Versailles",
      questions: [
        {
          q: "Ma voiture est stationnée dans une rue en pente près de l'Orangerie, pouvez-vous la treuiller ?",
          a: "Oui, nos dépanneuses disposent de treuils puissants permettant de charger en toute sécurité un véhicule garé dans une forte pente."
        },
        {
          q: "Mon véhicule n'a plus de roues (vandalisme), l'enlèvement est-il toujours gratuit ?",
          a: "Dans la majorité des cas oui, grâce à nos patins spéciaux, mais il faut nous prévenir à l'avance pour que nous adaptions le matériel."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Besoin d'un épaviste à Versailles ?",
      subtitle: "Appelez-nous au 07 53 12 07 93 pour un remorquage gratuit aujourd'hui."
    }
  ]
}
