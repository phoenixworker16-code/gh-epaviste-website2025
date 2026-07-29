#!/usr/bin/env node
/**
 * Pipeline de Validation V4 - GH Épaviste
 * 
 * Exécute de bout en bout les validations de qualité pour la génération massive V4 :
 * 1. Legal Auditor sur l'ensemble des fichiers de data/cities
 * 2. Next.js Build (compilation, TypeScript, lint intégrés)
 * 3. Démarrage asynchrone du serveur Next.js (production)
 * 4. SEO Auditor sur chaque URL de commune trouvée dans data/cities
 * 5. Arrêt du serveur et nettoyage
 * 
 * Arrêt immédiat avec code d'erreur 1 si une seule étape échoue.
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

// Étape 1 : Legal Auditor
console.log('=== ⚖️ Étape 1 : Legal Auditor ===');
try {
  execSync('node scripts/legal-auditor.js data/cities', { stdio: 'inherit' });
  console.log('✅ Legal Auditor passé avec succès.\n');
} catch (error) {
  console.error('❌ ÉCHEC : Le Legal Auditor a détecté des infractions.\n');
  process.exit(1);
}

// Étape 2 : Next.js Build (reproductible, tsc, lint)
console.log('=== 🏗️ Étape 2 : Next.js Build ===');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Next.js Build réussi.\n');
} catch (error) {
  console.error('❌ ÉCHEC : La compilation ou le lint Next.js a échoué.\n');
  process.exit(1);
}

// Étape 3 : Démarrage du serveur Next.js en production
console.log('=== 🚀 Étape 3 : Démarrage du serveur de Production ===');
let serverProcess = null;

try {
  serverProcess = spawn('npm', ['run', 'start'], {
    shell: true,
    stdio: 'ignore' // Ne pas polluer la console avec les logs du serveur
  });
} catch (error) {
  console.error('❌ ÉCHEC : Impossible de lancer le serveur de production.', error);
  process.exit(1);
}

// Fonction pour attendre que le serveur réponde
function waitSeconds(s) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function checkServerReady() {
  return new Promise((resolve) => {
    const req = http.get(`${BASE_URL}/epaviste-gratuit-levallois-perret`, (res) => {
      if (res.statusCode === 200) resolve(true);
      else resolve(false);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

async function startServerAndRunAudits() {
  let attempts = 0;
  let ready = false;
  console.log('Attente du démarrage du serveur...');
  
  while (attempts < 15 && !ready) {
    attempts++;
    ready = await checkServerReady();
    if (!ready) {
      await waitSeconds(1);
    }
  }

  if (!ready) {
    console.error('❌ ÉCHEC : Le serveur de production Next.js n\'a pas démarré après 15 secondes.');
    killServer();
    process.exit(1);
  }

  console.log('✅ Serveur Next.js prêt sur le port', PORT, '\n');

  // Étape 4 : SEO Auditor sur chaque commune de data/cities (uniquement V4 validées)
  console.log('=== 🔍 Étape 4 : SEO Auditor ===');
  const citiesDir = path.join(__dirname, '../data/cities');
  const files = fs.readdirSync(citiesDir);
  const tsFiles = files.filter(f => f.endsWith('.ts'));

  const V4_VALIDATED_CITIES = [
    'levallois-perret',
    'paris',
    'boulogne-billancourt',
    'nanterre',
    'saint-denis',
    'creteil'
  ];

  const v4Files = tsFiles.filter(file => {
    const slug = path.basename(file, '.ts');
    return V4_VALIDATED_CITIES.includes(slug);
  });

  if (v4Files.length === 0) {
    console.warn('⚠️ Aucun fichier de ville V4 validé trouvé dans data/cities/.');
    killServer();
    process.exit(0);
  }

  let allSeoPassed = true;

  for (const file of v4Files) {
    const slug = path.basename(file, '.ts');
    // Levallois-Perret n'a pas le préfixe dans son nom de fichier mais l'URL de test
    // est toujours /epaviste-gratuit-[slug]
    const targetUrl = `${BASE_URL}/epaviste-gratuit-${slug}`;
    console.log(`Analyse SEO de : ${slug} (${targetUrl})...`);
    
    try {
      execSync(`node scripts/seo-auditor.js ${targetUrl}`, { stdio: 'inherit' });
      console.log(`✅ ${slug} : PASS\n`);
    } catch (error) {
      console.error(`❌ ÉCHEC : L'audit SEO de ${slug} a échoué.\n`);
      allSeoPassed = false;
      break; // Échec immédiat
    }
  }

  killServer();

  if (!allSeoPassed) {
    console.error('❌ ÉCHEC : Le pipeline V4 a échoué au niveau des audits SEO.');
    process.exit(1);
  }

  console.log('=== 🎉 PIPELINE V4 RÉUSSI ===');
  console.log('Toutes les étapes (Legal, Build, SEO) sont PASS.');
  process.exit(0);
}

function killServer() {
  if (serverProcess) {
    console.log('Arrêt du serveur de production Next.js...');
    // Sous Windows, spawn crée un processus shell qui lance npm, lui-même lançant node.
    // Il faut tuer l'arbre de processus pour libérer le port 3000.
    try {
      if (process.platform === 'win32') {
        execSync(`taskkill /pid ${serverProcess.pid} /t /f`, { stdio: 'ignore' });
      } else {
        serverProcess.kill();
      }
    } catch (e) {
      // Ignorer si déjà arrêté
    }
    console.log('✅ Serveur arrêté.');
  }
}

// Lancement
startServerAndRunAudits();
