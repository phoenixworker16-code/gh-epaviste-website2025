import { PageData } from '../types'

export const courbevoieData: PageData = {
  slug: 'courbevoie',
  entityType: 'City',
  metaTitle: 'Épaviste Courbevoie (92400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Courbevoie (92400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Courbevoie',
      subtitle: 'Prise en charge professionnelle de votre véhicule hors d\'usage avec un rendez-vous adapté à son emplacement.',
      badge: 'Courbevoie (92400)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Courbevoie',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Courbevoie pour procéder à l\'enlèvement de votre véhicule. Les informations de stationnement permettent d’anticiper les conditions de prise en charge. Les modalités de passage sont précisées avant le déplacement du professionnel. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Levallois-Perret et La Garenne-Colombes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Axes vers Asnières-sur-Seine', delay: '24h', specificities: 'Dépannage bord de route ou parking.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Courbevoie',
      content: 'La densité de circulation à Courbevoie (92400) exige une solution professionnelle pour l\'enlèvement de votre épave. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage et l\'amenons chez un broyeur agréé VHU partenaire. L’organisation du retrait tient compte de l’emplacement du véhicule, de son état et des conditions d’accès. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d’accès indiquées. Les informations disponibles sont examinées avant de fixer les modalités du retrait.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Courbevoie implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers un centre VHU partenaire agréé. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Courbevoie',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Courbevoie ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Courbevoie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Courbevoie sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Courbevoie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
