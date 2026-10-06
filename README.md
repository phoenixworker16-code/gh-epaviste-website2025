# CHAPITRE 1 — PROJECT OVERVIEW & READING ORDER

## 1.1 — Bienvenue

Bienvenue dans le projet **GH Épaviste**.

Ce dépôt contient le site officiel et l'ensemble des ressources nécessaires à sa conception, son développement, sa maintenance, sa validation et son évolution.

GH Épaviste est un service professionnel d'enlèvement d'épaves intervenant en Île-de-France.

Le projet est conçu avec une approche priorisant :

- la qualité technique ;
- la sécurité ;
- l'expérience utilisateur ;
- l'accessibilité ;
- la performance ;
- le référencement naturel ;
- la maintenabilité ;
- la conformité des contenus et des informations publiées.

## 1.2 — Objectif

Ce README constitue le point d’entrée principal du projet GH Épaviste.

Il présente :

la vision du projet ;
les principes d’architecture et de qualité ;
les règles générales de développement ;
le workflow IA ;
les références vers les documents spécialisés.

Les règles détaillées et procédures techniques restent dans leurs fichiers de référence.

## 1.3 — Ordre de lecture obligatoire

Avant toute modification importante, l’IA doit consulter les documents pertinents dans cet ordre général :

AI_RULES.md
CURRENT_TASK.md
PROJECT_CONTEXT.md
HANDOVER.md
DECISIONS.md
WORKFLOW.md
V4_REFERENCE.md
les documents spécialisés concernés dans /docs

Le contexte réel du projet et les instructions obligatoires priment toujours sur les explications générales du README.

## 1.4 — Hiérarchie des règles

En cas de conflit :

AI_RULES.md → DECISIONS.md → CURRENT_TASK.md → WORKFLOW.md → documentation spécialisée → README.md

Le README ne doit pas remplacer les règles obligatoires de AI_RULES.md.

## 1.5 — Utilisation du README

Le README sert principalement à comprendre :

le projet ;
son organisation ;
ses objectifs ;
ses standards ;
son workflow général ;
les documents de référence.

Il ne doit pas recopier intégralement les procédures présentes dans les fichiers spécialisés.

## 1.6 — Règle de continuité

Toute IA intervenant sur le projet doit :

lire les documents nécessaires avant d'agir ;
respecter les règles existantes ;
vérifier les changements réels ;
produire les preuves demandées ;
conserver la cohérence avec les références officielles.

En cas de doute, conflit ou information insuffisante : STOP et demander une clarification.

# CHAPITRE 2 — IDENTITÉ, VISION & POSITIONNEMENT

## 2.1 — IDENTITÉ DU PROJET

Le projet officiel est :

**GH Épaviste**

Site officiel :

`https://gh-epaviste.fr`

Activité principale :

**Service professionnel d’enlèvement d’épaves en Île-de-France.**

GH Épaviste doit être présenté comme une entreprise spécialisée dans l’enlèvement et la prise en charge des véhicules hors d’usage selon le circuit applicable.

Le positionnement public doit rester clair, professionnel, transparent et conforme à la situation réelle de l’entreprise.

---

## 2.2 — VISION

L’objectif du projet est de construire un site :

* professionnel ;
* rapide ;
* accessible ;
* mobile-first ;
* fiable ;
* rassurant ;
* performant ;
* optimisé pour le référencement local ;
* techniquement maintenable ;
* conforme aux contraintes légales et métier ;
* durable dans le temps.

Chaque évolution doit améliorer simultanément, lorsque cela est pertinent :

* l’expérience utilisateur ;
* la conversion ;
* la confiance ;
* le référencement ;
* l’accessibilité ;
* les performances ;
* la qualité technique.

Aucune optimisation SEO ne doit dégrader la clarté ou la confiance de l’utilisateur.

---

## 2.3 — POSITIONNEMENT LÉGAL ET VHU

### Statut à respecter

**GH Épaviste n’est pas présenté comme un centre VHU agréé.**

GH Épaviste est une entreprise d’enlèvement d’épaves et ne doit pas laisser entendre qu’elle possède elle-même un agrément VHU ou qu’elle exploite son propre centre VHU.

Les véhicules sont orientés ou confiés au circuit de traitement approprié avec les partenaires et professionnels disposant des habilitations nécessaires.

### Formulations autorisées

Exemples de formulations compatibles avec le positionnement :

* « Service professionnel d’enlèvement d’épaves »
* « Intervention rapide en Île-de-France »
* « Prise en charge conforme à la réglementation »
* « Recyclage via les filières spécialisées »
* « Véhicule orienté vers les filières et partenaires spécialisés »

Toute formulation doit rester factuelle et correspondre à la réalité opérationnelle.

### Formulations interdites

Le site ne doit jamais présenter GH Épaviste comme :

* « GH Épaviste Agréé »
* « Agréé VHU »
* « Épaviste agréé VHU »
* « Centre VHU »
* « Centre agréé »
* « Notre centre »
* « Notre casse »
* « Dépollution VHU »
* « Destruction VHU »
* « Certificat de destruction »
* « Nous sommes agréés »
* « Notre agrément »

Ces formulations sont également interdites sous des variantes ou reformulations ayant la même signification.

### Règle fondamentale

**Ne jamais attribuer à GH Épaviste un agrément, une activité réglementée ou une infrastructure qui appartient à un partenaire ou à un autre acteur de la filière.**

Toute information réglementaire doit être formulée avec précision et, lorsqu’elle concerne un partenaire, être clairement attribuée à cet acteur.

---

## 2.4 — POSITIONNEMENT COMMERCIAL

Le site doit mettre en avant les bénéfices réels du service :

* enlèvement d’épaves ;
* intervention en Île-de-France ;
* simplicité de la demande ;
* accompagnement du client ;
* rapidité d’intervention lorsque disponible ;
* informations administratives utiles ;
* orientation vers les filières spécialisées.

Le discours commercial doit rester :

**clair → honnête → rassurant → professionnel → vérifiable.**

Aucune promesse commerciale ne doit être inventée uniquement pour améliorer le SEO ou la conversion.

---

## 2.5 — ZONE D’INTERVENTION

Le service couvre l’Île-de-France, notamment les départements :

* 75 — Paris
* 77 — Seine-et-Marne
* 78 — Yvelines
* 91 — Essonne
* 92 — Hauts-de-Seine
* 93 — Seine-Saint-Denis
* 94 — Val-de-Marne
* 95 — Val-d’Oise

Les communes et leurs slugs doivent provenir de la source de données officielle du projet.

**Source de vérité des communes et slugs : `villes.json`.**

---

## 2.6 — CLIENTÈLE ET INTENTION

Le site doit répondre principalement aux utilisateurs recherchant :

* un enlèvement d’épave ;
* une solution pour un véhicule hors d’usage ;
* une intervention locale ;
* des informations sur les documents nécessaires ;
* les conditions de prise en charge ;
* un moyen simple de contacter GH Épaviste.

L’utilisateur doit comprendre rapidement :

**ce que fait GH Épaviste → où le service intervient → comment demander une intervention → quelles informations préparer.**

---

## 2.7 — CONFIANCE ET TRANSPARENCE

La confiance repose sur :

* une identité cohérente ;
* des coordonnées réelles ;
* des informations légales cohérentes ;
* des textes compréhensibles ;
* des promesses réalistes ;
* une présentation transparente du rôle de GH Épaviste ;
* une distinction claire entre GH Épaviste et les acteurs agréés de la filière.

Le site ne doit jamais utiliser une formulation réglementaire uniquement pour donner une impression de confiance.

---

## 2.8 — PRIORITÉ MOBILE-FIRST

L'expérience doit être conçue en priorité pour :

1. smartphone ;
2. tablette ;
3. ordinateur.

Les éléments essentiels doivent rester immédiatement accessibles sur mobile :

* appel téléphonique ;
* demande d'enlèvement ;
* formulaire ;
* informations essentielles ;
* zone d'intervention ;
* horaires.

---

## 2.9 — COHÉRENCE DE MARQUE

La marque publique est :

**GH Épaviste**

Le nom doit être utilisé de manière cohérente dans :

* le site ;
* les composants ;
* les métadonnées ;
* les données structurées ;
* les contenus SEO ;
* les documents du projet ;
* les communications utilisateur.

L'identité visuelle doit respecter le système de marque défini dans `DESIGN_SYSTEM.md`.

---

## 2.10 — RÈGLE DE NON-RÉGRESSION

Toute modification du site doit préserver :

* le positionnement légal ;
* l'identité de marque ;
* la cohérence SEO ;
* la qualité UX ;
* l'accessibilité ;
* les performances ;
* les informations métier validées.

Une amélioration visuelle ou SEO ne justifie jamais une formulation juridiquement incorrecte.

---

## 2.11 — RÈGLE FINALE

**GH Épaviste doit toujours être présenté exactement comme ce qu'il est réellement : une entreprise professionnelle d'enlèvement d'épaves, travaillant avec les acteurs appropriés de la filière, sans se présenter comme un centre VHU agréé.**

La précision, la transparence et la conformité priment toujours sur une promesse commerciale ou un avantage SEO à court terme.

# CHAPITRE 3 — PRODUCT PHILOSOPHY

## 3.1 — Une conception centrée sur l'utilisateur

GH Épaviste doit être conçu à partir des besoins réels des utilisateurs.

Chaque fonctionnalité, contenu ou évolution doit chercher à répondre à une question concrète :

> Cette modification rend-elle réellement le service plus clair, plus utile, plus accessible ou plus fiable pour l'utilisateur ?

Le produit ne doit pas être conçu uniquement pour satisfaire des objectifs techniques ou marketing.

L'expérience réelle de l'utilisateur reste un élément central de la conception.

## 3.2 — La simplicité avant la complexité

Une interface efficace n'a pas besoin d'être complexe.

Le projet privilégie :

- une navigation compréhensible ;
- une hiérarchie visuelle claire ;
- des informations faciles à trouver ;
- des interactions prévisibles ;
- des formulaires aussi simples que possible ;
- des appels à l'action explicites ;
- une présentation adaptée au contexte d'utilisation.

La complexité ne doit être introduite que lorsqu'elle apporte une valeur réelle.

Lorsqu'une solution plus simple permet d'obtenir le même résultat avec moins de risques, elle doit être privilégiée.

## 3.3 — La clarté avant l'effet visuel

Le design doit servir la compréhension.

Les éléments visuels, animations, composants et effets graphiques ne doivent pas détourner l'attention des informations importantes.

La qualité visuelle doit renforcer :

- la lisibilité ;
- la confiance ;
- la hiérarchie de l'information ;
- l'identité de GH Épaviste ;
- la facilité d'utilisation.

Une interface visuellement impressionnante mais difficile à comprendre ne constitue pas une bonne expérience produit.

