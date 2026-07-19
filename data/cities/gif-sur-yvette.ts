import { PageData } from '../types'

export const gifSurYvetteData: PageData = {
  slug: 'gif-sur-yvette',
  entityType: 'City',
  metaTitle: 'Épaviste Gif-sur-Yvette (91190) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gif-sur-Yvette (91190). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement gratuit de carcasse à Gif-sur-Yvette (91190) - Service Gif-sur-Yvette',
      subtitle: 'À Gif-sur-Yvette (91190) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Gif-sur-Yvette.',
      badge: 'Gif-sur-Yvette (91190)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gif-sur-Yvette',
      content: 'Un véhicule abandonné sur votre terrain à Gif-sur-Yvette vous gêne au quotidien ? Votre propriété à Gif-sur-Yvette est accessible à nos dépanneuses pour un enlèvement gratuit. Le retrait gratuit de votre épave à Gif-sur-Yvette est organisé avec des équipements tout-terrain. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d\'accès. Le rendez-vous à Gif-sur-Yvette est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Gif-sur-Yvette, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées. Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gif-sur-Yvette',
      intro: 'La commune de Gif-sur-Yvette est intégralement couverte par notre service gratuit d\'enlèvement. La préparation de l\'intervention à Gif-sur-Yvette commence dès la réception de votre demande. Pour le secteur 91190, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Gif-sur-Yvette. Les axes routiers menant à Gif-sur-Yvette sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gif-sur-Yvette',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Gif-sur-Yvette est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gif-sur-Yvette sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gif-sur-Yvette',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
