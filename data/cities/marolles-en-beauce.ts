import { PageData } from '../types'

export const marollesEnBeauceData: PageData = {
  slug: 'marolles-en-beauce',
  entityType: 'City',
  metaTitle: 'Épaviste Marolles-en-Beauce (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Marolles-en-Beauce (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service épaviste Marolles-en-Beauce (91150) - Intervention rapide à Marolles-en-Beauce',
      subtitle: 'Marolles-en-Beauce (91150) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Marolles-en-Beauce.',
      badge: 'Marolles-en-Beauce (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Marolles-en-Beauce',
      content: 'Dans le secteur rural de Marolles-en-Beauce, nous nous déplaçons gratuitement pour enlever votre épave. À Marolles-en-Beauce, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Le déplacement à Marolles-en-Beauce est inclus dans notre service, sans supplément kilométrique. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Les distances jusqu\'à Marolles-en-Beauce sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Marolles-en-Beauce soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Marolles-en-Beauce',
      intro: 'La zone d\'intervention à Marolles-en-Beauce comprend aussi bien les voies principales que les impasses. Nous préparons l\'enlèvement à Marolles-en-Beauce avec le souci du détail pour une exécution parfaite. Notre service dessert quotidiennement le secteur 91150 de Marolles-en-Beauce avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les localités voisines de Marolles-en-Beauce peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Marolles-en-Beauce',
      questions: [
        { q: 'L\'intervention à Marolles-en-Beauce est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Marolles-en-Beauce sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Marolles-en-Beauce',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
