import { PageData } from '../types'

export const nozayData: PageData = {
  slug: 'nozay',
  entityType: 'City',
  metaTitle: 'Épaviste Nozay (91620) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nozay (91620). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Nozay (91620) dans toute l\'agglomération Nozay',
      subtitle: 'À Nozay (91620), notre équipe enlève gratuitement votre épave où qu\'elle soit.',
      badge: 'Nozay (91620)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nozay',
      content: 'Situé à Nozay, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Notre équipe à Nozay est équipée de véhicules adaptés aux chemins ruraux. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Le rendez-vous à Nozay est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Nozay, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation du service prévoit l\'orientation systématique vers un professionnel habilité. Les différentes opérations sont soumises au respect des règles applicables à la filière. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nozay',
      intro: 'Vous avez une épave à Nozay ? Notre équipe se déplace gratuitement où qu\'elle soit. Chaque demande d\'enlèvement à Nozay reçoit une organisation personnalisée. Pour le secteur 91620, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Nozay. Notre rayon d\'action ne se limite pas à Nozay mais s\'étend aux alentours.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nozay',
      questions: [
        { q: 'L\'intervention à Nozay est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nozay sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Nozay',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
