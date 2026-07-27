import { PageData } from '../types'

export const saintSauveurLesBrayData: PageData = {
  slug: 'saint-sauveur-les-bray',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Sauveur-lès-Bray (77480) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Sauveur-lès-Bray (77480). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Saint-Sauveur-lès-Bray (77480) pour les habitants de Saint-Sauveur-lès-Bray',
      subtitle: 'Enlèvement épave Saint-Sauveur-lès-Bray (77480) : service gratuit pour votre VHU dans tout le secteur de Saint-Sauveur-lès-Bray.',
      badge: 'Saint-Sauveur-lès-Bray (77480)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Sauveur-lès-Bray',
      content: 'Dans la campagne autour de Saint-Sauveur-lès-Bray, débarrassez-vous gratuitement de votre épave. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. À Saint-Sauveur-lès-Bray, notre logistique rurale permet de retirer les épaves même en terrain accidenté. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d\'accès. Notre équipe à Saint-Sauveur-lès-Bray est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Sauveur-lès-Bray implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Le traitement du véhicule suit les procédures imposées par la réglementation en vigueur. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Sauveur-lès-Bray',
      intro: 'La commune de Saint-Sauveur-lès-Bray est intégralement couverte par notre service gratuit d\'enlèvement. La logistique à Saint-Sauveur-lès-Bray est adaptée au type de véhicule et à son environnement. La zone 77480 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Saint-Sauveur-lès-Bray. Les habitants des environs proches de Saint-Sauveur-lès-Bray peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Sauveur-lès-Bray',
      questions: [
        { q: 'L\'intervention à Saint-Sauveur-lès-Bray est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Sauveur-lès-Bray sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Sauveur-lès-Bray',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
