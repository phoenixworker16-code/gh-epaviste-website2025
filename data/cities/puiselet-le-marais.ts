import { PageData } from '../types'

export const puiseletLeMaraisData: PageData = {
  slug: 'puiselet-le-marais',
  entityType: 'City',
  metaTitle: 'Épaviste Puiselet-le-Marais (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Puiselet-le-Marais (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste de secteur à Puiselet-le-Marais (91150) pour enlèvement à Puiselet-le-Marais',
      subtitle: 'Retrait gratuit de votre véhicule hors d\'usage à Puiselet-le-Marais (91150). Service professionnel à Puiselet-le-Marais.',
      badge: 'Puiselet-le-Marais (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Puiselet-le-Marais',
      content: 'Votre propriété rurale à Puiselet-le-Marais n\'a pas besoin de cette épave : faites-la enlever. Vivre à la campagne à Puiselet-le-Marais ne signifie pas renoncer à un service d\'enlèvement professionnel. À Puiselet-le-Marais, nous retirons les épaves des champs, prés et chemins sans difficulté. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Notre équipe à Puiselet-le-Marais est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Puiselet-le-Marais soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Puiselet-le-Marais',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Puiselet-le-Marais est couvert. Le dispositif mis en place pour Puiselet-le-Marais est adapté à chaque situation particulière. Notre service dessert quotidiennement le secteur 91150 de Puiselet-le-Marais avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les axes secondaires et les hameaux près de Puiselet-le-Marais sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Puiselet-le-Marais',
      questions: [
        { q: 'L\'intervention à Puiselet-le-Marais est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Puiselet-le-Marais sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Puiselet-le-Marais',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
