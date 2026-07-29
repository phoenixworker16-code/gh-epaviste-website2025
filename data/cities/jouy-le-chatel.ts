import { PageData } from '../types'

export const jouyLeChatelData: PageData = {
  slug: 'jouy-le-chatel',
  entityType: 'City',
  metaTitle: 'Épaviste Jouy-le-Châtel (77970) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jouy-le-Châtel (77970). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de véhicule accidenté à Jouy-le-Châtel sans frais dans tout Jouy-le-Châtel (77970)',
      subtitle: 'Votre épave à Jouy-le-Châtel retirée gratuitement. Intervention rapide dans le 77970 à Jouy-le-Châtel.',
      badge: 'Jouy-le-Châtel (77970)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jouy-le-Châtel',
      content: 'Dans le secteur rural de Jouy-le-Châtel, nous nous déplaçons gratuitement pour enlever votre épave. À Jouy-le-Châtel, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Jouy-le-Châtel, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Nous adaptons notre intervention à Jouy-le-Châtel en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Jouy-le-Châtel, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Les étapes sont orchestrées pour assurer une transition fluide entre les différents opérateurs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jouy-le-Châtel',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Jouy-le-Châtel sans limitation géographique. Nous préparons l\'enlèvement à Jouy-le-Châtel avec le souci du détail pour une exécution parfaite. Le code postal 77970 est intégré dans notre tournée d\'enlèvement régulière à Jouy-le-Châtel, ce qui garantit une intervention rapide. Les communes situées à proximité de Jouy-le-Châtel peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jouy-le-Châtel',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Jouy-le-Châtel est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jouy-le-Châtel sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Jouy-le-Châtel',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
