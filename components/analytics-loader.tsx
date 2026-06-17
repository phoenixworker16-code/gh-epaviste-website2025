"use client"

import { GoogleAnalytics } from "@next/third-parties/google"

export default function AnalyticsLoader({ gaId }: { gaId: string }) {
  // @next/third-parties/google utilise nativement next/script avec la stratégie optimale 
  // (afterInteractive par défaut) pour garantir que le FCP n'est pas bloqué.
  return <GoogleAnalytics gaId={gaId} />
}
