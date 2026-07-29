import { PageData } from '../types'

export const verneuilSurSeineData: PageData = {
  slug: 'verneuil-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Verneuil-sur-Seine (78480) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Verneuil-sur-Seine (78480). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Verneuil-sur-Seine (78480) dans tout le 78480',
      subtitle: 'Pour Verneuil-sur-Seine (78480) : retrait gratuit de votre épave avec remise des documents à Verneuil-sur-Seine.',
      badge: 'Verneuil-sur-Seine (78480)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Verneuil-sur-Seine',
      content: 'Votre propriété rurale à Verneuil-sur-Seine n\'a pas besoin de cette épave : faites-la enlever. Les chemins ruraux de Verneuil-sur-Seine ne sont pas un obstacle pour nos équipes équipées. À Verneuil-sur-Seine, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Verneuil-sur-Seine.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Verneuil-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Verneuil-sur-Seine',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Verneuil-sur-Seine est couvert. La planification de l\'enlèvement à Verneuil-sur-Seine s\'appuie sur les données communiquées en amont. Le code postal 78480 est intégré dans notre tournée d\'enlèvement régulière à Verneuil-sur-Seine, ce qui garantit une intervention rapide. Notre zone de couverture s\'articule autour de Verneuil-sur-Seine et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Verneuil-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Verneuil-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Verneuil-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Verneuil-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
