import { PageData } from '../types'

export const gesvresLeChapitreData: PageData = {
  slug: 'gesvres-le-chapitre',
  entityType: 'City',
  metaTitle: 'Épaviste Gesvres-le-Chapitre (77165) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gesvres-le-Chapitre (77165). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Gesvres-le-Chapitre (77165) dans le 77165',
      subtitle: 'Gesvres-le-Chapitre (77165) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Gesvres-le-Chapitre.',
      badge: 'Gesvres-le-Chapitre (77165)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gesvres-le-Chapitre',
      content: 'Les zones rurales autour de Gesvres-le-Chapitre sont intégralement couvertes par notre service gratuit. Les propriétés rurales de Gesvres-le-Chapitre sont desservies par notre service sans supplément. À Gesvres-le-Chapitre, nous retirons les épaves des champs, prés et chemins sans difficulté. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Nous adaptons notre intervention à Gesvres-le-Chapitre en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Gesvres-le-Chapitre implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gesvres-le-Chapitre',
      intro: 'Que vous habitiez le centre ou la périphérie de Gesvres-le-Chapitre, nous venons retirer votre véhicule. Avant de se déplacer à Gesvres-le-Chapitre, l\'équipe vérifie les accès et prépare le matériel adapté. Le code postal 77165 est intégré dans notre tournée d\'enlèvement régulière à Gesvres-le-Chapitre, ce qui garantit une intervention rapide. Autour de Gesvres-le-Chapitre, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gesvres-le-Chapitre',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Gesvres-le-Chapitre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gesvres-le-Chapitre sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gesvres-le-Chapitre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
