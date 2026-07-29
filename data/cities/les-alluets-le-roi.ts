import { PageData } from '../types'

export const lesAlluetsLeRoiData: PageData = {
  slug: 'les-alluets-le-roi',
  entityType: 'City',
  metaTitle: 'Épaviste Les Alluets-le-Roi (78580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Les Alluets-le-Roi (78580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Les Alluets-le-Roi (78580) - Enlèvement Les Alluets-le-Roi',
      subtitle: 'À Les Alluets-le-Roi (78580) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Les Alluets-le-Roi (78580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Les Alluets-le-Roi',
      content: 'Un véhicule abandonné sur votre terrain à Les Alluets-le-Roi vous gêne au quotidien ? Dans les secteurs agricoles de Les Alluets-le-Roi, nous retirons les épaves sans endommager les terrains. Notre service à Les Alluets-le-Roi garantit un retrait gratuit où que vous soyez dans la commune. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Nous prévoyons le passage à Les Alluets-le-Roi en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Les Alluets-le-Roi soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Les Alluets-le-Roi',
      intro: 'Le retrait de votre épave à Les Alluets-le-Roi est possible où qu\'elle se trouve sur la commune. Notre logistique à Les Alluets-le-Roi est dimensionnée pour répondre à chaque type de demande. La zone 78580 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Les Alluets-le-Roi. Les localités voisines de Les Alluets-le-Roi peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Les Alluets-le-Roi',
      questions: [
        { q: 'L\'intervention à Les Alluets-le-Roi est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Les Alluets-le-Roi sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Les Alluets-le-Roi',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
