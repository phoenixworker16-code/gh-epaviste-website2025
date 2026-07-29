import { PageData } from '../types'

export const commenyData: PageData = {
  slug: 'commeny',
  entityType: 'City',
  metaTitle: 'Épaviste Commeny (95450) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Commeny (95450). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Commeny (95450) - Enlèvement Commeny',
      subtitle: 'Enlèvement épave Commeny (95450) : service gratuit pour votre VHU dans tout le secteur de Commeny.',
      badge: 'Commeny (95450)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Commeny',
      content: 'Votre vieux véhicule à Commeny prend la poussière et vous voulez vous en séparer ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Commeny, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Commeny.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Commeny implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation du service prévoit l\'orientation systématique vers un professionnel habilité. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. Les opérateurs successifs interviennent chacun selon leurs compétences et habilitations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Commeny',
      intro: 'Où que soit garé votre véhicule à Commeny, notre dépanneuse peut accéder pour le retirer. Les particularités de l\'emplacement à Commeny sont prises en compte dans l\'organisation. Notre service dessert quotidiennement le secteur 95450 de Commeny avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes situées à proximité de Commeny peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Commeny',
      questions: [
        { q: 'L\'intervention à Commeny est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Commeny sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Commeny',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
