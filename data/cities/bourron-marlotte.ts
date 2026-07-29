import { PageData } from '../types'

export const bourronMarlotteData: PageData = {
  slug: 'bourron-marlotte',
  entityType: 'City',
  metaTitle: 'Épaviste Bourron-Marlotte (77780) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bourron-Marlotte (77780). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service de retrait d\'épave à Bourron-Marlotte sans frais dans tout Bourron-Marlotte (77780)',
      subtitle: 'Épaviste gratuit à Bourron-Marlotte (77780) : intervention dans tout Bourron-Marlotte pour votre véhicule hors d\'usage.',
      badge: 'Bourron-Marlotte (77780)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bourron-Marlotte',
      content: 'Les zones rurales autour de Bourron-Marlotte sont intégralement couvertes par notre service gratuit. À Bourron-Marlotte, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Le déplacement à Bourron-Marlotte est inclus dans notre service, sans supplément kilométrique. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Notre équipe connaît les spécificités des zones rurales autour de Bourron-Marlotte pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bourron-Marlotte implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Les formalités administratives liées à la fin de vie sont accomplies par les opérateurs compétents. Les étapes sont orchestrées pour assurer une transition fluide entre les différents opérateurs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bourron-Marlotte',
      intro: 'La zone d\'intervention à Bourron-Marlotte comprend aussi bien les voies principales que les impasses. Nous organisons le passage à Bourron-Marlotte avec une préparation minutieuse de l\'itinéraire. Notre équipe couvre le secteur postal 77780 avec une logistique dédiée. Les habitants de Bourron-Marlotte peuvent compter sur notre présence régulière dans ce code postal. Les voies d\'accès et les secteurs autour de Bourron-Marlotte font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bourron-Marlotte',
      questions: [
        { q: 'L\'intervention à Bourron-Marlotte est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bourron-Marlotte sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bourron-Marlotte',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
