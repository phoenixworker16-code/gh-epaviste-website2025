import { PageData } from '../types'

export const chevillyLarueData: PageData = {
  slug: 'chevilly-larue',
  entityType: 'City',
  metaTitle: 'Épaviste Chevilly-Larue (94550) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chevilly-Larue (94550). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement épave Chevilly-Larue (94550) - Prise en charge Chevilly-Larue',
      subtitle: 'Enlèvement gratuit dans le 94550 à Chevilly-Larue. Débarras professionnel de votre épave à Chevilly-Larue.',
      badge: 'Chevilly-Larue (94550)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chevilly-Larue',
      intro: 'Le retrait de votre épave à Chevilly-Larue est possible où qu\'elle se trouve sur la commune. Le passage à Chevilly-Larue est planifié de manière à optimiser le temps d\'intervention. Les habitants du 94550 à Chevilly-Larue bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre dispositif autour de Chevilly-Larue permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chevilly-Larue',
      content: 'Dans une commune résidentielle dense comme Chevilly-Larue, une épave dérange tout le quartier. À Chevilly-Larue, la densité urbaine rend le retrait des épaves prioritaire pour la collectivité. À Chevilly-Larue, nous garantissons un service d\'enlèvement gratuit et efficace dans toute la commune. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Nous vous accompagnons dans l\'organisation de l\'enlèvement à Chevilly-Larue en toute sérénité.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Chevilly-Larue, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chevilly-Larue',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Chevilly-Larue ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Chevilly-Larue est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chevilly-Larue sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chevilly-Larue',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
