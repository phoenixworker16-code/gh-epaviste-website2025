# ==========================================================
# QUALITY_GATE.md
# PARTIE I — FOUNDATIONS
# CHAPITRE 1
# PHILOSOPHY OF QUALITY
# ==========================================================

# Objectif

Le Quality Gate Framework définit les exigences minimales qu'une fonctionnalité, une page, un composant ou une évolution doit satisfaire avant d'être considéré comme prêt pour la mise en production.

La qualité n'est pas une étape finale.

Elle fait partie intégrante du processus de conception, de développement et de maintenance.

---

# Philosophie

La qualité ne se mesure pas uniquement par l'absence de bugs.

Une fonctionnalité de qualité est :

• utile ;

• compréhensible ;

• rapide ;

• accessible ;

• cohérente ;

• maintenable ;

• fiable.

Chaque décision prise durant le développement doit renforcer ces qualités.

---

# Notre définition de la qualité

Pour GH Épaviste, la qualité est la capacité d'une interface à permettre au visiteur d'atteindre son objectif :

• rapidement ;

• sans confusion ;

• sans erreur ;

• avec confiance.

Une interface techniquement correcte mais difficile à utiliser n'est pas considérée comme une interface de qualité.

---

# La qualité comme responsabilité collective

La qualité concerne :

• le design ;

• le développement ;

• le contenu ;

• le SEO ;

• les performances ;

• l'accessibilité ;

• la sécurité ;

• la maintenance.

Chaque intervenant partage cette responsabilité.

---

# Les cinq piliers de la qualité

Toutes les décisions doivent renforcer au minimum ces cinq piliers.

## 1. Utilité

Le composant répond-il à un besoin réel ?

Si la réponse est non, il ne doit pas être développé.

---

## 2. Simplicité

Peut-on résoudre le même problème avec moins de complexité ?

La solution la plus simple est privilégiée lorsqu'elle répond correctement au besoin.

---

## 3. Fiabilité

Le comportement est-il prévisible ?

L'utilisateur doit toujours savoir ce qui va se produire après une action.

---

## 4. Robustesse

Le système reste-t-il stable malgré :

• les évolutions ;

• les nouveaux appareils ;

• les futures fonctionnalités ;

• les nouvelles versions du navigateur.

---

## 5. Évolutivité

La solution pourra-t-elle être maintenue facilement dans plusieurs années ?

Une solution temporaire ne devient jamais une solution permanente.

---

# Mobile First

La qualité est validée en priorité sur smartphone.

Le Desktop constitue une extension de cette validation.

---

# User First

Chaque décision est prise du point de vue du visiteur.

Jamais du point de vue de la facilité de développement.

Lorsque plusieurs solutions existent, celle qui améliore le plus l'expérience utilisateur est privilégiée.

---

# La qualité est mesurable

Chaque chapitre du présent document définit des critères objectifs.

Une impression personnelle ne suffit jamais pour valider une fonctionnalité.

Toutes les validations reposent sur des critères observables.

---

# La qualité est continue

La qualité n'est jamais définitivement acquise.

Chaque nouvelle fonctionnalité :

• peut améliorer le produit ;

• peut introduire une régression.

Chaque modification nécessite une nouvelle validation.

---

# Documentation

Toute décision importante doit être documentée.

Les futurs développeurs et les futures IA doivent comprendre :

• pourquoi une décision a été prise ;

• quelles contraintes existent ;

• quelles règles doivent être conservées.

---

# Cas spécifique GH ÉPAVISTE

L'objectif principal du site est de permettre à un visiteur de demander rapidement un enlèvement de véhicule.

Toute décision qui ralentit, complique ou détourne ce parcours doit être remise en question.

La qualité est directement liée à la simplicité du parcours utilisateur.

---

# Best Practices

✔ Concevoir avec une vision long terme.

✔ Mesurer avant de valider.

✔ Documenter les décisions.

✔ Réduire la complexité.

✔ Tester systématiquement.

✔ Corriger les causes, pas seulement les symptômes.

✔ Préserver la cohérence.

✔ Prioriser les besoins du visiteur.

✔ Favoriser des solutions durables.

---

# Anti-Patterns

❌ Publier sans validation.

❌ Ajouter des fonctionnalités inutiles.

❌ Corriger uniquement l'apparence.

❌ Introduire une dette technique.

❌ Casser la cohérence existante.

❌ Ignorer les performances.

❌ Ignorer l'accessibilité.

❌ Ne pas documenter les décisions.

❌ Sacrifier l'expérience utilisateur pour gagner du temps.

❌ Reporter les problèmes de qualité à plus tard.

---

# Quality Philosophy Score

Vision long terme .......... /10

Simplicité ................. /10

Robustesse ................ /10

Évolutivité ............... /10

Documentation ............. /10

Expérience utilisateur .... /10

Accessibilité ............. /10

Performance ............... /10

Maintenabilité ............ /10

Qualité globale ........... /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Les principes de qualité sont respectés.

✔ Les décisions importantes sont documentées.

✔ Aucun compromis critique n'a été accepté.

✔ Les besoins utilisateurs restent prioritaires.

✔ La solution est maintenable.

✔ Le score est de 100/100.

---

# Principe final

La qualité n'est jamais le résultat du hasard.

Elle est le résultat d'une série de décisions réfléchies, cohérentes et mesurables.

Le présent document constitue la référence officielle permettant de garantir que chaque évolution de GH Épaviste renforce durablement la qualité du produit.

# Fin du Chapitre 1

# ==========================================================
# QUALITY_GATE.md
# PARTIE I — FOUNDATIONS
# CHAPITRE 2
# QUALITY MINDSET
# ==========================================================

# Objectif

Le Quality Mindset définit la manière officielle de raisonner avant toute modification du projet GH Épaviste.

Il établit les principes de réflexion que doivent suivre les développeurs, designers et assistants IA afin de produire des solutions cohérentes, durables et de haute qualité.

La qualité commence avant la première ligne de code.

---

# Philosophie

Une bonne décision produit généralement un bon résultat.

Une mauvaise décision produit souvent une dette technique, même avec une implémentation parfaite.

Le raisonnement est donc considéré comme une étape essentielle du processus de développement.

---

# Comprendre avant d'agir

Aucune modification ne doit être réalisée avant d'avoir identifié clairement :

• le problème ;

• son origine ;

• son impact ;

• les utilisateurs concernés ;

• les objectifs attendus.

Corriger un symptôme sans comprendre la cause est interdit.

---

# Commencer par le "Pourquoi"

Avant toute action, répondre aux questions suivantes :

Pourquoi cette modification est-elle nécessaire ?

Quel problème résout-elle ?

Quelle valeur apporte-t-elle ?

Que se passe-t-il si elle n'est pas réalisée ?

Si ces questions restent sans réponse, la modification doit être reconsidérée.

---

# Rechercher la solution la plus simple

Lorsque plusieurs solutions sont possibles :

la plus simple est privilégiée si elle répond entièrement au besoin.

La simplicité réduit :

• les risques ;

• les coûts de maintenance ;

• les erreurs futures.

---

# Réutiliser avant de créer

Avant de développer un nouveau composant :

• vérifier si un composant existant répond déjà au besoin ;

• adapter si nécessaire ;

• créer uniquement lorsqu'aucune solution existante n'est adaptée.

La duplication est évitée.

---

# Évaluer les impacts

Chaque modification est analysée sous plusieurs angles :

• UX

• UI

• Responsive

• Accessibilité

• SEO

• Performance

• Sécurité

• Conversion

• Maintenabilité

Une amélioration locale ne doit jamais dégrader l'ensemble.

---

# Penser au long terme

Une décision est évaluée non seulement pour aujourd'hui, mais aussi pour les futures évolutions.

Les solutions temporaires doivent rester exceptionnelles et clairement documentées.

---

# Respecter les référentiels

Avant toute modification, consulter les documents officiels :

• DESIGN_SYSTEM.md

• RESPONSIVE_SPEC.md

• UX_UI_MASTER_SPEC.md

• COMPONENT_GUIDELINES.md

• QUALITY_GATE.md

Les décisions doivent rester compatibles avec ces référentiels.

---

# Décider avec des preuves

Les décisions importantes reposent sur :

• des données ;

• des tests ;

• des audits ;

• des retours utilisateurs ;

• des standards reconnus.

Les préférences personnelles ne constituent pas un critère de validation.

---

# Réduire la dette technique

Toute décision doit chercher à :

• simplifier le système ;

• améliorer la lisibilité du code ;

• réduire les dépendances inutiles ;

• éviter les exceptions.

La dette technique est traitée comme un risque.

---

# Documenter les choix

Les décisions ayant un impact durable sont documentées :

• contexte ;

• alternatives étudiées ;

• justification ;

• conséquences.

La documentation facilite la maintenance future.

---

# Cas spécifique GH ÉPAVISTE

L'objectif principal est simple :

Permettre à un visiteur de demander rapidement un enlèvement de véhicule.

Chaque décision est évaluée selon une question centrale :

Cette modification facilite-t-elle ce parcours ?

Si la réponse est non, elle doit être reconsidérée.

---

# Les dix questions avant de développer

Avant chaque implémentation, vérifier :

1. Ai-je compris le problème ?

2. La solution est-elle réellement nécessaire ?

3. Existe-t-il déjà un composant adapté ?

4. Est-ce la solution la plus simple ?

5. Quel sera l'impact sur l'utilisateur ?

6. Quel sera l'impact sur le SEO ?

7. Quel sera l'impact sur les performances ?

8. Quel sera l'impact sur l'accessibilité ?

9. Cette solution sera-t-elle maintenable dans plusieurs années ?

10. Cette décision respecte-t-elle les référentiels du projet ?

Si une réponse est incertaine, l'analyse doit être poursuivie avant de développer.

---

# Best Practices

✔ Comprendre avant d'agir.

✔ Résoudre la cause.

✔ Privilégier la simplicité.

✔ Réutiliser les composants.

✔ Penser long terme.

✔ Mesurer les impacts.

✔ Documenter les décisions.

✔ Respecter les référentiels.

✔ Améliorer continuellement la qualité.

---

# Anti-Patterns

❌ Développer sans comprendre le besoin.

❌ Créer un nouveau composant sans vérifier l'existant.

❌ Ajouter de la complexité inutile.

❌ Corriger uniquement le symptôme.

❌ Ignorer les impacts sur le SEO.

❌ Ignorer les performances.

❌ Négliger l'accessibilité.

❌ Introduire une dette technique.

❌ Décider selon des préférences personnelles.

❌ Oublier de documenter les choix.

---

# Quality Mindset Score

Compréhension .............. /10

Simplicité ................. /10

Réutilisation .............. /10

Vision long terme .......... /10

UX ......................... /10

Performance ................ /10

Accessibilité .............. /10

SEO ........................ /10

Documentation .............. /10

Qualité du raisonnement .... /10

Score minimal :

100 /100

---

# Validation

Avant toute implémentation :

✔ Le problème est clairement identifié.

✔ Les impacts sont évalués.

✔ Les composants existants ont été analysés.

✔ La solution est la plus simple possible.

✔ Les référentiels sont respectés.

✔ Les décisions importantes sont documentées.

✔ Score = 100/100.

---

# Principe final

La qualité ne dépend pas uniquement de la qualité du code.

Elle dépend avant tout de la qualité des décisions prises avant d'écrire ce code.

En adoptant un raisonnement structuré, mesurable et orienté utilisateur, chaque évolution de GH Épaviste renforce durablement la cohérence, la maintenabilité et la valeur du produit.

# Fin du Chapitre 2

# ==========================================================
# QUALITY_GATE.md
# PARTIE I — FOUNDATIONS
# CHAPITRE 3
# DEFINITION OF DONE (DoD)
# ==========================================================

# Objectif

Le Definition of Done (DoD) définit les critères obligatoires permettant de considérer qu'une fonctionnalité, un composant, une correction ou une évolution est réellement terminée.

Une tâche n'est pas considérée comme "Done" lorsqu'elle est simplement développée.

Elle est "Done" uniquement lorsqu'elle satisfait l'ensemble des critères de qualité définis dans ce référentiel.

---

# Philosophie

Développer une fonctionnalité n'est qu'une étape.

La qualité est atteinte lorsque la fonctionnalité est :

• complète ;

• testée ;

• documentée ;

• maintenable ;

• prête pour la production.

---

# Définition officielle

Une tâche est considérée comme terminée uniquement si elle répond simultanément aux exigences suivantes :

• Fonctionnelle

• Conforme au Design System

• Responsive

• Accessible

• Performante

• Sécurisée

• Documentée

• Validée

L'absence d'un seul de ces critères empêche la validation.

---

# Fonctionnalité

□ Le besoin initial est satisfait.

□ Tous les cas d'usage prévus fonctionnent.

□ Aucun comportement incohérent n'est observé.

□ Les scénarios principaux sont validés.

---

# Design

□ Le composant respecte le DESIGN_SYSTEM.md.

□ Les couleurs sont conformes.

□ La typographie est conforme.

□ Les espacements sont conformes.

□ Les composants existants ont été réutilisés lorsque possible.

---

# Responsive

□ Smartphone validé.

□ Tablette validée.

□ Desktop validé.

□ Portrait validé.

□ Landscape validé.

□ Aucun débordement.

□ Safe Areas respectées.

---

# Accessibilité

□ WCAG 2.2 AA respecté.

□ Navigation clavier fonctionnelle.

□ Focus visible.

□ Contrastes conformes.

□ Labels présents.

□ Messages d'erreur accessibles.

□ Zones tactiles conformes.

---

# Performance

□ Aucun impact négatif sur les Core Web Vitals.

□ Images optimisées.

□ JavaScript limité.

□ CSS optimisé.

□ Aucun chargement inutile.

---

# SEO

Lorsque applicable :

□ Title.

□ Meta Description.

□ Canonical.

□ Schema.org.

□ Sitemap.

□ Robots.

□ Open Graph.

---

# Sécurité

□ Validation des entrées.

□ Variables sensibles protégées.

□ Aucune donnée confidentielle exposée.

□ Gestion correcte des erreurs.

---

# Qualité du code

□ Code lisible.

□ Code documenté lorsque nécessaire.

□ Aucune duplication inutile.

□ Architecture respectée.

□ Types cohérents.

□ Aucun avertissement critique.

---

# Compatibilité

□ Chrome.

□ Edge.

□ Firefox.

□ Safari.

□ Android.

□ iPhone.

Les fonctionnalités critiques fonctionnent sur tous les environnements pris en charge.

---

# Documentation

□ Documentation technique mise à jour.

□ Décisions importantes documentées.

□ Nouveaux composants référencés si nécessaire.

□ Changelog mis à jour.

---

# Tests

□ Tests manuels réalisés.

□ Régression vérifiée.

□ Parcours utilisateur validé.

□ Aucun bug critique.

---

# Cas spécifique GH ÉPAVISTE

Pour le parcours principal :

□ L'utilisateur comprend immédiatement le service.

□ Les CTA sont visibles.

□ Le téléphone est accessible.

□ Le formulaire fonctionne.

□ Les informations de contact sont correctes.

□ Le parcours reste simple.

---

# Conditions de refus

Une tâche est automatiquement refusée si :

• un bug critique est connu ;

• une régression est introduite ;

• le responsive est dégradé ;

• les performances régressent de manière significative ;

• l'accessibilité est compromise ;

• la documentation n'est pas mise à jour lorsque cela est nécessaire.

---

# Exceptions

Les exceptions doivent être :

• exceptionnelles ;

• justifiées ;

• documentées ;

• validées avant la mise en production.

Aucune exception ne doit devenir une règle permanente.

---

# Best Practices

✔ Vérifier chaque critère.

✔ Tester avant de déclarer "Done".

✔ Documenter les décisions.

✔ Réutiliser les composants existants.

✔ Respecter les référentiels.

✔ Corriger les régressions immédiatement.

✔ Valider l'expérience utilisateur.

✔ Garder une vision long terme.

✔ Considérer la qualité comme un tout.

---

# Anti-Patterns

❌ Déclarer une tâche terminée après le développement.

❌ Ignorer les tests.

❌ Publier malgré un bug connu.

❌ Reporter la documentation.

❌ Accepter une dette technique sans justification.

❌ Négliger le responsive.

❌ Oublier les performances.

❌ Ignorer les critères d'accessibilité.

❌ Créer des exceptions non documentées.

❌ Considérer "ça fonctionne sur mon ordinateur" comme une validation.

---

# Definition of Done Score

Fonctionnalité ............. /10

Design ..................... /10

Responsive ................. /10

Accessibilité .............. /10

Performance ................ /10

SEO ........................ /10

Sécurité ................... /10

Qualité du code ............ /10

Documentation .............. /10

Validation globale ......... /10

Score minimal :

100 /100

---

# Validation

Une tâche peut être marquée "Done" uniquement si :

✔ Tous les critères précédents sont validés.

✔ Aucun bug critique n'est ouvert.

✔ Les régressions ont été corrigées.

✔ Les référentiels du projet sont respectés.

✔ Les impacts ont été évalués.

✔ La documentation est à jour.

✔ Le score obtenu est de 100/100.

---

# Principe final

Le statut "Done" ne signifie pas que le développement est terminé.

Il signifie que la fonctionnalité répond aux exigences de qualité, de performance, d'accessibilité, de cohérence et de maintenabilité définies par GH Épaviste.

Le Definition of Done constitue la dernière étape avant le passage dans les Quality Gates de validation.

# Fin du Chapitre 3

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 4
# UI QUALITY GATE
# ==========================================================

# Objectif

Le UI Quality Gate définit les critères officiels permettant de valider la qualité visuelle d'une interface avant sa mise en production.

Chaque page, composant ou fonctionnalité doit respecter ces exigences afin de garantir une expérience cohérente, professionnelle et conforme au Design System de GH Épaviste.

Aucune interface ne peut être publiée sans réussir ce contrôle.

---

# Philosophie

Une belle interface ne suffit pas.

Une interface de qualité est :

• claire ;

• cohérente ;

• lisible ;

• intuitive ;

• fonctionnelle.

Le design sert l'utilisateur.

Il ne cherche jamais à impressionner au détriment de l'expérience.

---

# Référence

Toutes les validations UI doivent être compatibles avec :

• DESIGN_SYSTEM.md

• UX_UI_MASTER_SPEC.md

• RESPONSIVE_SPEC.md

Toute incohérence constitue un échec du Quality Gate.

---

# Hiérarchie visuelle

La page doit présenter une hiérarchie claire.

Le visiteur identifie immédiatement :

• le titre principal ;

• les informations essentielles ;

• les CTA principaux ;

• les éléments secondaires.

Aucun doute ne doit subsister sur l'action attendue.

---

# Cohérence

Les composants similaires utilisent :

• les mêmes styles ;

• les mêmes comportements ;

• les mêmes espacements ;

• les mêmes états interactifs.

La cohérence réduit la charge cognitive.

---

# Typographie

La typographie respecte le Design System.

Les critères suivants sont vérifiés :

• tailles ;

• graisses ;

• interlignage ;

• longueurs de ligne ;

• lisibilité.

Le texte reste confortable sur tous les appareils.

---

# Couleurs

Les couleurs utilisées appartiennent exclusivement à la palette officielle.

Pour GH Épaviste :

• Noir

