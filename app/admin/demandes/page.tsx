"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Phone,
  Mail,
  MapPin,
  Car,
  Calendar,
  Search,
  Filter,
  FileText,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  Trash2,
  LogOut,
  RefreshCw,
  X,
  Settings,
  User,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PDFSigner, defaultSignatureConfig, CertificateData } from "@/lib/pdf-signature"
import { StorageManager, Demande } from "@/lib/storage-manager"

export default function AdminDemandes() {
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [filteredDemandes, setFilteredDemandes] = useState<Demande[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showPreview, setShowPreview] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showProfileDialog, setShowProfileDialog] = useState(false)
  const [adminName, setAdminName] = useState("Administrateur")
  const [newPassword, setNewPassword] = useState("")
  const router = useRouter()

  // Vérification de l'authentification
  useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem("adminAuth")
      const loginTime = localStorage.getItem("adminLoginTime")
      const savedName = localStorage.getItem("adminName")
      const savedDarkMode = localStorage.getItem("darkMode")

      if (savedName) setAdminName(savedName)
      if (savedDarkMode === "true") setIsDarkMode(true)

      if (adminAuth === "true" && loginTime) {
        const now = Date.now()
        const loginTimestamp = Number.parseInt(loginTime)
        const sessionDuration = 24 * 60 * 60 * 1000 // 24 heures

        if (now - loginTimestamp < sessionDuration) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem("adminAuth")
          localStorage.removeItem("adminLoginTime")
          router.push("/admin/login")
        }
      } else {
        router.push("/admin/login")
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // Gestionnaire de stockage
  useEffect(() => {
    if (isAuthenticated) {
      const storageManager = StorageManager.getInstance()

      const loadDemandesFromApi = async () => {
        try {
          const res = await fetch('/api/demandes', { method: 'GET' })
          if (res.ok) {
            const list = await res.json() as any[]
            // Adapter au type Demande (stringify dates)
            const normalized: Demande[] = list.map((d) => ({
              id: String(d.id),
              nom: d.nom,
              prenom: d.prenom,
              telephone: d.telephone,
              email: d.email ?? '',
              adresse: d.adresse,
              ville: d.ville,
              codePostal: d.codePostal,
              typeVehicule: d.typeVehicule,
              marque: d.marque ?? '',
              modele: d.modele ?? '',
              annee: d.annee ?? '',
              etatVehicule: d.etatVehicule,
              description: d.description ?? '',
              dateCreation: typeof d.dateCreation === 'string' ? d.dateCreation : new Date(d.dateCreation).toISOString(),
              statut: (d.statut || 'Nouvelle') as Demande['statut'],
              dateIntervention: d.dateIntervention ? (typeof d.dateIntervention === 'string' ? d.dateIntervention : new Date(d.dateIntervention).toISOString()) : null,
            }))

            const sorted = normalized.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime())
            setDemandes(sorted)
            setFilteredDemandes(sorted)
            return
          }
          throw new Error('API non disponible')
        } catch (e) {
          // Fallback: localStorage
          const allDemandes: Demande[] = storageManager.getAllDemandes()
          const sorted = allDemandes.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime())
          setDemandes(sorted)
          setFilteredDemandes(sorted)
        }
      }

      // Chargement initial
      loadDemandesFromApi()

      // Écouter changements localStorage (fallback)
      const unsubscribe = storageManager.addListener(loadDemandesFromApi)
      return unsubscribe
    }
  }, [isAuthenticated])

  useEffect(() => {
    let filtered = demandes

    if (searchTerm) {
      filtered = filtered.filter(
        (demande) =>
          demande.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          demande.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          demande.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
          demande.telephone.includes(searchTerm),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((demande) => demande.statut === statusFilter)
    }

    setFilteredDemandes(filtered)
  }, [demandes, searchTerm, statusFilter])

  const updateStatus = (id: string, newStatus: Demande["statut"]) => {
    const storageManager = StorageManager.getInstance()
    storageManager.updateDemande(id, { statut: newStatus })
  }

  const deleteDemande = (id: string) => {
    if (typeof window !== "undefined" && window.confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      const storageManager = StorageManager.getInstance()
      storageManager.deleteDemande(id)
    }
  }

  const createTestDemande = () => {
    const testDemande: Demande = {
      id: `TEST-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      nom: "Test",
      prenom: "Utilisateur",
      telephone: "0123456789",
      email: "test@example.com",
      adresse: "123 Rue Test",
      ville: "Paris",
      codePostal: "75001",
      typeVehicule: "voiture",
      marque: "Test",
      modele: "Model",
      annee: "2020",
      etatVehicule: "accidente",
      description: "Demande de test",
      dateCreation: new Date().toISOString(),
      statut: "Nouvelle",
      dateIntervention: null,
    }

    const storageManager = StorageManager.getInstance()
    storageManager.saveDemande(testDemande)
  }

  const logout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminLoginTime")
    router.push("/admin/login")
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("darkMode", newMode.toString())
    document.documentElement.classList.toggle("dark", newMode)
  }

  const updateProfile = () => {
    if (adminName.trim()) {
      localStorage.setItem("adminName", adminName.trim())
    }
    if (newPassword.trim()) {
      // Dans un vrai système, on hasherait le mot de passe
      localStorage.setItem("adminPassword", newPassword)
      setNewPassword("")
    }
    setShowProfileDialog(false)
  }

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "Nouvelle":
        return "bg-blue-100 text-blue-800"
      case "En cours":
        return "bg-yellow-100 text-yellow-800"
      case "Planifiée":
        return "bg-purple-100 text-purple-800"
      case "Terminée":
        return "bg-green-100 text-green-800"
      case "Annulée":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (statut: string) => {
    switch (statut) {
      case "Nouvelle":
        return <AlertCircle className="w-4 h-4" />
      case "En cours":
        return <Clock className="w-4 h-4" />
      case "Planifiée":
        return <Calendar className="w-4 h-4" />
      case "Terminée":
        return <CheckCircle className="w-4 h-4" />
      case "Annulée":
        return <Trash2 className="w-4 h-4" />
      default:
        return null
    }
  }

  const generatePDF = async () => {
    const { jsPDF } = await import("jspdf")
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' })

    const pageWidth = doc.internal.pageSize.width
    let yPosition = 30

    // Ligne de séparation
    doc.setDrawColor(255, 193, 7)
    doc.setLineWidth(2)
    doc.line(20, yPosition + 28, pageWidth - 20, yPosition + 28)

    yPosition += 40

    // Titre du rapport
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("RAPPORT DES DEMANDES D'ENLÈVEMENT", pageWidth / 2, yPosition, { align: 'center' })

    yPosition += 20

    // Date du rapport
    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, pageWidth / 2, yPosition, { align: 'center' })

    yPosition += 20

    // Statistiques
    const stats = {
      total: filteredDemandes.length,
      nouvelles: filteredDemandes.filter(d => d.statut === 'Nouvelle').length,
      enCours: filteredDemandes.filter(d => d.statut === 'En cours').length,
      terminees: filteredDemandes.filter(d => d.statut === 'Terminée').length
    }

    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("STATISTIQUES", 20, yPosition)
    yPosition += 10

    doc.setFont("helvetica", "normal")
    doc.text(`Total des demandes: ${stats.total}`, 20, yPosition)
    yPosition += 6
    doc.text(`Nouvelles: ${stats.nouvelles}`, 20, yPosition)
    yPosition += 6
    doc.text(`En cours: ${stats.enCours}`, 20, yPosition)
    yPosition += 6
    doc.text(`Terminées: ${stats.terminees}`, 20, yPosition)
    yPosition += 20

    // Liste des demandes
    doc.setFont("helvetica", "bold")
    doc.text("DÉTAIL DES DEMANDES", 20, yPosition)
    yPosition += 15

    filteredDemandes.forEach((demande, index) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFont("helvetica", "bold")
      doc.text(`${index + 1}. ${demande.prenom} ${demande.nom}`, 20, yPosition)
      yPosition += 6

      doc.setFont("helvetica", "normal")
      doc.text(`Téléphone: ${demande.telephone}`, 25, yPosition)
      yPosition += 5
      doc.text(`Adresse: ${demande.adresse}, ${demande.ville} ${demande.codePostal}`, 25, yPosition)
      yPosition += 5
      doc.text(`Véhicule: ${demande.typeVehicule} - ${demande.marque} ${demande.modele}`, 25, yPosition)
      yPosition += 5
      doc.text(`État: ${demande.etatVehicule} | Statut: ${demande.statut}`, 25, yPosition)
      yPosition += 5
      doc.text(`Date: ${new Date(demande.dateCreation).toLocaleDateString('fr-FR')}`, 25, yPosition)
      yPosition += 10
    })

    doc.save(`rapport-demandes-${new Date().toISOString().split('T')[0]}.pdf`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-yellow-500" />
          <p className="text-gray-600">Chargement du tableau de bord...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`shadow-sm border-b transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/gh-logo-new.png"
                  alt="GH Épaviste"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
              <div>
                <h1 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Dashboard Admin
                </h1>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Gestion des demandes d'enlèvement
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Bouton Mode Sombre */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className={`${
                  isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* Menu Profil */}
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className={`flex items-center space-x-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>{adminName}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>

                {showProfileMenu && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 ${
                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}>
                    <div className="py-1">
                      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
                        <DialogTrigger asChild>
                          <button className={`flex items-center w-full px-4 py-2 text-sm transition-colors ${
                            isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100'
                          }`}>
                            <Settings className="w-4 h-4 mr-2" />
                            Paramètres
                          </button>
                        </DialogTrigger>
                        <DialogContent className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}>
                          <DialogHeader>
                            <DialogTitle className={isDarkMode ? 'text-white' : ''}>
                              Paramètres du profil
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className={`block text-sm font-medium mb-2 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                Nom d'affichage
                              </label>
                              <Input
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                                className={isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}
                              />
                            </div>
                            <div>
                              <label className={`block text-sm font-medium mb-2 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                Nouveau mot de passe
                              </label>
                              <Input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Laisser vide pour ne pas changer"
                                className={isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}
                              />
                            </div>
                            <Button onClick={updateProfile} className="w-full">
                              Sauvegarder
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <button
                        onClick={logout}
                        className={`flex items-center w-full px-4 py-2 text-sm transition-colors ${
                          isDarkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-gray-100'
                        }`}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Déconnexion
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-colors duration-300`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {demandes.length}
                  </p>
                </div>
                <FileText className={`w-8 h-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              </div>
            </CardContent>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-colors duration-300`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Nouvelles
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {demandes.filter(d => d.statut === 'Nouvelle').length}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-colors duration-300`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    En cours
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {demandes.filter(d => d.statut === 'En cours').length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-colors duration-300`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Terminées
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {demandes.filter(d => d.statut === 'Terminée').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Barre d'outils */}
        <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} mb-6 transition-colors duration-300`}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-400'
                  }`} />
                  <Input
                    placeholder="Rechercher par nom, ville, téléphone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`pl-10 w-full sm:w-80 ${
                      isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : ''
                    }`}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className={`w-full sm:w-48 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''
                  }`}>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filtrer par statut" />
                  </SelectTrigger>
                  <SelectContent className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}>
                    <SelectItem value="all" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                      Tous les statuts
                    </SelectItem>
                    <SelectItem value="Nouvelle" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                      Nouvelle
                    </SelectItem>
                    <SelectItem value="En cours" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                      En cours
                    </SelectItem>
                    <SelectItem value="Planifiée" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                      Planifiée
                    </SelectItem>
                    <SelectItem value="Terminée" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                      Terminée
                    </SelectItem>
                    <SelectItem value="Annulée" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                      Annulée
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button onClick={generatePDF} variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Exporter PDF
                </Button>
                <Button onClick={createTestDemande} variant="outline" size="sm">
                  Créer Test
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Actualiser
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des demandes */}
        <div className="space-y-4">
          {filteredDemandes.length === 0 ? (
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} transition-colors duration-300`}>
              <CardContent className="p-12 text-center">
                <FileText className={`w-16 h-16 mx-auto mb-4 ${
                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                }`} />
                <h3 className={`text-lg font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Aucune demande trouvée
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {searchTerm || statusFilter !== 'all'
                    ? 'Aucune demande ne correspond à vos critères de recherche.'
                    : 'Aucune demande d\'enlèvement pour le moment.'}
                </p>
                {(searchTerm || statusFilter !== 'all') && (
                  <Button
                    onClick={() => {
                      setSearchTerm('')
                      setStatusFilter('all')
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Réinitialiser les filtres
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            filteredDemandes.map((demande) => (
              <Card
                key={demande.id}
                className={`${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white hover:shadow-lg'} transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                    {/* Informations principales */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`text-lg font-semibold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {demande.prenom} {demande.nom}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={`${getStatusColor(demande.statut)} flex items-center space-x-1`}>
                              {getStatusIcon(demande.statut)}
                              <span>{demande.statut}</span>
                            </Badge>
                            <Badge variant="outline" className={isDarkMode ? 'border-gray-600 text-gray-300' : ''}>
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(demande.dateCreation).toLocaleDateString('fr-FR')}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-yellow-500" />
                            <a
                              href={`tel:${demande.telephone}`}
                              className={`hover:underline ${
                                isDarkMode ? 'text-blue-400' : 'text-blue-600'
                              }`}
                            >
                              {demande.telephone}
                            </a>
                          </div>
                          {demande.email && (
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-yellow-500" />
                              <a
                                href={`mailto:${demande.email}`}
                                className={`hover:underline ${
                                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}
                              >
                                {demande.email}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-yellow-500" />
                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              {demande.adresse}, {demande.ville} {demande.codePostal}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Car className="w-4 h-4 text-yellow-500" />
                            <span className={`capitalize ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {demande.typeVehicule}
                              {demande.marque && (
                                <span className="ml-1">
                                  - {demande.marque} {demande.modele} {demande.annee}
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className={isDarkMode ? 'bg-gray-700 text-gray-300' : ''}>
                              {demande.etatVehicule}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {demande.description && (
                        <div className={`p-3 rounded-lg ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                        }`}>
                          <h4 className={`font-medium mb-1 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            Description :
                          </h4>
                          <p className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {demande.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2 lg:ml-6">
                      <Select
                        value={demande.statut}
                        onValueChange={(value) => updateStatus(demande.id, value as Demande['statut'])}
                      >
                        <SelectTrigger className={`w-full lg:w-40 ${
                          isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''
                        }`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}>
                          <SelectItem value="Nouvelle" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                            Nouvelle
                          </SelectItem>
                          <SelectItem value="En cours" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                            En cours
                          </SelectItem>
                          <SelectItem value="Planifiée" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                            Planifiée
                          </SelectItem>
                          <SelectItem value="Terminée" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                            Terminée
                          </SelectItem>
                          <SelectItem value="Annulée" className={isDarkMode ? 'text-white hover:bg-gray-600' : ''}>
                            Annulée
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        onClick={() => deleteDemande(demande.id)}
                        variant="outline"
                        size="sm"
                        className={`text-red-600 hover:text-red-700 hover:bg-red-50 ${
                          isDarkMode ? 'border-red-600 hover:bg-red-900/20' : ''
                        }`}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  )
}