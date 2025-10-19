// lib/prisma.ts

import { PrismaClient } from '@prisma/client'

// Nécessaire pour éviter de créer de nouvelles instances à chaque Hot Reload en Dev
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient({
  // Optionnel: pour le débogage en développement, si vous voulez voir les requêtes SQL
  // log: ['query'], 
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma