import { PageData } from '../types'

export const lesEssartsLeRoiData: PageData = {
  slug: 'les-essarts-le-roi',
  entityType: 'City',
  metaTitle: 'Épaviste Les Essarts-le-Roi (78690) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Les Essarts-le-Roi (78690). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait épave gratuit Les Essarts-le-Roi sans frais dans le secteur Les Essarts-le-Roi (78690)',
      subtitle: 'Enlèvement d\'épave Les Essarts-le-Roi (78690) : service rapide et gratuit pour votre VHU dans tout Les Essarts-le-Roi.',
      badge: 'Les Essarts-le-Roi (78690)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Les Essarts-le-Roi',
      content: 'À Les Essarts-le-Roi, même les épaves situées sur des terrains difficiles sont prises en charge. À Les Essarts-le-Roi, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Nous retirons gratuitement votre épave à Les Essarts-le-Roi avec du matériel adapté aux terrains ruraux. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Les distances jusqu\'à Les Essarts-le-Roi sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Les Essarts-le-Roi soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Les Essarts-le-Roi',
      intro: 'La tournée de nos dépanneuses couvre Les Essarts-le-Roi en intégralité chaque semaine. Le rendez-vous pour Les Essarts-le-Roi est défini en fonction des éléments communiqués lors du contact. Notre service dessert quotidiennement le secteur 78690 de Les Essarts-le-Roi avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les axes routiers menant à Les Essarts-le-Roi sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Les Essarts-le-Roi',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Les Essarts-le-Roi est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Les Essarts-le-Roi sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Les Essarts-le-Roi',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
