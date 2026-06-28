import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  // On crée la Content-Security-Policy avec le nonce généré
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' data: https://fonts.gstatic.com;
    img-src 'self' data: https: blob:;
    media-src 'none';
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://*.g.doubleclick.net https://wa.me;
    worker-src 'none';
    frame-ancestors 'self';
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `

  // Nettoyage des espaces et retours à la ligne
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(request.headers)
  
  // Ajouter le nonce pour pouvoir le récupérer dans les composants Server (comme RootLayout)
  requestHeaders.set('x-nonce', nonce)
  
  // Ajouter l'en-tête CSP dans la requête pour que Next.js le lise et l'applique à ses propres scripts
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Ajouter l'en-tête CSP dans la réponse envoyée au client
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Appliquer le middleware à toutes les requêtes sauf:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (images dans public)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|images/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