## 3.4 — La confiance par la précision

La confiance ne doit pas être construite à partir de promesses exagérées.

Elle doit reposer sur des informations :

- exactes ;
- compréhensibles ;
- cohérentes ;
- vérifiables lorsque cela est nécessaire ;
- adaptées à la réalité du service.

Les contenus doivent représenter fidèlement les services réellement proposés.

Les formulations susceptibles de créer une confusion sur le statut réglementaire, les agréments, les partenaires ou les capacités de l'entreprise doivent être évitées.

La transparence est donc considérée comme une composante de l'expérience utilisateur et non comme une simple contrainte juridique.

## 3.5 — Le mobile comme expérience fondamentale

Le smartphone ne doit pas être considéré comme une simple version réduite du desktop.

La conception doit commencer par les usages mobiles et prendre en compte :

- les écrans de petite taille ;
- les interactions tactiles ;
- la lisibilité ;
- la vitesse de chargement ;
- la visibilité des informations essentielles ;
- l'accès rapide au contact ;
- les contraintes d'utilisation en mobilité.

Les adaptations pour les écrans plus larges doivent ensuite conserver la même logique fonctionnelle.

Les règles détaillées sont définies dans :

`docs/RESPONSIVE_SPEC.md`

et dans les documents UX/UI applicables.

## 3.6 — L'accessibilité comme principe de conception

L'accessibilité doit être prise en compte dès la conception.

Elle ne doit pas être considérée uniquement comme une vérification finale.

Le produit doit rechercher une expérience utilisable par le plus grand nombre, notamment grâce à :

- une structure sémantique cohérente ;
- une bonne lisibilité ;
- des contrastes appropriés ;
- des zones interactives suffisamment accessibles ;
- une navigation compréhensible ;
- des contenus correctement structurés ;
- une compatibilité aussi large que possible avec les technologies d'assistance.

Les exigences détaillées sont définies dans les documents techniques et UX/UI applicables.

## 3.7 — La performance comme partie intégrante de l'expérience

La performance n'est pas uniquement une caractéristique technique.

Elle influence directement l'expérience utilisateur.

Le projet doit donc chercher à limiter :

- les chargements inutiles ;
- les dépendances superflues ;
- les composants excessivement lourds ;
- les traitements non nécessaires ;
- les ressources mal optimisées.

Les optimisations doivent toutefois rester cohérentes avec la lisibilité, l'accessibilité, la maintenabilité et les fonctionnalités nécessaires au produit.

Une optimisation qui dégrade fortement l'expérience ou fragilise l'architecture n'est pas automatiquement une bonne optimisation.

## 3.8 — Le contenu avant le volume

La croissance du site ne doit pas être fondée uniquement sur l'augmentation du nombre de pages.

Chaque contenu doit avoir une utilité réelle pour l'utilisateur et s'intégrer correctement dans l'architecture du site.

La quantité de contenu ne constitue donc pas à elle seule un indicateur de qualité.

Une page supplémentaire doit apporter une valeur identifiable plutôt que simplement augmenter le volume du site.

Les règles relatives aux contenus locaux, aux données et au référencement sont définies dans les documents spécialisés applicables.

## 3.9 — Le SEO au service de l'utilisateur

Le référencement naturel doit contribuer à rendre le service plus visible et les contenus plus accessibles aux utilisateurs.

Il ne doit pas conduire à :

- surcharger les contenus de mots-clés ;
- créer des pages sans valeur réelle ;
- dégrader la lisibilité ;
- produire des contenus artificiellement répétitifs ;
- sacrifier l'expérience utilisateur au profit d'un indicateur isolé.

Le SEO doit donc être intégré à la qualité globale du produit.

## 3.10 — La cohérence avant la multiplication des exceptions

Le projet doit rechercher une cohérence entre :

- les composants ;
- les pages ;
- les interactions ;
- les contenus ;
- les comportements responsive ;
- les règles visuelles ;
- les conventions techniques.

Les exceptions peuvent être nécessaires lorsqu'elles répondent à un besoin réel.

Elles doivent cependant rester maîtrisées afin d'éviter la multiplication de comportements différents pour des situations similaires.

Les spécifications du système de design et des composants sont définies dans les documents spécialisés du dossier `/docs/`.

## 3.11 — L'évolution progressive

Le projet doit évoluer de manière progressive et contrôlée.

Une modification importante doit tenir compte de l'existant avant d'introduire une nouvelle solution.

Les fonctionnalités, composants, contenus et structures déjà validés ne doivent pas être remplacés inutilement.

Lorsqu'une évolution est nécessaire, elle doit chercher à améliorer l'existant sans créer de régression évitable.

## 3.12 — La preuve avant l'affirmation

La qualité du projet repose également sur la capacité à distinguer :

- ce qui est prévu ;
- ce qui est en cours ;
- ce qui est réellement implémenté ;
- ce qui a été vérifié ;
- ce qui a été validé.

Une fonctionnalité ne doit pas être considérée comme terminée simplement parce que son code a été écrit.

Les résultats doivent être vérifiés selon les contrôles applicables au changement concerné.

Les règles précises de validation et de preuve sont définies dans :

`AI_RULES.md`

et dans les documents de qualité et de workflow applicables.

## 3.13 — La documentation comme mémoire du projet

La documentation permet au projet de rester compréhensible indépendamment de la personne ou de l'agent qui intervient.

Les décisions importantes, contraintes, procédures et spécifications doivent donc être conservées dans les documents appropriés.

Le README présente le projet.

Les documents spécialisés conservent les informations détaillées correspondant à leur domaine.

Cette séparation permet d'éviter qu'un même principe soit copié dans plusieurs fichiers avec le risque qu'une version devienne différente ou obsolète.

## 3.14 — Une philosophie orientée vers la durabilité

Le projet doit privilégier les solutions capables de rester compréhensibles et maintenables dans le temps.

Une solution n'est pas considérée comme meilleure uniquement parce qu'elle est plus rapide à produire.

La qualité d'une évolution doit également être appréciée selon :

- sa fiabilité ;
- sa maintenabilité ;
- son impact sur l'existant ;
- sa facilité de validation ;
- sa cohérence avec l'architecture ;
- son coût futur de maintenance.

Le projet cherche ainsi à construire un produit durable plutôt qu'à accumuler rapidement des modifications.

## 3.15 — Relation avec les règles du projet

Ce chapitre présente la philosophie générale du produit.

Il ne constitue pas un remplacement des règles obligatoires du projet.

Pour les interventions assistées par IA, les règles obligatoires sont définies dans :

`AI_RULES.md`

Le contexte structurant du projet est défini dans :

`PROJECT_CONTEXT.md`

L'état et les tâches actuellement autorisés sont définis dans :

`CURRENT_TASK.md`

La continuité entre les sessions est définie dans :

`HANDOVER.md`

Le processus officiel de travail est défini dans :

`docs/WORKFLOW.md`

Les décisions validées sont conservées dans :

`docs/DECISIONS.md`

Les spécifications détaillées restent dans les documents spécialisés correspondants du dossier :

`/docs/`

# CHAPITRE 4 — RÈGLES MÉTIER, CONTENU & DONNÉES

## 4.1 — PRINCIPE GÉNÉRAL

Toutes les informations publiées sur le site doivent être :

* exactes ;
* cohérentes ;
* vérifiables ;
* compréhensibles ;
* conformes au positionnement réel de GH Épaviste.

Aucun contenu ne doit être créé uniquement pour augmenter artificiellement le volume SEO.

---

## 4.2 — SOURCE DE VÉRITÉ DES DONNÉES

Les données métier et géographiques doivent utiliser les sources officielles du projet.

Pour les communes :

**`villes.json` est la source de vérité des noms, départements et slugs.**

Une IA ne doit jamais inventer :

* un nom de commune ;
* un slug ;
* un département ;
* une URL ;
* une information locale ;
* une donnée métier.

En cas de conflit entre une supposition de l'IA et une source officielle du projet, **la source du projet prévaut**.

---

## 4.3 — RAPPEL LÉGAL VHU

Le positionnement légal détaillé de GH Épaviste est défini au **chapitre 2.3 — Positionnement légal et VHU**.

Toute génération ou modification de contenu doit respecter strictement ce positionnement.

En particulier, aucune page, métadonnée, donnée structurée ou contenu généré par IA ne doit :

* présenter GH Épaviste comme un centre VHU ou un acteur agréé VHU ;
* attribuer à GH Épaviste l'agrément ou les habilitations d'un partenaire ;
* inventer une activité réglementée ou une certification ;
* utiliser une formulation créant une impression équivalente.

**En cas de doute sur une formulation légale ou métier : STOP et validation humaine.**

---

## 4.4 — CONTENU LOCAL

Les pages locales doivent apporter une véritable valeur à l'utilisateur.

Une page communale doit rester :

* spécifique à la commune ;
* naturelle ;
* utile ;
* lisible ;
* cohérente avec le service réellement disponible.

L'IA ne doit pas produire des variantes artificielles uniquement destinées aux moteurs de recherche.

---

## 4.5 — QUALITÉ SEO

Le contenu doit respecter :

* les règles SEO du projet ;
* les règles de `AI_RULES.md` ;
* les contraintes de similarité ;
* la structure sémantique validée ;
* les règles de maillage interne ;
* les métadonnées validées ;
* les données structurées validées.

Le SEO ne doit jamais prendre le dessus sur :

**l'exactitude → la lisibilité → la confiance → l'utilité.**

---

## 4.6 — DONNÉES STRUCTURÉES

Les données JSON-LD doivent représenter uniquement des informations réelles et vérifiables.

Il est interdit d'ajouter dans Schema.org :

* un agrément inexistant ;
* une certification inexistante ;
* une adresse fictive ;
* une activité non exercée ;
* une information inventée pour améliorer le référencement.

Les données structurées doivent rester cohérentes avec le contenu visible.

---

## 4.7 — INFORMATIONS ADMINISTRATIVES

Les informations concernant les documents nécessaires doivent rester prudentes et cohérentes avec le processus réellement appliqué.

Exemples de documents couramment demandés :

* carte grise barrée et signée ;
* certificat de non-gage récent ;
* pièce d'identité.

Toute évolution de procédure doit être vérifiée avant modification du site.

---

## 4.8 — CONDITIONS DE PRISE EN CHARGE

Lorsqu'une gratuité est annoncée, les conditions doivent être clairement précisées.

Exemple :

**La prise en charge gratuite peut dépendre notamment du fait que le véhicule soit complet et accessible.**

Aucune gratuité absolue ne doit être promise si elle dépend de conditions.

---

## 4.9 — FORMULAIRE DE CONTACT

Le formulaire doit rester simple afin de limiter les abandons.

Les champs doivent demander uniquement les informations réellement nécessaires à la demande.

Un champ :

