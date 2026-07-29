import { PageData } from '../types'

export const sablonnieresData: PageData = {
  slug: 'sablonnieres',
  entityType: 'City',
  metaTitle: 'Épaviste Sablonnières (77510) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Sablonnières (77510). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de VHU à Sablonnières (77510) pour les habitants de Sablonnières',
      subtitle: 'À Sablonnières (77510) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Sablonnières (77510)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Sablonnières',
      content: 'À Sablonnières, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Votre propriété à Sablonnières est accessible à nos dépanneuses pour un enlèvement gratuit. Le retrait gratuit de votre épave à Sablonnières est organisé avec des équipements tout-terrain. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Notre équipe à Sablonnières est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Sablonnières soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Sablonnières',
      intro: 'La tournée de nos dépanneuses couvre Sablonnières en intégralité chaque semaine. Les contraintes spécifiques à Sablonnières sont intégrées dans l\'organisation du retrait. Les habitants du 77510 à Sablonnières bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. À partir du secteur de Sablonnières, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Sablonnières',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Sablonnières est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Sablonnières sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Sablonnières',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
