// app/api/demandes/route.ts

// Importe le client Prisma.
// Assurez-vous que le chemin est correct selon la configuration 'output' de votre generator client dans schema.prisma.
// Par exemple, si output = "../lib/generated/prisma", alors l'importation sera depuis "@prisma/client"
// ou si vous avez un fichier utilitaire comme lib/prisma.ts, vous l'importeriez.
// Pour cet exemple, nous allons créer une instance simple directement ici.
// Pour des applications plus complexes, utilisez un singleton comme dans lib/prisma.ts ci-dessous.

import { PrismaClient } from '@prisma/client';
// Crée une nouvelle instance du client Prisma.
// Dans une application de production, il est recommandé d'utiliser un singleton pour PrismaClient
// afin d'éviter de créer plusieurs instances et de potentiels problèmes de connexion.
// Pour un exemple de singleton, voir le commentaire ci-dessous.
const prisma = new PrismaClient();

// Fonction pour gérer les requêtes POST (lorsque le formulaire est soumis)
export async function POST(request: Request) {
  try {
    // Parse le corps de la requête en JSON pour obtenir les données du formulaire
    const body = await request.json();

    // Crée une nouvelle demande dans la base de données en utilisant Prisma.
    // Les champs 'dateCreation' et 'statut' ont des valeurs par défaut dans votre schema.prisma,
    // donc nous n'avons pas besoin de les fournir ici.
    // L'ID est également auto-incrémenté par la base de données.
    const newDemande = await prisma.demande.create({
      data: {
        nom: body.nom,
        prenom: body.prenom,
        telephone: body.telephone,
        email: body.email || null, // S'assure que l'email est null si vide
        adresse: body.adresse,
        ville: body.ville,
        codePostal: body.codePostal,
        typeVehicule: body.typeVehicule,
        marque: body.marque || null, // S'assure que la marque est null si vide
        modele: body.modele || null, // S'assure que le modèle est null si vide
        annee: body.annee || null, // S'assure que l'année est null si vide
        etatVehicule: body.etatVehicule,
        description: body.description || null, // S'assure que la description est null si vide
        dateIntervention: body.dateIntervention ? new Date(body.dateIntervention) : null, // Convertit en Date ou null
      },
    });

    // Retourne une réponse de succès avec la nouvelle demande créée
    return new Response(JSON.stringify(newDemande), {
      status: 201, // 201 Created
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Gère les erreurs qui pourraient survenir lors de la création de la demande
    console.error("Erreur lors de la création de la demande:", error);
    return new Response(JSON.stringify({ message: "Erreur interne du serveur lors de la soumission de la demande." }), {
      status: 500, // 500 Internal Server Error
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// --- Recommandation : Utilisation d'un singleton pour PrismaClient ---
// Pour éviter de créer une nouvelle instance de PrismaClient à chaque requête
// (ce qui peut entraîner des problèmes de performance et de connexion à la base de données),
// il est recommandé d'utiliser un pattern singleton.
//
// Créez un fichier lib/prisma.ts (ou un chemin similaire) avec le contenu suivant :
/*
// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient({
  log: ['query'], // Optionnel: pour voir les requêtes SQL dans la console
})

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
*/
//
// Ensuite, dans app/api/demandes/route.ts, vous importeriez simplement:
// import prisma from '@/lib/prisma';
// Et vous n'auriez plus besoin de "const prisma = new PrismaClient();" ici.