• Jaune (#F7BB09)

• Blanc

Les couleurs secondaires doivent renforcer la lisibilité sans altérer l'identité visuelle.

---

# Espacements

Les espacements respectent la grille définie dans le Design System.

Ils assurent :

• une respiration visuelle ;

• une bonne séparation des sections ;

• une lecture fluide.

Les espacements arbitraires sont interdits.

---

# Alignements

Les contenus suivent une grille cohérente.

Les éléments sont alignés de manière logique.

Les désalignements accidentels sont considérés comme des défauts de qualité.

---

# Icônes

Les icônes :

• utilisent un style homogène ;

• possèdent une taille cohérente ;

• accompagnent le contenu sans le remplacer.

Une icône ne doit jamais créer de confusion.

---

# Images

Les médias sont vérifiés selon :

• leur qualité ;

• leur résolution ;

• leur cohérence ;

• leur pertinence.

Les images renforcent le message.

Elles ne servent jamais uniquement de décoration.

---

# Boutons

Les boutons sont évalués selon :

• visibilité ;

• contraste ;

• hiérarchie ;

• taille ;

• états (hover, focus, active, disabled).

Le CTA principal reste toujours identifiable.

---

# États interactifs

Tous les composants interactifs possèdent des états clairement définis :

• Hover

• Focus

• Active

• Disabled

• Loading

Le visiteur comprend toujours ce qui se passe.

---

# Densité d'information

Le contenu est équilibré.

La page n'est ni surchargée ni vide.

Chaque élément présent apporte une valeur réelle.

---

# Animations

Les animations :

• restent discrètes ;

• améliorent la compréhension ;

• ne perturbent jamais la lecture.

Les animations décoratives excessives sont interdites.

---

# Responsive

L'apparence reste cohérente sur :

• smartphone ;

• tablette ;

• desktop ;

• portrait ;

• paysage.

Le Responsive est validé avant l'approbation de l'UI.

---

# Cas spécifique GH ÉPAVISTE

Les éléments suivants doivent être immédiatement visibles :

• Logo

• Proposition de valeur

• Téléphone

• CTA principal

• Formulaire ou accès rapide au formulaire

Le visiteur ne doit jamais chercher les informations essentielles.

---

# Critères de rejet

Le UI Quality Gate est automatiquement refusé si :

• la hiérarchie est confuse ;

• les composants sont incohérents ;

• les espacements sont irréguliers ;

• les couleurs ne respectent pas la charte graphique ;

• un CTA principal est difficile à identifier ;

• une page paraît inachevée.

---

# Best Practices

✔ Respecter le Design System.

✔ Utiliser une hiérarchie claire.

✔ Limiter les couleurs.

✔ Harmoniser les composants.

✔ Préserver la lisibilité.

✔ Créer une respiration visuelle.

✔ Mettre en avant le CTA principal.

✔ Vérifier chaque état interactif.

✔ Garder une interface simple.

---

# Anti-Patterns

❌ Couleurs non prévues.

❌ Polices différentes selon les pages.

❌ Espacements incohérents.

❌ Multiplication des styles de boutons.

❌ CTA secondaires plus visibles que le CTA principal.

❌ Alignements approximatifs.

❌ Animations inutiles.

❌ Images floues.

❌ Icônes de styles différents.

❌ Interface visuellement surchargée.

---

# UI Quality Score

Hiérarchie visuelle ......... /10

Cohérence ................... /10

Typographie ................. /10

Couleurs .................... /10

Espacements ................. /10

Composants ................. /10

États interactifs ........... /10

Responsive ................. /10

Lisibilité ................. /10

Qualité globale ............. /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Tous les composants respectent le Design System.

✔ Les espacements sont cohérents.

✔ Les couleurs officielles sont utilisées.

✔ Les CTA sont clairement identifiables.

✔ Les états interactifs sont complets.

✔ L'interface est responsive.

✔ Le score obtenu est de 100/100.

---

# Principe final

Une interface de qualité inspire confiance avant même la première interaction.

Le UI Quality Gate garantit que chaque page de GH Épaviste présente une identité visuelle cohérente, une hiérarchie claire et une expérience professionnelle, quelles que soient les futures évolutions du projet.

# Fin du Chapitre 4

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 5
# UX QUALITY GATE
# ==========================================================

# Objectif

Le UX Quality Gate définit les critères permettant de valider l'expérience utilisateur avant toute mise en production.

Son objectif est de garantir que chaque visiteur puisse comprendre le service, naviguer sans difficulté et accomplir son objectif avec un minimum d'effort.

Une interface est considérée comme réussie uniquement lorsqu'elle est facile à utiliser.

---

# Philosophie

L'utilisateur ne visite pas GH Épaviste pour admirer l'interface.

Il vient pour résoudre un problème.

Le design, les composants et les animations doivent toujours servir cette mission.

Chaque friction inutile diminue la qualité de l'expérience.

---

# Objectif principal

Le parcours utilisateur doit permettre de :

• comprendre le service ;

• identifier les bénéfices ;

• faire confiance à l'entreprise ;

• contacter GH Épaviste ;

• envoyer une demande.

Le tout en quelques étapes simples.

---

# Compréhension immédiate

En moins de 5 secondes, un nouveau visiteur doit comprendre :

• qui est GH Épaviste ;

• ce que propose le service ;

• où intervient l'entreprise ;

• quelle est la prochaine action à effectuer.

Aucune ambiguïté ne doit subsister.

---

# Hiérarchie des actions

Toutes les actions ne possèdent pas la même importance.

La hiérarchie est la suivante :

1. Appeler

2. Remplir le formulaire

3. Consulter les services

4. Lire les informations complémentaires

Le CTA principal doit toujours rester dominant.

---

# Charge cognitive

Les interfaces limitent les efforts de compréhension.

Les assistants IA privilégient :

• des titres explicites ;

• des textes courts ;

• des blocs bien séparés ;

• des parcours simples.

Chaque écran doit répondre à une intention précise.

---

# Parcours utilisateur

Le parcours principal doit rester fluide.

L'utilisateur ne doit jamais se demander :

"Que dois-je faire maintenant ?"

Chaque étape prépare naturellement la suivante.

---

# Temps de décision

Les informations essentielles sont visibles immédiatement.

Le visiteur ne doit pas parcourir plusieurs écrans avant de comprendre la proposition de valeur.

---

# Navigation

La navigation doit être :

• simple ;

• prévisible ;

• cohérente ;

• rapide.

Les menus ne doivent jamais masquer les informations importantes.

---

# Appels à l'action (CTA)

Chaque page possède un objectif principal.

Le CTA principal est :

• visible ;

• compréhensible ;

• facilement accessible ;

• répété de manière pertinente lorsque nécessaire.

---

# Gestion des erreurs

Les erreurs sont :

• expliquées ;

• localisées ;

• faciles à corriger.

Aucun message technique n'est affiché à l'utilisateur.

Chaque erreur propose une solution.

---

# Formulaires

Les formulaires demandent uniquement les informations utiles.

Chaque champ possède une justification.

Les champs inutiles sont supprimés.

Les confirmations sont immédiates.

---

# Temps d'interaction

Chaque action produit un retour visuel rapide.

L'utilisateur comprend immédiatement que sa demande est prise en compte.

Les états "chargement" restent clairs et rassurants.

---

# Confiance

L'interface inspire confiance grâce à :

• des coordonnées visibles ;

• une identité visuelle cohérente ;

• des preuves sociales lorsque disponibles ;

• une communication claire.

La confiance fait partie intégrante de l'expérience utilisateur.

---

# Continuité

Le visiteur retrouve les mêmes repères sur toutes les pages :

• navigation ;

• boutons ;

• couleurs ;

• comportements ;

• structure.

La cohérence réduit la charge mentale.

---

# Responsive UX

Le parcours utilisateur reste identique :

• sur smartphone ;

• sur tablette ;

• sur desktop.

Le changement d'appareil ne modifie pas la logique d'utilisation.

---

# Cas spécifique GH ÉPAVISTE

Le scénario idéal est le suivant :

1. Le visiteur arrive sur le site.

2. Il comprend immédiatement le service.

3. Il identifie la zone d'intervention.

4. Il est rassuré par les informations disponibles.

5. Il appelle directement ou remplit le formulaire.

Tout élément qui allonge ce parcours doit être justifié.

---

# Critères de rejet

Le UX Quality Gate est automatiquement refusé si :

• le visiteur ne comprend pas le service rapidement ;

• plusieurs CTA principaux se concurrencent ;

• un parcours essentiel nécessite un nombre excessif d'étapes ;

• le formulaire est inutilement complexe ;

• les erreurs ne sont pas compréhensibles ;

• la navigation crée de la confusion.

---

# Best Practices

✔ Une seule intention principale par page.

✔ CTA visible dès le premier écran.

✔ Navigation prévisible.

✔ Formulaires simples.

✔ Informations essentielles immédiatement accessibles.

✔ Messages rassurants.

✔ Feedback rapide après chaque action.

✔ Réduction de la charge cognitive.

✔ Parcours utilisateur cohérent.

---

# Anti-Patterns

❌ Plusieurs objectifs concurrents sur une même page.

❌ CTA difficile à trouver.

❌ Navigation complexe.

❌ Formulaire trop long.

❌ Messages d'erreur incompréhensibles.

❌ Informations essentielles cachées.

❌ Trop de texte avant l'action.

❌ Rupture de cohérence entre les pages.

❌ Multiplication des choix inutiles.

❌ Parcours utilisateur non testé.

---

# UX Quality Score

Compréhension ............... /10

Navigation ................. /10

CTA ........................ /10

Charge cognitive ........... /10

Parcours utilisateur ....... /10

Formulaires ................ /10

Confiance .................. /10

Responsive UX .............. /10

Feedback utilisateur ....... /10

Qualité globale ............ /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Le parcours principal est validé.

✔ Les objectifs de chaque page sont clairs.

✔ Les CTA sont visibles et cohérents.

✔ Les formulaires sont optimisés.

✔ Les erreurs sont compréhensibles.

✔ La navigation est intuitive.

✔ Le score obtenu est de 100/100.

---

# Principe final

Une excellente expérience utilisateur est celle qui devient presque invisible.

Le visiteur ne doit jamais réfléchir à la manière d'utiliser le site.

Il doit uniquement se concentrer sur son objectif : obtenir rapidement un enlèvement de véhicule.

Le UX Quality Gate garantit que chaque évolution de GH Épaviste réduit les frictions, renforce la confiance et améliore la fluidité du parcours utilisateur.

# Fin du Chapitre 5

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 6
# COMPONENT QUALITY GATE
# ==========================================================

# Objectif

Le Component Quality Gate définit les critères permettant de valider la création, la modification ou la réutilisation d'un composant avant son intégration dans GH Épaviste.

Chaque composant doit renforcer la cohérence, la maintenabilité et la réutilisabilité du système.

Un nouveau composant ne doit être créé que lorsqu'aucune solution existante ne répond correctement au besoin.

---

# Philosophie

Les composants sont les briques fondamentales du produit.

Chaque nouveau composant augmente la complexité globale du système.

Créer un composant est donc une décision d'architecture, pas uniquement de développement.

---

# Réutiliser avant de créer

Avant toute création, vérifier :

□ Existe-t-il déjà un composant similaire ?

□ Peut-il être étendu avec des variantes ?

□ Une nouvelle propriété (prop) suffit-elle ?

□ Une composition est-elle possible ?

Si une réponse est positive, un nouveau composant ne doit pas être créé.

---

# Responsabilité

Un composant doit être :

• réutilisable ;

• prévisible ;

• documenté ;

• testable ;

• indépendant.

Il ne doit jamais être conçu pour une seule page sans justification.

---

# Respect du Design System

Chaque composant respecte :

• les couleurs officielles ;

• la typographie ;

• les espacements ;

• les rayons de bordure ;

• les ombres ;

• les animations ;

• les états interactifs.

Aucune exception visuelle n'est acceptée sans validation.

---

# API du composant

L'API doit être :

• simple ;

• cohérente ;

• explicite.

Les propriétés inutiles sont supprimées.

Les noms sont compréhensibles.

Le comportement est prévisible.

---

# Variantes

Les variantes sont privilégiées à la duplication.

Exemples :

• Primary

• Secondary

• Outline

• Ghost

• Disabled

Toutes les variantes doivent partager la même logique.

---

# États interactifs

Chaque composant interactif définit :

• Default

• Hover

• Focus

• Active

• Disabled

• Loading (si applicable)

Aucun état ne doit être oublié.

---

# Responsive

Le composant fonctionne sur :

• smartphone ;

• tablette ;

• desktop ;

• portrait ;

• paysage.

Aucun comportement spécifique ne doit casser le Responsive.

---

# Accessibilité

Le composant respecte WCAG 2.2 AA.

Il dispose notamment :

• d'un nom accessible ;

• d'un focus visible ;

• d'un contraste conforme ;

• d'une navigation clavier complète ;

• d'une zone tactile adaptée.

---

# Performance

Le composant reste léger.

Il évite :

• les dépendances inutiles ;

• les calculs coûteux ;

• les re-renders inutiles ;

• les animations lourdes.

Chaque composant doit contribuer aux performances globales.

---

# Documentation

Chaque composant documente :

• son objectif ;

• ses propriétés ;

• ses variantes ;

• ses contraintes ;

• ses exemples d'utilisation.

La documentation fait partie du composant.

---

# Tests

Chaque composant est validé pour :

• son affichage ;

• ses interactions ;

• ses variantes ;

• son Responsive ;

• son accessibilité.

Les régressions sont vérifiées avant chaque Release.

---

# Cas spécifique GH ÉPAVISTE

Les composants critiques sont :

• Button

• CTA

• Card

• Hero

• Form

• Input

• Navigation

• Footer

Toute évolution de ces composants nécessite une validation complète.

---

# Critères de rejet

Le Component Quality Gate est automatiquement refusé si :

• un composant duplique une fonctionnalité existante ;

• il ne respecte pas le Design System ;

• il n'est pas responsive ;

• il n'est pas accessible ;

• son API est complexe ou incohérente ;

• il n'est pas documenté.

---

# Best Practices

✔ Réutiliser avant de créer.

✔ Concevoir des composants génériques.

✔ Limiter les propriétés.

✔ Utiliser des variantes.

✔ Respecter le Design System.

✔ Tester toutes les variantes.

✔ Documenter chaque composant.

✔ Optimiser les performances.

✔ Préserver la cohérence.

---

# Anti-Patterns

❌ Créer un composant pour un seul cas d'usage.

❌ Dupliquer un composant existant.

❌ Ajouter des propriétés inutiles.

❌ API difficile à comprendre.

❌ États interactifs incomplets.

❌ Composant non responsive.

❌ Composant non documenté.

❌ Variantes incohérentes.

❌ Dépendances excessives.

❌ Comportement imprévisible.

---

# Component Quality Score

Réutilisation .............. /10

Design System .............. /10

API ........................ /10

Variantes ................. /10

Responsive ................. /10

Accessibilité .............. /10

Performance ................ /10

Documentation .............. /10

Tests ...................... /10

Qualité globale ............ /10

Score minimal :

100 /100

---

# Validation

Avant toute intégration :

✔ Aucun composant existant ne répond au besoin.

✔ Le Design System est respecté.

✔ L'API est simple.

✔ Les variantes sont cohérentes.

✔ Le composant est responsive.

✔ Le composant est accessible.

✔ La documentation est complète.

✔ Les tests sont validés.

✔ Le score obtenu est de 100/100.

---

# Principe final

Un excellent composant ne résout pas seulement un problème aujourd'hui.

Il devient une brique fiable, réutilisable et évolutive qui simplifie le développement futur.

Le Component Quality Gate garantit que chaque nouveau composant renforce le Design System de GH Épaviste au lieu de le fragmenter, assurant ainsi une architecture durable et une expérience utilisateur cohérente.

# Fin du Chapitre 6

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 7
# RESPONSIVE QUALITY GATE
# ==========================================================

# Objectif

Le Responsive Quality Gate définit les critères permettant de valider qu'une interface respecte intégralement les exigences du RESPONSIVE_SPEC.md avant toute mise en production.

Son objectif est de garantir une expérience utilisateur cohérente, fluide et fiable sur tous les appareils pris en charge par GH Épaviste.

Aucune page ou fonctionnalité ne peut être validée si elle échoue à ce contrôle.

---

# Philosophie

Le Responsive Design ne consiste pas uniquement à éviter les débordements horizontaux.

Une interface responsive est une interface qui :

• reste lisible ;

• reste utilisable ;

• reste performante ;

• reste accessible ;

• conserve la même logique d'utilisation quel que soit l'appareil.

Le Responsive est une propriété fonctionnelle du produit.

---

# Référence

Toutes les validations s'appuient sur :

• RESPONSIVE_SPEC.md

• DESIGN_SYSTEM.md

• UX_UI_MASTER_SPEC.md

Toute divergence avec ces référentiels entraîne un échec du Quality Gate.

---

# Compatibilité des appareils

Chaque interface est validée sur les catégories suivantes :

□ Smartphone compact

□ Smartphone standard

□ Grand smartphone

□ Tablette portrait

□ Tablette paysage

□ Laptop

□ Desktop

□ Écran large

Chaque catégorie doit offrir une expérience complète.

---

# Points de rupture (Breakpoints)

Les comportements sont vérifiés sur les breakpoints officiels définis dans le RESPONSIVE_SPEC.md.

Les composants doivent :

• se réorganiser naturellement ;

• conserver leur lisibilité ;

• éviter les ruptures visuelles.

Les breakpoints arbitraires sont interdits.

---

# Mise en page

Les critères suivants sont vérifiés :

□ Aucun débordement horizontal

□ Aucune superposition involontaire

□ Aucune coupure de contenu

□ Aucune perte d'information

□ Alignements cohérents

□ Espacements conformes

---

# Typographie responsive

La typographie reste confortable sur toutes les tailles d'écran.

Les vérifications portent sur :

□ Taille des caractères

□ Longueur des lignes

□ Interlignage

□ Hiérarchie des titres

□ Lisibilité globale

---

# Médias

Les images et vidéos doivent :

□ conserver leurs proportions ;

□ être optimisées ;

□ ne jamais déformer la mise en page ;

□ rester visibles sans perte d'information.

---

# Navigation

La navigation responsive est validée selon :

□ Menu mobile

□ Header

□ Footer

□ Liens

□ Boutons

□ Navigation clavier

Le changement d'appareil ne modifie pas la logique de navigation.

---

# Formulaires

Les formulaires sont évalués selon :

□ Largeur adaptée

□ Champs lisibles

□ Clavier mobile approprié

□ Messages d'erreur visibles

□ Validation claire

□ CTA accessibles

---

# Zones tactiles

Les éléments interactifs respectent les dimensions minimales définies dans le RESPONSIVE_SPEC.md.

Les vérifications concernent :

□ Boutons

□ Liens

□ Icônes

□ Menus

□ Champs de formulaire

Aucun élément interactif ne doit être difficile à sélectionner.

---

# Orientation

Les interfaces sont vérifiées :

□ Portrait

□ Paysage

Le changement d'orientation ne doit jamais casser le parcours utilisateur.

---

# Safe Areas

Les interfaces respectent les zones sécurisées des appareils modernes.

Aucun élément critique :

• n'est masqué ;

• n'est coupé ;

• n'est difficile à atteindre.

---

# Performance mobile

Le Responsive ne doit pas dégrader :

□ le temps de chargement ;

□ la fluidité des animations ;

□ les interactions tactiles ;

□ les Core Web Vitals.

Les optimisations mobiles sont prioritaires.

---

# Accessibilité responsive

Le Responsive conserve :

□ les contrastes ;

□ les tailles de texte ;

□ les zones tactiles ;

□ le focus clavier ;

□ les lecteurs d'écran.

L'adaptation ne doit jamais compromettre l'accessibilité.

---

# Cas spécifique GH ÉPAVISTE

Sur smartphone, les éléments suivants doivent être immédiatement accessibles :

• Logo

• Proposition de valeur

• Téléphone

• CTA principal

• Accès au formulaire

• Navigation

Le parcours mobile constitue la référence principale du projet.

---

# Critères de rejet

Le Responsive Quality Gate est automatiquement refusé si :

• un débordement horizontal est détecté ;

• un composant est inutilisable sur mobile ;

• une information essentielle disparaît ;

• un CTA devient inaccessible ;

• une orientation casse la mise en page ;

• un breakpoint provoque une régression.

---

# Best Practices

✔ Concevoir Mobile First.

✔ Tester sur plusieurs appareils.

✔ Respecter les breakpoints officiels.

✔ Vérifier les orientations.

✔ Contrôler les Safe Areas.

✔ Optimiser les médias.

✔ Préserver les performances.

✔ Tester les interactions tactiles.

✔ Garantir une cohérence complète.

---

# Anti-Patterns

❌ Tester uniquement sur Desktop.

❌ Ajouter des breakpoints arbitraires.

❌ Déformer les images.

❌ Réduire excessivement la taille du texte.

❌ Ignorer les zones tactiles.

❌ Oublier les Safe Areas.

❌ Masquer des contenus importants sur mobile.

❌ Utiliser des composants non adaptatifs.

❌ Introduire des régressions responsive.

❌ Publier sans validation multi-appareils.

---

# Responsive Quality Score

Compatibilité appareils ...... /10

Breakpoints ................. /10

Mise en page ................ /10

Typographie ................. /10

Médias ...................... /10

Navigation .................. /10

Formulaires ................. /10

Performance mobile .......... /10

Accessibilité ............... /10

Qualité globale ............. /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Tous les breakpoints sont validés.

✔ Aucun débordement horizontal n'est présent.

✔ Les composants restent utilisables.

✔ Les formulaires sont fonctionnels.

✔ Les Safe Areas sont respectées.

✔ Les performances mobiles restent conformes.

✔ Les tests multi-appareils sont terminés.

✔ Le score obtenu est de 100/100.

---

# Principe final

Le Responsive n'est pas une adaptation réalisée à la fin d'un projet.

Il constitue une exigence permanente qui garantit que chaque utilisateur bénéficie de la même qualité d'expérience, quel que soit son appareil.

Le Responsive Quality Gate transforme les principes du RESPONSIVE_SPEC.md en critères de validation mesurables, assurant que chaque évolution de GH Épaviste reste conforme aux standards les plus élevés de qualité responsive.

# Fin du Chapitre 7

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 8
# ACCESSIBILITY GATE
# ==========================================================

# Objectif

L'Accessibility Gate définit les critères officiels permettant de garantir que chaque interface de GH Épaviste est accessible au plus grand nombre avant toute mise en production.

L'accessibilité est considérée comme une exigence de qualité au même titre que la performance, la sécurité ou la fiabilité.

Aucune fonctionnalité ne peut être validée si elle échoue à cette étape.

---

# Philosophie

L'accessibilité ne consiste pas uniquement à respecter une norme.

Elle consiste à permettre à chaque utilisateur d'accéder au service, quelles que soient :

• ses capacités ;

• son appareil ;

• sa méthode de navigation ;

• ses technologies d'assistance.

Une interface accessible bénéficie à tous les utilisateurs.

---

# Références

Toutes les validations doivent être compatibles avec :

• WCAG 2.2 niveau AA

• RESPONSIVE_SPEC.md

• DESIGN_SYSTEM.md

• UX_UI_MASTER_SPEC.md

Ces documents constituent les références officielles du projet.

---

# Structure sémantique

Chaque page respecte une structure HTML logique.

Vérifications :

□ Un seul `<h1>`

□ Hiérarchie cohérente des titres

□ Balises sémantiques (`header`, `main`, `nav`, `section`, `footer`)

□ Régions facilement identifiables

La structure doit rester compréhensible sans style CSS.

---

# Navigation clavier

Toutes les fonctionnalités sont utilisables sans souris.

Vérifications :

□ Tabulation logique

□ Focus visible

□ Aucun piège clavier

□ Activation via Entrée ou Espace lorsque pertinent

□ Fermeture des fenêtres/modales au clavier

Aucun parcours essentiel ne dépend exclusivement de la souris.

---

# Focus

Le focus clavier doit être :

• visible ;

• contrasté ;

• cohérent ;

• jamais masqué.

Le déplacement du focus suit l'ordre visuel naturel de la page.

---

# Contrastes

Les contrastes respectent les exigences WCAG 2.2 AA.

Les contrôles portent notamment sur :

□ Texte

□ Icônes porteuses d'information

□ Boutons

□ Champs de formulaire

□ États de focus

Le contraste ne doit jamais dépendre uniquement de la couleur.

---

# Contenus non textuels

Tous les contenus visuels significatifs disposent d'une alternative adaptée.

Vérifications :

□ Images informatives avec texte alternatif pertinent

□ Images décoratives ignorées par les technologies d'assistance

□ Icônes porteuses de sens correctement décrites

□ Logos identifiables

---

# Formulaires

Les formulaires doivent être entièrement accessibles.

Chaque champ possède :

□ Un label associé

□ Des indications claires si nécessaire

□ Des messages d'erreur explicites

□ Une aide à la correction

□ Une annonce des erreurs aux technologies d'assistance

L'utilisateur comprend toujours ce qui est attendu.

---

# Messages d'état

Les changements importants sont annoncés correctement.

Exemples :

□ Confirmation d'envoi

□ Chargement

□ Erreur

□ Succès

□ Validation

Les informations ne doivent pas être transmises uniquement par la couleur.

---

# Liens et boutons

Chaque élément interactif possède un intitulé explicite.

Exemples acceptés :

• Appeler GH Épaviste

• Demander un enlèvement

• Voir les services

Exemples refusés :

• Cliquez ici

• En savoir plus (sans contexte)

---

# Zones tactiles

Les éléments interactifs disposent d'une surface suffisante.

Ils restent faciles à utiliser sur smartphone et tablette.

Les clics accidentels doivent être limités.

---

# Zoom et redimensionnement

L'interface reste fonctionnelle :

□ avec un zoom navigateur jusqu'à 200 %

□ avec une taille de texte augmentée

□ sans perte de contenu ni de fonctionnalité

---

# Mouvements et animations

Les animations ne doivent pas gêner la navigation.

Les utilisateurs sensibles aux mouvements doivent pouvoir utiliser l'interface confortablement.

Les animations essentielles restent courtes et discrètes.

---

# Lecteurs d'écran

Les principales fonctionnalités sont compatibles avec les lecteurs d'écran.

Les vérifications concernent :

□ Titres

□ Navigation

□ Formulaires

□ Boutons

□ Messages d'état

□ Liens

Le parcours reste logique lorsqu'il est lu de manière séquentielle.

---

# Responsive et accessibilité

L'accessibilité est maintenue sur :

□ Smartphone

□ Tablette

□ Desktop

Les adaptations responsives ne doivent jamais réduire l'accessibilité.

---

# Cas spécifique GH ÉPAVISTE

Les éléments suivants doivent être immédiatement accessibles :

• Numéro de téléphone

• Bouton d'appel

• Formulaire de demande

• Zones d'intervention

• Navigation principale

• Informations de contact

L'utilisateur ne doit jamais être empêché de demander un enlèvement en raison d'un problème d'accessibilité.

---

# Critères de rejet

L'Accessibility Gate est automatiquement refusé si :

• la navigation clavier est incomplète ;

• un focus est invisible ;

• les contrastes sont insuffisants ;

• un formulaire ne possède pas de labels ;

• les erreurs ne sont pas compréhensibles ;

• une information essentielle dépend uniquement d'une couleur ;

• un lecteur d'écran ne peut pas comprendre le parcours principal.

---

# Best Practices

✔ Utiliser une structure HTML sémantique.

✔ Tester sans souris.

✔ Vérifier les contrastes.

✔ Fournir des textes alternatifs pertinents.

✔ Associer un label à chaque champ.

✔ Rendre les messages d'erreur explicites.

✔ Préserver l'accessibilité sur mobile.

✔ Tester avec un lecteur d'écran.

✔ Intégrer l'accessibilité dès la conception.

---

# Anti-Patterns

❌ Utiliser uniquement des `<div>` sans structure.

❌ Supprimer le focus clavier.

❌ Employer des contrastes insuffisants.

❌ Utiliser des icônes sans libellé.

❌ Afficher des erreurs uniquement en rouge.

❌ Multiplier les animations distrayantes.

❌ Créer des formulaires sans labels.

❌ Masquer des contenus au zoom.

❌ Rendre un parcours dépendant de la souris.

❌ Considérer l'accessibilité comme une étape de fin de projet.

---

# Accessibility Score

Structure sémantique ........ /10

Navigation clavier ......... /10

Focus ...................... /10

Contrastes ................. /10

Formulaires ................ /10

Lecteurs d'écran ........... /10

Responsive ................. /10

Messages d'état ............ /10

Zones tactiles ............. /10

Qualité globale ............ /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Les critères WCAG 2.2 AA sont respectés.

✔ Tous les parcours essentiels sont utilisables au clavier.

✔ Les contrastes sont conformes.

✔ Les formulaires sont accessibles.

✔ Les lecteurs d'écran peuvent parcourir l'interface.

✔ Les tests Responsive conservent le niveau d'accessibilité.

✔ Le score obtenu est de 100/100.

---

# Principe final

L'accessibilité ne constitue pas une contrainte supplémentaire.

Elle est un indicateur de qualité globale.

Une interface accessible est généralement plus claire, plus robuste, plus cohérente et plus agréable à utiliser pour tous.

L'Accessibility Gate garantit que chaque évolution de GH Épaviste reste inclusive, conforme aux standards internationaux et fidèle à une conception centrée sur les utilisateurs.

# Fin du Chapitre 8

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 9
# PERFORMANCE GATE
# ==========================================================

# Objectif

Le Performance Gate définit les critères officiels permettant de garantir que chaque évolution de GH Épaviste conserve un niveau de performance élevé avant sa mise en production.

Les performances sont considérées comme une fonctionnalité essentielle du produit.

Toute régression significative entraîne un refus de validation.

---

# Philosophie

Une interface rapide améliore :

• la satisfaction utilisateur ;

• la confiance ;

• l'accessibilité ;

• le référencement naturel (SEO) ;

• le taux de conversion.

La performance n'est jamais sacrifiée au profit d'effets visuels ou de fonctionnalités secondaires.

---

# Références

Toutes les validations s'appuient sur :

• Core Web Vitals

• RESPONSIVE_SPEC.md

• DESIGN_SYSTEM.md

• UX_UI_MASTER_SPEC.md

• QUALITY_GATE.md

---

# Core Web Vitals

Les seuils cibles sont les suivants :

□ LCP (Largest Contentful Paint) ≤ 2,5 s

□ INP (Interaction to Next Paint) ≤ 200 ms

□ CLS (Cumulative Layout Shift) ≤ 0,10

Ces valeurs constituent les objectifs officiels du projet.

---

# Budgets de performance

Chaque nouvelle fonctionnalité respecte les budgets définis pour :

□ JavaScript

□ CSS

□ Images

□ Polices

□ Icônes

□ Requêtes réseau

Toute augmentation significative doit être justifiée et validée.

---

# Chargement initial

La première vue doit :

□ afficher rapidement le contenu principal ;

□ éviter les ressources bloquantes ;

□ limiter les dépendances critiques.

Le visiteur doit pouvoir comprendre le service sans attendre le chargement complet de la page.

---

# Images

Toutes les images sont :

□ optimisées ;

□ adaptées à leur affichage ;

□ compressées ;

□ chargées de manière appropriée (lazy loading lorsque pertinent).

Aucune image inutile ne doit être téléchargée.

---

# Polices

Les polices sont optimisées :

□ nombre limité de variantes ;

□ chargement optimisé ;

□ affichage stable ;

□ stratégie de secours définie.

La typographie ne doit jamais retarder le rendu principal.

---

# JavaScript

Le JavaScript doit rester maîtrisé.

Les contrôles portent sur :

□ code inutile supprimé ;

□ découpage (code splitting) lorsque pertinent ;

□ composants lourds chargés à la demande ;

□ limitation des bibliothèques externes.

Chaque kilooctet doit apporter une valeur réelle.

---

# CSS

Les feuilles de style doivent :

□ éviter les règles inutilisées ;

□ limiter les duplications ;

□ respecter le Design System ;

□ rester simples à maintenir.

---

# Animations

Les animations doivent :

□ rester fluides ;

□ utiliser des propriétés performantes lorsque possible ;

□ éviter les recalculs coûteux.

Les animations ne doivent jamais dégrader l'expérience.

---

# Rendu

Le rendu de la page doit rester stable.

Les utilisateurs ne doivent pas constater :

□ déplacements inattendus d'éléments ;

□ clignotements ;

□ réorganisations brusques de la mise en page.

---

# Réseau

Les requêtes réseau sont limitées.

Chaque appel externe est justifié.

Les ressources inutilisées sont supprimées.

---

# Cache

Les ressources statiques bénéficient d'une stratégie de mise en cache adaptée.

Les données dynamiques utilisent un mécanisme compatible avec l'architecture du projet.

---

# Mobile First

Les performances sont validées en priorité sur smartphone.

Une excellente performance Desktop ne compense jamais une mauvaise performance mobile.

---

# Cas spécifique GH ÉPAVISTE

Les éléments suivants doivent apparaître rapidement :

• Logo

• Proposition de valeur

• Téléphone

• CTA principal

• Formulaire (ou accès direct)

Le visiteur doit pouvoir agir avant même le chargement complet des éléments secondaires.

---

# Critères de rejet

Le Performance Gate est automatiquement refusé si :

• les Core Web Vitals passent sous les seuils définis ;

• une nouvelle fonctionnalité dégrade significativement le temps de chargement ;

• des ressources inutiles sont ajoutées ;

• des animations provoquent des ralentissements ;

• un déplacement de mise en page (CLS) est observé.

---

# Best Practices

✔ Optimiser les images.

✔ Limiter JavaScript.

✔ Réduire les dépendances.

✔ Utiliser le chargement différé lorsque pertinent.

✔ Préserver la stabilité visuelle.

✔ Tester sur mobile.

✔ Mesurer avant et après chaque évolution.

✔ Respecter les budgets de performance.

✔ Corriger les régressions immédiatement.

---

# Anti-Patterns

❌ Ajouter une bibliothèque pour une fonctionnalité mineure.

❌ Charger des images en pleine résolution sans nécessité.

❌ Bloquer le rendu avec des ressources non critiques.

❌ Multiplier les animations lourdes.

❌ Ignorer les Core Web Vitals.

❌ Dégrader les performances pour des effets visuels.

❌ Charger des scripts inutilisés.

❌ Introduire des changements de mise en page.

❌ Tester uniquement sur une connexion rapide.

❌ Publier sans mesurer.

---

# Performance Score

Core Web Vitals ............ /10

Chargement initial ......... /10

Images ..................... /10

JavaScript ................. /10

CSS ........................ /10

Animations ................. /10

Réseau ..................... /10

Cache ...................... /10

Performance mobile ......... /10

Qualité globale ............ /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Les Core Web Vitals respectent les seuils définis.

✔ Les budgets de performance sont respectés.

✔ Les images sont optimisées.

✔ Les ressources inutiles ont été supprimées.

✔ Les performances mobiles sont validées.

✔ Aucune régression significative n'est détectée.

✔ Le score obtenu est de 100/100.

---

# Principe final

La rapidité fait partie intégrante de l'expérience utilisateur.

Chaque amélioration visuelle ou fonctionnelle doit préserver, voire améliorer, les performances globales du site.

Le Performance Gate garantit que GH Épaviste reste un site rapide, fiable et performant, offrant une expérience fluide aux visiteurs tout en favorisant le référencement naturel et la conversion.

# Fin du Chapitre 9

# ==========================================================
# QUALITY_GATE.md
# PARTIE II — DEVELOPMENT GATES
# CHAPITRE 10
# SEO GATE
# ==========================================================

# Objectif

Le SEO Gate définit les critères obligatoires permettant de valider qu'une page, un composant ou une fonctionnalité est prête à être explorée, indexée et classée par les moteurs de recherche.

Le référencement est intégré dès la conception.

Il ne constitue jamais une étape ajoutée après le développement.

---

# Philosophie

Un excellent référencement repose sur une combinaison de facteurs :

• contenu utile ;

• structure technique solide ;

• bonnes performances ;

• expérience utilisateur de qualité ;

• architecture cohérente.

Le SEO est un résultat global, pas une simple optimisation de balises.

---

# Références

Toutes les validations doivent être compatibles avec :

• QUALITY_GATE.md

• DESIGN_SYSTEM.md

• RESPONSIVE_SPEC.md

• UX_UI_MASTER_SPEC.md

Toute page qui ne respecte pas ces référentiels ne peut pas être validée.

---

# Métadonnées

Chaque page possède :

□ Une balise `<title>` unique

□ Une meta description pertinente

□ Une langue correctement déclarée

□ Un titre adapté à l'intention de recherche

Les métadonnées doivent représenter fidèlement le contenu.

---

# Structure HTML

Chaque page respecte une structure logique.

Vérifications :

□ Un seul `<h1>`

□ Hiérarchie cohérente (`h2`, `h3`, etc.)

□ Sections clairement organisées

□ HTML sémantique

Une bonne structure améliore la compréhension du contenu par les moteurs de recherche et les utilisateurs.

---

# URL

Les URL doivent être :

□ courtes ;

□ lisibles ;

□ stables ;

□ descriptives.

Elles évitent :

• les paramètres inutiles ;

• les identifiants techniques ;

• les mots sans valeur.

---

# Canonical

Chaque page indexable dispose d'une URL canonique correcte.

Les doublons de contenu doivent être évités.

La canonique pointe toujours vers la version de référence.

---

# Indexation

Les directives d'indexation sont vérifiées.

Contrôles :

□ Pages importantes indexables

□ Pages techniques exclues lorsque nécessaire

□ Robots cohérents

□ Sitemap à jour

Une page utile ne doit pas être bloquée par erreur.

---

# Données structurées

Les données structurées (Schema.org) sont présentes lorsque pertinentes.

Exemples :

□ Organization

□ LocalBusiness

□ WebSite

□ BreadcrumbList

□ FAQPage (uniquement si la page contient une FAQ)

Les données doivent refléter fidèlement le contenu.

---

# Open Graph et partage

Les métadonnées de partage sont complètes.

Vérifications :

□ Titre

□ Description

□ Image

□ URL

□ Type de contenu

Le partage sur les réseaux sociaux doit produire un aperçu cohérent.

---

# Contenu

Le contenu doit être :

□ original ;

□ utile ;

□ structuré ;

□ lisible ;

□ orienté utilisateur.

Les textes sont rédigés pour répondre à une intention de recherche, pas pour accumuler des mots-clés.

---

# Maillage interne

Chaque page importante :

□ reçoit des liens internes ;

□ crée des liens vers des contenus pertinents ;

□ participe à la structure globale du site.

Le maillage facilite la navigation et la découverte des contenus.

---

# Médias

Les images sont optimisées.

Chaque image informative possède :

□ un nom de fichier descriptif ;

□ un texte alternatif pertinent ;

□ des dimensions adaptées.

---

# Performances

Les performances SEO sont validées :

□ Core Web Vitals conformes

□ Temps de chargement maîtrisé

□ Mise en page stable

Une baisse significative des performances peut entraîner un refus du SEO Gate.

---

# Mobile First

La version mobile constitue la référence principale.

Toutes les vérifications SEO sont réalisées en priorité sur smartphone.

---

# SEO local

Pour GH ÉPAVISTE, chaque page locale vérifie :

□ Zone d'intervention clairement identifiée

□ Cohérence des informations de contact

□ Services décrits avec précision

□ Liens vers les pages départementales et communales lorsque pertinent

Le référencement local est une priorité stratégique.

---

# Cas spécifique GH ÉPAVISTE

Avant validation, chaque page stratégique doit permettre à Google et à l'utilisateur de comprendre immédiatement :

• le service proposé ;

• les véhicules concernés ;

• la zone d'intervention ;

• les moyens de contact ;

• la valeur apportée.

Les pages ne doivent jamais créer d'ambiguïté sur l'activité.

---

# Critères de rejet

Le SEO Gate est automatiquement refusé si :

• le `<title>` est absent ou dupliqué ;

• la meta description est absente ;

• plusieurs `<h1>` sont présents ;

• l'URL canonique est incorrecte ;

• une page importante est bloquée à l'indexation ;

• les données structurées sont erronées ;

• le contenu est dupliqué ou sans valeur ;

• les performances se dégradent de manière significative.

---

# Best Practices

✔ Un objectif de recherche par page.

✔ Métadonnées uniques.

✔ Structure HTML sémantique.

✔ Contenu orienté utilisateur.

✔ Maillage interne cohérent.

✔ Images optimisées.

✔ Données structurées pertinentes.

✔ Performances élevées.

✔ Référencement local renforcé.

---

# Anti-Patterns

❌ Empiler des mots-clés.

❌ Copier du contenu.

❌ Multiplier les `<h1>`.

❌ Oublier la balise canonique.

❌ Publier une page sans maillage interne.

❌ Utiliser des URL techniques.

❌ Ignorer le SEO mobile.

❌ Déployer des données structurées non conformes.

❌ Laisser des pages orphelines.

❌ Considérer le SEO comme une étape finale.

---

# SEO Score

Métadonnées ................. /10

Structure HTML .............. /10

URL et Canonical ............ /10

Indexation ................. /10

Données structurées ......... /10

Contenu ..................... /10

Maillage interne ............ /10

Performances ............... /10

SEO local ................... /10

Qualité globale ............. /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Les métadonnées sont complètes.

✔ La structure HTML est conforme.

✔ Les URL sont optimisées.

✔ Les données structurées sont valides.

✔ Les performances respectent les objectifs.

✔ Le maillage interne est cohérent.

✔ Les pages locales sont correctement reliées.

✔ Le score obtenu est de 100/100.

---

# Principe final

Le SEO n'est pas une couche ajoutée au projet.

Il est une propriété fondamentale de chaque page.

Le SEO Gate garantit que toute évolution de GH Épaviste améliore sa visibilité, renforce son autorité et offre une expérience de recherche utile, performante et durable, aussi bien pour les utilisateurs que pour les moteurs de recherche.

# Fin du Chapitre 10

# ==========================================================
# QUALITY_GATE.md
# PARTIE III — ENGINEERING GATES
# CHAPITRE 11
# CODE QUALITY GATE
# ==========================================================

# Objectif

Le Code Quality Gate définit les critères permettant de garantir qu'un code est lisible, robuste, maintenable et cohérent avant son intégration dans le projet GH Épaviste.

Le code est un actif du projet.

Il doit rester compréhensible plusieurs années après son écriture.

---

# Philosophie

Un code fonctionnel n'est pas nécessairement un code de qualité.

Un code de qualité est :

• lisible ;

• simple ;

• cohérent ;

• testable ;

• évolutif.

Chaque modification doit améliorer le projet ou préserver son niveau de qualité.

---

# Références

Toutes les validations sont compatibles avec :

• QUALITY_GATE.md

• DESIGN_SYSTEM.md

• COMPONENT_GUIDELINES.md

• UX_UI_MASTER_SPEC.md

Les décisions techniques doivent rester cohérentes avec l'ensemble du référentiel.

---

# Lisibilité

Le code doit être immédiatement compréhensible.

Les vérifications portent sur :

□ noms explicites ;

□ structure claire ;

□ indentation cohérente ;

□ faible complexité.

Le lecteur doit comprendre l'intention sans effort.

---

# Simplicité

La solution retenue est la plus simple répondant au besoin.

Le code évite :

• les abstractions inutiles ;

• les optimisations prématurées ;

• les niveaux d'imbrication excessifs.

La simplicité est privilégiée.

---

# Responsabilité unique

Chaque fichier, fonction ou composant possède une responsabilité clairement définie.

Une unité de code ne doit pas résoudre plusieurs problèmes indépendants.

---

# Duplication

Avant toute nouvelle implémentation :

□ une recherche d'existant est effectuée ;

□ les composants ou fonctions réutilisables sont privilégiés ;

□ les duplications sont supprimées lorsque cela est possible.

La duplication constitue une dette technique.

---

# Modularité

Le code est organisé en modules cohérents.

Les dépendances entre modules restent limitées.

Les composants critiques restent indépendants des implémentations spécifiques.

---

# Cohérence

Les conventions du projet sont respectées :

□ structure des dossiers ;

□ nommage ;

□ formatage ;

□ organisation des fichiers ;

□ conventions de code.

La cohérence facilite la maintenance.

---

# Gestion des erreurs

Les erreurs sont :

□ anticipées ;

□ traitées ;

□ explicites.

Les exceptions silencieuses sont interdites.

Les messages doivent faciliter le diagnostic.

---

# Commentaires

Les commentaires expliquent :

• pourquoi une décision a été prise ;

• une contrainte métier ;

• un comportement non évident.

Ils ne décrivent jamais un code évident.

Un commentaire obsolète est considéré comme un défaut.

---

# Maintenabilité

Le code doit pouvoir être :

□ compris rapidement ;

□ modifié facilement ;

□ testé simplement ;

□ documenté.

La maintenabilité est une exigence de premier niveau.

---

# Évolutivité

Toute nouvelle fonctionnalité doit pouvoir être ajoutée sans provoquer une réécriture importante de l'existant.

Les solutions rigides sont évitées.

---

# Dette technique

Toute dette technique :

□ est documentée ;

□ possède une justification ;

□ fait l'objet d'un suivi.

La dette technique implicite est interdite.

---

# Revue de code

Chaque évolution importante vérifie :

□ lisibilité ;

□ cohérence ;

□ duplication ;

□ complexité ;

□ impacts sur l'architecture.

Le regard d'un tiers (humain ou IA) est encouragé.

---

# Cas spécifique GH ÉPAVISTE

Les modules critiques incluent notamment :

• formulaire de demande ;

• navigation ;

• composants CTA ;

• pages locales ;

• logique SEO ;

• génération des données structurées.

Toute modification de ces éléments nécessite une revue complète.

---

# Critères de rejet

Le Code Quality Gate est automatiquement refusé si :

• le code est difficile à comprendre ;

• une duplication importante est introduite ;

• les conventions du projet ne sont pas respectées ;

• des responsabilités sont mélangées ;

• une dette technique est créée sans justification ;

• la gestion des erreurs est absente ou insuffisante.

---

# Best Practices

✔ Utiliser des noms explicites.

✔ Une responsabilité par fonction.

✔ Réutiliser avant de réécrire.

✔ Limiter la complexité.

✔ Documenter les décisions importantes.

✔ Préserver la cohérence.

✔ Gérer les erreurs proprement.

✔ Concevoir pour la maintenance.

✔ Réviser chaque évolution importante.

---

# Anti-Patterns

❌ Fonctions trop longues.

❌ Variables aux noms ambigus.

❌ Copier-coller du code.

❌ Commentaires qui répètent le code.

❌ Mélanger logique métier et présentation.

❌ Dépendances inutiles.

❌ Gestion silencieuse des erreurs.

❌ Optimisations prématurées.

❌ Architecture incohérente.

❌ Introduire une dette technique sans suivi.

---

# Code Quality Score

Lisibilité ................. /10

Simplicité ................. /10

Modularité ................. /10

Réutilisation .............. /10

Cohérence .................. /10

Gestion des erreurs ........ /10

Maintenabilité ............. /10

Évolutivité ................ /10

Documentation .............. /10

Qualité globale ............ /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Le code est lisible et cohérent.

✔ Les conventions du projet sont respectées.

✔ Aucune duplication importante n'est introduite.

✔ Les erreurs sont correctement gérées.

✔ Les modules critiques ont été revus.

✔ La dette technique est maîtrisée.

✔ Le score obtenu est de 100/100.

---

# Principe final

Un excellent code ne cherche pas seulement à fonctionner aujourd'hui.

Il doit pouvoir être compris, maintenu et enrichi dans plusieurs années, sans compromettre la stabilité du projet.

Le Code Quality Gate garantit que chaque évolution de GH Épaviste renforce la qualité de son architecture logicielle et prépare durablement les futures contributions des développeurs comme des intelligences artificielles.

# Fin du Chapitre 11

# ==========================================================
# QUALITY_GATE.md
# PARTIE III — ENGINEERING GATES
# CHAPITRE 12
# TYPESCRIPT GATE
# ==========================================================

# Objectif

Le TypeScript Gate définit les critères permettant de garantir un système de types robuste, cohérent et maintenable avant toute mise en production.

Le typage statique constitue une première ligne de défense contre les erreurs.

Chaque nouveau développement doit renforcer cette sécurité.

---

# Philosophie

TypeScript ne sert pas uniquement à satisfaire le compilateur.

Il sert à rendre le code :

• plus sûr ;

• plus lisible ;

• plus prévisible ;

• plus évolutif.

Un typage de qualité réduit les erreurs avant même l'exécution du code.

---

# Références

Toutes les validations doivent être compatibles avec :

• QUALITY_GATE.md

• Code Quality Gate

• COMPONENT_GUIDELINES.md

• Architecture du projet

---

# Mode Strict

Le projet fonctionne avec :

□ `strict: true`

Toutes les nouvelles implémentations doivent être compatibles avec ce mode.

Les contournements injustifiés sont interdits.

---

# Utilisation de `any`

L'utilisation de `any` est exceptionnelle.

Chaque utilisation doit :

□ être justifiée ;

□ être documentée si elle est durable ;

□ faire l'objet d'une revue.

Lorsque cela est possible, préférer :

• `unknown`

• types génériques

• unions

• interfaces

• types utilitaires.

---

# Interfaces et types

Les modèles de données doivent être :

□ cohérents ;

□ réutilisables ;

□ nommés explicitement ;

□ regroupés lorsqu'ils représentent le même domaine.

La duplication des types est évitée.

---

# Typage des composants

Chaque composant possède :

□ des props typées ;

□ des valeurs optionnelles clairement identifiées ;

□ des valeurs par défaut lorsque nécessaire ;

□ une API cohérente.

Les composants publics ne doivent jamais exposer des types ambigus.

---

# Fonctions

Toutes les fonctions déclarent :

□ leurs paramètres ;

□ leur type de retour ;

□ leurs contraintes lorsque nécessaire.

Le comportement attendu est explicite.

---

# Génériques

Les génériques sont utilisés uniquement lorsqu'ils améliorent réellement la réutilisabilité.

Les génériques complexes sans bénéfice clair sont évités.

---

# Types utilitaires

Lorsque pertinent, utiliser :

□ `Partial`

□ `Required`

□ `Pick`

□ `Omit`

□ `Readonly`

□ `Record`

□ `ReturnType`

□ `Awaited`

La duplication de structures est réduite.

---

# Unions et discriminants

Les unions sont privilégiées lorsque plusieurs états sont possibles.

Les discriminated unions sont utilisées pour représenter clairement les différents cas métier.

Les vérifications exhaustives sont encouragées.

---

# Null et Undefined

Les cas suivants sont traités explicitement :

□ `null`

□ `undefined`

□ valeurs optionnelles

Les assertions non justifiées (`!`) sont limitées.

---

# Validation des données

Les données provenant :

• des formulaires ;

• des API ;

• des paramètres d'URL ;

• des services externes ;

doivent être validées avant leur utilisation.

Le typage ne remplace jamais la validation.

---

# Énumérations

Les énumérations restent limitées aux cas où elles apportent une réelle valeur.

Les unions littérales sont privilégiées lorsque cela simplifie le code.

---

# Imports de types

Les imports de types utilisent :

```ts
import type { ... } from "...";
```

lorsqu'ils ne sont utilisés qu'au moment du typage.

Cela améliore la lisibilité et évite les imports inutiles.

---

# Gestion des erreurs

Les erreurs sont représentées par des types explicites.

Les valeurs ambiguës sont évitées.

Les états d'échec sont modélisés lorsque nécessaire.

---

# Cas spécifique GH ÉPAVISTE

Les types critiques concernent notamment :

• formulaires de demande ;

• véhicules ;

• pages locales ;

• services ;

• données SEO ;

• données structurées (Schema.org).

Ces modèles doivent rester stables et documentés.

---

# Critères de rejet

Le TypeScript Gate est automatiquement refusé si :

• des `any` injustifiés sont introduits ;

• des types sont dupliqués ;

• des composants exposent une API mal typée ;

• les cas `null` ou `undefined` ne sont pas gérés ;

• les données externes sont utilisées sans validation ;

• des assertions (`!`) masquent un problème de conception.

---

# Best Practices

✔ Utiliser `strict`.

✔ Préférer `unknown` à `any`.

✔ Centraliser les types métier.

✔ Déclarer explicitement les retours de fonctions.

✔ Réutiliser les types existants.

✔ Employer les types utilitaires.

✔ Valider les données externes.

✔ Utiliser `import type`.

✔ Concevoir des API de composants fortement typées.

---

# Anti-Patterns

❌ Utiliser `any` comme solution de facilité.

❌ Dupliquer les interfaces.

❌ Mélanger plusieurs domaines dans un même type.

❌ Multiplier les assertions (`!`).

❌ Utiliser des génériques inutiles.

❌ Ignorer les cas `null`.

❌ Typer après avoir développé.

❌ Utiliser des chaînes de caractères là où une union est préférable.

❌ Exposer des types internes inutilement.

❌ Considérer que le compilateur garantit la validité des données.

---

# TypeScript Score

Mode Strict ................. /10

Qualité du typage ........... /10

Réutilisation des types ..... /10

API des composants .......... /10

Gestion des unions .......... /10

Validation des données ...... /10

Gestion du null ............. /10

Imports de types ............ /10

Maintenabilité .............. /10

Qualité globale ............. /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ Le mode `strict` est respecté.

✔ Aucun `any` injustifié n'est présent.

✔ Les composants possèdent des props correctement typées.

✔ Les données externes sont validées.

✔ Les types métier sont réutilisés.

✔ Les imports de types sont optimisés.

✔ Le score obtenu est de 100/100.

---

# Principe final

Le typage n'est pas une contrainte.

Il constitue une documentation vivante, un contrat entre les différentes parties du système et une protection contre les erreurs futures.

Le TypeScript Gate garantit que chaque évolution de GH Épaviste renforce la sécurité, la cohérence et la maintenabilité du code, tout en préparant sereinement les développements à venir.

# Fin du Chapitre 12

# ==========================================================
# QUALITY_GATE.md
# PARTIE III — ENGINEERING GATES
# CHAPITRE 13
# NEXT.JS GATE
# ==========================================================

# Objectif

Le Next.js Gate définit les critères permettant de garantir que chaque évolution de GH Épaviste respecte les bonnes pratiques officielles de Next.js App Router.

Son objectif est d'assurer une architecture performante, évolutive, maintenable et optimisée pour le référencement naturel.

Toute implémentation doit être compatible avec les recommandations du framework.

---

# Philosophie

Next.js fournit de nombreuses optimisations natives.

Le rôle des développeurs est de les exploiter correctement.

Le framework ne doit jamais être contourné sans justification technique solide.

La simplicité et l'utilisation des fonctionnalités natives sont privilégiées.

---

# Références

Toutes les validations doivent être compatibles avec :

• QUALITY_GATE.md

• Code Quality Gate

• TypeScript Gate

• DESIGN_SYSTEM.md

• RESPONSIVE_SPEC.md

• Documentation officielle Next.js

---

# Architecture App Router

Le projet respecte l'organisation App Router.

Vérifications :

□ Structure logique des dossiers

□ Layouts correctement utilisés

□ Pages indépendantes

□ Segments de routes cohérents

□ Organisation évolutive

L'architecture reste simple et prévisible.

---

# Server Components

Les Server Components sont utilisés par défaut.

Les Client Components sont réservés aux cas nécessitant :

• des interactions utilisateur ;

• un état local ;

• des effets (`useEffect`) ;

• des APIs navigateur.

Le principe est :

**Server First.**

---

# Client Components

Chaque composant client est justifié.

Avant d'ajouter `"use client"` :

□ le besoin est identifié ;

□ aucune alternative serveur n'est possible ;

□ l'impact sur les performances est évalué.

Les Client Components restent limités.

---

# Rendu

Le mode de rendu est choisi en fonction du besoin.

Les stratégies possibles sont :

□ Server Rendering

□ Static Rendering

□ Incremental Static Regeneration

Le choix doit être documenté lorsqu'il influence fortement le comportement.

---

# Métadonnées

Chaque page utilise le système `metadata` de Next.js.

Vérifications :

□ title

□ description

□ robots

□ Open Graph

□ alternates

□ canonical

□ autres métadonnées pertinentes

Les métadonnées sont générées de manière cohérente.

---

# Navigation

La navigation utilise les composants Next.js adaptés.

Vérifications :

□ `Link` pour les liens internes

□ Navigation fluide

□ Préchargement maîtrisé

□ URLs cohérentes

Les rechargements complets sont évités lorsque cela est possible.

---

# Images

Toutes les images utilisent `next/image`, sauf justification documentée.

Les vérifications portent sur :

□ dimensions définies ;

□ optimisation automatique ;

□ chargement adapté ;

□ texte alternatif.

Les images contribuent aux performances globales.

---

# Polices

Les polices utilisent `next/font` lorsque possible.

Objectifs :

□ réduction du CLS ;

□ optimisation du chargement ;

□ cohérence typographique.

---

# Gestion des états

Les fichiers suivants sont utilisés lorsque nécessaires :

□ loading.tsx

□ error.tsx

□ not-found.tsx

Chaque état améliore l'expérience utilisateur.

---

# Données

Les accès aux données sont :

□ regroupés ;

□ optimisés ;

□ limités au nécessaire.

Les appels redondants sont évités.

---

# Cache

La stratégie de cache est cohérente avec le contenu.

Les données statiques et dynamiques sont clairement distinguées.

Les comportements de revalidation sont maîtrisés.

---

# SEO

Les fonctionnalités Next.js liées au SEO sont exploitées :

□ metadata

□ sitemap

□ robots

□ données structurées

□ URLs propres

□ rendu compatible avec l'indexation.

---

# Performances

Les fonctionnalités natives de Next.js sont privilégiées :

□ découpage automatique du code ;

□ optimisation des images ;

□ optimisation des polices ;

□ Server Components ;

□ streaming lorsque pertinent.

Aucune implémentation ne doit dégrader ces optimisations.

---

# Sécurité

Les données sensibles ne sont jamais exposées au client.

Les variables d'environnement sont utilisées correctement.

Les routes serveur protègent les traitements sensibles.

---

# Cas spécifique GH ÉPAVISTE

Les éléments critiques concernent notamment :

• les pages locales ;

• les métadonnées SEO ;

• les données structurées ;

• le formulaire de contact ;

• la navigation ;

• le sitemap ;

• les composants réutilisables.

Toute évolution sur ces éléments nécessite une validation complète du Next.js Gate.

---

# Critères de rejet

Le Next.js Gate est automatiquement refusé si :

• `"use client"` est utilisé sans justification ;

• `next/image` est contourné sans raison valable ;

• `Link` est remplacé par des liens HTML internes sans nécessité ;

• les métadonnées sont absentes ou incohérentes ;

• la stratégie de rendu est inadaptée ;

• la gestion du cache provoque des comportements incorrects ;

• une optimisation native de Next.js est ignorée sans justification.

---

# Best Practices

✔ Server Components par défaut.

✔ Client Components uniquement lorsque nécessaires.

✔ Utiliser `metadata`.

✔ Utiliser `next/image`.

✔ Utiliser `next/font`.

✔ Structurer clairement l'App Router.

✔ Optimiser les appels aux données.

✔ Exploiter les optimisations natives.

✔ Préserver les performances.

---

# Anti-Patterns

❌ Ajouter `"use client"` partout.

❌ Désactiver les optimisations natives.

❌ Utiliser `<img>` sans justification.

❌ Recharger inutilement les pages.

❌ Mélanger logique serveur et logique client.

❌ Ignorer `loading.tsx` ou `error.tsx` lorsqu'ils sont nécessaires.

❌ Utiliser des stratégies de cache incohérentes.

❌ Dupliquer les métadonnées.

❌ Créer une architecture de routes difficile à maintenir.

❌ Contourner les conventions Next.js sans raison technique.

---

# Next.js Score

Architecture App Router ..... /10

Server Components ........... /10

Client Components ........... /10

Rendu ....................... /10

Métadonnées ................. /10

Navigation .................. /10

Optimisations natives ....... /10

Cache ....................... /10

Performances ................ /10

Qualité globale ............. /10

Score minimal :

100 /100

---

# Validation

Avant toute Release :

✔ L'architecture App Router est conforme.

✔ Les Server Components sont privilégiés.

✔ Les Client Components sont justifiés.

✔ Les métadonnées sont complètes.

✔ Les optimisations natives sont utilisées.

✔ Les performances sont préservées.

✔ Les stratégies de rendu et de cache sont adaptées.

✔ Le score obtenu est de 100/100.

---

# Principe final

Next.js n'est pas seulement un framework.

Il constitue l'architecture de référence du projet.

Le Next.js Gate garantit que chaque évolution de GH Épaviste exploite pleinement les capacités du framework, préserve les performances, facilite la maintenance et renforce durablement la qualité technique du produit.

# Fin du Chapitre 13

# ==========================================================
# QUALITY_GATE.md
# PARTIE III — ENGINEERING GATES
# CHAPITRE 14
# SECURITY GATE
# ==========================================================


# Objectif

Le Security Gate définit les critères permettant de garantir que le projet GH Épaviste respecte les meilleures pratiques modernes de sécurité applicative.

Son objectif est de protéger :

• les utilisateurs ;

• les données ;

• les formulaires ;

• les API ;

• les variables sensibles ;

• l'infrastructure de déploiement.


Toute évolution doit maintenir un niveau de sécurité compatible avec un environnement de production professionnel.


---


# Philosophie

La sécurité doit être intégrée dès la conception.

Elle ne doit pas être ajoutée après le développement.

Chaque fonctionnalité doit respecter les principes suivants :

• minimisation des données ;

• protection des secrets ;

• validation des entrées ;

• limitation des accès ;

• réduction de la surface d'attaque.


Le principe principal est :

**Secure By Default.**


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• Code Quality Gate

• TypeScript Gate

• Next.js Gate

• Documentation officielle Next.js

• Recommandations OWASP


---


# Gestion des secrets

Aucun secret ne doit être exposé dans le code source.


Vérifications :


□ aucune clé API dans les fichiers TypeScript ;

□ aucun mot de passe dans le repository ;

□ aucun token dans Git ;

□ les variables sensibles utilisent `.env` ;

□ les fichiers sensibles sont ignorés par Git.


Exemples de fichiers protégés :


.env

.env.local

credentials.json

*.key


---


# Variables d'environnement

Les variables d'environnement sont utilisées correctement.


Vérifications :


□ les secrets restent côté serveur ;

□ les variables publiques utilisent uniquement `NEXT_PUBLIC_` ;

□ aucune donnée privée n'est envoyée au navigateur ;

□ les environnements Development, Preview et Production sont séparés.


Principe :


Les données sensibles restent toujours côté serveur.


---


# Protection des données serveur

Les informations privées ne doivent jamais être exposées aux composants clients.


Vérifications :


□ les Server Components restent prioritaires ;

□ les secrets ne sont jamais importés dans un Client Component ;

□ les appels sensibles restent côté serveur ;

□ les réponses API ne retournent pas de données inutiles.


---


# Validation des entrées utilisateur

Toutes les données provenant des utilisateurs doivent être contrôlées.


Sources concernées :


□ formulaires ;

□ paramètres URL ;

□ requêtes API ;

□ fichiers envoyés ;

□ données externes.


Vérifications :


□ validation des formats ;

□ limitation des longueurs ;

□ nettoyage des contenus ;

□ gestion des erreurs.


Les données utilisateurs ne doivent jamais être considérées comme fiables par défaut.


---


# Sécurité des formulaires

Les formulaires publics doivent être protégés.


Vérifications :


□ validation côté serveur ;

□ protection anti-spam ;

□ limitation des soumissions ;

□ messages d'erreur contrôlés ;

□ aucune donnée sensible exposée.


Cas GH Épaviste :


Le formulaire de contact doit garantir :


□ réception fiable des demandes ;

□ protection contre les abus ;

□ protection de l'adresse email interne ;

□ validation du message utilisateur.


---


# Sécurité des API Routes

Toutes les routes serveur doivent respecter les règles de sécurité.


Vérifications :


□ méthodes HTTP contrôlées ;

□ données entrantes validées ;

□ erreurs internes masquées ;

□ réponses limitées au nécessaire ;

□ absence d'informations sensibles.


Une API ne doit jamais exposer :


• stack trace ;

• chemins serveur ;

• clés privées ;

• informations système.


---


# Protection XSS

L'application doit empêcher l'injection de scripts malveillants.


Vérifications :


□ aucun HTML utilisateur injecté directement ;

□ utilisation contrôlée de `dangerouslySetInnerHTML` ;

□ contenu dynamique nettoyé ;

□ affichage sécurisé des données.


---


# Protection CSRF

Les actions sensibles doivent être protégées contre les requêtes non autorisées.


Vérifications :


□ protection CSRF lorsque nécessaire ;

□ contrôle de l'origine des requêtes ;

□ validation des actions sensibles.


---


# Headers de sécurité HTTP

Les headers de sécurité doivent être configurés.


Vérifications :


□ Content-Security-Policy ;

□ X-Frame-Options ;

□ X-Content-Type-Options ;

□ Referrer-Policy ;

□ Permissions-Policy ;

□ Strict-Transport-Security.


Objectif :


Réduire les risques liés aux attaques navigateur.


---


# HTTPS et transport sécurisé

Toutes les communications doivent être sécurisées.


Vérifications :


□ HTTPS actif ;

□ certificat SSL valide ;

□ redirection HTTP vers HTTPS ;

□ aucun contenu mixte HTTP/HTTPS.


Production attendue :


https://gh-epaviste.fr


---


# Sécurité des dépendances

Les dépendances utilisées doivent rester sécurisées.


Vérifications :


□ audit npm effectué ;

□ vulnérabilités critiques corrigées ;

□ packages inutilisés supprimés ;

□ versions surveillées.


Commandes recommandées :


npm audit


---


# Sécurité Git

Le repository doit protéger le code source.


Vérifications :


□ `.gitignore` correctement configuré ;

□ aucun secret dans l'historique Git ;

□ branches protégées ;

□ commits contrôlés.


Interdit :


❌ commit de fichiers `.env`

❌ commit de clés privées

❌ commit de tokens


---


# Sécurité CI/CD

Le processus de déploiement doit être sécurisé.


Vérifications :


□ build validé avant production ;

□ variables secrètes protégées ;

□ permissions limitées ;

□ déploiements contrôlés.


Pipeline recommandé :


Code

↓

Validation

↓

Tests

↓

Build

↓

Déploiement


---


# Sécurité Vercel

L'infrastructure Vercel doit respecter les bonnes pratiques.


Vérifications :


□ variables d'environnement configurées correctement ;

□ domaines vérifiés ;

□ accès projet limités ;

□ logs protégés ;

□ environnement Production séparé.


---


# Sécurité Email

Les services email doivent empêcher les abus.


Vérifications :


□ clé API protégée ;

□ expéditeur contrôlé ;

□ validation des emails entrants ;

□ protection anti-spam.


Cas GH Épaviste :


Le formulaire utilise une architecture sécurisée :


Utilisateur

↓

Formulaire

↓

Validation serveur

↓

API Email

↓

contact@gh-epaviste.fr


---


# Monitoring et surveillance

Les erreurs doivent être détectées rapidement.


Vérifications :


□ erreurs surveillées ;

□ logs propres ;

□ aucune information sensible dans les logs ;

□ incidents identifiables.


---


# Sécurité SEO

La sécurité ne doit pas dégrader le référencement.


Vérifications :


□ sitemap.xml contrôlé ;

□ robots.txt sécurisé ;

□ aucune page spam générée ;

□ URLs propres ;

□ contenu injecté impossible.


---


# Cas spécifique GH ÉPAVISTE

Les points critiques de sécurité concernent notamment :


• formulaire de contact ;

• API d'envoi email ;

• variables Vercel ;

• domaine et DNS ;

• données structurées ;

• pages locales ;

• génération automatique des pages communes.


Toute modification importante nécessite une validation complète du Security Gate.


---


# Critères de rejet

Le Security Gate est automatiquement refusé si :


• une clé API est exposée ;

• un secret apparaît dans Git ;

• une donnée privée arrive côté client ;

• une entrée utilisateur n'est pas validée ;

• une API expose des informations internes ;

• une dépendance critique vulnérable reste active ;

• HTTPS n'est pas correctement configuré ;

• les protections serveur sont absentes.


---


# Best Practices


✔ Garder les secrets côté serveur.

✔ Valider toutes les entrées utilisateur.

✔ Utiliser HTTPS partout.

✔ Maintenir les dépendances à jour.

✔ Limiter les permissions.

✔ Protéger les API.

✔ Surveiller les erreurs.

✔ Appliquer une approche Secure By Default.


---


# Anti-Patterns


❌ Mettre des clés API dans le code.

❌ Utiliser des variables sensibles en `NEXT_PUBLIC_`.

❌ Faire confiance aux données utilisateur.

❌ Exposer les erreurs internes.

❌ Ignorer les mises à jour de sécurité.

❌ Ajouter des scripts externes sans contrôle.

❌ Envoyer des secrets au navigateur.

❌ Désactiver les protections pour gagner du temps.


---


# Security Score


Gestion des secrets ............ /10

Variables environnement ....... /10

Protection serveur ............. /10

Validation des données ......... /10

Sécurité API ................... /10

Protection navigateur .......... /10

Dépendances ................... /10

Git et CI/CD ................... /10

Infrastructure ................. /10

Monitoring ..................... /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ Aucun secret exposé.

✔ Les variables d'environnement sont sécurisées.

✔ Les formulaires sont protégés.

✔ Les API sont validées.

✔ HTTPS est actif.

✔ Les dépendances sont auditées.

✔ Le déploiement est sécurisé.

✔ Le score obtenu est de 100/100.


---


# Principe final


La sécurité n'est pas une fonctionnalité supplémentaire.

Elle constitue une base obligatoire du projet.


Le Security Gate garantit que GH Épaviste reste sécurisé, fiable, maintenable et prêt pour un environnement professionnel de production.


# Fin du Chapitre 14

# ==========================================================
# QUALITY_GATE.md
# PARTIE IV — PRODUCT GATES
# CHAPITRE 15
# FORMS GATE
# ==========================================================


# Objectif

Le Forms Gate définit les critères permettant de garantir que tous les formulaires du projet GH Épaviste sont fiables, sécurisés, accessibles et optimisés pour la conversion.

Son objectif est d'assurer que chaque formulaire :

• fonctionne correctement ;

• protège les données utilisateur ;

• limite les erreurs ;

• facilite la prise de contact ;

• améliore l'expérience utilisateur.


Un formulaire de production doit être considéré comme un élément stratégique du produit.


---


# Philosophie

Un formulaire n'est pas uniquement un composant technique.

Il représente le point de contact direct entre l'utilisateur et l'entreprise.

Chaque formulaire doit respecter trois principes fondamentaux :


**Simple.**

Réduire les obstacles.


**Fiable.**

Garantir la transmission correcte des informations.


**Convertissant.**

Encourager l'utilisateur à finaliser son action.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• UI Quality Gate

• Accessibility Gate

• Security Gate

• SEO Gate

• Conversion Gate


---


# Structure des formulaires

Chaque formulaire doit avoir une structure claire.


Vérifications :


□ champs nécessaires uniquement ;

□ ordre logique des informations ;

□ labels explicites ;

□ messages compréhensibles ;

□ bouton d'action identifiable.


Aucun champ inutile ne doit réduire le taux de conversion.


---


# Simplicité UX

Les formulaires doivent minimiser l'effort utilisateur.


Vérifications :


□ nombre de champs limité ;

□ saisie rapide sur mobile ;

□ aucune information demandée sans justification ;

□ parcours utilisateur évident.


Principe :


Chaque champ supplémentaire peut réduire la conversion.


---


# Champs obligatoires et optionnels

Chaque champ doit avoir une justification.


Vérifications :


□ champs obligatoires clairement indiqués ;

□ champs optionnels réellement utiles ;

□ validation adaptée au besoin.


Les informations demandées doivent correspondre uniquement à l'objectif du formulaire.


---


# Validation des données

Toutes les données entrées par l'utilisateur doivent être contrôlées.


Vérifications :


□ format email vérifié ;

□ longueur des messages limitée ;

□ caractères dangereux filtrés ;

□ données nettoyées côté serveur.


La validation côté client ne remplace jamais la validation serveur.


---


# Gestion des erreurs

Les erreurs doivent aider l'utilisateur.


Vérifications :


□ message clair ;

□ emplacement visible ;

□ correction facile ;

□ aucune erreur technique affichée.


Exemple :


Mauvais :


"Error 500 Database Exception"


Correct :


"Une erreur est survenue. Veuillez réessayer."


---


# États du formulaire

Chaque état doit être prévu.


Vérifications :


□ état initial ;

□ chargement ;

□ succès ;

□ erreur ;

□ validation impossible.


Exemple :


Utilisateur

↓

Envoi

↓

Chargement

↓

Confirmation


---


# Boutons et Call To Action

Les boutons doivent être explicites.


Vérifications :


□ texte orienté action ;

□ taille adaptée mobile ;

□ état désactivé géré ;

□ feedback après clic.


Exemples recommandés :


"Envoyer ma demande"

"Demander un enlèvement"


Éviter :


"Valider"

"OK"


---


# Accessibilité des formulaires

Les formulaires doivent être utilisables par tous.


Vérifications :


□ labels associés aux champs ;

□ navigation clavier possible ;

□ contraste suffisant ;

□ messages compatibles lecteur d'écran ;

□ erreurs accessibles.


---


# Mobile First

Les formulaires doivent être optimisés pour smartphone.


Vérifications :


□ champs adaptés tactile ;

□ clavier mobile approprié ;

□ boutons suffisamment grands ;

□ aucun défilement inutile ;


Le mobile représente une priorité pour GH Épaviste.


---


# Performance

Les formulaires ne doivent pas dégrader les performances.


Vérifications :


□ chargement rapide ;

□ composants optimisés ;

□ scripts limités ;

□ validation efficace.


---


# Sécurité formulaire

Les formulaires publics doivent respecter les règles de sécurité.


Vérifications :


□ protection anti-spam ;

□ validation serveur ;

□ protection contre injections ;

□ limitation des envois ;

□ aucune donnée sensible exposée.


Référence :


Security Gate


---


# Envoi des messages

Le système d'envoi doit être fiable.


Cas GH Épaviste :


Architecture recommandée :


Utilisateur

↓

Formulaire Next.js

↓

Validation serveur

↓

API sécurisée

↓

Resend

↓

contact@gh-epaviste.fr


Vérifications :


□ clé API protégée ;

□ email envoyé correctement ;

□ erreurs détectées ;

□ logs contrôlés.


---


# Confirmation utilisateur

Après soumission, l'utilisateur doit recevoir un retour clair.


Vérifications :


□ confirmation visible ;

□ indication de prise en charge ;

□ aucune ambiguïté ;


Exemple :


"Votre demande a bien été envoyée. Nous vous contacterons rapidement."


---


# Conversion

Le formulaire doit favoriser la prise de contact.


Vérifications :


□ position stratégique ;

□ CTA visible ;

□ friction réduite ;

□ confiance renforcée.


Les éléments suivants améliorent la conversion :


• disponibilité ;

• rapidité d'intervention ;

• zone couverte ;

• explication claire du service.


---


# SEO et formulaires

Les formulaires doivent respecter les bonnes pratiques SEO.


Vérifications :


□ pages accessibles aux moteurs ;

□ contenu explicatif autour du formulaire ;

□ pas uniquement un formulaire vide ;

□ données structurées cohérentes.


---


# Cas spécifique GH ÉPAVISTE


Le formulaire principal doit permettre :


□ demande d'enlèvement d'épave ;

□ description libre du besoin ;

□ contact rapide ;

□ utilisation simple sur mobile ;


Le formulaire ne doit pas demander :


❌ informations inutiles ;

❌ documents non nécessaires ;

❌ informations administratives complexes.


Objectif :


Transformer une visite en demande réelle d'intervention.


---


# Critères de rejet

Le Forms Gate est automatiquement refusé si :


• le formulaire ne fonctionne pas ;

• les messages ne sont pas reçus ;

• les erreurs sont incompréhensibles ;

• les données ne sont pas validées ;

• la sécurité est insuffisante ;

• l'expérience mobile est mauvaise ;

• trop de champs bloquent la conversion.


---


# Best Practices


✔ Garder les formulaires simples.

✔ Valider côté client et serveur.

✔ Donner un retour immédiat.

✔ Optimiser mobile.

✔ Protéger contre le spam.

✔ Utiliser des CTA clairs.

✔ Tester régulièrement l'envoi.


---


# Anti-Patterns


❌ Formulaire trop long.

❌ Champs inutiles.

❌ Aucun message de confirmation.

❌ Erreurs techniques visibles.

❌ Pas de protection anti-spam.

❌ Bouton vague.

❌ Validation uniquement côté navigateur.

❌ Formulaire difficile sur mobile.


---


# Forms Score


Structure ..................... /10

Simplicité UX ................. /10

Validation .................... /10

Gestion erreurs ............... /10

Accessibilité ................. /10

Mobile ......................... /10

Sécurité ...................... /10

Fiabilité envoi ............... /10

Conversion .................... /10

Expérience utilisateur ........ /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ Les formulaires fonctionnent.

✔ Les données sont correctement validées.

✔ Les erreurs sont compréhensibles.

✔ Les messages arrivent correctement.

✔ La sécurité est respectée.

✔ L'expérience mobile est optimisée.

✔ Le score obtenu est de 100/100.


---


# Principe final


Un formulaire est une passerelle entre un utilisateur et l'entreprise.

Le Forms Gate garantit que chaque demande client est capturée avec fiabilité, simplicité et efficacité.


Pour GH Épaviste, le formulaire représente un élément essentiel de conversion et doit toujours rester rapide, clair et sécurisé.


# Fin du Chapitre 15

# ==========================================================
# QUALITY_GATE.md
# PARTIE IV — PRODUCT GATES
# CHAPITRE 16
# CONTENT QUALITY GATE
# ==========================================================


# Objectif

Le Content Quality Gate définit les critères permettant de garantir que tous les contenus publiés sur GH Épaviste sont utiles, fiables, compréhensibles et optimisés pour les utilisateurs ainsi que pour les moteurs de recherche.

Son objectif est d'assurer que chaque contenu :

• répond réellement à une intention utilisateur ;

• apporte une valeur unique ;

• respecte l'identité de l'entreprise ;

• améliore la confiance ;

• respecte les exigences SEO modernes.


Un contenu publié en production doit être considéré comme une ressource professionnelle.


---


# Philosophie

Le contenu n'est pas créé uniquement pour les moteurs de recherche.

Il est créé avant tout pour aider les utilisateurs.


Chaque contenu doit respecter le principe :


**Useful First. SEO Second.**


La qualité prime toujours sur la quantité.


Une page doit exister uniquement si elle apporte une information utile.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• SEO Gate

• Brand Consistency Gate

• Trust Gate

• Conversion Gate

• Documentation Google Search Central


---


# Exactitude des informations

Chaque information publiée doit être correcte et vérifiable.


Vérifications :


□ informations professionnelles exactes ;

□ services réellement proposés ;

□ zones d'intervention cohérentes ;

□ aucune promesse impossible ;

□ aucune information trompeuse.


Les contenus doivent représenter la réalité de GH Épaviste.


---


# Terminologie professionnelle

Le vocabulaire utilisé doit être précis.


Vérifications :


□ utilisation des bons termes métier ;

□ cohérence entre toutes les pages ;

□ absence de termes juridiquement incorrects ;

□ distinction claire entre services et certifications.


Cas GH Épaviste :


Le contenu ne doit jamais utiliser :


❌ "Agréé VHU"


si l'entreprise ne possède pas elle-même cet agrément.


Les formulations correctes privilégient :


✔ "Service d'enlèvement d'épaves"

✔ "Épaviste professionnel"

✔ "Intervention rapide en Île-de-France"


---


# Qualité rédactionnelle

Chaque texte doit respecter des standards professionnels.


Vérifications :


□ phrases compréhensibles ;

□ vocabulaire adapté ;

□ absence de répétitions inutiles ;

□ structure claire ;

□ ton professionnel.


---


# Orthographe et grammaire

Tous les contenus doivent être vérifiés.


Vérifications :


□ aucune faute majeure ;

□ accords corrects ;

□ ponctuation correcte ;

□ accents respectés ;

□ noms propres correctement écrits.


Une faute visible peut réduire la confiance utilisateur.


---


# Lisibilité

Le contenu doit être facilement compréhensible.


Vérifications :


□ paragraphes courts ;

□ titres hiérarchisés ;

□ listes utilisées lorsque nécessaire ;

□ informations importantes mises en avant.


Le contenu doit être lisible sur ordinateur et mobile.


---


# Structure des contenus

Chaque page doit avoir une organisation logique.


Vérifications :


□ un titre principal unique ;

□ titres H2/H3 cohérents ;

□ introduction claire ;

□ développement structuré ;

□ conclusion ou action suivante.


Structure recommandée :


H1

↓

Introduction

↓

Sections principales

↓

Questions fréquentes

↓

CTA


---


# Intention utilisateur

Chaque page doit répondre à une recherche précise.


Vérifications :


□ intention identifiée ;

□ réponse directe apportée ;

□ informations utiles présentes ;

□ aucun contenu artificiel.


Exemples :


"enlèvement épave Paris"

doit répondre à :


• comment fonctionne l'intervention ;

• quelles zones sont couvertes ;

• comment contacter le service.


---


# Contenu local SEO

Les pages locales doivent apporter une vraie valeur.


Vérifications :


□ commune réellement ciblée ;

□ informations locales pertinentes ;

□ zone d'intervention cohérente ;

□ contenu différent selon les pages.


Interdit :


❌ remplacer uniquement le nom de ville dans un modèle identique.


---


# Pages générées automatiquement

Les pages générées à grande échelle doivent rester qualitatives.


Cas GH Épaviste :


Pages communes et départements.


Vérifications :


□ contenu unique ;

□ informations adaptées ;

□ absence de pages faibles ;

□ liens internes cohérents.


La quantité ne doit jamais remplacer la qualité.


---


# Contenu dupliqué

Le contenu similaire excessif doit être évité.


Vérifications :


□ textes uniques ;

□ introductions différentes ;

□ informations locales spécifiques ;

□ absence de copier-coller massif.


Les pages doivent avoir une véritable raison d'exister.


---


# FAQ Quality Gate

Les FAQ doivent répondre aux vraies questions utilisateurs.


Vérifications :


□ questions fréquentes ;

□ réponses précises ;

□ vocabulaire naturel ;

□ données structurées correctes.


Une FAQ ne doit pas être créée uniquement pour ajouter des mots-clés.


---


# Images et médias

Les médias doivent améliorer le contenu.


Vérifications :


□ images pertinentes ;

□ textes alternatifs présents ;

□ poids optimisé ;

□ cohérence avec la page.


---


# Liens internes

Le contenu doit faciliter la navigation.


Vérifications :


□ liens utiles ;

□ ancres naturelles ;

□ absence de sur-optimisation ;

□ parcours logique.


Les liens internes doivent aider l'utilisateur avant le SEO.


---


# Contenu commercial

Les contenus commerciaux doivent rester naturels.


Vérifications :


□ bénéfices clairement expliqués ;

□ services présentés honnêtement ;

□ CTA présents sans excès ;

□ absence de promesses exagérées.


---


# Mise à jour des contenus

Les contenus doivent rester fiables dans le temps.


Vérifications :


□ informations actualisées ;

□ anciennes informations supprimées ;

□ évolution des services prise en compte.


---


# Cas spécifique GH ÉPAVISTE


Les contenus critiques concernent notamment :


• pages services ;

• pages communes ;

• pages départements ;

• FAQ ;

• guides ;

• pages contact ;

• mentions légales.


Chaque page doit renforcer :


• visibilité locale ;

• confiance ;

• compréhension du service ;

• prise de contact.


---


# Critères de rejet

Le Content Quality Gate est automatiquement refusé si :


• contenu faux ou trompeur ;

• fautes importantes ;

• pages générées sans valeur ;

• contenu dupliqué massif ;

• mauvaise terminologie métier ;

• absence de réponse utilisateur ;

• contenu créé uniquement pour manipuler Google.


---


# Best Practices


✔ Écrire pour les utilisateurs.

✔ Vérifier chaque information.

✔ Garder un langage professionnel.

✔ Créer du contenu utile.

✔ Optimiser sans sur-optimiser.

✔ Maintenir la cohérence métier.

✔ Améliorer régulièrement les pages existantes.


---


# Anti-Patterns


❌ Copier-coller entre pages locales.

❌ Remplir les pages avec des mots-clés.

❌ Inventer des services.

❌ Utiliser des termes juridiques incorrects.

❌ Publier du contenu IA non vérifié.

❌ Créer des pages sans utilité réelle.

❌ Négliger l'orthographe.


---


# Content Score


Exactitude .................... /10

Terminologie .................. /10

Orthographe ................... /10

Lisibilité .................... /10

Structure ..................... /10

Intention utilisateur ......... /10

SEO local ..................... /10

Originalité ................... /10

Confiance ..................... /10

Valeur utilisateur ............ /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ Les contenus sont exacts.

✔ La terminologie est correcte.

✔ Les pages locales apportent une vraie valeur.

✔ Aucun contenu dupliqué critique existe.

✔ Les textes sont lisibles.

✔ Les contenus renforcent la confiance.

✔ Le score obtenu est de 100/100.


---


# Principe final


Le contenu est la voix de GH Épaviste.

Le Content Quality Gate garantit que chaque page publiée représente une information fiable, professionnelle et utile pour les utilisateurs.


La qualité du contenu construit la visibilité, la confiance et la croissance durable du projet.


# Fin du Chapitre 16

# ==========================================================
# QUALITY_GATE.md
# PARTIE IV — PRODUCT GATES
# CHAPITRE 17
# BRAND CONSISTENCY GATE
# ==========================================================


# Objectif

Le Brand Consistency Gate définit les critères permettant de garantir que toutes les interfaces, contenus et communications de GH Épaviste respectent une identité de marque cohérente, professionnelle et reconnaissable.

Son objectif est d'assurer une cohérence permanente entre :


• le site internet ;

• les pages locales ;

• les contenus SEO ;

• les formulaires ;

• les communications clients ;

• les plateformes externes.


Toute évolution doit renforcer l'image professionnelle de GH Épaviste.


---


# Philosophie

Une marque forte repose sur la cohérence.

Chaque élément visible par un utilisateur participe à la perception de l'entreprise.


Le principe est :


**Une marque. Un message. Une expérience.**


La qualité visuelle et rédactionnelle doit rester constante sur tous les supports.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• Design System

• Content Quality Gate

• Trust Gate

• Conversion Gate

• SEO Local


---


# Identité de marque

L'identité GH Épaviste doit être clairement définie.


Vérifications :


□ nom officiel utilisé correctement ;

□ logo cohérent ;

□ couleurs respectées ;

□ typographies cohérentes ;

□ style visuel uniforme.


Nom officiel :


GH Épaviste


---


# Utilisation du nom de marque

Le nom de l'entreprise doit être utilisé de manière constante.


Vérifications :


□ même orthographe partout ;

□ même capitalisation ;

□ aucune variante incorrecte.


Correct :


✔ GH Épaviste


À éviter :


❌ GH Epaviste

❌ GH épaviste

❌ GH Épaviste France (sans validation)


---


# Positionnement de marque

Le positionnement doit rester clair.


GH Épaviste représente :


• un service professionnel d'enlèvement d'épaves ;

• une intervention rapide ;

• un service local en Île-de-France ;

• une prise en charge simple pour les propriétaires de véhicules.


Toutes les communications doivent renforcer ce positionnement.


---


# Terminologie officielle

Le vocabulaire utilisé doit respecter la réalité de l'entreprise.


Vérifications :


□ services décrits correctement ;

□ absence de termes trompeurs ;

□ cohérence juridique.


Cas spécifique GH Épaviste :


Interdit :


❌ "Agréé VHU"


si l'entreprise ne possède pas elle-même cet agrément.


Utiliser :


✔ Épaviste professionnel

✔ Enlèvement d'épave

✔ Service d'enlèvement de véhicules

✔ Intervention en Île-de-France


---


# Ton rédactionnel

La communication doit conserver une voix cohérente.


Le ton GH Épaviste doit être :


□ professionnel ;

□ rassurant ;

□ simple ;

□ accessible ;

□ orienté service.


À éviter :


❌ langage trop technique ;

❌ promesses excessives ;

❌ formulations agressives ;


---


# Style de communication

Chaque message doit refléter les valeurs de l'entreprise.


Valeurs principales :


• rapidité ;

• sérieux ;

• confiance ;

• simplicité ;

• accompagnement.


Chaque contenu doit répondre à la question utilisateur :


"Pourquoi choisir GH Épaviste ?"


---


# Cohérence visuelle

Toutes les interfaces doivent respecter la même direction artistique.


Vérifications :


□ composants UI cohérents ;

□ boutons uniformes ;

□ espacements réguliers ;

□ icônes cohérentes ;

□ images adaptées.


Aucune page ne doit sembler appartenir à une autre marque.


---


# Design System

Le Design System constitue la référence visuelle.


Vérifications :


□ composants réutilisés ;

□ couleurs centralisées ;

□ styles non dupliqués ;

□ règles respectées.


Les exceptions doivent être justifiées.


---


# Logo et éléments graphiques

Les éléments graphiques doivent être utilisés correctement.


Vérifications :


□ dimensions respectées ;

□ proportions conservées ;

□ qualité suffisante ;

□ emplacement cohérent.


Interdit :


❌ déformation du logo ;

❌ modification non validée ;

❌ utilisation d'une version différente.


---


# Pages locales SEO

Les pages locales doivent conserver l'identité GH Épaviste.


Vérifications :


□ même positionnement ;

□ même niveau de qualité ;

□ même ton professionnel ;

□ adaptation locale réelle.


Les pages communes ne doivent jamais devenir des copies automatiques sans identité.


---


# Réseaux et plateformes externes

La cohérence doit être maintenue hors du site.


Supports concernés :


• annuaires ;

• fiches entreprises ;

• réseaux sociaux ;

• profils locaux.


Vérifications :


□ nom identique ;

□ description cohérente ;

□ services identiques ;

□ informations fiables.


---


# Expérience utilisateur de marque

Chaque interaction doit renforcer la confiance.


Vérifications :


□ messages clairs ;

□ navigation intuitive ;

□ réponses professionnelles ;

□ absence d'éléments contradictoires.


L'utilisateur doit reconnaître GH Épaviste immédiatement.


---


# Intelligence artificielle et marque

Toute modification réalisée par une IA doit respecter l'identité existante.


Vérifications :


□ lecture obligatoire de la documentation projet ;

□ respect du vocabulaire officiel ;

□ absence d'invention ;

□ validation avant publication.


Une IA ne doit jamais modifier l'identité de marque seule.


---


# Cas spécifique GH ÉPAVISTE


Les éléments critiques sont :


• logo GH Épaviste ;

• nom de domaine gh-epaviste.fr ;

• couleurs principales ;

• messages commerciaux ;

• terminologie métier ;

• pages SEO locales.


Chaque nouvelle fonctionnalité doit renforcer la reconnaissance de la marque.


---


# Critères de rejet

Le Brand Consistency Gate est automatiquement refusé si :


• le nom de marque est incorrect ;

• l'identité visuelle change sans validation ;

• les textes utilisent une mauvaise terminologie ;

• les pages donnent une image différente ;

• les promesses commerciales sont incohérentes ;

• les contenus contredisent la réalité de l'entreprise.


---


# Best Practices


✔ Maintenir une identité stable.

✔ Documenter les règles de marque.

✔ Utiliser les composants existants.

✔ Garder un vocabulaire officiel.

✔ Vérifier chaque contenu externe.

✔ Préserver la confiance utilisateur.


---


# Anti-Patterns


❌ Changer les couleurs sans validation.

❌ Créer des pages avec un ton différent.

❌ Utiliser plusieurs noms d'entreprise.

❌ Inventer des certifications.

❌ Copier les concurrents.

❌ Modifier le logo.

❌ Utiliser un vocabulaire incohérent.


---


# Brand Score


Identité visuelle ............. /10

Nom de marque ................. /10

Terminologie .................. /10

Ton rédactionnel .............. /10

Cohérence UX .................. /10

Design System ................. /10

Pages locales ................. /10

Communication externe ......... /10

Confiance ..................... /10

Cohérence globale ............. /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ L'identité GH Épaviste est respectée.

✔ Le vocabulaire officiel est utilisé.

✔ Les interfaces restent cohérentes.

✔ Les contenus externes sont alignés.

✔ Les promesses correspondent aux services réels.

✔ Le score obtenu est de 100/100.


---


# Principe final


Une marque professionnelle se construit par la répétition cohérente des mêmes valeurs, du même message et de la même qualité.


Le Brand Consistency Gate garantit que GH Épaviste reste identifiable, crédible et professionnel à travers toutes ses évolutions.


# Fin du Chapitre 17

# ==========================================================
# QUALITY_GATE.md
# PARTIE IV — PRODUCT GATES
# CHAPITRE 18
# TRUST GATE
# ==========================================================


# Objectif

Le Trust Gate définit les critères permettant de garantir que GH Épaviste inspire confiance, crédibilité et sécurité auprès des utilisateurs.

Son objectif est de vérifier que chaque élément du produit renforce la confiance grâce à :


• la transparence ;

• la crédibilité ;

• la preuve professionnelle ;

• la clarté des informations ;

• la qualité de l'expérience utilisateur.


Un utilisateur doit pouvoir comprendre rapidement :

Qui est GH Épaviste ?

Quels services sont proposés ?

Pourquoi faire confiance à l'entreprise ?


---


# Philosophie

La confiance ne se déclare pas.

Elle se construit par des preuves.


Chaque élément visible doit réduire les doutes de l'utilisateur.


Le principe est :


**Trust Before Conversion.**


Avant de demander une action, l'entreprise doit rassurer.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• Brand Consistency Gate

• Content Quality Gate

• Conversion Gate

• SEO Gate

• Google E-E-A-T Guidelines


---


# Identité professionnelle

L'entreprise doit présenter une identité claire.


Vérifications :


□ nom d'entreprise visible ;

□ activité clairement expliquée ;

□ zone d'intervention indiquée ;

□ moyens de contact accessibles ;

□ informations cohérentes partout.


L'utilisateur ne doit jamais avoir de doute sur l'entreprise.


---


# Transparence des services

Les services doivent être décrits honnêtement.


Vérifications :


□ services réellement proposés ;

□ limites clairement indiquées ;

□ aucune promesse impossible ;

□ informations légales respectées.


Cas GH Épaviste :


Le site doit présenter clairement :


✔ service d'enlèvement d'épaves ;

✔ intervention en Île-de-France ;

✔ accompagnement du client ;


Le site ne doit jamais prétendre posséder une certification non détenue.


---


# Crédibilité professionnelle

La présentation doit démontrer le sérieux de l'entreprise.


Vérifications :


□ informations professionnelles complètes ;

□ présentation claire de l'activité ;

□ expérience mise en valeur sans exagération ;

□ processus d'intervention expliqué.


La confiance vient de la compréhension du fonctionnement.


---


# Preuves de confiance

Les éléments de preuve doivent être présents lorsque disponibles.


Vérifications :


□ avis clients authentiques ;

□ témoignages vérifiables ;

□ réalisations ou exemples ;

□ informations locales pertinentes.


Interdit :


❌ faux avis ;

❌ fausses certifications ;

❌ chiffres inventés.


---


# Informations de contact

Les moyens de contact doivent être facilement accessibles.


Vérifications :


□ téléphone visible ;

□ formulaire fonctionnel ;

□ email professionnel ;

□ informations cohérentes.


Une entreprise difficile à contacter réduit fortement la confiance.


---


# Présence locale

La confiance locale est essentielle.


Vérifications :


□ zone d'intervention clairement indiquée ;

□ communes desservies cohérentes ;

□ informations locales utiles ;

□ pages locales de qualité.


Cas GH Épaviste :


La présence doit rester cohérente avec :


• Île-de-France ;

• services réellement disponibles ;

• organisation réelle de l'activité.


---


# Réassurance utilisateur

Chaque étape importante doit rassurer.


Éléments possibles :


□ intervention rapide ;

□ accompagnement personnalisé ;

□ explication du processus ;

□ réponse claire aux questions fréquentes.


La réassurance doit rester honnête.


---


# FAQ et confiance

La FAQ participe directement à la crédibilité.


Vérifications :


□ réponses aux vraies inquiétudes ;

□ informations simples ;

□ suppression des doutes fréquents ;

□ cohérence avec les services.


Questions importantes :


• Comment fonctionne l'enlèvement ?

• Quels véhicules sont concernés ?

• Comment prendre rendez-vous ?

• Quelles informations fournir ?


---


# Mentions légales et conformité

La conformité renforce la confiance.


Vérifications :


□ mentions légales accessibles ;

□ politique de confidentialité présente ;

□ informations obligatoires complètes ;

□ utilisation correcte des données.


---


# Sécurité comme facteur de confiance

La sécurité technique influence la perception utilisateur.


Vérifications :


□ HTTPS actif ;

□ formulaire sécurisé ;

□ absence d'alertes navigateur ;

□ protection des données.


Référence :


Security Gate


---


# Avis et réputation externe

La réputation numérique doit rester cohérente.


Supports concernés :


• Google Business Profile ;

• annuaires professionnels ;

• plateformes locales.


Vérifications :


□ informations identiques ;

□ réponses professionnelles ;

□ réputation surveillée.


---


# Design et confiance

Le design influence la crédibilité.


Vérifications :


□ interface professionnelle ;

□ absence d'éléments cassés ;

□ navigation claire ;

□ cohérence visuelle.


Un site amateur peut réduire la confiance même si le service est sérieux.


---


# Contenu et expertise

Le contenu doit démontrer une expertise réelle.


Vérifications :


□ explications utiles ;

□ conseils pratiques ;

□ réponses aux problèmes clients ;

□ contenu basé sur la réalité terrain.


L'objectif n'est pas seulement d'attirer du trafic, mais d'aider.


---


# Intelligence artificielle et confiance

Toute modification réalisée par une IA doit préserver la crédibilité.


Vérifications :


□ aucune invention de preuve ;

□ aucune fausse information ;

□ aucune certification créée ;

□ validation humaine avant publication.


Une IA doit améliorer le contenu sans fabriquer de confiance artificielle.


---


# Cas spécifique GH ÉPAVISTE


Les éléments prioritaires sont :


• transparence sur l'activité ;

• présentation professionnelle ;

• formulaire fiable ;

• coordonnées accessibles ;

• pages locales crédibles ;

• informations légales ;

• absence de fausses certifications.


Objectif :


Transformer un visiteur inquiet en client confiant.


---


# Critères de rejet

Le Trust Gate est automatiquement refusé si :


• informations fausses ;

• identité de l'entreprise ambiguë ;

• faux éléments de preuve ;

• certification inventée ;

• coordonnées incohérentes ;

• absence de transparence ;

• expérience utilisateur non rassurante.


---


# Best Practices


✔ Être transparent.

✔ Montrer des preuves réelles.

✔ Expliquer le fonctionnement.

✔ Garder les informations cohérentes.

✔ Faciliter le contact.

✔ Construire une réputation durable.


---


# Anti-Patterns


❌ Inventer des avis.

❌ Afficher de fausses certifications.

❌ Cacher les informations importantes.

❌ Utiliser des promesses irréalistes.

❌ Copier une identité concurrente.

❌ Créer du contenu uniquement marketing.


---


# Trust Score


Identité professionnelle ........ /10

Transparence .................... /10

Informations contact ............ /10

Réputation ...................... /10

Preuves de confiance ............ /10

Conformité ...................... /10

Contenu expertise ............... /10

Design confiance ................ /10

Sécurité utilisateur ............ /10

Crédibilité globale ............. /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ L'entreprise est clairement identifiée.

✔ Les services sont présentés honnêtement.

✔ Les informations sont cohérentes.

✔ Les utilisateurs peuvent contacter facilement GH Épaviste.

✔ Les preuves disponibles sont authentiques.

✔ Le site inspire confiance.

✔ Le score obtenu est de 100/100.


---


# Principe final


La confiance est la base d'une relation durable avec les clients.


Le Trust Gate garantit que GH Épaviste ne se contente pas d'être visible en ligne, mais devient une entreprise crédible, rassurante et professionnelle aux yeux des utilisateurs.


# Fin du Chapitre 18

# ==========================================================
# QUALITY_GATE.md
# PARTIE IV — PRODUCT GATES
# CHAPITRE 19
# CONVERSION GATE
# ==========================================================


# Objectif

Le Conversion Gate définit les critères permettant de garantir que GH Épaviste transforme efficacement les visiteurs du site en demandes réelles d'intervention.

Son objectif est d'optimiser :

• la prise de contact ;

• l'engagement utilisateur ;

• la compréhension du service ;

• la réduction des abandons ;

• la génération de demandes qualifiées.


Un site performant ne doit pas seulement être visité.

Il doit provoquer une action utile.


---


# Philosophie

La conversion ne consiste pas à forcer l'utilisateur.

Elle consiste à supprimer les obstacles qui empêchent une décision.


Le principe est :


**Make The Right Action Easy.**


Chaque élément doit guider naturellement l'utilisateur vers la prise de contact.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• UX Quality Gate

• Forms Gate

• Trust Gate

• Brand Consistency Gate

• SEO Gate


---


# Parcours utilisateur

Le parcours doit être clairement défini.


Vérifications :


□ arrivée depuis Google ;

□ compréhension immédiate du service ;

□ découverte des informations importantes ;

□ réassurance ;

□ prise de contact simple.


Parcours idéal :


Recherche Google

↓

Page locale ou service

↓

Compréhension

↓

Confiance

↓

Formulaire ou téléphone

↓

Demande d'intervention


---


# Proposition de valeur

L'utilisateur doit comprendre rapidement l'offre.


Vérifications :


□ service clairement expliqué ;

□ bénéfice utilisateur visible ;

□ zone d'intervention indiquée ;

□ élément différenciant présent.


Dans les premières secondes, l'utilisateur doit comprendre :


"GH Épaviste peut m'aider à enlever mon véhicule."


---


# Call To Action (CTA)

Les CTA doivent guider l'utilisateur.


Vérifications :


□ CTA visibles ;

□ textes explicites ;

□ position stratégique ;

□ cohérence entre pages.


CTA recommandés :


✔ Demander un enlèvement

✔ Contactez GH Épaviste

✔ Obtenir une intervention rapide


À éviter :


❌ Cliquez ici

❌ En savoir plus uniquement


---


# Placement des CTA

Les actions importantes doivent être accessibles.


Vérifications :


□ CTA dans le haut de page ;

□ CTA après les sections importantes ;

□ CTA proche des informations de confiance ;

□ CTA visible sur mobile.


Un utilisateur ne doit jamais chercher comment contacter l'entreprise.


---


# Conversion mobile

La majorité des recherches locales sont effectuées sur smartphone.


Vérifications :


□ bouton téléphone accessible ;

□ formulaire adapté mobile ;

□ CTA facilement cliquable ;

□ chargement rapide.


Priorité :


Mobile First.


---


# Réduction des frictions

Chaque obstacle peut provoquer un abandon.


Vérifications :


□ formulaire court ;

□ informations demandées limitées ;

□ navigation simple ;

□ absence d'étapes inutiles.


Les utilisateurs veulent une solution rapide.


---


# Psychologie utilisateur

Le parcours doit répondre aux préoccupations principales.


L'utilisateur cherche :


• une réponse rapide ;

• une entreprise sérieuse ;

• un processus simple ;

• une intervention possible.


Les contenus doivent réduire :


• doute ;

• peur ;

• hésitation.


---


# Réassurance avant conversion

La confiance doit apparaître avant l'action.


Vérifications :


□ informations professionnelles ;

□ explication du processus ;

□ zone d'intervention ;

□ FAQ ;

□ éléments de crédibilité.


Un utilisateur rassuré convertit mieux.


---


# Page d'arrivée (Landing Page)

Chaque page importante doit avoir un objectif clair.


Vérifications :


□ une intention principale ;

□ un message principal ;

□ un CTA principal ;

□ aucune distraction inutile.


Les pages locales SEO doivent également convertir.


---


# Pages locales et conversion

Les pages communes doivent transformer le trafic local.


Vérifications :


□ informations adaptées à la commune ;

□ service clairement présenté ;

□ CTA localisés ;

□ lien vers contact.


Une page locale ne doit pas être uniquement créée pour Google.


---


# Formulaire et conversion

Le formulaire est un élément critique.


Vérifications :


□ peu de champs ;

□ message libre possible ;

□ validation rapide ;

□ confirmation après envoi.


Référence :


Forms Gate


---


# Téléphone et contact direct

Le contact rapide doit être favorisé.


Vérifications :


□ numéro visible ;

□ clic téléphone mobile ;

□ accès depuis plusieurs pages ;

□ cohérence des informations.


Pour un service d'urgence ou rapide, le téléphone est un canal majeur.


---


# Vitesse et conversion

La performance influence directement l'action.


Vérifications :


□ pages rapides ;

□ Core Web Vitals corrects ;

□ images optimisées ;

□ scripts limités.


Un utilisateur impatient quitte rapidement un site lent.


---


# Analyse et amélioration

La conversion doit être mesurée.


Vérifications :


□ suivi des actions importantes ;

□ analyse des abandons ;

□ amélioration continue ;

□ tests réguliers.


Mesures possibles :


• clics téléphone ;

• envois formulaire ;

• pages les plus performantes ;

• sources de trafic.


---


# A/B Testing

Les modifications importantes doivent être évaluées.


Vérifications :


□ hypothèse définie ;

□ changement mesurable ;

□ comparaison des résultats.


Les changements ne doivent pas être basés uniquement sur des suppositions.


---


# IA et conversion

Toute modification générée par une IA doit préserver l'objectif commercial.


Vérifications :


□ CTA conservés ;

□ parcours utilisateur respecté ;

□ aucune suppression d'éléments importants ;

□ validation humaine.


Une IA doit améliorer la conversion, pas seulement modifier l'apparence.


---


# Cas spécifique GH ÉPAVISTE


Les éléments prioritaires sont :


• bouton d'appel rapide ;

• formulaire simple ;

• pages locales ;

• preuve de sérieux ;

• zone Île-de-France ;

• explication du processus.


Objectif :


Transformer chaque visite qualifiée en opportunité réelle.


---


# Critères de rejet

Le Conversion Gate est automatiquement refusé si :


• aucun CTA clair ;

• formulaire trop complexe ;

• contact difficile à trouver ;

• parcours utilisateur confus ;

• pages locales sans objectif ;

• éléments de confiance absents ;

• expérience mobile mauvaise.


---


# Best Practices


✔ Un objectif clair par page.

✔ Des CTA visibles.

✔ Un formulaire simple.

✔ Une expérience mobile parfaite.

✔ Une confiance construite avant la demande.

✔ Une amélioration basée sur les données.


---


# Anti-Patterns


❌ Trop de CTA concurrents.

❌ Formulaire interminable.

❌ Cacher le contact.

❌ Pages SEO sans conversion.

❌ Texte commercial agressif.

❌ Design au détriment de l'action.

❌ Ignorer les utilisateurs mobiles.


---


# Conversion Score


Proposition de valeur ........ /10

CTA ........................... /10

Parcours utilisateur .......... /10

Mobile ......................... /10

Formulaire .................... /10

Réassurance ................... /10

Pages locales ................. /10

Performance ................... /10

Mesure ......................... /10

Optimisation continue ......... /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ Le parcours utilisateur est clair.

✔ Les CTA sont visibles.

✔ Le contact est simple.

✔ Le formulaire convertit efficacement.

✔ Le mobile est optimisé.

✔ La confiance précède l'action.

✔ Le score obtenu est de 100/100.


---


# Principe final


Un bon site ne cherche pas uniquement à attirer des visiteurs.

Il transforme une intention en action.


Le Conversion Gate garantit que GH Épaviste possède une expérience digitale capable de générer des demandes réelles tout en respectant la confiance et les besoins des utilisateurs.


# Fin du Chapitre 19

# ==========================================================
# QUALITY_GATE.md
# PARTIE IV — PRODUCT GATES
# CHAPITRE 20
# AI VALIDATION GATE
# ==========================================================


# Objectif

Le AI Validation Gate définit les règles permettant de garantir que toute modification réalisée avec l'aide d'une intelligence artificielle respecte les standards de qualité, de sécurité et d'architecture du projet GH Épaviste.

Son objectif est d'empêcher :


• les modifications incorrectes ;

• les régressions ;

• les erreurs SEO ;

• les incohérences de marque ;

• les problèmes de sécurité ;

• les changements inutiles.


Une IA doit être considérée comme un assistant technique contrôlé, jamais comme une autorité autonome.


---


# Philosophie

L'intelligence artificielle accélère le développement.

Cependant, la vitesse ne doit jamais remplacer la qualité.


Le principe est :


**AI Assists. Human Validates.**


Toute modification générée par une IA doit être comprise, vérifiée et validée avant intégration.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• AI_RULES.md

• Code Quality Gate

• TypeScript Gate

• Next.js Gate

• Security Gate

• SEO Gate

• Brand Consistency Gate


---


# Lecture obligatoire du contexte projet

Avant toute modification, l'IA doit comprendre le projet.


Vérifications :


□ lecture de `AI_RULES.md` ;

□ lecture de la structure du projet ;

□ compréhension de l'objectif métier ;

□ identification des contraintes existantes.


L'IA ne doit jamais modifier un projet sans connaître son contexte.


---


# Compréhension de la demande

Avant d'agir, l'IA doit analyser la demande.


Vérifications :


□ objectif clairement identifié ;

□ fichiers concernés identifiés ;

□ impact évalué ;

□ solution compatible recherchée.


Une modification inutile doit être évitée.


---


# Analyse avant modification

Toute modification doit commencer par une analyse.


L'IA doit vérifier :


□ architecture existante ;

□ conventions utilisées ;

□ dépendances existantes ;

□ risques potentiels.


Principe :


Comprendre avant de modifier.


---


# Respect de l'architecture

L'IA doit préserver l'architecture du projet.


Vérifications :


□ respect App Router ;

□ respect TypeScript ;

□ respect composants existants ;

□ respect Design System ;

□ absence de duplication inutile.


Interdit :


❌ créer une nouvelle architecture sans justification ;

❌ remplacer une solution existante fonctionnelle.


---


# Protection SEO

Toute modification doit préserver le référencement naturel.


Vérifications :


□ métadonnées conservées ;

□ URLs inchangées sauf nécessité ;

□ sitemap protégé ;

□ robots.txt vérifié ;

□ données structurées conservées.


Une amélioration technique ne doit jamais provoquer une perte SEO.


---


# Protection des contenus

L'IA doit respecter la stratégie éditoriale.


Vérifications :


□ terminologie officielle utilisée ;

□ absence d'informations inventées ;

□ respect du ton de marque ;

□ absence de contenu générique inutile.


Cas GH Épaviste :


L'IA ne doit jamais ajouter :


❌ "Agréé VHU"


sans validation officielle.


---


# Protection du Design System

Toute modification UI doit respecter l'identité visuelle.


Vérifications :


□ composants existants réutilisés ;

□ couleurs respectées ;

□ responsive conservé ;

□ accessibilité maintenue.


L'IA ne doit pas créer une interface différente du reste du site.


---


# Validation du code généré

Tout code produit par une IA doit être contrôlé.


Vérifications :


□ syntaxe correcte ;

□ TypeScript valide ;

□ absence d'erreurs ;

□ logique comprise ;

□ performances acceptables.


Le code généré automatiquement n'est jamais considéré comme validé par défaut.


---


# Vérification des dépendances

Une IA ne doit pas ajouter une dépendance sans justification.


Vérifications :


□ nécessité démontrée ;

□ maintenance active ;

□ sécurité vérifiée ;

□ impact évalué.


Éviter :


❌ ajouter un package pour une fonctionnalité simple.


---


# Sécurité des modifications IA

L'IA doit respecter les règles de sécurité.


Vérifications :


□ aucun secret créé ;

□ aucune clé exposée ;

□ aucune permission excessive ;

□ aucune donnée sensible ajoutée.


Référence :


Security Gate


---


# Tests après modification

Toute modification importante doit être testée.


Vérifications :


□ build réussi ;

□ pages principales vérifiées ;

□ fonctionnalités testées ;

□ erreurs détectées.


Commandes recommandées :


npm run build


---


# Vérification visuelle

Toute modification d'interface doit être contrôlée visuellement.


Vérifications :


□ desktop ;

□ tablette ;

□ mobile ;

□ cohérence graphique.


Une modification fonctionnelle peut créer une régression visuelle.


---


# Validation SEO après modification

Après chaque changement important :


Vérifier :


□ pages accessibles ;

□ sitemap valide ;

□ metadata correcte ;

□ canonical conservé ;

□ indexation non bloquée.


---


# Validation humaine finale

Aucune modification IA ne doit être publiée sans validation.


Processus obligatoire :


IA propose

↓

Analyse humaine

↓

Tests

↓

Validation

↓

Déploiement


---


# Historique des modifications

Les changements importants doivent être documentés.


Vérifications :


□ raison du changement ;

□ fichiers modifiés ;

□ impact attendu ;

□ résultat obtenu.


---


# Prompt Engineering Quality

Les demandes envoyées aux IA doivent être précises.


Un bon prompt contient :


□ contexte ;

□ objectif ;

□ contraintes ;

□ fichiers concernés ;

□ critères de réussite.


Un mauvais prompt produit souvent des modifications imprévisibles.


---


# Cas spécifique GH ÉPAVISTE


Avant toute modification IA, l'agent doit connaître :


• Next.js App Router ;

• TypeScript ;

• SEO local ;

• pages communes ;

• sitemap ;

• formulaire contact ;

• Design System ;

• règles métier.


L'IA doit préserver :


• la visibilité Google ;

• la confiance utilisateur ;

• la conversion ;

• la stabilité technique.


---


# Critères de rejet

Le AI Validation Gate est automatiquement refusé si :


• l'IA modifie sans analyser ;

• une règle projet est ignorée ;

• une régression est introduite ;

• du contenu faux est ajouté ;

• une erreur SEO apparaît ;

• la sécurité est diminuée ;

• le code n'est pas compris.


---


# Best Practices


✔ Toujours lire la documentation projet.

✔ Comprendre avant de modifier.

✔ Proposer une solution minimale.

✔ Tester après changement.

✔ Vérifier les impacts.

✔ Documenter les modifications.

✔ Garder l'humain décisionnaire.


---


# Anti-Patterns


❌ Copier du code sans comprendre.

❌ Modifier plusieurs systèmes sans raison.

❌ Ajouter des dépendances inutiles.

❌ Faire confiance aveuglément à l'IA.

❌ Publier sans test.

❌ Ignorer les règles du projet.


---


# AI Validation Score


Compréhension contexte ....... /10

Respect architecture ......... /10

Qualité code ................. /10

Protection SEO ............... /10

Sécurité ..................... /10

Respect marque ............... /10

Tests ........................ /10

Documentation ............... /10

Analyse impact ............... /10

Validation humaine ........... /10


Score minimal :


100 /100


---


# Validation


Avant toute intégration :


✔ L'IA a compris le contexte.

✔ Les règles du projet sont respectées.

✔ Le code est vérifié.

✔ Les tests sont effectués.

✔ Le SEO est préservé.

✔ La sécurité est maintenue.

✔ La validation humaine est effectuée.


---


# Principe final


L'intelligence artificielle est un accélérateur de qualité uniquement lorsqu'elle est guidée par des règles strictes.


Le AI Validation Gate garantit que chaque contribution IA améliore GH Épaviste sans compromettre son architecture, sa sécurité, son référencement ou son identité.


# Fin du Chapitre 20

# ==========================================================
# QUALITY_GATE.md
# PARTIE V — RELEASE GATES
# CHAPITRE 21
# TESTING GATE
# ==========================================================


# Objectif

Le Testing Gate définit les critères permettant de garantir que chaque évolution du projet GH Épaviste est correctement testée avant son intégration ou son déploiement en production.

Son objectif est d'empêcher :


• les erreurs fonctionnelles ;

• les régressions ;

• les problèmes d'affichage ;

• les erreurs SEO ;

• les problèmes de performance ;

• les dysfonctionnements utilisateurs.


Aucune modification importante ne doit atteindre la production sans validation.


---


# Philosophie

Tester n'est pas une étape finale.

Le test fait partie du développement.


Le principe est :


**Build With Confidence.**


Chaque changement doit apporter une amélioration sans casser l'existant.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• Code Quality Gate

• TypeScript Gate

• Next.js Gate

• Security Gate

• Performance Gate

• SEO Gate

• AI Validation Gate


---


# Stratégie de test

Chaque modification doit être évaluée selon son impact.


Vérifications :


□ impact identifié ;

□ niveau de risque évalué ;

□ tests adaptés choisis ;

□ résultat vérifié.


Plus le changement est important, plus la validation doit être complète.


---


# Tests de compilation

Le projet doit toujours compiler correctement.


Vérifications :


□ build réussi ;

□ aucune erreur TypeScript ;

□ aucune erreur Next.js ;

□ aucune erreur bloquante.


Commande recommandée :


npm run build


Un build impossible bloque automatiquement la livraison.


---


# Tests TypeScript

Le typage doit rester strict.


Vérifications :


□ aucune erreur de type ;

□ interfaces cohérentes ;

□ types correctement utilisés ;

□ absence de `any` inutile.


Le typage protège la stabilité du projet.


---


# Tests fonctionnels

Les fonctionnalités principales doivent être vérifiées.


Vérifications :


□ navigation ;

□ formulaires ;

□ boutons ;

□ liens ;

□ interactions utilisateur.


Cas GH Épaviste :


Tester notamment :


□ formulaire de contact ;

□ envoi des demandes ;

□ navigation entre pages ;

□ pages services ;

□ pages locales.


---


# Tests de régression

Toute nouvelle modification doit vérifier qu'elle n'a pas cassé l'existant.


Vérifications :


□ anciennes fonctionnalités toujours actives ;

□ pages existantes accessibles ;

□ URLs conservées ;

□ composants toujours fonctionnels.


Une amélioration ne doit jamais créer une perte ailleurs.


---


# Tests Responsive

Chaque interface doit être vérifiée sur plusieurs formats.


Vérifications :


□ mobile ;

□ tablette ;

□ desktop.


Contrôler :


□ alignement ;

□ taille des textes ;

□ boutons ;

□ navigation ;

□ images.


---


# Tests Accessibilité

L'expérience doit rester accessible.


Vérifications :


□ navigation clavier ;

□ contraste ;

□ textes alternatifs ;

□ structure HTML correcte ;

□ formulaires accessibles.


---


# Tests SEO

Toute modification pouvant influencer le référencement doit être contrôlée.


Vérifications :


□ metadata ;

□ title ;

□ description ;

□ canonical ;

□ sitemap ;

□ robots.txt ;

□ données structurées.


Cas GH Épaviste :


Après modification importante :


□ vérifier les pages locales ;

□ vérifier les URLs ;

□ vérifier l'indexabilité.


---


# Tests Performance

Les performances doivent être maintenues.


Vérifications :


□ temps de chargement ;

□ images optimisées ;

□ taille du bundle ;

□ Core Web Vitals.


Une fonctionnalité ne doit pas dégrader l'expérience.


---


# Tests Sécurité

Chaque changement doit respecter les règles de sécurité.


Vérifications :


□ aucune donnée sensible exposée ;

□ API fonctionnelles ;

□ formulaires sécurisés ;

□ dépendances contrôlées.


Référence :


Security Gate


---


# Tests Email et notifications

Les systèmes de communication doivent être vérifiés.


Cas GH Épaviste :


Vérifications :


□ formulaire envoyé ;

□ email reçu ;

□ contenu correct ;

□ erreurs gérées.


Architecture :


Utilisateur

↓

Formulaire

↓

API

↓

Service Email

↓

Réception


---


# Tests des pages générées

Les pages générées automatiquement doivent être contrôlées.


Cas GH Épaviste :


Pages communes :

□ contenu présent ;

□ URL correcte ;

□ metadata unique ;

□ navigation fonctionnelle.


Pages départements :

□ accessibles ;

□ indexables ;

□ cohérentes.


---


# Tests des données structurées

Les rich snippets doivent rester valides.


Vérifications :


□ Schema.org valide ;

□ informations cohérentes ;

□ absence d'erreurs Google Rich Results.


---


# Tests navigateur

Les fonctionnalités importantes doivent être testées sur plusieurs navigateurs.


Vérifications :


□ Chrome ;

□ Edge ;

□ Firefox ;

□ Safari si nécessaire.


---


# Tests avant commit

Avant chaque commit important :


Vérifications :


□ code vérifié ;

□ build réussi ;

□ fichiers propres ;

□ changement compris.


---


# Tests avant Pull Request

Avant fusion :


Vérifications :


□ revue du code ;

□ tests terminés ;

□ impact analysé ;

□ documentation mise à jour.


---


# Tests avant production

Avant déploiement final :


Vérifications :


□ version validée ;

□ environnement correct ;

□ variables présentes ;

□ fonctionnalités critiques testées.


---


# Cas spécifique GH ÉPAVISTE


Tests prioritaires :


• formulaire contact ;

• réception email ;

• sitemap ;

• pages locales SEO ;

• responsive mobile ;

• performances ;

• navigation ;

• données structurées.


Le site doit rester stable malgré l'ajout régulier de nouvelles pages.


---


# Critères de rejet

Le Testing Gate est automatiquement refusé si :


• build échoue ;

• erreur critique présente ;

• fonctionnalité principale cassée ;

• régression détectée ;

• SEO dégradé ;

• problème sécurité découvert ;

• tests insuffisants.


---


# Best Practices


✔ Tester avant publier.

✔ Tester les fonctionnalités critiques.

✔ Vérifier les régressions.

✔ Automatiser les contrôles répétitifs.

✔ Tester sur mobile.

✔ Documenter les problèmes.


---


# Anti-Patterns


❌ Publier sans tester.

❌ Faire confiance uniquement au build.

❌ Ignorer les erreurs console.

❌ Tester uniquement sur desktop.

❌ Supprimer un test parce qu'il échoue.

❌ Corriger un problème sans vérifier la cause.


---


# Testing Score


Build ......................... /10

TypeScript ................... /10

Fonctionnalités .............. /10

Régressions .................. /10

Responsive ................... /10

Accessibilité ................ /10

SEO .......................... /10

Performance .................. /10

Sécurité ..................... /10

Validation finale ............ /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ Le build fonctionne.

✔ Les fonctionnalités principales sont testées.

✔ Les régressions sont contrôlées.

✔ Le SEO est préservé.

✔ La sécurité est validée.

✔ L'expérience utilisateur est correcte.

✔ Le score obtenu est de 100/100.


---


# Principe final


Un changement non testé est un risque.


Le Testing Gate garantit que chaque évolution de GH Épaviste arrive en production avec un niveau de confiance maximal.


La qualité n'est pas seulement créée par le développement, mais confirmée par la validation.


# Fin du Chapitre 21

# ==========================================================
# QUALITY_GATE.md
# PARTIE V — RELEASE GATES
# CHAPITRE 22
# PRODUCTION GATE
# ==========================================================


# Objectif

Le Production Gate définit les critères permettant de garantir qu'une version du projet GH Épaviste peut être déployée en environnement de production de manière fiable, sécurisée et contrôlée.

Son objectif est de vérifier que :


• le déploiement fonctionne ;

• le domaine est correctement configuré ;

• les services externes sont opérationnels ;

• les utilisateurs accèdent à une version stable ;

• aucune erreur critique n'est présente.


Une version ne doit jamais être publiée uniquement parce qu'elle fonctionne en développement.


---


# Philosophie

La production est l'environnement réel utilisé par les clients.

Chaque déploiement doit être traité comme une mise en ligne professionnelle.


Le principe est :


**Production Ready Means Verified.**


Une application prête à être livrée doit être vérifiée techniquement et fonctionnellement.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• Testing Gate

• Security Gate

• Performance Gate

• SEO Gate

• Release Gate

• Vercel Deployment Guidelines


---


# Préparation au déploiement

Avant toute mise en production :


Vérifications :


□ code validé ;

□ tests terminés ;

□ branche correcte ;

□ version identifiée ;

□ modifications documentées.


Aucun déploiement ne doit être effectué avec un changement inconnu.


---


# Environnement de production

Les environnements doivent être séparés.


Vérifications :


□ développement ;

□ preview ;

□ production.


Les variables et configurations doivent correspondre à chaque environnement.


---


# Déploiement Vercel

Le déploiement doit être contrôlé.


Vérifications :


□ build Vercel réussi ;

□ statut Ready ;

□ aucune erreur de compilation ;

□ logs vérifiés ;

□ version publiée correcte.


Un déploiement réussi techniquement ne remplace pas une validation complète.


---


# Variables d'environnement

Toutes les variables nécessaires doivent être configurées.


Vérifications :


□ variables présentes ;

□ valeurs correctes ;

□ secrets protégés ;

□ aucune clé exposée.


Cas GH Épaviste :


Contrôler notamment :


□ RESEND_API_KEY ;

□ variables email ;

□ configurations nécessaires au runtime.


---


# Domaine et DNS

Le domaine de production doit être validé.


Cas GH Épaviste :


Domaine principal :


gh-epaviste.fr


Vérifications :


□ domaine connecté ;

□ HTTPS actif ;

□ certificat valide ;

□ redirections correctes ;

□ absence d'erreur DNS.


---


# HTTPS et sécurité navigateur

Le site doit être sécurisé.


Vérifications :


□ HTTPS fonctionnel ;

□ cadenas navigateur valide ;

□ aucune ressource non sécurisée ;

□ aucune alerte navigateur.


---


# Vérification des URLs

Toutes les URLs importantes doivent répondre correctement.


Vérifications :


□ code HTTP 200 ;

□ aucune page critique en erreur ;

□ aucune boucle de redirection ;

□ aucune page accidentellement bloquée.


Pages prioritaires :


□ accueil ;

□ services ;

□ contact ;

□ formulaire ;

□ pages locales ;

□ FAQ.


---


# SEO Production Check

Après déploiement :


Vérifications :


□ sitemap.xml accessible ;

□ robots.txt accessible ;

□ metadata correcte ;

□ canonical valide ;

□ données structurées valides.


Cas GH Épaviste :


Contrôler :


□ indexation autorisée ;

□ pages locales disponibles ;

□ URLs cohérentes.


---


# Google Search Console

La connexion aux outils Google doit être vérifiée.


Vérifications :


□ propriété validée ;

□ sitemap envoyé ;

□ couverture surveillée ;

□ erreurs analysées.


Aucune mise en production importante ne doit ignorer le suivi SEO.


---


# Performance Production

Les performances réelles doivent être contrôlées.


Vérifications :


□ temps de chargement ;

□ Core Web Vitals ;

□ optimisation images ;

□ taille JavaScript.


Les performances doivent être vérifiées après déploiement réel.


---


# Vérification mobile réelle

La version mobile doit être testée après publication.


Vérifications :


□ affichage smartphone ;

□ navigation tactile ;

□ formulaires ;

□ boutons ;

□ menus.


---


# Vérification email production

Les communications doivent fonctionner en environnement réel.


Cas GH Épaviste :


Tester :


Utilisateur

↓

Formulaire

↓

Serveur

↓

Resend

↓

contact@gh-epaviste.fr


Vérifications :


□ email reçu ;

□ contenu correct ;

□ expéditeur valide ;

□ erreurs gérées.


---


# Vérification des logs

Les erreurs doivent être surveillées.


Vérifications :


□ erreurs serveur ;

□ erreurs client ;

□ erreurs API ;

□ comportements inattendus.


Les logs ne doivent jamais contenir de données sensibles.


---


# Cache et déploiement

Le comportement après publication doit être contrôlé.


Vérifications :


□ nouvelles versions visibles ;

□ cache cohérent ;

□ pages mises à jour correctement ;

□ absence d'ancien contenu bloqué.


---


# Retour arrière (Rollback)

Une stratégie de retour doit exister.


Vérifications :


□ version précédente disponible ;

□ restauration possible ;

□ procédure connue.


Un déploiement professionnel prévoit les incidents.


---


# Cas spécifique GH ÉPAVISTE


Avant chaque mise en production :


□ vérifier Vercel ;

□ vérifier domaine gh-epaviste.fr ;

□ vérifier DNS ;

□ vérifier formulaire ;

□ vérifier email ;

□ vérifier sitemap ;

□ vérifier pages locales ;

□ vérifier SEO.


Objectif :


Garantir qu'un client réel puisse trouver, comprendre et contacter GH Épaviste sans erreur.


---


# Critères de rejet

Le Production Gate est automatiquement refusé si :


• domaine inaccessible ;

• HTTPS incorrect ;

• build production échoue ;

• formulaire inutilisable ;

• emails non reçus ;

• erreurs critiques présentes ;

• SEO bloqué ;

• variables manquantes.


---


# Best Practices


✔ Déployer après validation.

✔ Tester en preview avant production.

✔ Vérifier les services externes.

✔ Contrôler le domaine.

✔ Surveiller après publication.

✔ Garder une possibilité de rollback.


---


# Anti-Patterns


❌ Déployer directement sans test.

❌ Modifier DNS sans vérification.

❌ Publier avec des erreurs connues.

❌ Oublier les variables d'environnement.

❌ Ne pas tester le formulaire réel.

❌ Considérer le build comme une garantie totale.


---


# Production Score


Déploiement .................. /10

Vercel ....................... /10

Domaine ...................... /10

DNS .......................... /10

HTTPS ......................... /10

Variables .................... /10

SEO production ............... /10

Performance .................. /10

Services externes ............ /10

Validation finale ............ /10


Score minimal :


100 /100


---


# Validation


Avant toute Release :


✔ La production fonctionne.

✔ Le domaine est validé.

✔ Les services externes répondent.

✔ Le SEO est accessible.

✔ Le formulaire fonctionne.

✔ Les utilisateurs ont une expérience stable.

✔ Le score obtenu est de 100/100.


---


# Principe final


La production représente la réalité du projet.

Le Production Gate garantit que GH Épaviste ne publie pas seulement un code fonctionnel, mais une expérience complète, stable et professionnelle pour ses clients.


# Fin du Chapitre 22

# ==========================================================
# QUALITY_GATE.md
# PARTIE V — RELEASE GATES
# CHAPITRE 23
# RELEASE GATE
# ==========================================================


# Objectif

Le Release Gate définit les critères permettant de décider si une version du projet GH Épaviste peut être officiellement publiée.

Son objectif est de garantir qu'une release :


• respecte tous les Quality Gates précédents ;

• ne présente aucun risque critique ;

• apporte une amélioration contrôlée ;

• est prête pour les utilisateurs.


Le Release Gate représente la décision finale avant mise en production.


---


# Philosophie

Publier n'est pas simplement envoyer du code.

Publier signifie engager l'image, la confiance et l'expérience utilisateur de l'entreprise.


Le principe est :


**No Quality. No Release.**


Une version insuffisamment validée reste en attente.


---


# Références

Toutes les validations doivent être compatibles avec :


• QUALITY_GATE.md

• Testing Gate

• Production Gate

• Security Gate

• SEO Gate

• Performance Gate

• AI Validation Gate


---


# Conditions générales de Release

Une release peut être validée uniquement si :


□ les tests sont terminés ;

□ les erreurs critiques sont corrigées ;

□ la production est prête ;

□ les performances sont acceptables ;

□ le SEO est protégé ;

□ la sécurité est validée.


---


# Classification des changements

Chaque changement doit être identifié.


Types possibles :


## Correction (Fix)


Modification destinée à corriger un problème.


Exemple :


• bug formulaire ;

• erreur affichage ;

• problème SEO.


---


## Amélioration (Improvement)


Modification qui améliore une fonctionnalité existante.


Exemple :


• meilleure UX ;

• meilleure performance ;

• meilleure conversion.


---


## Nouvelle fonctionnalité (Feature)


Ajout d'une nouvelle capacité.


Exemple :


• nouvelle page ;

• nouveau composant ;

• nouveau service.


---


# Analyse d'impact

Avant validation :


Vérifications :


□ fichiers concernés identifiés ;

□ risques évalués ;

□ dépendances vérifiées ;

□ impact utilisateur analysé.


Une petite modification peut avoir un grand impact.


---


# Checklist Release obligatoire


Avant publication :


## Code


□ code propre ;

□ TypeScript valide ;

□ build réussi ;

□ aucune erreur critique.


---


## SEO


□ metadata validées ;

□ sitemap fonctionnel ;

□ robots.txt correct ;

□ URLs protégées ;

□ données structurées valides.


---


## Design


□ interface cohérente ;

□ responsive validé ;

□ accessibilité respectée.


---


## Fonctionnalités


□ formulaires testés ;

□ navigation testée ;

□ boutons fonctionnels ;

□ emails vérifiés.


---


## Sécurité


□ secrets protégés ;

□ variables sécurisées ;

□ aucune vulnérabilité connue.


---


# Gestion des risques

Chaque release doit avoir un niveau de risque.


## Risque faible


Exemples :


• correction texte ;

• modification style mineure ;

• correction typo.


Validation simple possible.


---


## Risque moyen


Exemples :


• nouveau composant ;

• modification SEO ;

• changement formulaire.


Tests complets nécessaires.


---


## Risque élevé


Exemples :


• changement architecture ;

• modification routing ;

• changement infrastructure ;

• migration importante.


Validation renforcée obligatoire.


---


# Décision GO / NO GO


La décision finale suit deux possibilités.


## GO


La release est approuvée.


Conditions :


✔ tous les gates validés ;

✔ aucun problème critique ;

✔ tests réussis ;

✔ production prête.


La publication est autorisée.


---


## NO GO


La release est refusée temporairement.


Causes possibles :


❌ erreur critique ;

❌ régression ;

❌ problème sécurité ;

❌ problème SEO ;

❌ fonctionnalité cassée.


La publication est bloquée jusqu'à correction.


---


# Validation humaine finale

Une validation humaine doit confirmer :


□ objectif atteint ;

□ qualité suffisante ;

□ risques acceptables ;

□ expérience utilisateur correcte.


L'automatisation aide la décision mais ne la remplace pas.


---


# Communication de Release

Chaque publication importante doit être documentée.


Informations recommandées :


□ date ;

□ version ;

□ changements ;

□ corrections ;

□ impact utilisateur.


Exemple :


Version : 1.5.0

Type : Feature

Résumé :

Ajout optimisation pages locales SEO.


---


# Rollback Release

Chaque release doit pouvoir être annulée.


Vérifications :


□ version précédente disponible ;

□ procédure connue ;

□ restauration possible.


Une publication professionnelle prévoit l'imprévu.


---


# Cas spécifique GH ÉPAVISTE


Avant chaque Release :


Vérifier :


□ pages SEO locales ;

□ sitemap ;

□ formulaire contact ;

□ emails ;

□ performances ;

□ identité de marque ;

□ données structurées ;

□ domaine.


Une release réussie doit améliorer :


• visibilité ;

• confiance ;

• conversion ;

• stabilité.


---


# Critères de rejet

Le Release Gate est automatiquement refusé si :


• un Gate précédent échoue ;

• une erreur critique existe ;

• le site risque une perte SEO ;

• une fonctionnalité client est cassée ;

• la sécurité est compromise ;

• aucune validation finale n'est effectuée.


---


# Best Practices


✔ Publier seulement quand tout est validé.

✔ Garder un historique des versions.

✔ Mesurer l'impact.

✔ Prévoir un rollback.

✔ Documenter chaque release.

✔ Préférer la qualité à la rapidité.


---


# Anti-Patterns


❌ Publier dans l'urgence.

❌ Ignorer un problème connu.

❌ Déployer sans validation.

❌ Modifier plusieurs systèmes sans analyse.

❌ Supprimer des contrôles pour gagner du temps.


---


# Release Score


Qualité code .................. /10

Tests ......................... /10

Sécurité ...................... /10

SEO ........................... /10

Performance ................... /10

UX ............................ /10

Production .................... /10

Documentation ................. /10

Risque ......................... /10

Validation finale ............. /10


Score minimal :


100 /100


---


# Validation


Avant publication officielle :


✔ Tous les Quality Gates sont validés.

✔ Le niveau de risque est accepté.

✔ Les tests sont terminés.

✔ La production est prête.

✔ Le rollback est possible.

✔ La décision GO est confirmée.


---


# Principe final


Une Release n'est pas un simple déploiement.

C'est un engagement envers les utilisateurs.


Le Release Gate garantit que chaque version de GH Épaviste publiée représente un niveau de qualité, de sécurité et de professionnalisme digne d'un produit fiable.


# Fin du Chapitre 23

# ==========================================================
# QUALITY_GATE.md
# PARTIE V — RELEASE GATES
# CHAPITRE 24
# QUALITY CERTIFICATION
# ==========================================================


# Objectif

Le Quality Certification définit les niveaux de qualité applicables au projet GH Épaviste après validation de l'ensemble des Quality Gates.

Son objectif est de mesurer la maturité globale du projet selon plusieurs dimensions :


• qualité technique ;

• expérience utilisateur ;

• sécurité ;

• référencement naturel ;

• performance ;

• fiabilité ;

• cohérence produit.


La certification représente le niveau global atteint par le projet.


---


# Philosophie

La qualité est un processus continu.

Un projet professionnel ne cherche pas seulement à fonctionner.

Il cherche à devenir meilleur avec le temps.


Le principe est :


**Continuous Improvement.**


Chaque niveau représente une étape vers l'excellence.


---


# Références

La certification prend en compte :


• Code Quality Gate

• TypeScript Gate

• Next.js Gate

• Security Gate

• Performance Gate

• SEO Gate

• Accessibility Gate

• Forms Gate

• Content Quality Gate

• Brand Consistency Gate

• Trust Gate

• Conversion Gate

• AI Validation Gate

• Testing Gate

• Production Gate

• Release Gate


---


# Système de notation


Chaque Gate possède un score maximal :


100 /100


La certification globale dépend :


□ des scores obtenus ;

□ de l'absence de problème critique ;

□ de la stabilité en production ;

□ du respect des règles projet.


Un score élevé ne compense jamais une erreur critique.


---


# Niveau Bronze


## Bronze Quality Certification


Objectif :


Garantir une base technique et fonctionnelle fiable.


Conditions minimales :


□ Build fonctionnel ;

□ Code stable ;

□ Pages principales opérationnelles ;

□ Sécurité de base respectée ;

□ SEO fondamental présent ;

□ Formulaires fonctionnels.


Score recommandé :


70 - 79 /100


Le niveau Bronze indique que le projet est utilisable mais nécessite encore des améliorations.


---


# Niveau Silver


## Silver Quality Certification


Objectif :


Atteindre un niveau professionnel.


Conditions :


□ Architecture propre ;

□ Responsive validé ;

□ SEO optimisé ;

□ Performance correcte ;

□ Accessibilité respectée ;

□ Contenus cohérents ;

□ Expérience utilisateur professionnelle.


Score recommandé :


80 - 89 /100


Le niveau Silver correspond à un produit fiable prêt pour une utilisation commerciale.


---


# Niveau Gold


## Gold Quality Certification


Objectif :


Atteindre un niveau avancé de qualité.


Conditions :


□ Tous les Gates validés ;

□ Excellente performance ;

□ SEO local maîtrisé ;

□ Design cohérent ;

□ Conversion optimisée ;

□ Sécurité renforcée ;

□ Tests complets.


Score recommandé :


90 - 96 /100


Le niveau Gold représente un produit mature et optimisé.


---


# Niveau Elite


## Elite Quality Certification


Objectif :


Atteindre le niveau d'excellence maximal.


Conditions :


□ Tous les Quality Gates à 100/100 ;

□ Aucun problème critique ;

□ Architecture exemplaire ;

□ Performance excellente ;

□ Expérience utilisateur supérieure ;

□ SEO durable ;

□ Sécurité maximale ;

□ Amélioration continue active.


Score recommandé :


97 - 100 /100


Le niveau Elite représente la référence qualité GH Épaviste.


---


# Tableau de certification


| Niveau | Score | Signification |
|---|---|---|
| Bronze | 70-79 | Base fiable |
| Silver | 80-89 | Niveau professionnel |
| Gold | 90-96 | Niveau avancé |
| Elite | 97-100 | Excellence |


---


# Conditions de maintien

Une certification doit rester valide dans le temps.


Vérifications :


□ absence de régression ;

□ surveillance production ;

□ mises à jour régulières ;

□ contrôle sécurité ;

□ contrôle SEO.


Une ancienne certification peut être réévaluée après une modification majeure.


---


# Perte de certification

Un niveau peut être retiré si :


• problème critique non corrigé ;

• faille sécurité importante ;

• perte SEO majeure ;

• dégradation importante des performances ;

• non-respect des règles métier.


La qualité doit être maintenue.


---


# Certification des nouvelles fonctionnalités

Chaque nouvelle fonctionnalité doit respecter le niveau actuel.


Vérifications :


□ analyse avant ajout ;

□ tests réalisés ;

□ impact évalué ;

□ cohérence conservée.


Une nouvelle fonctionnalité ne doit pas diminuer la qualité globale.


---


# Certification spécifique GH ÉPAVISTE


Le niveau de certification doit prendre en compte les objectifs métier :


□ visibilité locale ;

□ confiance utilisateur ;

□ demandes d'intervention ;

□ stabilité du site ;

□ qualité des pages communes ;

□ conformité des informations.


Une excellente technologie doit servir un objectif commercial réel.


---


# Objectifs de progression


Le chemin recommandé :


Bronze

↓

Silver

↓

Gold

↓

Elite


Chaque étape améliore :


• la fiabilité ;

• la visibilité ;

• la confiance ;

• la conversion.


---


# Critères de rejet de certification


Aucune certification ne peut être accordée si :


• erreur critique active ;

• problème sécurité majeur ;

• informations trompeuses ;

• fonctionnalité principale cassée ;

• non-respect des règles métier.


---


# Certification finale


Une certification validée confirme que :


✔ le produit respecte ses standards ;

✔ l'utilisateur bénéficie d'une expérience fiable ;

✔ l'entreprise possède une présence digitale professionnelle ;

✔ les évolutions futures peuvent être contrôlées.


---


# Quality Certification Score


Technique ..................... /25

Sécurité ...................... /15

SEO ........................... /15

UX ............................ /15

Contenu ....................... /10

Conversion .................... /10

Production .................... /5

Maintenance ................... /5


Total :


100 /100


---


# Validation


Avant attribution d'un niveau :


✔ Tous les contrôles sont effectués.

✔ Les scores sont calculés.

✔ Les risques sont analysés.

✔ Le niveau obtenu est documenté.

✔ La certification est approuvée.


---


# Principe final


La certification qualité n'est pas une récompense temporaire.

Elle représente l'engagement permanent de GH Épaviste envers la qualité, la fiabilité et l'amélioration continue.


Le Quality Certification transforme les bonnes pratiques en un standard durable.


# Fin du Chapitre 24

# ==========================================================
# QUALITY_GATE.md
# PARTIE V — RELEASE GATES
# CHAPITRE 25
# QUALITY MANIFESTO
# ==========================================================


# Objectif

Le Quality Manifesto représente les principes fondamentaux qui guident toutes les décisions techniques, éditoriales et commerciales du projet GH Épaviste.

Il définit la vision à long terme de la qualité.


Son objectif est de garantir que chaque évolution du projet respecte :


• l'utilisateur ;

• l'entreprise ;

• la technologie ;

• la sécurité ;

• la confiance.


Ce manifeste constitue la référence finale du projet.


---


# Notre vision

GH Épaviste n'est pas seulement un site internet.

C'est un outil professionnel destiné à créer une relation de confiance entre une entreprise et ses clients.


Chaque page.

Chaque ligne de code.

Chaque interaction.

Chaque modification.


Doit contribuer à construire une expérience meilleure.


---


# Notre engagement qualité

Nous considérons la qualité comme une responsabilité permanente.


La qualité signifie :


□ créer une expérience fiable ;

□ fournir des informations exactes ;

□ protéger les utilisateurs ;

□ construire une présence digitale durable ;

□ améliorer continuellement le produit.


La qualité n'est jamais un objectif terminé.


---


# Principe 1 — L'utilisateur avant tout


Chaque décision doit commencer par une question :


"Est-ce utile pour l'utilisateur ?"


Nous privilégions :


✔ simplicité ;

✔ clarté ;

✔ rapidité ;

✔ accessibilité ;

✔ confiance.


La technologie existe pour résoudre des problèmes humains.


---


# Principe 2 — La qualité avant la vitesse


Une livraison rapide sans contrôle crée des problèmes futurs.


Nous préférons :


✔ une solution stable ;

✔ une architecture propre ;

✔ un résultat durable.


Une amélioration lente mais solide vaut mieux qu'une correction permanente.


---


# Principe 3 — La transparence absolue


GH Épaviste communique avec honnêteté.


Nous refusons :


❌ informations inventées ;

❌ fausses certifications ;

❌ promesses irréalistes ;

❌ contenus trompeurs.


La confiance se construit avec la vérité.


---


# Principe 4 — L'excellence technique


Le code doit être traité comme une infrastructure professionnelle.


Nous respectons :


✔ architecture claire ;

✔ bonnes pratiques ;

✔ sécurité ;

✔ performance ;

✔ maintenance.


Un bon produit repose sur une base technique solide.


---


# Principe 5 — Le SEO durable


Le référencement n'est pas une manipulation.


Nous construisons une visibilité basée sur :


✔ contenu utile ;

✔ expérience utilisateur ;

✔ performance ;

✔ confiance ;


L'objectif n'est pas seulement d'être visible.

L'objectif est d'être trouvé par les bonnes personnes.


---


# Principe 6 — La cohérence de marque


Chaque élément doit représenter GH Épaviste.


Cela concerne :


• le design ;

• les textes ;

• les messages ;

• les interactions ;

• les plateformes externes.


Une marque professionnelle reste cohérente partout.


---


# Principe 7 — La sécurité par défaut


La sécurité n'est pas ajoutée après coup.


Elle est intégrée dès la conception.


Nous protégeons :


✔ les utilisateurs ;

✔ les données ;

✔ l'infrastructure ;

✔ l'entreprise.


---


# Principe 8 — L'intelligence artificielle responsable


L'intelligence artificielle est un outil puissant.


Mais elle doit être utilisée avec discipline.


Une IA doit :


✔ comprendre avant de modifier ;

✔ respecter les règles projet ;

✔ vérifier son travail ;

✔ éviter les suppositions.


L'humain garde toujours la décision finale.


---


# Principe 9 — L'amélioration continue


Un produit professionnel évolue constamment.


Nous analysons :


□ performances ;

□ retours utilisateurs ;

□ SEO ;

□ sécurité ;

□ conversion.


Chaque amélioration doit rendre le produit meilleur.


---


# Principe 10 — La responsabilité collective


Toute personne ou outil intervenant sur le projet partage une responsabilité :


Maintenir la qualité.


Développeurs.

IA.

Outils automatisés.

Contributeurs.


Tous doivent respecter les mêmes standards.


---


# Les règles non négociables


GH Épaviste applique les règles suivantes :


❌ aucune publication sans validation ;

❌ aucune modification critique sans test ;

❌ aucune information trompeuse ;

❌ aucune dégradation volontaire ;

❌ aucune décision contre l'utilisateur.


---


# Vision technique long terme


Le projet doit rester :


□ maintenable ;

□ évolutif ;

□ sécurisé ;

□ performant ;

□ compréhensible.


La simplicité est une forme d'excellence.


---


# Vision produit long terme


Le site GH Épaviste doit devenir :


• une référence locale ;

• une expérience utilisateur exemplaire ;

• une source de confiance ;

• un outil efficace de développement commercial.


---


# Engagement envers les utilisateurs


Chaque visiteur mérite :


✔ des informations fiables ;

✔ une navigation simple ;

✔ une réponse rapide ;

✔ une expérience professionnelle.


La qualité commence par le respect de l'utilisateur.


---


# Engagement envers l'avenir


Les futures évolutions doivent préserver l'esprit du projet.


Toute nouvelle fonctionnalité doit répondre à trois questions :


1. Est-elle utile ?

2. Est-elle fiable ?

3. Améliore-t-elle réellement le produit ?


Si la réponse est non, elle ne doit pas être ajoutée.


---


# La règle finale


Avant chaque décision importante :


Penser utilisateur.

Penser qualité.

Penser long terme.


---


# Quality Manifesto Final


GH Épaviste s'engage à construire un produit numérique professionnel basé sur :


• la qualité ;

• la transparence ;

• la confiance ;

• la sécurité ;

• l'excellence technique.


Chaque amélioration doit renforcer cette mission.


---


# Certification finale du document


QUALITY_GATE.md devient la référence officielle du projet GH Épaviste.


Il définit les standards applicables à :


□ développement ;

□ design ;

□ SEO ;

□ contenu ;

□ sécurité ;

□ IA ;

□ production.


Toute contribution future doit respecter ce document.


---


# Conclusion


La qualité n'est pas une fonctionnalité.

La qualité est une culture.


Le projet GH Épaviste est construit avec une vision simple :


Créer un service digital fiable, professionnel et durable qui mérite la confiance des utilisateurs.


# Fin du Chapitre 25

# ==========================================================
# FIN DU QUALITY_GATE.md
# VERSION OFFICIELLE GH ÉPAVISTE
# ==========================================================