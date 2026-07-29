import { PageData } from '../types'

export const neslesLaValleeData: PageData = {
  slug: 'nesles-la-vallee',
  entityType: 'City',
  metaTitle: 'Épaviste Nesles-la-Vallée (95690) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nesles-la-Vallée (95690). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Nesles-la-Vallée (95690) gratuitement dans tout Nesles-la-Vallée',
      subtitle: 'Besoin d\'un épaviste à Nesles-la-Vallée (95690) ? Enlèvement gratuit de votre VHU dans tout Nesles-la-Vallée.',
      badge: 'Nesles-la-Vallée (95690)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nesles-la-Vallée',
      content: 'À Nesles-la-Vallée, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Vivre à la campagne à Nesles-la-Vallée ne signifie pas renoncer à un service d\'enlèvement professionnel. Les exploitants agricoles de Nesles-la-Vallée nous confient leurs épaves pour un traitement réglementaire. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Nous organisons le passage à Nesles-la-Vallée avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Nesles-la-Vallée implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nesles-la-Vallée',
      intro: 'L\'enlèvement à Nesles-la-Vallée est organisé sans considération de zone ou de quartier. L\'équipe dépêchée à Nesles-la-Vallée connaît à l\'avance les conditions d\'accès au véhicule. Les demandes pour le 95690 de Nesles-la-Vallée sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà des limites de Nesles-la-Vallée, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nesles-la-Vallée',
      questions: [
        { q: 'L\'intervention à Nesles-la-Vallée est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nesles-la-Vallée sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Nesles-la-Vallée',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
