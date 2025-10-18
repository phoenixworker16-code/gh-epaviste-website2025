"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, hasLoaded])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <div className="animate-fadeInUp">{children}</div>
      ) : (
        <div className="min-h-[200px] bg-gray-50 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Chargement du contenu...</div>
        </div>
      )}
    </div>
  )
}
