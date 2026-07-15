/**
 * variants.js - Fonctions de génération de blocs par profil.
 * Injecte dynamiquement les données locales pour éviter le spinning basique.
 */

const crypto = require('crypto');

function stableVariantIndex(slug, length, namespace) {
  if (!slug || length <= 0) return 0;

  const hash = crypto.createHash('sha256')
    .update(`${namespace}:${slug}`)
    .digest('hex');

  return parseInt(hash.slice(0, 8), 16) % length;
}

function selectVariant(variants, commune, namespace) {
  return variants[stableVariantIndex(commune.slug, variants.length, namespace)];
}

function generateHero(profile, commune, localData) {
  const { ville, zipCode } = commune;
  
  const variants = {
    'hyper-centre': {
      title: `Épaviste Rapide au Cœur de ${ville} (${zipCode})`,
      subtitle: `Enlèvement gratuit de votre véhicule hors d'usage en zone urbaine dense. Dépanneuses adaptées aux accès difficiles et sous-sols.`,
    },
    'grande-ville': {
      title: `Épaviste Agréé Partenaire à ${ville}`,
      subtitle: `Service professionnel d'enlèvement d'épaves gratuit sur l'agglomération de ${ville} (${zipCode}). Prise en charge immédiate.`,
    },
    'banlieue-dense': {
      title: `Enlèvement d'Épave Gratuit à ${ville} (${zipCode})`,
      subtitle: `Intervention rapide en petite couronne. Débarrassez-vous de votre VHU sans frais et sans contrainte de stationnement.`,
    },
    'residentielle': {
      title: `Votre Épaviste de Proximité à ${ville} (${zipCode})`,
      subtitle: `Libérez votre allée ou votre garage. Enlèvement d'épave 100% gratuit en zone résidentielle et pavillonnaire.`,
    },
    'periurbaine': {
      title: `Débarras Auto Gratuit à ${ville} (${zipCode})`,
      subtitle: `Service d'enlèvement d'épaves efficace et réglementaire pour les communes périphériques. Déplacement gratuit.`,
    },
    'rurale': {
      title: `Épaviste Gratuit pour ${ville} et Environs`,
      subtitle: `Nous venons jusqu'à vous à ${ville} (${zipCode}) pour retirer gratuitement votre véhicule encombrant.`,
    }
  };

  const v = variants[profile] || variants['grande-ville'];
  const titleVariants = [
    v.title,
    `Enlèvement d'épave à ${ville} (${zipCode})`,
    `Service d'enlèvement d'épave à ${ville}`,
    `Retrait de véhicule hors d'usage à ${ville}`
  ];
  const subtitleVariants = [
    v.subtitle,
    `Prise en charge professionnelle de votre véhicule hors d'usage avec un rendez-vous adapté à son emplacement.`,
    `Une solution organisée pour retirer un véhicule immobilisé à ${ville} (${zipCode}) dans le respect des démarches requises.`,
    `Un enlèvement préparé selon l’accès au véhicule et les informations transmises lors de votre demande.`
  ];
  return {
    type: 'Hero',
    title: selectVariant(titleVariants, commune, 'hero-title'),
    subtitle: selectVariant(subtitleVariants, commune, 'hero-subtitle'),
    badge: `${ville} (${zipCode})`
  };
}

