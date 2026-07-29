import { PageData } from '../types'

export const chalautreLaPetiteData: PageData = {
  slug: 'chalautre-la-petite',
  entityType: 'City',
  metaTitle: 'Épaviste Chalautre-la-Petite (77160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chalautre-la-Petite (77160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave par professionnel agréé à Chalautre-la-Petite (77160) dans tout Chalautre-la-Petite',
      subtitle: 'Pour tout Chalautre-la-Petite (77160) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Chalautre-la-Petite (77160)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chalautre-la-Petite',
      content: 'Nous venons à Chalautre-la-Petite avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. À Chalautre-la-Petite, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Chalautre-la-Petite, nous retirons les épaves des champs, prés et chemins sans difficulté. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Les modalités de l\'intervention à Chalautre-la-Petite sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Chalautre-la-Petite implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chalautre-la-Petite',
      intro: 'À Chalautre-la-Petite, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Les modalités d\'intervention à Chalautre-la-Petite sont adaptées à l\'emplacement signalé du véhicule. Le secteur 77160 de Chalautre-la-Petite est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. À partir de Chalautre-la-Petite, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chalautre-la-Petite',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Chalautre-la-Petite est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chalautre-la-Petite sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chalautre-la-Petite',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
