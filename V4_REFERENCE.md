# 🏆 Référence Génération Massive V4 — Commune Levallois-Perret

Ce document certifie la validation complète de bout en bout de l'architecture V4 sur la commune étalon Levallois-Perret. Il sert de **modèle de référence** et de **référentiel de non-régression** pour la génération massive des centaines de communes restantes.

---

## 📌 1. Versions & Architecture (GELÉES)

Conformément à l'Étape 4 du plan d'implémentation, les versions suivantes sont **strictement gelées** avant de lancer toute génération massive. Toute évolution ultérieure nécessitera une nouvelle version (v1.1, v1.2...).

- **Architecture :** Next.js 14 App Router + PageBuilder
- **Version du PageBuilder :** V4 (HTML Sémantique)
- **Version Legal Auditor :** v2.0
- **Version SEO Auditor :** v1.0.0
- **Version SEO Rules (`seo-rules.json`) :** v1.0.0
- **Fichier de la commune :** `data/cities/levallois-perret.ts`

---

## 📊 2. Métriques SEO & Contenu (Résultats de l'Audit)

La commune de Levallois-Perret a été générée exclusivement via le moteur PageBuilder V4 sans traitement particulier, et a obtenu le score parfait de **100/100** au SEO Auditor.

| Élément | Comptage | Exigence (Règles v1.0.0) |
|---|---|---|
| **Mots** | 1710 | ≥ 1200 et ≤ 1800 |
| **Balise `<main>`** | 1 | 1 |
| **Balises `<h1>`** | 1 | 1 |
| **Balises `<h2>`** | 8 | ≥ 6 |
| **Balises `<h3>`** | 13 | ≥ 10 |
| **Questions FAQ** | 6 | ≥ 5 |
| **Appels à l'action (CTA)** | 9 | ≥ 1 |
| **Listes (`<ul>`)** | 2 | ≥ 1 |
| **Tableaux (`<table>`)** | 1 | ≥ 1 |
| **Maillage Interne** | > 30 | ≥ 4 |

---

## 🏗️ 3. Structure Sémantique et JSON-LD

La mise à niveau du PageBuilder garantit que la page contient tous les éléments exigés :

- **HTML5 Sémantique :** Utilisation stricte de `<main>`, `<table>` (pour les couvertures locales), et `<details>/<summary>` (pour les FAQ).
- **Données Structurées (JSON-LD) injectées :**
  - `Service`
  - `LocalBusiness`
  - `Organization`
  - `FAQPage`
  - `BreadcrumbList`

---

## 🛡️ 4. Résultats des Audits (Pipeline Validé)

1. **Compilation (TypeScript / Lint / Build) :** ✅ PASS
   - Le build Next.js est reproductible (stabilité confirmée).
2. **Legal Auditor (v2.0) :** ✅ PASS (Score 100/100, Zéro faux positif, conformité VHU/Agrément parfaite)
3. **SEO Auditor (v1.0.0) :** ✅ PASS (Score 100/100, Temps < 3000ms)
   - Validation stricte des JSON-LD : JSON valide, `@context` présent, `@type` attendu, aucune propriété obligatoire absente, aucune erreur de parsing.

**Rapports archivés :**
- `reports/legal-report.json`
- `reports/seo-report.json`
- `reports/reference-html/levallois-perret.html` (Snapshot HTML)

---

## ⚠️ 5. Règles de Non-Régression

Toute modification future apportée au composant `PageBuilder` ou au fichier routeur `app/[slug]/page.tsx` devra impérativement :
1. Être comparée avec le snapshot HTML de référence (`reports/reference-html/levallois-perret.html`).
2. Obtenir une justification explicite pour toute différence constatée dans le DOM ou les métadonnées.

---

## 🔒 6. Règle de Référence Unique

**Levallois-Perret devient la référence officielle V4.**
Toute nouvelle commune générée lors de la phase massive devra respecter strictement :
- la même architecture
- les mêmes blocs
- la même hiérarchie HTML
- les mêmes conventions SEO
- les mêmes conventions juridiques

Toute exception éventuelle devra être explicitement documentée. Cela garantit l'absence de variantes structurelles.

---

## ✅ 7. Checklist de Validation avant Génération Massive

Avant de lancer le script `generate-city-data.js` pour créer les centaines de communes :

- [x] L'URL finale `/epaviste-gratuit-levallois-perret` s'affiche correctement dans le navigateur.
- [x] Absence totale d'erreurs React, d'erreurs d'hydratation ou d'erreurs console.
- [x] Le Legal Auditor est au vert (aucun vocabulaire interdit).
- [x] Le SEO Auditor est au vert (HTML bien formé, JSON-LD présent).
- [x] Le pipeline de build Next.js s'exécute sans erreurs ni warnings bloquants et est reproductible.
- [x] Le Snapshot HTML de référence a été généré.
- [x] Un tag Git a été posé (`git tag v4-reference`).

> **Conclusion :** L'infrastructure (PageBuilder V4 + Auditeurs) est désormais validée, robuste, et stable. La génération massive des communes V4 peut commencer.