function generateIntroduction(profile, commune, localData) {
  const { ville, slug, zipCode, departement } = commune;
  
  const ruesSample = (localData && localData.rues && localData.rues.length > 0) 
    ? ` Que ce soit du côté de ${localData.rues[stableVariantIndex(slug, localData.rues.length, 'introduction-rue')]} ou ailleurs dans la commune, nous intervenons gratuitement.` 
    : '';

  const variants = {
    'hyper-centre': `Vous résidez en plein centre de ${ville} (${zipCode}) et votre véhicule est hors d'usage ? Le stationnement urbain rend la présence d'une épave particulièrement coûteuse et contraignante. GH Épaviste intervient rapidement pour l'enlèvement gratuit de votre VHU (voiture, moto, utilitaire).${ruesSample} Votre véhicule est ensuite acheminé vers un centre VHU partenaire pour y être dépollué dans les règles.`,
    
    'grande-ville': `Dans une agglomération dynamique comme ${ville} (${zipCode}), se débarrasser d'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l'ensemble de la commune pour vous proposer un service d'enlèvement d'épave totalement gratuit.${ruesSample} Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction.`,
    
    'banlieue-dense': `La densité de circulation à ${ville} (${zipCode}) exige une solution professionnelle pour l'enlèvement de votre épave. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d'usage et l'amenons chez un broyeur agréé VHU partenaire.`,
    
    'residentielle': `Vous avez un véhicule qui occupe inutilement votre allée ou votre garage à ${ville} (${zipCode}) ? En zone résidentielle, nous organisons l'enlèvement gratuit de votre épave en toute tranquillité. Nous prenons en charge l'acheminement vers un centre VHU partenaire sans le moindre frais pour vous, y compris si le véhicule est immobilisé de longue date.`,
    
    'periurbaine': `À ${ville} (${zipCode}) et dans ses environs, conserver un véhicule hors d'usage peut vite devenir un fardeau. GH Épaviste vous propose un service d'enlèvement gratuit particulièrement adapté aux communes périphériques du département ${departement}. Nous vous soulageons des démarches complexes en nous occupant du remorquage vers un centre partenaire.`,
    
    'rurale': `Situé à ${ville} (${zipCode}), votre véhicule hors d'usage encombre votre terrain ou votre cour ? Nous nous déplaçons gratuitement jusqu'à vous, même dans les zones moins denses du département ${departement}. Profitez d'un débarras d'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage.`
  };

  const localFocus = selectVariant([
    'Avant le rendez-vous, vérifiez l’accès au véhicule et préparez les documents demandés.',
    'L’organisation du retrait tient compte de l’emplacement du véhicule, de son état et des conditions d’accès.',
    'La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l’intervention.'
  ], commune, 'introduction-focus');
  const preparationFocus = selectVariant([
    'Un échange préalable permet de prévoir le matériel approprié et le créneau de passage.',
    'Les informations communiquées au moment de la demande facilitent la préparation du retrait.',
    'Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d’accès indiquées.',
    'La préparation du passage vise à éviter les déplacements inutiles et les difficultés d’accès.'
  ], commune, 'introduction-preparation');
  const coordinationFocus = selectVariant([
    'Le créneau est confirmé après vérification des éléments utiles à la prise en charge.',
    'La demande permet d’identifier les informations nécessaires avant le déplacement.',
    'Les modalités du rendez-vous sont précisées afin de préparer l’intervention.',
    'Un point préalable facilite la coordination entre le propriétaire et le professionnel chargé du retrait.',
    'Les détails communiqués en amont servent à organiser le passage dans de bonnes conditions.',
    'La préparation du rendez-vous clarifie les éléments à présenter lors de l’enlèvement.',
    'Les informations disponibles sont examinées avant de fixer les modalités du retrait.',
    'Le contact préalable permet d’anticiper les contraintes signalées pour le véhicule.'
  ], commune, 'introduction-coordination');

  return {
    type: 'Introduction',
    title: `Votre épaviste de confiance à ${ville}`,
    content: `${variants[profile] || variants['grande-ville']} ${localFocus} ${preparationFocus} ${coordinationFocus}`
  };
}

