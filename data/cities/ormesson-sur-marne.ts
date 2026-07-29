import { PageData } from '../types'

export const ormessonSurMarneData: PageData = {
  slug: 'ormesson-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Ormesson-sur-Marne (94490) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ormesson-sur-Marne (94490). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Ormesson-sur-Marne (94490) dans toute l\'agglomération Ormesson-sur-Marne',
      subtitle: 'Enlèvement gratuit VHU à Ormesson-sur-Marne (94490). Prenez rendez-vous, on s\'occupe de votre épave à Ormesson-sur-Marne.',
      badge: 'Ormesson-sur-Marne (94490)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ormesson-sur-Marne',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Ormesson-sur-Marne, notre service est disponible. L\'équipe dépêchée à Ormesson-sur-Marne connaît à l\'avance les conditions d\'accès au véhicule. Le code postal 94490 est intégré dans notre tournée d\'enlèvement régulière à Ormesson-sur-Marne, ce qui garantit une intervention rapide. Les zones industrielles et résidentielles autour de Ormesson-sur-Marne sont comprises.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ormesson-sur-Marne',
      content: 'Notre service à Ormesson-sur-Marne permet un enlèvement gratuit même dans les quartiers les plus denses. Dans une banlieue dense comme Ormesson-sur-Marne, l\'espace public est une ressource partagée à préserver. Notre service à Ormesson-sur-Marne garantit un enlèvement gratuit avec une logistique adaptée à la densité urbaine. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Nous vous accompagnons dans l\'organisation de l\'enlèvement à Ormesson-sur-Marne en toute sérénité.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Ormesson-sur-Marne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un prestataire spécialisé dans le traitement des véhicules en fin de vie. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. Les partenaires coordonnent leurs interventions pour assurer la complétude du traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ormesson-sur-Marne',
      questions: [
        { q: 'L\'intervention à Ormesson-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ormesson-sur-Marne sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Ormesson-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ormesson-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
