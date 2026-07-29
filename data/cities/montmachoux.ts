import { PageData } from '../types'

export const montmachouxData: PageData = {
  slug: 'montmachoux',
  entityType: 'City',
  metaTitle: 'Épaviste Montmachoux (77940) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montmachoux (77940). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait de épave sans frais à Montmachoux (77940) - Service pour Montmachoux',
      subtitle: 'Retrait de VHU à Montmachoux (77940) : un service gratuit et rapide pour tout Montmachoux et ses environs.',
      badge: 'Montmachoux (77940)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montmachoux',
      content: 'Dans la campagne de Montmachoux, un véhicule hors d\'usage peut être retiré sans aucun frais. À Montmachoux, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Montmachoux, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Notre service à Montmachoux tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Montmachoux, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. L\'ensemble des opérations est réalisé dans les conditions fixées par la réglementation. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montmachoux',
      intro: 'Où que soit garé votre véhicule à Montmachoux, notre dépanneuse peut accéder pour le retirer. L\'intervention à Montmachoux fait l\'objet d\'une préparation approfondie en amont. Le code postal 77940 est intégré dans notre tournée d\'enlèvement régulière à Montmachoux, ce qui garantit une intervention rapide. Si vous résidez près de Montmachoux, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montmachoux',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montmachoux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montmachoux sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montmachoux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
