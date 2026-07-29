import { PageData } from '../types'

export const saintCyrLaRiviereData: PageData = {
  slug: 'saint-cyr-la-riviere',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Cyr-la-Rivière (91690) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Cyr-la-Rivière (91690). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service rapide d\'enlèvement d\'épave à Saint-Cyr-la-Rivière (91690) dans tout Saint-Cyr-la-Rivière',
      subtitle: 'Débarras auto Saint-Cyr-la-Rivière (91690) : notre équipe enlève gratuitement votre épave à Saint-Cyr-la-Rivière.',
      badge: 'Saint-Cyr-la-Rivière (91690)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Cyr-la-Rivière',
      content: 'À Saint-Cyr-la-Rivière, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Notre équipe est habituée aux accès ruraux à Saint-Cyr-la-Rivière et intervient dans les meilleures conditions. Nous organisons à Saint-Cyr-la-Rivière des interventions adaptées aux grandes propriétés et aux écarts. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Notre service à Saint-Cyr-la-Rivière tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Cyr-la-Rivière, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Cyr-la-Rivière',
      intro: 'Nous venons chercher votre épave à Saint-Cyr-la-Rivière, même dans les endroits difficilement accessibles. Un créneau d\'enlèvement à Saint-Cyr-la-Rivière vous est proposé selon vos disponibilités. Pour le secteur 91690, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Saint-Cyr-la-Rivière. Les localités voisines de Saint-Cyr-la-Rivière peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Cyr-la-Rivière',
      questions: [
        { q: 'L\'intervention à Saint-Cyr-la-Rivière est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Cyr-la-Rivière sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Cyr-la-Rivière',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
