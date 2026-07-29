import { PageData } from '../types'

export const gournaySurMarneData: PageData = {
  slug: 'gournay-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Gournay-sur-Marne (93460) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gournay-sur-Marne (93460). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Gournay-sur-Marne (93460) gratuitement dans tout Gournay-sur-Marne',
      subtitle: 'Gournay-sur-Marne (93460) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Gournay-sur-Marne.',
      badge: 'Gournay-sur-Marne (93460)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gournay-sur-Marne',
      intro: 'La zone d\'intervention à Gournay-sur-Marne comprend aussi bien les voies principales que les impasses. Le dispositif mis en place pour Gournay-sur-Marne est adapté à chaque situation particulière. Notre équipe couvre le secteur postal 93460 avec une logistique dédiée. Les habitants de Gournay-sur-Marne peuvent compter sur notre présence régulière dans ce code postal. Les zones industrielles et résidentielles autour de Gournay-sur-Marne sont comprises.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gournay-sur-Marne',
      content: 'À Gournay-sur-Marne, nous retirons votre épave gratuitement où qu\'elle se trouve dans la commune. À Gournay-sur-Marne, faire enlever son épave gratuitement, c\'est aussi un geste pour la collectivité. À Gournay-sur-Marne, l\'enlèvement gratuit est réalisé par des professionnels de la petite couronne. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. Nous adaptons notre logistique à la configuration urbaine de Gournay-sur-Marne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Gournay-sur-Marne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Le recyclage et les démarches administratives sont pris en charge par les filières compétentes. La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gournay-sur-Marne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Gournay-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Gournay-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gournay-sur-Marne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gournay-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
