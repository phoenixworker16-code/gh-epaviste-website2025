import { PageData } from '../types'

export const guillervalData: PageData = {
  slug: 'guillerval',
  entityType: 'City',
  metaTitle: 'Épaviste Guillerval (91690) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Guillerval (91690). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras auto gratuit à Guillerval (91690) - Intervention dans le 91690',
      subtitle: 'Débarrassez votre épave à Guillerval (91690) sans frais. Notre service couvre tout le secteur de Guillerval.',
      badge: 'Guillerval (91690)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Guillerval',
      content: 'À Guillerval, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Vivre à la campagne à Guillerval ne signifie pas renoncer à un service d\'enlèvement professionnel. Le retrait gratuit de votre épave à Guillerval est organisé avec des équipements tout-terrain. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Le rendez-vous à Guillerval est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Guillerval implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Guillerval',
      intro: 'À Guillerval, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. À Guillerval, le professionnel confirme avec vous les modalités avant de se déplacer. Le secteur 91690 de Guillerval est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les habitants des environs de Guillerval peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Guillerval',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Guillerval est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Guillerval sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Guillerval',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
