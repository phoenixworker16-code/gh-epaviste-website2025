'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">Erreur</h1>
        <h2 className="text-2xl font-bold text-black mb-4">Une erreur est survenue</h2>
        <p className="text-gray-600 mb-8">Nous sommes désolés pour ce désagrément.</p>
        <Link href="/">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            Retour à l accueil
          </Button>
        </Link>
      </div>
    </div>
  )
}
