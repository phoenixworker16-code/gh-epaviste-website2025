import { PageData } from '../types'

export const lePlessisTreviseData: PageData = {
  slug: 'le-plessis-trevise',
  entityType: 'City',
  metaTitle: 'Épaviste Le Plessis-Trévise (94420) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Plessis-Trévise (94420). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faites enlever votre vieille voiture à Le Plessis-Trévise gratuitement dans tout Le Plessis-Trévise',
      subtitle: 'À Le Plessis-Trévise (94420), nous organisons l\'enlèvement gratuit de votre épave partout dans Le Plessis-Trévise.',
      badge: 'Le Plessis-Trévise (94420)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Plessis-Trévise',
      intro: 'Notre service gratuit à Le Plessis-Trévise couvre toutes les zones, du bourg aux hameaux périphériques. Notre équipe adapte sa logistique à Le Plessis-Trévise en fonction de chaque configuration. Le secteur 94420 de Le Plessis-Trévise est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les zones limitrophes de Le Plessis-Trévise peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Plessis-Trévise',
      content: 'La densité de circulation à Le Plessis-Trévise exige une solution professionnelle pour l\'enlèvement de votre épave. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage rapidement. À Le Plessis-Trévise, l\'enlèvement gratuit est organisé rapidement avec du matériel adapté. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. Notre expérience de la banlieue dense garantit un enlèvement rapide à Le Plessis-Trévise.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Plessis-Trévise soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation du service prévoit l\'orientation systématique vers un professionnel habilité. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Plessis-Trévise',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Le Plessis-Trévise ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Plessis-Trévise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Plessis-Trévise sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Plessis-Trévise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
