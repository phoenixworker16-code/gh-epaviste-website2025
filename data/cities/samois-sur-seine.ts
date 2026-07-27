import { PageData } from '../types'

export const samoisSurSeineData: PageData = {
  slug: 'samois-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Samois-sur-Seine (77920) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Samois-sur-Seine (77920). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Samois-sur-Seine (77920) dans le 77920',
      subtitle: 'Épaviste à Samois-sur-Seine - Intervention gratuite pour retirer votre VHU dans le 77920 à Samois-sur-Seine.',
      badge: 'Samois-sur-Seine (77920)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Samois-sur-Seine',
      content: 'Votre propriété rurale à Samois-sur-Seine n\'a pas besoin de cette épave : faites-la enlever. À la campagne, à Samois-sur-Seine, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Le service à Samois-sur-Seine est conçu pour les zones agricoles et les habitations isolées. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Le rendez-vous à Samois-sur-Seine est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Samois-sur-Seine implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Samois-sur-Seine',
      intro: 'Aucun quartier de Samois-sur-Seine n\'est exclu : nous intervenons partout dans la commune. À Samois-sur-Seine, le professionnel confirme avec vous les modalités avant de se déplacer. Notre service dessert quotidiennement le secteur 77920 de Samois-sur-Seine avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au-delà du centre de Samois-sur-Seine, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Samois-sur-Seine',
      questions: [
        { q: 'L\'intervention à Samois-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Samois-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Samois-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
