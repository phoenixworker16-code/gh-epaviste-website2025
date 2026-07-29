import { PageData } from '../types'

export const lileSaintDenisData: PageData = {
  slug: 'lile-saint-denis',
  entityType: 'City',
  metaTitle: 'Épaviste L\'Île-Saint-Denis (93450) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à L\'Île-Saint-Denis (93450). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait gratuit de VHU à L\'Île-Saint-Denis (93450) pour les habitants de L\'Île-Saint-Denis',
      subtitle: 'Épave à L\'Île-Saint-Denis ? Intervention gratuite dans le secteur 93450 de L\'Île-Saint-Denis sous 24-48h.',
      badge: 'L\'Île-Saint-Denis (93450)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur L\'Île-Saint-Denis',
      intro: 'Tous les habitants de L\'Île-Saint-Denis peuvent bénéficier de notre service d\'enlèvement à domicile. Le rendez-vous pour L\'Île-Saint-Denis est fixé après un échange sur les conditions d\'accès. Notre service dessert quotidiennement le secteur 93450 de L\'Île-Saint-Denis avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au départ de L\'Île-Saint-Denis, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à L\'Île-Saint-Denis',
      content: 'À L\'Île-Saint-Denis, le stationnement est déjà difficile sans une épave qui occupe une place. Un véhicule hors d\'usage à L\'Île-Saint-Denis attire l\'attention et peut dégrader l\'image du quartier. À L\'Île-Saint-Denis, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Le professionnel connaît les secteurs denses de L\'Île-Saint-Denis pour une approche efficace.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis L\'Île-Saint-Denis, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à L\'Île-Saint-Denis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à L\'Île-Saint-Denis ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à L\'Île-Saint-Denis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à L\'Île-Saint-Denis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à L\'Île-Saint-Denis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
