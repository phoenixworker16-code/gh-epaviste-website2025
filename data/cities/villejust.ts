import { PageData } from '../types'

export const villejustData: PageData = {
  slug: 'villejust',
  entityType: 'City',
  metaTitle: 'Épaviste Villejust (91140) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villejust (91140). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Villejust par un professionnel dans le 91140 de Villejust',
      subtitle: 'Service de retrait d\'épave à Villejust (91140). Gratuit et sans contrainte pour les habitants de Villejust.',
      badge: 'Villejust (91140)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villejust',
      content: 'Situé à Villejust, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Dans les secteurs agricoles de Villejust, nous retirons les épaves sans endommager les terrains. À Villejust, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Les détails de l\'intervention à Villejust sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villejust soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Les différentes opérations sont soumises au respect des règles applicables à la filière. Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villejust',
      intro: 'L\'enlèvement à Villejust est organisé sans considération de zone ou de quartier. Les contraintes spécifiques à Villejust sont intégrées dans l\'organisation du retrait. Le secteur 91140 de Villejust est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes autour de Villejust sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villejust',
      questions: [
        { q: 'L\'intervention à Villejust est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villejust sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villejust',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
