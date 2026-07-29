import { PageData } from '../types'

export const guignesData: PageData = {
  slug: 'guignes',
  entityType: 'City',
  metaTitle: 'Épaviste Guignes (77390) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Guignes (77390). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave gratuit à Guignes (77390) - Service Guignes',
      subtitle: 'À Guignes (77390) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Guignes.',
      badge: 'Guignes (77390)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Guignes',
      content: 'Nous venons à Guignes avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Dans l\'environnement rural de Guignes, nous intervenons avec discrétion et efficacité. À Guignes, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La demande permet d\'identifier les informations nécessaires avant le déplacement. Nous organisons le passage à Guignes avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Guignes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée. La fin de vie du véhicule est gérée conformément aux procédures réglementaires établies. La coordination des professionnels garantit l\'efficacité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Guignes',
      intro: 'Même dans les secteurs les plus excentrés de Guignes, nous organisons l\'enlèvement. Notre équipe adapte sa logistique à Guignes en fonction de chaque configuration. Notre équipe couvre le secteur postal 77390 avec une logistique dédiée. Les habitants de Guignes peuvent compter sur notre présence régulière dans ce code postal. À partir du secteur de Guignes, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Guignes',
      questions: [
        { q: 'L\'intervention à Guignes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Guignes sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Guignes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
