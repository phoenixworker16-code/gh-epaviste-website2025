import { PageData } from '../types'

export const velizyVillacoublayData: PageData = {
  slug: 'velizy-villacoublay',
  entityType: 'City',
  metaTitle: 'Épaviste Vélizy-Villacoublay (78140) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vélizy-Villacoublay (78140). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement épave Vélizy-Villacoublay (78140) - Prise en charge Vélizy-Villacoublay',
      subtitle: 'Enlèvement épave Vélizy-Villacoublay (78140) : service gratuit pour votre VHU dans tout le secteur de Vélizy-Villacoublay.',
      badge: 'Vélizy-Villacoublay (78140)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vélizy-Villacoublay',
      content: 'Votre vieux véhicule à Vélizy-Villacoublay prend la poussière et vous voulez vous en séparer ? À Vélizy-Villacoublay, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre service rural à Vélizy-Villacoublay garantit un retrait professionnel sans contrainte de distance. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Notre équipe connaît les spécificités des zones rurales autour de Vélizy-Villacoublay pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Vélizy-Villacoublay implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est organisé avec un professionnel de la filière autorisée pour ces opérations. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vélizy-Villacoublay',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Vélizy-Villacoublay est couvert. Notre logistique à Vélizy-Villacoublay est dimensionnée pour répondre à chaque type de demande. Pour le secteur 78140, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Vélizy-Villacoublay. Les zones limitrophes de Vélizy-Villacoublay peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vélizy-Villacoublay',
      questions: [
        { q: 'L\'intervention à Vélizy-Villacoublay est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vélizy-Villacoublay sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vélizy-Villacoublay',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
