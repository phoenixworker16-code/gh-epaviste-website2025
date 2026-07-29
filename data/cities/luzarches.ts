import { PageData } from '../types'

export const luzarchesData: PageData = {
  slug: 'luzarches',
  entityType: 'City',
  metaTitle: 'Épaviste Luzarches (95270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Luzarches (95270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Luzarches (95270) gratuitement dans tout Luzarches',
      subtitle: 'Débarrassez votre épave à Luzarches (95270) sans frais. Notre service couvre tout le secteur de Luzarches.',
      badge: 'Luzarches (95270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Luzarches',
      content: 'Votre propriété à Luzarches est encombrée par un véhicule hors d\'usage ? Nous intervenons. Votre propriété à Luzarches est accessible à nos dépanneuses pour un enlèvement gratuit. À Luzarches, notre logistique rurale permet de retirer les épaves même en terrain accidenté. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Notre équipe à Luzarches est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Luzarches soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est complété par un transfert organisé vers un partenaire de la filière agréée. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Luzarches',
      intro: 'Grâce à notre organisation, Luzarches est entièrement desservie pour l\'enlèvement d\'épaves. Pour un retrait à Luzarches, le professionnel se prépare en fonction des indications reçues. Le secteur 95270 de Luzarches est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes proches de Luzarches sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Luzarches',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Luzarches est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Luzarches sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Luzarches',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
