'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">Erreur</h1>
        <h2 className="text-2xl font-bold text-black mb-4">Une erreur est survenue</h2>
        <p className="text-gray-600 mb-8">Nous sommes désolés pour ce désagrément.</p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => reset()}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            Réessayer
          </Button>
          <Link href="/">
            <Button variant="outline" className="font-bold">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
