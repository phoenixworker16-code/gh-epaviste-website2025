# Inventaire de l'Architecture (Pipeline V4)

## Emplacements et Rôles

### 1. `PageData` et les Types de Blocs
- **Chemin :** `data/types.ts`
- **Rôle :** Contient l'interface `PageData` et toutes les interfaces des blocs (`HeroBlock`, `IntroductionBlock`, etc.).
- **Statut :** **Source de vérité**
- **Observations :** C'est le contrat TypeScript officiel. Le schéma Zod et les données doivent impérativement s'aligner sur ce fichier.

### 2. Le Moteur de Rendu (`PageBuilder`)
- **Chemin :** `components/blocks/PageBuilder.tsx`
- **Rôle :** Composant React qui prend un tableau de blocs et effectue le rendu via un `switch/case` sur `block.type`.
- **Statut :** **Source de vérité**
- **Observations :** Chaque bloc défini dans `types.ts` possède ici son composant d'UI (`HeroBlockComponent`, `IntroductionBlockComponent`, etc.).

### 3. Les Données Editoriales par Ville
- **Chemin :** `data/cities/*.ts` (ex: `levallois-perret.ts`, `paris.ts` - environ 130 fichiers)
- **Rôle :** Exporte un objet typé `PageData` contenant les textes et blocs pour chaque ville.
- **Statut :** **À remplacer (par le générateur)**
- **Observations :** Ces fichiers sont voués à être générés ou vérifiés strictement par le pipeline V4. Actuellement, ils contiennent des données en dur.

### 4. Le Référentiel des Villes (`villes.json` & `cities-content.json`)
- **Chemin :** `data/villes.json` et `data/cities-content.json`
- **Rôle :** Liste brute de toutes les villes (Code postal, département, slug) et petits fragments de contenu.
- **Statut :** **Source de vérité (Données brutes)**
- **Observations :** C'est la base de données brute qui doit être injectée dans le générateur.

### 5. Schéma de Validation (Zod)
- **Chemin actuel :** `scripts/pipeline-v4/schema.js` (JavaScript CommonJS, existant mais obsolète)
- **Nouveau Chemin :** `data/schemas/pageDataSchema.ts` (Créé lors de cette étape)
- **Rôle :** Garantir que les données JSON brutes ou générées respectent le typage de `PageData` au runtime.
- **Statut :** **Source de vérité**
- **Observations :** L'ancien script CommonJS est redondant avec `types.ts` et n'était pas typé dynamiquement avec TypeScript. Le nouveau `pageDataSchema.ts` est fortement typé.

## Dépendances Architecturales
1. **Source :** `data/types.ts` dicte les règles des interfaces métiers.
2. **Validation :** `data/schemas/pageDataSchema.ts` valide les données au runtime par rapport aux règles de `types.ts`.
3. **Génération :** Le générateur (à refondre) lira `villes.json`, assemblera les blocs selon le `pageDataSchema.ts`, et sortira les fichiers TS dans `data/cities/*.ts`.
4. **Rendu :** Next.js importera `data/cities/*.ts` et les passera à `PageBuilder.tsx` pour le rendu final.
