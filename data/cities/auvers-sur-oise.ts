import { PageData } from '../types'

export const auversSurOiseData: PageData = {
  slug: 'auvers-sur-oise',
  entityType: 'City',
  metaTitle: 'Épaviste Auvers-sur-Oise (95430) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Auvers-sur-Oise (95430). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Auvers-sur-Oise par un professionnel dans le 95430 de Auvers-sur-Oise',
      subtitle: 'À Auvers-sur-Oise (95430) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Auvers-sur-Oise.',
      badge: 'Auvers-sur-Oise (95430)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Auvers-sur-Oise',
      content: 'Un véhicule abandonné sur votre terrain à Auvers-sur-Oise vous gêne au quotidien ? Dans l\'environnement rural de Auvers-sur-Oise, nous intervenons avec discrétion et efficacité. Les exploitants agricoles de Auvers-sur-Oise nous confient leurs épaves pour un traitement réglementaire. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Les distances jusqu\'à Auvers-sur-Oise sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Auvers-sur-Oise soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Le traitement est effectué dans le respect des obligations environnementales en vigueur. Les rôles de chacun sont documentés pour garantir la traçabilité du parcours du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Auvers-sur-Oise',
      intro: 'Notre service gratuit à Auvers-sur-Oise couvre toutes les zones, du bourg aux hameaux périphériques. À Auvers-sur-Oise, l\'organisation du retrait s\'adapte aux circonstances décrites. Pour le secteur 95430, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Auvers-sur-Oise. Les habitants des environs proches de Auvers-sur-Oise peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Auvers-sur-Oise',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Auvers-sur-Oise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Auvers-sur-Oise sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Auvers-sur-Oise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
