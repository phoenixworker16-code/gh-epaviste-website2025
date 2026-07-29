import { PageData } from '../types'

export const plessisSaintBenoistData: PageData = {
  slug: 'plessis-saint-benoist',
  entityType: 'City',
  metaTitle: 'Épaviste Plessis-Saint-Benoist (91410) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Plessis-Saint-Benoist (91410). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faites enlever votre vieille voiture à Plessis-Saint-Benoist gratuitement dans tout Plessis-Saint-Benoist',
      subtitle: 'À Plessis-Saint-Benoist (91410) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Plessis-Saint-Benoist.',
      badge: 'Plessis-Saint-Benoist (91410)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Plessis-Saint-Benoist',
      content: 'Dans la campagne autour de Plessis-Saint-Benoist, débarrassez-vous gratuitement de votre épave. Votre propriété à Plessis-Saint-Benoist est accessible à nos dépanneuses pour un enlèvement gratuit. À Plessis-Saint-Benoist, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Notre service à Plessis-Saint-Benoist tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Plessis-Saint-Benoist soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Plessis-Saint-Benoist',
      intro: 'Aucun quartier de Plessis-Saint-Benoist n\'est exclu : nous intervenons partout dans la commune. L\'intervention à Plessis-Saint-Benoist est programmée après avoir pris connaissance de votre situation. Le secteur 91410 de Plessis-Saint-Benoist est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Au-delà du territoire de Plessis-Saint-Benoist, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Plessis-Saint-Benoist',
      questions: [
        { q: 'L\'intervention à Plessis-Saint-Benoist est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Plessis-Saint-Benoist sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Plessis-Saint-Benoist',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
