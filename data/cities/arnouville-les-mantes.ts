import { PageData } from '../types'

export const arnouvilleLesMantesData: PageData = {
  slug: 'arnouville-les-mantes',
  entityType: 'City',
  metaTitle: 'Épaviste Arnouville-lès-Mantes (78790) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Arnouville-lès-Mantes (78790). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement voiture hors d\'usage Arnouville-lès-Mantes (78790) - Service Arnouville-lès-Mantes',
      subtitle: 'Arnouville-lès-Mantes (78790) : enlèvement gratuit de votre épave à Arnouville-lès-Mantes par notre équipe.',
      badge: 'Arnouville-lès-Mantes (78790)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Arnouville-lès-Mantes',
      content: 'Nous venons à Arnouville-lès-Mantes avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Les chemins ruraux de Arnouville-lès-Mantes ne sont pas un obstacle pour nos équipes équipées. À Arnouville-lès-Mantes, nous retirons les épaves des champs, prés et chemins sans difficulté. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. Notre équipe à Arnouville-lès-Mantes est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Arnouville-lès-Mantes soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Arnouville-lès-Mantes',
      intro: 'À Arnouville-lès-Mantes, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Chaque demande d\'enlèvement à Arnouville-lès-Mantes reçoit une organisation personnalisée. Notre service dessert quotidiennement le secteur 78790 de Arnouville-lès-Mantes avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les axes routiers menant à Arnouville-lès-Mantes sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Arnouville-lès-Mantes',
      questions: [
        { q: 'L\'intervention à Arnouville-lès-Mantes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Arnouville-lès-Mantes sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Arnouville-lès-Mantes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
