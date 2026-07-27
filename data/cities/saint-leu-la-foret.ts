import { PageData } from '../types'

export const saintLeuLaForetData: PageData = {
  slug: 'saint-leu-la-foret',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Leu-la-Forêt (95320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Leu-la-Forêt (95320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait gratuit voiture épave à Saint-Leu-la-Forêt (95320) pour tout Saint-Leu-la-Forêt',
      subtitle: 'Retrait gratuit épave Saint-Leu-la-Forêt (95320) : notre équipe intervient partout à Saint-Leu-la-Forêt sans frais.',
      badge: 'Saint-Leu-la-Forêt (95320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Leu-la-Forêt',
      content: 'Dans la campagne de Saint-Leu-la-Forêt, un véhicule hors d\'usage peut être retiré sans aucun frais. Les propriétés rurales de Saint-Leu-la-Forêt sont desservies par notre service sans supplément. À Saint-Leu-la-Forêt, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Saint-Leu-la-Forêt.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Leu-la-Forêt soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Leu-la-Forêt',
      intro: 'Que vous habitiez le centre ou la périphérie de Saint-Leu-la-Forêt, nous venons retirer votre véhicule. La préparation de l\'intervention à Saint-Leu-la-Forêt commence dès la réception de votre demande. Le code postal 95320 est intégré dans notre tournée d\'enlèvement régulière à Saint-Leu-la-Forêt, ce qui garantit une intervention rapide. Les zones limitrophes de Saint-Leu-la-Forêt peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Leu-la-Forêt',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Leu-la-Forêt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Leu-la-Forêt sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Leu-la-Forêt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
