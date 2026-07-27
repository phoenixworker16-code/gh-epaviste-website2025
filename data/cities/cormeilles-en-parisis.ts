import { PageData } from '../types'

export const cormeillesEnParisisData: PageData = {
  slug: 'cormeilles-en-parisis',
  entityType: 'City',
  metaTitle: 'Épaviste Cormeilles-en-Parisis (95240) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Cormeilles-en-Parisis (95240). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement voiture hors d\'usage Cormeilles-en-Parisis (95240) - Service Cormeilles-en-Parisis',
      subtitle: 'Débarrassez votre épave à Cormeilles-en-Parisis gratuitement. Notre équipe intervient dans tout le 95240 de Cormeilles-en-Parisis.',
      badge: 'Cormeilles-en-Parisis (95240)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Cormeilles-en-Parisis',
      content: 'Les zones rurales autour de Cormeilles-en-Parisis sont intégralement couvertes par notre service gratuit. À Cormeilles-en-Parisis, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. À Cormeilles-en-Parisis, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La logistique est organisée pour garantir une intervention efficace et sans attente. Les modalités d\'accès à Cormeilles-en-Parisis sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Cormeilles-en-Parisis soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un opérateur partenaire compétent dans le domaine du recyclage automobile. Les différentes opérations sont soumises au respect des règles applicables à la filière. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Cormeilles-en-Parisis',
      intro: 'Grâce à notre organisation, Cormeilles-en-Parisis est entièrement desservie pour l\'enlèvement d\'épaves. Les modalités d\'intervention à Cormeilles-en-Parisis sont adaptées à l\'emplacement signalé du véhicule. La zone 95240 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Cormeilles-en-Parisis. Notre rayonnement autour de Cormeilles-en-Parisis s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Cormeilles-en-Parisis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Cormeilles-en-Parisis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Cormeilles-en-Parisis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Cormeilles-en-Parisis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
