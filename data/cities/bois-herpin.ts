import { PageData } from '../types'

export const boisHerpinData: PageData = {
  slug: 'bois-herpin',
  entityType: 'City',
  metaTitle: 'Épaviste Bois-Herpin (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bois-Herpin (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste gratuit Bois-Herpin intervention rapide dans le 91150 de Bois-Herpin',
      subtitle: 'Retrait VHU à Bois-Herpin (91150) : prise en charge totale et gratuite de votre épave à Bois-Herpin.',
      badge: 'Bois-Herpin (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bois-Herpin',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Bois-Herpin ? Nous l\'enlevons gratuitement. À Bois-Herpin, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Bois-Herpin.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Bois-Herpin, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bois-Herpin',
      intro: 'Les interventions à Bois-Herpin sont possibles aussi bien sur voie publique que sur propriété privée. L\'organisation du passage à Bois-Herpin tient compte des particularités annoncées. Le secteur 91150 de Bois-Herpin est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes situées à proximité de Bois-Herpin peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bois-Herpin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Bois-Herpin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bois-Herpin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bois-Herpin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
