import { PageData } from '../types'

export const pamfouData: PageData = {
  slug: 'pamfou',
  entityType: 'City',
  metaTitle: 'Épaviste Pamfou (77830) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Pamfou (77830). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras véhicule hors d\'usage Pamfou (77830) - Épaviste Pamfou',
      subtitle: 'Enlèvement d\'épave Pamfou (77830) : service rapide et gratuit pour votre VHU dans tout Pamfou.',
      badge: 'Pamfou (77830)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Pamfou',
      content: 'Les zones rurales autour de Pamfou sont intégralement couvertes par notre service gratuit. Dans les secteurs agricoles de Pamfou, nous retirons les épaves sans endommager les terrains. À Pamfou, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Pamfou.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Pamfou soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Pamfou',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Pamfou sans limitation géographique. Le dispositif mis en place pour Pamfou est adapté à chaque situation particulière. La zone 77830 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Pamfou. Nous ne nous limitons pas à Pamfou : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Pamfou',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Pamfou est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Pamfou sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Pamfou',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
