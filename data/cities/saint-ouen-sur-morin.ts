import { PageData } from '../types'

export const saintOuenSurMorinData: PageData = {
  slug: 'saint-ouen-sur-morin',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Ouen-sur-Morin (77750) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Ouen-sur-Morin (77750). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait auto hors d\'usage Saint-Ouen-sur-Morin (77750) dans le département 77750',
      subtitle: 'Nous enlevons les épaves à Saint-Ouen-sur-Morin (77750). Prestation gratuite incluant remorquage à Saint-Ouen-sur-Morin.',
      badge: 'Saint-Ouen-sur-Morin (77750)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Ouen-sur-Morin',
      content: 'Votre vieux véhicule à Saint-Ouen-sur-Morin prend la poussière et vous voulez vous en séparer ? Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. À Saint-Ouen-sur-Morin, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Les détails de l\'intervention à Saint-Ouen-sur-Morin sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Ouen-sur-Morin, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Ouen-sur-Morin',
      intro: 'La commune de Saint-Ouen-sur-Morin est intégralement couverte par notre service gratuit d\'enlèvement. Avant l\'enlèvement à Saint-Ouen-sur-Morin, les informations pratiques sont échangées avec le propriétaire. Les demandes pour le 77750 de Saint-Ouen-sur-Morin sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les communes autour de Saint-Ouen-sur-Morin sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Ouen-sur-Morin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Ouen-sur-Morin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Ouen-sur-Morin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Ouen-sur-Morin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
