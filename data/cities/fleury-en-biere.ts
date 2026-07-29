import { PageData } from '../types'

export const fleuryEnBiereData: PageData = {
  slug: 'fleury-en-biere',
  entityType: 'City',
  metaTitle: 'Épaviste Fleury-en-Bière (77930) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fleury-en-Bière (77930). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service de retrait d\'épave à Fleury-en-Bière sans frais dans tout Fleury-en-Bière (77930)',
      subtitle: 'Retrait de VHU à Fleury-en-Bière (77930) : un service gratuit et rapide pour tout Fleury-en-Bière et ses environs.',
      badge: 'Fleury-en-Bière (77930)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fleury-en-Bière',
      content: 'À Fleury-en-Bière, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Même à Fleury-en-Bière, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Fleury-en-Bière, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Fleury-en-Bière.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Fleury-en-Bière soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est orienté vers une structure partenaire disposant des autorisations nécessaires. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fleury-en-Bière',
      intro: 'Notre service gratuit à Fleury-en-Bière couvre toutes les zones, du bourg aux hameaux périphériques. Avant l\'intervention à Fleury-en-Bière, le professionnel analyse les accès et prépare son équipement. Notre service dessert quotidiennement le secteur 77930 de Fleury-en-Bière avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au-delà des limites de Fleury-en-Bière, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fleury-en-Bière',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Fleury-en-Bière est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fleury-en-Bière sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Fleury-en-Bière',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
