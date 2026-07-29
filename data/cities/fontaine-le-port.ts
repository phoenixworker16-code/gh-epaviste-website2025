import { PageData } from '../types'

export const fontaineLePortData: PageData = {
  slug: 'fontaine-le-port',
  entityType: 'City',
  metaTitle: 'Épaviste Fontaine-le-Port (77590) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fontaine-le-Port (77590). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de carcasse auto à Fontaine-le-Port (77590) dans le secteur Fontaine-le-Port',
      subtitle: 'À Fontaine-le-Port (77590) : faites enlever votre épave gratuitement par des professionnels dans tout Fontaine-le-Port.',
      badge: 'Fontaine-le-Port (77590)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fontaine-le-Port',
      content: 'Nous venons à Fontaine-le-Port avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Dans les secteurs ruraux autour de Fontaine-le-Port, l\'accès à un service d\'enlèvement est simplifié. À Fontaine-le-Port, même dans les secteurs isolés, notre équipe se déplace gratuitement. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Nous adaptons notre intervention à Fontaine-le-Port en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Fontaine-le-Port implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fontaine-le-Port',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Fontaine-le-Port. À Fontaine-le-Port, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Les habitants du 77590 à Fontaine-le-Port bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les alentours de Fontaine-le-Port sont intégrés à notre tournée d\'enlèvement régulière.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fontaine-le-Port',
      questions: [
        { q: 'L\'intervention à Fontaine-le-Port est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fontaine-le-Port sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Fontaine-le-Port',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
