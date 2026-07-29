import { PageData } from '../types'

export const vayresSurEssonneData: PageData = {
  slug: 'vayres-sur-essonne',
  entityType: 'City',
  metaTitle: 'Épaviste Vayres-sur-Essonne (91820) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vayres-sur-Essonne (91820). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste de secteur à Vayres-sur-Essonne (91820) pour enlèvement à Vayres-sur-Essonne',
      subtitle: 'À Vayres-sur-Essonne (91820), notre équipe enlève gratuitement votre épave où qu\'elle soit.',
      badge: 'Vayres-sur-Essonne (91820)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vayres-sur-Essonne',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Vayres-sur-Essonne ? Nous l\'enlevons gratuitement. À la campagne, à Vayres-sur-Essonne, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Notre équipe à Vayres-sur-Essonne est équipée de véhicules adaptés aux chemins ruraux. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. L\'intervention à Vayres-sur-Essonne est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Vayres-sur-Essonne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vayres-sur-Essonne',
      intro: 'Notre équipe intervient dans toute l\'agglomération de Vayres-sur-Essonne pour retirer votre épave gratuitement. Les modalités pratiques de l\'enlèvement à Vayres-sur-Essonne sont calées en amont avec vous. La zone 91820 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Vayres-sur-Essonne. Les localités voisines de Vayres-sur-Essonne peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vayres-sur-Essonne',
      questions: [
        { q: 'L\'intervention à Vayres-sur-Essonne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vayres-sur-Essonne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vayres-sur-Essonne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
