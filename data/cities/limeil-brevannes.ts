import { PageData } from '../types'

export const limeilBrevannesData: PageData = {
  slug: 'limeil-brevannes',
  entityType: 'City',
  metaTitle: 'Épaviste Limeil-Brévannes (94450) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Limeil-Brévannes (94450). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Limeil-Brévannes (94450) - Intervention rapide à Limeil-Brévannes',
      subtitle: 'Épaviste à Limeil-Brévannes - Intervention gratuite pour retirer votre VHU dans le 94450 à Limeil-Brévannes.',
      badge: 'Limeil-Brévannes (94450)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Limeil-Brévannes',
      intro: 'La couverture de Limeil-Brévannes par notre service d\'enlèvement est totale et sans restriction. Le rendez-vous pour Limeil-Brévannes est fixé après un échange sur les conditions d\'accès. Les demandes pour le 94450 de Limeil-Brévannes sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les routes et chemins autour de Limeil-Brévannes sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Limeil-Brévannes',
      content: 'Dans une commune dense comme Limeil-Brévannes, une épave sur la voie publique pose vite problème. Les rues de Limeil-Brévannes ne doivent pas servir de dépôt pour un véhicule hors d\'usage. Nous adaptons notre intervention à Limeil-Brévannes en fonction de la densité de circulation. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Les détails du passage sont confirmés avant l\'intervention pour une coordination optimale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Limeil-Brévannes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Les obligations environnementales sont satisfaites par les partenaires de la filière. Les professionnels habilités prennent le relais selon le planning établi lors de l\'enlèvement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Limeil-Brévannes',
      questions: [
        { q: 'L\'intervention à Limeil-Brévannes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Limeil-Brévannes sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Limeil-Brévannes ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Limeil-Brévannes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
