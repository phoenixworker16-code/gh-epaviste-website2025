import { PageData } from '../types'

export const montgeEnGoeleData: PageData = {
  slug: 'montge-en-goele',
  entityType: 'City',
  metaTitle: 'Épaviste Montgé-en-Goële (77230) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montgé-en-Goële (77230). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Montgé-en-Goële (77230) dans tout Montgé-en-Goële',
      subtitle: 'Montgé-en-Goële (77230) : enlèvement gratuit de votre épave à Montgé-en-Goële par notre équipe.',
      badge: 'Montgé-en-Goële (77230)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montgé-en-Goële',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Montgé-en-Goële ? Nous l\'enlevons gratuitement. À la campagne, à Montgé-en-Goële, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Le service à Montgé-en-Goële est conçu pour les zones agricoles et les habitations isolées. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Les modalités d\'accès à Montgé-en-Goële sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Montgé-en-Goële soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Les obligations environnementales sont satisfaites par les partenaires de la filière. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montgé-en-Goële',
      intro: 'La couverture de Montgé-en-Goële par notre service d\'enlèvement est totale et sans restriction. Le passage à Montgé-en-Goële est planifié de manière à optimiser le temps d\'intervention. La zone 77230 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Montgé-en-Goële. Notre couverture géographique dépasse Montgé-en-Goële pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montgé-en-Goële',
      questions: [
        { q: 'L\'intervention à Montgé-en-Goële est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montgé-en-Goële sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Montgé-en-Goële',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
