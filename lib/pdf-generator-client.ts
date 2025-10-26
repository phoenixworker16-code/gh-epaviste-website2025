"use client"

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

export const generatePDFReport = async (demandes: DemandeData[], title: string = 'RAPPORT GÉNÉRAL') => {
  try {
    const { jsPDF } = await import('jspdf');
    const autoTable = (await import('jspdf-autotable')).default;
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;

    doc.setFillColor(234, 179, 8);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('GH ÉPAVISTE', margin, 25);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Service de récupération de véhicules', margin, 35);
    
    doc.setDrawColor(234, 179, 8);
    doc.setLineWidth(2);
    doc.line(margin, 45, pageWidth - margin, 45);

    let yPos = 60;
    
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin, yPos);
    
    yPos += 15;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Nombre de demandes: ${demandes.length}`, margin, yPos);
    doc.text(`Généré le: ${new Date().toLocaleDateString('fr-FR')}`, pageWidth - 80, yPos);
    
    yPos += 20;
    
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 12, 'F');
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('STATISTIQUES', margin + 5, yPos + 3);
    
    yPos += 15;
    
    const stats = {
      enAttente: demandes.filter(d => d.statut === 'en_attente').length,
      enCours: demandes.filter(d => d.statut === 'en_cours').length,
      terminees: demandes.filter(d => d.statut === 'terminee').length,
      acceptees: demandes.filter(d => d.statut === 'acceptee').length,
      montantTotal: demandes.reduce((sum, d) => sum + (d.montant || 0), 0)
    };
    
    const statsData = [
      ['Total demandes', demandes.length.toString()],
      ['En attente', stats.enAttente.toString()],
      ['Acceptées', stats.acceptees.toString()],
      ['En cours', stats.enCours.toString()],
      ['Terminées', stats.terminees.toString()],
      ['Montant total estimé', `${stats.montantTotal}€`]
    ];
    
    autoTable(doc, {
      startY: yPos,
      head: [['Métrique', 'Valeur']],
      body: statsData,
      theme: 'grid',
      headStyles: { fillColor: [234, 179, 8], textColor: 0 },
      margin: { left: margin, right: margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 60 } }
    });
    
    yPos = (doc as any).lastAutoTable.finalY + 20;
    
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 12, 'F');
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('LISTE DES DEMANDES', margin + 5, yPos + 3);
    
    yPos += 15;
    
    const tableData = demandes.map(d => [
      d.id,
      `${d.prenom} ${d.nom}`,
      d.telephone,
      `${d.marque} ${d.modele}`,
      d.statut.replace('_', ' '),
      new Date(d.dateCreation).toLocaleDateString('fr-FR')
    ]);
    
    autoTable(doc, {
      startY: yPos,
      head: [['ID', 'Client', 'Téléphone', 'Véhicule', 'Statut', 'Date']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [234, 179, 8], textColor: 0 },
      margin: { left: margin, right: margin },
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
    
    const footerY = pageHeight - 20;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
    
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const contactInfo = 'GH Épaviste | Tél: +33 6 59 12 88 19 | Email: contact@gh-epaviste.fr';
    const textWidth = doc.getTextWidth(contactInfo);
    doc.text(contactInfo, (pageWidth - textWidth) / 2, footerY);
    
    doc.text('Page 1', pageWidth - margin - 20, footerY);
    doc.text(new Date().toLocaleDateString('fr-FR'), margin, footerY);
    
    doc.save(`rapport-general-${new Date().toISOString().split('T')[0]}.pdf`);
    
  } catch (error) {
    console.error('Erreur génération PDF rapport:', error);
    alert('Erreur lors de la génération du PDF. Vérifiez la console pour plus de détails.');
  }
};

export const generateSinglePDFReport = async (demande: DemandeData) => {
  try {
    const { jsPDF } = await import('jspdf');
    const autoTable = (await import('jspdf-autotable')).default;
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;

    doc.setFillColor(234, 179, 8);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('GH ÉPAVISTE', margin, 25);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Service de récupération de véhicules', margin, 35);
    
    doc.setDrawColor(234, 179, 8);
    doc.setLineWidth(2);
    doc.line(margin, 45, pageWidth - margin, 45);

    let yPos = 60;
    
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('RAPPORT DE DEMANDE', margin, yPos);
    
    yPos += 15;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Référence: ${demande.id}`, margin, yPos);
    doc.text(`Date: ${new Date(demande.dateCreation).toLocaleDateString('fr-FR')}`, pageWidth - 80, yPos);
    
    yPos += 20;
    
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 12, 'F');
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('INFORMATIONS CLIENT', margin + 5, yPos + 3);
    
    yPos += 15;
    
    const clientData = [
      ['Nom', `${demande.prenom} ${demande.nom}`],
      ['Téléphone', demande.telephone],
      ['Email', demande.email],
      ['Adresse', demande.adresse]
    ];
    
    autoTable(doc, {
      startY: yPos,
      head: [['Champ', 'Valeur']],
      body: clientData,
      theme: 'grid',
      headStyles: { fillColor: [234, 179, 8], textColor: 0 },
      margin: { left: margin, right: margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
    });
    
    yPos = (doc as any).lastAutoTable.finalY + 20;
    
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 12, 'F');
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('INFORMATIONS VÉHICULE', margin + 5, yPos + 3);
    
    yPos += 15;
    
    const vehiculeData = [
      ['Marque', demande.marque],
      ['Modèle', demande.modele],
      ['Année', demande.annee],
      ['Carburant', demande.carburant],
      ['État', demande.etat]
    ];
    
    autoTable(doc, {
      startY: yPos,
      head: [['Caractéristique', 'Détail']],
      body: vehiculeData,
      theme: 'grid',
      headStyles: { fillColor: [234, 179, 8], textColor: 0 },
      margin: { left: margin, right: margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
    });
    
    yPos = (doc as any).lastAutoTable.finalY + 20;
    
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 12, 'F');
    doc.setTextColor(234, 179, 8);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('STATUT ET DÉTAILS', margin + 5, yPos + 3);
    
    yPos += 15;
    
    const statutData = [
      ['Statut', demande.statut.replace('_', ' ')],
      ['Date d\'intervention', demande.dateIntervention || 'Non programmée'],
      ['Montant estimé', demande.montant ? `${demande.montant}€` : 'Non défini']
    ];
    
    autoTable(doc, {
      startY: yPos,
      head: [['Information', 'Valeur']],
      body: statutData,
      theme: 'grid',
      headStyles: { fillColor: [234, 179, 8], textColor: 0 },
      margin: { left: margin, right: margin },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
    });
    
    yPos = (doc as any).lastAutoTable.finalY + 20;
    
    if (demande.description) {
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, yPos - 5, pageWidth - 2 * margin, 12, 'F');
      doc.setTextColor(234, 179, 8);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('DESCRIPTION', margin + 5, yPos + 3);
      
      yPos += 15;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      const splitDescription = doc.splitTextToSize(demande.description, pageWidth - 2 * margin);
      doc.text(splitDescription, margin, yPos);
    }
    
    const footerY = pageHeight - 20;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
    
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const contactInfo = 'GH Épaviste | Tél: +33 6 59 12 88 19 | Email: contact@gh-epaviste.fr';
    const textWidth = doc.getTextWidth(contactInfo);
    doc.text(contactInfo, (pageWidth - textWidth) / 2, footerY);
    
    doc.text('Page 1', pageWidth - margin - 20, footerY);
    doc.text(new Date().toLocaleDateString('fr-FR'), margin, footerY);
    
    doc.save(`rapport-demande-${demande.id}.pdf`);
    
  } catch (error) {
    console.error('Erreur génération PDF demande:', error);
    alert('Erreur lors de la génération du PDF. Vérifiez la console pour plus de détails.');
  }
};