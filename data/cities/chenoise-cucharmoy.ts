import { PageData } from '../types'

export const chenoiseCucharmoyData: PageData = {
  slug: 'chenoise-cucharmoy',
  entityType: 'City',
  metaTitle: 'Épaviste Chenoise-Cucharmoy (77160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chenoise-Cucharmoy (77160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement voiture hors d\'usage Chenoise-Cucharmoy (77160) - Service Chenoise-Cucharmoy',
      subtitle: 'Chenoise-Cucharmoy (77160) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Chenoise-Cucharmoy.',
      badge: 'Chenoise-Cucharmoy (77160)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chenoise-Cucharmoy',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Chenoise-Cucharmoy peut être retiré sans frais. Votre propriété à Chenoise-Cucharmoy est accessible à nos dépanneuses pour un enlèvement gratuit. Nous organisons à Chenoise-Cucharmoy des interventions adaptées aux grandes propriétés et aux écarts. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Nous prévoyons le passage à Chenoise-Cucharmoy en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Chenoise-Cucharmoy soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chenoise-Cucharmoy',
      intro: 'À Chenoise-Cucharmoy, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. L\'intervention à Chenoise-Cucharmoy fait l\'objet d\'une préparation approfondie en amont. La zone 77160 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Chenoise-Cucharmoy. Les communes proches de Chenoise-Cucharmoy sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chenoise-Cucharmoy',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Chenoise-Cucharmoy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chenoise-Cucharmoy sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chenoise-Cucharmoy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