**« Message libre / Décrivez votre demande… »**

peut permettre au client de préciser sa situation sans multiplier les champs obligatoires.

Les données collectées doivent rester cohérentes avec l'objectif du formulaire.

---

## 4.10 — COHÉRENCE ENTRE PAGES

Les informations communes doivent rester cohérentes entre :

* page d'accueil ;
* pages services ;
* pages départements ;
* pages communes ;
* FAQ ;
* formulaire ;
* footer ;
* données structurées ;
* métadonnées.

Une modification métier doit être répercutée dans les emplacements concernés.

---

## 4.11 — RÈGLES DE GÉNÉRATION IA

Avant de générer un grand volume de contenu, l'IA doit vérifier :

* les sources de données ;
* les slugs ;
* les règles SEO ;
* les règles de similarité ;
* les contraintes légales ;
* les références de qualité ;
* les règles de `AI_RULES.md` ;
* le `CURRENT_TASK.md`.

Si une information nécessaire manque ou est ambiguë :

**STOP — ne pas inventer.**

---

## 4.12 — RÈGLE DE NON-RÉGRESSION

Toute nouvelle page ou modification doit préserver :

* la conformité légale ;
* la cohérence métier ;
* la qualité SEO ;
* l'accessibilité ;
* les performances ;
* la structure HTML ;
* l'expérience utilisateur ;
* les références de qualité du projet.

Une page plus longue n'est pas automatiquement une page meilleure.

---

## 4.13 — VALIDATION AVANT PUBLICATION

Avant publication d'un changement important, vérifier au minimum :

* contenu métier ;
* positionnement VHU ;
* SEO ;
* données structurées ;
* liens internes ;
* slugs ;
* TypeScript ;
* lint ;
* build ;
* absence de régression.

Tout échec important doit entraîner un **STOP** jusqu'à correction.

---

## 4.14 — RÈGLE DE PRIORITÉ

En cas de conflit :

**réalité métier > conformité légale > sources du projet > qualité UX > SEO > volume de contenu.**

Le site ne doit jamais sacrifier l'exactitude pour obtenir davantage de pages ou de mots-clés.

---

## 4.15 — RÈGLE FINALE

**Le contenu de GH Épaviste doit toujours refléter la réalité du service, des données et du positionnement légal de l'entreprise.**

L'IA peut accélérer la production et les contrôles, mais elle ne doit jamais inventer une information métier ou attribuer à GH Épaviste un agrément VHU qui appartient à un autre acteur.

# CHAPITRE 5 — STACK TECHNIQUE & ENVIRONNEMENT DE DÉVELOPPEMENT

## 5.1 — OBJECTIF

Le projet GH Épaviste repose sur une stack moderne, maintenable et adaptée à un site SEO local performant.

Les choix techniques doivent rester cohérents avec :

* les objectifs du projet
* les règles de gouvernance
* les exigences SEO
* les exigences UX/UI
* les performances
* l'accessibilité
* la sécurité
* la maintenabilité

---

## 5.2 — STACK PRINCIPALE

Technologies principales :

```text
Next.js
React
TypeScript
TailwindCSS
JSON-LD / Schema.org
pnpm
Git / GitHub
Vercel
OVH
Google Search Console
PageSpeed Insights
```

Le projet utilise principalement **Next.js App Router**.

---

## 5.3 — NEXT.JS

Next.js constitue le framework principal du site.

Les développements doivent respecter :

* App Router
* Server Components lorsque pertinents
* génération statique lorsque pertinente
* métadonnées Next.js
* gestion correcte des routes
* optimisation des images
* bonnes pratiques de performance

Toute modification de l'architecture Next.js doit être justifiée et validée.

---

## 5.4 — TYPESCRIPT

TypeScript doit être utilisé avec un niveau de rigueur élevé.

Principes :

* typage explicite lorsque nécessaire
* éviter `any`
* gérer correctement `null` et `undefined`
* éviter les assertions dangereuses
* conserver des interfaces/types cohérents
* corriger les erreurs TypeScript avant validation

Une erreur TypeScript critique empêche la validation.

---

## 5.5 — TAILWINDCSS

TailwindCSS est utilisé pour le système d'interface.

Les styles doivent respecter :

* le Design System
* la charte graphique
* le responsive
* l'accessibilité
* la cohérence des composants

La couleur principale de la marque est notamment :

```text
#f7bb09
```

Les couleurs et variantes du logo doivent être utilisées selon le contexte prévu par le Design System.

---

## 5.6 — PAGEBUILDER V4 ET PAGE DE RÉFÉRENCE

Le projet possède une référence de qualité issue du système **PageBuilder V4**.

La page **Levallois-Perret** constitue une référence importante pour :

* la structure HTML
* la qualité sémantique
* l'organisation du contenu
* le niveau SEO
* la cohérence des composants
* la structure des sections
* les standards de qualité

La référence officielle est documentée dans :

```text
V4_REFERENCE.md
```

Avant toute génération massive ou modification structurelle importante, il faut vérifier que la nouvelle implémentation ne constitue pas une régression par rapport à cette référence.

**V4_REFERENCE.md et les Golden Files restent des références protégées.**

Ils ne doivent pas être modifiés automatiquement sans autorisation explicite.

---

## 5.7 — JSON-LD ET SCHEMA.ORG

Les données structurées doivent être générées de manière cohérente avec le contenu réellement présent sur les pages.

Elles doivent :

* respecter Schema.org
* correspondre au contenu visible
* éviter les informations trompeuses
* être validées après modification
* ne pas créer de fausses affirmations réglementaires

Le JSON-LD ne doit jamais être utilisé pour déclarer un statut que GH Épaviste ne possède pas.

---

## 5.8 — GESTION DES DONNÉES

Les données locales doivent utiliser les sources de vérité définies par le projet.

Pour les communes et départements :

* respecter les données officielles du projet
* respecter les slugs existants
* ne pas inventer d'identifiants
* ne pas modifier arbitrairement les structures
* conserver la cohérence entre données, routes, liens et sitemap

La source de vérité des villes doit rester celle définie dans le projet, notamment `villes.json` lorsque cette source est applicable.

---

## 5.9 — COMMANDES PNPM ESSENTIELLES

Les commandes principales du projet sont :

```bash
pnpm install
```

Installe les dépendances du projet.

```bash
pnpm dev
```

Lance l'environnement de développement local.

```bash
pnpm lint
```

Exécute les contrôles ESLint configurés par le projet.

```bash
pnpm typecheck
```

Vérifie le typage TypeScript.

```bash
pnpm build
```

Construit l'application pour la production.

Avant de considérer une modification comme validée, les commandes réellement disponibles dans le projet doivent être utilisées selon le workflow applicable.

**Une commande ne doit jamais être déclarée réussie sans résultat réel.**

---

## 5.10 — VARIABLES D'ENVIRONNEMENT

Les variables d'environnement doivent rester séparées du code source lorsqu'elles contiennent des secrets ou des informations sensibles.

Exemples de catégories :

* clés API
* identifiants de services
* configuration email
* variables de déploiement
* secrets d'intégration

Les fichiers `.env*` contenant des secrets ne doivent jamais être commités dans Git.

Les valeurs réelles ne doivent jamais être écrites dans le README.

---

## 5.11 — GIT ET GITHUB

Git constitue le système de versionnement du projet.

Avant une modification importante :

```bash
git status
```

doit permettre de connaître l'état du dépôt.

Après modification, vérifier notamment :

```bash
git status
git diff --stat
```

Le diff doit correspondre à la tâche demandée.

Aucun fichier inattendu ne doit être inclus dans un commit.

---

## 5.12 — VERCEL

Vercel est utilisé pour le déploiement de l'application.

Un déploiement doit être considéré comme réussi uniquement après :

* build réussi
* déploiement terminé
* production accessible
* vérification des fonctionnalités critiques
* absence de régression critique

Le statut de déploiement ne remplace pas les tests fonctionnels.

---

## 5.13 — OVH

OVH intervient notamment pour les éléments liés au domaine et aux services associés.

Toute modification concernant :

* DNS
* domaine
* messagerie
* enregistrements nécessaires au fonctionnement du site

doit être effectuée avec prudence et vérifiée après modification.

Aucun secret ou identifiant OVH ne doit être placé dans la documentation publique.

---

## 5.14 — ENVIRONNEMENT LOCAL

L'environnement local doit permettre de reproduire autant que possible les conditions nécessaires au développement et aux tests.

Avant une modification importante :

1. vérifier l'état du projet
2. installer les dépendances si nécessaire
3. lancer le projet
4. effectuer les modifications
5. exécuter les validations
6. contrôler le diff

---

## 5.15 — COMPATIBILITÉ ET RESPONSIVE

Le développement doit être pensé **mobile-first**.

Les interfaces doivent être vérifiées au minimum sur :

* smartphone
* tablette lorsque nécessaire
* desktop

Les modifications ne doivent pas dégrader les composants existants sur d'autres tailles d'écran.

---

## 5.16 — PERFORMANCE

La stack doit être utilisée de manière à préserver :

* LCP
* INP
* CLS
* temps de chargement
* stabilité visuelle
* poids des ressources

Les optimisations doivent être mesurées et non supposées.

---

## 5.17 — RÈGLE DE COMPATIBILITÉ

Toute nouvelle technologie, dépendance ou architecture doit être évaluée avant intégration.

Questions minimales :

```text
Est-elle réellement nécessaire ?
Est-elle compatible avec Next.js ?
Est-elle compatible avec TypeScript ?
Impacte-t-elle le SEO ?
Impacte-t-elle les performances ?
Impacte-t-elle l'accessibilité ?
Ajoute-t-elle une dette technique ?
```

Une technologie ne doit pas être ajoutée uniquement parce qu'elle est populaire.

---

## 5.18 — RÈGLE ABSOLUE

**La stack technique doit servir le projet, et non l'inverse.**

Chaque choix technique doit contribuer à un site :

**rapide + accessible + sécurisé + maintenable + performant + SEO-friendly.**

# CHAPITRE 6 — ARCHITECTURE DU PROJET

## 6.1 — Principes architecturaux

L'architecture du projet recherche principalement :

- la simplicité ;
- la séparation des responsabilités ;
- la réutilisation ;
- la cohérence ;
- la maintenabilité ;
- l'évolutivité ;
- la limitation du couplage inutile.

Ces principes servent à conserver une base technique compréhensible et à limiter les modifications structurelles injustifiées.

Ils doivent être interprétés avec les contraintes réelles du projet et les documents techniques applicables.

---

## 6.2 — Vue générale

Le projet peut être représenté de manière simplifiée comme suit :

```text
                         GH ÉPAVISTE
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
          Pages          Composants          Données
             │                │                │
             └────────────────┼────────────────┘
                              │
                              ▼
                    Rendu de l'application
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
          Métadonnées                  Données
          et SEO                    structurées
                │                           │
                └─────────────┬─────────────┘
                              ▼
                         Application
                              │
                              ▼
                         Production
```

