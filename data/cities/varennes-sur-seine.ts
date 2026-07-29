import { PageData } from '../types'

export const varennesSurSeineData: PageData = {
  slug: 'varennes-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Varennes-sur-Seine (77130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Varennes-sur-Seine (77130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave gratuit à Varennes-sur-Seine (77130) - Service Varennes-sur-Seine',
      subtitle: 'Pour votre épave à Varennes-sur-Seine (77130) : intervention gratuite et professionnelle dans tout Varennes-sur-Seine.',
      badge: 'Varennes-sur-Seine (77130)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Varennes-sur-Seine',
      content: 'Votre terrain à Varennes-sur-Seine retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Vivre à la campagne à Varennes-sur-Seine ne signifie pas renoncer à un service d\'enlèvement professionnel. À Varennes-sur-Seine, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. L\'organisation de l\'enlèvement à Varennes-sur-Seine tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Varennes-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Varennes-sur-Seine',
      intro: 'Vous avez une épave à Varennes-sur-Seine ? Notre équipe se déplace gratuitement où qu\'elle soit. La logistique à Varennes-sur-Seine est adaptée au type de véhicule et à son environnement. Notre équipe couvre le secteur postal 77130 avec une logistique dédiée. Les habitants de Varennes-sur-Seine peuvent compter sur notre présence régulière dans ce code postal. Au-delà des limites de Varennes-sur-Seine, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Varennes-sur-Seine',
      questions: [
        { q: 'L\'intervention à Varennes-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Varennes-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Varennes-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
