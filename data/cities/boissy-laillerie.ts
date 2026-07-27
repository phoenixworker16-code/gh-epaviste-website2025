import { PageData } from '../types'

export const boissyLaillerieData: PageData = {
  slug: 'boissy-laillerie',
  entityType: 'City',
  metaTitle: 'Épaviste Boissy-l\'Aillerie (95650) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boissy-l\'Aillerie (95650). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Boissy-l\'Aillerie (95650) pour votre VHU à Boissy-l\'Aillerie',
      subtitle: 'Retrait de VHU à Boissy-l\'Aillerie (95650) : un service gratuit et rapide pour tout Boissy-l\'Aillerie et ses environs.',
      badge: 'Boissy-l\'Aillerie (95650)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boissy-l\'Aillerie',
      content: 'Dans la campagne de Boissy-l\'Aillerie, un véhicule hors d\'usage peut être retiré sans aucun frais. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Boissy-l\'Aillerie, notre logistique rurale permet de retirer les épaves même en terrain accidenté. La logistique est organisée pour garantir une intervention efficace et sans attente. Notre expérience des interventions en zone rurale garantit un service de qualité à Boissy-l\'Aillerie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Boissy-l\'Aillerie, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. Les obligations déclaratives sont remplies par les opérateurs compétents de la filière. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boissy-l\'Aillerie',
      intro: 'Notre équipe intervient dans toute l\'agglomération de Boissy-l\'Aillerie pour retirer votre épave gratuitement. Pour Boissy-l\'Aillerie, une préparation sur mesure est réalisée selon vos indications. Pour le secteur 95650, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Boissy-l\'Aillerie. Notre couverture géographique dépasse Boissy-l\'Aillerie pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boissy-l\'Aillerie',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boissy-l\'Aillerie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boissy-l\'Aillerie sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boissy-l\'Aillerie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