# CHAPITRE 7 — REPOSITORY STRUCTURE

## 7.1 — Objectif

Ce chapitre présente l'organisation générale du dépôt GH Épaviste.

Il permet de comprendre où se trouvent les principales catégories de ressources du projet et quelle responsabilité générale leur est associée.

Il ne constitue pas un inventaire exhaustif de tous les fichiers du dépôt.

La structure exacte du dépôt doit toujours être vérifiée directement dans le projet avant toute modification.

---

## 7.2 — Principe général

L'organisation du dépôt cherche à maintenir une séparation claire entre :

- l'application ;
- les composants ;
- les données ;
- les ressources publiques ;
- les utilitaires ;
- les styles ;
- les types ;
- la documentation ;
- les fichiers de configuration.

La structure doit rester compréhensible et prévisible sans empêcher l'évolution du projet.

---

## 7.3 — Vue générale

La structure générale peut être représentée ainsi :

```text
GH-EPAVISTE/
│
├── app/
├── components/
├── data/
├── hooks/
├── lib/
├── public/
├── styles/
├── types/
│
├── docs/
│
├── fichiers de configuration du projet
├── fichiers de documentation racine
└── fichiers nécessaires au fonctionnement du dépôt
```

# CHAPITRE 8 — DOCUMENTATION ARCHITECTURE

**Niveau :** Fondamental

**Obligatoire :** Oui

**Temps de lecture estimé :** 10 minutes

**Dernière révision :** À compléter

---

## 8.1 — Objectif

Définir l'architecture documentaire officielle du projet GH Épaviste.

Ce chapitre explique :

- où se trouvent les principaux documents ;
- quelle est la responsabilité de chaque document ;
- quel document consulter selon le besoin ;
- comment les documents doivent interagir ;
- comment éviter les doublons et les contradictions.

La documentation fait partie intégrante du produit.

Elle permet aux développeurs, aux assistants IA et aux futurs collaborateurs de comprendre le projet sans dépendre d'une seule personne.

---

## 8.2 — Public concerné

Ce chapitre s'adresse notamment aux :

- développeurs ;
- architectes logiciels ;
- designers UX/UI ;
- experts SEO ;
- auditeurs qualité ;
- assistants IA ;
- futurs collaborateurs.

---

## 8.3 — Résultat attendu

À la fin de ce chapitre, le lecteur doit être capable de :

- identifier rapidement le bon document ;
- comprendre la responsabilité de chaque document ;
- distinguer les règles, le contexte, l'état actuel et les procédures ;
- éviter de créer une deuxième source concurrente ;
- savoir où rechercher une information avant toute modification.

---

## 8.4 — Principe fondamental

La documentation de GH Épaviste est organisée par responsabilités.

Chaque document possède un rôle défini.

Un document doit être utilisé pour le sujet qu'il est chargé de couvrir.

Le README présente le projet et sert de porte d'entrée.

Les documents spécialisés contiennent les règles et informations détaillées correspondant à leur domaine.

L'objectif n'est donc pas de créer une hiérarchie unique dans laquelle chaque document serait systématiquement lu dans le même ordre.

L'objectif est de disposer d'une architecture documentaire claire permettant de consulter :

1. le contexte nécessaire ;
2. les règles applicables ;
3. l'état opérationnel ;
4. le processus approprié ;
5. la documentation spécialisée ;
6. le code concerné.

---

## 8.5 — Le rôle du README.md

`README.md` est le point d'entrée général du projet.

Il présente notamment :

- la vision du produit ;
- les objectifs généraux ;
- la philosophie du projet ;
- la stack technique ;
- l'architecture générale ;
- la structure du dépôt ;
- l'organisation documentaire ;
- les principes généraux de fonctionnement.

Le README doit rester lisible et relativement synthétique.

Il ne doit pas devenir une copie complète de :

- `AI_RULES.md` ;
- `CURRENT_TASK.md` ;
- `PROJECT_CONTEXT.md` ;
- `HANDOVER.md` ;
- `docs/WORKFLOW.md` ;
- `docs/DESIGN_SYSTEM.md` ;
- `docs/RESPONSIVE_SPEC.md` ;
- `docs/QUALITY_GATE.md` ;
- ou de tout autre document spécialisé.

Lorsqu'une information détaillée possède déjà un document de référence, le README doit expliquer son rôle et orienter vers ce document.

---

## 8.6 — Les documents racine de gouvernance

Les fichiers suivants constituent le socle documentaire principal du projet :

```text
README.md
AI_RULES.md
PROJECT_CONTEXT.md
CURRENT_TASK.md
HANDOVER.md
```

# CHAPITRE 9 — PRODUCT OPERATING SYSTEM

**Niveau :** Fondamental

**Obligatoire :** Oui

**Temps de lecture estimé :** 12 minutes

**Dernière révision :** À compléter

---

## 9.1 — Objectif

Définir le rôle du Product Operating System (POS) dans le projet GH Épaviste.

Le Product Operating System est le cadre global qui permet de faire évoluer le produit de manière :

- cohérente ;
- contrôlée ;
- documentée ;
- mesurable ;
- maintenable ;
- durable.

Le POS ne constitue pas un document unique.

Il s'appuie sur plusieurs documents ayant chacun une responsabilité clairement définie.

---

## 9.2 — Public concerné

Ce chapitre s'adresse notamment aux :

- développeurs ;
- architectes logiciels ;
- designers UX/UI ;
- spécialistes SEO ;
- chefs de projet ;
- auditeurs qualité ;
- assistants IA ;
- futurs collaborateurs.

---

## 9.3 — Résultat attendu

À la fin de ce chapitre, le lecteur doit être capable de :

- comprendre ce qu'est le Product Operating System ;
- comprendre son rôle dans le projet ;
- identifier ses principaux domaines ;
- comprendre la responsabilité des documents associés ;
- distinguer gouvernance, documentation, processus et implémentation ;
- éviter de créer une nouvelle hiérarchie documentaire concurrente.

---

## 9.4 — Qu'est-ce que le Product Operating System ?

Le Product Operating System (POS) est le système global d'organisation et de gouvernance du projet GH Épaviste.

Il rassemble les principes, règles, processus, décisions, standards et documentations nécessaires pour faire évoluer le produit de manière cohérente.

Le POS n'est donc pas simplement un ensemble de fichiers Markdown.

Il représente la manière dont le projet est :

- compris ;
- organisé ;
- conçu ;
- développé ;
- testé ;
- validé ;
- documenté ;
- amélioré.

---

## 9.5 — Le POS n'est pas une source unique de vérité

Le Product Operating System doit être compris comme un **système de responsabilités documentaires**, et non comme une source unique contenant toutes les informations.

Chaque domaine possède son document de référence approprié.

Par exemple :

```text
Règles obligatoires
        ↓
AI_RULES.md

Contexte du projet
        ↓
PROJECT_CONTEXT.md

État opérationnel actuel
        ↓
CURRENT_TASK.md

Continuité entre sessions
        ↓
HANDOVER.md

Processus de travail
        ↓
docs/WORKFLOW.md

Décisions validées
        ↓
docs/DECISIONS.md

Standards UX/UI
        ↓
Documentation UX/UI

Validation qualité
        ↓
docs/QUALITY_GATE.md
```

# CHAPITRE 10 — DOCUMENTATION & SOURCES DE VÉRITÉ
## 10.1 — Objectif

La documentation du projet est organisée afin d'éviter les contradictions, duplications et décisions implicites.

Chaque information importante doit avoir une source de vérité identifiable.

## 10.2 — Documents principaux
Gouvernance
AI_RULES.md → règles obligatoires pour les IA.
CURRENT_TASK.md → tâche et état actuel.
PROJECT_CONTEXT.md → contexte technique et métier.
HANDOVER.md → continuité entre sessions.
DECISIONS.md → décisions validées.
WORKFLOW.md → workflow général.
Références techniques
V4_REFERENCE.md → référence PageBuilder V4.
/docs/ → spécifications et procédures spécialisées.
## 10.3 — Principe anti-duplication

Une règle ou procédure ne doit pas être copiée inutilement dans plusieurs fichiers.

Le README explique où trouver l'information.

Le document spécialisé contient le niveau de détail nécessaire à son application.

En cas de modification d'une règle, seule sa source de vérité doit être mise à jour lorsque cela est possible.

## 10.4 — Documents spécialisés

Selon le sujet, consulter notamment :

docs/UX_UI_MASTER_SPEC.md
docs/DESIGN_SYSTEM.md
docs/RESPONSIVE_SPEC.md
docs/QUALITY_GATE.md
docs/QUALITY_SCORE.md
docs/COMPONENT_GUIDELINES.md
docs/CONVERSION_OPTIMIZATION.md
docs/DESIGN_AUDIT_TEMPLATE.md

Les procédures détaillées doivent rester dans les documents spécialisés correspondants.

## 10.5 — Références officielles

Certaines ressources sont des références de non-régression et ne doivent pas être modifiées automatiquement :

V4_REFERENCE.md
Golden Files
snapshots de référence
pages de référence validées

Toute modification susceptible d'affecter une référence doit être contrôlée avant validation.

## 10.6 — Mise à jour documentaire

Une modification importante du projet doit conserver sa traçabilité.

Selon son impact, elle peut nécessiter la mise à jour de :

CURRENT_TASK.md
HANDOVER.md
DECISIONS.md
CHANGELOG.md
la documentation spécialisée concernée.
## 10.7 — Règle finale

README = vision et navigation.
AI_RULES = règles obligatoires.
CURRENT_TASK = état actuel.
PROJECT_CONTEXT = contexte du projet.
HANDOVER = continuité.
DECISIONS = décisions validées.
WORKFLOW = méthode de travail.
V4_REFERENCE = référence PageBuilder V4.
/docs = procédures et spécifications détaillées.

# CHAPITRE 11 — DEVELOPMENT WORKFLOW

**Niveau :** Fondamental

**Obligatoire :** Oui

---

## 11.1 — Objectif

Définir le processus général de développement du projet GH Épaviste.

Le Development Workflow garantit que chaque évolution :

- est comprise avant son implémentation ;
- respecte les règles du projet ;
- prend en compte le contexte existant ;
- utilise les documents spécialisés appropriés ;
- est développée de manière contrôlée ;
- est testée et validée ;
- laisse une documentation cohérente après son intégration.

Le détail opérationnel du workflow est défini dans `docs/WORKFLOW.md`.

Ce chapitre présente uniquement le fonctionnement général du processus.

---

## 11.2 — Public concerné

Ce chapitre concerne notamment :

