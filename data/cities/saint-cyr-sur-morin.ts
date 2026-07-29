import { PageData } from '../types'

export const saintCyrSurMorinData: PageData = {
  slug: 'saint-cyr-sur-morin',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Cyr-sur-Morin (77750) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Cyr-sur-Morin (77750). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Saint-Cyr-sur-Morin (77750) - Enlèvement Saint-Cyr-sur-Morin',
      subtitle: 'Retrait VHU à Saint-Cyr-sur-Morin (77750) : prise en charge totale et gratuite de votre épave à Saint-Cyr-sur-Morin.',
      badge: 'Saint-Cyr-sur-Morin (77750)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Cyr-sur-Morin',
      content: 'À Saint-Cyr-sur-Morin, même les épaves situées sur des terrains difficiles sont prises en charge. Votre propriété à Saint-Cyr-sur-Morin est accessible à nos dépanneuses pour un enlèvement gratuit. À Saint-Cyr-sur-Morin, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. L\'intervention à Saint-Cyr-sur-Morin est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Cyr-sur-Morin implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois l\'enlèvement effectué, le véhicule rejoint une installation partenaire dédiée. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Cyr-sur-Morin',
      intro: 'Grâce à notre organisation, Saint-Cyr-sur-Morin est entièrement desservie pour l\'enlèvement d\'épaves. Chaque demande d\'enlèvement à Saint-Cyr-sur-Morin reçoit une organisation personnalisée. Le secteur 77750 de Saint-Cyr-sur-Morin est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les axes routiers menant à Saint-Cyr-sur-Morin sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Cyr-sur-Morin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Cyr-sur-Morin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Cyr-sur-Morin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Cyr-sur-Morin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
