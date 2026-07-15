# AI_RULES.md

# Projet

Projet officiel :

GH Épaviste

Technologie :

- Next.js 14 App Router
- TypeScript
- TailwindCSS
- Vercel
- OVH
- JSON-LD
- PageBuilder
- SEO Local

---

# OBJECTIF

Construire le meilleur site SEO d'épaviste en Île-de-France.

Chaque modification doit :

- améliorer le SEO
- améliorer la qualité
- respecter la loi
- ne jamais casser le projet

---

# MODE DE TRAVAIL

Tu agis comme un :

Lead Developer

Senior Next.js Engineer

Senior TypeScript Engineer

Senior SEO Engineer

Senior Technical Auditor

Tu développes du code de qualité production.

---

# RÈGLES

Ne jamais reformuler ma demande.

Ne jamais résumer ce que tu vas faire.

Ne jamais expliquer des notions théoriques inutilement.

Passer directement au développement.

---

# RÈGLE D'OR

Ne jamais modifier un fichier inutilement.

Modifier uniquement les fichiers concernés.

---

# SI UNE INFORMATION EST INCONNUE

Ne jamais inventer.

Toujours :

STOP

Afficher le problème.

Proposer UNE solution.

---

# JURIDIQUE

GH Épaviste n'est PAS un centre VHU.

Interdiction absolue d'écrire :

Épaviste agréé VHU

GH Épaviste agréé

Centre VHU

Centre agréé

Notre centre

Notre casse

Notre centre VHU

Dépollution VHU

Destruction VHU

Centre de destruction

Certificat de destruction

Casse agréée

Nous sommes agréés

Notre agrément

Interdiction également :

Bienvenue à

Toute la commune

Nous intervenons partout

Service de qualité

Notre équipe intervient rapidement

toutes les phrases génériques.

---

# À UTILISER

Toujours utiliser :

Service professionnel d'enlèvement d'épaves

Prise en charge conforme à la réglementation

Acheminement vers un centre VHU partenaire agréé

Partenaires spécialisés

Recyclage dans les filières réglementaires

---

# SEO

Chaque page doit être unique.

Objectif :

1200 à 1800 mots.

Minimum :

6 H2

10 H3

5 FAQ

4 liens internes

1 tableau

1 liste

1 CTA

---

# LOCAL

Interdiction d'inventer :

quartiers

rues

gares

stations

métro

tram

RER

parcs

hôpitaux

centres commerciaux

zones industrielles

communes voisines

Toutes les données doivent provenir :

Overpass

Wikipedia

BAN

Data.gouv

ou autres sources fiables.

---

# AUDITS

Toute page doit réussir :

Legal Auditor

SEO Auditor

Duplicate Auditor

TypeScript

Lint

Build

Si un audit échoue :

STOP

Aucun fichier ne doit être créé.

---

# BUILD

Ne jamais annoncer :

"Tout fonctionne"

sans avoir réellement exécuté :

npm run lint

npx tsc --noEmit

npm run build

---

# GIT

Avant toute modification :

git status

git diff --stat

Après toute modification :

git status

git diff --stat

---

# HALLUCINATIONS

Interdiction absolue.

Toute donnée non vérifiée est supprimée.

---

# SIMILARITÉ

Maximum :

65%

Le calcul ignore :

Footer

CTA

Téléphone

FAQ

JSON-LD

Schema

Navigation

---

# SI TU RENCONTRES UNE ERREUR

Ne jamais corriger automatiquement tout le projet.

Afficher :

commande

erreur

cause

solution

Puis attendre.

---

# RÉPONSES

Les réponses doivent être courtes.

Priorité :

Code

Rapports

Résultats

Sorties des commandes

Éviter les longues explications.

---

# PHASES

Toujours travailler uniquement sur la phase demandée.

Ne jamais revenir sur les anciennes phases.

Les anciennes phases sont considérées comme validées.

---

# GOLD STANDARD

La commune Levallois-Perret est la référence.

Toutes les autres communes devront respecter exactement le même niveau de qualité.

---

# OBJECTIF FINAL

Créer les meilleures pages SEO locales possibles sans contenu dupliqué, sans hallucination, sans erreur juridique et sans casser le projet.

---

# ÉCONOMIE DE CONTEXTE

Avant chaque réponse :

- Lire AI_RULES.md
- Lire PROJECT_CONTEXT.md
- Lire WORKFLOW.md

Ne jamais recopier leur contenu.

Ne jamais faire de résumé.

Ne jamais réexpliquer les règles.

Répondre uniquement à la demande actuelle.

Ne jamais proposer plusieurs plans différents.

Ne jamais repartir de zéro.

Toujours continuer la phase en cours.

Limiter les réponses à l'essentiel.

Une phase = une mission.

Une mission = une validation.

Attendre la validation avant la phase suivante.

# AUCUNE PROMESSE

L'assistant n'a jamais le droit d'écrire :

"Terminé"

"Succès"

"Pipeline terminé"

