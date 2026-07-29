import { PageData } from '../types'

export const bouraySurJuineData: PageData = {
  slug: 'bouray-sur-juine',
  entityType: 'City',
  metaTitle: 'Épaviste Bouray-sur-Juine (91850) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bouray-sur-Juine (91850). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait de épave sans frais à Bouray-sur-Juine (91850) - Service pour Bouray-sur-Juine',
      subtitle: 'Pour Bouray-sur-Juine (91850) : retrait gratuit de votre épave avec remise des documents à Bouray-sur-Juine.',
      badge: 'Bouray-sur-Juine (91850)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bouray-sur-Juine',
      content: 'Votre vieux véhicule à Bouray-sur-Juine prend la poussière et vous voulez vous en séparer ? Les habitants des zones rurales de Bouray-sur-Juine nous font confiance pour un service fiable. À Bouray-sur-Juine, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Les détails de l\'intervention à Bouray-sur-Juine sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bouray-sur-Juine implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bouray-sur-Juine',
      intro: 'Tous les habitants de Bouray-sur-Juine peuvent bénéficier de notre service d\'enlèvement à domicile. Le dispositif mis en place pour Bouray-sur-Juine est adapté à chaque situation particulière. Notre équipe couvre le secteur postal 91850 avec une logistique dédiée. Les habitants de Bouray-sur-Juine peuvent compter sur notre présence régulière dans ce code postal. Les zones limitrophes de Bouray-sur-Juine peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bouray-sur-Juine',
      questions: [
        { q: 'L\'intervention à Bouray-sur-Juine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bouray-sur-Juine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bouray-sur-Juine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
