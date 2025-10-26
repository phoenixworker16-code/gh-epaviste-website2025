import jsPDF from 'jspdf';
import 'jspdf-autotable';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export interface DemandeData {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  adresse: string;
  marque: string;
  modele: string;
  annee: string;
  carburant: string;
  etat: string;
  description: string;
  statut: string;
  dateCreation: string;
  dateIntervention?: string;
  montant?: number;
}

export class PDFGenerator {
  private doc: jsPDF;
  private pageWidth: number;
  private pageHeight: number;
  private margin: number = 20;

  constructor() {
    this.doc = new jsPDF();
    this.pageWidth = this.doc.internal.pageSize.width;
    this.pageHeight = this.doc.internal.pageSize.height;
  }

  private addHeader() {
    // Logo et en-tête
    this.doc.setFillColor(41, 128, 185);
    this.doc.rect(0, 0, this.pageWidth, 40, 'F');
    
    this.doc.setTextColor(255, 255, 255);
    this.doc.setFontSize(24);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('GH ÉPAVISTE', this.margin, 25);
    
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Service de récupération de véhicules', this.margin, 35);
    
    // Ligne de séparation
    this.doc.setDrawColor(41, 128, 185);
    this.doc.setLineWidth(2);
    this.doc.line(this.margin, 45, this.pageWidth - this.margin, 45);
  }

  private addFooter(pageNum: number = 1) {
    const footerY = this.pageHeight - 20;
    
    this.doc.setDrawColor(200, 200, 200);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.margin, footerY - 5, this.pageWidth - this.margin, footerY - 5);
    
