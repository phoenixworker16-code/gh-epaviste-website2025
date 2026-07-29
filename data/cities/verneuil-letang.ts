import { PageData } from '../types'

export const verneuilLetangData: PageData = {
  slug: 'verneuil-letang',
  entityType: 'City',
  metaTitle: 'Épaviste Verneuil-l\'Étang (77390) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Verneuil-l\'Étang (77390). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Verneuil-l\'Étang (77390) - Intervention Verneuil-l\'Étang',
      subtitle: 'Épave à Verneuil-l\'Étang ? Intervention gratuite dans le secteur 77390 de Verneuil-l\'Étang sous 24-48h.',
      badge: 'Verneuil-l\'Étang (77390)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Verneuil-l\'Étang',
      content: 'Votre vieux véhicule à Verneuil-l\'Étang prend la poussière et vous voulez vous en séparer ? Les habitants des zones rurales de Verneuil-l\'Étang nous font confiance pour un service fiable. Le retrait gratuit de votre épave à Verneuil-l\'Étang est organisé avec des équipements tout-terrain. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre équipe à Verneuil-l\'Étang est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Verneuil-l\'Étang implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. La conformité du traitement est assurée par le respect des procédures en vigueur. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Verneuil-l\'Étang',
      intro: 'Pour un enlèvement à Verneuil-l\'Étang, notre logistique couvre tous les secteurs sans exception. L\'organisation du passage à Verneuil-l\'Étang tient compte des particularités annoncées. Le code postal 77390 est intégré dans notre tournée d\'enlèvement régulière à Verneuil-l\'Étang, ce qui garantit une intervention rapide. Notre couverture géographique dépasse Verneuil-l\'Étang pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Verneuil-l\'Étang',
      questions: [
        { q: 'L\'intervention à Verneuil-l\'Étang est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Verneuil-l\'Étang sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Verneuil-l\'Étang',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
