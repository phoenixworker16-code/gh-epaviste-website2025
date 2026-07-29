import { PageData } from '../types'

export const cleryEnVexinData: PageData = {
  slug: 'clery-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Cléry-en-Vexin (95420) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Cléry-en-Vexin (95420). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de véhicule accidenté à Cléry-en-Vexin sans frais dans tout Cléry-en-Vexin (95420)',
      subtitle: 'Cléry-en-Vexin (95420) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Cléry-en-Vexin.',
      badge: 'Cléry-en-Vexin (95420)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Cléry-en-Vexin',
      content: 'À Cléry-en-Vexin, nous retirons gratuitement les épaves même dans les zones les plus reculées. Dans les zones reculées de Cléry-en-Vexin, nous adaptons notre matériel pour un retrait sans difficulté. Nous retirons gratuitement votre épave à Cléry-en-Vexin avec du matériel adapté aux terrains ruraux. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre équipe connaît les spécificités des zones rurales autour de Cléry-en-Vexin pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Cléry-en-Vexin, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Cléry-en-Vexin',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de Cléry-en-Vexin. Les détails d\'accès pour Cléry-en-Vexin sont examinés avant le départ de l\'équipe. Pour le secteur 95420, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Cléry-en-Vexin. Les axes routiers menant à Cléry-en-Vexin sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Cléry-en-Vexin',
      questions: [
        { q: 'L\'intervention à Cléry-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Cléry-en-Vexin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Cléry-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
