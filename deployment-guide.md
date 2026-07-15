# Guide de Déploiement — GH Épaviste

## Hébergement

- Hébergeur : Vercel
- DNS : OVH
- Framework : Next.js 14 App Router

---

# Variables d'environnement

Configurer uniquement les variables réellement utilisées.

Exemple :

```
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=https://gh-epaviste.fr
```

Aucune variable Prisma.

Aucune DATABASE_URL.

---

# Base de données

Le projet n'utilise aucune base de données.

Les formulaires sont envoyés directement via Resend vers :

contact@gh-epaviste.fr

Aucune persistance locale.

Aucun PostgreSQL.

Aucun Prisma.

---

# Déploiement

Installation :

```bash
npm install
```

Build :

```bash
npm run build
```

Déploiement :

```bash
vercel --prod
```

---

# DNS

Le domaine est géré chez OVH.

Les enregistrements DNS pointent vers Vercel.

---

# Vérifications après déploiement

- HTTPS actif
- Sitemap accessible
- robots.txt accessible
- Google Search Console
- Core Web Vitals
- JSON-LD valide
- Formulaire fonctionnel
- Emails reçus sur contact@gh-epaviste.fr

---

# Commandes utiles

Build :

```bash
npm run build
```

Lint :

```bash
npm run lint
```

TypeScript :

```bash
npx tsc --noEmit
```

Déploiement :

```bash
vercel --prod
```

---

# Maintenance

Après chaque modification importante :

- npm run lint
- npx tsc --noEmit
- npm run build

Le projet ne doit jamais être déclaré valide sans l'exécution réelle de ces commandes.