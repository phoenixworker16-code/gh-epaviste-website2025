// lib/prisma.ts

import { PrismaClient } from './generated/prisma'

// Nécessaire pour éviter de créer de nouvelles instances à chaque Hot Reload en Dev
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Évite l'initialisation pendant le build
let prisma: PrismaClient

if (process.env.NEXT_PHASE === 'phase-production-build') {
  // Pendant le build, créer un mock
  prisma = {} as PrismaClient
} else {
  prisma = global.prisma || new PrismaClient({
    // Optionnel: pour le débogage en développement, si vous voulez voir les requêtes SQL
    // log: ['query'], 
  })
  
  if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma
  }
}

export default prisma