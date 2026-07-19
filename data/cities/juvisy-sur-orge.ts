import { PageData } from '../types'

export const juvisySurOrgeData: PageData = {
  slug: 'juvisy-sur-orge',
  entityType: 'City',
  metaTitle: 'Épaviste Juvisy-sur-Orge (91260) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Juvisy-sur-Orge (91260). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait et recyclage de votre épave à Juvisy-sur-Orge (91260) - Service Juvisy-sur-Orge',
      subtitle: 'Votre épaviste à Juvisy-sur-Orge (91260) : intervention gratuite et rapide pour votre VHU dans Juvisy-sur-Orge.',
      badge: 'Juvisy-sur-Orge (91260)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Juvisy-sur-Orge',
      content: 'Vous habitez à Juvisy-sur-Orge et une épave vous encombre depuis des mois ? Agissez gratuitement. Même à Juvisy-sur-Orge, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Le retrait gratuit de votre épave à Juvisy-sur-Orge est organisé avec des équipements tout-terrain. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Nous adaptons notre intervention à Juvisy-sur-Orge en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Juvisy-sur-Orge soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est complété par un transfert organisé vers un partenaire de la filière agréée. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Juvisy-sur-Orge',
      intro: 'Grâce à notre organisation, Juvisy-sur-Orge est entièrement desservie pour l\'enlèvement d\'épaves. Notre équipe à Juvisy-sur-Orge coordonne le passage avec vous pour une intervention sans accroc. La zone 91260 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Juvisy-sur-Orge. Les communes situées à proximité de Juvisy-sur-Orge peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Juvisy-sur-Orge',
      questions: [
        { q: 'L\'intervention à Juvisy-sur-Orge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Juvisy-sur-Orge sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
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
      title: 'Prendre rendez-vous pour votre épave à Juvisy-sur-Orge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
