import { PageData } from '../types'

export const chateaufortData: PageData = {
  slug: 'chateaufort',
  entityType: 'City',
  metaTitle: 'Épaviste Châteaufort (78117) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Châteaufort (78117). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Châteaufort (78117) pour les habitants de Châteaufort',
      subtitle: 'À Châteaufort (78117), notre équipe enlève gratuitement votre épave où qu\'elle soit.',
      badge: 'Châteaufort (78117)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Châteaufort',
      content: 'Dans la campagne de Châteaufort, un véhicule hors d\'usage peut être retiré sans aucun frais. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. Notre service à Châteaufort garantit un retrait gratuit où que vous soyez dans la commune. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Nous prévoyons le passage à Châteaufort en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Châteaufort, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Châteaufort',
      intro: 'Même dans les secteurs les plus excentrés de Châteaufort, nous organisons l\'enlèvement. Notre équipe à Châteaufort coordonne le passage avec vous pour une intervention sans accroc. Notre équipe couvre le secteur postal 78117 avec une logistique dédiée. Les habitants de Châteaufort peuvent compter sur notre présence régulière dans ce code postal. Autour de Châteaufort, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Châteaufort',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Châteaufort est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Châteaufort sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Châteaufort',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
