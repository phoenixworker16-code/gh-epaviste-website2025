import { PageData } from '../types'

export const chennevieresSurMarneData: PageData = {
  slug: 'chennevieres-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Chennevières-sur-Marne (94430) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chennevières-sur-Marne (94430). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Chennevières-sur-Marne (94430) - Épaviste Chennevières-sur-Marne',
      subtitle: 'À Chennevières-sur-Marne (94430) : notre équipe retire gratuitement votre vieux véhicule dans tout Chennevières-sur-Marne.',
      badge: 'Chennevières-sur-Marne (94430)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chennevières-sur-Marne',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Chennevières-sur-Marne. Avant de se déplacer à Chennevières-sur-Marne, l\'équipe vérifie les accès et prépare le matériel adapté. Les demandes pour le 94430 de Chennevières-sur-Marne sont traitées en priorité par notre équipe qui connaît bien ce secteur. Si vous résidez près de Chennevières-sur-Marne, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chennevières-sur-Marne',
      content: 'Votre voiture ne roule plus à Chennevières-sur-Marne et vous voulez une intervention rapide ? Dans une commune dense comme Chennevières-sur-Marne, chaque mètre de voirie compte pour le stationnement. Notre équipe à Chennevières-sur-Marne prend en charge gratuitement votre véhicule où qu\'il soit. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Les créneaux proposés tiennent compte des heures d\'affluence à Chennevières-sur-Marne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Chennevières-sur-Marne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré rejoint une installation partenaire disposant des autorisations d\'exploitation. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Le suivi du parcours permet au propriétaire de connaître les différentes étapes réalisées.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chennevières-sur-Marne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Chennevières-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Chennevières-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chennevières-sur-Marne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chennevières-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
