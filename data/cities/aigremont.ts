import { PageData } from '../types'

export const aigremontData: PageData = {
  slug: 'aigremont',
  entityType: 'City',
  metaTitle: 'Épaviste Aigremont (78240) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Aigremont (78240). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Aigremont (78240) pour votre VHU à Aigremont',
      subtitle: 'Épaviste gratuit à Aigremont (78240) : intervention dans tout Aigremont pour votre véhicule hors d\'usage.',
      badge: 'Aigremont (78240)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Aigremont',
      content: 'Vous habitez à Aigremont et une épave vous encombre depuis des mois ? Agissez gratuitement. Vivre à la campagne à Aigremont ne signifie pas renoncer à un service d\'enlèvement professionnel. Le retrait gratuit de votre épave à Aigremont est organisé avec des équipements tout-terrain. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Nous organisons le passage à Aigremont avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Aigremont soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Aigremont',
      intro: 'Si votre épave se trouve à Aigremont, notre équipe peut intervenir sans contrainte de zone. Le rendez-vous pour Aigremont est défini en fonction des éléments communiqués lors du contact. Les habitants du 78240 à Aigremont bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre couverture géographique dépasse Aigremont pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Aigremont',
      questions: [
        { q: 'L\'intervention à Aigremont est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Aigremont sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Aigremont',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
