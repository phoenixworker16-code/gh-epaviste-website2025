import { PageData } from '../types'

export const chennevieresLesLouvresData: PageData = {
  slug: 'chennevieres-les-louvres',
  entityType: 'City',
  metaTitle: 'Épaviste Chennevières-lès-Louvres (95380) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chennevières-lès-Louvres (95380). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave Chennevières-lès-Louvres (95380) - Service gratuit à Chennevières-lès-Louvres',
      subtitle: 'Débarrassez votre épave à Chennevières-lès-Louvres gratuitement. Notre équipe intervient dans tout le 95380 de Chennevières-lès-Louvres.',
      badge: 'Chennevières-lès-Louvres (95380)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chennevières-lès-Louvres',
      content: 'Redonnez de l\'espace à votre terrain à Chennevières-lès-Louvres en confiant cette épave à notre service. Dans les secteurs agricoles de Chennevières-lès-Louvres, nous retirons les épaves sans endommager les terrains. Notre équipe à Chennevières-lès-Louvres assure un service professionnel d\'enlèvement gratuit en zone rurale. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre connaissance des zones rurales garantit une intervention efficace à Chennevières-lès-Louvres.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Chennevières-lès-Louvres soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chennevières-lès-Louvres',
      intro: 'Si votre épave se trouve à Chennevières-lès-Louvres, notre équipe peut intervenir sans contrainte de zone. Le dispositif mis en place pour Chennevières-lès-Louvres est adapté à chaque situation particulière. Les demandes pour le 95380 de Chennevières-lès-Louvres sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà des limites de Chennevières-lès-Louvres, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chennevières-lès-Louvres',
      questions: [
        { q: 'L\'intervention à Chennevières-lès-Louvres est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chennevières-lès-Louvres sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Chennevières-lès-Louvres',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
