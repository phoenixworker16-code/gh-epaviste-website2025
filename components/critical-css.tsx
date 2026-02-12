"use client"

import { useEffect } from "react"

export default function CriticalCSS() {
  useEffect(() => {
    // Charger le CSS non-critique de manière asynchrone
    const loadNonCriticalCSS = () => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "/css/non-critical.css"
      link.media = "print"
      link.onload = () => {
        link.media = "all"
      }
      document.head.appendChild(link)
    }

    // Charger après le premier paint
    if (document.readyState === "complete") {
      loadNonCriticalCSS()
    } else {
      window.addEventListener("load", loadNonCriticalCSS)
    }

    return () => {
      window.removeEventListener("load", loadNonCriticalCSS)
    }
  }, [])

  return null
}
