"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  Users, CheckCircle, XCircle, Clock, Download, FileText, 
  Settings, User, Search, MoreVertical, Eye,
  Calendar, MapPin, Phone, Mail, Trash2
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
  const [showProfile, setShowProfile] = useState(false)
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
      // Erreur silencieuse
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
        alert(`Demande ${newStatus.replace('_', ' ')} avec succès !`)
      } else {
        alert('Erreur lors de la mise à jour')
      }
    } catch (error) {
      alert('Erreur lors de la mise à jour')
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
          alert('Demande supprimée avec succès !')
        } else {
          alert('Erreur lors de la suppression')
        }
      } catch (error) {
        alert('Erreur lors de la suppression')
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
    ].join("\n")
    
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `demandes_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const downloadReport = () => {
    const date = new Date()
    const content = `RAPPORT GH ÉPAVISTE - ${date.toLocaleDateString('fr-FR')}

STATISTIQUES:
- Total: ${demandes.length}
- En attente: ${demandes.filter(d => d.statut === 'en_attente').length}
- Acceptées: ${demandes.filter(d => d.statut === 'acceptee').length}
- Terminées: ${demandes.filter(d => d.statut === 'terminee').length}

TAUX:
- Acceptation: ${demandes.length > 0 ? Math.round((demandes.filter(d => d.statut === 'acceptee').length / demandes.length) * 100) : 0}%`

    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
    element.setAttribute('download', `rapport_${date.toISOString().split('T')[0]}.txt`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
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
                <DropdownMenuItem onClick={() => setShowProfile(true)}>
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
        <Tabs defaultValue="demandes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="demandes">Gestion des demandes</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

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
                <Button onClick={downloadReport} variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Télécharger rapport
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

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapport mensuel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Télécharger un rapport des activités
                  </p>
                  <Button onClick={downloadReport} className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Télécharger
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
                      <span className="font-medium">{demandes.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">En attente:</span>
                      <span className="font-medium">{demandes.filter(d => d.statut === 'en_attente').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Acceptées:</span>
                      <span className="font-medium">{demandes.filter(d => d.statut === 'acceptee').length}</span>
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