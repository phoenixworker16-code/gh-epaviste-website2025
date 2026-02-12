// Utilitaires pour l'optimisation des performances

/**
 * Preloads a single image by creating an Image object and waiting for its load event.
 * @param src The URL of the image to preload.
 * @returns A Promise that resolves when the image is loaded, or rejects if an error occurs.
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve()
    }
    img.onerror = (event: Event | string) => {
      console.error(`Failed to preload image: ${src}`, event)
      reject(event)
    }
    img.src = src
  })
}

/**
 * Preloads multiple images concurrently.
 * @param sources An array of image URLs to preload.
 * @returns A Promise that resolves when all images are loaded, or rejects if any image fails to load.
 */
export const preloadImages = async (sources: string[]): Promise<void> => {
  await Promise.all(sources.map(preloadImage))
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds
 * have passed since the last time the debounced function was invoked.
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns A new debounced function.
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func(...args)
      timeout = null
    }, wait)
  }
}

/**
 * Creates a throttled function that, when invoked, executes `func` at most once per `limit` milliseconds.
 * @param func The function to throttle.
 * @param limit The number of milliseconds to throttle invocations to.
 * @returns A new throttled function.
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false
  let lastArgs: Parameters<T> | null = null

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    lastArgs = args

    if (!inThrottle) {
      func.apply(this, lastArgs)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
        if (lastArgs) {
          func.apply(this, lastArgs)
          lastArgs = null
        }
      }, limit)
    }
  }
}

/**
 * Measures the execution time of a given function.
 * @param name A descriptive name for the operation being measured.
 * @param fn The function to measure.
 */
export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now()
  fn()
  const end = performance.now()
  console.log(`${name} took ${(end - start).toFixed(2)} milliseconds`)
}

/**
 * Implements lazy loading for elements matching a given CSS selector using Intersection Observer.
 * The callback is executed only once when an element enters the viewport.
 * @param selector The CSS selector for elements to observe.
 * @param callback The function to execute when an observed element intersects the viewport.
 */
export const lazyLoad = (selector: string, callback: () => void): void => {
  if (typeof IntersectionObserver === "undefined") {
    console.warn("IntersectionObserver not supported. Lazy loading will not work.")
    document.querySelectorAll(selector).forEach(() => callback())
    return
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
        obs.unobserve(entry.target)
      }
    })
  })

  const elements = document.querySelectorAll(selector)
  if (elements.length === 0) {
    console.warn(`No elements found for selector: ${selector}`)
    return
  }
  elements.forEach((el) => observer.observe(el))
}

// Web Vitals tracking
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export interface WebVitalMetric {
  id: string
  name: string
  value: number
  label?: string
}

/**
 * Tracks Web Vitals metrics by sending them to an analytics service (e.g., Google Analytics).
 * Assumes `gtag` is available globally.
 * @param metric The Web Vitals metric object.
 */
export const trackWebVitals = (metric: WebVitalMetric): void => {
  console.log("Web Vital:", metric)

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}

/**
 * Adds a resource hint (<link> tag) to the document's head for performance optimization.
 * @param href The URL of the resource.
 * @param rel The relationship of the link (e.g., "preload", "prefetch", "preconnect").
 * @param as The type of content being linked (e.g., "image", "script", "style"). Required for "preload".
 */
export const addResourceHint = (href: string, rel: "preload" | "prefetch" | "preconnect", as?: string): void => {
  const link = document.createElement("link")
  link.rel = rel
  link.href = href
  if (as) {
    link.setAttribute("as", as)
  } else if (rel === "preload") {
    console.warn(`'as' attribute is highly recommended for 'preload' link rel: ${href}`)
  }
  document.head.appendChild(link)
}

/**
 * Registers a Service Worker for offline capabilities and performance improvements.
 * Logs success or failure of registration.
 * @returns A Promise that resolves when the Service Worker is registered or rejects on error.
 */
export const registerServiceWorker = async (): Promise<void> => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js")
      console.log("Service Worker registered successfully: ", registration)
    } catch (registrationError: unknown) {
      console.error("Service Worker registration failed: ", registrationError)
    }
  } else {
    console.warn("Service Workers are not supported in this browser.")
  }
}