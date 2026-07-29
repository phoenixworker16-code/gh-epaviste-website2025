import { PageData } from '../types'

export const leKremlinBicetreData: PageData = {
  slug: 'le-kremlin-bicetre',
  entityType: 'City',
  metaTitle: 'Épaviste Le Kremlin-Bicêtre (94270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Kremlin-Bicêtre (94270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait auto hors d\'usage Le Kremlin-Bicêtre (94270) dans le département 94270',
      subtitle: 'Épave à Le Kremlin-Bicêtre ? Intervention gratuite dans le secteur 94270 de Le Kremlin-Bicêtre sous 24-48h.',
      badge: 'Le Kremlin-Bicêtre (94270)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Kremlin-Bicêtre',
      intro: 'Notre service gratuit à Le Kremlin-Bicêtre couvre toutes les zones, du bourg aux hameaux périphériques. Les modalités d\'intervention à Le Kremlin-Bicêtre sont adaptées à l\'emplacement signalé du véhicule. La zone 94270 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Le Kremlin-Bicêtre. Notre zone de couverture s\'articule autour de Le Kremlin-Bicêtre et de ses environs.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Kremlin-Bicêtre',
      content: 'Vous souhaitez vous débarrasser gratuitement de votre vieux véhicule à Le Kremlin-Bicêtre ? Dans une banlieue dense comme Le Kremlin-Bicêtre, l\'espace public est une ressource partagée à préserver. Nous acheminons votre véhicule hors d\'usage vers un centre partenaire agréé pour un traitement conforme. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. Le professionnel connaît les secteurs denses de Le Kremlin-Bicêtre pour une approche efficace.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Kremlin-Bicêtre soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Kremlin-Bicêtre',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Le Kremlin-Bicêtre ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Kremlin-Bicêtre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Kremlin-Bicêtre sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Kremlin-Bicêtre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
