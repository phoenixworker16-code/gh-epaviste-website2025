import { PageData } from '../types'

export const vieilleEgliseEnYvelinesData: PageData = {
  slug: 'vieille-eglise-en-yvelines',
  entityType: 'City',
  metaTitle: 'Épaviste Vieille-Église-en-Yvelines (78125) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vieille-Église-en-Yvelines (78125). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement de carcasse auto à Vieille-Église-en-Yvelines (78125) dans le secteur Vieille-Église-en-Yvelines',
      subtitle: 'Votre véhicule hors d\'usage à Vieille-Église-en-Yvelines (78125) ? Enlèvement gratuit partout dans Vieille-Église-en-Yvelines.',
      badge: 'Vieille-Église-en-Yvelines (78125)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vieille-Église-en-Yvelines',
      content: 'Dans le secteur rural de Vieille-Église-en-Yvelines, nous nous déplaçons gratuitement pour enlever votre épave. À la campagne, à Vieille-Église-en-Yvelines, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Notre équipe à Vieille-Église-en-Yvelines assure un service professionnel d\'enlèvement gratuit en zone rurale. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Les modalités de l\'intervention à Vieille-Église-en-Yvelines sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vieille-Église-en-Yvelines, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vieille-Église-en-Yvelines',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Vieille-Église-en-Yvelines sans limitation géographique. Les particularités de l\'emplacement à Vieille-Église-en-Yvelines sont prises en compte dans l\'organisation. La zone 78125 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Vieille-Église-en-Yvelines. Si vous résidez près de Vieille-Église-en-Yvelines, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vieille-Église-en-Yvelines',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vieille-Église-en-Yvelines est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vieille-Église-en-Yvelines sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vieille-Église-en-Yvelines',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
