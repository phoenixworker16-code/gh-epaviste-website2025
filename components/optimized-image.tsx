"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Générer un placeholder blur simple
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.fillStyle = "#f3f4f6"
      ctx.fillRect(0, 0, w, h)
    }
    return canvas.toDataURL()
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-400 text-sm">Chargement...</div>
        </div>
      )}

      {hasError ? (
        <div className="bg-gray-100 flex items-center justify-center border border-gray-200" style={{ width, height }}>
          <div className="text-gray-500 text-center p-4">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image non disponible</div>
          </div>
        </div>
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL || (typeof window !== "undefined" ? generateBlurDataURL(20, 20) : undefined)}
          className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true)
            setIsLoading(false)
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  )
}
