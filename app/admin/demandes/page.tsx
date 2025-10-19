"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

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
  statut?: string
}

export default function AdminDemandes() {
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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
        setDemandes(data)
      }
    } catch (error) {
      console.error("Erreur lors du chargement des demandes:", error)
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Chargement des demandes...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Administration - Demandes d&apos;enlèvement</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            Déconnexion
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black mb-2">
            {demandes.length} demande{demandes.length > 1 ? 's' : ''} reçue{demandes.length > 1 ? 's' : ''}
          </h2>
          <button 
            onClick={fetchDemandes}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Actualiser
          </button>
        </div>

        <div className="grid gap-6">
          {demandes.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-500">Aucune demande d&apos;enlèvement pour le moment.</p>
            </div>
          ) : (
            demandes.map((demande) => (
              <div key={demande.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-black">
                    {demande.prenom} {demande.nom}
                  </h3>
                  <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {formatDate(demande.dateCreation)}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                      {demande.etatVehicule}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">📞</span>
                      <a href={`tel:${demande.telephone}`} className="text-blue-600 hover:underline">
                        {demande.telephone}
                      </a>
                    </div>
                    {demande.email && (
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">✉️</span>
                        <a href={`mailto:${demande.email}`} className="text-blue-600 hover:underline">
                          {demande.email}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">📍</span>
                      <span className="text-gray-700">
                        {demande.adresse}, {demande.ville} {demande.codePostal}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">🚗</span>
                      <span className="capitalize text-gray-700">
                        {demande.typeVehicule}
                        {demande.marque && (
                          <span> - {demande.marque} {demande.modele} {demande.annee}</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                
                {demande.description && (
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <h4 className="font-medium text-black mb-1">Description :</h4>
                    <p className="text-gray-700">{demande.description}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}