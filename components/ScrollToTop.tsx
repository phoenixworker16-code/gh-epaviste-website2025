"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Throttle via requestAnimationFrame pour éviter les appels trop fréquents
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300)
        rafRef.current = null
      })
    }

    // passive: true = ne bloque pas le thread principal pendant le scroll
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label="Retour en haut de page"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </>
  )
}
