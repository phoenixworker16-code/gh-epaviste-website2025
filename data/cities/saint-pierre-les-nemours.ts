import { PageData } from '../types'

export const saintPierreLesNemoursData: PageData = {
  slug: 'saint-pierre-les-nemours',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Pierre-lès-Nemours (77140) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Pierre-lès-Nemours (77140). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire retirer son vieux véhicule à Saint-Pierre-lès-Nemours (77140) - Enlèvement Saint-Pierre-lès-Nemours',
      subtitle: 'Votre épave à Saint-Pierre-lès-Nemours retirée gratuitement. Intervention rapide dans le 77140 à Saint-Pierre-lès-Nemours.',
      badge: 'Saint-Pierre-lès-Nemours (77140)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Pierre-lès-Nemours',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Saint-Pierre-lès-Nemours ? Nous l\'enlevons gratuitement. Votre propriété à Saint-Pierre-lès-Nemours est accessible à nos dépanneuses pour un enlèvement gratuit. À Saint-Pierre-lès-Nemours, nous retirons les épaves des champs, prés et chemins sans difficulté. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. L\'équipe dépêchée à Saint-Pierre-lès-Nemours connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Pierre-lès-Nemours soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est complété par un transfert organisé vers un partenaire de la filière agréée. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Pierre-lès-Nemours',
      intro: 'Nous intervenons à Saint-Pierre-lès-Nemours dans tous les secteurs, y compris dans les zones à accès difficile. Pour Saint-Pierre-lès-Nemours, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. La zone 77140 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Saint-Pierre-lès-Nemours. À partir de Saint-Pierre-lès-Nemours, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Pierre-lès-Nemours',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Pierre-lès-Nemours est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Pierre-lès-Nemours sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Pierre-lès-Nemours',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
