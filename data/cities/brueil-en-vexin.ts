import { PageData } from '../types'

export const brueilEnVexinData: PageData = {
  slug: 'brueil-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Brueil-en-Vexin (78440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Brueil-en-Vexin (78440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Brueil-en-Vexin (78440) - Épaviste Brueil-en-Vexin',
      subtitle: 'Service d\'enlèvement à Brueil-en-Vexin (78440) : retrait gratuit de votre VHU par notre équipe à Brueil-en-Vexin.',
      badge: 'Brueil-en-Vexin (78440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Brueil-en-Vexin',
      content: 'Situé à Brueil-en-Vexin, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? À Brueil-en-Vexin, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Nous retirons gratuitement votre épave à Brueil-en-Vexin avec du matériel adapté aux terrains ruraux. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Nous prévoyons le passage à Brueil-en-Vexin en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Brueil-en-Vexin soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Brueil-en-Vexin',
      intro: 'Pour un enlèvement à Brueil-en-Vexin, notre logistique couvre tous les secteurs sans exception. Les détails d\'accès pour Brueil-en-Vexin sont examinés avant le départ de l\'équipe. Les habitants du 78440 à Brueil-en-Vexin bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au départ de Brueil-en-Vexin, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Brueil-en-Vexin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Brueil-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Brueil-en-Vexin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Brueil-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
