import { PageData } from '../types'

export const saulxLesChartreuxData: PageData = {
  slug: 'saulx-les-chartreux',
  entityType: 'City',
  metaTitle: 'Épaviste Saulx-les-Chartreux (91160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saulx-les-Chartreux (91160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Saulx-les-Chartreux (91160) gratuitement dans tout Saulx-les-Chartreux',
      subtitle: 'Besoin d\'un épaviste à Saulx-les-Chartreux (91160) ? Enlèvement gratuit de votre VHU dans tout Saulx-les-Chartreux.',
      badge: 'Saulx-les-Chartreux (91160)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saulx-les-Chartreux',
      content: 'À Saulx-les-Chartreux, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Votre propriété à Saulx-les-Chartreux est accessible à nos dépanneuses pour un enlèvement gratuit. À Saulx-les-Chartreux, nous retirons les épaves des champs, prés et chemins sans difficulté. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Nous organisons le passage à Saulx-les-Chartreux avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saulx-les-Chartreux implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saulx-les-Chartreux',
      intro: 'Le retrait de votre épave à Saulx-les-Chartreux est possible où qu\'elle se trouve sur la commune. Les particularités de l\'emplacement à Saulx-les-Chartreux sont prises en compte dans l\'organisation. Les habitants du 91160 à Saulx-les-Chartreux bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les communes autour de Saulx-les-Chartreux sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saulx-les-Chartreux',
      questions: [
        { q: 'L\'intervention à Saulx-les-Chartreux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saulx-les-Chartreux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saulx-les-Chartreux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
