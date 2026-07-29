import { PageData } from '../types'

export const forfryData: PageData = {
  slug: 'forfry',
  entityType: 'City',
  metaTitle: 'Épaviste Forfry (77165) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Forfry (77165). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Forfry (77165) - Enlèvement Forfry',
      subtitle: 'Forfry (77165) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Forfry.',
      badge: 'Forfry (77165)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Forfry',
      content: 'À Forfry, même les épaves situées sur des terrains difficiles sont prises en charge. Dans les secteurs agricoles de Forfry, nous retirons les épaves sans endommager les terrains. À Forfry, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les modalités d\'accès à Forfry sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Forfry soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation du service prévoit l\'orientation systématique vers un professionnel habilité. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Forfry',
      intro: 'À Forfry, la prise en charge de votre épave se fait quel que soit l\'endroit exact. La planification de l\'enlèvement à Forfry s\'appuie sur les données communiquées en amont. Le code postal 77165 est intégré dans notre tournée d\'enlèvement régulière à Forfry, ce qui garantit une intervention rapide. Les communes situées à proximité de Forfry peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Forfry',
      questions: [
        { q: 'L\'intervention à Forfry est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Forfry sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Forfry',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
