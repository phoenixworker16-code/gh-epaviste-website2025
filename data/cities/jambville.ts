import { PageData } from '../types'

export const jambvilleData: PageData = {
  slug: 'jambville',
  entityType: 'City',
  metaTitle: 'Épaviste Jambville (78440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jambville (78440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Solution enlèvement d\'épave sans frais à Jambville (78440) pour Jambville',
      subtitle: 'À Jambville (78440) : faites enlever votre épave gratuitement par des professionnels dans tout Jambville.',
      badge: 'Jambville (78440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jambville',
      content: 'Votre propriété rurale à Jambville n\'a pas besoin de cette épave : faites-la enlever. Dans la campagne de Jambville, nous intervenons sans frais de déplacement supplémentaires. Notre équipe à Jambville connaît les spécificités des propriétés rurales et agricoles. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Les modalités de l\'intervention à Jambville sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Jambville soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Le dispositif assure une répartition claire des tâches entre les différents partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jambville',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Jambville, notre service est disponible. À Jambville, nous veillons à ce que tous les aspects logistiques soient anticipés. Notre service dessert quotidiennement le secteur 78440 de Jambville avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au-delà du centre de Jambville, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jambville',
      questions: [
        { q: 'L\'intervention à Jambville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jambville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Jambville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
