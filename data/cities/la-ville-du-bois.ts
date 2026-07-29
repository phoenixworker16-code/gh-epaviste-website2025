import { PageData } from '../types'

export const laVilleDuBoisData: PageData = {
  slug: 'la-ville-du-bois',
  entityType: 'City',
  metaTitle: 'Épaviste La Ville-du-Bois (91620) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Ville-du-Bois (91620). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à La Ville-du-Bois (91620) dans tout La Ville-du-Bois',
      subtitle: 'Épave à La Ville-du-Bois ? Intervention gratuite dans le secteur 91620 de La Ville-du-Bois sous 24-48h.',
      badge: 'La Ville-du-Bois (91620)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Ville-du-Bois',
      content: 'À La Ville-du-Bois, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Les chemins ruraux de La Ville-du-Bois ne sont pas un obstacle pour nos équipes équipées. Les exploitants agricoles de La Ville-du-Bois nous confient leurs épaves pour un traitement réglementaire. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Notre équipe connaît les spécificités des zones rurales autour de La Ville-du-Bois pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Ville-du-Bois implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Ville-du-Bois',
      intro: 'Les propriétaires à La Ville-du-Bois peuvent compter sur notre service dans toute la commune. Un créneau d\'enlèvement à La Ville-du-Bois vous est proposé selon vos disponibilités. Le code postal 91620 est intégré dans notre tournée d\'enlèvement régulière à La Ville-du-Bois, ce qui garantit une intervention rapide. Notre rayonnement autour de La Ville-du-Bois s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Ville-du-Bois',
      questions: [
        { q: 'L\'intervention à La Ville-du-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Ville-du-Bois sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Ville-du-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
