import { PageData } from '../types'

export const lhayLesRosesData: PageData = {
  slug: 'lhay-les-roses',
  entityType: 'City',
  metaTitle: 'Épaviste L\'Haÿ-les-Roses (94240) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à L\'Haÿ-les-Roses (94240). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave L\'Haÿ-les-Roses (94240) - Service gratuit à L\'Haÿ-les-Roses',
      subtitle: 'Enlèvement d\'épave L\'Haÿ-les-Roses (94240) : service rapide et gratuit pour votre VHU dans tout L\'Haÿ-les-Roses.',
      badge: 'L\'Haÿ-les-Roses (94240)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur L\'Haÿ-les-Roses',
      intro: 'Grâce à notre organisation, L\'Haÿ-les-Roses est entièrement desservie pour l\'enlèvement d\'épaves. Un créneau d\'enlèvement à L\'Haÿ-les-Roses vous est proposé selon vos disponibilités. Les habitants du 94240 à L\'Haÿ-les-Roses bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au départ de L\'Haÿ-les-Roses, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à L\'Haÿ-les-Roses',
      content: 'À L\'Haÿ-les-Roses, la densité urbaine rend le retrapide des épaves indispensable. À L\'Haÿ-les-Roses, la densité urbaine rend le retrait des épaves prioritaire pour la collectivité. À L\'Haÿ-les-Roses, nous garantissons un service d\'enlèvement gratuit et efficace dans toute la commune. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Notre expérience de la banlieue dense garantit un enlèvement rapide à L\'Haÿ-les-Roses.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à L\'Haÿ-les-Roses soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est complété par un transfert organisé vers un partenaire de la filière agréée. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à L\'Haÿ-les-Roses',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à L\'Haÿ-les-Roses ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à L\'Haÿ-les-Roses est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à L\'Haÿ-les-Roses sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à L\'Haÿ-les-Roses',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
