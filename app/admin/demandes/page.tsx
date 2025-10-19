"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LogOut, Phone, Mail, MapPin, Calendar, Car } from "lucide-react"

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
}

export default function DemandesPage() {
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Vérifier l'authentification
    const isAuth = localStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin/login")
      return
    }

    // Charger les demandes
    fetchDemandes()
  }, [router])

  const fetchDemandes = async () => {
    try {
      const response = await fetch("/api/demandes")
      if (response.ok) {
        const data = await response.json()
        setDemandes(data)
      }
    } catch (error) {
      console.error("Erreur lors du chargement des demandes:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminLoginTime")
    router.push("/admin/login")
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Chargement des demandes...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Administration - Demandes d&apos;enlèvement</h1>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black mb-2">
            {demandes.length} demande{demandes.length > 1 ? 's' : ''} reçue{demandes.length > 1 ? 's' : ''}
          </h2>
          <Button onClick={fetchDemandes} variant="outline">
            Actualiser
          </Button>
        </div>

        <div className="grid gap-6">
          {demandes.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Aucune demande d&apos;enlèvement pour le moment.</p>
              </CardContent>
            </Card>
          ) : (
            demandes.map((demande) => (
              <Card key={demande.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {demande.prenom} {demande.nom}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(demande.dateCreation)}
                      </Badge>
                      <Badge variant={demande.etatVehicule === 'roulant' ? 'default' : 'secondary'}>
                        {demande.etatVehicule}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-yellow-500" />
                        <a href={`tel:${demande.telephone}`} className="text-blue-600 hover:underline">
                          {demande.telephone}
                        </a>
                      </div>
                      {demande.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-yellow-500" />
                          <a href={`mailto:${demande.email}`} className="text-blue-600 hover:underline">
                            {demande.email}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-yellow-500" />
                        <span>{demande.adresse}, {demande.ville} {demande.codePostal}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-yellow-500" />
                        <span className="capitalize">{demande.typeVehicule}</span>
                        {demande.marque && (
                          <span>- {demande.marque} {demande.modele} {demande.annee}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {demande.description && (
                    <div className="mt-4 p-3 bg-gray-50 rounded">
                      <h4 className="font-medium text-black mb-1">Description :</h4>
                      <p className="text-gray-700">{demande.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  )
}