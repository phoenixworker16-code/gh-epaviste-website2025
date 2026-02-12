"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Lock, Eye, EyeOff, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Admin credentials (for demonstration purposes ONLY)
  // In a production environment, these MUST be stored securely as environment variables
  // and validated against a proper backend authentication system (e.g., JWT, OAuth).
  const ADMIN_USERNAME = "admin"
  const ADMIN_PASSWORD = "GH2024Admin!"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("") // Clear any previous errors

    // Simulate an API call for authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuth", "true")
      localStorage.setItem("adminLoginTime", Date.now().toString())
      router.push("/admin/demandes")
    } else {
      setError("Nom d&apos;utilisateur ou mot de passe incorrect.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/gh-logo-new.png"
              alt="GH Épaviste"
              width={300}
              height={180}
              className="h-32 w-auto"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Accès Administration</h1>
          <p className="text-gray-600 text-lg">Connectez-vous pour gérer les demandes</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center text-xl">
              <Lock className="w-6 h-6 mr-2 text-yellow-500" />
              Connexion Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username-input" className="text-black font-medium">
                  Nom d&apos;utilisateur
                </Label>
                <Input
                  id="username-input"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                  className="mt-1 focus:border-yellow-500 focus:ring-yellow-500"
                  required
                  disabled={isLoading}
                  autoComplete="username"
                />
              </div>

              <div>
                <Label htmlFor="password-input" className="text-black font-medium">
                  Mot de passe
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password-input"
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                    className="focus:border-yellow-500 focus:ring-yellow-500 pr-10"
                    required
                    disabled={isLoading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <Alert className="border-red-200 bg-red-50 relative pr-10">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                  <button
                    type="button"
                    onClick={() => setError("")}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 p-1"
                    aria-label="Fermer l&apos;alerte"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3"
                disabled={isLoading}
              >
                {isLoading ? "Connexion..." : "Se connecter"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-bold text-black mb-2">Identifiants par défaut (pour test) :</h3>
              <p className="text-sm text-gray-700">
                <strong>Utilisateur :</strong> <code>admin</code>
                <br />
                <strong>Mot de passe :</strong> <code>GH2024Admin!</code>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                ⚠️ En <strong>production</strong>, ces identifiants doivent être remplacés par un système d&apos;authentification sécurisé basé sur un <strong>backend</strong>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}