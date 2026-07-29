import { PageData } from '../types'

export const ittevilleData: PageData = {
  slug: 'itteville',
  entityType: 'City',
  metaTitle: 'Épaviste Itteville (91760) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Itteville (91760). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de carcasse auto à Itteville (91760) dans le secteur Itteville',
      subtitle: 'Pour votre épave à Itteville (91760) : intervention gratuite et professionnelle dans tout Itteville.',
      badge: 'Itteville (91760)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Itteville',
      content: 'Dans la campagne de Itteville, un véhicule hors d\'usage peut être retiré sans aucun frais. Dans l\'environnement rural de Itteville, nous intervenons avec discrétion et efficacité. Le service à Itteville est conçu pour les zones agricoles et les habitations isolées. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. L\'enlèvement à Itteville bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Itteville soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré rejoint une installation partenaire disposant des autorisations d\'exploitation. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Cette répartition des rôles assure une continuité entre l\'enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Itteville',
      intro: 'Même dans les secteurs les plus excentrés de Itteville, nous organisons l\'enlèvement. Le rendez-vous pour Itteville est défini en fonction des éléments communiqués lors du contact. Les demandes pour le 91760 de Itteville sont traitées en priorité par notre équipe qui connaît bien ce secteur. Notre dispositif autour de Itteville permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Itteville',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Itteville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Itteville sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Itteville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
