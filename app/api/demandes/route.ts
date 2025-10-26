// app/api/demandes/route.ts

// Configurations pour forcer l'exécution Serverless (Node.js) sur Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Version temporaire sans Prisma pour test
// import prisma from '@/lib/prisma';
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

    // Version temporaire - log des données et retour succès
    console.log('Demande reçue:', {
      nom: body.nom,
      prenom: body.prenom,
      telephone: body.telephone,
      email: body.email,
      ville: body.ville,
      typeVehicule: body.typeVehicule
    });

    // Simulation d'une demande créée
    const mockDemande = {
      id: Date.now().toString(),
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
      dateCreation: new Date().toISOString()
    };

    // Retourne une réponse de succès
    return new Response(JSON.stringify({ 
      ...mockDemande, 
      emailSent: true, 
      clientEmailSent: !!body.email,
      message: 'Demande reçue avec succès (mode test)'
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

// Récupération des demandes (dashboard admin) - version temporaire
export async function GET() {
  try {
    // Retourne des données de test
    const mockDemandes = [
      {
        id: '1',
        nom: 'Dupont',
        prenom: 'Jean',
        telephone: '0123456789',
        email: 'jean.dupont@email.com',
        adresse: '123 Rue de la Paix',
        ville: 'Paris',
        codePostal: '75001',
        typeVehicule: 'voiture',
        marque: 'Renault',
        modele: 'Clio',
        annee: '2010',
        etatVehicule: 'non-roulant',
        description: 'Véhicule accidenté',
        dateCreation: new Date().toISOString(),
        statut: 'en_attente'
      },
      {
        id: '2',
        nom: 'Martin',
        prenom: 'Sophie',
        telephone: '0987654321',
        email: 'sophie.martin@email.com',
        adresse: '456 Avenue des Champs',
        ville: 'Lyon',
        codePostal: '69001',
        typeVehicule: 'camionnette',
        marque: 'Peugeot',
        modele: 'Partner',
        annee: '2015',
        etatVehicule: 'roulant',
        description: 'Véhicule en fin de vie',
        dateCreation: new Date(Date.now() - 86400000).toISOString(),
        statut: 'acceptee'
      },
      {
        id: '3',
        nom: 'Bernard',
        prenom: 'Pierre',
        telephone: '0147258369',
        email: null,
        adresse: '789 Rue du Commerce',
        ville: 'Marseille',
        codePostal: '13001',
        typeVehicule: 'moto',
        marque: 'Yamaha',
        modele: 'MT-07',
        annee: '2018',
        etatVehicule: 'accidenté',
        description: 'Moto suite accident',
        dateCreation: new Date(Date.now() - 172800000).toISOString(),
        statut: 'terminee'
      }
    ];
    
    return new Response(JSON.stringify(mockDemandes), {
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