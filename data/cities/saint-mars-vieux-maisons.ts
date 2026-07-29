import { PageData } from '../types'

export const saintMarsVieuxMaisonsData: PageData = {
  slug: 'saint-mars-vieux-maisons',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Mars-Vieux-Maisons (77320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Mars-Vieux-Maisons (77320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave gratuit à Saint-Mars-Vieux-Maisons (77320) - Service Saint-Mars-Vieux-Maisons',
      subtitle: 'Débarrassez votre épave à Saint-Mars-Vieux-Maisons (77320) sans frais. Notre service couvre tout le secteur de Saint-Mars-Vieux-Maisons.',
      badge: 'Saint-Mars-Vieux-Maisons (77320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Mars-Vieux-Maisons',
      content: 'Les zones rurales autour de Saint-Mars-Vieux-Maisons sont intégralement couvertes par notre service gratuit. Dans les secteurs ruraux autour de Saint-Mars-Vieux-Maisons, l\'accès à un service d\'enlèvement est simplifié. Notre service rural à Saint-Mars-Vieux-Maisons garantit un retrait professionnel sans contrainte de distance. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Nous organisons le passage à Saint-Mars-Vieux-Maisons avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Mars-Vieux-Maisons soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Mars-Vieux-Maisons',
      intro: 'Toutes les rues de Saint-Mars-Vieux-Maisons sont couvertes, quel que soit le type d\'habitation. Notre équipe adapte sa logistique à Saint-Mars-Vieux-Maisons en fonction de chaque configuration. Notre équipe couvre le secteur postal 77320 avec une logistique dédiée. Les habitants de Saint-Mars-Vieux-Maisons peuvent compter sur notre présence régulière dans ce code postal. Au-delà des limites de Saint-Mars-Vieux-Maisons, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Mars-Vieux-Maisons',
      questions: [
        { q: 'L\'intervention à Saint-Mars-Vieux-Maisons est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Mars-Vieux-Maisons sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Mars-Vieux-Maisons',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
