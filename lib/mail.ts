// @ts-expect-error - nodemailer types may not be available
import nodemailer from 'nodemailer'

interface DemandeData {
  nom: string
  prenom: string
  telephone: string
  email: string | null
  adresse: string
  codePostal: string
  ville: string
  typeVehicule: string
  marque: string | null
  modele: string | null
  annee: string | null
  etatVehicule: string
  description: string | null
  dateCreation: Date | string
}

function normalizeRecipients(to: string | string[]): string {
  return Array.isArray(to) ? to.join(', ') : to
}

export function buildAdminEmailHTML(d: DemandeData) {
  const dateStr = d.dateCreation instanceof Date ? d.dateCreation.toLocaleString('fr-FR') : d.dateCreation
  return `
  <div style="font-family: Arial, sans-serif; color:#111;">
    <h2 style="margin:0 0 12px;">Nouvelle demande d'enlèvement</h2>
    <p style="margin:0 0 10px;">Une nouvelle demande a été soumise via le site.</p>
    <div style="background:#f7f7f7; padding:12px; border-radius:8px;">
      <p><strong>Nom:</strong> ${d.nom}</p>
      <p><strong>Prénom:</strong> ${d.prenom}</p>
      <p><strong>Téléphone:</strong> ${d.telephone}</p>
      <p><strong>Email:</strong> ${d.email ?? '—'}</p>
      <p><strong>Adresse:</strong> ${d.adresse}, ${d.codePostal} ${d.ville}</p>
      <p><strong>Type de véhicule:</strong> ${d.typeVehicule}</p>
      <p><strong>Marque/Modèle/Année:</strong> ${d.marque ?? '—'} / ${d.modele ?? '—'} / ${d.annee ?? '—'}</p>
      <p><strong>État:</strong> ${d.etatVehicule}</p>
      <p><strong>Description:</strong> ${d.description ?? '—'}</p>
      <p><strong>Date de création:</strong> ${dateStr}</p>
    </div>
    <p style="margin-top:12px;">Merci de contacter le client sous 2 heures pour organiser l'intervention.</p>
    <hr style="margin:14px 0; border:none; border-top:1px solid #e5e5e5;" />
    <p style="font-size:13px; color:#555;">GH Épaviste – Île-de-France<br/>contact@gh-epaviste.fr · +33 6 59 12 88 19</p>
  </div>
  `
}

export function buildClientEmailHTML(d: DemandeData) {
  const dateStr = d.dateCreation instanceof Date ? d.dateCreation.toLocaleString('fr-FR') : d.dateCreation
  return `
  <div style="font-family: Arial, sans-serif; color:#111;">
    <h2 style="margin:0 0 12px;">Confirmation de votre demande d'enlèvement</h2>
    <p style="margin:0 0 10px;">Bonjour ${d.prenom} ${d.nom},</p>
    <p style="margin:0 0 10px;">Nous avons bien reçu votre demande. Notre équipe vous recontactera sous 2 heures pour organiser l'intervention.</p>
    <div style="background:#f7f7f7; padding:12px; border-radius:8px;">
      <p><strong>Récapitulatif:</strong></p>
      <p><strong>Téléphone:</strong> ${d.telephone}</p>
      <p><strong>Adresse:</strong> ${d.adresse}, ${d.codePostal} ${d.ville}</p>
      <p><strong>Véhicule:</strong> ${d.typeVehicule} — ${d.marque ?? '—'} / ${d.modele ?? '—'} / ${d.annee ?? '—'}</p>
      <p><strong>État:</strong> ${d.etatVehicule}</p>
      <p><strong>Description:</strong> ${d.description ?? '—'}</p>
      <p><strong>Date de création:</strong> ${dateStr}</p>
    </div>
    <p style="margin-top:12px;">Nous restons disponibles si vous avez des questions.</p>
    <hr style="margin:14px 0; border:none; border-top:1px solid #e5e5e5;" />
    <p style="font-size:13px; color:#555;">GH Épaviste – Île-de-France<br/>contact@gh-epaviste.fr · +33 6 59 12 88 19</p>
  </div>
  `
}

export function createTransport() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 0)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    // Fallback: stream transport (no external SMTP) for development
    return nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true,
    })
  }

  const secure = port === 465 || process.env.SMTP_SECURE === 'true'

  return nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for other ports
    auth: { user, pass },
  })
}

export async function sendDemandeEmail(to: string | string[], subject: string, html: string) {
  const transporter = createTransport()

  const from = process.env.SMTP_FROM || 'contact@gh-epaviste.fr'

  try {
    const info = await transporter.sendMail({ from, to: normalizeRecipients(to), subject, html })
    return { ok: true, messageId: info.messageId }
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return { ok: false, error: String(error) }
  }
}