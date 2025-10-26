"use client"

import { usePathname } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Ne pas appliquer le layout sur la page de login
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return <>{children}</>
}