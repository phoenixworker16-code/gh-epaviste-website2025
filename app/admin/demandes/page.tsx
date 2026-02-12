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

      const loadDemandes = () => {
        const allDemandes: Demande[] = storageManager.getAllDemandes()
        // Trier par date (plus récent en premier)
        const sorted = allDemandes.sort(
          (a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime(),
        )

        setDemandes(sorted)
        setFilteredDemandes(sorted)
      }

      // Chargement initial
      loadDemandes()

      // Écouter les changements
      const unsubscribe = storageManager.addListener(loadDemandes)

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
    doc.text("RAPPORT DES DEMANDES D'ENLÈVEMENT", pageWidth / 2, yPosition, { align: "center" })

    yPosition += 15

    // Statistiques
    const stats = {
      total: demandes.length,
      nouvelles: demandes.filter(d => d.statut === "Nouvelle").length,
      enCours: demandes.filter(d => d.statut === "En cours").length,
      planifiees: demandes.filter(d => d.statut === "Planifiée").length,
      terminees: demandes.filter(d => d.statut === "Terminée").length,
      annulees: demandes.filter(d => d.statut === "Annulée").length,
    }

    doc.setFontSize(12)
    doc.text(`Nombre total de demandes: ${stats.total}`, 20, yPosition)
    yPosition += 10

    doc.setFont("helvetica", "bold")
    doc.text("STATISTIQUES:", 20, yPosition)
    yPosition += 8

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(`• Nouvelles demandes: ${stats.nouvelles}`, 25, yPosition)
    yPosition += 6
    doc.text(`• En cours: ${stats.enCours}`, 25, yPosition)
    yPosition += 6
    doc.text(`• Planifiées: ${stats.planifiees}`, 25, yPosition)
    yPosition += 6
    doc.text(`• Terminées: ${stats.terminees}`, 25, yPosition)
    yPosition += 6
    doc.text(`• Annulées: ${stats.annulees}`, 25, yPosition)
    yPosition += 15

    // Détail des demandes
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("DÉTAIL DES DEMANDES:", 20, yPosition)
    yPosition += 10

    filteredDemandes.forEach((demande, index) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFontSize(10)
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
      doc.text(`Statut: ${demande.statut}`, 25, yPosition)
      yPosition += 5
      doc.text(`Date: ${new Date(demande.dateCreation).toLocaleDateString("fr-FR")}`, 25, yPosition)
      yPosition += 10
    })

    // Signature numérique avec certificat
    const certificateData: CertificateData = {
      id: `GH-${Date.now()}`,
      timestamp: new Date().toISOString(),
      hash: `SHA256-${Date.now().toString(16)}`,
      signataire: adminName,
      validite: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    }

    const pdfSigner = new PDFSigner(defaultSignatureConfig)
    await pdfSigner.addVisualSignature(doc, certificateData)

    doc.save(`rapport-demandes-${new Date().toISOString().split('T')[0]}.pdf`)
  }

  // Calculer les statistiques
  const stats = {
    total: demandes.length,
    nouvelles: demandes.filter(d => d.statut === "Nouvelle").length,
    enCours: demandes.filter(d => d.statut === "En cours").length,
    planifiees: demandes.filter(d => d.statut === "Planifiée").length,
    terminees: demandes.filter(d => d.statut === "Terminée").length,
    annulees: demandes.filter(d => d.statut === "Annulée").length,
  }

  if (isLoading) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-yellow-500 mx-auto mb-4" />
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Vérification des accès...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Modern Dashboard Header */}
      <header className={`${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm sticky top-0 z-40`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Dashboard Title */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">GH</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tableau de Bord</h1>
              </div>
            </div>
          
            {/* User Profile & Actions */}
            <div className="flex items-center space-x-3">
              {/* Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className={`flex items-center space-x-2 p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{adminName.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="text-left hidden md:block">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{adminName}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Administrateur</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </button>
                
                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} z-50`}>
                    <div className="p-2">
                      <button 
                        onClick={() => {setShowProfileDialog(true); setShowProfileMenu(false)}}
                        className={`w-full text-left px-3 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-md flex items-center space-x-2`}
                      >
                        <User className="w-4 h-4" />
                        <span>Profil</span>
                      </button>
                      <button 
                        onClick={() => {setShowProfileDialog(true); setShowProfileMenu(false)}}
                        className={`w-full text-left px-3 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-md flex items-center space-x-2`}
                      >
                        <Settings className="w-4 h-4" />
                        <span>Paramètres</span>
                      </button>
                      <button 
                        onClick={() => {toggleDarkMode(); setShowProfileMenu(false)}}
                        className={`w-full text-left px-3 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-md flex items-center space-x-2`}
                      >
                        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        <span>{isDarkMode ? 'Mode clair' : 'Mode sombre'}</span>
                      </button>
                      <hr className={`my-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                      <button 
                        onClick={() => {logout(); setShowProfileMenu(false)}}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            
              {/* Quick Actions */}
              <Button onClick={createTestDemande} variant="outline" size="sm" className="bg-green-50 border-green-300 hover:bg-green-100 text-green-700">
                <RefreshCw className="w-4 h-4 mr-2" />
                Test
              </Button>
              
              <Link href="/">
                <Button variant="ghost" size="sm" className={`${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
                  Retour au site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="py-8">
        <div className="container mx-auto px-6">
          {/* Dashboard Welcome */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-2">Bienvenue {adminName}</h2>
              <p className="text-yellow-100">
                Gérez efficacement toutes vos demandes d'enlèvement
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  ✨ Synchronisation en temps réel
                </span>
              </p>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{stats.total}</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Demandes</div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.nouvelles}</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Nouvelles</div>
                {stats.nouvelles > 0 && (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mx-auto mt-1"></div>
                )}
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.enCours}</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>En Cours</div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.planifiees}</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Planifiées</div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.terminees}</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Terminées</div>
              </CardContent>
            </Card>
          </div>

          {/* Filtres et Actions */}
          <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                    <Input
                      placeholder="Rechercher par nom, ville, téléphone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`pl-10 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className={`w-48 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}>
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filtrer par statut" />
                    </SelectTrigger>
                    <SelectContent className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}>
                      <SelectItem value="all">Tous les statuts</SelectItem>
                      <SelectItem value="Nouvelle">Nouvelles</SelectItem>
                      <SelectItem value="En cours">En cours</SelectItem>
                      <SelectItem value="Planifiée">Planifiées</SelectItem>
                      <SelectItem value="Terminée">Terminées</SelectItem>
                      <SelectItem value="Annulée">Annulées</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowPreview(true)}
                    variant="outline"
                    className="border-blue-500 text-blue-600 hover:bg-blue-50"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Aperçu PDF
                  </Button>
                  <Button onClick={generatePDF} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <FileText className="w-4 h-4 mr-2" />
                    Exporter PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liste des Demandes */}
          <div className="grid gap-6">
            {filteredDemandes.length === 0 ? (
              <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardContent className="p-12 text-center">
                  <div className={`mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Car className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Aucune demande trouvée</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {searchTerm || statusFilter !== "all"
                      ? "Aucune demande ne correspond à vos critères de recherche."
                      : "Aucune demande d'enlèvement pour le moment."}
                  </p>
                  <Button onClick={createTestDemande} className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                    Créer une demande test
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredDemandes.map((demande) => (
                <Card key={demande.id} className={`hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Informations Client */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                              {demande.prenom} {demande.nom}
                            </h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Demande du {new Date(demande.dateCreation).toLocaleDateString("fr-FR")} à{" "}
                              {new Date(demande.dateCreation).toLocaleTimeString("fr-FR")}
                            </p>
                          </div>
                          <Badge className={getStatusColor(demande.statut)}>
                            {getStatusIcon(demande.statut)}
                            <span className="ml-1">{demande.statut}</span>
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-yellow-500" />
                              <a href={`tel:${demande.telephone}`} className="text-blue-600 hover:underline">
                                {demande.telephone}
                              </a>
                            </div>
                            {demande.email && (
                              <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-yellow-500" />
                                <a href={`mailto:${demande.email}`} className="text-blue-600 hover:underline">
                                  {demande.email}
                                </a>
                              </div>
                            )}
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-yellow-500" />
                              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {demande.adresse}, {demande.ville} {demande.codePostal}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Car className="w-4 h-4 text-yellow-500" />
                              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {demande.typeVehicule} - {demande.marque} {demande.modele}
                              </span>
                            </div>
                            {demande.annee && <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Année: {demande.annee}</div>}
                            <Badge variant="outline" className="text-xs">
                              {demande.etatVehicule}
                            </Badge>
                          </div>
                        </div>

                        {demande.description && (
                          <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{demande.description}</p>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="lg:w-48 space-y-3">
                        <Select
                          value={demande.statut}
                          onValueChange={(value) => updateStatus(demande.id, value as Demande["statut"])}
                        >
                          <SelectTrigger className={`w-full ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}>
                            <SelectItem value="Nouvelle">Nouvelle</SelectItem>
                            <SelectItem value="En cours">En cours</SelectItem>
                            <SelectItem value="Planifiée">Planifiée</SelectItem>
                            <SelectItem value="Terminée">Terminée</SelectItem>
                            <SelectItem value="Annulée">Annulée</SelectItem>
                          </SelectContent>
                        </Select>

                        <div className="space-y-2">
                          <Button
                            size="sm"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                            onClick={() => window.open(`tel:${demande.telephone}`)}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Appeler
                          </Button>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" className="w-full bg-transparent">
                                <Eye className="w-4 h-4 mr-2" />
                                Détails
                              </Button>
                            </DialogTrigger>
                            <DialogContent className={`max-w-2xl ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                              <DialogHeader>
                                <DialogTitle className={isDarkMode ? 'text-white' : ''}>Détails de la demande</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Informations Client</h4>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Nom:</strong> {demande.prenom} {demande.nom}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Téléphone:</strong> {demande.telephone}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Email:</strong> {demande.email || "Non renseigné"}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Adresse:</strong> {demande.adresse}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Ville:</strong> {demande.ville} {demande.codePostal}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Informations Véhicule</h4>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Type:</strong> {demande.typeVehicule}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Marque:</strong> {demande.marque || "Non renseigné"}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Modèle:</strong> {demande.modele || "Non renseigné"}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>Année:</strong> {demande.annee || "Non renseigné"}
                                    </p>
                                    <p className={isDarkMode ? 'text-gray-300' : ''}>
                                      <strong>État:</strong> {demande.etatVehicule}
                                    </p>
                                  </div>
                                </div>
                                {demande.description && (
                                  <div>
                                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Description</h4>
                                    <p className={`p-3 rounded ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50'}`}>{demande.description}</p>
                                  </div>
                                )}
                                <div>
                                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Informations Demande</h4>
                                  <p className={isDarkMode ? 'text-gray-300' : ''}>
                                    <strong>Date de création:</strong>{" "}
                                    {new Date(demande.dateCreation).toLocaleString("fr-FR")}
                                  </p>
                                  <p className={isDarkMode ? 'text-gray-300' : ''}>
                                    <strong>Statut:</strong>{" "}
                                    <Badge className={getStatusColor(demande.statut)}>{demande.statut}</Badge>
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button
                            size="sm"
                            variant="destructive"
                            className="w-full"
                            onClick={() => deleteDemande(demande.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Supprimer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Profile Management Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className={`max-w-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <DialogHeader>
            <DialogTitle className={isDarkMode ? 'text-white' : ''}>Gestion du Profil</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nom d'administrateur
              </label>
              <Input
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                placeholder="Votre nom"
                className={isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nouveau mot de passe (optionnel)
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nouveau mot de passe"
                className={isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mode sombre</span>
              <Button
                onClick={toggleDarkMode}
                variant="outline"
                size="sm"
                className={isDarkMode ? 'border-gray-600 text-gray-300' : ''}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
            <div className="flex gap-2 pt-4">
              <Button onClick={updateProfile} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">
                Sauvegarder
              </Button>
              <Button onClick={() => setShowProfileDialog(false)} variant="outline" className="flex-1">
                Annuler
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Aperçu PDF */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className={`max-w-4xl max-h-[80vh] overflow-y-auto ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <DialogHeader>
            <DialogTitle className={isDarkMode ? 'text-white' : ''}>
              Aperçu du Rapport PDF
            </DialogTitle>
          </DialogHeader>
          <div className={`p-8 border rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'}`}>
            {/* Simulation de l'aperçu PDF */}
            <div className="text-center mb-8">
              {/* Logo GH Épaviste centré en noir */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GH</span>
                </div>
              </div>
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>GH ÉPAVISTE</h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Service d'enlèvement d'épaves agréé VHU</p>
              
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-full inline-block mt-2 mb-4">
                <span className="font-bold text-sm">DOCUMENT CERTIFIÉ</span>
              </div>
              
              <hr className="border-yellow-500 border-2 my-4" />
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : ''}`}>RAPPORT DES DEMANDES D'ENLÈVEMENT</h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Nombre total de demandes: {filteredDemandes.length}
              </p>

              <div className="text-left mt-8">
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>STATISTIQUES:</h3>
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Nouvelles demandes: {stats.nouvelles}</li>
                  <li>En cours: {stats.enCours}</li>
                  <li>Planifiées: {stats.planifiees}</li>
                  <li>Terminées: {stats.terminees}</li>
                  <li>Annulées: {stats.annulees}</li>
                </ul>

                <h3 className={`text-lg font-bold mt-6 mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>DÉTAIL DES DEMANDES:</h3>
                {filteredDemandes.length === 0 ? (
                  <p className={`italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Aucune demande à afficher dans l'aperçu.</p>
                ) : (
                  <div className="space-y-4">
                    {filteredDemandes.slice(0, 3).map((demande) => (
                      <div key={demande.id} className={`border p-4 rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500' : 'bg-gray-50'}`}>
                        <p className={isDarkMode ? 'text-gray-200' : ''}><strong>Nom:</strong> {demande.prenom} {demande.nom}</p>
                        <p className={isDarkMode ? 'text-gray-200' : ''}><strong>Téléphone:</strong> {demande.telephone}</p>
                        <p className={isDarkMode ? 'text-gray-200' : ''}><strong>Ville:</strong> {demande.ville}</p>
                        <p className={isDarkMode ? 'text-gray-200' : ''}><strong>Statut:</strong> <Badge className={getStatusColor(demande.statut)}>{demande.statut}</Badge></p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Date de création: {new Date(demande.dateCreation).toLocaleString("fr-FR")}</p>
                      </div>
                    ))}
                    {filteredDemandes.length > 3 && (
                      <p className={`italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>... et {filteredDemandes.length - 3} autres demandes.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}