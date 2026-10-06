# ==========================================================
# COMPONENT_GUIDELINES.md
# GH ÉPAVISTE
# COMPONENT DEVELOPMENT STANDARD
# VERSION OFFICIELLE
# ==========================================================


# Objectif

Le fichier COMPONENT_GUIDELINES.md définit les règles officielles de création, d'organisation et de maintenance des composants du projet GH Épaviste.

Son objectif est de garantir :


• une interface cohérente ;

• des composants réutilisables ;

• une architecture maintenable ;

• une expérience utilisateur uniforme ;

• une qualité constante sur toutes les pages.


Tout nouveau composant doit respecter ces règles.


---


# Philosophie

Un composant n'est pas seulement un élément visuel.

C'est une unité fonctionnelle réutilisable qui possède :


• une responsabilité claire ;

• une structure définie ;

• un comportement prévisible ;

• une utilisation documentée.


Le principe est :


**Create Once. Reuse Everywhere.**


La duplication doit être évitée.


---


# Références obligatoires

Tous les composants doivent respecter :


• DESIGN_SYSTEM.md

• UX_UI_MASTER_SPEC.md

• RESPONSIVE_SPEC.md

• QUALITY_GATE.md

• Next.js Gate

• Accessibility Gate

• AI_RULES.md


Aucun composant ne doit être créé indépendamment de ces documents.


---


# Architecture des composants


Les composants doivent être organisés clairement.


Structure recommandée :


components/

├── ui/

├── layout/

├── sections/

├── forms/

├── shared/


Exemple :


components/ui/Button.tsx

components/forms/ContactForm.tsx

components/layout/Header.tsx


---


# Responsabilité unique


Chaque composant doit avoir une responsabilité principale.


Bon exemple :


Button

Responsabilité :
Afficher une action utilisateur.


Mauvais exemple :


MegaComponent

Responsabilité :
Gérer bouton + formulaire + navigation + données.


Un composant trop complexe doit être découpé.


---


# Réutilisation


Avant de créer un nouveau composant :


Vérifier :


□ un composant similaire existe-t-il ?

□ une extension du composant actuel est-elle possible ?

□ une variante suffit-elle ?


La duplication est interdite sans justification.


---


# Nommage


Les composants utilisent PascalCase.


Correct :


Button.tsx

ServiceCard.tsx

ContactForm.tsx


Incorrect :


button.tsx

service-card.tsx


Les noms doivent expliquer clairement le rôle du composant.


---


# Structure d'un composant


Un composant doit rester lisible.


Structure recommandée :


1. Imports

2. Types / interfaces

3. Props

4. Composant

5. Export


Exemple :


Button

Props :

- variant
- size
- children
- disabled


---


# Props


Les props doivent être :


□ simples ;

□ explicites ;

□ typées ;

□ documentées si nécessaire.


Éviter :


❌ props ambiguës ;

❌ objets trop complexes ;

❌ paramètres inutilisés.


---


# TypeScript


Tous les composants doivent être typés.


Obligatoire :


□ interfaces ou types définis ;

□ aucune utilisation inutile de any ;

□ props contrôlées.


Le typage garantit la stabilité.


---


# Server Components


Les composants doivent être Server Components par défaut.


Ajouter :


"use client"


uniquement si nécessaire.


Cas autorisés :


• interactions utilisateur ;

• état local ;

• hooks React ;

• API navigateur.


---


# Client Components


Chaque Client Component doit avoir une justification.


Avant utilisation :


□ besoin identifié ;

□ alternative serveur impossible ;

□ impact performance évalué.


Limiter les composants clients.


---


# Design System


Chaque composant doit utiliser les règles du Design System.


Respecter :


□ couleurs ;

□ typographies ;

□ espacements ;

□ boutons ;

□ cartes ;

□ animations.


Créer un style isolé est interdit.


---


# Responsive Design


Chaque composant doit fonctionner sur :


□ mobile ;

□ tablette ;