    this.doc.setTextColor(100, 100, 100);
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'normal');
    
    const contactInfo = 'GH Épaviste | Tél: +33 X XX XX XX XX | Email: contact@gh-epaviste.fr';
    const textWidth = this.doc.getTextWidth(contactInfo);
    this.doc.text(contactInfo, (this.pageWidth - textWidth) / 2, footerY);
    
    this.doc.text(`Page ${pageNum}`, this.pageWidth - this.margin - 20, footerY);
    this.doc.text(new Date().toLocaleDateString('fr-FR'), this.margin, footerY);
  }

  generateSingleReport(demande: DemandeData): void {
    this.addHeader();
    
    let yPos = 60;
    
    // Titre du rapport
    this.doc.setTextColor(41, 128, 185);
    this.doc.setFontSize(18);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('RAPPORT DE DEMANDE', this.margin, yPos);
    
    yPos += 15;
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(`Référence: ${demande.id}`, this.margin, yPos);
    this.doc.text(`Date: ${new Date(demande.dateCreation).toLocaleDateString('fr-FR')}`, this.pageWidth - 80, yPos);
    
    yPos += 20;
    
    // Informations client
    this.addSection('INFORMATIONS CLIENT', yPos);
    yPos += 15;
    
    const clientData = [
      ['Nom', `${demande.prenom} ${demande.nom}`],
      ['Téléphone', demande.telephone],
      ['Email', demande.email],
      ['Adresse', demande.adresse]
    ];
    
    this.doc.autoTable({
      startY: yPos,
      head: [['Champ', 'Valeur']],
      body: clientData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      margin: { left: this.margin, right: this.margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
    });
    
    yPos = (this.doc as any).lastAutoTable.finalY + 20;
    
    // Informations véhicule
    this.addSection('INFORMATIONS VÉHICULE', yPos);
    yPos += 15;
    
    const vehiculeData = [
      ['Marque', demande.marque],
      ['Modèle', demande.modele],
      ['Année', demande.annee],
      ['Carburant', demande.carburant],
      ['État', demande.etat]
    ];
    
    this.doc.autoTable({
      startY: yPos,
      head: [['Caractéristique', 'Détail']],
      body: vehiculeData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      margin: { left: this.margin, right: this.margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
    });
    
    yPos = (this.doc as any).lastAutoTable.finalY + 20;
    
    // Statut et détails
    this.addSection('STATUT ET DÉTAILS', yPos);
    yPos += 15;
    
    const statutData = [
      ['Statut', demande.statut],
      ['Date d\'intervention', demande.dateIntervention || 'Non programmée'],
      ['Montant estimé', demande.montant ? `${demande.montant}€` : 'Non défini']
    ];
    
    this.doc.autoTable({
      startY: yPos,
      head: [['Information', 'Valeur']],
      body: statutData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      margin: { left: this.margin, right: this.margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
    });
    
    yPos = (this.doc as any).lastAutoTable.finalY + 20;
    
    // Description
    if (demande.description) {
      this.addSection('DESCRIPTION', yPos);
      yPos += 15;
      
      this.doc.setFontSize(11);
      const splitDescription = this.doc.splitTextToSize(demande.description, this.pageWidth - 2 * this.margin);
      this.doc.text(splitDescription, this.margin, yPos);
    }
    
    this.addFooter();
    
    this.doc.save(`rapport-demande-${demande.id}.pdf`);
  }

  generateMultipleReport(demandes: DemandeData[], title: string = 'RAPPORT GÉNÉRAL'): void {
    this.addHeader();
    
    let yPos = 60;
    
    // Titre du rapport
    this.doc.setTextColor(41, 128, 185);
    this.doc.setFontSize(18);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(title, this.margin, yPos);
    
    yPos += 15;
    this.doc.setTextColor(0, 0, 0);
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(`Nombre de demandes: ${demandes.length}`, this.margin, yPos);
    this.doc.text(`Généré le: ${new Date().toLocaleDateString('fr-FR')}`, this.pageWidth - 80, yPos);
    
    yPos += 20;
    
    // Statistiques
    this.addSection('STATISTIQUES', yPos);
    yPos += 15;
    
    const stats = this.calculateStats(demandes);
    const statsData = [
      ['Total demandes', demandes.length.toString()],
      ['En attente', stats.enAttente.toString()],
      ['En cours', stats.enCours.toString()],
      ['Terminées', stats.terminees.toString()],
      ['Montant total estimé', `${stats.montantTotal}€`]
    ];
    
    this.doc.autoTable({
      startY: yPos,
      head: [['Métrique', 'Valeur']],
      body: statsData,
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      margin: { left: this.margin, right: this.margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 60 } }
    });
    
    yPos = (this.doc as any).lastAutoTable.finalY + 20;
    
    // Liste des demandes
    this.addSection('LISTE DES DEMANDES', yPos);
    yPos += 15;
    
    const tableData = demandes.map(d => [
      d.id,
      `${d.prenom} ${d.nom}`,
      d.telephone,
      `${d.marque} ${d.modele}`,
      d.statut,
      new Date(d.dateCreation).toLocaleDateString('fr-FR')
    ]);
    
    this.doc.autoTable({
      startY: yPos,
      head: [['ID', 'Client', 'Téléphone', 'Véhicule', 'Statut', 'Date']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      margin: { left: this.margin, right: this.margin },
      styles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 35 },
        2: { cellWidth: 30 },
        3: { cellWidth: 35 },
        4: { cellWidth: 25 },
        5: { cellWidth: 25 }
      }
    });
    
    this.addFooter();
    
    this.doc.save(`rapport-general-${new Date().toISOString().split('T')[0]}.pdf`);
  }

  private addSection(title: string, yPos: number): void {
    this.doc.setFillColor(240, 240, 240);
    this.doc.rect(this.margin, yPos - 5, this.pageWidth - 2 * this.margin, 12, 'F');
    
    this.doc.setTextColor(41, 128, 185);
    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text(title, this.margin + 5, yPos + 3);
  }

  private calculateStats(demandes: DemandeData[]) {
    return {
      enAttente: demandes.filter(d => d.statut === 'En attente').length,
      enCours: demandes.filter(d => d.statut === 'En cours').length,
      terminees: demandes.filter(d => d.statut === 'Terminé').length,
      montantTotal: demandes.reduce((sum, d) => sum + (d.montant || 0), 0)
    };
  }
}