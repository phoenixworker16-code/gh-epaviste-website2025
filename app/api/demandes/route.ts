// app/api/demandes/route.ts

// Remplacement: Importe directement l'instance singleton depuis lib/prisma.ts
import prisma from '@/lib/prisma';
import { sendDemandeEmail, buildAdminEmailHTML, buildClientEmailHTML } from '@/lib/mail';
import { verifyRecaptchaToken } from '@/lib/recaptcha';

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

    // Vérification reCAPTCHA v3 si configurée
    const siteKeyPresent = !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    const secretPresent = !!process.env.RECAPTCHA_SECRET
    const recaptchaToken = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : undefined
    if (siteKeyPresent && secretPresent) {
      if (!recaptchaToken) {
        return new Response(JSON.stringify({ message: 'reCAPTCHA manquant' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }
      const verify = await verifyRecaptchaToken(recaptchaToken)
      if (!verify.ok || (verify.score ?? 0) < 0.3) {
        return new Response(JSON.stringify({ message: 'Échec de la vérification reCAPTCHA.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    }

    // Crée une nouvelle demande dans la base de données en utilisant Prisma.
    const newDemande = await prisma.demande.create({
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
        dateIntervention: body.dateIntervention ? new Date(body.dateIntervention) : null,
      },
    });

    // Envoi email à la boîte de réception
    const subject = `Nouvelle demande d'enlèvement - ${newDemande.prenom} ${newDemande.nom}`
    const html = buildAdminEmailHTML(newDemande)
    const to = process.env.SMTP_TO || 'contact@gh-epaviste.fr'
    const emailResult = await sendDemandeEmail(to, subject, html)

    // Envoi email de confirmation au client si une adresse est fournie
    let clientEmailSent = false
    if (newDemande.email) {
      const clientSubject = `Confirmation de votre demande d'enlèvement – GH Épaviste`
      const clientHtml = buildClientEmailHTML(newDemande)
      const clientRes = await sendDemandeEmail(newDemande.email, clientSubject, clientHtml)
      clientEmailSent = !!clientRes.ok
    }

    // Retourne une réponse de succès avec la nouvelle demande créée
    return new Response(JSON.stringify({ ...newDemande, emailSent: emailResult.ok, clientEmailSent }), {
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

// Récupération des demandes (dashboard admin)
export async function GET() {
  try {
    const demandes = await prisma.demande.findMany({
      orderBy: { dateCreation: 'desc' },
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