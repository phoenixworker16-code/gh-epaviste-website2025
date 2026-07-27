import { PageData } from '../types'

export const moncourtFromonvilleData: PageData = {
  slug: 'moncourt-fromonville',
  entityType: 'City',
  metaTitle: 'Épaviste Moncourt-Fromonville (77140) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Moncourt-Fromonville (77140). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Moncourt-Fromonville (77140) dans tout le 77140',
      subtitle: 'Intervention à Moncourt-Fromonville (77140) : retrait gratuit de votre épave par des professionnels à Moncourt-Fromonville.',
      badge: 'Moncourt-Fromonville (77140)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Moncourt-Fromonville',
      content: 'Un véhicule abandonné sur votre terrain à Moncourt-Fromonville vous gêne au quotidien ? Les chemins ruraux de Moncourt-Fromonville ne sont pas un obstacle pour nos équipes équipées. Les exploitants agricoles de Moncourt-Fromonville nous confient leurs épaves pour un traitement réglementaire. La logistique est organisée pour garantir une intervention efficace et sans attente. Notre équipe connaît les spécificités des zones rurales autour de Moncourt-Fromonville pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Moncourt-Fromonville, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Moncourt-Fromonville',
      intro: 'Notre service gratuit à Moncourt-Fromonville couvre toutes les zones, du bourg aux hameaux périphériques. La préparation de l\'intervention à Moncourt-Fromonville commence dès la réception de votre demande. Le secteur 77140 de Moncourt-Fromonville est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les habitants des environs de Moncourt-Fromonville peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Moncourt-Fromonville',
      questions: [
        { q: 'L\'intervention à Moncourt-Fromonville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Moncourt-Fromonville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Moncourt-Fromonville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
