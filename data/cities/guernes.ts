import { PageData } from '../types'

export const guernesData: PageData = {
  slug: 'guernes',
  entityType: 'City',
  metaTitle: 'Épaviste Guernes (78520) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Guernes (78520). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Guernes (78520) dans tout le 78520',
      subtitle: 'Solution enlèvement épave à Guernes (78520). Intervention rapide et gratuite dans le 78520 de Guernes.',
      badge: 'Guernes (78520)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Guernes',
      content: 'Les zones rurales autour de Guernes sont intégralement couvertes par notre service gratuit. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. Notre service rural à Guernes garantit un retrait professionnel sans contrainte de distance. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. L\'intervention à Guernes est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Guernes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement terminé, le transfert est organisé vers un professionnel de la filière réglementée. Les différentes étapes réglementaires sont assurées par les partenaires habilités. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Guernes',
      intro: 'Tous les habitants de Guernes peuvent bénéficier de notre service d\'enlèvement à domicile. Un créneau d\'enlèvement à Guernes vous est proposé selon vos disponibilités. Notre service dessert quotidiennement le secteur 78520 de Guernes avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs de Guernes peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Guernes',
      questions: [
        { q: 'L\'intervention à Guernes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Guernes sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Guernes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