□ desktop.


Vérifier :


□ tailles ;

□ espacements ;

□ alignements ;

□ lisibilité.


Référence :


RESPONSIVE_SPEC.md


---


# Accessibilité


Tous les composants doivent être accessibles.


Vérifications :


□ HTML sémantique ;

□ navigation clavier ;

□ focus visible ;

□ labels corrects ;

□ contraste suffisant.


L'accessibilité est obligatoire.


---


# Performance


Les composants doivent préserver les performances.


Éviter :


❌ logique inutile ;

❌ rendu excessif ;

❌ dépendances lourdes.


Privilégier :


✔ simplicité ;

✔ Server Components ;

✔ chargement optimisé.


---


# Composants critiques GH ÉPAVISTE


Les composants suivants nécessitent une attention particulière :


## Header

Vérifier :

□ navigation ;

□ mobile menu ;

□ SEO.


## Hero

Vérifier :

□ message clair ;

□ CTA visible ;

□ performance.


## Contact Form

Vérifier :

□ validation ;

□ sécurité ;

□ accessibilité ;

□ conversion.


## Service Card

Vérifier :

□ cohérence ;

□ réutilisation ;

□ données dynamiques.


## FAQ

Vérifier :

□ structure SEO ;

□ accessibilité ;

□ lisibilité.


---


# Création d'un nouveau composant


Avant création :


□ besoin réel identifié ;

□ emplacement défini ;

□ réutilisation possible analysée ;

□ impact évalué.


Après création :


□ test effectué ;

□ responsive vérifié ;

□ accessibilité contrôlée.


---


# Tests composants


Chaque composant important doit être vérifié :


□ rendu correct ;

□ responsive ;

□ interactions ;

□ erreurs possibles ;

□ compatibilité pages existantes.


---


# Documentation composant


Les composants complexes doivent expliquer :


• objectif ;

• utilisation ;

• props ;

• variantes ;

• contraintes.


La documentation facilite la maintenance.


---


# Cas spécifique GH ÉPAVISTE


Les composants doivent supporter :


• nombreuses pages locales SEO ;

• contenu dynamique ;

• appels clients ;

• navigation rapide ;

• confiance utilisateur.


L'objectif est de construire une bibliothèque durable.


---


# Critères de rejet


Un composant est refusé si :


❌ il duplique un composant existant ;

❌ il casse le Design System ;

❌ il n'est pas responsive ;

❌ il utilise Client Component inutilement ;

❌ il dégrade les performances ;

❌ il n'est pas accessible.


---


# Best Practices


✔ Réutiliser avant de créer.

✔ Garder les composants simples.

✔ Respecter le Design System.

✔ Utiliser TypeScript.

✔ Tester chaque évolution.

✔ Documenter les composants importants.


---


# Anti-Patterns


❌ Créer un composant pour une seule ligne inutile.

❌ Copier-coller du code UI.

❌ Ajouter des styles différents partout.

❌ Créer des composants géants.

❌ Mélanger logique métier et affichage.


---


# Component Quality Score


Architecture ................. /10

Réutilisation ............... /10

TypeScript .................. /10

Design System ............... /10

Responsive .................. /10

Accessibilité ............... /10

Performance ................. /10

Documentation ............... /10

Maintenance ................. /10

Qualité globale ............. /10


Score minimal :


100 /100


---


# Validation


Avant intégration :


✔ Le composant respecte les règles.

✔ Le code est propre.

✔ Le design est cohérent.

✔ Le responsive fonctionne.

✔ L'accessibilité est validée.

✔ Le composant est réutilisable.


---


# Principe final


Les composants sont les briques fondamentales du produit.


Un bon composant améliore chaque page.

Un mauvais composant crée une dette technique.


COMPONENT_GUIDELINES.md garantit que GH Épaviste évolue avec une architecture UI professionnelle, cohérente et durable.


# Fin du COMPONENT_GUIDELINES.md

# ==========================================================