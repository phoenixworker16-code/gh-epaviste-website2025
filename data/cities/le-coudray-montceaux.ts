import { PageData } from '../types'

export const leCoudrayMontceauxData: PageData = {
  slug: 'le-coudray-montceaux',
  entityType: 'City',
  metaTitle: 'Épaviste Le Coudray-Montceaux (91830) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Coudray-Montceaux (91830). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à Le Coudray-Montceaux (91830) - Service Le Coudray-Montceaux',
      subtitle: 'Épaviste professionnel à Le Coudray-Montceaux (91830) : enlèvement gratuit de votre VHU dans tout Le Coudray-Montceaux.',
      badge: 'Le Coudray-Montceaux (91830)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Coudray-Montceaux',
      content: 'Nous venons à Le Coudray-Montceaux avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Les zones rurales autour de Le Coudray-Montceaux sont intégralement couvertes par notre service. Le déplacement à Le Coudray-Montceaux est inclus dans notre service, sans supplément kilométrique. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Les modalités de l\'intervention à Le Coudray-Montceaux sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Le Coudray-Montceaux, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. La conformité du traitement est assurée par le respect des procédures en vigueur. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Coudray-Montceaux',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de Le Coudray-Montceaux. À Le Coudray-Montceaux, nous veillons à ce que tous les aspects logistiques soient anticipés. Pour le secteur 91830, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Le Coudray-Montceaux. Nous étendons notre intervention au-delà de Le Coudray-Montceaux pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Coudray-Montceaux',
      questions: [
        { q: 'L\'intervention à Le Coudray-Montceaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Coudray-Montceaux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Le Coudray-Montceaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
