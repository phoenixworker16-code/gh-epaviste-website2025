import { PageData } from '../types'

export const soisySousMontmorencyData: PageData = {
  slug: 'soisy-sous-montmorency',
  entityType: 'City',
  metaTitle: 'Épaviste Soisy-sous-Montmorency (95230) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Soisy-sous-Montmorency (95230). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire enlever son VHU à Soisy-sous-Montmorency par un professionnel dans le 95230 de Soisy-sous-Montmorency',
      subtitle: 'Débarrassez votre épave à Soisy-sous-Montmorency gratuitement. Notre équipe intervient dans tout le 95230 de Soisy-sous-Montmorency.',
      badge: 'Soisy-sous-Montmorency (95230)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Soisy-sous-Montmorency',
      content: 'Vous habitez à Soisy-sous-Montmorency et une épave vous encombre depuis des mois ? Agissez gratuitement. À Soisy-sous-Montmorency, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. À Soisy-sous-Montmorency, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Les modalités d\'accès à Soisy-sous-Montmorency sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Soisy-sous-Montmorency implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. L\'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Soisy-sous-Montmorency',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Soisy-sous-Montmorency. La préparation du retrait à Soisy-sous-Montmorency inclut une évaluation des conditions d\'intervention. Les habitants du 95230 à Soisy-sous-Montmorency bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les communes situées à proximité de Soisy-sous-Montmorency peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Soisy-sous-Montmorency',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Soisy-sous-Montmorency est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Soisy-sous-Montmorency sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Soisy-sous-Montmorency',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
