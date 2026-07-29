import { PageData } from '../types'

export const verdelotData: PageData = {
  slug: 'verdelot',
  entityType: 'City',
  metaTitle: 'Épaviste Verdelot (77510) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Verdelot (77510). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Verdelot (77510) - Épaviste Verdelot',
      subtitle: 'Débarrassez votre épave à Verdelot gratuitement. Notre équipe intervient dans tout le 77510 de Verdelot.',
      badge: 'Verdelot (77510)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Verdelot',
      content: 'Votre terrain à Verdelot retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Même à Verdelot, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Verdelot, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Les modalités d\'accès à Verdelot sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Verdelot, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. Le propriétaire est informé du déroulement et des étapes successives de la prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Verdelot',
      intro: 'Notre équipe se rend dans chaque quartier de Verdelot pour les enlèvements programmés. Avant de se déplacer à Verdelot, l\'équipe vérifie les accès et prépare le matériel adapté. Les demandes pour le 77510 de Verdelot sont traitées en priorité par notre équipe qui connaît bien ce secteur. Autour de Verdelot, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Verdelot',
      questions: [
        { q: 'L\'intervention à Verdelot est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Verdelot sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Verdelot',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
