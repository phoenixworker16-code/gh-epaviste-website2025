import { PageData } from '../types'

export const vigneuxSurSeineData: PageData = {
  slug: 'vigneux-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Vigneux-sur-Seine (91270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vigneux-sur-Seine (91270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste gratuit Vigneux-sur-Seine intervention rapide dans le 91270 de Vigneux-sur-Seine',
      subtitle: 'Épaviste à Vigneux-sur-Seine - Intervention gratuite pour retirer votre VHU dans le 91270 à Vigneux-sur-Seine.',
      badge: 'Vigneux-sur-Seine (91270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vigneux-sur-Seine',
      content: 'À Vigneux-sur-Seine, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Vivre à la campagne à Vigneux-sur-Seine ne signifie pas renoncer à un service d\'enlèvement professionnel. Le retrait gratuit de votre épave à Vigneux-sur-Seine est organisé avec des équipements tout-terrain. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. L\'enlèvement à Vigneux-sur-Seine bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vigneux-sur-Seine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est orienté vers une structure partenaire disposant des autorisations nécessaires. Le processus respecte les prescriptions légales applicables à ce type de véhicule. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vigneux-sur-Seine',
      intro: 'Notre service gratuit à Vigneux-sur-Seine couvre toutes les zones, du bourg aux hameaux périphériques. Pour Vigneux-sur-Seine, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Les habitants du 91270 à Vigneux-sur-Seine bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les axes secondaires et les hameaux près de Vigneux-sur-Seine sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vigneux-sur-Seine',
      questions: [
        { q: 'L\'intervention à Vigneux-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vigneux-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vigneux-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
