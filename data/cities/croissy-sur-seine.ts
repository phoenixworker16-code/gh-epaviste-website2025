import { PageData } from '../types'

export const croissySurSeineData: PageData = {
  slug: 'croissy-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Croissy-sur-Seine (78290) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Croissy-sur-Seine (78290). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service de retrait d\'épave à Croissy-sur-Seine sans frais dans tout Croissy-sur-Seine (78290)',
      subtitle: 'Service gratuit d\'épaviste à Croissy-sur-Seine (78290). Votre véhicule hors d\'usage retiré à Croissy-sur-Seine.',
      badge: 'Croissy-sur-Seine (78290)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Croissy-sur-Seine',
      content: 'Nous venons à Croissy-sur-Seine avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Dans les secteurs agricoles de Croissy-sur-Seine, nous retirons les épaves sans endommager les terrains. Notre service rural à Croissy-sur-Seine garantit un retrait professionnel sans contrainte de distance. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. L\'équipe dépêchée à Croissy-sur-Seine connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Croissy-sur-Seine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Croissy-sur-Seine',
      intro: 'Même dans les secteurs les plus excentrés de Croissy-sur-Seine, nous organisons l\'enlèvement. Pour Croissy-sur-Seine, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Le code postal 78290 est intégré dans notre tournée d\'enlèvement régulière à Croissy-sur-Seine, ce qui garantit une intervention rapide. Notre zone de couverture s\'articule autour de Croissy-sur-Seine et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Croissy-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Croissy-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Croissy-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Croissy-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
