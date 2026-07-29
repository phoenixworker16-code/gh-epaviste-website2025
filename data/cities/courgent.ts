import { PageData } from '../types'

export const courgentData: PageData = {
  slug: 'courgent',
  entityType: 'City',
  metaTitle: 'Épaviste Courgent (78790) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Courgent (78790). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Courgent (78790) dans tout le 78790',
      subtitle: 'Enlèvement gratuit VHU à Courgent (78790). Prenez rendez-vous, on s\'occupe de votre épave à Courgent.',
      badge: 'Courgent (78790)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Courgent',
      content: 'Votre propriété rurale à Courgent n\'a pas besoin de cette épave : faites-la enlever. Dans la campagne de Courgent, nous intervenons sans frais de déplacement supplémentaires. Nous intervenons à Courgent pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Notre équipe connaît les spécificités des zones rurales autour de Courgent pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Courgent, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Courgent',
      intro: 'Pour les habitants de Courgent, l\'enlèvement d\'épave est gratuit dans toute la commune. Chaque enlèvement à Courgent est préparé en étudiant les accès et les contraintes locales. Les habitants du 78790 à Courgent bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les communes qui entourent Courgent profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Courgent',
      questions: [
        { q: 'L\'intervention à Courgent est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Courgent sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Courgent',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
