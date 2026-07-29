import { PageData } from '../types'

export const champeauxData: PageData = {
  slug: 'champeaux',
  entityType: 'City',
  metaTitle: 'Épaviste Champeaux (77720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Champeaux (77720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras auto gratuit à Champeaux (77720) - Intervention dans le 77720',
      subtitle: 'Retrait VHU à Champeaux (77720) : prise en charge totale et gratuite de votre épave à Champeaux.',
      badge: 'Champeaux (77720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Champeaux',
      content: 'Vous habitez à Champeaux et une épave vous encombre depuis des mois ? Agissez gratuitement. Dans les secteurs agricoles de Champeaux, nous retirons les épaves sans endommager les terrains. À Champeaux, même dans les secteurs isolés, notre équipe se déplace gratuitement. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Notre équipe à Champeaux est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Champeaux soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Les différentes opérations sont soumises au respect des règles applicables à la filière. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Champeaux',
      intro: 'Où que soit garé votre véhicule à Champeaux, notre dépanneuse peut accéder pour le retirer. La planification de l\'enlèvement à Champeaux s\'appuie sur les données communiquées en amont. Le code postal 77720 est intégré dans notre tournée d\'enlèvement régulière à Champeaux, ce qui garantit une intervention rapide. À partir du secteur de Champeaux, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Champeaux',
      questions: [
        { q: 'L\'intervention à Champeaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Champeaux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Champeaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
