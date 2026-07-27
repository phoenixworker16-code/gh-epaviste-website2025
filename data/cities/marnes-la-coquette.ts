import { PageData } from '../types'

export const marnesLaCoquetteData: PageData = {
  slug: 'marnes-la-coquette',
  entityType: 'City',
  metaTitle: 'Épaviste Marnes-la-Coquette (92430) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Marnes-la-Coquette (92430). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Marnes-la-Coquette (92430) - Intervention rapide à Marnes-la-Coquette',
      subtitle: 'Votre véhicule hors d\'usage à Marnes-la-Coquette (92430) ? Enlèvement gratuit partout dans Marnes-la-Coquette.',
      badge: 'Marnes-la-Coquette (92430)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Marnes-la-Coquette',
      intro: 'Vous avez une épave à Marnes-la-Coquette ? Notre équipe se déplace gratuitement où qu\'elle soit. Pour Marnes-la-Coquette, une préparation sur mesure est réalisée selon vos indications. Notre équipe couvre le secteur postal 92430 avec une logistique dédiée. Les habitants de Marnes-la-Coquette peuvent compter sur notre présence régulière dans ce code postal. Notre couverture géographique dépasse Marnes-la-Coquette pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Marnes-la-Coquette',
      content: 'Votre véhicule est immobilisé à Marnes-la-Coquette et vous cherchez un enlèvement gratuit et fiable ? Dans une commune comme Marnes-la-Coquette, le stationnement est déjà tendu sans une épave en plus. Notre service à Marnes-la-Coquette garantit un enlèvement gratuit avec une logistique adaptée à la densité urbaine. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Les créneaux proposés tiennent compte des heures d\'affluence à Marnes-la-Coquette.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Marnes-la-Coquette soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Marnes-la-Coquette',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Marnes-la-Coquette ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Marnes-la-Coquette est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Marnes-la-Coquette sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Marnes-la-Coquette',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
