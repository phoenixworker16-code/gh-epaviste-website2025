import { PageData } from '../types'

export const levisSaintNomData: PageData = {
  slug: 'levis-saint-nom',
  entityType: 'City',
  metaTitle: 'Épaviste Lévis-Saint-Nom (78320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Lévis-Saint-Nom (78320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Lévis-Saint-Nom (78320) - Intervention rapide à Lévis-Saint-Nom',
      subtitle: 'À Lévis-Saint-Nom (78320) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Lévis-Saint-Nom.',
      badge: 'Lévis-Saint-Nom (78320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Lévis-Saint-Nom',
      content: 'À Lévis-Saint-Nom, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Lévis-Saint-Nom, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Le déplacement à Lévis-Saint-Nom est inclus dans notre service, sans supplément kilométrique. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Nous organisons le passage à Lévis-Saint-Nom avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Lévis-Saint-Nom soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Lévis-Saint-Nom',
      intro: 'Nous intervenons à Lévis-Saint-Nom dans tous les secteurs, y compris dans les zones à accès difficile. Notre logistique à Lévis-Saint-Nom est dimensionnée pour répondre à chaque type de demande. Les habitants du 78320 à Lévis-Saint-Nom bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre couverture géographique dépasse Lévis-Saint-Nom pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Lévis-Saint-Nom',
      questions: [
        { q: 'L\'intervention à Lévis-Saint-Nom est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Lévis-Saint-Nom sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Lévis-Saint-Nom',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
