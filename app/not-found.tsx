import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-black mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
        <Link href="/">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  )
}
