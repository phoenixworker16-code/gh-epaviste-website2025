import { PageData } from '../types'

export const civryLaForetData: PageData = {
  slug: 'civry-la-foret',
  entityType: 'City',
  metaTitle: 'Épaviste Civry-la-Forêt (78910) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Civry-la-Forêt (78910). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez-vous de votre épave à Civry-la-Forêt gratuitement autour de Civry-la-Forêt',
      subtitle: 'À Civry-la-Forêt (78910), nous organisons l\'enlèvement gratuit de votre épave partout dans Civry-la-Forêt.',
      badge: 'Civry-la-Forêt (78910)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Civry-la-Forêt',
      content: 'À Civry-la-Forêt, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. À Civry-la-Forêt, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Notre équipe connaît les spécificités des zones rurales autour de Civry-la-Forêt pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Civry-la-Forêt, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Civry-la-Forêt',
      intro: 'Notre dispositif à Civry-la-Forêt assure un enlèvement gratuit dans tous les secteurs sans exception. Le dispositif mis en place pour Civry-la-Forêt est adapté à chaque situation particulière. Pour le secteur 78910, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Civry-la-Forêt. Les habitants des environs proches de Civry-la-Forêt peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Civry-la-Forêt',
      questions: [
        { q: 'L\'intervention à Civry-la-Forêt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Civry-la-Forêt sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Civry-la-Forêt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
