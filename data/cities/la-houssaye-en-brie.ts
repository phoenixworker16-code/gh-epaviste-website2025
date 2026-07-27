import { PageData } from '../types'

export const laHoussayeEnBrieData: PageData = {
  slug: 'la-houssaye-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste La Houssaye-en-Brie (77610) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Houssaye-en-Brie (77610). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à La Houssaye-en-Brie (77610) - Service La Houssaye-en-Brie',
      subtitle: 'Épaviste professionnel à La Houssaye-en-Brie (77610) : enlèvement gratuit de votre VHU dans tout La Houssaye-en-Brie.',
      badge: 'La Houssaye-en-Brie (77610)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Houssaye-en-Brie',
      content: 'Dans le secteur rural de La Houssaye-en-Brie, nous nous déplaçons gratuitement pour enlever votre épave. Les chemins ruraux de La Houssaye-en-Brie ne sont pas un obstacle pour nos équipes équipées. Notre équipe à La Houssaye-en-Brie connaît les spécificités des propriétés rurales et agricoles. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à La Houssaye-en-Brie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Houssaye-en-Brie implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Houssaye-en-Brie',
      intro: 'Notre service à La Houssaye-en-Brie est accessible dans tous les quartiers, du centre aux lotissements. L\'équipe dépêchée à La Houssaye-en-Brie connaît à l\'avance les conditions d\'accès au véhicule. Pour le secteur 77610, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de La Houssaye-en-Brie. Les axes secondaires et les hameaux près de La Houssaye-en-Brie sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Houssaye-en-Brie',
      questions: [
        { q: 'L\'intervention à La Houssaye-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Houssaye-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Houssaye-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
