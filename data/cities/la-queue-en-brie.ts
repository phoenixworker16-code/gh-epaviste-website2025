import { PageData } from '../types'

export const laQueueEnBrieData: PageData = {
  slug: 'la-queue-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste La Queue-en-Brie (94510) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Queue-en-Brie (94510). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement gratuit de votre épave à La Queue-en-Brie (94510) dans tout La Queue-en-Brie',
      subtitle: 'Débarrassez votre épave à La Queue-en-Brie (94510) sans frais. Notre service couvre tout le secteur de La Queue-en-Brie.',
      badge: 'La Queue-en-Brie (94510)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Queue-en-Brie',
      intro: 'Que votre épave soit à La Queue-en-Brie dans un parking, une rue ou un garage, nous l\'enlevons. Chaque enlèvement à La Queue-en-Brie est préparé en étudiant les accès et les contraintes locales. Notre service dessert quotidiennement le secteur 94510 de La Queue-en-Brie avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les routes et chemins autour de La Queue-en-Brie sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Queue-en-Brie',
      content: 'À La Queue-en-Brie, la densité urbaine rend le retrapide des épaves indispensable. À La Queue-en-Brie, faire enlever son épave gratuitement, c\'est aussi un geste pour la collectivité. Nous organisons à La Queue-en-Brie des passages coordonnés pour éviter les heures de pointe. La demande permet d\'identifier les informations nécessaires avant le déplacement. Notre connaissance de la petite couronne garantit une intervention rapide à La Queue-en-Brie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Queue-en-Brie implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. Les différentes opérations sont soumises au respect des règles applicables à la filière. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Queue-en-Brie',
      questions: [
        { q: 'L\'intervention à La Queue-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Queue-en-Brie sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à La Queue-en-Brie ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à La Queue-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
