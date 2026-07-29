import { PageData } from '../types'

export const villeneuveSurAuversData: PageData = {
  slug: 'villeneuve-sur-auvers',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-sur-Auvers (91580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-sur-Auvers (91580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Villeneuve-sur-Auvers (91580) gratuitement dans tout Villeneuve-sur-Auvers',
      subtitle: 'Service d\'enlèvement à Villeneuve-sur-Auvers (91580) : retrait gratuit de votre VHU par notre équipe à Villeneuve-sur-Auvers.',
      badge: 'Villeneuve-sur-Auvers (91580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-sur-Auvers',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Villeneuve-sur-Auvers ? Nous l\'enlevons gratuitement. Dans la campagne de Villeneuve-sur-Auvers, nous intervenons sans frais de déplacement supplémentaires. Le déplacement à Villeneuve-sur-Auvers est inclus dans notre service, sans supplément kilométrique. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Villeneuve-sur-Auvers.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villeneuve-sur-Auvers soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-sur-Auvers',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Villeneuve-sur-Auvers sans limitation géographique. La planification de l\'enlèvement à Villeneuve-sur-Auvers s\'appuie sur les données communiquées en amont. Le secteur 91580 de Villeneuve-sur-Auvers est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes qui entourent Villeneuve-sur-Auvers profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-sur-Auvers',
      questions: [
        { q: 'L\'intervention à Villeneuve-sur-Auvers est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-sur-Auvers sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-sur-Auvers',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
