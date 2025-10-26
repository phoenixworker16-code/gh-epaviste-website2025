// app/api/demandes/route.ts

// Configurations pour forcer l'exécution Serverless (Node.js) sur Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import prisma from '@/lib/prisma';
// import { sendDemandeEmail, buildAdminEmailHTML, buildClientEmailHTML } from '@/lib/mail';
// import { verifyRecaptchaToken } from '@/lib/recaptcha';

// Fonction pour gérer les requêtes POST (lorsque le formulaire est soumis)
export async function POST(request: Request) {
  try {
    // Parse le corps de la requête en JSON pour obtenir les données du formulaire
    const body = await request.json();

    // Honeypot anti-spam: ignorer si rempli
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Création de la demande en base de données
    const demande = await prisma.demande.create({
      data: {
        nom: body.nom,
        prenom: body.prenom,
        telephone: body.telephone,
        email: body.email || null,
        adresse: body.adresse,
        ville: body.ville,
        codePostal: body.codePostal,
        typeVehicule: body.typeVehicule,
        marque: body.marque || null,
        modele: body.modele || null,
        annee: body.annee || null,
        etatVehicule: body.etatVehicule,
        description: body.description || null,
        statut: 'en_attente'
      }
    });

    // Retourne une réponse de succès
    return new Response(JSON.stringify({ 
      ...demande, 
      emailSent: true, 
      clientEmailSent: !!body.email,
      message: 'Demande reçue avec succès'
    }), {
      status: 201,
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

// Récupération des demandes (dashboard admin)
export async function GET() {
  try {
    const demandes = await prisma.demande.findMany({
      orderBy: { dateCreation: 'desc' }
    })
    
    return new Response(JSON.stringify(demandes), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes:', error)
    return new Response(JSON.stringify({ message: 'Erreur interne du serveur.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}