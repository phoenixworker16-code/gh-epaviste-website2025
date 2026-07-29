import { PageData } from '../types'

export const brySurMarneData: PageData = {
  slug: 'bry-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Bry-sur-Marne (94360) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bry-sur-Marne (94360). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Bry-sur-Marne (94360) par épaviste à Bry-sur-Marne',
      subtitle: 'Pour votre épave à Bry-sur-Marne (94360) : intervention gratuite et professionnelle dans tout Bry-sur-Marne.',
      badge: 'Bry-sur-Marne (94360)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bry-sur-Marne',
      intro: 'Notre service à Bry-sur-Marne est accessible dans tous les quartiers, du centre aux lotissements. Avant l\'intervention à Bry-sur-Marne, le professionnel analyse les accès et prépare son équipement. Les demandes pour le 94360 de Bry-sur-Marne sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les zones industrielles et résidentielles autour de Bry-sur-Marne sont comprises.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bry-sur-Marne',
      content: 'À Bry-sur-Marne, la densité urbaine rend le retrapide des épaves indispensable. À Bry-sur-Marne, nous intervenons dans tous les quartiers, même les plus denses. Nous organisons à Bry-sur-Marne des passages coordonnés pour éviter les heures de pointe. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Chaque intervention à Bry-sur-Marne est préparée avec minutie pour éviter les imprévus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bry-sur-Marne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bry-sur-Marne',
      questions: [
        { q: 'L\'intervention à Bry-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bry-sur-Marne sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Bry-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bry-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
