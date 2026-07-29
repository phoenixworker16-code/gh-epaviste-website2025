import { PageData } from '../types'

export const fontenayLesBriisData: PageData = {
  slug: 'fontenay-les-briis',
  entityType: 'City',
  metaTitle: 'Épaviste Fontenay-lès-Briis (91640) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fontenay-lès-Briis (91640). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement de véhicule à Fontenay-lès-Briis (91640) dans tout Fontenay-lès-Briis',
      subtitle: 'À Fontenay-lès-Briis (91640), notre équipe enlève gratuitement votre épave où qu\'elle soit.',
      badge: 'Fontenay-lès-Briis (91640)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fontenay-lès-Briis',
      content: 'Vous habitez à Fontenay-lès-Briis et une épave vous encombre depuis des mois ? Agissez gratuitement. Les propriétés rurales de Fontenay-lès-Briis sont desservies par notre service sans supplément. Notre service rural à Fontenay-lès-Briis garantit un retrait professionnel sans contrainte de distance. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Notre service à Fontenay-lès-Briis tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Fontenay-lès-Briis soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Le traitement respecte les normes applicables aux véhicules en fin de vie. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fontenay-lès-Briis',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Fontenay-lès-Briis, notre service est disponible. Pour Fontenay-lès-Briis, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Les demandes pour le 91640 de Fontenay-lès-Briis sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les voies d\'accès et les secteurs autour de Fontenay-lès-Briis font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fontenay-lès-Briis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Fontenay-lès-Briis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fontenay-lès-Briis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Fontenay-lès-Briis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
