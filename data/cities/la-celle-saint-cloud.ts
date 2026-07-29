import { PageData } from '../types'

export const laCelleSaintCloudData: PageData = {
  slug: 'la-celle-saint-cloud',
  entityType: 'City',
  metaTitle: 'Épaviste La Celle-Saint-Cloud (78170) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Celle-Saint-Cloud (78170). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service rapide d\'enlèvement d\'épave à La Celle-Saint-Cloud (78170) dans tout La Celle-Saint-Cloud',
      subtitle: 'Votre véhicule hors d\'usage à La Celle-Saint-Cloud (78170) ? Enlèvement gratuit partout dans La Celle-Saint-Cloud.',
      badge: 'La Celle-Saint-Cloud (78170)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Celle-Saint-Cloud',
      content: 'Dans la campagne de La Celle-Saint-Cloud, un véhicule hors d\'usage peut être retiré sans aucun frais. À La Celle-Saint-Cloud, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Notre service rural à La Celle-Saint-Cloud garantit un retrait professionnel sans contrainte de distance. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Chaque détail de l\'enlèvement à La Celle-Saint-Cloud est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis La Celle-Saint-Cloud, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Celle-Saint-Cloud',
      intro: 'Notre dispositif à La Celle-Saint-Cloud assure un enlèvement gratuit dans tous les secteurs sans exception. L\'intervention à La Celle-Saint-Cloud est programmée après avoir pris connaissance de votre situation. Le secteur 78170 de La Celle-Saint-Cloud est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les axes routiers menant à La Celle-Saint-Cloud sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Celle-Saint-Cloud',
      questions: [
        { q: 'L\'intervention à La Celle-Saint-Cloud est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Celle-Saint-Cloud sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Celle-Saint-Cloud',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
