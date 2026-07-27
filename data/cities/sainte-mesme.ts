import { PageData } from '../types'

export const sainteMesmeData: PageData = {
  slug: 'sainte-mesme',
  entityType: 'City',
  metaTitle: 'Épaviste Sainte-Mesme (78730) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Sainte-Mesme (78730). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de épave sans frais à Sainte-Mesme (78730) - Service pour Sainte-Mesme',
      subtitle: 'Besoin d\'un épaviste à Sainte-Mesme (78730) ? Enlèvement gratuit de votre VHU dans tout Sainte-Mesme.',
      badge: 'Sainte-Mesme (78730)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Sainte-Mesme',
      content: 'Votre propriété rurale à Sainte-Mesme n\'a pas besoin de cette épave : faites-la enlever. À Sainte-Mesme, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Les exploitants agricoles de Sainte-Mesme nous confient leurs épaves pour un traitement réglementaire. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Les distances jusqu\'à Sainte-Mesme sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Sainte-Mesme soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Sainte-Mesme',
      intro: 'La couverture de Sainte-Mesme par notre service d\'enlèvement est totale et sans restriction. Le planning d\'intervention à Sainte-Mesme intègre les contraintes horaires du propriétaire. Notre service dessert quotidiennement le secteur 78730 de Sainte-Mesme avec des équipes spécialisées dans l\'enlèvement d\'épaves. Nous étendons notre intervention au-delà de Sainte-Mesme pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Sainte-Mesme',
      questions: [
        { q: 'L\'intervention à Sainte-Mesme est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Sainte-Mesme sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Sainte-Mesme',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
