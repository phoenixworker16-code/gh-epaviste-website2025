import { PageData } from '../types'

export const dammartinEnGoeleData: PageData = {
  slug: 'dammartin-en-goele',
  entityType: 'City',
  metaTitle: 'Épaviste Dammartin-en-Goële (77230) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Dammartin-en-Goële (77230). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras d\'épave automobile à Dammartin-en-Goële (77230) par épaviste à Dammartin-en-Goële',
      subtitle: 'Service d\'enlèvement à Dammartin-en-Goële (77230) : retrait gratuit de votre VHU par notre équipe à Dammartin-en-Goële.',
      badge: 'Dammartin-en-Goële (77230)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Dammartin-en-Goële',
      content: 'Vous habitez à Dammartin-en-Goële et une épave vous encombre depuis des mois ? Agissez gratuitement. Notre équipe est habituée aux accès ruraux à Dammartin-en-Goële et intervient dans les meilleures conditions. À Dammartin-en-Goële, même dans les secteurs isolés, notre équipe se déplace gratuitement. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. L\'intervention à Dammartin-en-Goële est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Dammartin-en-Goële soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Dammartin-en-Goële',
      intro: 'Même dans les secteurs les plus excentrés de Dammartin-en-Goële, nous organisons l\'enlèvement. Les modalités pratiques de l\'enlèvement à Dammartin-en-Goële sont calées en amont avec vous. Notre équipe couvre le secteur postal 77230 avec une logistique dédiée. Les habitants de Dammartin-en-Goële peuvent compter sur notre présence régulière dans ce code postal. Au-delà du centre de Dammartin-en-Goële, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Dammartin-en-Goële',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Dammartin-en-Goële est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Dammartin-en-Goële sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Dammartin-en-Goële',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