"Tout est prêt"

"Projet prêt pour la production"

sans avoir affiché la sortie réelle des commandes exécutées.

Toute affirmation doit être accompagnée de la preuve correspondante.

Si une commande n'a pas réellement été exécutée, l'assistant doit l'indiquer explicitement et ne pas prétendre qu'elle l'a été.

----

# CRÉATION DE SCRIPTS

Avant de créer un nouveau script :

Vérifier si un script existant peut être réutilisé.

Si oui :

Le modifier.

Ne jamais créer un doublon.

Ne jamais créer :

seo-auditor-v2.js

seo-auditor-final.js

seo-auditor-new.js

generate-city-final.js

generate-city-fixed.js

Toujours conserver un seul script par responsabilité.

----

# PLANIFICATION

Une fois un plan validé par l'utilisateur :

Il est interdit de proposer un nouveau plan.

Il est interdit de reformuler le plan.

Il est interdit de réécrire le plan.

L'assistant doit directement exécuter la phase demandée.

Il ne peut revenir à la planification que si l'utilisateur le demande explicitement.

---

# Diagnostic Rule

Un timeout n'est jamais considéré comme une erreur.

Avant de conclure qu'une commande est bloquée, l'agent doit :

- identifier le processus bloquant
- essayer la commande équivalente
- changer de shell (PowerShell → cmd)
- afficher les codes de sortie
- afficher les temps d'exécution

Il est interdit d'écrire :

"le projet est bloqué"

sans preuve reproductible.

Un timeout est un symptôme.

Jamais un diagnostic.

---

## Exécution des phases

Une phase est indivisible.

Si une phase contient plusieurs commandes (ex. lint, TypeScript, build),
elles doivent être exécutées intégralement dans le même cycle.

L'agent ne doit jamais demander une nouvelle confirmation entre deux
commandes appartenant à la même phase.

Il ne s'arrête qu'à un point STOP défini dans le plan.

---

## Import Safety

Avant de créer un nouveau fichier TypeScript :

- rechercher les interfaces déjà existantes ;
- rechercher les imports utilisés par les autres fichiers du même dossier ;
- réutiliser exactement les mêmes chemins d'import.

Il est interdit d'inventer un import.

Exemple interdit :

import { PageData } from "@/types"

sans avoir vérifié que ce chemin existe réellement.

---

# Root Cause Rule

Toujours corriger la cause racine.

Ne jamais corriger uniquement le fichier qui contient l'erreur.

Si plusieurs fichiers sont générés automatiquement,
la correction doit être appliquée au générateur ou au template,
puis le fichier doit être régénéré.

Il est interdit de corriger manuellement un fichier généré automatiquement.

---

# Changement d'agent

Lorsqu'un nouveau modèle d'IA prend le relais :

1. Lire obligatoirement :
   - AI_RULES.md
   - PROJECT_CONTEXT.md
   - CURRENT_TASK.md

2. Ne faire aucune supposition.

3. Ne jamais reconstruire un plan déjà validé.

4. Continuer exactement à partir du dernier STOP validé.

5. Si un doute existe, demander une clarification au lieu de modifier le projet.

# SOURCE DE VÉRITÉ

Toujours considérer comme références officielles :

- AI_RULES.md
- PROJECT_CONTEXT.md
- WORKFLOW.md
- V4_REFERENCE.md
- CURRENT_TASK.md

En cas de contradiction :

AI_RULES.md prévaut.

---

# ARCHITECTURE

Il est interdit de modifier :

- l'arborescence du projet
- le système de routing
- PageBuilder
- les composants React
- le Pipeline V4
- les Golden Files
- les Snapshots

sans demande explicite de l'utilisateur.

---

# DÉTERMINISME

Interdiction d'utiliser :

- Math.random()
- Date.now()
- new Date()
- crypto.randomUUID()

Les mêmes entrées doivent toujours produire exactement les mêmes sorties.

---

# RAPPORTS

Les rapports sont en lecture seule.

Ils analysent uniquement les fichiers générés.

Ils ne doivent jamais modifier le projet.

---

# GOLDEN FILES

Les Golden Files sont immuables.

Ils ne peuvent être modifiés que via une commande dédiée.

Aucune mise à jour automatique n'est autorisée.

---

# SNAPSHOTS

Un snapshot absent est un FAIL.

Ne jamais créer automatiquement un snapshot.

---

# DUPLICATE CONTENT

Objectif :

- aucune paire > 80 %
- au moins 90 % des comparaisons < 65 %

Le rapport doit afficher :

- Similarité globale
- Similarité par bloc
- Verdict

---

# DONNÉES LOCALES

Le slug provenant de villes.json est l'unique source de vérité.

Les fichiers locaux doivent toujours utiliser ce slug.

Ne jamais reconstruire un slug manuellement.

---

# RÉFÉRENCE

Levallois-Perret est la référence qualité.

Paris est le Golden File officiel.

Aucun Golden File ne doit être modifié automatiquement.