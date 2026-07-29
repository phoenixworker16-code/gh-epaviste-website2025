import { PageData } from '../types'

export const forgesData: PageData = {
  slug: 'forges',
  entityType: 'City',
  metaTitle: 'Épaviste Forges (77130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Forges (77130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Forges pour enlèvement gratuit de VHU dans le 77130',
      subtitle: 'À Forges (77130), nous organisons l\'enlèvement gratuit de votre épave partout dans Forges.',
      badge: 'Forges (77130)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Forges',
      content: 'À Forges, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. À Forges, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Les exploitants agricoles de Forges nous confient leurs épaves pour un traitement réglementaire. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Nous adaptons notre intervention à Forges en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Forges soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Forges',
      intro: 'Pour un enlèvement à Forges, notre logistique couvre tous les secteurs sans exception. Pour un retrait à Forges, le professionnel se prépare en fonction des indications reçues. Pour le secteur 77130, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Forges. Les communes autour de Forges sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Forges',
      questions: [
        { q: 'L\'intervention à Forges est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Forges sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Forges',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
