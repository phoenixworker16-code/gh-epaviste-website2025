import { PageData } from '../types'

export const laChapelleSaintSulpiceData: PageData = {
  slug: 'la-chapelle-saint-sulpice',
  entityType: 'City',
  metaTitle: 'Épaviste La Chapelle-Saint-Sulpice (77160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Chapelle-Saint-Sulpice (77160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait épave gratuit La Chapelle-Saint-Sulpice sans frais dans le secteur La Chapelle-Saint-Sulpice (77160)',
      subtitle: 'Service d\'enlèvement à La Chapelle-Saint-Sulpice (77160) : retrait gratuit de votre VHU par notre équipe à La Chapelle-Saint-Sulpice.',
      badge: 'La Chapelle-Saint-Sulpice (77160)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Chapelle-Saint-Sulpice',
      content: 'Un véhicule abandonné sur votre terrain à La Chapelle-Saint-Sulpice vous gêne au quotidien ? Dans l\'environnement rural de La Chapelle-Saint-Sulpice, nous intervenons avec discrétion et efficacité. Le déplacement à La Chapelle-Saint-Sulpice est inclus dans notre service, sans supplément kilométrique. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Nous adaptons notre intervention à La Chapelle-Saint-Sulpice en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Chapelle-Saint-Sulpice implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Chapelle-Saint-Sulpice',
      intro: 'Nous nous déplaçons dans tous les secteurs de La Chapelle-Saint-Sulpice pour un enlèvement gratuit. À La Chapelle-Saint-Sulpice, l\'organisation du retrait s\'adapte aux circonstances décrites. Notre équipe couvre le secteur postal 77160 avec une logistique dédiée. Les habitants de La Chapelle-Saint-Sulpice peuvent compter sur notre présence régulière dans ce code postal. Les communes autour de La Chapelle-Saint-Sulpice sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Chapelle-Saint-Sulpice',
      questions: [
        { q: 'L\'intervention à La Chapelle-Saint-Sulpice est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Chapelle-Saint-Sulpice sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Chapelle-Saint-Sulpice',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