- développeurs ;
- architectes ;
- designers UX/UI ;
- spécialistes SEO ;
- auditeurs qualité ;
- assistants IA ;
- nouveaux collaborateurs.

---

## 11.3 — Documents liés

- `AI_RULES.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_TASK.md`
- `HANDOVER.md`
- `docs/WORKFLOW.md`
- `docs/DECISIONS.md`
- `docs/PROJECT_ROADMAP.md`
- documentation UX/UI concernée
- documentation technique concernée
- `docs/QUALITY_GATE.md`
- `docs/QUALITY_SCORE.md`

Les documents techniques ou opérationnels supplémentaires ne doivent être considérés comme applicables que lorsqu'ils existent réellement dans le dépôt.

---

## 11.4 — Philosophie du Workflow

Le développement ne commence pas directement par le code.

Une évolution doit d'abord être comprise dans son contexte.

Le processus général est :

```text
Comprendre
    │
    ▼
Analyser
    │
    ▼
Planifier
    │
    ▼
Décider
    │
    ▼
Implémenter
    │
    ▼
Tester
    │
    ▼
Valider
    │
    ▼
Documenter
    │
    ▼
Livrer
```

# CHAPITRE 12 — DEVELOPMENT LIFECYCLE

**Niveau :** Fondamental

**Obligatoire :** Oui

---

## 12.1 — Objectif

Définir le cycle de vie général d'une évolution au sein du projet GH Épaviste.

Une fonctionnalité ou une évolution ne se limite pas à son développement. Elle doit être comprise, conçue, implémentée, testée, validée, livrée puis maintenue.

Le Development Lifecycle complète le Development Workflow présenté au chapitre 11.

---

## 12.3 — Documents liés

- `AI_RULES.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_TASK.md`
- `HANDOVER.md`
- `docs/WORKFLOW.md`
- `docs/DECISIONS.md`
- `docs/PROJECT_ROADMAP.md`
- documentation UX/UI concernée
- documentation technique concernée
- `docs/QUALITY_GATE.md`
- `docs/QUALITY_SCORE.md`

---

## 12.4 — Philosophie

Une fonctionnalité commence lorsqu'un besoin est identifié.

Elle ne se termine pas simplement lorsque le code est déployé.

Elle continue à évoluer pendant toute sa durée de vie.

Le Development Lifecycle couvre donc l'ensemble du parcours :

```text
Besoin
   ↓
Analyse
   ↓
Conception
   ↓
Planification
   ↓
Développement
   ↓
Tests
   ↓
Validation
   ↓
Livraison
   ↓
Suivi
   ↓
Maintenance
   ↓
Amélioration continue
```

# CHAPITRE 13 — GOUVERNANCE IA & WORKFLOW

## 13.1 — OBJECTIF

Les agents IA peuvent assister au développement du projet, mais ils doivent respecter les règles de gouvernance définies par le projet.

Le README présente ici uniquement le fonctionnement général.

**`AI_RULES.md` reste la source de vérité pour les règles détaillées et obligatoires.**

---

## 13.2 — ORDRE DE LECTURE

Avant toute modification importante, l'agent IA doit consulter les documents applicables du projet, notamment :

1. `AI_RULES.md`
2. `CURRENT_TASK.md`
3. `PROJECT_CONTEXT.md`
4. `HANDOVER.md`
5. `V4_REFERENCE.md`
6. `WORKFLOW.md`
7. les documents spécialisés concernés.

En cas de contradiction, les règles de gouvernance prioritaires prévalent.

---

## 13.3 — AVANT DE MODIFIER

L'agent IA doit comprendre :

* la tâche demandée ;
* le contexte du projet ;
* les contraintes existantes ;
* les fichiers concernés ;
* les sources de vérité ;
* les risques de régression.

Il ne doit pas modifier le projet sur la base d'une supposition.

---

## 13.4 — RÈGLE STOP

L'agent doit s'arrêter lorsqu'une information essentielle est :

* absente ;
* ambiguë ;
* contradictoire ;
* non vérifiable ;
* susceptible de provoquer une régression importante.

**STOP signifie : ne pas inventer, ne pas contourner la règle et demander une clarification ou une validation.**

Les conditions STOP détaillées sont définies dans `AI_RULES.md`.

---

## 13.5 — EXÉCUTION ET PREUVES

Les validations techniques doivent être réellement exécutées lorsque la tâche les exige.

Exemples :

* `pnpm lint`
* `pnpm typecheck`
* `pnpm build`
* tests applicables
* audits concernés.

Une IA ne doit jamais déclarer une commande exécutée si elle ne l'a pas réellement exécutée.

Elle ne doit pas transformer une hypothèse en preuve de réussite.

---

## 13.6 — MODIFICATION CONTRÔLÉE

Les changements doivent rester :

* ciblés ;
* justifiés ;
* réversibles lorsque possible ;
* cohérents avec l'architecture ;
* limités au périmètre demandé.

Éviter les modifications massives lorsqu'une correction ciblée suffit.

---

## 13.7 — VALIDATION ET NON-RÉGRESSION

Après modification, vérifier les impacts pertinents sur :

* TypeScript ;
* lint ;
* build ;
* SEO ;
* accessibilité ;
* performance ;
* UX/UI ;
* données ;
* sécurité ;
* structure des pages.

Les procédures détaillées sont définies dans les documents spécialisés.

---

## 13.8 — TRAÇABILITÉ

Les changements importants doivent être traçables par les mécanismes du projet :

* Git ;
* commits ;
* décisions ;
* `CHANGELOG.md` lorsque requis ;
* rapports de validation ;
* `HANDOVER.md` lorsque nécessaire.

---

## 13.9 — RÉFÉRENCES DU PROJET

Pour les modifications structurelles, SEO ou de génération de pages, l'agent doit tenir compte notamment de :

* `V4_REFERENCE.md` ;
* `PROJECT_CONTEXT.md` ;
* `CURRENT_TASK.md` ;
* `AI_RULES.md` ;
* `docs/QUALITY_GATE.md` ;
* `docs/WORKFLOW.md` ;
* autres documents spécialisés concernés.

---

## 13.10 — GÉNÉRATION DE CONTENU

Toute génération de contenu doit respecter :

* les données sources ;
* les règles métier ;
* le positionnement légal ;
* les règles SEO ;
* les contraintes de similarité ;
* les références de qualité.

Une IA ne doit jamais inventer une donnée locale, réglementaire, commerciale ou technique.

---

## 13.11 — CONTINUITÉ ENTRE AGENTS

Lorsqu'un autre agent reprend le projet, il doit pouvoir comprendre :

* ce qui a été fait ;
* ce qui reste à faire ;
* ce qui est bloqué ;
* quelles décisions ont été prises ;
* quelles validations ont été réalisées.

`HANDOVER.md` et `CURRENT_TASK.md` assurent cette continuité.

---

## 13.12 — RESPONSABILITÉ

L'utilisation d'une IA ne supprime pas la nécessité d'une validation humaine lorsque le sujet concerne :

* une décision métier ;
* une question juridique ;
* une modification importante ;
* une information incertaine ;
* une décision irréversible.

L'IA assiste le projet ; elle ne remplace pas la responsabilité de validation.

---

## 13.13 — RÈGLE FINALE

**Le README explique le cadre général du travail avec l'IA.**

**`AI_RULES.md` définit les règles impératives et détaillées.**

**Les documents spécialisés définissent les procédures techniques spécifiques.**

Cette séparation doit être conservée afin d'éviter les contradictions et la duplication documentaire.

# CHAPITRE 14 — GOLDEN RULES

**Niveau :** Fondamental

**Obligatoire :** Oui

---

## 14.1 — Objectif

Présenter les principes fondamentaux qui doivent guider les évolutions du projet GH Épaviste.

Les Golden Rules ne remplacent pas les règles obligatoires du projet.

Elles constituent une synthèse des principes de qualité, de cohérence et de durabilité qui doivent guider les décisions.

Les règles obligatoires et les procédures détaillées sont définies dans les documents de référence appropriés.

---

## 14.2 — Public concerné

Les Golden Rules concernent notamment :

- développeurs ;
- architectes ;
- designers UX/UI ;
- spécialistes SEO ;
- auditeurs qualité ;
- assistants IA ;
- futurs collaborateurs.

---

## 14.3 — Documents liés

- `AI_RULES.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_TASK.md`
- `HANDOVER.md`
- `docs/WORKFLOW.md`
- `docs/DECISIONS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/RESPONSIVE_SPEC.md`
- `docs/QUALITY_GATE.md`
- documentation technique concernée

---

## 14.4 — Philosophie

Les Golden Rules permettent de conserver une direction cohérente lorsque le projet évolue.

Elles ne constituent pas un second système de règles.

Leur rôle est de rappeler les principes essentiels qui doivent guider les décisions :

```text
Comprendre
   ↓
Préserver
   ↓
Simplifier
   ↓
Améliorer
   ↓
Vérifier
   ↓
Documenter
```

# CHAPITRE 15 — GIT WORKFLOW

**Niveau :** Fondamental

**Obligatoire :** Oui

---

## 15.1 — Objectif

Présenter les principes généraux de gestion du code source du projet GH Épaviste avec Git.

Git permet notamment de conserver :

- un historique des modifications ;
- une traçabilité des évolutions ;
- la possibilité de revenir à un état antérieur ;
- une base de collaboration entre intervenants ;
- une meilleure maîtrise des déploiements.

Les procédures détaillées sont définies dans `docs/WORKFLOW.md` et dans les documents techniques applicables.

---

## 15.2 — Public concerné

- Développeurs
- Architectes
- Assistants IA
- Auditeurs techniques
- Futurs collaborateurs

---

## 15.3 — Documents liés

- `AI_RULES.md`
- `CURRENT_TASK.md`
- `HANDOVER.md`
- `docs/WORKFLOW.md`
- `docs/DECISIONS.md`
- `docs/QUALITY_GATE.md`
- documentation de déploiement lorsqu'elle existe
- documentation technique concernée

---

## 15.3 — Résultat attendu

À la fin de ce chapitre, le lecteur doit comprendre :

- comment conserver un historique Git lisible ;
- comment organiser les modifications ;
- comment préparer un commit cohérent ;
- pourquoi les validations doivent précéder la livraison ;
- comment Git contribue à la traçabilité du projet.

---

## 15.4 — Philosophie

Git constitue une partie importante de la mémoire technique du projet.

Un historique correctement structuré permet notamment de comprendre :

- ce qui a changé ;
- pourquoi le changement a été effectué ;
- quand il a été effectué ;
- dans quel contexte il a été réalisé.

L'objectif n'est pas de multiplier les commits, mais de conserver un historique compréhensible et exploitable.

---

## 15.5 — Cycle Git Général

Le cycle général peut être représenté ainsi :

