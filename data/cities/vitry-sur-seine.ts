import { PageData } from '../types'

export const vitrySurSeineData: PageData = {
  slug: 'vitry-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Vitry-sur-Seine (94400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vitry-sur-Seine (94400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement gratuit VHU à Vitry-sur-Seine (94400) par épaviste agréé dans Vitry-sur-Seine',
      subtitle: 'Épave à Vitry-sur-Seine ? Intervention gratuite dans le secteur 94400 de Vitry-sur-Seine sous 24-48h.',
      badge: 'Vitry-sur-Seine (94400)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vitry-sur-Seine',
      content: 'Vous avez une épave à Vitry-sur-Seine qui vous encombre et vous ne savez pas comment vous en défaire ? Un véhicule abandonné à Vitry-sur-Seine peut entraîner des frais de fourrière évitables. À Vitry-sur-Seine, le service d\'enlèvement gratuit est organisé avec une logistique de proximité. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Nous assurons une coordination précise pour l\'enlèvement à Vitry-sur-Seine. Les interventions sont possibles jusqu\'à Rue Donizetti et dans tous les quartiers.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est organisé avec un professionnel de la filière autorisée pour ces opérations. La traçabilité du parcours est assurée conformément aux obligations en vigueur. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vitry-sur-Seine',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Vitry-sur-Seine. La planification de l\'enlèvement à Vitry-sur-Seine s\'appuie sur les données communiquées en amont. Notre équipe couvre le secteur postal 94400 avec une logistique dédiée. Les habitants de Vitry-sur-Seine peuvent compter sur notre présence régulière dans ce code postal. Notre rayonnement autour de Vitry-sur-Seine s\'étend sur plusieurs kilomètres à la ronde. C\'est le cas notamment vers Villejuif et Ivry-sur-Seine.',
      zones: [
        { name: 'Centre-ville & Zones denses', delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
        { name: 'Quartiers résidentiels', delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
        { name: 'Zones d\'activité', delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Vitry-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vitry-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Vitry-sur-Seine, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vitry-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vitry-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vitry-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
