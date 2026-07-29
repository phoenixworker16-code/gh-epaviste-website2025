import { PageData } from '../types'

export const lePortMarlyData: PageData = {
  slug: 'le-port-marly',
  entityType: 'City',
  metaTitle: 'Épaviste Le Port-Marly (78560) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Port-Marly (78560). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste gratuit Le Port-Marly intervention rapide dans le 78560 de Le Port-Marly',
      subtitle: 'Service de retrait d\'épave à Le Port-Marly (78560). Gratuit et sans contrainte pour les habitants de Le Port-Marly.',
      badge: 'Le Port-Marly (78560)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Port-Marly',
      content: 'Un véhicule abandonné sur votre terrain à Le Port-Marly vous gêne au quotidien ? Même à Le Port-Marly, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Les exploitants agricoles de Le Port-Marly nous confient leurs épaves pour un traitement réglementaire. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Le rendez-vous à Le Port-Marly est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Le Port-Marly implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Port-Marly',
      intro: 'Notre maillage territorial permet une couverture complète de Le Port-Marly pour les enlèvements. Avant de se déplacer à Le Port-Marly, l\'équipe vérifie les accès et prépare le matériel adapté. Pour le secteur 78560, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Le Port-Marly. Autour de Le Port-Marly, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Port-Marly',
      questions: [
        { q: 'L\'intervention à Le Port-Marly est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Port-Marly sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Le Port-Marly',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