```text
Besoin
   ↓
Analyse
   ↓
Modification
   ↓
Vérification
   ↓
Commit
   ↓
Push
   ↓
Déploiement si applicable
   ↓
Validation
   ↓
Documentation si nécessaire
```

# CHAPITRE 16 — PERFORMANCE & CORE WEB VITALS

## 16.1 — OBJECTIF

Le site doit offrir une expérience rapide, fluide et stable, en priorité sur smartphone.

La performance doit être considérée comme un critère :

UX ;
SEO ;
accessibilité ;
conversion ;
qualité technique.
## 16.2 — PRINCIPES

Les développements doivent limiter :

JavaScript inutile ;
ressources excessives ;
images trop lourdes ;
composants inutiles ;
déplacements de mise en page ;
temps d'attente perceptibles.

Les Core Web Vitals doivent être surveillés, notamment :

LCP ;
INP ;
CLS.

## 16.3 — VALIDATION

Les performances doivent être vérifiées après les modifications importantes à l'aide des outils appropriés.

Les seuils, méthodes de mesure et procédures détaillées sont définis dans les documents spécialisés du projet.

Une régression significative doit être analysée avant validation.

## 16.4 — RÈGLE DE NON-RÉGRESSION

Une amélioration fonctionnelle, visuelle ou SEO ne doit pas provoquer une dégradation injustifiée des performances.

Performance, UX et SEO doivent être considérés ensemble.

## 16.5 — RÉFÉRENCE DOCUMENTAIRE

Pour les règles détaillées de performance, se reporter aux documents spécialisés du projet, notamment ceux concernant :

Performance ;
Quality Gate ;
UX/UI ;
Responsive ;
SEO.

## 16.6 — RÈGLE FINALE

Le site doit être rapide, stable et performant dans des conditions réelles d'utilisation, avec une priorité donnée au mobile.

# CHAPITRE 17 — SEO & INDEXATION

Le référencement naturel est une fonction centrale du projet GH Épaviste.

Le site doit être conçu pour être :

- compréhensible par les moteurs de recherche
- facilement explorable
- correctement indexable
- techniquement cohérent
- utile pour les utilisateurs
- localement pertinent
- conforme aux règles définies dans `AI_RULES.md`

Le SEO ne doit jamais être traité comme une simple accumulation de mots-clés.

La priorité est :

**qualité réelle > pertinence > expérience utilisateur > cohérence technique > volume de pages.**

---

## 17.1 — OBJECTIF SEO

L'objectif du projet est de développer une présence organique forte pour GH Épaviste en Île-de-France.

Le site doit notamment pouvoir répondre aux recherches liées à :

- enlèvement d'épave
- épaviste
- enlèvement de véhicule
- véhicule hors d'usage
- enlèvement d'épave gratuit lorsque les conditions sont réunies
- épaviste par département
- épaviste par commune
- services locaux réellement proposés

Le contenu doit rester naturel et utile.

Il est interdit de créer des pages uniquement pour manipuler les moteurs de recherche.

---

## 17.2 — SOURCE DE VÉRITÉ SEO

Les règles SEO du projet sont définies par priorité dans les documents officiels.

Ordre de référence :

1. `AI_RULES.md`
2. `DECISIONS.md`
3. `CURRENT_TASK.md`
4. `PROJECT_CONTEXT.md`
5. `WORKFLOW.md`
6. `HANDOVER.md`
7. documents SEO spécialisés
8. autres documents du projet

En cas de contradiction :

**STOP.**

Ne pas choisir arbitrairement une règle.

---

## 17.3 — INDEXATION

Une page destinée à apparaître dans Google doit être techniquement indexable.

Avant de considérer une page comme SEO-ready, vérifier :

- réponse HTTP correcte
- absence de `noindex` involontaire
- canonical correcte
- contenu accessible
- HTML correctement rendu
- liens internes présents lorsque pertinents
- sitemap cohérent
- robots cohérent
- absence de blocage inutile

Une page accessible dans le navigateur n'est pas automatiquement une page correctement indexable.

---

## 17.4 — SITEMAP

Le sitemap doit représenter les URLs réellement importantes et indexables du site.

Il doit être :

- valide
- cohérent
- accessible
- stable
- sans URLs cassées
- sans doublons inutiles
- sans URLs interdites à l'indexation

Les URLs doivent provenir des sources de données officielles du projet.

Le sitemap ne doit jamais générer des URLs à partir d'une supposition.

---

## 17.5 — STABILITÉ DU SITEMAP

Les dates `lastModified` doivent être utilisées de manière cohérente.

Il est interdit d'utiliser inutilement :

```text
new Date()
```

# CHAPITRE 18 — ACCESSIBILITÉ (A11Y)

## 18.1 — OBJECTIF

L'accessibilité fait partie intégrante de la qualité du site.

L'interface doit pouvoir être utilisée par le plus grand nombre, notamment au clavier, avec différentes tailles d'écran et technologies d'assistance.

## 18.2 — PRINCIPES

Les développements doivent respecter notamment :

HTML sémantique ;
hiérarchie cohérente des titres ;
labels accessibles ;
navigation clavier ;
focus visible ;
contrastes suffisants ;
textes lisibles ;
boutons et liens clairement identifiables ;
alternatives textuelles lorsque nécessaires.

## 18.3 — FORMULAIRES ET INTERACTIONS

Les formulaires et composants interactifs doivent être compréhensibles et utilisables.

Les erreurs doivent être :

identifiables ;
compréhensibles ;
associées aux champs concernés ;
utilisables sur mobile et au clavier.

## 18.4 — VALIDATION

L'accessibilité doit être contrôlée lors des modifications importantes avec les outils et méthodes prévus par le projet.

Les règles détaillées et critères de contrôle sont définis dans les documents spécialisés.

Toute régression importante doit être corrigée avant validation.

## 18.5 — RÈGLE FINALE

L'accessibilité n'est pas une étape facultative : elle fait partie de la Definition of Done du projet.

# CHAPITRE 19 — SÉCURITÉ

## 19.1 — OBJECTIF

La sécurité doit être intégrée dès la conception et maintenue pendant toute la durée de vie du projet.

Les données utilisateurs, les formulaires, les API, les variables d'environnement et l'infrastructure doivent être protégés.

## 19.2 — PRINCIPES

Les développements doivent notamment respecter :

validation des entrées ;
contrôle des données utilisateur ;
protection contre les injections ;
gestion correcte des erreurs ;
protection des secrets ;
principe du moindre privilège ;
dépendances maintenues ;
configuration sécurisée de la production.

Les secrets et clés privées ne doivent jamais être commités dans Git ou exposés dans le code public.

## 19.3 — CONTACT ET DONNÉES

Les formulaires et traitements de données doivent collecter uniquement ce qui est nécessaire au fonctionnement du service.

Les données ne doivent pas être stockées ou exposées inutilement.

Toute modification concernant l'envoi, le traitement ou le stockage des données doit être contrôlée avant publication.

## 19.4 — VALIDATION

Les contrôles de sécurité doivent être réalisés lorsque le changement le justifie.

Les procédures détaillées concernant notamment :

XSS ;
headers ;
CSP ;
CORS ;
webhooks ;
validation des entrées ;
dépendances ;
sécurité des API ;

doivent rester dans les documents spécialisés du projet.

## 19.5 — INCIDENT

Toute vulnérabilité ou anomalie de sécurité importante doit entraîner :

STOP → analyse → correction → validation → traçabilité.

Aucune vulnérabilité critique connue ne doit être volontairement ignorée avant une mise en production.

## 19.6 — RÈGLE FINALE

La sécurité prime sur la rapidité de livraison et doit être vérifiée avant toute publication lorsque le changement présente un risque.

# CHAPITRE 20 — QUALITÉ DU CODE & MAINTENABILITÉ

La qualité du code est une exigence permanente du projet GH Épaviste.

Le code doit être :

- compréhensible
- typé
- cohérent
- testable
- maintenable
- sécurisé
- documenté lorsque nécessaire
- compatible avec l'architecture du projet

Le code fonctionnel mais difficile à maintenir n'est pas considéré comme suffisamment qualitatif.

---

## 20.1 — PRINCIPES

Chaque modification doit rechercher :

- simplicité
- clarté
- cohérence
- réutilisabilité raisonnable
- faible complexité
- faible duplication
- comportement prévisible

Éviter les solutions inutilement complexes.

---

## 20.2 — TYPESCRIPT

Le projet utilise TypeScript.

Le typage doit être strict autant que possible.

Éviter :

```typescript
any
```

# CHAPITRE 21 — TESTS & VALIDATION

## 21.1 — OBJECTIF

Les tests permettent de vérifier que les modifications fonctionnent réellement et qu'elles n'introduisent pas de régression.

## 21.2 — VALIDATION TECHNIQUE

Selon la nature de la modification, les contrôles peuvent inclure :

lint ;
TypeScript ;
build ;
tests unitaires ;
tests d'intégration ;
tests E2E ;
validation SEO ;
validation accessibilité ;
validation performance.

Tous les tests ne sont pas obligatoires pour chaque modification : ils doivent être adaptés au risque et au périmètre du changement.

## 21.3 — PREUVE RÉELLE

Une commande ou un test ne peut être déclaré réussi que s'il a réellement été exécuté.

Il est interdit de :

simuler un résultat ;
inventer une sortie terminal ;
déclarer un build réussi sans l'avoir exécuté ;
présenter une vérification théorique comme une validation réelle.

## 21.4 — RÉGRESSION

Après une modification importante, vérifier que les fonctionnalités existantes restent opérationnelles.

Une régression critique doit entraîner :

STOP → correction → nouvelle validation.

## 21.5 — DOCUMENTS DE RÉFÉRENCE

Les procédures détaillées de tests et de Quality Gate doivent rester dans les documents spécialisés, notamment :

docs/QUALITY_GATE.md
documentation de testing ;
documentation technique concernée.

Le README conserve uniquement les principes fondamentaux.

## 21.6 — RÈGLE FINALE

Un changement n'est terminé que lorsque les validations réellement nécessaires ont été exécutées et que leurs résultats sont connus.

# CHAPITRE 22 — DÉPLOIEMENT & PRODUCTION

## 22.1 — OBJECTIF

Chaque déploiement doit être :

* contrôlé
* reproductible
* vérifiable
* réversible
* sans régression fonctionnelle, SEO, UX, accessibilité ou sécurité

Un déploiement réussi signifie que la version réellement en production fonctionne correctement.

---

## 22.2 — AVANT DÉPLOIEMENT

Avant tout déploiement, vérifier :

* `AI_RULES.md`
* `CURRENT_TASK.md`
* `PROJECT_CONTEXT.md`
* `HANDOVER.md`
* `DECISIONS.md`
* `WORKFLOW.md`
* les documents spécialisés concernés

Vérifier également :

