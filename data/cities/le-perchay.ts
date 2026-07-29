import { PageData } from '../types'

export const lePerchayData: PageData = {
  slug: 'le-perchay',
  entityType: 'City',
  metaTitle: 'Épaviste Le Perchay (95450) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Perchay (95450). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Le Perchay - Prise en charge totale à Le Perchay (95450)',
      subtitle: 'À Le Perchay (95450), nous organisons l\'enlèvement gratuit de votre épave partout dans Le Perchay.',
      badge: 'Le Perchay (95450)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Perchay',
      content: 'À Le Perchay, même les épaves situées sur des terrains difficiles sont prises en charge. Dans l\'environnement rural de Le Perchay, nous intervenons avec discrétion et efficacité. À Le Perchay, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Le Perchay.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Le Perchay implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Perchay',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Le Perchay. Avant l\'enlèvement à Le Perchay, les informations pratiques sont échangées avec le propriétaire. Notre service dessert quotidiennement le secteur 95450 de Le Perchay avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les zones limitrophes de Le Perchay peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Perchay',
      questions: [
        { q: 'L\'intervention à Le Perchay est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Perchay sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Le Perchay',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
