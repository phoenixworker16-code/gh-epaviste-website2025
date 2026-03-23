"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Chargement différé de Google Analytics après hydratation
// pour ne pas bloquer le thread principal au démarrage
const GoogleAnalyticsInner = dynamic(
  () => import("@next/third-parties/google").then((m) => ({ default: m.GoogleAnalytics })),
  { ssr: false }
)

export default function AnalyticsLoader({ gaId }: { gaId: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let handle: number | ReturnType<typeof setTimeout>

    // Utiliser requestIdleCallback si disponible (browsers modernes), sinon setTimeout
    if ("requestIdleCallback" in window) {
      handle = window.requestIdleCallback(() => setMounted(true), { timeout: 3000 })
    } else {
      handle = setTimeout(() => setMounted(true), 2000)
    }

    return () => {
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(handle as number)
      } else {
        clearTimeout(handle as ReturnType<typeof setTimeout>)
      }
    }
  }, [])

  if (!mounted) return null
  return <GoogleAnalyticsInner gaId={gaId} />
}
