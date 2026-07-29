import { PageData } from '../types'

export const eaubonneData: PageData = {
  slug: 'eaubonne',
  entityType: 'City',
  metaTitle: 'Épaviste Eaubonne (95600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Eaubonne (95600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Eaubonne pour enlèvement gratuit de VHU dans le 95600',
      subtitle: 'Faites retirer votre épave à Eaubonne gratuitement. Notre équipe intervient dans le 95600 de Eaubonne.',
      badge: 'Eaubonne (95600)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Eaubonne',
      content: 'Dans la campagne autour de Eaubonne, débarrassez-vous gratuitement de votre épave. À Eaubonne, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Le retrait gratuit de votre épave à Eaubonne est organisé avec des équipements tout-terrain. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. L\'enlèvement à Eaubonne bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Eaubonne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Eaubonne',
      intro: 'À Eaubonne, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Pour un retrait à Eaubonne, le professionnel se prépare en fonction des indications reçues. Le secteur 95600 de Eaubonne est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes situées à proximité de Eaubonne peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Eaubonne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Eaubonne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Eaubonne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Eaubonne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
