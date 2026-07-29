import { PageData } from '../types'

export const boissyLeSecData: PageData = {
  slug: 'boissy-le-sec',
  entityType: 'City',
  metaTitle: 'Épaviste Boissy-le-Sec (91870) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boissy-le-Sec (91870). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Boissy-le-Sec (91870) pour les habitants de Boissy-le-Sec',
      subtitle: 'Épave à Boissy-le-Sec ? Intervention gratuite dans le secteur 91870 de Boissy-le-Sec sous 24-48h.',
      badge: 'Boissy-le-Sec (91870)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boissy-le-Sec',
      content: 'Votre propriété rurale à Boissy-le-Sec n\'a pas besoin de cette épave : faites-la enlever. Dans l\'environnement rural de Boissy-le-Sec, nous intervenons avec discrétion et efficacité. Nous intervenons à Boissy-le-Sec pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Notre équipe connaît les spécificités des zones rurales autour de Boissy-le-Sec pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Boissy-le-Sec implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boissy-le-Sec',
      intro: 'Les équipes affectées à Boissy-le-Sec connaissent parfaitement chaque secteur de la commune. La logistique à Boissy-le-Sec est adaptée au type de véhicule et à son environnement. Pour le secteur 91870, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Boissy-le-Sec. Les habitants des environs proches de Boissy-le-Sec peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boissy-le-Sec',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boissy-le-Sec est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boissy-le-Sec sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boissy-le-Sec',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
