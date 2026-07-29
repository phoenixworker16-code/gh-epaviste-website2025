import { PageData } from '../types'

export const ballancourtSurEssonneData: PageData = {
  slug: 'ballancourt-sur-essonne',
  entityType: 'City',
  metaTitle: 'Épaviste Ballancourt-sur-Essonne (91610) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ballancourt-sur-Essonne (91610). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service rapide d\'enlèvement d\'épave à Ballancourt-sur-Essonne (91610) dans tout Ballancourt-sur-Essonne',
      subtitle: 'Pour Ballancourt-sur-Essonne (91610) : retrait gratuit de votre épave avec remise des documents à Ballancourt-sur-Essonne.',
      badge: 'Ballancourt-sur-Essonne (91610)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ballancourt-sur-Essonne',
      content: 'Dans la campagne de Ballancourt-sur-Essonne, un véhicule hors d\'usage peut être retiré sans aucun frais. Les propriétés rurales de Ballancourt-sur-Essonne sont desservies par notre service sans supplément. Le déplacement à Ballancourt-sur-Essonne est inclus dans notre service, sans supplément kilométrique. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Nous organisons le passage à Ballancourt-sur-Essonne avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ballancourt-sur-Essonne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. La conformité du traitement est assurée par le respect des procédures en vigueur. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ballancourt-sur-Essonne',
      intro: 'Tous les points de la commune de Ballancourt-sur-Essonne sont desservis, même les zones les moins denses. Pour un retrait à Ballancourt-sur-Essonne, notre équipe se tient prête à intervenir au créneau convenu. Pour le secteur 91610, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Ballancourt-sur-Essonne. Autour de Ballancourt-sur-Essonne, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ballancourt-sur-Essonne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Ballancourt-sur-Essonne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ballancourt-sur-Essonne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ballancourt-sur-Essonne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
