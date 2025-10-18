# Guide de Déploiement - GH Épaviste Website

## Préparation pour le déploiement OVH

### 1. Configuration de l'environnement

1. **Copier le fichier d'environnement de production :**
   ```bash
   cp .env.production .env
   ```

2. **Modifier les variables dans `.env` :**
   - `DATABASE_URL` : URL de votre base de données PostgreSQL OVH
   - `NEXTAUTH_SECRET` : Générer une clé secrète sécurisée
   - `SMTP_*` : Configuration email OVH
   - `NEXT_PUBLIC_GA_ID` : ID Google Analytics (optionnel)

### 2. Build de production

```bash
npm run build
```

### 3. Configuration OVH

#### A. Hébergement Web Pro/Performance
1. Uploader les fichiers dans le dossier `www`
2. Configurer Node.js dans l'espace client OVH
3. Définir le point d'entrée : `server.js`

#### B. VPS/Serveur dédié
1. Installer Node.js 18+ et npm
2. Cloner le repository
3. Installer les dépendances : `npm install`
4. Build : `npm run build`
5. Démarrer : `npm start`

### 4. Configuration DNS

Dans l'espace client OVH, configurer :
- **A** : `@` → IP du serveur
- **CNAME** : `www` → `gh-epaviste.fr`

### 5. SSL/TLS

Activer le certificat SSL Let's Encrypt dans l'espace client OVH.

### 6. Base de données

1. Créer une base PostgreSQL dans l'espace client OVH
2. Exécuter les migrations Prisma :
   ```bash
   npx prisma migrate deploy
   ```

### 7. Optimisations post-déploiement

#### Cache et Performance
- Activer la compression gzip/brotli
- Configurer les headers de cache (déjà dans next.config.mjs)
- Utiliser un CDN si nécessaire

#### SEO
- Vérifier le sitemap : `https://gh-epaviste.fr/sitemap.xml`
- Vérifier robots.txt : `https://gh-epaviste.fr/robots.txt`
- Soumettre le site à Google Search Console
- Configurer Google Analytics

#### Monitoring
- Configurer les logs d'erreur
- Mettre en place un monitoring de disponibilité
- Sauvegardes automatiques de la base de données

### 8. Checklist de déploiement

- [ ] Variables d'environnement configurées
- [ ] Base de données créée et migrée
- [ ] Build de production réussi
- [ ] DNS configuré
- [ ] SSL activé
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Formulaires fonctionnels
- [ ] Images optimisées
- [ ] Performance testée (PageSpeed Insights)
- [ ] SEO vérifié (Google Search Console)

### 9. Commandes utiles

```bash
# Build de production
npm run build

# Démarrage en production
npm start

# Vérification des dépendances
npm audit

# Mise à jour des dépendances
npm update

# Génération du client Prisma
npx prisma generate

# Migration de la base de données
npx prisma migrate deploy
```

### 10. Support et maintenance

- Surveiller les logs d'erreur
- Mettre à jour régulièrement les dépendances
- Sauvegarder la base de données
- Monitorer les performances
- Vérifier les liens cassés

## Contact technique

Pour toute question technique concernant le déploiement, contactez l'équipe de développement.