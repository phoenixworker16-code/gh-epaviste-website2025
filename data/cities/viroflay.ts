import { PageData } from '../types'

export const viroflayData: PageData = {
  slug: 'viroflay',
  entityType: 'City',
  metaTitle: 'Épaviste Viroflay (78220) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Viroflay (78220). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras véhicule hors d\'usage Viroflay (78220) - Épaviste Viroflay',
      subtitle: 'Épave à Viroflay ? Intervention gratuite dans le secteur 78220 de Viroflay sous 24-48h.',
      badge: 'Viroflay (78220)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Viroflay',
      content: 'Votre propriété à Viroflay est encombrée par un véhicule hors d\'usage ? Nous intervenons. Dans les secteurs agricoles de Viroflay, nous retirons les épaves sans endommager les terrains. Nous retirons gratuitement votre épave à Viroflay avec du matériel adapté aux terrains ruraux. La logistique est organisée pour garantir une intervention efficace et sans attente. L\'organisation de l\'enlèvement à Viroflay tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Viroflay, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Viroflay',
      intro: 'Tous les habitants de Viroflay peuvent bénéficier de notre service d\'enlèvement à domicile. À Viroflay, nous veillons à ce que tous les aspects logistiques soient anticipés. Pour le secteur 78220, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Viroflay. Au-delà du centre de Viroflay, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Viroflay',
      questions: [
        { q: 'L\'intervention à Viroflay est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Viroflay sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Viroflay',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
