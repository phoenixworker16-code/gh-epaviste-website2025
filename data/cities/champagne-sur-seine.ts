import { PageData } from '../types'

export const champagneSurSeineData: PageData = {
  slug: 'champagne-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Champagne-sur-Seine (77430) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Champagne-sur-Seine (77430). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Champagne-sur-Seine par un professionnel dans le 77430 de Champagne-sur-Seine',
      subtitle: 'Pour Champagne-sur-Seine (77430) : retrait gratuit de votre épave avec remise des documents à Champagne-sur-Seine.',
      badge: 'Champagne-sur-Seine (77430)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Champagne-sur-Seine',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Champagne-sur-Seine ? Nous l\'enlevons gratuitement. À Champagne-sur-Seine, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. À Champagne-sur-Seine, même dans les secteurs isolés, notre équipe se déplace gratuitement. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre équipe connaît les spécificités des zones rurales autour de Champagne-sur-Seine pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Champagne-sur-Seine implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Champagne-sur-Seine',
      intro: 'Notre service gratuit à Champagne-sur-Seine couvre toutes les zones, du bourg aux hameaux périphériques. L\'organisation du passage à Champagne-sur-Seine tient compte des particularités annoncées. Pour le secteur 77430, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Champagne-sur-Seine. Au-delà du centre de Champagne-sur-Seine, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Champagne-sur-Seine',
      questions: [
        { q: 'L\'intervention à Champagne-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Champagne-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Champagne-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
