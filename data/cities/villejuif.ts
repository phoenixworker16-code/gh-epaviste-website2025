import { PageData } from '../types'

export const villejuifData: PageData = {
  slug: 'villejuif',
  entityType: 'City',
  metaTitle: 'Épaviste Villejuif (94800) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villejuif (94800). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement de véhicule à Villejuif (94800) dans tout Villejuif',
      subtitle: 'Villejuif (94800) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Villejuif.',
      badge: 'Villejuif (94800)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villejuif',
      intro: 'Pour les habitants de Villejuif, l\'enlèvement d\'épave est gratuit dans toute la commune. L\'intervention à Villejuif est programmée après avoir pris connaissance de votre situation. Notre équipe couvre le secteur postal 94800 avec une logistique dédiée. Les habitants de Villejuif peuvent compter sur notre présence régulière dans ce code postal. Les habitants des environs de Villejuif peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villejuif',
      content: 'Un véhicule hors d\'usage à Villejuif peut rapidement devenir une source de contraintes. Les quartiers denses de Villejuif nécessitent une intervention rapide pour éviter les nuisances. À Villejuif, l\'enlèvement gratuit est réalisé par des professionnels de la petite couronne. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Notre présence régulière à Villejuif nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villejuif soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. Les obligations déclaratives sont remplies par les opérateurs compétents de la filière. L\'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villejuif',
      questions: [
        { q: 'L\'intervention à Villejuif est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villejuif sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villejuif ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villejuif',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
