import { PageData } from '../types'

export const saintRemyDeLaVanneData: PageData = {
  slug: 'saint-remy-de-la-vanne',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Rémy-de-la-Vanne (77320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Rémy-de-la-Vanne (77320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Saint-Rémy-de-la-Vanne (77320) - Enlèvement Saint-Rémy-de-la-Vanne',
      subtitle: 'Enlèvement gratuit VHU à Saint-Rémy-de-la-Vanne (77320). Prenez rendez-vous, on s\'occupe de votre épave à Saint-Rémy-de-la-Vanne.',
      badge: 'Saint-Rémy-de-la-Vanne (77320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Rémy-de-la-Vanne',
      content: 'Dans la campagne autour de Saint-Rémy-de-la-Vanne, débarrassez-vous gratuitement de votre épave. Dans la campagne de Saint-Rémy-de-la-Vanne, nous intervenons sans frais de déplacement supplémentaires. Les exploitants agricoles de Saint-Rémy-de-la-Vanne nous confient leurs épaves pour un traitement réglementaire. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Notre service à Saint-Rémy-de-la-Vanne tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Rémy-de-la-Vanne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un opérateur partenaire compétent dans le domaine du recyclage automobile. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Rémy-de-la-Vanne',
      intro: 'Nous venons chercher votre épave à Saint-Rémy-de-la-Vanne, même dans les endroits difficilement accessibles. Les détails d\'accès pour Saint-Rémy-de-la-Vanne sont examinés avant le départ de l\'équipe. Les habitants du 77320 à Saint-Rémy-de-la-Vanne bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre zone de couverture s\'articule autour de Saint-Rémy-de-la-Vanne et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Rémy-de-la-Vanne',
      questions: [
        { q: 'L\'intervention à Saint-Rémy-de-la-Vanne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Rémy-de-la-Vanne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Rémy-de-la-Vanne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