function generateLocalCoverage(profile, commune, localData) {
  const { ville } = commune;
  const limitrophes = (localData && localData.communes_limitrophes) ? localData.communes_limitrophes : [];
  const rues = (localData && localData.rues) ? localData.rues : [];
  
  const coverageFocus = selectVariant([
    'Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande.',
    'Chaque demande est organisée en tenant compte de l’emplacement exact du véhicule.',
    'Les informations de stationnement permettent d’anticiper les conditions de prise en charge.',
    'La préparation du passage prend en compte les contraintes signalées avant l’intervention.'
  ], commune, 'coverage-focus');
  const coveragePlanning = selectVariant([
    'Les indications fournies avant le rendez-vous servent à préparer l’itinéraire et l’accès.',
    'La prise en charge est organisée à partir des informations communiquées lors du contact.',
    'Le créneau est défini en fonction des conditions signalées pour le véhicule.',
    'Les modalités de passage sont précisées avant le déplacement du professionnel.',
    'Les contraintes d’accès sont prises en compte pendant la préparation du rendez-vous.',
    'La demande permet d’anticiper les informations pratiques liées au lieu de retrait.',
    'Les détails partagés avant l’intervention facilitent l’organisation du passage.',
    'Le rendez-vous est préparé pour tenir compte de la situation déclarée par le propriétaire.'
  ], commune, 'coverage-planning');
  let intro = `Notre équipe intervient dans l'ensemble de la commune de ${ville} pour procéder à l'enlèvement de votre véhicule. ${coverageFocus} ${coveragePlanning}`;
  if (limitrophes.length >= 2) {
    const l1Index = stableVariantIndex(commune.slug, limitrophes.length, 'coverage-neighbour-first');
    const l2Offset = stableVariantIndex(commune.slug, limitrophes.length - 1, 'coverage-neighbour-second') + 1;
    const l1 = limitrophes[l1Index];
    const l2 = limitrophes[(l1Index + l2Offset) % limitrophes.length];
    intro += ` Nos dépanneuses rayonnent également sur les secteurs limitrophes comme ${l1} et ${l2}.`;
  }

  const zones = [];
  if (profile === 'hyper-centre' || profile === 'grande-ville') {
    zones.push({ name: `Centre-ville & Rues étroites`, delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' });
    if (rues.length >= 2) {
      zones.push({ name: `Secteur ${rues[0]} / ${rues[1]}`, delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' });
    } else {
      zones.push({ name: `Quartiers périphériques`, delay: '24h à 48h', specificities: 'Intervention planifiée.' });
    }
  } else if (profile === 'residentielle' || profile === 'banlieue-dense') {
    zones.push({ name: `Zones pavillonnaires`, delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' });
    if (limitrophes.length > 0) {
      zones.push({ name: `Axes vers ${limitrophes[0]}`, delay: '24h', specificities: 'Dépannage bord de route ou parking.' });
    } else {
      zones.push({ name: `Secteur Gare / Centre`, delay: 'Rapide', specificities: 'Retrait d\'épave sur voie publique.' });
    }
  } else {
    zones.push({ name: `Bourg et centre de ${ville}`, delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' });
    zones.push({ name: `Lieux-dits et extérieurs`, delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin.' });
  }

  return {
    type: 'LocalCoverage',
    title: `Couverture d'intervention sur ${ville}`,
    intro: intro,
    zones: zones
  };
}

function generateDocsPreparation(profile, commune, localData) {
  const { ville, departement } = commune;
  
  const intros = [
    `Afin que le retrait de votre épave à ${ville} soit rapide et légal, un dossier complet est exigé.`,
    `L'enlèvement d'un véhicule hors d'usage à ${ville} implique une stricte conformité réglementaire. Voici les éléments à préparer.`,
    `Pour procéder au remorquage gratuit depuis ${ville}, notre chauffeur aura besoin des documents originaux du véhicule.`
  ];
  
  const intro = intros[ville.length % intros.length];

  return {
    type: 'DocsPreparation',
    title: 'Pièces à fournir pour l\'enlèvement',
    intro: `${intro} Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d'identité du propriétaire.`,
    specialCase: `Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département ${departement} sera indispensable.`
  };
}

function generateVhuCompliance(profile, commune, localData) {
  const transfer = selectVariant([
    `Après l'enlèvement, le véhicule est acheminé vers un centre VHU partenaire agréé.`,
    `La prise en charge prévoit le transfert du véhicule vers un centre VHU partenaire agréé.`,
    `Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire.`,
    `L'enlèvement est suivi d'un acheminement vers un centre VHU partenaire agréé.`
  ], commune, 'vhu-transfer');
  const outcome = selectVariant([
    `Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées.`,
    `Le partenaire assure les formalités et l’orientation du véhicule vers les filières réglementaires appropriées.`,
    `Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues.`,
    `Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable.`
  ], commune, 'vhu-outcome');
  const process = selectVariant([
    'Les responsabilités de chaque intervenant sont distinguées dès l’organisation de l’enlèvement.',
    'Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    'Cette coordination permet d’orienter le véhicule vers l’interlocuteur compétent pour les étapes suivantes.',
    'Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d’usage.',
    'Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    'Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    'Cette répartition des rôles assure une continuité entre l’enlèvement et les opérations réglementaires ultérieures.',
    'Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.'
  ], commune, 'vhu-process');
  const content = `${transfer} ${outcome} ${process}`;

  return {
    type: 'VhuCompliance',
    title: 'Dépollution et Recyclage',
    content: content
  };
}

function generateFaqLocal(profile, commune, localData) {
  const { ville } = commune;
  const questions = [
    {
      q: `L'intervention à ${ville} est-elle soumise à des frais de déplacement ?`,
      a: `Non, si votre véhicule est complet, l'enlèvement et le déplacement jusqu'à ${ville} sont entièrement gratuits.`
    },
    {
      q: `Délivrez-vous le certificat de destruction immédiatement ?`,
      a: `Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l'enlèvement.`
    },
    {
      q: `Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?`,
      a: `Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.`
    }
  ];

  if (profile === 'hyper-centre' || profile === 'grande-ville') {
    questions.push({
      q: `Mon véhicule est bloqué en sous-sol à ${ville}, est-ce un problème ?`,
      a: `Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d'entrer dans la majorité des parkings souterrains.`
    });
  } else if (profile === 'residentielle' || profile === 'rurale') {
    questions.push({
      q: `Venez-vous chercher une épave dans un champ ou un terrain difficile ?`,
      a: `Oui, nous sommes équipés de treuils puissants permettant d'extraire des véhicules enlisés ou sur des terrains non goudronnés.`
    });
  }

  const seed = ville.length;
  if (seed % 2 === 0) questions.reverse();

  return {
    type: 'FaqLocal',
    title: `Questions fréquentes sur l'enlèvement à ${ville}`,
    questions: questions
  };
}

function generateCta(profile, commune, localData) {
  const { ville } = commune;
  return {
    type: 'Cta',
    title: `Prendre rendez-vous pour votre épave à ${ville}`,
    subtitle: `Contactez-nous pour planifier l'enlèvement gratuit et légal de votre véhicule.`
  };
}

module.exports = {
  generateHero,
  generateIntroduction,
  generateLocalCoverage,
  generateDocsPreparation,
  generateVhuCompliance,
  generateFaqLocal,
  generateCta
};
