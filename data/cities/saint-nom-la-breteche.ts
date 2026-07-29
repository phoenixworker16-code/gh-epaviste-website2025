import { PageData } from '../types'

export const saintNomLaBretecheData: PageData = {
  slug: 'saint-nom-la-breteche',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Nom-la-Bretèche (78860) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Nom-la-Bretèche (78860). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras d\'épave automobile à Saint-Nom-la-Bretèche (78860) par épaviste à Saint-Nom-la-Bretèche',
      subtitle: 'Épaviste gratuit à Saint-Nom-la-Bretèche (78860) : intervention dans tout Saint-Nom-la-Bretèche pour votre véhicule hors d\'usage.',
      badge: 'Saint-Nom-la-Bretèche (78860)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Nom-la-Bretèche',
      content: 'Votre propriété à Saint-Nom-la-Bretèche est encombrée par un véhicule hors d\'usage ? Nous intervenons. Vivre à la campagne à Saint-Nom-la-Bretèche ne signifie pas renoncer à un service d\'enlèvement professionnel. Les exploitants agricoles de Saint-Nom-la-Bretèche nous confient leurs épaves pour un traitement réglementaire. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Notre service à Saint-Nom-la-Bretèche tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Nom-la-Bretèche soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Nom-la-Bretèche',
      intro: 'Nous intervenons à Saint-Nom-la-Bretèche dans tous les secteurs, y compris dans les zones à accès difficile. Chaque demande pour Saint-Nom-la-Bretèche est traitée avec une attention particulière à la préparation. Notre équipe couvre le secteur postal 78860 avec une logistique dédiée. Les habitants de Saint-Nom-la-Bretèche peuvent compter sur notre présence régulière dans ce code postal. Notre rayonnement autour de Saint-Nom-la-Bretèche s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Nom-la-Bretèche',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Nom-la-Bretèche est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Nom-la-Bretèche sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Nom-la-Bretèche',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
