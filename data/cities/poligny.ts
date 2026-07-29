import { PageData } from '../types'

export const polignyData: PageData = {
  slug: 'poligny',
  entityType: 'City',
  metaTitle: 'Épaviste Poligny (77167) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Poligny (77167). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Poligny (77167) dans tout le 77167',
      subtitle: 'Service d\'enlèvement d\'épave à Poligny (77167) : gratuit, rapide et professionnel à Poligny.',
      badge: 'Poligny (77167)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Poligny',
      content: 'Nous venons à Poligny avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Même à Poligny, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Notre service rural à Poligny garantit un retrait professionnel sans contrainte de distance. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Notre équipe à Poligny est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Poligny implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Poligny',
      intro: 'Vous avez une épave à Poligny ? Notre équipe se déplace gratuitement où qu\'elle soit. Notre équipe à Poligny coordonne le passage avec vous pour une intervention sans accroc. Notre équipe couvre le secteur postal 77167 avec une logistique dédiée. Les habitants de Poligny peuvent compter sur notre présence régulière dans ce code postal. Nous étendons notre intervention au-delà de Poligny pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Poligny',
      questions: [
        { q: 'L\'intervention à Poligny est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Poligny sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Poligny',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
