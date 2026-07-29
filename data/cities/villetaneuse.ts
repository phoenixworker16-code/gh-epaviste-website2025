import { PageData } from '../types'

export const villetaneuseData: PageData = {
  slug: 'villetaneuse',
  entityType: 'City',
  metaTitle: 'Épaviste Villetaneuse (93430) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villetaneuse (93430). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de VHU à Villetaneuse (93430) pour les habitants de Villetaneuse',
      subtitle: 'Service de retrait d\'épave à Villetaneuse (93430). Gratuit et sans contrainte pour les habitants de Villetaneuse.',
      badge: 'Villetaneuse (93430)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villetaneuse',
      intro: 'Notre équipe intervient dans toute l\'agglomération de Villetaneuse pour retirer votre épave gratuitement. Le dispositif mis en place pour Villetaneuse est adapté à chaque situation particulière. Les habitants du 93430 à Villetaneuse bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les voies d\'accès et les secteurs autour de Villetaneuse font partie de notre circuit.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villetaneuse',
      content: 'Faites enlever gratuitement votre épave à Villetaneuse avant qu\'elle ne cause des problèmes de voisinage. Les quartiers denses de Villetaneuse nécessitent une intervention rapide pour éviter les nuisances. Notre équipe à Villetaneuse prend en charge gratuitement votre véhicule où qu\'il soit. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Notre expérience de la banlieue dense garantit un enlèvement rapide à Villetaneuse.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villetaneuse soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villetaneuse',
      questions: [
        { q: 'L\'intervention à Villetaneuse est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villetaneuse sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villetaneuse ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villetaneuse',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
