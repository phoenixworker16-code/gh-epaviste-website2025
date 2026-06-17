import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Initialise le client Resend avec la clé d'API de production
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { prenom, nom, telephone, email, plaqueImmatriculation, ville, codePostal, message } = body;

    // Validation basique des champs requis
    if (!prenom || !nom || !telephone || !plaqueImmatriculation || !ville || !codePostal) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = 'contact@gh-epaviste.fr';
    const sentAt = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: `GH Epaviste Formulaire <${fromEmail}>`,
      to: toEmail,
      subject: `Nouvelle demande d'enlèvement - GH Épaviste | ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">🚗 Nouvelle demande d'enlèvement d'épave</h2>
          <p style="font-size: 16px; color: #1a202c;">Une nouvelle demande d'enlèvement d'épave a été envoyée depuis le site <strong>gh-epaviste.fr</strong>.</p>
          <p style="font-size: 13px; color: #718096;">📅 Reçu le : <strong>${sentAt}</strong></p>
          
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <h3 style="color: #2d3748; margin-top: 0;">Détails du contact</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 40%;">Nom complet :</td>
                <td style="padding: 8px 0; color: #1a202c;">${prenom} ${nom}</td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Téléphone :</td>
                <td style="padding: 8px 0; color: #1a202c;"><a href="tel:${telephone}" style="color: #f59e0b; font-weight: bold; text-decoration: none;">${telephone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">E-mail :</td>
                <td style="padding: 8px 0; color: #1a202c;">${email ? `<a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a>` : '<em>Non fourni</em>'}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f7fafc; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <h3 style="color: #2d3748; margin-top: 0;">Détails du véhicule &amp; Localisation</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 40%;">Plaque d'immatriculation :</td>
                <td style="padding: 8px 0; color: #1a202c; font-family: monospace; font-size: 16px; font-weight: bold;">${plaqueImmatriculation}</td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Ville d'intervention :</td>
                <td style="padding: 8px 0; color: #1a202c;">${ville}</td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Code postal :</td>
                <td style="padding: 8px 0; color: #1a202c;">${codePostal}</td>
              </tr>
            </table>
          </div>

          ${message ? `
          <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 0 6px 6px 0; margin-top: 20px;">
            <h3 style="color: #2d3748; margin-top: 0;">💬 Message du client</h3>
            <p style="color: #1a202c; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          ` : ''}

          <p style="font-size: 12px; color: #a0aec0; text-align: center; margin-top: 30px;">
            Cet e-mail a été généré automatiquement par le formulaire de contact de GH Épaviste.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email via Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Erreur lors du traitement de la requête:', error);
    return NextResponse.json({ error: error.message || 'Une erreur serveur est survenue' }, { status: 500 });
  }
}
