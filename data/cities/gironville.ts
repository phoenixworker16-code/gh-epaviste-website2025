import { PageData } from '../types'

export const gironvilleData: PageData = {
  slug: 'gironville',
  entityType: 'City',
  metaTitle: 'Épaviste Gironville (77890) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gironville (77890). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service de retrait d\'épave à Gironville sans frais dans tout Gironville (77890)',
      subtitle: 'Votre épave à Gironville retirée gratuitement. Intervention rapide dans le 77890 à Gironville.',
      badge: 'Gironville (77890)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gironville',
      content: 'Dans le secteur rural de Gironville, nous nous déplaçons gratuitement pour enlever votre épave. Les propriétés rurales de Gironville sont desservies par notre service sans supplément. À Gironville, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. L\'enlèvement à Gironville bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Gironville implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gironville',
      intro: 'Le retrait de votre épave à Gironville est possible où qu\'elle se trouve sur la commune. L\'organisation du passage à Gironville tient compte des particularités annoncées. Les demandes pour le 77890 de Gironville sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les localités voisines de Gironville peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gironville',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Gironville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gironville sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gironville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
