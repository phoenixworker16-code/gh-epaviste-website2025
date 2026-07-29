import { PageData } from '../types'

export const sourdunData: PageData = {
  slug: 'sourdun',
  entityType: 'City',
  metaTitle: 'Épaviste Sourdun (77171) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Sourdun (77171). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave par professionnel agréé à Sourdun (77171) dans tout Sourdun',
      subtitle: 'Service d\'enlèvement d\'épave à Sourdun (77171) : gratuit, rapide et professionnel à Sourdun.',
      badge: 'Sourdun (77171)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Sourdun',
      content: 'Votre vieux véhicule à Sourdun prend la poussière et vous voulez vous en séparer ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Nous intervenons à Sourdun sur les terrains les plus difficiles d\'accès. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Notre équipe connaît les spécificités des zones rurales autour de Sourdun pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Sourdun implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Sourdun',
      intro: 'L\'enlèvement à Sourdun est organisé sans considération de zone ou de quartier. Les contraintes spécifiques à Sourdun sont intégrées dans l\'organisation du retrait. La zone 77171 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Sourdun. Les localités voisines de Sourdun peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Sourdun',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Sourdun est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Sourdun sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Sourdun',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
