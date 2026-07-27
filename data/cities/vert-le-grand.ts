import { PageData } from '../types'

export const vertLeGrandData: PageData = {
  slug: 'vert-le-grand',
  entityType: 'City',
  metaTitle: 'Épaviste Vert-le-Grand (91810) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vert-le-Grand (91810). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Vert-le-Grand (91810) - Enlèvement Vert-le-Grand',
      subtitle: 'À Vert-le-Grand (91810) : notre équipe retire gratuitement votre vieux véhicule dans tout Vert-le-Grand.',
      badge: 'Vert-le-Grand (91810)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vert-le-Grand',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Vert-le-Grand peut être retiré sans frais. Dans les secteurs ruraux autour de Vert-le-Grand, l\'accès à un service d\'enlèvement est simplifié. Notre équipe à Vert-le-Grand assure un service professionnel d\'enlèvement gratuit en zone rurale. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Nous adaptons notre intervention à Vert-le-Grand en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Vert-le-Grand implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vert-le-Grand',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Vert-le-Grand. L\'intervention à Vert-le-Grand est programmée après avoir pris connaissance de votre situation. La zone 91810 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Vert-le-Grand. Au-delà des limites de Vert-le-Grand, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vert-le-Grand',
      questions: [
        { q: 'L\'intervention à Vert-le-Grand est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vert-le-Grand sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vert-le-Grand',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
