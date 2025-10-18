"use client"

import { useEffect, useState, useCallback } from "react" // Ajout de useCallback
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, Clock, Eye, MousePointer2 } from "lucide-react" // Ajout de MousePointer2 pour FID

// Interface pour les métriques de performance
interface PerformanceMetrics {
  fcp: number // First Contentful Paint (ms)
  lcp: number // Largest Contentful Paint (ms)
  fid: number // First Input Delay (ms)
  cls: number // Cumulative Layout Shift (score, non ms)
  ttfb: number // Time to First Byte (ms)
}

export default function PerformanceMonitor() {
  // `metrics` stocke les valeurs des Core Web Vitals
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  // `isVisible` contrôle l'affichage du widget de performance
  const [isVisible, setIsVisible] = useState(false)

  // Fonction pour obtenir la couleur du badge en fonction du score
  // Les seuils sont basés sur les directives Core Web Vitals de Google
  const getScoreColor = useCallback((value: number, thresholds: [number, number], isCls = false) => {
    // Pour CLS, les seuils sont différents et la valeur est un score, pas des ms
    if (isCls) {
      if (value <= thresholds[0]) return "bg-green-100 text-green-800" // Bon (<= 0.1)
      if (value <= thresholds[1]) return "bg-yellow-100 text-yellow-800" // A améliorer (<= 0.25)
      return "bg-red-100 text-red-800" // Mauvais (> 0.25)
    }
    // Pour les autres métriques (en ms)
    if (value <= thresholds[0]) return "bg-green-100 text-green-800" // Bon
    if (value <= thresholds[1]) return "bg-yellow-100 text-yellow-800" // A améliorer
    return "bg-red-100 text-red-800" // Mauvais
  }, []) // Aucune dépendance, donc mémorisé une fois

  // Fonction pour obtenir le libellé du badge en fonction du score
  const getScoreLabel = useCallback((value: number, thresholds: [number, number], isCls = false) => {
    if (isCls) {
      if (value <= thresholds[0]) return "Excellent"
      if (value <= thresholds[1]) return "Bon" // Pour CLS, "Bon" est le seuil intermédiaire
      return "À améliorer"
    }
    if (value <= thresholds[0]) return "Excellent"
    if (value <= thresholds[1]) return "Bon"
    return "À améliorer"
  }, []) // Aucune dépendance, donc mémorisé une fois

  // Effet pour mesurer les performances au chargement du composant
  useEffect(() => {
    // Vérifier si l'API Performance est disponible et si le code s'exécute côté client (dans le navigateur)
    if (typeof window === "undefined" || !("performance" in window)) {
      console.warn("Performance API non disponible ou exécution côté serveur.")
      return
    }

    const initialMetrics: Partial<PerformanceMetrics> = {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
    }

    // Mesure de base FCP et TTFB à partir de PerformanceNavigationTiming
    const navigationTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
    const paintEntries = performance.getEntriesByType("paint")

    const fcpEntry = paintEntries.find((entry) => entry.name === "first-contentful-paint")
    if (fcpEntry) {
      initialMetrics.fcp = fcpEntry.startTime
    }

    if (navigationTiming) {
      initialMetrics.ttfb = navigationTiming.responseStart - navigationTiming.requestStart
    }

    // Initialiser les métriques avec les valeurs de base
    setMetrics((prev) => ({ ...(prev || initialMetrics as PerformanceMetrics), ...initialMetrics as PerformanceMetrics }))

    // Observer pour les Core Web Vitals dynamiques (LCP, FID, CLS)
    if ("PerformanceObserver" in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        // Prendre la dernière entrée qui représente la LCP finale
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
        if (lastEntry) {
          setMetrics((prev) => ({
            ...(prev || initialMetrics as PerformanceMetrics), // Assurez-vous d'avoir un état initial
            lcp: lastEntry.startTime,
          }))
        }
      })
      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        console.warn("LCP observer non supporté ou erreur:", e)
      }

      // CLS (Cumulative Layout Shift)
      // CLS est cumulatif et peut se produire après le chargement initial
      let clsValue = 0 // Variable pour accumuler le CLS
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // N'ajouter que les décalages qui ne sont pas causés par une interaction utilisateur
          const layoutShiftEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean }
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value
          }
        }
        setMetrics((prev) => (prev ? { ...prev, cls: clsValue } : initialMetrics as PerformanceMetrics))
      })
      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        console.warn("CLS observer non supporté ou erreur:", e)
      }

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming
          // FID est la différence entre processingStart et startTime
          setMetrics((prev) => (prev ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime } : initialMetrics as PerformanceMetrics))
          // Une fois FID mesuré, on peut déconnecter l'observer car il n'y a qu'un seul FID par page load
          fidObserver.disconnect()
        }
      })
      try {
        fidObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        console.warn("FID observer non supporté ou erreur:", e)
      }

      // Nettoyage des observers lors du démontage du composant
      return () => {
        lcpObserver.disconnect()
        clsObserver.disconnect()
        // Pas besoin de déconnecter fidObserver ici, il se déconnecte lui-même
      }
    } else {
      console.warn("PerformanceObserver API non disponible. Certaines métriques ne seront pas mesurées.")
    }
  }, []) // L'effet s'exécute une seule fois au montage du composant

  // Si le moniteur n'est pas visible, afficher juste le bouton
  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
          aria-label="Afficher le moniteur de performance"
        >
          <Activity className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80" role="dialog" aria-modal="true" aria-labelledby="performance-monitor-title">
      <Card className="shadow-xl border-2 border-yellow-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle id="performance-monitor-title" className="text-lg flex items-center">
              <Activity className="w-5 h-5 mr-2 text-yellow-500" aria-hidden="true" />
              Performance
            </CardTitle>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Fermer le moniteur de performance"
            >
              ×
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {metrics && (metrics.fcp > 0 || metrics.lcp > 0 || metrics.ttfb > 0 || metrics.cls > 0 || metrics.fid > 0) ? (
            <>
              {/* First Contentful Paint (FCP) */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 text-blue-500" aria-hidden="true" />
                  <span className="text-sm">FCP (First Contentful Paint)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">{Math.round(metrics.fcp)}ms</span>
                  <Badge className={getScoreColor(metrics.fcp, [1800, 3000])}>
                    {getScoreLabel(metrics.fcp, [1800, 3000])}
                  </Badge>
                </div>
              </div>

              {/* Largest Contentful Paint (LCP) */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-green-500" aria-hidden="true" />
                  <span className="text-sm">LCP (Largest Contentful Paint)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">{Math.round(metrics.lcp)}ms</span>
                  <Badge className={getScoreColor(metrics.lcp, [2500, 4000])}>
                    {getScoreLabel(metrics.lcp, [2500, 4000])}
                  </Badge>
                </div>
              </div>

              {/* First Input Delay (FID) */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MousePointer2 className="w-4 h-4 mr-2 text-orange-500" aria-hidden="true" /> {/* Nouvelle icône pour FID */}
                  <span className="text-sm">FID (First Input Delay)</span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* FID est en millisecondes, pas besoin de toFixed pour le moment */}
                  <span className="text-sm font-mono">{Math.round(metrics.fid)}ms</span>
                  <Badge className={getScoreColor(metrics.fid, [100, 300])}>
                    {getScoreLabel(metrics.fid, [100, 300])}
                  </Badge>
                </div>
              </div>

              {/* Cumulative Layout Shift (CLS) */}
              {/* Afficher CLS même s'il est 0 initialement, car il peut changer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Activity className="w-4 h-4 mr-2 text-red-500" aria-hidden="true" /> {/* Changer l'icône si nécessaire */}
                  <span className="text-sm">CLS (Cumulative Layout Shift)</span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* CLS est un score, non des ms */}
                  <span className="text-sm font-mono">{metrics.cls.toFixed(3)}</span>
                  <Badge className={getScoreColor(metrics.cls, [0.1, 0.25], true)}> {/* isCls = true */}
                    {getScoreLabel(metrics.cls, [0.1, 0.25], true)}
                  </Badge>
                </div>
              </div>

              {/* Time to First Byte (TTFB) */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-purple-500" aria-hidden="true" />
                  <span className="text-sm">TTFB (Time to First Byte)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">{Math.round(metrics.ttfb)}ms</span>
                  <Badge className={getScoreColor(metrics.ttfb, [800, 1800])}>
                    {getScoreLabel(metrics.ttfb, [800, 1800])}
                  </Badge>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="text-xs text-gray-500 text-center">Mesures en temps réel • Core Web Vitals</div>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="animate-spin w-6 h-6 border-2 border-yellow-500 border-t-transparent rounded-full mx-auto mb-2" role="status" aria-label="Analyse de performance en cours"></div>
              <div className="text-sm text-gray-600">Analyse en cours...</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}