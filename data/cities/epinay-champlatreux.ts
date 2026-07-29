import { PageData } from '../types'

export const epinayChamplatreuxData: PageData = {
  slug: 'epinay-champlatreux',
  entityType: 'City',
  metaTitle: 'Épaviste Épinay-Champlâtreux (95270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Épinay-Champlâtreux (95270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire enlever son VHU à Épinay-Champlâtreux par un professionnel dans le 95270 de Épinay-Champlâtreux',
      subtitle: 'À Épinay-Champlâtreux (95270) : notre équipe retire gratuitement votre vieux véhicule dans tout Épinay-Champlâtreux.',
      badge: 'Épinay-Champlâtreux (95270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Épinay-Champlâtreux',
      content: 'Redonnez de l\'espace à votre terrain à Épinay-Champlâtreux en confiant cette épave à notre service. Même à Épinay-Champlâtreux, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Nous intervenons à Épinay-Champlâtreux sur les terrains les plus difficiles d\'accès. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Épinay-Champlâtreux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Épinay-Champlâtreux implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Épinay-Champlâtreux',
      intro: 'Aucun quartier de Épinay-Champlâtreux n\'est exclu : nous intervenons partout dans la commune. Les modalités d\'intervention à Épinay-Champlâtreux sont adaptées à l\'emplacement signalé du véhicule. Le secteur 95270 de Épinay-Champlâtreux est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les zones limitrophes de Épinay-Champlâtreux peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Épinay-Champlâtreux',
      questions: [
        { q: 'L\'intervention à Épinay-Champlâtreux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Épinay-Champlâtreux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Épinay-Champlâtreux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
