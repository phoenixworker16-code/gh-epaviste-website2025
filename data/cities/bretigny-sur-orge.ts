import { PageData } from '../types'

export const bretignySurOrgeData: PageData = {
  slug: 'bretigny-sur-orge',
  entityType: 'City',
  metaTitle: 'Épaviste Brétigny-sur-Orge (91220) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Brétigny-sur-Orge (91220). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service de retrait d\'épave à Brétigny-sur-Orge sans frais dans tout Brétigny-sur-Orge (91220)',
      subtitle: 'À Brétigny-sur-Orge (91220) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Brétigny-sur-Orge.',
      badge: 'Brétigny-sur-Orge (91220)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Brétigny-sur-Orge',
      content: 'Votre propriété rurale à Brétigny-sur-Orge n\'a pas besoin de cette épave : faites-la enlever. À la campagne, à Brétigny-sur-Orge, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. À Brétigny-sur-Orge, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Les distances jusqu\'à Brétigny-sur-Orge sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Brétigny-sur-Orge, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Brétigny-sur-Orge',
      intro: 'La tournée de nos dépanneuses couvre Brétigny-sur-Orge en intégralité chaque semaine. À Brétigny-sur-Orge, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Notre équipe couvre le secteur postal 91220 avec une logistique dédiée. Les habitants de Brétigny-sur-Orge peuvent compter sur notre présence régulière dans ce code postal. Autour de Brétigny-sur-Orge, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Brétigny-sur-Orge',
      questions: [
        { q: 'L\'intervention à Brétigny-sur-Orge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Brétigny-sur-Orge sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Brétigny-sur-Orge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
