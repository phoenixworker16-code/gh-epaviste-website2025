import { PageData } from '../types'

export const brayEtLuData: PageData = {
  slug: 'bray-et-lu',
  entityType: 'City',
  metaTitle: 'Épaviste Bray-et-Lû (95710) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bray-et-Lû (95710). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait épave gratuit Bray-et-Lû sans frais dans le secteur Bray-et-Lû (95710)',
      subtitle: 'Débarrassez votre épave à Bray-et-Lû gratuitement. Notre équipe intervient dans tout le 95710 de Bray-et-Lû.',
      badge: 'Bray-et-Lû (95710)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bray-et-Lû',
      content: 'Redonnez de l\'espace à votre terrain à Bray-et-Lû en confiant cette épave à notre service. Les propriétés rurales de Bray-et-Lû sont desservies par notre service sans supplément. À Bray-et-Lû, nous retirons les épaves des champs, prés et chemins sans difficulté. La logistique est organisée pour garantir une intervention efficace et sans attente. Les distances jusqu\'à Bray-et-Lû sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bray-et-Lû implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. L\'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bray-et-Lû',
      intro: 'Pour un enlèvement à Bray-et-Lû, notre logistique couvre tous les secteurs sans exception. Le passage à Bray-et-Lû est planifié de manière à optimiser le temps d\'intervention. Pour le secteur 95710, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Bray-et-Lû. Au-delà du centre de Bray-et-Lû, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bray-et-Lû',
      questions: [
        { q: 'L\'intervention à Bray-et-Lû est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bray-et-Lû sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bray-et-Lû',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
