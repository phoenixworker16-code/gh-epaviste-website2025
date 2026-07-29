import { PageData } from '../types'

export const bruyeresSurOiseData: PageData = {
  slug: 'bruyeres-sur-oise',
  entityType: 'City',
  metaTitle: 'Épaviste Bruyères-sur-Oise (95820) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bruyères-sur-Oise (95820). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement d\'épave à Bruyères-sur-Oise (95820) - Intervention Bruyères-sur-Oise',
      subtitle: 'Service gratuit d\'épaviste à Bruyères-sur-Oise (95820). Votre véhicule hors d\'usage retiré à Bruyères-sur-Oise.',
      badge: 'Bruyères-sur-Oise (95820)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bruyères-sur-Oise',
      content: 'Dans la campagne de Bruyères-sur-Oise, un véhicule hors d\'usage peut être retiré sans aucun frais. Les habitants des zones rurales de Bruyères-sur-Oise nous font confiance pour un service fiable. Les exploitants agricoles de Bruyères-sur-Oise nous confient leurs épaves pour un traitement réglementaire. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. L\'équipe dépêchée à Bruyères-sur-Oise connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Bruyères-sur-Oise, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. Le traitement du véhicule suit les procédures imposées par la réglementation en vigueur. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bruyères-sur-Oise',
      intro: 'Notre service à Bruyères-sur-Oise est accessible dans tous les quartiers, du centre aux lotissements. Pour un retrait à Bruyères-sur-Oise, le professionnel se prépare en fonction des indications reçues. Les demandes pour le 95820 de Bruyères-sur-Oise sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les axes secondaires et les hameaux près de Bruyères-sur-Oise sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bruyères-sur-Oise',
      questions: [
        { q: 'L\'intervention à Bruyères-sur-Oise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bruyères-sur-Oise sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bruyères-sur-Oise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
