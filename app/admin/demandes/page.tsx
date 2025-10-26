"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminDemandesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/admin/dashboard")
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-600">Redirection vers le dashboard...</p>
    </div>
  )
}