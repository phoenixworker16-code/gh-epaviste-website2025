import { PageData } from '../types'

export const champignySurMarneData: PageData = {
  slug: 'champigny-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Champigny-sur-Marne (94500) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Champigny-sur-Marne (94500). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Champigny-sur-Marne (94500) gratuitement dans tout Champigny-sur-Marne',
      subtitle: 'Votre véhicule hors d\'usage à Champigny-sur-Marne (94500) ? Enlèvement gratuit partout dans Champigny-sur-Marne.',
      badge: 'Champigny-sur-Marne (94500)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Champigny-sur-Marne',
      intro: 'Pour un enlèvement à Champigny-sur-Marne, notre logistique couvre tous les secteurs sans exception. La planification de l\'enlèvement à Champigny-sur-Marne s\'appuie sur les données communiquées en amont. Le code postal 94500 est intégré dans notre tournée d\'enlèvement régulière à Champigny-sur-Marne, ce qui garantit une intervention rapide. À partir du secteur de Champigny-sur-Marne, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Champigny-sur-Marne',
      content: 'Votre épave à Champigny-sur-Marne peut être retirée gratuitement, sans paperasse compliquée. À Champigny-sur-Marne, nous intervenons dans tous les quartiers, même les plus denses. À Champigny-sur-Marne, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Chaque intervention à Champigny-sur-Marne est préparée avec minutie pour éviter les imprévus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Champigny-sur-Marne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Champigny-sur-Marne',
      questions: [
        { q: 'L\'intervention à Champigny-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Champigny-sur-Marne sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Champigny-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Champigny-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
