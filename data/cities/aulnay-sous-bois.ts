import { PageData } from '../types'

export const aulnaySousBoisData: PageData = {
  slug: 'aulnay-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Aulnay-sous-Bois (93600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Aulnay-sous-Bois (93600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre véhicule hors d\'usage à Aulnay-sous-Bois (93600) - Épaviste Aulnay-sous-Bois',
      subtitle: 'Enlèvement gratuit VHU à Aulnay-sous-Bois (93600). Prenez rendez-vous, on s\'occupe de votre épave à Aulnay-sous-Bois.',
      badge: 'Aulnay-sous-Bois (93600)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Aulnay-sous-Bois',
      intro: 'Pour un enlèvement à Aulnay-sous-Bois, notre logistique couvre tous les secteurs sans exception. Nous préparons l\'enlèvement à Aulnay-sous-Bois avec le souci du détail pour une exécution parfaite. Les habitants du 93600 à Aulnay-sous-Bois bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Autour de Aulnay-sous-Bois, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Aulnay-sous-Bois',
      content: 'Dans une commune dense comme Aulnay-sous-Bois, une épave gêne rapidement la circulation quotidienne. Dans une commune dense comme Aulnay-sous-Bois, chaque mètre de voirie compte pour le stationnement. À Aulnay-sous-Bois, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Le professionnel connaît les secteurs denses de Aulnay-sous-Bois pour une approche efficace.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Aulnay-sous-Bois implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Aulnay-sous-Bois',
      questions: [
        { q: 'L\'intervention à Aulnay-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Aulnay-sous-Bois sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Aulnay-sous-Bois ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Aulnay-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
