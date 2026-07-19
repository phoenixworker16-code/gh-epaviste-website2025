import { PageData } from '../types'

export const asnieresSurSeineData: PageData = {
  slug: 'asnieres-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Asnières-sur-Seine (92600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Asnières-sur-Seine (92600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de véhicule accidenté à Asnières-sur-Seine sans frais dans tout Asnières-sur-Seine (92600)',
      subtitle: 'Enlèvement gratuit VHU à Asnières-sur-Seine (92600). Prenez rendez-vous, on s\'occupe de votre épave à Asnières-sur-Seine.',
      badge: 'Asnières-sur-Seine (92600)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Asnières-sur-Seine',
      intro: 'Notre service gratuit à Asnières-sur-Seine couvre toutes les zones, du bourg aux hameaux périphériques. À Asnières-sur-Seine, le professionnel confirme avec vous les modalités avant de se déplacer. Notre équipe couvre le secteur postal 92600 avec une logistique dédiée. Les habitants de Asnières-sur-Seine peuvent compter sur notre présence régulière dans ce code postal. Les communes autour de Asnières-sur-Seine sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Asnières-sur-Seine',
      content: 'Dans une commune résidentielle dense comme Asnières-sur-Seine, une épave dérange tout le quartier. Les rues de Asnières-sur-Seine ne doivent pas servir de dépôt pour un véhicule hors d\'usage. L\'intervention à Asnières-sur-Seine est réalisée avec les équipements appropriés à la circulation locale. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Notre connaissance de la petite couronne garantit une intervention rapide à Asnières-sur-Seine.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Asnières-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Asnières-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Asnières-sur-Seine ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Asnières-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Asnières-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Asnières-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
