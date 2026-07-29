import { PageData } from '../types'

export const egrevilleData: PageData = {
  slug: 'egreville',
  entityType: 'City',
  metaTitle: 'Épaviste Égreville (77620) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Égreville (77620). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à Égreville (77620) - Service Égreville',
      subtitle: 'Solution enlèvement épave à Égreville (77620). Intervention rapide et gratuite dans le 77620 de Égreville.',
      badge: 'Égreville (77620)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Égreville',
      content: 'Vous habitez à Égreville et une épave vous encombre depuis des mois ? Agissez gratuitement. À Égreville, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre service rural à Égreville garantit un retrait professionnel sans contrainte de distance. La logistique est organisée pour garantir une intervention efficace et sans attente. Les modalités de l\'intervention à Égreville sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Égreville soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est complété par un transfert organisé vers un partenaire de la filière agréée. Les professionnels intervenants garantissent l\'application des règles en matière de recyclage. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Égreville',
      intro: 'Même dans les secteurs les plus excentrés de Égreville, nous organisons l\'enlèvement. Le dispositif mis en place pour Égreville est adapté à chaque situation particulière. La zone 77620 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Égreville. Les voies d\'accès et les secteurs autour de Égreville font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Égreville',
      questions: [
        { q: 'L\'intervention à Égreville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Égreville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Égreville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