* `git status`
* les fichiers modifiés
* le diff
* les changements prévus
* l'absence de fichiers temporaires ou secrets

---

## 22.3 — VALIDATION TECHNIQUE

Avant production, les contrôles nécessaires doivent réussir :

```text
Lint
TypeScript
Build
Tests
Audit SEO
Audit légal
Audit accessibilité
Audit responsive
Audit performance
Audit duplication
```

Un contrôle critique en échec = **STOP**.

Aucune affirmation de réussite sans résultat réel.

---

## 22.4 — BUILD DE PRODUCTION

Le build doit être exécuté dans les mêmes conditions que celles prévues pour la production.

Vérifier notamment :

* absence d'erreur TypeScript
* absence d'erreur Next.js
* génération correcte des pages
* routes valides
* sitemap valide
* métadonnées présentes
* JSON-LD valide
* variables d'environnement nécessaires
* absence de contenu involontairement supprimé

---

## 22.5 — VARIABLES D'ENVIRONNEMENT

Les secrets et clés API ne doivent jamais être :

* commités dans Git
* écrits directement dans le code
* affichés dans les logs
* ajoutés aux documents publics
* exposés côté client sans nécessité

Les variables de production doivent être configurées dans l'environnement approprié.

---

## 22.6 — DÉPLOIEMENT VERCEL

Le déploiement doit être surveillé jusqu'à son état final.

Après déploiement :

1. vérifier le statut Vercel
2. vérifier l'URL de production
3. tester les pages critiques
4. tester les CTA
5. tester le formulaire de contact
6. vérifier les URLs importantes
7. vérifier sitemap et robots
8. vérifier les données structurées
9. vérifier les performances
10. vérifier les erreurs éventuelles

**Deploy Ready ≠ validation fonctionnelle complète.**

---

## 22.7 — VALIDATION POST-DÉPLOIEMENT

La production doit être testée après chaque modification importante.

Contrôler notamment :

* page d'accueil
* pages services
* pages départements
* pages communes
* navigation
* menu mobile
* téléphone
* formulaire
* footer
* liens internes
* pages 404
* responsive mobile
* responsive desktop
* SEO technique

---

## 22.8 — SEO APRÈS DÉPLOIEMENT

Après une modification SEO importante, vérifier :

* `robots.txt`
* `sitemap.xml`
* canonical
* indexabilité
* URLs
* métadonnées
* H1
* JSON-LD
* liens internes
* absence de 404
* absence de redirections incorrectes

Google Search Console doit être utilisé pour confirmer l'état réel lorsque nécessaire.

---

## 22.9 — ROLLBACK

Si une régression critique apparaît :

**STOP → identifier → corriger ou rollback.**

Un rollback doit être privilégié lorsque la production présente :

* erreur critique
* pages indisponibles
* formulaire cassé
* problème SEO majeur
* faille de sécurité
* forte régression UX
* build ou runtime instable

Ne jamais conserver volontairement une production cassée pour terminer une fonctionnalité secondaire.

---

## 22.10 — TRAÇABILITÉ

Chaque changement important doit être traçable.

Selon l'importance du changement :

* commit Git clair
* mise à jour du `CHANGELOG.md`
* mise à jour de `HANDOVER.md`
* mise à jour de `CURRENT_TASK.md`
* mise à jour des décisions si nécessaire

La documentation doit refléter l'état réel du projet.

---

## 22.11 — DÉPLOIEMENT AVEC IA

Une IA ne doit jamais déclarer :

> « Déploiement réussi »

sans preuve réelle.

Elle doit distinguer :

* code modifié
* build local réussi
* commit créé
* déploiement lancé
* déploiement terminé
* production réellement vérifiée

Chaque étape doit être explicitement identifiée.

---

## 22.12 — RÈGLE DE PRODUCTION

La production est la référence réelle du site.

Une modification n'est considérée comme terminée que lorsque :

* le code est validé
* le build est validé
* le déploiement est terminé
* la production est accessible
* les fonctionnalités critiques fonctionnent
* aucune régression critique n'est détectée

---

## 22.13 — CHECKLIST FINALE

```text
[ ] Documentation consultée
[ ] Git status vérifié
[ ] Diff vérifié
[ ] Lint réussi
[ ] TypeScript réussi
[ ] Build réussi
[ ] Tests réussis
[ ] Audits nécessaires réussis
[ ] Variables d'environnement vérifiées
[ ] Déploiement terminé
[ ] Production accessible
[ ] Pages critiques testées
[ ] Formulaire testé
[ ] SEO vérifié
[ ] Responsive vérifié
[ ] Aucune régression critique
[ ] Documentation mise à jour
```

---

## 22.14 — RÈGLE ABSOLUE

**Un déploiement n'est pas une fin de tâche.**

**La tâche est terminée uniquement après validation réelle de la production.**

# CHAPITRE 23 — MONITORING, MAINTENANCE & INCIDENTS

## 23.1 — OBJECTIF

Le site doit être surveillé après sa mise en production.

La maintenance doit permettre de :

* détecter les erreurs
* prévenir les régressions
* maintenir les performances
* préserver le SEO
* maintenir la sécurité
* garantir la disponibilité
* conserver une bonne expérience utilisateur

---

## 23.2 — SURVEILLANCE

Les éléments importants à surveiller sont :

* disponibilité du site
* erreurs serveur
* erreurs JavaScript
* erreurs de formulaire
* performances
* Core Web Vitals
* indexation Google
* erreurs 404
* redirections
* sitemap
* robots.txt
* données structurées
* sécurité
* certificats HTTPS
* domaine et DNS
* emails du formulaire

---

## 23.3 — GOOGLE SEARCH CONSOLE

Search Console doit être utilisé pour surveiller :

* indexation
* pages exclues
* erreurs d'exploration
* anomalies sitemap
* problèmes mobiles
* Core Web Vitals
* résultats enrichis
* actions manuelles éventuelles

Une anomalie doit être analysée avant toute modification.

**Une page non indexée n'est pas automatiquement une erreur.**

---

## 23.4 — PERFORMANCE

Les performances doivent être surveillées dans le temps.

Contrôler notamment :

* LCP
* INP
* CLS
* poids des pages
* images
* JavaScript
* CSS
* polices
* temps de chargement mobile

Une optimisation ne doit jamais dégrader :

* accessibilité
* SEO
* UX
* conversion
* stabilité visuelle

---

## 23.5 — MAINTENANCE TECHNIQUE

La maintenance comprend notamment :

* mise à jour des dépendances
* vérification des vulnérabilités
* nettoyage du code inutilisé
* vérification TypeScript
* vérification ESLint
* vérification du build
* contrôle des routes
* contrôle des composants
* contrôle des variables d'environnement

Toute mise à jour importante doit être testée avant production.

---

## 23.6 — MAINTENANCE SEO

Après chaque modification importante, vérifier :

* URLs
* canonical
* sitemap
* robots
* métadonnées
* H1
* liens internes
* JSON-LD
* contenu
* indexabilité

Ne jamais supprimer ou renommer une URL importante sans analyser ses conséquences SEO.

---

## 23.7 — DÉTECTION DES INCIDENTS

Un incident peut être :

* site indisponible
* page cassée
* formulaire hors service
* erreur serveur
* erreur JavaScript critique
* problème de sécurité
* perte de données
* problème DNS
* problème email
* forte dégradation des performances
* régression SEO importante

Chaque incident doit être traité selon son niveau de gravité.

---

## 23.8 — PRIORITÉ DES INCIDENTS

### CRITIQUE

Exemples :

* site totalement inaccessible
* faille de sécurité importante
* perte majeure de fonctionnalité
* formulaire principal inutilisable

**Action immédiate.**

### MAJEUR

Exemples :

* plusieurs pages importantes cassées
* problème SEO important
* forte dégradation des performances

**Correction prioritaire.**

### MINEUR

Exemples :

* problème visuel limité
* petite anomalie non bloquante
* amélioration UX

**Correction planifiée.**

---

## 23.9 — PROCÉDURE D'INCIDENT

En cas d'incident :

```text
1. Détecter
2. Confirmer
3. Évaluer la gravité
4. Identifier la cause
5. Stopper l'aggravation
6. Corriger ou rollback
7. Tester
8. Vérifier la production
9. Documenter
10. Prévenir la récidive
```

Ne jamais modifier plusieurs éléments sans comprendre la cause lorsque cela risque d'aggraver l'incident.

---

## 23.10 — ROLLBACK

Lorsqu'une modification récente est clairement responsable d'un problème critique :

**Rollback avant optimisation secondaire.**

Le retour à une version stable est préférable à une production instable.

Après rollback :

* vérifier la production
* identifier la cause
* documenter l'incident
* corriger dans un environnement contrôlé
* retester avant nouveau déploiement

---

## 23.11 — JOURNAL DES CHANGEMENTS

Les changements importants doivent être documentés dans :

* `CHANGELOG.md`
* `HANDOVER.md`
* `DECISIONS.md` si une décision importante a été prise

La documentation doit permettre à une autre IA ou à un développeur de comprendre :

* ce qui a changé
* pourquoi
* quand
* avec quel résultat
* quelles vérifications ont été effectuées

---

## 23.12 — MAINTENANCE AVEC IA

Une IA doit :

* lire la documentation avant intervention
* comprendre l'état actuel
* éviter les modifications inutiles
* conserver les règles existantes
* produire des preuves de validation
* signaler toute incertitude
* respecter les règles de STOP

Elle ne doit jamais :

* inventer un résultat
* supprimer une protection sans justification
* modifier un Golden File automatiquement
* ignorer une erreur
* déclarer un problème résolu sans test

---

## 23.13 — MAINTENANCE PRÉVENTIVE

La maintenance doit être préventive et non uniquement corrective.

À surveiller régulièrement :

```text
[ ] Disponibilité
[ ] Search Console
[ ] Sitemap
[ ] Erreurs 404
[ ] Performances
[ ] Sécurité
[ ] Dépendances
[ ] Formulaire
[ ] Emails
[ ] Responsive
[ ] Accessibilité
[ ] SEO
[ ] Git / documentation
```

---

## 23.14 — RÈGLE ABSOLUE

**Un site professionnel n'est jamais réellement “terminé”.**

Il doit être :

**surveillé → testé → maintenu → documenté → amélioré.**

Toute amélioration doit préserver les acquis existants.

# CHAPITRE 24 — DOCUMENTATION, GOUVERNANCE & CONTINUITÉ

## 24.1 — OBJECTIF

La documentation garantit la continuité, la compréhension et la maintenabilité du projet GH Épaviste.

Elle doit permettre à un développeur ou à un agent IA de reprendre le projet sans dépendre uniquement de la mémoire d'une personne ou d'une session précédente.

---

## 24.2 — HIÉRARCHIE DOCUMENTAIRE

Les documents du projet ont des responsabilités différentes.

