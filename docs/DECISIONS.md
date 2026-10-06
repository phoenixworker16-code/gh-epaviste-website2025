# ==========================================================

# DECISIONS.md

# GH ÉPAVISTE

# JOURNAL OFFICIEL DES DÉCISIONS PROJET

# VERSION OFFICIELLE

# ==========================================================

# Objectif

Le fichier `DECISIONS.md` contient l'ensemble des décisions importantes prises durant l'évolution du projet GH Épaviste.

Son objectif est de conserver :

* les choix techniques ;
* les choix métier ;
* les choix SEO ;
* les choix UX/UI ;
* les choix stratégiques.

Une décision validée devient une référence pour les futures évolutions du projet.

La hiérarchie documentaire du projet est définie exclusivement dans `AI_RULES.md`, section 55.

---

# Philosophie

Chaque décision importante doit avoir une raison claire.

Le principe est :

**Decide. Document. Preserve.**

Une décision non documentée peut être remise en question inutilement par un futur intervenant ou une intelligence artificielle.

---

# Format d'une décision

Chaque décision utilise le format suivant :

## DEC-XXX

Date :

Statut :

Sujet :

Décision :

Contexte :

Raison :

Impact :

---

# DEC-001

## Statut

Validée

## Sujet

Positionnement métier GH Épaviste concernant l'agrément VHU.

## Décision

GH Épaviste ne doit jamais être présenté comme un centre VHU agréé.

GH Épaviste réalise un service professionnel d'enlèvement d'épaves et travaille avec des partenaires disposant des agréments nécessaires.

## Contexte

L'entreprise ne possède pas son propre agrément VHU.

Certains véhicules peuvent être transférés vers des partenaires agréés VHU afin de suivre les procédures réglementaires adaptées.

## Raison

Garantir une communication transparente et conforme à la réalité de l'activité.

## Impact

Interdiction d'utiliser dans les contenus :

* « GH Épaviste agréé VHU »
* « Centre VHU GH Épaviste »
* « Notre agrément VHU »

Formulations autorisées :

* Service d'enlèvement d'épaves
* Intervention rapide pour véhicules hors d'usage
* Travail en collaboration avec des partenaires agréés VHU

---

# DEC-002

## Statut

Validée

## Sujet

Architecture technique du site.

## Décision

Le projet utilise Next.js avec App Router et TypeScript.

## Raison

Permettre :

* performances élevées ;
* SEO optimisé ;
* architecture maintenable ;
* évolution future.

## Impact

Toute nouvelle fonctionnalité doit respecter :

* Next.js App Router ;
* TypeScript ;
* Server Components par défaut.

---

# DEC-003

## Statut

Validée

## Sujet

Hébergement du projet.

## Décision

Le déploiement utilise Vercel.

## Raison

Compatibilité avec Next.js et optimisation du déploiement.

## Impact

Les évolutions doivent rester compatibles avec l'environnement Vercel.

---

# DEC-004

## Statut

Validée

## Sujet

Stratégie SEO locale.

## Décision

Le projet utilise une stratégie basée sur des pages locales optimisées.

Objectif :

Être visible sur les recherches liées à l'enlèvement d'épaves en Île-de-France.

## Impact

Toute création de page locale doit respecter les règles SEO, qualité, contenu, UX et validation applicables définies dans les documents officiels du projet, notamment `docs/QUALITY_GATE.md` et les documents spécialisés concernés.

---

# DEC-005

## Statut

Validée

## Sujet

Qualité documentaire du projet.

## Décision

Les règles et références du projet sont centralisées dans les documents officiels.

Références principales :

* `AI_RULES.md`
* `PROJECT_CONTEXT.md`
* `CURRENT_TASK.md`
* `docs/DECISIONS.md`
* `docs/WORKFLOW.md`
* `docs/QUALITY_GATE.md`
* `docs/DESIGN_SYSTEM.md`

Les documents spécialisés applicables doivent également être consultés lorsque la mission les concerne.

## Impact

Toute IA ou développeur doit respecter la hiérarchie documentaire définie dans `AI_RULES.md` et consulter les documents applicables avant toute modification.

---

# DEC-006

## Statut

Validée

## Sujet

Identité de marque.

## Décision

Toutes les communications doivent représenter GH Épaviste comme un service professionnel, fiable et transparent.

## Impact

Les contenus doivent privilégier :

* confiance ;
* clarté ;
* professionnalisme ;
* informations vérifiables.

---

# DEC-007

## Statut

Validée

## Sujet

Formulaire de contact.

## Décision

Le formulaire doit rester simple et orienté conversion.

Structure privilégiée :

* informations nécessaires ;
* message libre ;
* envoi vers le contact professionnel.

## Impact

Éviter les formulaires trop longs pouvant réduire les demandes clients.

---

# DEC-008

## Statut

Validée

## Sujet

Utilisation des intelligences artificielles.

## Décision

Les IA sont utilisées comme assistants techniques contrôlés.

## Raison

Accélérer le développement tout en conservant la qualité.

## Impact

Toute modification réalisée avec l'aide d'une IA doit respecter :

* `AI_RULES.md`
* `docs/QUALITY_GATE.md`
* les validations obligatoires définies par la mission et le workflow applicable.

---

# Nouvelles décisions

Les futures décisions importantes doivent être ajoutées ici.

Format :

## DEC-XXX

Date :

Statut :

Sujet :

Décision :

Raison :

Impact :

---

# Règles pour les IA

Toute IA travaillant sur GH Épaviste doit :

* respecter les décisions validées dans `DECISIONS.md` ;
* appliquer les règles de consultation documentaire définies dans `AI_RULES.md` ;
* ne pas revenir sur une décision validée sans justification documentée et autorisation appropriée ;
* proposer une nouvelle décision lorsqu'un changement stratégique nécessite de modifier une décision existante.

---

# Critères de qualité

Une bonne décision doit être :

* claire ;
* justifiée ;
* documentée ;
* cohérente avec le projet ;
* durable.

---

# Anti-Patterns

* modifier un choix validé sans analyse ;
* ignorer une contrainte métier ;
* inventer des informations ;
* supprimer une décision historique.

---

# Principe final

`DECISIONS.md` protège la mémoire stratégique du projet GH Épaviste.

Il garantit que les choix importants restent compréhensibles et respectés par toutes les personnes et intelligences artificielles participant à l'évolution du projet.

# Fin du DECISIONS.md

# ==========================================================
