import { PageData } from '../types'

export const nanteauSurEssonneData: PageData = {
  slug: 'nanteau-sur-essonne',
  entityType: 'City',
  metaTitle: 'Épaviste Nanteau-sur-Essonne (77760) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nanteau-sur-Essonne (77760). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de épave sans frais à Nanteau-sur-Essonne (77760) - Service pour Nanteau-sur-Essonne',
      subtitle: 'Débarras auto Nanteau-sur-Essonne (77760) : notre équipe enlève gratuitement votre épave à Nanteau-sur-Essonne.',
      badge: 'Nanteau-sur-Essonne (77760)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nanteau-sur-Essonne',
      content: 'Votre vieux véhicule à Nanteau-sur-Essonne prend la poussière et vous voulez vous en séparer ? Même à Nanteau-sur-Essonne, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Nanteau-sur-Essonne, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Les détails de l\'intervention à Nanteau-sur-Essonne sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Nanteau-sur-Essonne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un opérateur partenaire compétent dans le domaine du recyclage automobile. Les professionnels intervenants garantissent l\'application des règles en matière de recyclage. Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nanteau-sur-Essonne',
      intro: 'Nous intervenons à Nanteau-sur-Essonne dans tous les secteurs, y compris dans les zones à accès difficile. Le rendez-vous pour Nanteau-sur-Essonne est fixé après un échange sur les conditions d\'accès. La zone 77760 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Nanteau-sur-Essonne. Les localités voisines de Nanteau-sur-Essonne peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nanteau-sur-Essonne',
      questions: [
        { q: 'L\'intervention à Nanteau-sur-Essonne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nanteau-sur-Essonne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Nanteau-sur-Essonne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
