import { PageData } from '../types'

export const chauffourLesEtrechyData: PageData = {
  slug: 'chauffour-les-etrechy',
  entityType: 'City',
  metaTitle: 'Épaviste Chauffour-lès-Étréchy (91580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chauffour-lès-Étréchy (91580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Épaviste professionnel à Chauffour-lès-Étréchy (91580) pour votre VHU à Chauffour-lès-Étréchy',
      subtitle: 'Service d\'enlèvement d\'épave à Chauffour-lès-Étréchy (91580) : gratuit, rapide et professionnel à Chauffour-lès-Étréchy.',
      badge: 'Chauffour-lès-Étréchy (91580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chauffour-lès-Étréchy',
      content: 'À Chauffour-lès-Étréchy, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Chauffour-lès-Étréchy, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Chauffour-lès-Étréchy, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Les détails de l\'intervention à Chauffour-lès-Étréchy sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Chauffour-lès-Étréchy soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chauffour-lès-Étréchy',
      intro: 'Notre maillage territorial permet une couverture complète de Chauffour-lès-Étréchy pour les enlèvements. La préparation du retrait à Chauffour-lès-Étréchy inclut une évaluation des conditions d\'intervention. Pour le secteur 91580, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Chauffour-lès-Étréchy. Les habitants des environs de Chauffour-lès-Étréchy peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chauffour-lès-Étréchy',
      questions: [
        { q: 'L\'intervention à Chauffour-lès-Étréchy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chauffour-lès-Étréchy sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chauffour-lès-Étréchy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
