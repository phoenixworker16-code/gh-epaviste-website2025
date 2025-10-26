"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  Users, CheckCircle, XCircle, Clock, Download, FileText, 
  Settings, User, Search, MoreVertical, Eye,
  Calendar, MapPin, Phone, Mail, Trash2, BarChart3, TrendingUp
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import AdminNotifications from "@/components/admin/notifications"

interface Demande {
  id: string
  nom: string
  prenom: string
  telephone: string
  email?: string
  adresse: string
  ville: string
  codePostal: string
  typeVehicule: string
  marque?: string
  modele?: string
  annee?: string
  etatVehicule: string
  description?: string
  dateCreation: string
  statut: 'en_attente' | 'acceptee' | 'rejetee' | 'en_cours' | 'terminee'
}

export default function AdminDashboard() {
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedDemande, setSelectedDemande] = useState<Demande | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem("adminAuth")
      if (adminAuth === "true") {
        setIsAuthenticated(true)
        fetchDemandes()
      } else {
        router.push("/admin/login")
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [router])

  const fetchDemandes = async () => {
    try {
      const response = await fetch("/api/demandes")
      if (response.ok) {
        const data = await response.json()
        const demandesWithStatus = data.map((d: any) => ({
          ...d,
          statut: d.statut || 'en_attente'
        }))
        setDemandes(demandesWithStatus)
      }
    } catch (error) {
      console.error('Erreur fetch demandes:', error)
    }
  }

  const updateDemandeStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/demandes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ statut: newStatus })
      })
      
      if (response.ok) {
        setDemandes(prev => prev.map(d => 
          d.id === id ? { ...d, statut: newStatus as any } : d
        ))
      }
    } catch (error) {
      console.error('Erreur update statut:', error)
    }
  }

  const deleteDemande = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      try {
        const response = await fetch(`/api/demandes/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          setDemandes(prev => prev.filter(d => d.id !== id))
        }
      } catch (error) {
        console.error('Erreur delete demande:', error)
      }
    }
  }

  const exportToCSV = () => {
    const headers = ["ID", "Nom", "Prénom", "Téléphone", "Email", "Ville", "Type Véhicule", "Statut", "Date"]
    const csvContent = [
      headers.join(","),
      ...demandes.map(d => [
        d.id, d.nom, d.prenom, d.telephone, d.email || "", 
        d.ville, d.typeVehicule, d.statut, d.dateCreation
      ].join(","))
    ].join("\\n")
    
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `demandes_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const downloadPDFReport = () => {
    import('@/lib/pdf-generator-client').then(({ generatePDFReport }) => {
      const demandesForPDF = demandes.map(d => ({
        id: d.id,
        nom: d.nom,
        prenom: d.prenom,
        telephone: d.telephone,
        email: d.email || '',
        adresse: `${d.adresse}, ${d.ville} ${d.codePostal}`,
        marque: d.marque || '',
        modele: d.modele || '',
        annee: d.annee || '',
        carburant: 'Non spécifié',
        etat: d.etatVehicule,
        description: d.description || '',
        statut: d.statut,
        dateCreation: d.dateCreation,
        dateIntervention: undefined,
        montant: undefined
      }))
      
      generatePDFReport(demandesForPDF, 'RAPPORT GÉNÉRAL GH ÉPAVISTE')
    }).catch(error => {
      console.error('Erreur import PDF:', error)
      alert('Erreur lors du chargement du générateur PDF')
    })
  }

  const downloadSinglePDFReport = (demande: Demande) => {
    import('@/lib/pdf-generator-client').then(({ generateSinglePDFReport }) => {
      const demandeForPDF = {
        id: demande.id,
        nom: demande.nom,
        prenom: demande.prenom,
        telephone: demande.telephone,
        email: demande.email || '',
        adresse: `${demande.adresse}, ${demande.ville} ${demande.codePostal}`,
        marque: demande.marque || '',
        modele: demande.modele || '',
        annee: demande.annee || '',
        carburant: 'Non spécifié',
        etat: demande.etatVehicule,
        description: demande.description || '',
        statut: demande.statut,
        dateCreation: demande.dateCreation,
        dateIntervention: undefined,
        montant: undefined
      }
      
      generateSinglePDFReport(demandeForPDF)
    }).catch(error => {
      console.error('Erreur import PDF:', error)
      alert('Erreur lors du chargement du générateur PDF')
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminLoginTime")
    router.push("/admin/login")
  }

  const filteredDemandes = demandes.filter(d => {
    const matchesSearch = `${d.nom} ${d.prenom} ${d.ville} ${d.telephone}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || d.statut === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: demandes.length,
    enAttente: demandes.filter(d => d.statut === 'en_attente').length,
    acceptees: demandes.filter(d => d.statut === 'acceptee').length,
    enCours: demandes.filter(d => d.statut === 'en_cours').length,
    terminees: demandes.filter(d => d.statut === 'terminee').length,
    rejetees: demandes.filter(d => d.statut === 'rejetee').length
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Chargement du dashboard...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {demandes.length} demandes
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <AdminNotifications />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Déconnexion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="demandes">Gestion des demandes</TabsTrigger>
            <TabsTrigger value="analytics">Analyses</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Demandes</CardTitle>
                  <Users className="h-8 w-8 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
                  <p className="text-xs text-muted-foreground mt-1">Toutes les demandes</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">En Attente</CardTitle>
                  <Clock className="h-8 w-8 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">{stats.enAttente}</div>
                  <p className="text-xs text-muted-foreground mt-1">À traiter</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Acceptées</CardTitle>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{stats.acceptees}</div>
                  <p className="text-xs text-muted-foreground mt-1">Validées</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Terminées</CardTitle>
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{stats.terminees}</div>
                  <p className="text-xs text-muted-foreground mt-1">Complétées</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Demandes Récentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demandes.slice(0, 5).map((demande) => (
                      <div key={demande.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{demande.prenom} {demande.nom}</p>
                          <p className="text-sm text-gray-500">{demande.ville}</p>
                        </div>
                        <Badge variant={
                          demande.statut === 'acceptee' ? 'default' :
                          demande.statut === 'rejetee' ? 'destructive' :
                          demande.statut === 'terminee' ? 'secondary' :
                          'outline'
                        }>
                          {demande.statut.replace('_', ' ')}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions Rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={downloadPDFReport} className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Générer Rapport PDF
                  </Button>
                  <Button onClick={exportToCSV} variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Exporter CSV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demandes" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filtrer par statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="en_attente">En attente</SelectItem>
                    <SelectItem value="acceptee">Acceptées</SelectItem>
                    <SelectItem value="en_cours">En cours</SelectItem>
                    <SelectItem value="terminee">Terminées</SelectItem>
                    <SelectItem value="rejetee">Rejetées</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex space-x-2">
                <Button onClick={exportToCSV} variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Exporter CSV
                </Button>
                <Button onClick={downloadPDFReport} variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Rapport PDF
                </Button>
              </div>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Véhicule</TableHead>
                    <TableHead>Localisation</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDemandes.map((demande) => (
                    <TableRow key={demande.id}>
                      <TableCell>
                        <div className="font-medium">{demande.prenom} {demande.nom}</div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Phone className="w-3 h-3 mr-1" />
                            {demande.telephone}
                          </div>
                          {demande.email && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Mail className="w-3 h-3 mr-1" />
                              {demande.email}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium capitalize">{demande.typeVehicule}</div>
                          {demande.marque && (
                            <div className="text-sm text-gray-500">
                              {demande.marque} {demande.modele} {demande.annee}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {demande.ville}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            demande.statut === 'acceptee' ? 'default' :
                            demande.statut === 'rejetee' ? 'destructive' :
                            demande.statut === 'terminee' ? 'secondary' :
                            'outline'
                          }
                        >
                          {demande.statut.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(demande.dateCreation).toLocaleDateString('fr-FR')}
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setSelectedDemande(demande)}>
                              <Eye className="w-4 h-4 mr-2" />
                              Voir détails
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => downloadSinglePDFReport(demande)}>
                              <FileText className="w-4 h-4 mr-2" />
                              Rapport PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateDemandeStatus(demande.id, 'acceptee')}>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Accepter
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateDemandeStatus(demande.id, 'rejetee')}>
                              <XCircle className="w-4 h-4 mr-2" />
                              Rejeter
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateDemandeStatus(demande.id, 'en_cours')}>
                              <Clock className="w-4 h-4 mr-2" />
                              En cours
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateDemandeStatus(demande.id, 'terminee')}>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Terminer
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => deleteDemande(demande.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Répartition par Statut</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>En attente</span>
                      <span className="font-bold">{stats.enAttente}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Acceptées</span>
                      <span className="font-bold">{stats.acceptees}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>En cours</span>
                      <span className="font-bold">{stats.enCours}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Terminées</span>
                      <span className="font-bold">{stats.terminees}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rejetées</span>
                      <span className="font-bold">{stats.rejetees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Taux d'acceptation</span>
                      <span className="font-bold">
                        {stats.total > 0 ? Math.round((stats.acceptees / stats.total) * 100) : 0}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Taux de completion</span>
                      <span className="font-bold">
                        {stats.total > 0 ? Math.round((stats.terminees / stats.total) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapport PDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Générer un rapport PDF professionnel avec logo et statistiques
                  </p>
                  <Button onClick={downloadPDFReport} className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Générer PDF
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export CSV</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Exporter les données au format CSV
                  </p>
                  <Button onClick={exportToCSV} variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CSV
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Total:</span>
                      <span className="font-medium">{stats.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">En attente:</span>
                      <span className="font-medium">{stats.enAttente}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Acceptées:</span>
                      <span className="font-medium">{stats.acceptees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedDemande} onOpenChange={() => setSelectedDemande(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Détails de la demande</DialogTitle>
          </DialogHeader>
          {selectedDemande && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Client</h4>
                  <p>{selectedDemande.prenom} {selectedDemande.nom}</p>
                </div>
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <p>{selectedDemande.telephone}</p>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>{selectedDemande.email || "Non renseigné"}</p>
                </div>
                <div>
                  <h4 className="font-medium">Adresse</h4>
                  <p>{selectedDemande.adresse}, {selectedDemande.ville} {selectedDemande.codePostal}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button onClick={() => {
                  updateDemandeStatus(selectedDemande.id, 'acceptee')
                  setSelectedDemande(null)
                }}>
                  Accepter
                </Button>
                <Button variant="outline" onClick={() => {
                  updateDemandeStatus(selectedDemande.id, 'rejetee')
                  setSelectedDemande(null)
                }}>
                  Rejeter
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}