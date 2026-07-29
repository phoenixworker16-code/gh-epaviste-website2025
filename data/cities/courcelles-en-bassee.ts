import { PageData } from '../types'

export const courcellesEnBasseeData: PageData = {
  slug: 'courcelles-en-bassee',
  entityType: 'City',
  metaTitle: 'Épaviste Courcelles-en-Bassée (77126) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Courcelles-en-Bassée (77126). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave professionnel à Courcelles-en-Bassée (77126) pour votre VHU à Courcelles-en-Bassée',
      subtitle: 'À Courcelles-en-Bassée (77126) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Courcelles-en-Bassée (77126)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Courcelles-en-Bassée',
      content: 'Vous habitez à Courcelles-en-Bassée et une épave vous encombre depuis des mois ? Agissez gratuitement. Dans la campagne de Courcelles-en-Bassée, nous intervenons sans frais de déplacement supplémentaires. Notre équipe à Courcelles-en-Bassée connaît les spécificités des propriétés rurales et agricoles. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Nous adaptons notre intervention à Courcelles-en-Bassée en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Courcelles-en-Bassée, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Le traitement respecte les normes applicables aux véhicules en fin de vie. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Courcelles-en-Bassée',
      intro: 'À Courcelles-en-Bassée, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Notre équipe à Courcelles-en-Bassée coordonne le passage avec vous pour une intervention sans accroc. Les habitants du 77126 à Courcelles-en-Bassée bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les axes routiers menant à Courcelles-en-Bassée sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Courcelles-en-Bassée',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Courcelles-en-Bassée est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Courcelles-en-Bassée sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Courcelles-en-Bassée',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
