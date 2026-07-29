import { PageData } from '../types'

export const menucourtData: PageData = {
  slug: 'menucourt',
  entityType: 'City',
  metaTitle: 'Épaviste Menucourt (95180) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Menucourt (95180). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de carcasse auto à Menucourt (95180) dans le secteur Menucourt',
      subtitle: 'Service d\'enlèvement à Menucourt (95180) : retrait gratuit de votre VHU par notre équipe à Menucourt.',
      badge: 'Menucourt (95180)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Menucourt',
      content: 'Nous venons à Menucourt avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Vivre à la campagne à Menucourt ne signifie pas renoncer à un service d\'enlèvement professionnel. À Menucourt, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La logistique est organisée pour garantir une intervention efficace et sans attente. Notre équipe à Menucourt est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Menucourt soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Menucourt',
      intro: 'Notre maillage territorial permet une couverture complète de Menucourt pour les enlèvements. Les détails d\'accès pour Menucourt sont examinés avant le départ de l\'équipe. La zone 95180 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Menucourt. Nous étendons notre intervention au-delà de Menucourt pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Menucourt',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Menucourt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Menucourt sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Menucourt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
