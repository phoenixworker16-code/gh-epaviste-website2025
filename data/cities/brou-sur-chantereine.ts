import { PageData } from '../types'

export const brouSurChantereineData: PageData = {
  slug: 'brou-sur-chantereine',
  entityType: 'City',
  metaTitle: 'Épaviste Brou-sur-Chantereine (77177) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Brou-sur-Chantereine (77177). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement épave Brou-sur-Chantereine (77177) - Prise en charge Brou-sur-Chantereine',
      subtitle: 'Enlèvement gratuit dans le 77177 à Brou-sur-Chantereine. Débarras professionnel de votre épave à Brou-sur-Chantereine.',
      badge: 'Brou-sur-Chantereine (77177)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Brou-sur-Chantereine',
      content: 'Dans le secteur rural de Brou-sur-Chantereine, nous nous déplaçons gratuitement pour enlever votre épave. À la campagne, à Brou-sur-Chantereine, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Notre équipe à Brou-sur-Chantereine assure un service professionnel d\'enlèvement gratuit en zone rurale. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Chaque détail de l\'enlèvement à Brou-sur-Chantereine est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Brou-sur-Chantereine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Brou-sur-Chantereine',
      intro: 'La tournée de nos dépanneuses couvre Brou-sur-Chantereine en intégralité chaque semaine. Les modalités pratiques de l\'enlèvement à Brou-sur-Chantereine sont calées en amont avec vous. La zone 77177 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Brou-sur-Chantereine. Au-delà des limites de Brou-sur-Chantereine, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Brou-sur-Chantereine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Brou-sur-Chantereine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Brou-sur-Chantereine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Brou-sur-Chantereine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
