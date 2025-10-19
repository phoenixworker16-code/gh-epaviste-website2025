"use client"
import { Button } from "@/components/ui/button"

export default function DemandesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Espace Administrateur</h1>
      <p className="mb-4">Cette section est temporairement en maintenance.</p>
      <div className="space-y-4">
        <Button>
          Retour à l'accueil
        </Button>
        <Button variant="outline">
          Se déconnecter
        </Button>
      </div>
    </div>
  )
}