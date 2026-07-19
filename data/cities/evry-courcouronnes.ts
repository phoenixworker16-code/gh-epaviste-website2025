import { PageData } from '../types'

export const evryCourcouronnesData: PageData = {
  slug: 'evry-courcouronnes',
  entityType: 'City',
  metaTitle: 'Épaviste Évry-Courcouronnes (91000) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Évry-Courcouronnes (91000). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave professionnel à Évry-Courcouronnes (91000) pour votre VHU à Évry-Courcouronnes',
      subtitle: 'Nous enlevons les épaves à Évry-Courcouronnes (91000). Prestation gratuite incluant remorquage à Évry-Courcouronnes.',
      badge: 'Évry-Courcouronnes (91000)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Évry-Courcouronnes',
      content: 'Vous habitez à Évry-Courcouronnes et une épave vous encombre depuis des mois ? Agissez gratuitement. Dans les secteurs agricoles de Évry-Courcouronnes, nous retirons les épaves sans endommager les terrains. Notre équipe à Évry-Courcouronnes est équipée de véhicules adaptés aux chemins ruraux. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Nous adaptons notre intervention à Évry-Courcouronnes en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Évry-Courcouronnes soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Évry-Courcouronnes',
      intro: 'Notre dispositif à Évry-Courcouronnes assure un enlèvement gratuit dans tous les secteurs sans exception. Les informations fournies sur la situation à Évry-Courcouronnes permettent de préparer l\'intervention. Les demandes pour le 91000 de Évry-Courcouronnes sont traitées en priorité par notre équipe qui connaît bien ce secteur. Si vous résidez près de Évry-Courcouronnes, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Évry-Courcouronnes',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Évry-Courcouronnes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Évry-Courcouronnes sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Évry-Courcouronnes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
