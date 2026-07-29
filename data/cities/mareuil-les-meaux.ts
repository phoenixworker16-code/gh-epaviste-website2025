import { PageData } from '../types'

export const mareuilLesMeauxData: PageData = {
  slug: 'mareuil-les-meaux',
  entityType: 'City',
  metaTitle: 'Épaviste Mareuil-lès-Meaux (77100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Mareuil-lès-Meaux (77100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire enlever son VHU à Mareuil-lès-Meaux par un professionnel dans le 77100 de Mareuil-lès-Meaux',
      subtitle: 'Intervention à Mareuil-lès-Meaux (77100) : retrait gratuit de votre épave par des professionnels à Mareuil-lès-Meaux.',
      badge: 'Mareuil-lès-Meaux (77100)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Mareuil-lès-Meaux',
      content: 'Dans la campagne de Mareuil-lès-Meaux, un véhicule hors d\'usage peut être retiré sans aucun frais. Les chemins ruraux de Mareuil-lès-Meaux ne sont pas un obstacle pour nos équipes équipées. Le déplacement à Mareuil-lès-Meaux est inclus dans notre service, sans supplément kilométrique. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Les modalités de l\'intervention à Mareuil-lès-Meaux sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Mareuil-lès-Meaux, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Mareuil-lès-Meaux',
      intro: 'Toutes les rues de Mareuil-lès-Meaux sont couvertes, quel que soit le type d\'habitation. L\'organisation du passage à Mareuil-lès-Meaux tient compte des particularités annoncées. Pour le secteur 77100, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Mareuil-lès-Meaux. Les communes autour de Mareuil-lès-Meaux sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Mareuil-lès-Meaux',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Mareuil-lès-Meaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Mareuil-lès-Meaux sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Mareuil-lès-Meaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
