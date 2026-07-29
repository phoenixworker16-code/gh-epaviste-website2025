import { PageData } from '../types'

export const boinvilleLeGaillardData: PageData = {
  slug: 'boinville-le-gaillard',
  entityType: 'City',
  metaTitle: 'Épaviste Boinville-le-Gaillard (78660) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boinville-le-Gaillard (78660). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Boinville-le-Gaillard (78660) gratuitement dans tout Boinville-le-Gaillard',
      subtitle: 'À Boinville-le-Gaillard (78660) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Boinville-le-Gaillard (78660)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boinville-le-Gaillard',
      content: 'À Boinville-le-Gaillard, même les épaves situées sur des terrains difficiles sont prises en charge. Votre propriété à Boinville-le-Gaillard est accessible à nos dépanneuses pour un enlèvement gratuit. À Boinville-le-Gaillard, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. L\'équipe dépêchée à Boinville-le-Gaillard connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Boinville-le-Gaillard soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La remise du véhicule à un opérateur spécialisé est prévue dans l\'organisation du service. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. La transition entre les intervenants est organisée pour garantir la continuité du service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boinville-le-Gaillard',
      intro: 'Que votre épave soit à Boinville-le-Gaillard dans un parking, une rue ou un garage, nous l\'enlevons. La préparation de l\'intervention à Boinville-le-Gaillard commence dès la réception de votre demande. Pour le secteur 78660, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Boinville-le-Gaillard. Les communes situées à proximité de Boinville-le-Gaillard peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boinville-le-Gaillard',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boinville-le-Gaillard est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boinville-le-Gaillard sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boinville-le-Gaillard',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
