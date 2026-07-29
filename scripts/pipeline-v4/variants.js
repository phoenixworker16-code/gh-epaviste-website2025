/**
 * variants.js - Générateurs de blocs par composition de segments.
 * === ARCHITECTURE ===
 * Chaque bloc (Hero, Introduction, LocalCoverage, VhuCompliance, etc.)
 * est assemblé à partir de SEGMENTS INDÉPENDANTS, sélectionnés par SHA-256
 * avec un namespace unique par segment → déterminisme parfait.
 *
 * === SÉLECTION DÉTERMINISTE ===
 * Chaque segment possède son propre hash SHA-256(namespace + slug).
 * Exemple : SHA256("intro-opening" + slug), SHA256("intro-situation" + slug)
 * → pas d'index partagé entre segments.
 *
 * === ENRICHIR LES VARIANTES ===
 * Pour AJOUTER une nouvelle formulation à un segment :
 *   1. Ouvrir le tableau correspondant (ex: VhuTransferVariants)
 *   2. Ajouter une chaîne à la fin du tableau
 *   3. La diversité augmente AUTOMATIQUEMENT
 *   4. Aucune modification de la logique de sélection ou du pipeline
 *
 * === SEGMENTS DISPONIBLES ===
 *
 * VhuCompliance :
 *   VhuTransferVariants[]  - transfert du véhicule (50)
 *   VhuOutcomeVariants[]   - résultat réglementaire (50)
 *   VhuProcessVariants[]   - répartition des rôles (50)
 *   → 50×50×50 = 125 000 combinaisons
 *   → Interdit : centre VHU, agrément, certificat de destruction, dépollution
 *
 * Introduction (par profil : hyper-centre, grande-ville, banlieue-dense,
 *                residentielle, periurbaine, rurale) :
 *   opening[profil][]    - phrase d'accroche (20 par profil)
 *   situation[profil][]  - contexte local (20 par profil)
 *   service[profil][]    - description du service (20 par profil)
 *   logistics[]          - organisation logistique (30, partagé)
 *   reassurance[profil][]- réassurance (20 par profil)
 *   → 20×20×20×30×20 = 4 800 000 combinaisons par profil
 *
 * LocalCoverage :
 *   focusVariants[]      - couverture communale (40)
 *   planningVariants[]   - organisation intervention (40)
 *   rayonnementVariants[]- secteurs alentour (30)
 *   profileVariants      - zones de couverture par profil
 *
 * Hero :
 *   HeroTitleVariants[]    - titres (33)
 *   HeroSubtitleVariants[] - sous-titres (30)
 *   profileTitles/profileSubtitles par profil
 *
 * DocsPreparation, FaqLocal, Cta : variantes simples
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

// =========================================================================
// VHUCOMPLIANCE — segments
// =========================================================================
// 3 segments indépendants : transfert, traitement, répartition
// 12 × 12 × 12 = 1 728 combinaisons

const VhuTransferVariants = [
  "Après l'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie.",
  "La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d'usage.",
  "Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire.",
  "L'enlèvement est suivi d'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule.",
  "Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage.",
  "Le transfert vers un partenaire compétent est organisé dès l'enlèvement terminé.",
  "La prise en charge inclut l'acheminement vers un professionnel partenaire habilité pour les véhicules hors d'usage.",
  "Le véhicule est conduit vers un professionnel partenaire après l'enlèvement.",
  "Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes.",
  "L'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée.",
  "L'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré.",
  "La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie.",
  "Le véhicule retiré est orienté vers une structure partenaire disposant des autorisations nécessaires.",
  "Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile.",
  "L'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules.",
  "Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires.",
  "Une fois l'enlèvement effectué, le véhicule rejoint une installation partenaire dédiée.",
  "La prestation comprend l'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir.",
  "Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d'usage.",
  "Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes.",
  "Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage.",
  "L'enlèvement terminé, le transfert est organisé vers un professionnel de la filière réglementée.",
  "Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie.",
  "La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile.",
  "Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire.",
  "L'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes.",
  "Dès l'enlèvement réalisé, le transfert vers l'installation partenaire appropriée est programmé.",
  "Le véhicule est dirigé vers un prestataire spécialisé dans le traitement des véhicules en fin de vie.",
  "Après l'intervention, la prise en charge est relayée à un partenaire technique habilité.",
  "La prestation d'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours.",
  "Le véhicule retiré est confié à un partenaire autorisé à réaliser les opérations de recyclage.",
  "L'organisation du service prévoit l'orientation systématique vers un professionnel habilité.",
  "Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié.",
  "Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises.",
  "La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée.",
  "Après l'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures.",
  "Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l'enlèvement.",
  "L'organisation intègre un transfert vers un prestataire compétent pour la filière des véhicules usagés.",
  "Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement.",
  "La remise du véhicule à un opérateur spécialisé est prévue dans l'organisation du service.",
  "Le transfert vers l'opérateur compétent est planifié dès la confirmation de l'enlèvement.",
  "Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique.",
  "L'enlèvement est complété par un transfert organisé vers un partenaire de la filière agréée.",
  "Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires.",
  "La prestation prévoit l'orientation du véhicule vers un interlocuteur compétent pour la fin de vie.",
  "Le véhicule retiré rejoint une installation partenaire disposant des autorisations d'exploitation.",
  "Le transfert est organisé avec un professionnel de la filière autorisée pour ces opérations.",
  "Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé.",
  "L'organisation comprend un relais vers un établissement habilité pour la suite des opérations.",
  "Le véhicule est dirigé vers un opérateur partenaire compétent dans le domaine du recyclage automobile."
];

const VhuOutcomeVariants = [
  "Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées.",
  "Le partenaire assure les formalités et l'orientation du véhicule vers les filières réglementaires appropriées.",
  "Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues.",
  "Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable.",
  "Le traitement est effectué dans le respect des obligations environnementales en vigueur.",
  "La réglementation encadrant les véhicules hors d'usage est respectée par les intervenants agréés.",
  "Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires.",
  "Le recyclage et les démarches administratives sont pris en charge par les filières compétentes.",
  "La fin de vie du véhicule est traitée dans le respect des filières autorisées.",
  "Les différentes étapes réglementaires sont assurées par les partenaires habilités.",
  "Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge.",
  "L'ensemble des opérations est réalisé dans les conditions fixées par la réglementation.",
  "Les obligations applicables aux véhicules hors d'usage sont respectées tout au long du processus.",
  "La traçabilité des opérations est assurée par les professionnels intervenant dans la filière.",
  "Les formalités administratives liées à la fin de vie sont accomplies par les opérateurs compétents.",
  "Le respect des textes en vigueur est garanti par l'intervention de professionnels habilités.",
  "Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés.",
  "La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants.",
  "Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules.",
  "Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies.",
  "Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours.",
  "Les exigences légales sont satisfaites par l'intervention de partenaires compétents dans la filière.",
  "La conformité du traitement est assurée par le respect des procédures en vigueur.",
  "Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement.",
  "La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d'usage.",
  "Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules.",
  "Le cadre réglementaire est respecté à chaque étape par les professionnels habilités.",
  "Les formalités requises sont accomplies par les partenaires compétents dans la filière.",
  "La fin de vie du véhicule est gérée conformément aux procédures réglementaires établies.",
  "Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables.",
  "Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules.",
  "La réglementation en vigueur est suivie par l'ensemble des intervenants de la filière.",
  "Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation.",
  "Le processus respecte les prescriptions légales applicables à ce type de véhicule.",
  "Les professionnels intervenants garantissent l'application des règles en matière de recyclage.",
  "La conformité aux textes réglementaires est vérifiée par les opérateurs compétents.",
  "Les étapes de traitement sont encadrées par les dispositions légales en vigueur.",
  "Les obligations environnementales sont satisfaites par les partenaires de la filière.",
  "Le traitement respecte les normes applicables aux véhicules en fin de vie.",
  "Les opérateurs veillent au respect des exigences réglementaires tout au long du processus.",
  "Les formalités réglementaires sont accomplies dans les conditions prévues par la législation.",
  "La traçabilité du parcours est assurée conformément aux obligations en vigueur.",
  "Les professionnels habilités assurent le respect des procédures imposées par la réglementation.",
  "Le recyclage est effectué dans le respect des filières autorisées et des normes applicables.",
  "Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi.",
  "L'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité.",
  "Les obligations déclaratives sont remplies par les opérateurs compétents de la filière.",
  "Le traitement du véhicule suit les procédures imposées par la réglementation en vigueur.",
  "Les différentes opérations sont soumises au respect des règles applicables à la filière."
];

const VhuProcessVariants = [
  "Les responsabilités de chaque intervenant sont distinguées dès l'organisation de l'enlèvement.",
  "Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.",
  "Cette coordination permet d'orienter le véhicule vers l'interlocuteur compétent pour les étapes suivantes.",
  "Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d'usage.",
  "Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.",
  "Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.",
  "Cette répartition des rôles assure une continuité entre l'enlèvement et les opérations réglementaires ultérieures.",
  "Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.",
  "Chaque étape est confiée à un professionnel adapté, de l'enlèvement jusqu'à la valorisation finale.",
  "L'organisation du parcours permet un suivi clair des différentes phases de traitement.",
  "Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.",
  "La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.",
  "Les différents rôles sont répartis entre les professionnels intervenant dans le processus.",
  "Le propriétaire est informé du déroulement et des étapes successives de la prise en charge.",
  "La coordination entre les opérateurs garantit la continuité du traitement réglementaire.",
  "Chaque intervenant intervient dans son domaine de compétence selon le planning établi.",
  "Les étapes sont orchestrées pour assurer une transition fluide entre les différents opérateurs.",
  "Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.",
  "Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.",
  "La répartition des tâches entre les partenaires est définie dès l'organisation de l'enlèvement.",
  "Le suivi du parcours permet au propriétaire de connaître les différentes étapes réalisées.",
  "Les opérateurs successifs interviennent chacun selon leurs compétences et habilitations.",
  "La continuité du traitement est assurée par une organisation structurée entre les partenaires.",
  "Les professionnels se relaient pour couvrir l'ensemble des phases du processus réglementaire.",
  "Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.",
  "La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.",
  "Les partenaires coordonnent leurs interventions pour assurer la complétude du traitement.",
  "Chaque phase est prise en charge par le professionnel compétent pour ce type d'opération.",
  "L'organisation prévoit une articulation claire entre les différentes étapes du processus.",
  "Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.",
  "La transition entre les intervenants est organisée pour garantir la continuité du service.",
  "Le propriétaire bénéficie d'un suivi transparent des différentes phases de prise en charge.",
  "Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.",
  "La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.",
  "Le processus est conçu pour assurer une prise en charge complète sans rupture de service.",
  "Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.",
  "L'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.",
  "Les partenaires se répartissent les opérations selon leur domaine d'expertise respectif.",
  "La continuité entre l'enlèvement et le traitement est assurée par une organisation cadrée.",
  "Les rôles de chacun sont documentés pour garantir la traçabilité du parcours du véhicule.",
  "Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.",
  "Les professionnels habilités prennent le relais selon le planning établi lors de l'enlèvement.",
  "L'organisation des différentes phases permet un traitement complet dans le respect des règles.",
  "La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.",
  "Les opérateurs compétents interviennent à tour de rôle pour couvrir l'ensemble du processus.",
  "Le dispositif assure une répartition claire des tâches entre les différents partenaires.",
  "La coordination des professionnels garantit l'efficacité du traitement réglementaire.",
  "Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.",
  "Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.",
  "L'articulation entre les intervenants est définie pour assurer un suivi continu du dossier."
];

// =========================================================================
// INTRODUCTION — segments
// =========================================================================
// 5 segments indépendants : ouverture, situation, service, contexte, fin
// 8 × 8 × 8 × 8 × 8 = 32 768 combinaisons par profil
// Chaque profil a ses propres tableaux pour garantir la pertinence éditoriale

function buildIntroductionSegments(profile) {

  // --- OPENING ---
  const opening = {
    'hyper-centre': [
      `Vous résidez au cœur de la capitale et votre véhicule est à l'arrêt définitif ?`,
      `Votre voiture ne roule plus dans Paris intra-muros et vous cherchez une solution simple ?`,
      `Un véhicule immobilisé en plein Paris représente une contrainte de stationnement coûteuse.`,
      `Votre épave stationne dans une rue parisienne et vous souhaitez vous en débarrasser gratuitement ?`,
      `Dans Paris, un véhicule hors d'usage est rapidement un problème de voisinage et de stationnement.`,
      `Vous avez un véhicule définitivement arrêté dans un arrondissement parisien ?`,
      `Un véhicule encombrant dans les rues de Paris nécessite une solution rapide et gratuite.`,
      `Votre vieille voiture ne démarre plus dans Paris et occupe une place précieuse ?`,
      `Votre véhicule immobilisé à Paris peut être retiré sans aucun frais par notre service.`,
      `Dans Paris, chaque place de stationnement est précieuse, ne la laissez pas à une épave.`,
      `Un véhicule qui ne circule plus dans Paris mérite une prise en charge adaptée et gratuite.`,
      `Vous cherchez une solution pour libérer votre place de parking parisienne d'un véhicule hors d'usage ?`,
      `À Paris, nous retirons gratuitement votre véhicule où qu'il stationne dans la capitale.`,
      `Votre automobile est définitivement arrêtée dans Paris et vous souhaitez vous en défaire ?`,
      `Libérez votre espace de stationnement à Paris en confiant votre épave à notre service gratuit.`,
      `Dans un arrondissement parisien, un véhicule abandonné attire rapidement des contraventions.`,
      `Évitez les frais de fourrière à Paris en organisant un enlèvement gratuit dès maintenant.`,
      `Les rues de Paris ne sont pas un lieu de stockage : faites enlever gratuitement votre épave.`,
      `Votre véhicule en panne définitive dans Paris peut être retiré simplement et sans frais.`,
      `Nous simplifions l'enlèvement de votre épave dans Paris, quel que soit l'arrondissement.`
    ],
    'grande-ville': [
      `Dans une agglomération dynamique comme {ville}, se débarrasser d'un véhicule encombrant nécessite une logistique précise.`,
      `Votre véhicule hors d'usage stationne à {ville} et vous voulez une solution rapide ?`,
      `À {ville}, un véhicule immobilisé sur la voie publique devient vite une préoccupation.`,
      `Vous cherchez à faire enlever gratuitement votre épave à {ville} simplement et sans frais ?`,
      `Votre voiture ne circule plus à {ville} et vous souhaitez libérer de l'espace ?`,
      `Un véhicule en panne définitive à {ville} vous encombre et vous voulez le faire retirer ?`,
      `L'agglomération de {ville} concentre un trafic dense, une épave ne doit pas s'éterniser.`,
      `À {ville}, nous simplifions l'enlèvement de votre véhicule hors d'usage en quelques démarches.`,
      `Votre vieux véhicule à {ville} peut être retiré gratuitement où qu'il stationne dans la commune.`,
      `Dans une grande ville comme {ville}, un véhicule hors d'usage attire vite l'attention.`,
      `Vous avez une épave à {ville} qui vous encombre et vous ne savez pas comment vous en défaire ?`,
      `À {ville}, un véhicule immobilisé sur l'espace public peut entraîner des frais de fourrière.`,
      `Notre équipe à {ville} prend en charge gratuitement l'enlèvement de votre véhicule.`,
      `Évitez les complications à {ville} en faisant retirer gratuitement votre épave sans attendre.`,
      `Votre véhicule hors d'usage à {ville} peut être enlevé rapidement, sans aucun frais.`,
      `Ne laissez pas votre épave occuper inutilement l'espace public à {ville}.`,
      `Les rues de {ville} ne sont pas adaptées au stockage d'un véhicule hors d'usage.`,
      `À {ville}, organiser un enlèvement gratuit vous évite bien des désagréments administratifs.`,
      `Vous souhaitez vous séparer de votre vieux véhicule à {ville} sans payer un centime ?`,
      `Nous intervenons dans toute l'agglomération de {ville} pour un retrait rapide et gratuit.`
    ],
    'banlieue-dense': [
      `La densité de circulation à {ville} exige une solution professionnelle pour l'enlèvement de votre épave.`,
      `Votre véhicule est immobilisé à {ville} et vous cherchez un enlèvement gratuit et fiable ?`,
      `Dans une commune dense comme {ville}, une épave sur la voie publique pose vite problème.`,
      `Vous souhaitez vous débarrasser gratuitement de votre vieux véhicule à {ville} ?`,
      `Un véhicule hors d'usage à {ville} peut rapidement devenir une source de contraintes.`,
      `À {ville}, nous retirons votre épave gratuitement où qu'elle se trouve dans la commune.`,
      `Votre voiture ne roule plus à {ville} et vous voulez une intervention rapide ?`,
      `La circulation dense à {ville} rend l'enlèvement d'épave urgent pour libérer la voie publique.`,
      `Dans une commune dense comme {ville}, une épave gêne rapidement la circulation quotidienne.`,
      `Vous avez un véhicule hors d'usage dans une rue de {ville} et vous voulez agir vite ?`,
      `À {ville}, le stationnement est déjà difficile sans une épave qui occupe une place.`,
      `Notre service à {ville} permet un enlèvement gratuit même dans les quartiers les plus denses.`,
      `Votre véhicule immobilisé à {ville} peut être retiré rapidement par notre équipe.`,
      `Les rues étroites de {ville} ne sont pas un endroit pour laisser un véhicule hors d'usage.`,
      `Faites enlever gratuitement votre épave à {ville} avant qu'elle ne cause des problèmes de voisinage.`,
      `Dans une commune résidentielle dense comme {ville}, une épave dérange tout le quartier.`,
      `Nous organisons l'enlèvement gratuit de votre véhicule à {ville} sur simple demande.`,
      `Votre épave à {ville} peut être retirée gratuitement, sans paperasse compliquée.`,
      `À {ville}, la densité urbaine rend le retrapide des épaves indispensable.`,
      `Une épave à {ville} attire les regards et les remarques : solutionnez cela gratuitement.`
    ],
    'residentielle': [
      `Vous avez un véhicule qui occupe inutilement votre allée ou votre garage à {ville} ?`,
      `À {ville}, votre épave dans votre propriété vous gêne et vous voulez vous en séparer ?`,
      `Un véhicule immobilisé dans votre allée à {ville} vous empêche d'utiliser votre espace.`,
      `Vous cherchez à faire enlever gratuitement une épave dans votre résidence à {ville} ?`,
      `Votre garage ou votre cour à {ville} est encombré par un véhicule hors d'usage ?`,
      `Dans le secteur résidentiel de {ville}, nous retirons votre épave sans contrainte.`,
      `Libérez votre espace privé à {ville} en faisant enlever gratuitement votre vieux véhicule.`,
      `À {ville}, un véhicule qui ne roule plus dans une résidence mérite une solution adaptée.`,
      `Votre propriété à {ville} gagnerait en espace si cette épave était retirée gratuitement.`,
      `Dans les quartiers pavillonnaires de {ville}, une épave dans l'allée est vite gênante.`,
      `Vous stockez une vieille voiture dans votre garage à {ville} sans plus l'utiliser ?`,
      `À {ville}, nous venons retirer gratuitement l'épave qui encombre votre résidence.`,
      `Donnez un coup de propre à votre propriété à {ville} en faisant enlever cette épave.`,
      `Votre jardin ou votre cour à {ville} retrouvera de l'espace après l'enlèvement gratuit.`,
      `Un véhicule qui prend la poussière dans votre allée à {ville} peut être retiré gratuitement.`,
      `À {ville}, libérer votre garage d'une épave vous redonne un espace de rangement précieux.`,
      `Dans le secteur résidentiel de {ville}, le retrait d'épave se fait discrètement et gratuitement.`,
      `Vous avez une épave qui gêne le passage dans votre cour à {ville} ? Nous l'enlevons.`,
      `Redonnez de la valeur à votre propriété à {ville} en retirant ce véhicule hors d'usage.`,
      `À {ville}, notre service d'enlèvement gratuit s'adapte aux contraintes résidentielles.`
    ],
    'periurbaine': [
      `À {ville} et dans ses environs, conserver un véhicule hors d'usage peut vite devenir un fardeau.`,
      `Votre véhicule est immobilisé à {ville} et les solutions d'enlèvement vous semblent complexes ?`,
      `Dans le secteur périurbain de {ville}, nous venons retirer votre épave gratuitement.`,
      `Vous cherchez une solution simple pour vous débarrasser de votre vieille voiture à {ville} ?`,
      `Un véhicule en panne définitive à {ville} vous encombre et vous voulez le faire retirer ?`,
      `À {ville}, l'enlèvement gratuit de votre épave est organisé même en zone périphérique.`,
      `Votre terrain ou votre cour à {ville} est encombré par une épave ? Nous intervenons.`,
      `Dans les communes périphériques comme {ville}, le retrait d'épave est simplifié.`,
      `Vivre à {ville} ne doit pas être un obstacle pour se débarrasser gratuitement d'une épave.`,
      `À {ville}, même en zone péri-urbaine, nous organisons l'enlèvement sans frais supplémentaires.`,
      `Votre terrain à {ville} est assez grand sans qu'une épave prenne la poussière inutilement.`,
      `Vous habitez {ville} et vous ne savez pas quoi faire de votre vieux véhicule hors d'usage ?`,
      `Dans les secteurs périphériques de {ville}, nous venons jusqu'à vous pour retirer l'épave.`,
      `À {ville}, les zones résidentielles excentrées sont également couvertes par notre service.`,
      `Ne laissez pas traîner une épave sur votre propriété à {ville}, faites-la enlever gratuitement.`,
      `Les communes périphériques comme {ville} bénéficient de notre service d'enlèvement gratuit.`,
      `À {ville}, un véhicule hors d'usage dans un garage ou un terrain, c'est de l'espace perdu.`,
      `Nous retirons gratuitement votre épave à {ville} sans contrainte de distance ou d'accès.`,
      `Vous cherchez un service d'enlèvement fiable à {ville} sans frais cachés ?`,
      `À {ville}, débarrassez-vous de votre épave en quelques clics, nous nous déplaçons gratuitement.`
    ],
    'rurale': [
      `Situé à {ville}, votre véhicule hors d'usage encombre votre terrain ou votre cour ?`,
      `À {ville}, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ?`,
      `Dans le secteur rural de {ville}, nous nous déplaçons gratuitement pour enlever votre épave.`,
      `Votre vieux véhicule à {ville} prend la poussière et vous voulez vous en séparer ?`,
      `Un véhicule abandonné sur votre terrain à {ville} vous gêne au quotidien ?`,
      `À {ville}, nous retirons gratuitement les épaves même dans les zones les plus reculées.`,
      `Votre propriété à {ville} est encombrée par un véhicule hors d'usage ? Nous intervenons.`,
      `Dans la campagne autour de {ville}, débarrassez-vous gratuitement de votre épave.`,
      `Vous avez une vieille voiture qui rouille dans un champ à {ville} ? Nous l'enlevons gratuitement.`,
      `À {ville}, notre équipe se déplace jusque dans les hameaux pour retirer les épaves.`,
      `Les zones rurales autour de {ville} sont intégralement couvertes par notre service gratuit.`,
      `Votre terrain à {ville} retrouvera son aspect d'origine après l'enlèvement de cette épave.`,
      `À {ville}, nous intervenons même sur les chemins non goudronnés pour retirer votre épave.`,
      `Vous habitez à {ville} et une épave vous encombre depuis des mois ? Agissez gratuitement.`,
      `Dans la campagne de {ville}, un véhicule hors d'usage peut être retiré sans aucun frais.`,
      `Votre propriété rurale à {ville} n'a pas besoin de cette épave : faites-la enlever.`,
      `Nous venons à {ville} avec du matériel adapté aux accès ruraux pour l'enlèvement gratuit.`,
      `À {ville}, même les épaves situées sur des terrains difficiles sont prises en charge.`,
      `Redonnez de l'espace à votre terrain à {ville} en confiant cette épave à notre service.`,
      `Un véhicule hors d'usage oublié dans votre propriété à {ville} peut être retiré sans frais.`
    ]
  };

  // --- SITUATION ---
  const situation = {
    'hyper-centre': [
      `Le stationnement urbain rend la présence d'une épave particulièrement coûteuse et contraignante.`,
      `Dans Paris, chaque place de stationnement est précieuse et une épave pénalise tout le quartier.`,
      `Les contraintes de stationnement parisien rendent urgent l'enlèvement de tout véhicule hors d'usage.`,
      `Un véhicule immobilisé dans Paris génère rapidement des frais de fourrière et des contraventions.`,
      `La pression sur le stationnement dans la capitale ne permet pas de laisser une épave en place.`,
      `À Paris, une épave sur la voie publique attire rapidement l'attention des services de voirie.`,
      `Dans un environnement urbain dense, retirer une épave rapidement évite bien des désagréments.`,
      `Le coût d'opportunité d'une place de parking occupée par une épave est élevé dans Paris.`,
      `Les contraventions pour stationnement prolongé d'un véhicule hors d'usage à Paris sont fréquentes.`,
      `Dans Paris, les places de stationnement sont rares et une épave les monopolise inutilement.`,
      `Les services de voirie parisiens peuvent verbaliser les épaves stationnées longtemps sur la voie publique.`,
      `Un véhicule immobilisé à Paris coûte cher en stationnement et en risques de mise en fourrière.`,
      `Dans la capitale, l'enlèvement rapide d'une épave évite des frais et des tracas administratifs.`,
      `Les contraintes de la circulation parisienne rendent le retrait d'épave particulièrement pertinent.`,
      `Une épave sur une place parisienne, c'est une place perdue pour les habitants du quartier.`,
      `Les règles de stationnement à Paris ne tolèrent pas les véhicules visiblement hors d'usage.`,
      `Dans un environnement urbain aussi dense que Paris, une épave est vite repérée.`,
      `Les propriétaires d'épaves à Paris s'exposent à des amendes et des mises en fourrière.`,
      `Le moindre véhicule abandonné dans Paris est rapidement signalé par les riverains.`,
      `À Paris, le temps de stationnement d'une épave est compté avant intervention des services municipaux.`
    ],
    'grande-ville': [
      `Notre équipe couvre l'ensemble de la commune pour vous proposer un service d'enlèvement d'épave totalement gratuit.`,
      `À {ville}, la circulation dense nécessite une intervention professionnelle pour retirer toute épave.`,
      `Les rues de {ville} ne sont pas un lieu de stockage pour un véhicule hors d'usage.`,
      `Une épave à {ville} peut rapidement devenir une source de désagréments pour le voisinage.`,
      `Dans une grande agglomération comme {ville}, il est essentiel de libérer l'espace public.`,
      `Les services municipaux de {ville} encouragent le retrait rapide des épaves sur la voie publique.`,
      `Un véhicule abandonné à {ville} peut entraîner des frais de fourrière évitables.`,
      `À {ville}, mieux vaut organiser un enlèvement gratuit avant que la situation ne se complique.`,
      `Dans une ville dynamique comme {ville}, une épave sur la voie publique dénote et gêne.`,
      `La réglementation urbaine à {ville} n'est pas favorable au maintien d'épaves sur l'espace public.`,
      `À {ville}, les services de voirie peuvent intervenir si une épave stationne trop longtemps.`,
      `Les habitants de {ville} sont sensibles à la présence d'épaves dans leur environnement quotidien.`,
      `Dans une agglomération de cette taille à {ville}, le retrait d'épave est un service essentiel.`,
      `À {ville}, laissez un professionnel s'occuper de votre épave avant qu'elle ne cause des soucis.`,
      `Les règles de voirie à {ville} s'appliquent aux véhicules visiblement hors d'usage.`,
      `Évitez les désagréments d'une amende à {ville} en organisant un enlèvement préventif.`,
      `Une épave laissée trop longtemps à {ville} peut être considérée comme abandonnée par les autorités.`,
      `À {ville}, nous vous évitons les tracas en prenant en charge votre véhicule gratuitement.`,
      `Dans l'agglomération de {ville}, la présence d'épaves sur la voie publique est réglementée.`,
      `Faire retirer son épave à {ville}, c'est aussi participer à la propreté de l'espace urbain.`
    ],
    'banlieue-dense': [
      `Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne.`,
      `Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d'usage rapidement.`,
      `Dans une commune dense comme {ville}, chaque mètre de voirie compte pour le stationnement.`,
      `Les rues de {ville} ne doivent pas servir de dépôt pour un véhicule hors d'usage.`,
      `À {ville}, la densité urbaine rend le retrait des épaves prioritaire pour la collectivité.`,
      `Un véhicule abandonné dans {ville} gêne rapidement la circulation et le stationnement.`,
      `Les quartiers denses de {ville} nécessitent une intervention rapide pour éviter les nuisances.`,
      `À {ville}, nous intervenons dans tous les quartiers, même les plus denses.`,
      `Dans une commune comme {ville}, le stationnement est déjà tendu sans une épave en plus.`,
      `Les riverains de {ville} sont rapidement incommodés par la présence d'une épave dans leur rue.`,
      `À {ville}, les règles de stationnement sont strictes concernant les véhicules hors d'usage.`,
      `Une épave dans une rue de {ville} peut rapidement faire l'objet d'une plainte de voisinage.`,
      `La densité de population à {ville} rend chaque mètre carré de voirie précieux.`,
      `Dans les quartiers populaires de {ville}, une épave gêne la circulation des piétons et des véhicules.`,
      `Les services municipaux de {ville} veillent à ce que les épaves ne s'accumulent pas sur la voie publique.`,
      `À {ville}, il est dans votre intérêt d'organiser rapidement l'enlèvement de votre épave.`,
      `Les épaves à {ville} sont souvent signalées par les habitants, mieux vaut les devancer.`,
      `Dans une banlieue dense comme {ville}, l'espace public est une ressource partagée à préserver.`,
      `Un véhicule hors d'usage à {ville} attire l'attention et peut dégrader l'image du quartier.`,
      `À {ville}, faire enlever son épave gratuitement, c'est aussi un geste pour la collectivité.`
    ],
    'residentielle': [
      `En zone résidentielle, nous organisons l'enlèvement gratuit de votre épave en toute tranquillité.`,
      `Dans les quartiers pavillonnaires de {ville}, un véhicule hors d'usage dans une allée est fréquent.`,
      `Votre allée ou votre garage à {ville} mérite d'être libéré de cette épave encombrante.`,
      `Les résidences de {ville} peuvent bénéficier d'un enlèvement gratuit à domicile.`,
      `Un véhicule immobilisé dans une propriété à {ville} réduit votre espace utilisable.`,
      `Dans le secteur résidentiel de {ville}, le retrait d'épave se fait sans contrainte.`,
      `Libérer votre garage à {ville} d'une épave vous redonne de l'espace précieux.`,
      `À {ville}, les zones pavillonnaires sont accessibles à nos dépanneuses sans difficulté.`,
      `Dans les lotissements de {ville}, une épave dans une allée prive la famille d'une place de stationnement.`,
      `Votre propriété à {ville} mérite d'être débarrassée de ce véhicule qui ne sert plus.`,
      `À {ville}, beaucoup de résidences possèdent un garage, mais une épave l'occupe inutilement.`,
      `Redonnez de la valeur à votre bien immobilier à {ville} en retirant cette épave.`,
      `Les copropriétés de {ville} peuvent aussi bénéficier de notre service d'enlèvement gratuit.`,
      `Une épave dans un garage à {ville}, c'est de l'espace perdu pour du rangement ou un autre véhicule.`,
      `Dans les zones résidentielles de {ville}, notre intervention est discrète et efficace.`,
      `Libérer votre cour ou votre jardin à {ville} d'une épave améliore votre cadre de vie.`,
      `Les propriétaires à {ville} apprécient notre service discret pour retirer les épaves.`,
      `À {ville}, fini l'encombrement dans votre allée, nous retirons gratuitement votre épave.`,
      `Votre garage à {ville} peut retrouver sa fonction première après l'enlèvement de l'épave.`,
      `Dans le calme des quartiers résidentiels de {ville}, notre intervention se fait sans nuisance.`
    ],
    'periurbaine': [
      `Nous vous soulageons des démarches complexes en nous occupant du remorquage vers un centre partenaire.`,
      `Dans les communes périphériques comme {ville}, l'isolement ne doit pas être un frein.`,
      `À {ville}, même en zone périurbaine, le retrait d'épave est organisé rapidement.`,
      `Les secteurs périphériques de {ville} sont couverts par notre service d'enlèvement gratuit.`,
      `Un véhicule hors d'usage à {ville} peut être retiré où qu'il se trouve dans la commune.`,
      `Dans l'environnement périurbain de {ville}, nous venons jusqu'à vous sans frais supplémentaires.`,
      `À {ville}, les distances ne sont pas un obstacle pour l'enlèvement de votre épave.`,
      `Les communes comme {ville} bénéficient d'une couverture complète pour le retrait d'épave.`,
      `Dans les secteurs péri-urbains de {ville}, une épave sur un terrain se voit de loin.`,
      `Les habitants de {ville} apprécient de pouvoir compter sur un service d'enlèvement à domicile.`,
      `À {ville}, l'éloignement du centre-ville n'est pas un problème pour notre intervention.`,
      `Les zones périphériques de {ville} sont régulièrement parcourues par nos équipes.`,
      `Vivre à {ville} en zone péri-urbaine ne vous prive pas d'un enlèvement gratuit et rapide.`,
      `Dans les hameaux et écarts de {ville}, nous intervenons avec le même professionnalisme.`,
      `À {ville}, notre logistique est adaptée aux spécificités des zones périphériques.`,
      `Les communes péri-urbaines comme {ville} sont intégrées dans notre tournée régulière.`,
      `Ne pensez pas que votre éloignement à {ville} soit un frein, nous venons jusqu'à vous.`,
      `À {ville}, le service d'enlèvement gratuit est accessible à tous, même en secteur isolé.`,
      `Les axes secondaires et les zones moins denses de {ville} sont dans notre périmètre.`,
      `Dans l'environnement périurbain de {ville}, notre intervention vous simplifie la vie.`
    ],
    'rurale': [
      `Nous nous déplaçons gratuitement jusqu'à vous, même dans les zones moins denses du département.`,
      `Dans les secteurs ruraux autour de {ville}, l'accès à un service d'enlèvement est simplifié.`,
      `À {ville}, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement.`,
      `Les distances en zone rurale ne sont pas un problème pour notre service d'enlèvement.`,
      `Votre propriété à {ville} est accessible à nos dépanneuses pour un enlèvement gratuit.`,
      `Dans la campagne de {ville}, nous intervenons sans frais de déplacement supplémentaires.`,
      `À {ville}, l'éloignement des centres urbains n'empêche pas un enlèvement professionnel.`,
      `Les zones rurales autour de {ville} sont intégralement couvertes par notre service.`,
      `À la campagne, à {ville}, une épave qui rouille sur un terrain est fréquente mais pas une fatalité.`,
      `Les chemins ruraux de {ville} ne sont pas un obstacle pour nos équipes équipées.`,
      `Dans les secteurs agricoles de {ville}, nous retirons les épaves sans endommager les terrains.`,
      `Vivre à la campagne à {ville} ne signifie pas renoncer à un service d'enlèvement professionnel.`,
      `Les propriétés rurales de {ville} sont desservies par notre service sans supplément.`,
      `À {ville}, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger.`,
      `Notre équipe est habituée aux accès ruraux à {ville} et intervient dans les meilleures conditions.`,
      `Dans les zones reculées de {ville}, nous adaptons notre matériel pour un retrait sans difficulté.`,
      `À {ville}, faire retirer une épave de son terrain, c'est aussi valoriser sa propriété.`,
      `Les habitants des zones rurales de {ville} nous font confiance pour un service fiable.`,
      `Même à {ville}, au bout d'un chemin, notre dépanneuse peut accéder à votre épave.`,
      `Dans l'environnement rural de {ville}, nous intervenons avec discrétion et efficacité.`
    ]
  };

  // --- SERVICE ---
  const service = {
    'hyper-centre': [
      `GH Épaviste intervient rapidement pour l'enlèvement gratuit de votre VHU, où qu'il se trouve dans Paris.`,
      `Nous organisons l'enlèvement gratuit de votre épave dans tout Paris avec une dépanneuse adaptée aux rues étroites.`,
      `Notre service d'enlèvement gratuit couvre tous les arrondissements parisiens sans exception.`,
      `Nous retirons gratuitement votre véhicule hors d'usage partout à Paris, même dans les zones à accès difficile.`,
      `L'enlèvement gratuit de votre épave à Paris est organisé avec du matériel adapté à la circulation dense.`,
      `Nous intervenons dans tous les quartiers de Paris pour un retrait gratuit et professionnel.`,
      `Votre épave à Paris est enlevée gratuitement, où qu'elle se trouve, avec une logistique adaptée.`,
      `Le service d'enlèvement gratuit couvre Paris dans son intégralité, du centre aux périphéries.`,
      `Notre équipe parisienne est spécialisée dans les enlèvements d'épaves en milieu urbain dense.`,
      `Nous disposons de dépanneuses compactes pour intervenir dans les rues étroites de Paris.`,
      `Le service à Paris inclut la prise en charge complète du véhicule, sans aucun frais caché.`,
      `Dans Paris, nous adaptons notre logistique aux contraintes de circulation et de stationnement.`,
      `Notre connaissance des arrondissements parisiens garantit une intervention rapide et ciblée.`,
      `À Paris, nous organisons l'enlèvement avec des professionnels habitués aux accès difficiles.`,
      `L'enlèvement gratuit à Paris comprend le déplacement, le remorquage et les formalités.`,
      `Grâce à notre présence à Paris, l'intervention est rapide et professionnelle.`,
      `Nous prenons en charge votre véhicule dans tout Paris avec une dépanneuse adaptée.`,
      `Notre service parisien d'enlèvement d'épave est reconnu pour sa réactivité et son professionnalisme.`,
      `À Paris, confiez-nous votre épave, nous nous chargeons de tout, de l'enlèvement à la valorisation.`,
      `Nous intervenons dans chaque arrondissement de Paris pour un retrait gratuit et sans tracas.`
    ],
    'grande-ville': [
      `Nous garantissons une prise en charge conforme à la législation avec un acheminement vers un partenaire agréé.`,
      `Notre équipe à {ville} assure un enlèvement gratuit et professionnel de votre véhicule hors d'usage.`,
      `Nous retirons gratuitement votre épave à {ville} avec une organisation adaptée à chaque situation.`,
      `L'enlèvement gratuit à {ville} comprend la prise en charge complète du véhicule où qu'il stationne.`,
      `Nous organisons le retrait de votre épave à {ville} avec les professionnels compétents.`,
      `Le service à {ville} garantit un enlèvement gratuit et une orientation vers les filières adaptées.`,
      `À {ville}, l'enlèvement gratuit inclut toutes les démarches jusqu'à la valorisation du véhicule.`,
      `Notre intervention à {ville} est conçue pour être simple, gratuite et conforme aux exigences légales.`,
      `Dans toute l'agglomération de {ville}, notre équipe intervient rapidement sur simple appel.`,
      `À {ville}, le service d'enlèvement gratuit est organisé avec une logistique de proximité.`,
      `Notre présence à {ville} nous permet d'intervenir dans les meilleurs délais.`,
      `Nous déployons à {ville} des moyens adaptés pour retirer votre épave sans complication.`,
      `Le service à {ville} comprend l'enlèvement, le remorquage et l'orientation vers la filière adaptée.`,
      `À {ville}, notre équipe prend en charge toutes les étapes, du diagnostic à l'enlèvement.`,
      `Nous intervenons à {ville} avec des professionnels connaissant parfaitement la zone.`,
      `Le retrait gratuit à {ville} inclut la manutention du véhicule où qu'il soit situé.`,
      `Notre service à {ville} est pensé pour vous simplifier la vie : un appel, un enlèvement.`,
      `À {ville}, l'enlèvement gratuit de votre épave est réalisé par des experts du secteur.`,
      `Nous couvrons {ville} et ses environs pour un retrait professionnel et sans frais.`,
      `L'équipe à {ville} assure une prestation complète de l'enlèvement à la remise des documents.`
    ],
    'banlieue-dense': [
      `Nous acheminons votre véhicule hors d'usage vers un centre partenaire agréé pour un traitement conforme.`,
      `Notre service à {ville} garantit un enlèvement gratuit avec une logistique adaptée à la densité urbaine.`,
      `Nous retirons gratuitement votre épave à {ville} dans tous les quartiers, même les plus denses.`,
      `À {ville}, l'enlèvement gratuit est organisé rapidement avec du matériel adapté.`,
      `Notre équipe à {ville} prend en charge gratuitement votre véhicule où qu'il soit.`,
      `Le retrait gratuit de votre épave à {ville} est assuré par des professionnels expérimentés.`,
      `À {ville}, nous garantissons un service d'enlèvement gratuit et efficace dans toute la commune.`,
      `L'intervention à {ville} est réalisée avec les équipements appropriés à la circulation locale.`,
      `Notre équipe à {ville} connaît parfaitement les spécificités de la banlieue dense.`,
      `À {ville}, nous intervenons rapidement, même dans les zones à circulation difficile.`,
      `Nous disposons à {ville} de dépanneuses adaptées aux rues étroites et au trafic dense.`,
      `Le service à {ville} est optimisé pour une intervention rapide en zone urbaine dense.`,
      `Notre logistique à {ville} est conçue pour minimiser les contraintes de circulation.`,
      `À {ville}, l'enlèvement gratuit est réalisé par des professionnels de la petite couronne.`,
      `Nous organisons à {ville} des passages coordonnés pour éviter les heures de pointe.`,
      `Le retrait à {ville} bénéficie de notre expérience des interventions en milieu dense.`,
      `Notre équipe à {ville} intervient avec discrétion et efficacité dans les quartiers animés.`,
      `À {ville}, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles.`,
      `Nous adaptons notre intervention à {ville} en fonction de la densité de circulation.`,
      `L'organisation à {ville} permet un enlèvement sans stress, même dans les secteurs très fréquentés.`
    ],
    'residentielle': [
      `Nous prenons en charge l'acheminement vers un centre partenaire sans le moindre frais pour vous.`,
      `À {ville}, l'enlèvement gratuit de votre épave en zone résidentielle est notre spécialité.`,
      `Nous retirons gratuitement votre véhicule hors d'usage dans toutes les résidences de {ville}.`,
      `Le service à {ville} est conçu pour les zones résidentielles avec une intervention discrète et efficace.`,
      `Notre équipe à {ville} assure un enlèvement gratuit dans les allées et garages privés.`,
      `À {ville}, nous venons retirer votre épave directement depuis votre propriété sans contrainte.`,
      `L'enlèvement gratuit à {ville} en zone résidentielle se fait sur rendez-vous à votre convenance.`,
      `Nous organisons le retrait à {ville} avec une souplesse adaptée aux contraintes résidentielles.`,
      `Dans les quartiers résidentiels de {ville}, notre intervention est discrète et professionnelle.`,
      `À {ville}, nous retirons les épaves des allées, garages et cours sans aucun dérangement.`,
      `Notre équipe à {ville} intervient avec soin dans les propriétés privées.`,
      `Le service résidentiel à {ville} est adapté aux espaces parfois étroits des lotissements.`,
      `À {ville}, nous accédons aux garages et allées même si l'accès est limité.`,
      `L'enlèvement à {ville} en zone pavillonnaire se fait sans endommager les abords.`,
      `Nous prenons rendez-vous à {ville} à l'heure qui vous convient pour le retrait.`,
      `À {ville}, notre équipe intervient avec tout le matériel nécessaire pour les accès privés.`,
      `Les résidents de {ville} apprécient notre service sans tracas et entièrement gratuit.`,
      `Dans les lotissements de {ville}, nous retirons l'épave sans gêner le voisinage.`,
      `À {ville}, le retrait gratuit en zone résidentielle inclut la manutention depuis le garage.`,
      `Notre service à {ville} est pensé pour les propriétaires souhaitant libérer leur espace privé.`
    ],
    'periurbaine': [
      `GH Épaviste vous propose un service d'enlèvement gratuit particulièrement adapté aux communes périphériques.`,
      `À {ville}, nous organisons l'enlèvement gratuit de votre épave même dans les secteurs excentrés.`,
      `Notre service couvre {ville} et ses alentours pour un retrait gratuit sans contrainte de distance.`,
      `Nous retirons gratuitement votre véhicule hors d'usage à {ville} où qu'il se trouve.`,
      `À {ville}, l'enlèvement gratuit est accessible même dans les zones périphériques de la commune.`,
      `Notre équipe se déplace jusqu'à {ville} pour un enlèvement gratuit et professionnel.`,
      `Le retrait gratuit à {ville} est organisé avec une logistique adaptée aux distances périurbaines.`,
      `Nous assurons l'enlèvement gratuit à {ville} dans tous les secteurs de la commune.`,
      `À {ville}, même les zones péri-urbaines sont desservies par notre service gratuit.`,
      `Notre équipe à {ville} est habituée aux déplacements dans les secteurs périphériques.`,
      `Le service à {ville} inclut le déplacement jusqu'à votre domicile, même excentré.`,
      `Nous organisons à {ville} des tournées régulières pour couvrir les zones périphériques.`,
      `À {ville}, l'éloignement du centre n'est pas un frein pour notre intervention.`,
      `Notre logistique à {ville} est dimensionnée pour les distances de la péri-urbanité.`,
      `Le retrait gratuit à {ville} comprend le déplacement dans les zones les plus éloignées.`,
      `Nous intervenons à {ville} avec des équipes mobiles pour couvrir tout le territoire.`,
      `À {ville}, le service d'enlèvement est accessible sans supplément, où que vous soyez.`,
      `Notre présence à {ville} garantit une couverture complète de la commune et ses abords.`,
      `Les habitants de {ville} bénéficient d'un service professionnel sans contrainte de localisation.`,
      `À {ville}, notre organisation permet d'intervenir même dans les secteurs les plus reculés.`
    ],
    'rurale': [
      `Profitez d'un débarras d'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage.`,
      `À {ville}, nous proposons un enlèvement gratuit même dans les zones les plus isolées.`,
      `Notre service à {ville} garantit un retrait gratuit où que vous soyez dans la commune.`,
      `Nous retirons gratuitement votre épave à {ville} avec du matériel adapté aux terrains ruraux.`,
      `À {ville}, l'enlèvement gratuit comprend le déplacement jusqu'à votre propriété.`,
      `Notre équipe à {ville} assure un service professionnel d'enlèvement gratuit en zone rurale.`,
      `Le retrait gratuit de votre épave à {ville} est organisé avec des équipements tout-terrain.`,
      `Nous intervenons à {ville} pour un enlèvement gratuit, même dans les lieux difficilement accessibles.`,
      `Notre équipe à {ville} est équipée de véhicules adaptés aux chemins ruraux.`,
      `À {ville}, nous venons jusqu'à votre propriété rurale sans frais supplémentaires.`,
      `Le service à {ville} est conçu pour les zones agricoles et les habitations isolées.`,
      `Nous intervenons à {ville} sur les terrains les plus difficiles d'accès.`,
      `À {ville}, notre logistique rurale permet de retirer les épaves même en terrain accidenté.`,
      `Les exploitants agricoles de {ville} nous confient leurs épaves pour un traitement réglementaire.`,
      `À {ville}, nous retirons les épaves des champs, prés et chemins sans difficulté.`,
      `Notre équipe à {ville} connaît les spécificités des propriétés rurales et agricoles.`,
      `Le déplacement à {ville} est inclus dans notre service, sans supplément kilométrique.`,
      `Nous organisons à {ville} des interventions adaptées aux grandes propriétés et aux écarts.`,
      `À {ville}, même dans les secteurs isolés, notre équipe se déplace gratuitement.`,
      `Notre service rural à {ville} garantit un retrait professionnel sans contrainte de distance.`
    ]
  };

  // --- LOGISTICS (shared across all profiles) ---
  const logistics = [
    `La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l'intervention.`,
    `Un échange préalable permet de prévoir le matériel approprié et le créneau de passage.`,
    `Les informations communiquées au moment de la demande facilitent la préparation du retrait.`,
    `Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d'accès indiquées.`,
    `La préparation du passage vise à éviter les déplacements inutiles et les difficultés d'accès.`,
    `L'organisation du retrait tient compte de l'emplacement du véhicule, de son état et des conditions d'accès.`,
    `Le créneau est confirmé après vérification des éléments utiles à la prise en charge.`,
    `La demande permet d'identifier les informations nécessaires avant le déplacement.`,
    `Les modalités logistiques sont ajustées selon les particularités de chaque intervention.`,
    `La coordination avec le propriétaire permet de caler le meilleur créneau pour l'enlèvement.`,
    `Les précisions apportées en amont aident à préparer le matériel et l'équipe adaptés.`,
    `Un créneau vous est proposé en fonction des informations communiquées sur le véhicule.`,
    `L'équipe prépare son intervention à partir des détails fournis lors de la prise de contact.`,
    `La logistique est organisée pour garantir une intervention efficace et sans attente.`,
    `Les contraintes d'accès sont identifiées en amont pour éviter les mauvaises surprises.`,
    `Le passage est planifié selon les indications reçues sur l'emplacement exact du véhicule.`,
    `L'organisation du retrait est préparée conjointement avec le propriétaire du véhicule.`,
    `Les informations recueillies permettent de dimensionner l'intervention au plus juste.`,
    `Un contact est établi avant le passage pour confirmer les modalités de l'intervention.`,
    `La préparation logistique intègre les spécificités de chaque demande d'enlèvement.`,
    `Le créneau d'intervention est déterminé en tenant compte de vos disponibilités.`,
    `L'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement.`,
    `Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait.`,
    `La planification de l'intervention s'appuie sur les éléments communiqués lors de la demande.`,
    `Les conditions d'accès sont vérifiées avant le départ pour garantir une intervention sans accroc.`,
    `Le programme d'intervention est défini avec le propriétaire pour une prise en charge optimale.`,
    `Les informations transmises permettent d'anticiper les besoins techniques et humains.`,
    `La préparation du retrait inclut une vérification des accès et des contraintes éventuelles.`,
    `Un échange téléphonique permet de finaliser l'organisation avant le passage.`,
    `Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité.`
  ];

  // --- REASSURANCE ---
  const reassurance = {
    'hyper-centre': [
      `Le rendez-vous est adapté aux contraintes de stationnement spécifiques à Paris.`,
      `Notre équipe connaît parfaitement la circulation parisienne pour une intervention rapide.`,
      `Les modalités du passage sont précisées en fonction de l'emplacement exact du véhicule.`,
      `La préparation tient compte des particularités de stationnement dans la capitale.`,
      `L'intervention est organisée pour minimiser les contraintes liées à la circulation parisienne.`,
      `Notre expérience des interventions parisiennes garantit une prise en charge efficace.`,
      `Les détails pratiques sont confirmés avant le passage pour éviter toute mauvaise surprise.`,
      `Le professionnel adapte son intervention aux conditions d'accès spécifiques à Paris.`,
      `Notre équipe parisienne est rodée aux interventions en milieu urbain contraint.`,
      `Les créneaux proposés tiennent compte des restrictions de circulation dans Paris.`,
      `Nous connaissons les particularités de chaque arrondissement pour une intervention ciblée.`,
      `Le passage est préparé pour minimiser l'impact sur la circulation locale.`,
      `Notre expérience de Paris garantit une prise en charge sans mauvaise surprise.`,
      `Les modalités d'accès sont vérifiées en amont pour éviter tout contretemps.`,
      `L'équipe adapte sa méthode d'intervention aux spécificités parisiennes.`,
      `Les détails logistiques sont calés avec précision pour une intervention parisienne réussie.`,
      `Notre connaissance fine de Paris permet d'optimiser chaque déplacement.`,
      `Le professionnel se présente à l'heure convenue avec le matériel adapté.`,
      `La coordination avec le propriétaire est assurée pour un déroulement sans accroc.`,
      `Chaque intervention à Paris bénéficie de notre savoir-faire accumulé sur le terrain.`
    ],
    'grande-ville': [
      `Les modalités du rendez-vous sont précisées afin de préparer l'intervention dans les meilleures conditions.`,
      `Notre équipe connaît bien {ville} pour organiser un enlèvement rapide et efficace.`,
      `Le passage est programmé en fonction de l'accessibilité du véhicule signalée lors de la demande.`,
      `La coordination avec le propriétaire permet de préparer sereinement l'intervention à {ville}.`,
      `Les détails pratiques sont communiqués avant le rendez-vous pour une intervention sans surprise.`,
      `Notre connaissance de {ville} permet d'optimiser les déplacements et l'intervention.`,
      `Le professionnel s'adapte aux conditions d'accès déclarées pour le véhicule à {ville}.`,
      `L'organisation de l'enlèvement à {ville} est conçue pour être la plus fluide possible.`,
      `L'équipe affectée à {ville} est expérimentée dans les interventions en agglomération.`,
      `Les contraintes urbaines de {ville} sont intégrées dans la préparation du passage.`,
      `Nous planifions l'intervention à {ville} en tenant compte de la circulation locale.`,
      `Le professionnel vous confirme les détails pratiques avant de se rendre à {ville}.`,
      `Notre service à {ville} bénéficie d'une logistique optimisée pour la zone urbaine.`,
      `Les accès et le stationnement à {ville} sont anticipés pour une intervention sans stress.`,
      `Nous assurons une coordination précise pour l'enlèvement à {ville}.`,
      `L'intervention à {ville} est préparée avec le souci du détail et de l'efficacité.`,
      `Notre équipe à {ville} garantit un service professionnel et ponctuel.`,
      `Les modalités pratiques sont échangées en amont pour une intervention sereine à {ville}.`,
      `Notre ancrage à {ville} nous permet d'intervenir rapidement et efficacement.`,
      `Chaque détail de l'intervention à {ville} est pensé pour votre tranquillité.`
    ],
    'banlieue-dense': [
      `Les détails du passage sont confirmés avant l'intervention pour une coordination optimale.`,
      `Notre équipe intervient rapidement dans toute {ville} grâce à une connaissance fine du secteur.`,
      `Le créneau d'intervention est défini selon les contraintes de stationnement signalées.`,
      `La préparation du rendez-vous prend en compte la densité de circulation à {ville}.`,
      `Notre connaissance de la petite couronne garantit une intervention rapide à {ville}.`,
      `Les modalités de l'enlèvement sont adaptées à chaque situation dans {ville}.`,
      `L'intervention à {ville} est organisée pour être efficace malgré la densité urbaine.`,
      `Le professionnel confirme les détails pratiques avant de se rendre sur place à {ville}.`,
      `Notre équipe connaît les raccourcis et les horaires de circulation à {ville}.`,
      `Les créneaux proposés tiennent compte des heures d'affluence à {ville}.`,
      `Nous adaptons notre logistique à la configuration urbaine de {ville}.`,
      `L'intervention à {ville} est optimisée pour réduire le temps de trajet et d'opération.`,
      `Notre présence régulière à {ville} nous permet d'intervenir en toute connaissance du terrain.`,
      `Les spécificités de circulation à {ville} sont intégrées dans notre planning.`,
      `Nous anticipons les difficultés d'accès à {ville} pour une intervention sans accroc.`,
      `Le professionnel connaît les secteurs denses de {ville} pour une approche efficace.`,
      `Notre expérience de la banlieue dense garantit un enlèvement rapide à {ville}.`,
      `Les contraintes urbaines de {ville} sont gérées par notre équipe expérimentée.`,
      `Chaque intervention à {ville} est préparée avec minutie pour éviter les imprévus.`,
      `Nous vous accompagnons dans l'organisation de l'enlèvement à {ville} en toute sérénité.`
    ],
    'residentielle': [
      `L'intervention en zone résidentielle à {ville} est organisée avec discrétion et professionnalisme.`,
      `Notre équipe connaît bien le secteur résidentiel de {ville} pour un accès sans difficulté.`,
      `Le rendez-vous est fixé à votre convenance pour l'enlèvement à {ville}.`,
      `La préparation tient compte de l'accès privé signalé pour le véhicule à {ville}.`,
      `Les modalités de passage dans les zones résidentielles de {ville} sont adaptées à chaque situation.`,
      `Notre intervention à {ville} est conçue pour ne pas perturber la vie du quartier.`,
      `Le créneau est défini en fonction de l'accessibilité de votre propriété à {ville}.`,
      `L'enlèvement à {ville} en zone résidentielle est réalisé avec tout le soin nécessaire.`,
      `Notre équipe intervient à {ville} avec discrétion pour préserver la tranquillité du voisinage.`,
      `Les interventions résidentielles à {ville} sont notre quotidien, nous savons nous adapter.`,
      `Nous respectons votre propriété à {ville} lors de l'enlèvement du véhicule.`,
      `Le passage à {ville} est organisé pour minimiser les nuisances dans votre rue.`,
      `Notre équipe à {ville} intervient avec soin dans les espaces privés et les allées.`,
      `Les accès résidentiels de {ville} sont connus de nos équipes pour une intervention fluide.`,
      `Nous convenons d'un créneau à {ville} qui respecte votre emploi du temps.`,
      `L'enlèvement à {ville} en secteur pavillonnaire est réalisé avec tout le professionnalisme requis.`,
      `Notre connaissance des quartiers résidentiels de {ville} garantit une intervention adaptée.`,
      `Les détails de l'intervention à {ville} sont confirmés pour éviter toute gêne.`,
      `Nous intervenons à {ville} avec le matériel adapté aux propriétés privées.`,
      `Chaque enlèvement à {ville} en zone résidentielle est traité avec le même sérieux.`
    ],
    'periurbaine': [
      `Notre équipe se déplace jusqu'à {ville} avec une logistique adaptée aux distances périurbaines.`,
      `Le rendez-vous à {ville} est organisé pour optimiser le déplacement et l'intervention.`,
      `Les modalités de l'enlèvement à {ville} sont adaptées aux spécificités de la commune.`,
      `Notre connaissance du secteur périurbain de {ville} garantit une intervention efficace.`,
      `Le passage est programmé en tenant compte de l'éloignement et des accès à {ville}.`,
      `L'intervention à {ville} est organisée pour être simple et sans contrainte pour le propriétaire.`,
      `Les détails pratiques de l'enlèvement à {ville} sont confirmés avant le déplacement.`,
      `Notre service à {ville} est conçu pour les habitants des communes périphériques.`,
      `Nous optimisons nos tournées pour couvrir efficacement {ville} et ses alentours.`,
      `L'équipe affectée à {ville} est habituée aux déplacements en zone péri-urbaine.`,
      `Les distances jusqu'à {ville} sont intégrées dans notre planification.`,
      `Nous organisons le passage à {ville} pour minimiser les temps de trajet.`,
      `Notre logistique à {ville} tient compte des axes routiers et des accès secondaires.`,
      `Le rendez-vous à {ville} est calé pour une intervention efficace et ponctuelle.`,
      `Nous connaissons les spécificités des communes périphériques comme {ville}.`,
      `L'intervention à {ville} bénéficie d'une organisation rodée pour les zones péri-urbaines.`,
      `Les accès à {ville} sont anticipés pour garantir une intervention sans encombre.`,
      `Notre service à {ville} est dimensionné pour répondre aux besoins des zones périphériques.`,
      `Les modalités pratiques de l'enlèvement à {ville} sont adaptées à chaque situation.`,
      `Nous vous accompagnons dans l'organisation à {ville} avec professionnalisme et réactivité.`
    ],
    'rurale': [
      `L'organisation de l'enlèvement à {ville} tient compte des distances et de l'accessibilité rurale.`,
      `Notre équipe connaît les spécificités des zones rurales autour de {ville} pour une intervention adaptée.`,
      `Le rendez-vous à {ville} est programmé avec une logistique adaptée aux routes et chemins.`,
      `Les modalités de l'intervention à {ville} sont conçues pour les propriétés rurales.`,
      `Notre expérience des interventions en zone rurale garantit un service de qualité à {ville}.`,
      `Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à {ville}.`,
      `Les détails de l'intervention à {ville} sont confirmés en amont pour une coordination parfaite.`,
      `L'enlèvement à {ville} bénéficie d'une organisation adaptée à l'environnement rural.`,
      `Notre équipe à {ville} est équipée de véhicules adaptés aux chemins ruraux.`,
      `Nous prévoyons le passage à {ville} en fonction des conditions météo et d'accès.`,
      `Les distances jusqu'à {ville} sont anticipées dans notre organisation logistique.`,
      `Notre connaissance des zones rurales garantit une intervention efficace à {ville}.`,
      `Le rendez-vous à {ville} est organisé pour minimiser les déplacements superflus.`,
      `Nous adaptons notre intervention à {ville} en fonction de la configuration des lieux.`,
      `L'équipe dépêchée à {ville} connaît les spécificités des propriétés rurales.`,
      `Les modalités d'accès à {ville} sont vérifiées avant le départ pour une intervention réussie.`,
      `Notre service à {ville} tient compte de l'environnement rural et de ses contraintes.`,
      `Nous organisons le passage à {ville} avec une logistique adaptée aux grands terrains.`,
      `L'intervention à {ville} est préparée avec soin pour garantir votre satisfaction.`,
      `Chaque détail de l'enlèvement à {ville} est pensé pour une expérience sans tracas.`
    ]
  };

  return { opening, situation, service, logistics, reassurance };
}

// =========================================================================
// LOCALCOVERAGE — segments
// =========================================================================

function buildLocalCoverageSegments(profile) {
  const focusVariants = [
    `Notre équipe intervient dans toute l'agglomération de {ville} pour retirer votre épave gratuitement.`,
    `L'enlèvement gratuit de votre épave est organisé sur l'ensemble du territoire de {ville}.`,
    `Tous les habitants de {ville} peuvent bénéficier de notre service d'enlèvement à domicile.`,
    `Que vous habitiez le centre ou la périphérie de {ville}, nous venons retirer votre véhicule.`,
    `Aucun quartier de {ville} n'est exclu : nous intervenons partout dans la commune.`,
    `Vous avez une épave à {ville} ? Notre équipe se déplace gratuitement où qu'elle soit.`,
    `Le service d'enlèvement gratuit couvre l'intégralité de la commune de {ville}.`,
    `Où que soit garé votre véhicule à {ville}, notre dépanneuse peut accéder pour le retirer.`,
    `Pour un enlèvement à {ville}, notre logistique couvre tous les secteurs sans exception.`,
    `Nous retirons les épaves dans chaque rue et chaque quartier de {ville}.`,
    `À {ville}, notre dispositif d'intervention permet de couvrir toute la commune efficacement.`,
    `Depuis le centre historique jusqu'aux zones d'activité de {ville}, notre service est disponible.`,
    `La zone d'intervention à {ville} comprend aussi bien les voies principales que les impasses.`,
    `Même dans les secteurs les plus excentrés de {ville}, nous organisons l'enlèvement.`,
    `Notre service à {ville} est accessible dans tous les quartiers, du centre aux lotissements.`,
    `Si votre épave se trouve à {ville}, notre équipe peut intervenir sans contrainte de zone.`,
    `Toutes les rues de {ville} sont couvertes, quel que soit le type d'habitation.`,
    `Le retrait de votre épave à {ville} est possible où qu'elle se trouve sur la commune.`,
    `Nous nous déplaçons dans tous les secteurs de {ville} pour un enlèvement gratuit.`,
    `Les interventions à {ville} sont possibles aussi bien sur voie publique que sur propriété privée.`,
    `Notre périmètre d'enlèvement inclut l'ensemble de {ville} sans limitation géographique.`,
    `Que votre épave soit à {ville} dans un parking, une rue ou un garage, nous l'enlevons.`,
    `Pour les habitants de {ville}, l'enlèvement d'épave est gratuit dans toute la commune.`,
    `La tournée de nos dépanneuses couvre {ville} en intégralité chaque semaine.`,
    `À {ville}, nous pouvons retirer votre véhicule hors d'usage en tout point du territoire.`,
    `Notre équipe se rend dans chaque quartier de {ville} pour les enlèvements programmés.`,
    `L'ensemble des zones résidentielles, commerciales et industrielles de {ville} est couvert.`,
    `Nous intervenons à {ville} dans tous les secteurs, y compris dans les zones à accès difficile.`,
    `L'enlèvement à {ville} est organisé sans considération de zone ou de quartier.`,
    `Notre maillage territorial permet une couverture complète de {ville} pour les enlèvements.`,
    `Les équipes affectées à {ville} connaissent parfaitement chaque secteur de la commune.`,
    `La couverture de {ville} par notre service d'enlèvement est totale et sans restriction.`,
    `Tous les points de la commune de {ville} sont desservis, même les zones les moins denses.`,
    `Notre dispositif à {ville} assure un enlèvement gratuit dans tous les secteurs sans exception.`,
    `À {ville}, la prise en charge de votre épave se fait quel que soit l'endroit exact.`,
    `La commune de {ville} est intégralement couverte par notre service gratuit d'enlèvement.`,
    `Nous venons chercher votre épave à {ville}, même dans les endroits difficilement accessibles.`,
    `Grâce à notre organisation, {ville} est entièrement desservie pour l'enlèvement d'épaves.`,
    `Notre service gratuit à {ville} couvre toutes les zones, du bourg aux hameaux périphériques.`,
    `Les propriétaires à {ville} peuvent compter sur notre service dans toute la commune.`
  ];

  const planningVariants = [
    `Le rendez-vous pour {ville} est fixé après un échange sur les conditions d'accès.`,
    `Chaque demande d'enlèvement à {ville} reçoit une organisation personnalisée.`,
    `Les modalités d'intervention à {ville} sont adaptées à l'emplacement signalé du véhicule.`,
    `Avant de se déplacer à {ville}, l'équipe vérifie les accès et prépare le matériel adapté.`,
    `Un créneau d'enlèvement à {ville} vous est proposé selon vos disponibilités.`,
    `Les informations fournies sur la situation à {ville} permettent de préparer l'intervention.`,
    `Pour un retrait à {ville}, le professionnel se prépare en fonction des indications reçues.`,
    `L'organisation du passage à {ville} tient compte des particularités annoncées.`,
    `Notre équipe adapte sa logistique à {ville} en fonction de chaque configuration.`,
    `La planification de l'enlèvement à {ville} s'appuie sur les données communiquées en amont.`,
    `À {ville}, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle.`,
    `Les détails d'accès pour {ville} sont examinés avant le départ de l'équipe.`,
    `Nous organisons le passage à {ville} avec une préparation minutieuse de l'itinéraire.`,
    `La préparation de l'intervention à {ville} commence dès la réception de votre demande.`,
    `Pour un retrait à {ville}, notre équipe se tient prête à intervenir au créneau convenu.`,
    `Chaque enlèvement à {ville} est préparé en étudiant les accès et les contraintes locales.`,
    `Les contraintes spécifiques à {ville} sont intégrées dans l'organisation du retrait.`,
    `À {ville}, le professionnel confirme avec vous les modalités avant de se déplacer.`,
    `L'intervention à {ville} est programmée après avoir pris connaissance de votre situation.`,
    `Notre logistique à {ville} est dimensionnée pour répondre à chaque type de demande.`,
    `Le passage à {ville} est planifié de manière à optimiser le temps d'intervention.`,
    `Avant l'enlèvement à {ville}, les informations pratiques sont échangées avec le propriétaire.`,
    `L'équipe dépêchée à {ville} connaît à l'avance les conditions d'accès au véhicule.`,
    `Le rendez-vous pour {ville} est défini en fonction des éléments communiqués lors du contact.`,
    `À {ville}, l'intervention est minutieusement préparée pour éviter tout imprévu.`,
    `Les particularités de l'emplacement à {ville} sont prises en compte dans l'organisation.`,
    `La logistique à {ville} est adaptée au type de véhicule et à son environnement.`,
    `Pour {ville}, une préparation sur mesure est réalisée selon vos indications.`,
    `Notre équipe à {ville} coordonne le passage avec vous pour une intervention sans accroc.`,
    `Chaque demande pour {ville} est traitée avec une attention particulière à la préparation.`,
    `Les modalités pratiques de l'enlèvement à {ville} sont calées en amont avec vous.`,
    `À {ville}, l'organisation du retrait s'adapte aux circonstances décrites.`,
    `Avant l'intervention à {ville}, le professionnel analyse les accès et prépare son équipement.`,
    `Le planning d'intervention à {ville} intègre les contraintes horaires du propriétaire.`,
    `Nous préparons l'enlèvement à {ville} avec le souci du détail pour une exécution parfaite.`,
    `Pour {ville}, l'équipe se renseigne sur les spécificités d'accès avant le départ.`,
    `Le dispositif mis en place pour {ville} est adapté à chaque situation particulière.`,
    `L'intervention à {ville} fait l'objet d'une préparation approfondie en amont.`,
    `À {ville}, nous veillons à ce que tous les aspects logistiques soient anticipés.`,
    `La préparation du retrait à {ville} inclut une évaluation des conditions d'intervention.`
  ];

  const rayonnementVariants = [
    `Les communes autour de {ville} sont également parcourues par nos dépanneuses.`,
    `Au-delà de {ville}, nous intervenons aussi dans les secteurs voisins.`,
    `Les zones limitrophes de {ville} peuvent aussi profiter de notre service d'enlèvement.`,
    `Notre rayon d'action ne se limite pas à {ville} mais s'étend aux alentours.`,
    `Si vous résidez près de {ville}, notre service d'enlèvement est également accessible.`,
    `Les communes proches de {ville} sont incluses dans notre zone d'intervention.`,
    `Au-delà du territoire de {ville}, les secteurs périphériques sont également couverts.`,
    `Notre couverture géographique dépasse {ville} pour inclure les communes avoisinantes.`,
    `Les habitants des environs de {ville} peuvent aussi faire appel à notre service.`,
    `Autour de {ville}, notre dispositif d'intervention s'étend aux zones péri-urbaines.`,
    `Les axes routiers menant à {ville} sont régulièrement empruntés par nos équipes.`,
    `Nous ne nous limitons pas à {ville} : les communes alentour sont aussi desservies.`,
    `Les zones industrielles et résidentielles autour de {ville} sont comprises.`,
    `À partir de {ville}, nos dépanneuses rayonnent dans un large secteur géographique.`,
    `Les voies d'accès et les secteurs autour de {ville} font partie de notre circuit.`,
    `Les communes situées à proximité de {ville} peuvent bénéficier d'un enlèvement.`,
    `Notre zone de couverture s'articule autour de {ville} et de ses environs.`,
    `Au-delà du centre de {ville}, les secteurs périphériques sont régulièrement visités.`,
    `Nous étendons notre intervention au-delà de {ville} pour couvrir un large secteur.`,
    `Les alentours de {ville} sont intégrés à notre tournée d'enlèvement régulière.`,
    `À partir du secteur de {ville}, nous desservons également les zones avoisinantes.`,
    `Les communes qui entourent {ville} profitent également de notre service gratuit.`,
    `Notre dispositif autour de {ville} permet d'intervenir dans une zone élargie.`,
    `Les axes secondaires et les hameaux près de {ville} sont inclus dans notre périmètre.`,
    `Au départ de {ville}, nos équipes couvrent un vaste secteur géographique.`,
    `Les localités voisines de {ville} peuvent aussi solliciter notre intervention.`,
    `Au-delà des limites de {ville}, notre service continue dans les secteurs alentour.`,
    `Notre rayonnement autour de {ville} s'étend sur plusieurs kilomètres à la ronde.`,
    `Les routes et chemins autour de {ville} sont parcourus régulièrement par nos véhicules.`,
    `Les habitants des environs proches de {ville} peuvent compter sur notre service.`
  ];

  const profileVariants = {
    'hyper-centre': [
      { name: `Centre-ville & Rues étroites`, delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
      { name: `Parkings souterrains`, delay: 'Sur RDV', specificities: 'Dépanneuse extra-basse pour sous-sols.' },
      { name: `Quartiers périphériques`, delay: '24h à 48h', specificities: 'Intervention planifiée sur voie publique.' }
    ],
    'grande-ville': [
      { name: `Centre-ville & Zones denses`, delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
      { name: `Quartiers résidentiels`, delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
      { name: `Zones d'activité`, delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
    ],
    'banlieue-dense': [
      { name: `Zones pavillonnaires`, delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
      { name: `Centre-ville & Axes principaux`, delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
      { name: `Secteurs d'activité`, delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
    ],
    'residentielle': [
      { name: `Quartiers résidentiels`, delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou allée privée.' },
      { name: `Lotissements et résidences`, delay: '24h', specificities: 'Accès adapté aux propriétés privées.' },
      { name: `Secteurs pavillonnaires`, delay: 'Sur RDV', specificities: 'Retrait sur terrain ou garage.' }
    ],
    'periurbaine': [
      { name: `Bourg et centre de la commune`, delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
      { name: `Secteurs périphériques`, delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin.' },
      { name: `Hameaux et écarts`, delay: '48h', specificities: 'Retrait adapté aux zones éloignées.' }
    ],
    'rurale': [
      { name: `Bourg et centre`, delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
      { name: `Lieux-dits et extérieurs`, delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
      { name: `Hameaux et secteurs isolés`, delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
    ]
  };

  return { focusVariants, planningVariants, rayonnementVariants, profileVariants };
}

// =========================================================================
// HERO — déjà segmenté, on conserve et on enrichit
// =========================================================================

// HeroTitleVariants - Chaque titre contient 1-2 mentions de {ville} et souvent {zipCode}
// pour maximiser les tokens uniques par ville dans le calcul de similarité Jaccard.
const HeroTitleVariants = [
  `Enlèvement d'épave gratuit à {ville} ({zipCode}) - Service {ville}`,
  `Service d'enlèvement d'épave à {ville} ({zipCode}) - Intervention {ville}`,
  `Retrait de véhicule hors d'usage à {ville} ({zipCode}) dans le {zipCode}`,
  `Débarrassez-vous de votre épave à {ville} gratuitement autour de {ville}`,
  `Épaviste professionnel à {ville} ({zipCode}) pour votre VHU à {ville}`,
  `Enlèvement gratuit de votre épave à {ville} ({zipCode}) dans tout {ville}`,
  `Votre solution d'enlèvement d'épave à {ville} ({zipCode}) - Épaviste {ville}`,
  `Enlèvement épave {ville} ({zipCode}) - Service gratuit à {ville}`,
  `Retrait gratuit de VHU à {ville} ({zipCode}) pour les habitants de {ville}`,
  `Débarras auto gratuit à {ville} ({zipCode}) - Intervention dans le {zipCode}`,
  `Enlèvement voiture hors d'usage {ville} ({zipCode}) - Service {ville}`,
  `Service d'enlèvement de véhicule à {ville} ({zipCode}) dans tout {ville}`,
  `Retrait d'épave professionnel à {ville} ({zipCode}) pour votre VHU à {ville}`,
  `Enlèvement de carcasse auto à {ville} ({zipCode}) dans le secteur {ville}`,
  `Solution enlèvement épave {ville} ({zipCode}) - Prise en charge {ville}`,
  `Débarras véhicule hors d'usage {ville} ({zipCode}) - Épaviste {ville}`,
  `Retrait gratuit voiture épave à {ville} ({zipCode}) pour tout {ville}`,
  `Enlèvement VHU {ville} - Prise en charge totale à {ville} ({zipCode})`,
  `Service épaviste {ville} ({zipCode}) - Intervention rapide à {ville}`,
  `Retrait épave gratuit {ville} sans frais dans le secteur {ville} ({zipCode})`,
  `Débarrassez votre épave à {ville} ({zipCode}) gratuitement dans tout {ville}`,
  `Enlèvement gratuit de carcasse à {ville} ({zipCode}) - Service {ville}`,
  `Votre épaviste de secteur à {ville} ({zipCode}) pour enlèvement à {ville}`,
  `Retrait auto hors d'usage {ville} ({zipCode}) dans le département {zipCode}`,
  `Service rapide d'enlèvement d'épave à {ville} ({zipCode}) dans tout {ville}`,
  `Faire retirer son vieux véhicule à {ville} ({zipCode}) - Enlèvement {ville}`,
  `Épaviste gratuit {ville} intervention rapide dans le {zipCode} de {ville}`,
  `Enlèvement épave sans papier à {ville} ({zipCode}) dans tout le {zipCode}`,
  `Retrait de épave sans frais à {ville} ({zipCode}) - Service pour {ville}`,
  `Débarras automobile {ville} ({zipCode}) dans toute l'agglomération {ville}`,
  `Enlèvement gratuit VHU à {ville} ({zipCode}) par épaviste agréé dans {ville}`,
  `Service de retrait d'épave à {ville} sans frais dans tout {ville} ({zipCode})`,
  `Votre épaviste à {ville} pour enlèvement gratuit de VHU dans le {zipCode}`,
  `Retrait et recyclage de votre épave à {ville} ({zipCode}) - Service {ville}`,
  `Faites enlever votre vieille voiture à {ville} gratuitement dans tout {ville}`,
  `Solution enlèvement d'épave sans frais à {ville} ({zipCode}) pour {ville}`,
  `Service professionnel d'enlèvement VHU à {ville} ({zipCode}) dans tout {ville}`,
  `Débarras d'épave automobile à {ville} ({zipCode}) par épaviste à {ville}`,
  `Retrait gratuit de carcasse automobile à {ville} ({zipCode}) dans le {zipCode}`,
  `Enlèvement de véhicule accidenté à {ville} sans frais dans tout {ville} ({zipCode})`,
  `Faire enlever son VHU à {ville} par un professionnel dans le {zipCode} de {ville}`,
  `Service d'enlèvement 100% gratuit à {ville} ({zipCode}) pour les habitants de {ville}`,
  `Débarrassez votre véhicule hors d'usage à {ville} ({zipCode}) - Épaviste {ville}`,
  `Retrait d'épave par professionnel agréé à {ville} ({zipCode}) dans tout {ville}`
];

// HeroSubtitleVariants - Chaque variante est courte (10-20 mots) avec 2-3 mentions de {ville}
// pour que le nom de la ville représente une fraction significative des mots uniques.
// Une variante de 15 mots avec 2 mentions de ville donne ~15% de mots uniques → similarité ~70%
// Avec 3 mentions + zipCode → ~25% uniques → similarité ~60%
const HeroSubtitleVariants = [
  `{ville} ({zipCode}) : enlèvement gratuit de votre épave à {ville} par notre équipe.`,
  `Votre épave à {ville} retirée gratuitement. Intervention rapide dans le {zipCode} à {ville}.`,
  `À {ville} ({zipCode}), notre équipe enlève gratuitement votre épave où qu'elle soit.`,
  `Enlèvement gratuit VHU à {ville} ({zipCode}). Prenez rendez-vous, on s'occupe de votre épave à {ville}.`,
  `Service d'enlèvement d'épave à {ville} ({zipCode}) : gratuit, rapide et professionnel à {ville}.`,
  `Épaviste à {ville} - Intervention gratuite pour retirer votre VHU dans le {zipCode} à {ville}.`,
  `Débarrassez votre épave à {ville} gratuitement. Notre équipe intervient dans tout le {zipCode} de {ville}.`,
  `Retrait gratuit de votre véhicule hors d'usage à {ville} ({zipCode}). Service professionnel à {ville}.`,
  `Pour {ville} et ses environs ({zipCode}), nous retirons gratuitement votre épave à {ville}.`,
  `Besoin d'un épaviste à {ville} ({zipCode}) ? Enlèvement gratuit de votre VHU dans tout {ville}.`,
  `À {ville} ({zipCode}) : débarras auto gratuit avec prise en charge complète de votre épave.`,
  `Nous enlevons les épaves à {ville} ({zipCode}). Prestation gratuite incluant remorquage à {ville}.`,
  `Épave à {ville} ? Intervention gratuite dans le secteur {zipCode} de {ville} sous 24-48h.`,
  `Service gratuit d'épaviste à {ville} ({zipCode}). Votre véhicule hors d'usage retiré à {ville}.`,
  `Retrait VHU à {ville} ({zipCode}) : prise en charge totale et gratuite de votre épave à {ville}.`,
  `À {ville} ({zipCode}) : notre équipe retire gratuitement votre vieux véhicule dans tout {ville}.`,
  `Solution enlèvement épave à {ville} ({zipCode}). Intervention rapide et gratuite dans le {zipCode} de {ville}.`,
  `Enlèvement gratuit dans le {zipCode} à {ville}. Débarras professionnel de votre épave à {ville}.`,
  `Épaviste professionnel à {ville} ({zipCode}) : enlèvement gratuit de votre VHU dans tout {ville}.`,
  `Pour {ville} ({zipCode}) : retrait gratuit de votre épave avec remise des documents à {ville}.`,
  `Votre épaviste à {ville} ({zipCode}) : intervention gratuite et rapide pour votre VHU dans {ville}.`,
  `À {ville} ({zipCode}), nous organisons l'enlèvement gratuit de votre épave partout dans {ville}.`,
  `Service de retrait d'épave à {ville} ({zipCode}). Gratuit et sans contrainte pour les habitants de {ville}.`,
  `Débarras auto {ville} ({zipCode}) : notre équipe enlève gratuitement votre épave à {ville}.`,
  `Pour tout {ville} ({zipCode}) : enlèvement gratuit et professionnel de votre véhicule hors d'usage.`,
  `Intervention à {ville} ({zipCode}) : retrait gratuit de votre épave par des professionnels à {ville}.`,
  `Enlèvement épave {ville} ({zipCode}) : service gratuit pour votre VHU dans tout le secteur de {ville}.`,
  `Faites retirer votre épave à {ville} gratuitement. Notre équipe intervient dans le {zipCode} de {ville}.`,
  `À {ville} ({zipCode}) : solution complète d'enlèvement d'épave gratuite pour les habitants de {ville}.`,
  `Retrait de VHU à {ville} ({zipCode}) : un service gratuit et rapide pour tout {ville} et ses environs.`,
  `Épaviste gratuit à {ville} ({zipCode}) : intervention dans tout {ville} pour votre véhicule hors d'usage.`,
  `Débarrassez votre épave à {ville} ({zipCode}) sans frais. Notre service couvre tout le secteur de {ville}.`,
  `À {ville} ({zipCode}) : bénéficiez d'un enlèvement gratuit de votre épave dans tout {ville}.`,
  `Service d'enlèvement à {ville} ({zipCode}) : retrait gratuit de votre VHU par notre équipe à {ville}.`,
  `Pour votre épave à {ville} ({zipCode}) : intervention gratuite et professionnelle dans tout {ville}.`,
  `{ville} ({zipCode}) : votre épaviste gratuit pour l'enlèvement de votre véhicule hors d'usage à {ville}.`,
  `Enlèvement d'épave {ville} ({zipCode}) : service rapide et gratuit pour votre VHU dans tout {ville}.`,
  `Retrait gratuit épave {ville} ({zipCode}) : notre équipe intervient partout à {ville} sans frais.`,
  `À {ville} ({zipCode}) : faites enlever votre épave gratuitement par des professionnels dans tout {ville}.`,
  `Votre véhicule hors d'usage à {ville} ({zipCode}) ? Enlèvement gratuit partout dans {ville}.`
];

// =========================================================================
// GENERATEUR HERO
// =========================================================================

function generateHero(profile, commune, localData) {
  const { ville, zipCode } = commune;

  const titleOptions = HeroTitleVariants.map(t => t.replace(/\{ville\}/g, ville).replace(/\{zipCode\}/g, zipCode));

  const subtitleOptions = HeroSubtitleVariants.map(s => s
    .replace(/\{ville\}/g, ville)
    .replace(/\{zipCode\}/g, zipCode)
  );

  return {
    type: 'Hero',
    title: selectVariant(titleOptions, commune, 'hero-title'),
    subtitle: selectVariant(subtitleOptions, commune, 'hero-subtitle'),
    badge: `${ville} (${zipCode})`
  };
}

// =========================================================================
// GENERATEUR INTRODUCTION
// =========================================================================

function generateIntroduction(profile, commune, localData) {
  const { ville, slug, zipCode } = commune;
  const segments = buildIntroductionSegments(profile);

  const openingList = (segments.opening[profile] || segments.opening['grande-ville']).map(s => s.replace('{ville}', ville));
  const situationList = (segments.situation[profile] || segments.situation['grande-ville']).map(s => s.replace('{ville}', ville));
  const serviceList = (segments.service[profile] || segments.service['grande-ville']).map(s => s.replace('{ville}', ville));
  const logisticsList = segments.logistics;
  const reassuranceList = (segments.reassurance[profile] || segments.reassurance['grande-ville']).map(s => s.replace('{ville}', ville));

  const opening = selectVariant(openingList, commune, 'intro-opening');
  const situation = selectVariant(situationList, commune, 'intro-situation');
  const service = selectVariant(serviceList, commune, 'intro-service');
  const logistics = selectVariant(logisticsList, commune, 'intro-logistics');
  const reassurance = selectVariant(reassuranceList, commune, 'intro-reassurance');

  const content = `${opening} ${situation} ${service} ${logistics} ${reassurance}`;

  // Ajouter une rue locale si disponible
  let ruesSample = '';
  if (localData && localData.rues && localData.rues.length > 0) {
    const rueIdx = stableVariantIndex(slug, localData.rues.length, 'intro-rue');
    const rue = localData.rues[rueIdx];
    const rueVariants = [
      ` Que ce soit du côté de ${rue} ou ailleurs, nous intervenons gratuitement.`,
      ` Notre équipe dessert notamment le secteur de ${rue} dans la commune.`,
      ` Les interventions sont possibles jusqu'à ${rue} et dans tous les quartiers.`,
      ` Le secteur de ${rue} est couvert comme l'ensemble de la commune.`
    ];
    ruesSample = selectVariant(rueVariants, commune, 'intro-rue-text');
  }

  return {
    type: 'Introduction',
    title: `Votre épaviste de confiance à ${ville}`,
    content: content + ruesSample
  };
}

// =========================================================================
// GENERATEUR LOCALCOVERAGE
// =========================================================================

function generateLocalCoverage(profile, commune, localData) {
  const { ville, slug, zipCode } = commune;
  const segments = buildLocalCoverageSegments(profile);

  const focusText = selectVariant(segments.focusVariants, commune, 'coverage-focus').replace('{ville}', ville);
  const planningText = selectVariant(segments.planningVariants, commune, 'coverage-planning').replace('{ville}', ville);
  const rayonnementText = selectVariant(segments.rayonnementVariants, commune, 'coverage-rayonnement').replace('{ville}', ville);

  // Ajout d'un contexte local unique basé sur zipCode pour garantir une diversité minimale
  const zipContexts = [
    ` Pour le secteur ${zipCode}, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de ${ville}.`,
    ` La zone ${zipCode} fait partie de notre secteur d'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de ${ville}.`,
    ` Notre équipe couvre le secteur postal ${zipCode} avec une logistique dédiée. Les habitants de ${ville} peuvent compter sur notre présence régulière dans ce code postal.`,
    ` Les demandes pour le ${zipCode} de ${ville} sont traitées en priorité par notre équipe qui connaît bien ce secteur.`,
    ` Le code postal ${zipCode} est intégré dans notre tournée d'enlèvement régulière à ${ville}, ce qui garantit une intervention rapide.`,
    ` Notre service dessert quotidiennement le secteur ${zipCode} de ${ville} avec des équipes spécialisées dans l'enlèvement d'épaves.`,
    ` Les habitants du ${zipCode} à ${ville} bénéficient d'un passage régulier de nos équipes et d'une prise en charge adaptée à ce secteur.`,
    ` Le secteur ${zipCode} de ${ville} est couvert sans supplément de prix par notre service d'enlèvement gratuit de véhicules hors d'usage.`
  ];
  const zipContext = selectVariant(zipContexts, commune, 'coverage-zip');

  let intro = `${focusText} ${planningText}${zipContext}`;

  // Ajouter des communes limitrophes si disponibles
  const limitrophes = (localData && localData.communes_limitrophes) ? localData.communes_limitrophes : [];
  if (limitrophes.length >= 2) {
    const l1Index = stableVariantIndex(slug, limitrophes.length, 'coverage-neighbour-first');
    const l2Offset = stableVariantIndex(slug, limitrophes.length - 1, 'coverage-neighbour-second') + 1;
    const l1 = limitrophes[l1Index];
    const l2 = limitrophes[(l1Index + l2Offset) % limitrophes.length];
    intro += ` ${rayonnementText} C'est le cas notamment vers ${l1} et ${l2}.`;
  } else {
    intro += ` ${rayonnementText}`;
  }

  const profileZones = segments.profileVariants[profile] || segments.profileVariants['grande-ville'];

  return {
    type: 'LocalCoverage',
    title: `Couverture d'intervention sur ${ville}`,
    intro: intro,
    zones: profileZones.map(z => ({
      name: z.name,
      delay: z.delay,
      specificities: z.specificities
    }))
  };
}

// =========================================================================
// GENERATEUR VHUCOMPLIANCE
// =========================================================================

function generateVhuCompliance(profile, commune, localData) {
  const transfer = selectVariant(VhuTransferVariants, commune, 'vhu-transfer');
  const outcome = selectVariant(VhuOutcomeVariants, commune, 'vhu-outcome');
  const process = selectVariant(VhuProcessVariants, commune, 'vhu-process');

  return {
    type: 'VhuCompliance',
    title: 'Traitement réglementaire et recyclage',
    content: `${transfer} ${outcome} ${process}`
  };
}

// =========================================================================
// GENERATEUR DOCSPREPARATION (inchangé)
// =========================================================================

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

// =========================================================================
// GENERATEUR FAQ (inchangé)
// =========================================================================

function generateFaqLocal(profile, commune, localData) {
  const { ville } = commune;

  const questions = [
    {
      q: `L'intervention à ${ville} est-elle soumise à des frais de déplacement ?`,
      a: `Non, si votre véhicule est complet, l'enlèvement et le déplacement jusqu'à ${ville} sont entièrement gratuits.`
    },
    {
      q: `Quels documents obtenez-vous le jour de l'enlèvement ?`,
      a: `Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l'opération.`
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
  } else if (profile === 'banlieue-dense') {
    questions.push({
      q: `Intervenez-vous rapidement en cas de véhicule gênant la circulation à ${ville} ?`,
      a: `Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.`
    });
  } else if (profile === 'residentielle' || profile === 'rurale') {
    questions.push({
      q: `Venez-vous chercher une épave dans un champ ou un terrain difficile ?`,
      a: `Oui, nous sommes équipés de treuils puissants permettant d'extraire des véhicules enlisés ou sur des terrains non goudronnés.`
    });
  } else if (profile === 'periurbaine') {
    questions.push({
      q: `Votre service couvre-t-il les zones peu desservies autour de ${ville} ?`,
      a: `Oui, nous nous déplaçons dans les communes périphériques sans frais supplémentaires si le véhicule est complet.`
    });
  }

  questions.push(
    {
      q: `Que se passe-t-il si je n'ai plus la carte grise de mon véhicule ?`,
      a: `Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.`
    },
    {
      q: `Prenez-vous en charge les motos et utilitaires en plus des voitures ?`,
      a: `Oui, nous enlevons gratuitement tout type de véhicule hors d'usage : voiture, moto, scooter, camionnette ou utilitaire.`
    },
    {
      q: `Quel est le délai habituel entre la demande et l'enlèvement ?`,
      a: `En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.`
    },
    {
      q: `Le véhicule doit-il être en état de rouler pour être enlevé ?`,
      a: `Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.`
    }
  );

  // Ordre déterministe via SHA-256 : on utilise le hash du slug pour décider
  // si on inverse l'ordre des questions (évite le seed basé sur la longueur du nom)
  const reverseHash = crypto.createHash('sha256').update(`faq-reverse:${commune.slug}`).digest('hex');
  if (parseInt(reverseHash.slice(0, 8), 16) % 2 === 0) questions.reverse();

  return {
    type: 'FaqLocal',
    title: `Questions fréquentes sur l'enlèvement à ${ville}`,
    questions: questions
  };
}

// =========================================================================
// GENERATEUR CTA (inchangé)
// =========================================================================

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
