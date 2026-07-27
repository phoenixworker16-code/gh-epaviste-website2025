import { PageData } from '../types'

export const reuilEnBrieData: PageData = {
  slug: 'reuil-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Reuil-en-Brie (77260) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Reuil-en-Brie (77260). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Reuil-en-Brie - Prise en charge totale à Reuil-en-Brie (77260)',
      subtitle: 'Pour votre épave à Reuil-en-Brie (77260) : intervention gratuite et professionnelle dans tout Reuil-en-Brie.',
      badge: 'Reuil-en-Brie (77260)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Reuil-en-Brie',
      content: 'Votre terrain à Reuil-en-Brie retrouvera son aspect d\'origine après l\'enlèvement de cette épave. À Reuil-en-Brie, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Reuil-en-Brie, notre logistique rurale permet de retirer les épaves même en terrain accidenté. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Reuil-en-Brie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Reuil-en-Brie implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. La fin de vie du véhicule est gérée conformément aux procédures réglementaires établies. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Reuil-en-Brie',
      intro: 'L\'enlèvement à Reuil-en-Brie est organisé sans considération de zone ou de quartier. La logistique à Reuil-en-Brie est adaptée au type de véhicule et à son environnement. Les demandes pour le 77260 de Reuil-en-Brie sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les habitants des environs de Reuil-en-Brie peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Reuil-en-Brie',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Reuil-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Reuil-en-Brie sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Reuil-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
