import { PageData } from '../types'

export const laBoissiereEcoleData: PageData = {
  slug: 'la-boissiere-ecole',
  entityType: 'City',
  metaTitle: 'Épaviste La Boissière-École (78125) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Boissière-École (78125). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service épaviste La Boissière-École (78125) - Intervention rapide à La Boissière-École',
      subtitle: 'Service d\'enlèvement d\'épave à La Boissière-École (78125) : gratuit, rapide et professionnel à La Boissière-École.',
      badge: 'La Boissière-École (78125)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Boissière-École',
      content: 'Votre propriété à La Boissière-École est encombrée par un véhicule hors d\'usage ? Nous intervenons. Les zones rurales autour de La Boissière-École sont intégralement couvertes par notre service. Nous organisons à La Boissière-École des interventions adaptées aux grandes propriétés et aux écarts. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Notre service à La Boissière-École tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à La Boissière-École soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Les professionnels habilités prennent le relais selon le planning établi lors de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Boissière-École',
      intro: 'À La Boissière-École, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Pour un retrait à La Boissière-École, notre équipe se tient prête à intervenir au créneau convenu. Notre équipe couvre le secteur postal 78125 avec une logistique dédiée. Les habitants de La Boissière-École peuvent compter sur notre présence régulière dans ce code postal. Les communes proches de La Boissière-École sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Boissière-École',
      questions: [
        { q: 'L\'intervention à La Boissière-École est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Boissière-École sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Boissière-École',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
