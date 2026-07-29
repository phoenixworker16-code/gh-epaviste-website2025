# HANDOVER.md

# Transmission de session

Ce document permet à un nouvel assistant IA de reprendre le projet exactement là où la session précédente s'est arrêtée.

Il ne contient pas les règles générales (AI_RULES.md) ni l'architecture du projet (PROJECT_CONTEXT.md).

Il décrit uniquement l'état actuel du projet.

---

# Dernière mise à jour

À compléter après chaque session.

Date : 2026-07-29

Session : Phase 4.3 validée - Attente d'indexation

Assistant : Antigravity

---

# Dernier STOP validé

STOP — Ne pas lancer la Phase 4.4. Ne pas générer de communes (Batch 80). Attendre l'indexation par Google et la validation des outils externes (Search Console, Rich Results, PageSpeed).

---

# Phase en cours

PAUSE STRATÉGIQUE. Le site actuel (environ 176 URLs) doit être digéré par Google avant toute expansion massive.

---

# Dernière action réalisée

- Révision, ajout et correction de l'intégralité du Schema.org (Article, LocalBusiness, Organization, WebSite, BreadcrumbList, City, AdministrativeArea).
- Validation stricte SEO / build.
- Mise à jour des documents de suivi pour bloquer la génération des communes.

---

# Vérifications effectuées

- [x] npm run lint
- [x] npx tsc --noEmit
- [x] npm run build
- [x] npm run validate-batch
- [ ] Déploiement Vercel
- [ ] Vérification sitemap.xml
- [ ] Vérification robots.txt
- [ ] Vérification Google Search Console
- [ ] Vérification Google Rich Results Test
- [ ] Vérification PageSpeed Insights

---

# Prochaine action

(Action utilisateur) : Laisser passer quelques semaines d'exploration et créer la fiche Google Business Profile.

(Action IA, lors de la reprise) :
1. Ajouter le `sameAs` de la fiche Google Business Profile dans `layout.tsx`.
2. Lancer le Batch 1 (80 communes maximum), valider l'indexation, puis passer au lot suivant.

---

# Problèmes ouverts

Aucun problème technique.

---

# Décisions validées

- Refus strict de lancer massivement les 1326 communes d'un coup pour éviter d'inonder le crawl de Google.
- Génération future des communes par lots de 80.
- L'URL de la fiche Google Business Profile sera utilisée dans le champ `sameAs` de `LocalBusiness` / `Organization` une fois validée.

---

# À ne pas refaire

Liste des tâches définitivement terminées.

- Infrastructure SEO On-Page
- Implémentation du Schema.org complet
- Création et débogage du validateur `validate-batch.js`

Ne jamais les recommencer sans demande explicite.

---

# Notes

L'environnement technique local est dans un état optimal (97-99/100). Le relais est désormais du côté des robots de Google.

# Derniers fichiers modifiés

- CURRENT_TASK.md
- HANDOVER.md

Le prochain assistant doit commencer par lire ces consignes de blocage.