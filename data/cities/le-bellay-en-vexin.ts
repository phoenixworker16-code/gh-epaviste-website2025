import { PageData } from '../types'

export const leBellayEnVexinData: PageData = {
  slug: 'le-bellay-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Le Bellay-en-Vexin (95750) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Bellay-en-Vexin (95750). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste à Le Bellay-en-Vexin pour enlèvement gratuit de VHU dans le 95750',
      subtitle: 'Service de retrait d\'épave à Le Bellay-en-Vexin (95750). Gratuit et sans contrainte pour les habitants de Le Bellay-en-Vexin.',
      badge: 'Le Bellay-en-Vexin (95750)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Bellay-en-Vexin',
      content: 'Vous habitez à Le Bellay-en-Vexin et une épave vous encombre depuis des mois ? Agissez gratuitement. Même à Le Bellay-en-Vexin, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Notre équipe à Le Bellay-en-Vexin est équipée de véhicules adaptés aux chemins ruraux. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Le Bellay-en-Vexin.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Bellay-en-Vexin soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est organisé avec un professionnel de la filière autorisée pour ces opérations. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Bellay-en-Vexin',
      intro: 'La couverture de Le Bellay-en-Vexin par notre service d\'enlèvement est totale et sans restriction. Les informations fournies sur la situation à Le Bellay-en-Vexin permettent de préparer l\'intervention. Notre équipe couvre le secteur postal 95750 avec une logistique dédiée. Les habitants de Le Bellay-en-Vexin peuvent compter sur notre présence régulière dans ce code postal. Les alentours de Le Bellay-en-Vexin sont intégrés à notre tournée d\'enlèvement régulière.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Bellay-en-Vexin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Bellay-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Bellay-en-Vexin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Bellay-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
