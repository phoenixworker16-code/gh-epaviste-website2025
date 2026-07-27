import { PageData } from '../types'

export const joinvilleLePontData: PageData = {
  slug: 'joinville-le-pont',
  entityType: 'City',
  metaTitle: 'Épaviste Joinville-le-Pont (94340) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Joinville-le-Pont (94340). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Joinville-le-Pont (94340) dans le 94340',
      subtitle: 'Nous enlevons les épaves à Joinville-le-Pont (94340). Prestation gratuite incluant remorquage à Joinville-le-Pont.',
      badge: 'Joinville-le-Pont (94340)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Joinville-le-Pont',
      intro: 'Notre dispositif à Joinville-le-Pont assure un enlèvement gratuit dans tous les secteurs sans exception. Nous organisons le passage à Joinville-le-Pont avec une préparation minutieuse de l\'itinéraire. Les demandes pour le 94340 de Joinville-le-Pont sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les communes proches de Joinville-le-Pont sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Joinville-le-Pont',
      content: 'Vous souhaitez vous débarrasser gratuitement de votre vieux véhicule à Joinville-le-Pont ? Dans une commune comme Joinville-le-Pont, le stationnement est déjà tendu sans une épave en plus. Notre logistique à Joinville-le-Pont est conçue pour minimiser les contraintes de circulation. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Nous vous accompagnons dans l\'organisation de l\'enlèvement à Joinville-le-Pont en toute sérénité.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Joinville-le-Pont, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré rejoint une installation partenaire disposant des autorisations d\'exploitation. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Joinville-le-Pont',
      questions: [
        { q: 'L\'intervention à Joinville-le-Pont est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Joinville-le-Pont sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Joinville-le-Pont ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Joinville-le-Pont',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
