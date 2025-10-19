// components/ui/badge.tsx

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils" // Assurez-vous que ce chemin est correct

// 1. Définition des variantes (VariantProps permet d'inférer les types)
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// 2. Définition du type de props en utilisant VariantProps
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, // Utilise les props HTML standard d'un <div>
    VariantProps<typeof badgeVariants> {} // Infère les types 'variant' de CVA

// 3. Le composant Badge avec le type BadgeProps
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

// 4. Exportations
export { Badge, badgeVariants }