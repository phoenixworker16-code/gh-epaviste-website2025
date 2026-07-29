import { PageData } from '../types'

export const laHautevilleData: PageData = {
  slug: 'la-hauteville',
  entityType: 'City',
  metaTitle: 'Épaviste La Hauteville (78113) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Hauteville (78113). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait de épave sans frais à La Hauteville (78113) - Service pour La Hauteville',
      subtitle: 'Épave à La Hauteville ? Intervention gratuite dans le secteur 78113 de La Hauteville sous 24-48h.',
      badge: 'La Hauteville (78113)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Hauteville',
      content: 'Dans la campagne autour de La Hauteville, débarrassez-vous gratuitement de votre épave. Dans les secteurs agricoles de La Hauteville, nous retirons les épaves sans endommager les terrains. Notre équipe à La Hauteville connaît les spécificités des propriétés rurales et agricoles. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Notre service à La Hauteville tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Hauteville implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Le traitement respecte les normes applicables aux véhicules en fin de vie. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Hauteville',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de La Hauteville, notre service est disponible. L\'équipe dépêchée à La Hauteville connaît à l\'avance les conditions d\'accès au véhicule. Pour le secteur 78113, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de La Hauteville. Notre rayonnement autour de La Hauteville s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Hauteville',
      questions: [
        { q: 'L\'intervention à La Hauteville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Hauteville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Hauteville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
