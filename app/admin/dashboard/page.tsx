"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
// Graphiques CSS simples sans dépendances externes
import { 
  Users, Car, CheckCircle, XCircle, Clock, Download, FileText, 
  Settings, User, Bell, Search, Filter, MoreVertical, Eye,
  TrendingUp, Calendar, MapPin, Phone, Mail, Trash2, Edit
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription } from "@/components/ui/alert"
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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

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
      console.error("Erreur lors du chargement des demandes:", error)
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
      console.error("Erreur lors de la mise à jour:", error)
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
        console.error("Erreur lors de la suppression:", error)
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

  const generateReport = () => {
    const report = {
      totalDemandes: demandes.length,
      enAttente: demandes.filter(d => d.statut === 'en_attente').length,
      acceptees: demandes.filter(d => d.statut === 'acceptee').length,
      rejetees: demandes.filter(d => d.statut === 'rejetee').length,
      terminées: demandes.filter(d => d.statut === 'terminee').length,
      parVille: demandes.reduce((acc, d) => {
        acc[d.ville] = (acc[d.ville] || 0) + 1
        return acc
      }, {} as Record<string, number>)
    }
    
    console.log("Rapport généré:", report)
    alert("Rapport généré ! Consultez la console pour les détails.")
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

  const statusData = [
    { name: 'En attente', value: demandes.filter(d => d.statut === 'en_attente').length, color: '#FFBB28' },
    { name: 'Acceptées', value: demandes.filter(d => d.statut === 'acceptee').length, color: '#00C49F' },
    { name: 'En cours', value: demandes.filter(d => d.statut === 'en_cours').length, color: '#0088FE' },
    { name: 'Terminées', value: demandes.filter(d => d.statut === 'terminee').length, color: '#8884D8' },
    { name: 'Rejetées', value: demandes.filter(d => d.statut === 'rejetee').length, color: '#FF8042' }
  ]

  const monthlyData = demandes.reduce((acc, d) => {
    const month = new Date(d.dateCreation).toLocaleDateString('fr-FR', { month: 'short' })
    acc[month] = (acc[month] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const chartData = Object.entries(monthlyData).map(([month, count]) => ({ month, count }))

  const vehicleTypeData = demandes.reduce((acc, d) => {
    acc[d.typeVehicule] = (acc[d.typeVehicule] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const vehicleChartData = Object.entries(vehicleTypeData).map(([type, count]) => ({ type, count }))

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
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="demandes">Gestion des demandes</TabsTrigger>
            <TabsTrigger value="analytics">Analyses</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Demandes</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demandes.length}</div>
                  <p className="text-xs text-muted-foreground">+12% ce mois</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">En attente</CardTitle>
                  <Clock className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demandes.filter(d => d.statut === 'en_attente').length}</div>
                  <p className="text-xs text-muted-foreground">Nécessitent une action</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Acceptées</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demandes.filter(d => d.statut === 'acceptee').length}</div>
                  <p className="text-xs text-muted-foreground">Taux: {Math.round((demandes.filter(d => d.statut === 'acceptee').length / demandes.length) * 100)}%</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Terminées</CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{demandes.filter(d => d.statut === 'terminee').length}</div>
                  <p className="text-xs text-muted-foreground">Missions accomplies</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Répartition par statut</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {statusData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full" 
                              style={{ 
                                backgroundColor: item.color,
                                width: `${(item.value / Math.max(...statusData.map(d => d.value))) * 100}%`
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium w-8">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Évolution mensuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {chartData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium w-12">{item.month}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                              style={{ 
                                width: `${(item.count / Math.max(...chartData.map(d => d.count))) * 100}%`
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-bold w-8">{item.count}</span>
                      </div>
                    ))}
                  </div>
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
                <Button onClick={generateReport} variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Générer rapport
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
                        <div>
                          <div className="font-medium">{demande.prenom} {demande.nom}</div>
                        </div>
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

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Types de véhicules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {vehicleChartData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium capitalize">{item.type}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-4">
                            <div 
                              className="bg-purple-500 h-4 rounded-full transition-all duration-300" 
                              style={{ 
                                width: `${(item.count / Math.max(...vehicleChartData.map(d => d.count))) * 100}%`
                              }}
                            />
                          </div>
                          <span className="text-sm font-bold w-8">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistiques détaillées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{demandes.length}</div>
                      <div className="text-sm text-blue-600">Total demandes</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round((demandes.filter(d => d.statut === 'acceptee').length / demandes.length) * 100)}%
                      </div>
                      <div className="text-sm text-green-600">Taux acceptation</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">{demandes.filter(d => d.statut === 'en_attente').length}</div>
                      <div className="text-sm text-yellow-600">En attente</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{demandes.filter(d => d.statut === 'terminee').length}</div>
                      <div className="text-sm text-purple-600">Terminées</div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <h4 className="font-medium">Villes les plus actives</h4>
                    {Object.entries(demandes.reduce((acc, d) => {
                      acc[d.ville] = (acc[d.ville] || 0) + 1
                      return acc
                    }, {} as Record<string, number>))
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 5)
                    .map(([ville, count]) => (
                      <div key={ville} className="flex justify-between items-center">
                        <span className="text-sm">{ville}</span>
                        <span className="text-sm font-medium">{count} demandes</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapport mensuel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Générer un rapport détaillé des activités du mois
                  </p>
                  <Button onClick={generateReport} className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Générer
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Exporter toutes les demandes au format CSV
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
                      <span className="text-sm">Taux d'acceptation:</span>
                      <span className="font-medium">
                        {Math.round((demandes.filter(d => d.statut === 'acceptee').length / demandes.length) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Temps moyen:</span>
                      <span className="font-medium">2.5 jours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Satisfaction:</span>
                      <span className="font-medium">4.8/5</span>
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
                <div>
                  <h4 className="font-medium">Véhicule</h4>
                  <p className="capitalize">{selectedDemande.typeVehicule}</p>
                  {selectedDemande.marque && (
                    <p className="text-sm text-gray-600">
                      {selectedDemande.marque} {selectedDemande.modele} {selectedDemande.annee}
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="font-medium">État</h4>
                  <p className="capitalize">{selectedDemande.etatVehicule}</p>
                </div>
              </div>
              {selectedDemande.description && (
                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-sm bg-gray-50 p-3 rounded">{selectedDemande.description}</p>
                </div>
              )}
              <div className="flex space-x-2">
                <Button onClick={() => updateDemandeStatus(selectedDemande.id, 'acceptee')}>
                  Accepter
                </Button>
                <Button variant="outline" onClick={() => updateDemandeStatus(selectedDemande.id, 'rejetee')}>
                  Rejeter
                </Button>
                <Button variant="outline" onClick={() => updateDemandeStatus(selectedDemande.id, 'en_cours')}>
                  En cours
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profil Administrateur</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium">Administrateur</h3>
                <p className="text-sm text-gray-500">admin@gh-epaviste.com</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-sm font-medium">Nom d'utilisateur</label>
                <Input value="admin" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Rôle</label>
                <Input value="Administrateur" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Dernière connexion</label>
                <Input value={new Date().toLocaleString('fr-FR')} disabled />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}