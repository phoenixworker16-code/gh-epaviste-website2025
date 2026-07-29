import { PageData } from '../types'

export const carrieresSurSeineData: PageData = {
  slug: 'carrieres-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Carrières-sur-Seine (78420) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Carrières-sur-Seine (78420). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Carrières-sur-Seine (78420) pour votre VHU à Carrières-sur-Seine',
      subtitle: 'Service gratuit d\'épaviste à Carrières-sur-Seine (78420). Votre véhicule hors d\'usage retiré à Carrières-sur-Seine.',
      badge: 'Carrières-sur-Seine (78420)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Carrières-sur-Seine',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Carrières-sur-Seine peut être retiré sans frais. Dans les secteurs ruraux autour de Carrières-sur-Seine, l\'accès à un service d\'enlèvement est simplifié. Le retrait gratuit de votre épave à Carrières-sur-Seine est organisé avec des équipements tout-terrain. La demande permet d\'identifier les informations nécessaires avant le déplacement. Notre équipe à Carrières-sur-Seine est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Carrières-sur-Seine implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Carrières-sur-Seine',
      intro: 'Notre service à Carrières-sur-Seine est accessible dans tous les quartiers, du centre aux lotissements. La préparation du retrait à Carrières-sur-Seine inclut une évaluation des conditions d\'intervention. Notre équipe couvre le secteur postal 78420 avec une logistique dédiée. Les habitants de Carrières-sur-Seine peuvent compter sur notre présence régulière dans ce code postal. Les axes secondaires et les hameaux près de Carrières-sur-Seine sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Carrières-sur-Seine',
      questions: [
        { q: 'L\'intervention à Carrières-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Carrières-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Carrières-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
