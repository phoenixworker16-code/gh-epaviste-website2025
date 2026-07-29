import { PageData } from '../types'

export const vulainesLesProvinsData: PageData = {
  slug: 'vulaines-les-provins',
  entityType: 'City',
  metaTitle: 'Épaviste Vulaines-lès-Provins (77160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vulaines-lès-Provins (77160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Épaviste gratuit Vulaines-lès-Provins intervention rapide dans le 77160 de Vulaines-lès-Provins',
      subtitle: 'Faites retirer votre épave à Vulaines-lès-Provins gratuitement. Notre équipe intervient dans le 77160 de Vulaines-lès-Provins.',
      badge: 'Vulaines-lès-Provins (77160)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vulaines-lès-Provins',
      content: 'Votre propriété à Vulaines-lès-Provins est encombrée par un véhicule hors d\'usage ? Nous intervenons. Les propriétés rurales de Vulaines-lès-Provins sont desservies par notre service sans supplément. Notre service à Vulaines-lès-Provins garantit un retrait gratuit où que vous soyez dans la commune. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Notre équipe connaît les spécificités des zones rurales autour de Vulaines-lès-Provins pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vulaines-lès-Provins, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. Les différentes opérations sont soumises au respect des règles applicables à la filière. Le propriétaire est informé du déroulement et des étapes successives de la prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vulaines-lès-Provins',
      intro: 'À Vulaines-lès-Provins, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Le planning d\'intervention à Vulaines-lès-Provins intègre les contraintes horaires du propriétaire. Les demandes pour le 77160 de Vulaines-lès-Provins sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà du territoire de Vulaines-lès-Provins, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vulaines-lès-Provins',
      questions: [
        { q: 'L\'intervention à Vulaines-lès-Provins est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vulaines-lès-Provins sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vulaines-lès-Provins',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
