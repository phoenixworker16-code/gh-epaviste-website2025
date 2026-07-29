import { PageData } from '../types'

export const bondoufleData: PageData = {
  slug: 'bondoufle',
  entityType: 'City',
  metaTitle: 'Épaviste Bondoufle (91070) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bondoufle (91070). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste de secteur à Bondoufle (91070) pour enlèvement à Bondoufle',
      subtitle: 'Retrait de VHU à Bondoufle (91070) : un service gratuit et rapide pour tout Bondoufle et ses environs.',
      badge: 'Bondoufle (91070)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bondoufle',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Bondoufle peut être retiré sans frais. Les zones rurales autour de Bondoufle sont intégralement couvertes par notre service. Nous intervenons à Bondoufle sur les terrains les plus difficiles d\'accès. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. L\'équipe dépêchée à Bondoufle connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Bondoufle soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Les différentes opérations sont soumises au respect des règles applicables à la filière. Le propriétaire bénéficie d\'un suivi transparent des différentes phases de prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bondoufle',
      intro: 'Les interventions à Bondoufle sont possibles aussi bien sur voie publique que sur propriété privée. Le planning d\'intervention à Bondoufle intègre les contraintes horaires du propriétaire. Pour le secteur 91070, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Bondoufle. Les communes qui entourent Bondoufle profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bondoufle',
      questions: [
        { q: 'L\'intervention à Bondoufle est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bondoufle sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bondoufle',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