Ordre de priorité :

1. `AI_RULES.md`
2. `DECISIONS.md`
3. `CURRENT_TASK.md`
4. `WORKFLOW.md`
5. documents spécialisés
6. `HANDOVER.md`
7. `README.md` comme documentation générale et point d'entrée

En cas de contradiction, la source ayant la priorité la plus élevée prévaut.

---

## 24.3 — README

Le `README.md` présente :

* le projet ;
* son architecture ;
* son fonctionnement général ;
* ses règles essentielles ;
* ses commandes principales ;
* son workflow général ;
* ses critères de qualité ;
* les documents de référence.

Le README ne doit pas devenir une copie intégrale des documents spécialisés.

---

## 24.4 — DOCUMENTS DE GOUVERNANCE

Les fichiers de gouvernance principaux comprennent notamment :

* `AI_RULES.md`
* `CURRENT_TASK.md`
* `PROJECT_CONTEXT.md`
* `HANDOVER.md`
* `PROJECT_ROADMAP.md`
* `WORKFLOW.md`
* `V4_REFERENCE.md`

Ils doivent rester cohérents entre eux.

---

## 24.5 — DOCUMENTS SPÉCIALISÉS

Le dossier `/docs` contient les spécifications et procédures détaillées du projet.

Exemples :

* UX/UI ;
* Design System ;
* Responsive ;
* Performance ;
* SEO ;
* Accessibilité ;
* Quality Gate ;
* Conversion ;
* Architecture ;
* Déploiement ;
* Tests ;
* Sécurité.

Le README doit orienter vers ces documents plutôt que recopier inutilement leurs procédures détaillées.

---

## 24.6 — SOURCE DE VÉRITÉ

Chaque information importante doit avoir une source de vérité clairement identifiable.

Une information ne doit pas être maintenue indépendamment dans plusieurs fichiers lorsqu'une duplication peut provoquer une désynchronisation.

Lorsqu'une règle change, identifier son document source avant de modifier les autres documents.

---

## 24.7 — CONTINUITÉ ENTRE SESSIONS

`HANDOVER.md` permet de transmettre :

* l'état actuel du projet ;
* les tâches terminées ;
* les tâches restantes ;
* les décisions importantes ;
* les blocages ;
* les validations ;
* les prochaines étapes.

Il doit être mis à jour lorsqu'une étape importante du projet est terminée.

---

## 24.8 — GOUVERNANCE IA

Les règles impératives destinées aux agents IA sont définies principalement dans :

**`AI_RULES.md`**

Le README présente uniquement les principes généraux nécessaires à la compréhension du fonctionnement du projet.

Les règles détaillées, interdictions, procédures STOP et exigences de preuve doivent rester dans leur document de gouvernance dédié.

---

## 24.9 — TRAÇABILITÉ

Les changements importants doivent être traçables via :

* Git ;
* commits explicites ;
* `CHANGELOG.md` lorsque requis ;
* décisions documentées ;
* rapports de validation lorsque nécessaires.

Aucune validation ne doit être déclarée sans preuve réelle.

---

## 24.10 — RÉFÉRENCE PAGEBUILDER V4 ET NON-RÉGRESSION

La référence **PageBuilder V4** doit être respectée pour les modifications structurelles importantes.

La référence officielle est :

**`V4_REFERENCE.md`**

La page **Levallois-Perret** constitue une référence de qualité du projet.

Les modifications importantes doivent vérifier l'absence de régression par rapport à cette référence.

Pour les critères et la procédure détaillée, se reporter à :

* **Chapitre 5.6 — Référence PageBuilder V4**
* **`V4_REFERENCE.md`**

Aucune génération massive ou refonte structurelle ne doit contourner cette vérification.

---

## 24.11 — DOCUMENTATION DES DÉCISIONS

Les décisions importantes doivent être conservées dans :

**`docs/DECISIONS.md`**

Une décision importante doit préciser, lorsque nécessaire :

* le problème ;
* les options étudiées ;
* la décision retenue ;
* la justification ;
* les conséquences.

---

## 24.12 — CHANGEMENTS MAJEURS

Les changements majeurs concernant notamment :

* UX/UI ;
* SEO ;
* architecture ;
* sécurité ;
* performances ;
* données ;
* génération de pages ;

doivent être documentés selon les règles du projet.

Une modification importante ne doit pas être réalisée sans vérifier ses impacts sur les documents concernés.

---

## 24.13 — DOCUMENTATION ET MAINTENABILITÉ

La documentation doit rester :

* concise ;
* exacte ;
* à jour ;
* non contradictoire ;
* facilement navigable.

Éviter la duplication excessive.

**Une règle doit idéalement avoir une source de vérité unique.**

---

## 24.14 — CHECKLIST DE CONTINUITÉ

Avant de considérer une étape importante comme terminée :

* `AI_RULES.md` respecté ;
* `CURRENT_TASK.md` cohérent ;
* `HANDOVER.md` actualisé si nécessaire ;
* décisions importantes documentées ;
* références PageBuilder V4 respectées ;
* validations réelles disponibles ;
* changements majeurs traçables ;
* documents impactés identifiés.

---

## 24.15 — RÈGLE FINALE

La documentation fait partie intégrante de la qualité du projet.

**Un projet maintenable doit pouvoir être compris, vérifié, repris et poursuivi sans dépendre de la mémoire d'une seule personne ou d'une seule IA.**

# CHAPITRE 25 — QUALITY GATE FINAL & DEFINITION OF DONE

## 25.1 — OBJECTIF

Aucune tâche importante ne doit être considérée comme terminée uniquement parce que le code fonctionne.

Une tâche est terminée lorsque :

* le besoin est respecté
* les règles du projet sont respectées
* les tests sont réussis
* les audits nécessaires sont réussis
* aucune régression critique n'est détectée
* la production est validée lorsque nécessaire
* la documentation est à jour

---

## 25.2 — QUALITY GATE

Avant de considérer une modification comme terminée :

```text id="qf8w2a"
[ ] Objectif respecté
[ ] AI_RULES respecté
[ ] CURRENT_TASK respecté
[ ] Architecture respectée
[ ] TypeScript valide
[ ] Lint valide
[ ] Build valide
[ ] Tests valides
[ ] SEO vérifié
[ ] Accessibilité vérifiée
[ ] Responsive vérifié
[ ] Performance vérifiée
[ ] Sécurité vérifiée
[ ] Contenu légal vérifié
[ ] Duplication vérifiée
[ ] Régression vérifiée
[ ] Production vérifiée si nécessaire
[ ] Documentation mise à jour
```

---

## 25.3 — VALIDATION RÉELLE

Les déclarations suivantes ne doivent jamais être faites sans preuve :

* « testé »
* « corrigé »
* « sécurisé »
* « optimisé »
* « déployé »
* « validé »
* « sans erreur »

Une validation doit être basée sur un résultat réel.

---

## 25.4 — RÈGLE STOP

Si un contrôle critique échoue :

**STOP.**

Ne pas :

* continuer une nouvelle phase
* générer de nouvelles pages
* masquer l'erreur
* contourner le contrôle
* déclarer la tâche terminée

Il faut d'abord comprendre et résoudre le problème.

---

## 25.5 — DEFINITION OF DONE

Une tâche est **DONE** uniquement lorsque :

```text id="t8q1zn"
Besoin
  ↓
Implémentation
  ↓
Validation technique
  ↓
Audits
  ↓
Tests
  ↓
Contrôle des régressions
  ↓
Documentation
  ↓
Production si nécessaire
  ↓
Validation finale
```

---

## 25.6 — QUALITÉ AVANT QUANTITÉ

Le projet doit privilégier :

**qualité > quantité**

Il vaut mieux :

* moins de pages mais meilleures
* moins de fonctionnalités mais fiables
* moins de changements mais maîtrisés
* moins de code mais maintenable

que multiplier les éléments sans validation suffisante.

---

## 25.7 — EXPÉRIENCE UTILISATEUR

La validation finale doit toujours considérer l'utilisateur réel.

Le site doit rester :

* rapide
* clair
* accessible
* responsive
* lisible
* rassurant
* simple à utiliser
* orienté conversion

Le score d'un outil ne remplace jamais l'expérience réelle.

---

## 25.8 — SEO ET INDEXATION

Une modification SEO doit être évaluée selon :

* indexabilité
* contenu
* structure
* intention de recherche
* liens internes
* données structurées
* performance
* expérience utilisateur
* absence de duplication

La quantité de pages indexables ne doit jamais devenir l'objectif principal.

---

## 25.9 — SÉCURITÉ ET LÉGAL

Avant validation finale, vérifier que la modification ne crée pas :

* exposition de secrets
* faille évidente
* collecte inutile de données
* contenu légal incorrect
* affirmation réglementaire non vérifiée
* confusion concernant l'activité ou les agréments

Les contraintes légales du projet restent obligatoires à chaque phase.

---

## 25.10 — DOCUMENTATION FINALE

Après un changement important, vérifier que les documents concernés reflètent l'état réel :

```text id="0s5w5g"
AI_RULES.md
CURRENT_TASK.md
HANDOVER.md
DECISIONS.md
CHANGELOG.md
Documentation /docs
```

Une documentation obsolète peut provoquer des erreurs lors des prochaines sessions IA.

---

## 25.11 — AUDIT FINAL

Avant une release importante :

```text id="1s6q5x"
CODE
SEO
LEGAL
ACCESSIBILITY
RESPONSIVE
PERFORMANCE
SECURITY
DUPLICATION
TESTS
PRODUCTION
DOCUMENTATION
```

Chaque domaine doit être validé ou explicitement déclaré hors périmètre.

---

## 25.12 — ÉTAT FINAL

Un projet peut être déclaré terminé lorsque :

* les objectifs de la phase sont atteints
* les validations sont réussies
* les erreurs critiques sont absentes
* les régressions sont contrôlées
* la documentation est cohérente
* l'état de production est connu
* les prochaines étapes sont clairement identifiées

---

## 25.13 — CHECKLIST FINALE DU PROJET

```text id="a9n3kd"
[ ] Fonctionnel
[ ] Technique
[ ] SEO
[ ] Accessibilité
[ ] Responsive
[ ] Performance
[ ] Sécurité
[ ] Légal
[ ] Tests
[ ] Production
[ ] Documentation
[ ] Maintenance
```

---

## 25.14 — PHILOSOPHIE DU PROJET

Le projet GH Épaviste doit être développé selon quatre principes :

**Construire proprement.**

**Tester réellement.**

**Déployer prudemment.**

**Améliorer continuellement.**

---

## 25.15 — RÈGLE FINALE

**Pas de preuve = pas de validation.**

**Pas de validation = pas de nouvelle phase.**

**Pas de qualité = pas de déploiement.**

**La qualité réelle du site passe avant la vitesse de développement.**
