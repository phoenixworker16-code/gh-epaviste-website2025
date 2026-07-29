import { PageData } from '../types'

export const nainvilleLesRochesData: PageData = {
  slug: 'nainville-les-roches',
  entityType: 'City',
  metaTitle: 'Épaviste Nainville-les-Roches (91750) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nainville-les-Roches (91750). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait gratuit voiture épave à Nainville-les-Roches (91750) pour tout Nainville-les-Roches',
      subtitle: 'Service gratuit d\'épaviste à Nainville-les-Roches (91750). Votre véhicule hors d\'usage retiré à Nainville-les-Roches.',
      badge: 'Nainville-les-Roches (91750)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nainville-les-Roches',
      content: 'Les zones rurales autour de Nainville-les-Roches sont intégralement couvertes par notre service gratuit. Même à Nainville-les-Roches, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Notre équipe à Nainville-les-Roches assure un service professionnel d\'enlèvement gratuit en zone rurale. Les informations transmises permettent d\'anticiper les besoins techniques et humains. L\'organisation de l\'enlèvement à Nainville-les-Roches tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Nainville-les-Roches, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées. Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nainville-les-Roches',
      intro: 'Les équipes affectées à Nainville-les-Roches connaissent parfaitement chaque secteur de la commune. Avant l\'enlèvement à Nainville-les-Roches, les informations pratiques sont échangées avec le propriétaire. Les habitants du 91750 à Nainville-les-Roches bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre couverture géographique dépasse Nainville-les-Roches pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nainville-les-Roches',
      questions: [
        { q: 'L\'intervention à Nainville-les-Roches est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nainville-les-Roches sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Nainville-les-Roches',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
