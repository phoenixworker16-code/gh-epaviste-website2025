# Pipeline V4 - Compatibility Report

Ce document décrit le fonctionnement et la structure du **Compatibility Report** du Pipeline V4.

## Objectif
Le `compatibility-report.js` a pour but de vérifier l'intégrité de l'environnement de génération avant de lancer le pipeline complet. Il s'assure que les sources de vérité (schemas, types, configurations, règles) existent, sont valides et n'ont pas été altérées de manière inattendue.

**Important :** Ce script effectue uniquement des lectures (READ-ONLY). Il ne génère aucun code TypeScript, ne modifie aucun fichier JSON et ne met à jour aucun snapshot.

## Utilisation
Le rapport de compatibilité peut être lancé de manière indépendante via NPM :

```bash
npm run compatibility
```

### Exit Codes
Le script respecte les conventions standards de CI/CD :
- **0 (PASS)** : Toutes les vérifications sont validées avec succès.
- **0 (WARNING)** : Certaines vérifications mineures échouent, mais le pipeline peut continuer.
- **1 (ERROR)** : Une ou plusieurs vérifications critiques échouent. L'exécution du pipeline doit être interrompue.

## Niveaux de sévérité
- **INFO** : Information générale.
- **WARNING** : Une ressource optionnelle est manquante ou obsolète.
- **ERROR** : Une ressource obligatoire est manquante ou corrompue.

## Liste des vérifications (Checks)

Les règles sont identifiées par un code unique (ex: `C01`, `C02`).

- **C01 (Schema)** : Vérifie la présence et l'intégrité de `data/types.ts`.
- **C02 (Schema)** : Vérifie la présence et l'intégrité de `data/schemas/pageDataSchema.ts`.
- **C03 (Rules)** : Vérifie la présence et la validité du format de `scripts/legal-blacklist.json`.
- **C04 (Rules)** : Vérifie la présence et la validité du format de `scripts/seo-rules.json`.
- **C05 (Config)** : Vérifie la présence et la validité de `scripts/pipeline-v4/config/versions.json`.

## Rapports générés

Le script génère deux types de rapports dans le dossier `reports/` :

1. **`compatibility-report.json`** : Format brut exploitable par les outils de CI (GitHub Actions, dashboards, etc.). Contient les statuts, le détail des vérifications et les hashs SHA-256 des fichiers.
2. **`compatibility-report.md`** : Format lisible par l'humain pour une revue rapide.

### Utilitaires de Hash
Des utilitaires de hachage (`utils/hash.js`) sont utilisés pour garantir l'intégrité des fichiers vérifiés. Ils calculent les hashs SHA-256 (`hashFile`, `hashString`, `normalizeHtml`, `hashNormalizedHtml`).
