import type { jsPDF } from "jspdf"

// Correction: Ajout de 'export' à l'interface CertificateData
export interface CertificateData {
  id: string
  timestamp: string // ISO 8601 string
  hash: string // Hash of the document content
  signataire: string
  validite: string // ISO 8601 string
}

/**
 * @interface SignatureConfig
 * Configuration details for the signatory of the PDF document.
 */
interface SignatureConfig {
  signataire: string
  titre: string
  entreprise: string
  email: string
  telephone: string
  adresse: string
}

/**
 * @class PDFSigner
 * A utility class for generating secure document hashes, unique certificate IDs,
 * creating signature metadata, and adding visual and security metadata to jsPDF documents.
 */
export class PDFSigner {
  private config: SignatureConfig

  constructor(config: SignatureConfig) {
    this.config = config
  }

  /**
   * Generates a simple non-cryptographic hash for the document content.
   * This is for demonstration/visual purposes within the PDF and not for cryptographic security.
   * For true security, a robust hashing library (e.g., Node.js crypto, Web Crypto API) should be used.
   * @param content The string content of the document to hash.
   * @returns A 32-bit integer hash in uppercase hexadecimal format.
   */
  private generateDocumentHash(content: string): string {
    let hash = 0
    if (content.length === 0) return "00000000" // Handle empty content

    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32-bit integer (effectively `| 0` for signed 32-bit)
    }
    // Ensure the hash is positive and format to 8 uppercase hex digits
    return (hash >>> 0).toString(16).toUpperCase().padStart(8, "0")
  }

  /**
   * Generates a unique certificate ID using timestamp and a random string.
   * @returns A unique certificate ID string.
   */
  private generateCertificateId(): string {
    const timestamp = Date.now().toString(36) // Base 36 for shorter string
    const random = Math.random().toString(36).substring(2, 7) // 5 random chars
    return `GH-CERT-${timestamp}-${random}`.toUpperCase()
  }

  /**
   * Creates the digital signature certificate metadata.
   * @param documentContent The textual content of the document for hashing.
   * @returns An object containing the certificate data.
   */
  private createCertificate(documentContent: string): CertificateData {
    const now = new Date()
    // Valid for 1 year from now
    const validUntil = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000)

    return {
      id: this.generateCertificateId(),
      timestamp: now.toISOString(),
      hash: this.generateDocumentHash(documentContent),
      signataire: this.config.signataire,
      validite: validUntil.toISOString(),
    }
  }

  /**
   * Adds a visual signature block to the last page of the PDF.
   * Includes signatory details, certificate info, a simplified QR code visual,
   * and a "CERTIFIÉ" seal.
   * Also calls `addFooterLogo` to include the logo.
   * @param doc The jsPDF instance.
   * @param certificate The certificate data to display.
   * @returns A Promise that resolves when the logo (if any) has been added.
   */
  public async addVisualSignature(doc: jsPDF, certificate: CertificateData): Promise<void> {
  const pageWidth = doc.internal.pageSize.width
  const pageHeight = doc.internal.pageSize.height

    // Correction: Accès à getNumberOfPages via doc.internal.getNumberOfPages()
    // Si l'erreur persiste, cela peut être un problème de types @types/jspdf.
    // Une solution temporaire pourrait être de caster `doc.internal` en `any` si nécessaire:
    // const totalPages = (doc.internal as any).getNumberOfPages();

    // Optimized signature area at the bottom of the last page
    const signatureY = pageHeight - 70 // Y position from top
    const signatureHeight = 60
    const signatureWidth = pageWidth - 40
    const signatureX = 20 // X position from left

    // Signature frame with secure border
    doc.setDrawColor(255, 193, 7) // GH Yellow
    doc.setLineWidth(2)
    doc.rect(signatureX, signatureY, signatureWidth, signatureHeight)

    // Slightly colored background for the signature block
    doc.setFillColor(255, 253, 240) // Very light yellow
    doc.rect(signatureX, signatureY, signatureWidth, signatureHeight, "F")
    // Re-draw border to be on top of fill
    doc.rect(signatureX, signatureY, signatureWidth, signatureHeight)

    // Signature title
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text("SIGNATURE NUMÉRIQUE CERTIFIÉE", pageWidth / 2, signatureY + 10, {
      align: "center",
    })

    // Separation line
    doc.setDrawColor(255, 193, 7)
    doc.setLineWidth(1)
    doc.line(30, signatureY + 15, pageWidth - 30, signatureY + 15)

    // --- Content Layout: QR Code | Signatory Info | Certificate Info ---
    const contentStartY = signatureY + 22
    const col1X = 30 // QR Code column
    const col2X = 70 // Signatory Info column
    const col3X = 120 // Certificate Info column

    // Column 1: QR Code Placeholder (Left)
    const qrSize = 20
    const qrX = col1X
    const qrY = contentStartY - 2 // Adjust Y for visual alignment

    // QR code border
    doc.setDrawColor(0, 0, 0)
    doc.setLineWidth(0.5) // Thinner border for QR code
    doc.rect(qrX, qrY, qrSize, qrSize)

    // Simplified QR code pattern for visual representation
    doc.setFillColor(0, 0, 0)
    const qrPattern = [
      [1, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 1, 1],
      [0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 0, 1],
    ]

    const cellSize = qrSize / 7
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (qrPattern[i][j] === 1) {
          doc.rect(qrX + j * cellSize, qrY + i * cellSize, cellSize, cellSize, "F")
        }
      }
    }

    doc.setFontSize(6)
    doc.setTextColor(100, 100, 100)
    doc.text("Vérification", qrX + qrSize / 2, qrY + qrSize + 5, { align: "center" })

    // Column 2: Signatory Information (Center)
    let textY = contentStartY // Initial Y position for text

    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    doc.text("Signé par:", col2X, textY)
    textY += 5

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    doc.text(this.config.signataire, col2X, textY)
    textY += 5

    doc.setFontSize(8)
    doc.setTextColor(100, 100, 100)
    doc.text(this.config.titre, col2X, textY)
    textY += 5
    doc.text(this.config.entreprise, col2X, textY)

    // Column 3: Certificate Information (Right)
    textY = contentStartY // Reset Y position for this column

    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    doc.text("Certificat:", col3X, textY)
    textY += 5

    doc.setFontSize(8)
    doc.setTextColor(0, 0, 0)
    // Truncate ID for display if too long
    doc.text(`ID: ${certificate.id.substring(0, 15)}${certificate.id.length > 15 ? "..." : ""}`, col3X, textY)
    textY += 5
    doc.text(`Date: ${new Date(certificate.timestamp).toLocaleDateString("fr-FR")}`, col3X, textY)
    textY += 5
    doc.text(`Hash: ${certificate.hash}`, col3X, textY)

    // Security Seal (Right Corner of Signature Block)
    const sealX = pageWidth - 40 // X position of seal center
    const sealY = signatureY + 30 // Y position of seal center

    // Main circle (filled)
    doc.setDrawColor(255, 193, 7) // GH Yellow
    doc.setFillColor(255, 193, 7)
    doc.setLineWidth(2)
    doc.circle(sealX, sealY, 12, "FD") // F=fill, D=draw (stroke)

    // Inner circle (border only)
    doc.setDrawColor(0, 0, 0)
    doc.setLineWidth(1)
    doc.circle(sealX, sealY, 10)

    // Seal text
    doc.setFontSize(6)
    doc.setTextColor(0, 0, 0)
    doc.text("CERTIFIÉ", sealX, sealY - 2, { align: "center" })
    doc.text("GH", sealX, sealY + 2, { align: "center" })

    // Add the footer logo (asynchronous call) - SUPPRIMÉ : plus de logo dans la signature
    // await this.addFooterLogo(doc, signatureY)
  }

  /**
   * Adds the GH Épaviste logo and text to the footer section of the current page.
   * This method is asynchronous to handle image loading.
   * @param doc The jsPDF instance.
   * @param signatureY The Y-coordinate of the signature block, used for positioning.
   * @private
   */
  private async addFooterLogo(doc: jsPDF, signatureY: number): Promise<void> {
    try {
      // Use `HTMLImageElement` for better type safety
      const logoImg = new Image() as HTMLImageElement; // Type assertion

      // Ensure `crossOrigin` is set for images loaded from different origins (CORS)
      // This is crucial for security and preventing tainted canvas issues if not on the same origin.
      logoImg.crossOrigin = "anonymous";

      // Wrap image loading in a Promise for async/await
      await new Promise<void>((resolve, reject) => {
        logoImg.onload = () => resolve();
        logoImg.onerror = (e) => {
          console.error("Error loading footer logo:", e); // Log the actual event for debugging
          reject(new Error("Logo footer non disponible ou erreur de chargement."));
        };
        logoImg.src = "/images/300-300 logo noir.png"; // Utiliser le logo noir au lieu du logo blanc
      });

      // Position the logo at the bottom right of the signature block, centered
      const logoSize = 15;
      const logoX = doc.internal.pageSize.width - 70; // Adjust as needed
      const logoY = signatureY + 45; // Below the signature block

      doc.addImage(logoImg, "PNG", logoX, logoY, logoSize, logoSize);

      // "GH ÉPAVISTE" text below the yellow logo
      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.text("GH ÉPAVISTE", logoX + logoSize / 2, logoY + logoSize + 4, { align: "center" });

      console.log("✅ Logo noir ajouté au footer");
    } catch (error) {
      console.error("⚠️ Erreur lors de l'ajout du logo noir au footer:", error); // Use console.error for errors
      // You might want to add a placeholder text here if the image fails to load
      // doc.text("Logo non disponible", logoX, logoY);
    }
  }

  /**
   * Adds security-related metadata to the PDF document properties
   * and appends a dedicated certificate page.
   * @param doc The jsPDF instance.
   * @param certificate The certificate data to embed and display.
   * @returns A Promise that resolves when the certificate page (including logo) has been added.
   */
  public async addSecurityMetadata(doc: jsPDF, certificate: CertificateData): Promise<void> {
    // Add PDF document properties
    doc.setProperties({
      title: `Rapport GH Épaviste - Signé numériquement`,
      subject: `Document certifié par signature numérique`,
      author: this.config.signataire,
      creator: `${this.config.entreprise} - Système de signature automatique`,
      // Correction: Suppression de 'producer' car il n'est pas reconnu par les types actuels de jspdf
      // producer: `GH Épaviste PDF Signer v3.0`,
      keywords: `GH Épaviste, signature numérique, certifié, ${certificate.id}`,
    })

    // Add a dedicated certificate page (asynchronous due to logo loading)
    await this.addCertificatePage(doc, certificate)
  }

  /**
   * Adds a dedicated certificate page to the PDF with detailed signature information.
   * Includes a header logo, certificate details, signatory details, and a security warning.
   * This method is asynchronous to handle image loading.
   * @param doc The jsPDF instance.
   * @param certificate The certificate data to display on the page.
   * @private
   */
  private async addCertificatePage(doc: jsPDF, certificate: CertificateData): Promise<void> {
    doc.addPage() // Add a new page for the certificate
    const pageWidth = doc.internal.pageSize.width
    let yPos = 30 // Initial Y position for content

    // Certificate Header with Logo
    try {
      const logoImg = new Image() as HTMLImageElement; // Type assertion
      logoImg.crossOrigin = "anonymous";

      await new Promise<void>((resolve, reject) => {
        logoImg.onload = () => resolve();
        logoImg.onerror = (e) => {
          console.error("Error loading certificate page logo:", e);
          reject(new Error("Logo certificat non disponible ou erreur de chargement."));
        };
        logoImg.src = "/images/300-300 logo noir.png"; // Utiliser le logo noir pour la page certificat
      });

      // Center the logo at the top
      const logoSize = 25;
      const logoX = pageWidth / 2 - logoSize / 2; // Center horizontally
      doc.addImage(logoImg, "PNG", logoX, yPos - 5, logoSize, logoSize);
      yPos += 30; // Move Y position down after logo
    } catch (error) {
      console.error("⚠️ Erreur lors de l'ajout du logo au certificat:", error);
      // Fallback text if logo not available
      doc.setFontSize(14);
      doc.setTextColor(150, 150, 150);
      doc.text("GH Épaviste", pageWidth / 2, yPos, { align: "center" });
      yPos += 10; // Adjust Y position for text fallback
    }

    doc.setFontSize(18)
    doc.setTextColor(0, 0, 0)
    doc.text("GH ÉPAVISTE", pageWidth / 2, yPos, { align: "center" })
    yPos += 10

    doc.setFontSize(16)
    doc.text("CERTIFICAT DE SIGNATURE NUMÉRIQUE", pageWidth / 2, yPos, { align: "center" })

    yPos += 20
    doc.setDrawColor(255, 193, 7) // GH Yellow
    doc.setLineWidth(3)
    doc.line(30, yPos, pageWidth - 30, yPos) // Horizontal line

    yPos += 20

    // Certificate Information in a styled table-like format
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text("Informations du Certificat", 30, yPos)
    yPos += 15

    // Frame for information
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(1)
    doc.rect(30, yPos - 5, pageWidth - 60, 80) // Adjust height as needed for content

    const certInfo = [
      { label: "ID du Certificat", value: certificate.id },
      { label: "Date de signature", value: new Date(certificate.timestamp).toLocaleString("fr-FR") },
      { label: "Hash du document", value: certificate.hash },
      { label: "Signataire", value: certificate.signataire },
      { label: "Validité", value: `Jusqu'au ${new Date(certificate.validite).toLocaleDateString("fr-FR")}` },
      { label: "Algorithme", value: "SHA-256 simulé" }, // Indicate simulation
      { label: "Autorité", value: this.config.entreprise },
    ]

    doc.setFontSize(10)
    certInfo.forEach((info, index) => {
      const lineY = yPos + index * 10
      doc.setTextColor(100, 100, 100)
      doc.text(`${info.label}:`, 35, lineY)
      doc.setTextColor(0, 0, 0)
      doc.text(info.value, 120, lineY)
    })

    yPos += 90 // Adjust Y position after cert info block

    // Signatory Information
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text("Informations du Signataire", 30, yPos)
    yPos += 15

    // Frame for signatory information
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(1)
    doc.rect(30, yPos - 5, pageWidth - 60, 70) // Adjust height as needed

    const signerInfo = [
      { label: "Nom", value: this.config.signataire },
      { label: "Titre", value: this.config.titre },
      { label: "Entreprise", value: this.config.entreprise },
      { label: "Email", value: this.config.email },
      { label: "Téléphone", value: this.config.telephone },
      { label: "Adresse", value: this.config.adresse },
    ]

    doc.setFontSize(10)
    signerInfo.forEach((info, index) => {
      const lineY = yPos + index * 10
      doc.setTextColor(100, 100, 100)
      doc.text(`${info.label}:`, 35, lineY)
      doc.setTextColor(0, 0, 0)
      doc.text(info.value, 120, lineY)
    })

    yPos += 80 // Adjust Y position after signer info block

    // Styled Security Warning
    doc.setFillColor(255, 248, 220) // Very light beige
    doc.rect(30, yPos, pageWidth - 60, 40, "F") // Filled rectangle
    doc.setDrawColor(255, 193, 7) // Border yellow
    doc.setLineWidth(2)
    doc.rect(30, yPos, pageWidth - 60, 40) // Border

    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text("⚠️ AVERTISSEMENT DE SÉCURITÉ", pageWidth / 2, yPos + 12, { align: "center" })

    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    const warningText = [
      "Ce document a été signé numériquement par GH Épaviste.",
      "Toute modification du contenu invalidera la signature.",
      "Vérifiez l'authenticité en contactant l'émetteur au +33 6 59 12 88 19.", // Added period
    ]

    warningText.forEach((line, index) => {
      doc.text(line, pageWidth / 2, yPos + 22 + index * 6, { align: "center" })
    })

    // Certificate Footer - SUPPRIMÉ : le texte de date automatique n'est plus affiché
    // yPos = doc.internal.pageSize.height - 20
    // doc.setFontSize(8)
    // doc.setTextColor(150, 150, 150)
    // doc.text(`Certificat généré automatiquement le ${new Date().toLocaleString("fr-FR")}`, pageWidth / 2, yPos, {
    //   align: "center",
    // })
  }

  /**
   * Main method to sign a jsPDF document.
   * This orchestrates the creation of certificate data, adding visual signature,
   * and embedding security metadata and a dedicated certificate page.
   * @param doc The jsPDF instance to be signed.
   * @param documentContent The textual content of the document (or a representation) for hashing.
   * @returns The generated CertificateData.
   * @throws If image loading fails during signature or certificate page addition.
   */
  public async signDocument(doc: jsPDF, documentContent: string): Promise<CertificateData> {
    const certificate = this.createCertificate(documentContent)

    // Add visual signature (which includes adding the footer logo asynchronously)
    await this.addVisualSignature(doc, certificate)

    // Add security metadata (which includes adding the certificate page asynchronously)
    await this.addSecurityMetadata(doc, certificate)

    return certificate
  }
}

// Default configuration for GH Épaviste, providing a ready-to-use setup.
export const defaultSignatureConfig: SignatureConfig = {
  signataire: "Direction GH Épaviste",
  titre: "Directeur Général",
  entreprise: "GH Épaviste SARL",
  email: "direction@gh-epaviste.fr",
  telephone: "+33 6 59 12 88 19",
  adresse: "Île-de-France, France",
}
