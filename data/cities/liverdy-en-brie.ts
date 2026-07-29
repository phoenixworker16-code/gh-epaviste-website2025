import { PageData } from '../types'

export const liverdyEnBrieData: PageData = {
  slug: 'liverdy-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Liverdy-en-Brie (77220) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Liverdy-en-Brie (77220). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Liverdy-en-Brie (77220) dans tout Liverdy-en-Brie',
      subtitle: 'Retrait de VHU à Liverdy-en-Brie (77220) : un service gratuit et rapide pour tout Liverdy-en-Brie et ses environs.',
      badge: 'Liverdy-en-Brie (77220)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Liverdy-en-Brie',
      content: 'Votre terrain à Liverdy-en-Brie retrouvera son aspect d\'origine après l\'enlèvement de cette épave. À Liverdy-en-Brie, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Liverdy-en-Brie, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Nous organisons le passage à Liverdy-en-Brie avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Liverdy-en-Brie soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Les professionnels intervenants garantissent l\'application des règles en matière de recyclage. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Liverdy-en-Brie',
      intro: 'Notre équipe se rend dans chaque quartier de Liverdy-en-Brie pour les enlèvements programmés. Nous préparons l\'enlèvement à Liverdy-en-Brie avec le souci du détail pour une exécution parfaite. Les demandes pour le 77220 de Liverdy-en-Brie sont traitées en priorité par notre équipe qui connaît bien ce secteur. Nous ne nous limitons pas à Liverdy-en-Brie : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Liverdy-en-Brie',
      questions: [
        { q: 'L\'intervention à Liverdy-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Liverdy-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Liverdy-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
