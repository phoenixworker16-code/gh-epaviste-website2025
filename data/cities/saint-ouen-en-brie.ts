import { PageData } from '../types'

export const saintOuenEnBrieData: PageData = {
  slug: 'saint-ouen-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Ouen-en-Brie (77720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Ouen-en-Brie (77720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement de véhicule accidenté à Saint-Ouen-en-Brie sans frais dans tout Saint-Ouen-en-Brie (77720)',
      subtitle: 'Débarras auto Saint-Ouen-en-Brie (77720) : notre équipe enlève gratuitement votre épave à Saint-Ouen-en-Brie.',
      badge: 'Saint-Ouen-en-Brie (77720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Ouen-en-Brie',
      content: 'À Saint-Ouen-en-Brie, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Dans l\'environnement rural de Saint-Ouen-en-Brie, nous intervenons avec discrétion et efficacité. À Saint-Ouen-en-Brie, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Saint-Ouen-en-Brie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Ouen-en-Brie soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les professionnels intervenants garantissent l\'application des règles en matière de recyclage. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Ouen-en-Brie',
      intro: 'Les propriétaires à Saint-Ouen-en-Brie peuvent compter sur notre service dans toute la commune. L\'organisation du passage à Saint-Ouen-en-Brie tient compte des particularités annoncées. Le code postal 77720 est intégré dans notre tournée d\'enlèvement régulière à Saint-Ouen-en-Brie, ce qui garantit une intervention rapide. Notre rayon d\'action ne se limite pas à Saint-Ouen-en-Brie mais s\'étend aux alentours.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Ouen-en-Brie',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Ouen-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Ouen-en-Brie sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Ouen-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
