import { PageData } from '../types'

export const sevresData: PageData = {
  slug: 'sevres',
  entityType: 'City',
  metaTitle: 'Épaviste Sèvres (92310) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Sèvres (92310). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service rapide d\'enlèvement d\'épave à Sèvres (92310) dans tout Sèvres',
      subtitle: 'Service d\'enlèvement à Sèvres (92310) : retrait gratuit de votre VHU par notre équipe à Sèvres.',
      badge: 'Sèvres (92310)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Sèvres',
      intro: 'Même dans les secteurs les plus excentrés de Sèvres, nous organisons l\'enlèvement. Pour Sèvres, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Notre équipe couvre le secteur postal 92310 avec une logistique dédiée. Les habitants de Sèvres peuvent compter sur notre présence régulière dans ce code postal. Notre zone de couverture s\'articule autour de Sèvres et de ses environs.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Sèvres',
      content: 'Dans une commune dense comme Sèvres, une épave gêne rapidement la circulation quotidienne. À Sèvres, les règles de stationnement sont strictes concernant les véhicules hors d\'usage. L\'intervention à Sèvres est réalisée avec les équipements appropriés à la circulation locale. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Les modalités de l\'enlèvement sont adaptées à chaque situation dans Sèvres.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Sèvres soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré rejoint une installation partenaire disposant des autorisations d\'exploitation. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Sèvres',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Sèvres ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Sèvres est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Sèvres sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Sèvres',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
