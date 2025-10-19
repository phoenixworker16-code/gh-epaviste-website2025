// components/ui/card.tsx

import * as React from "react";

// Définition d'un type de base pour simplifier la réutilisation
type CardComponentProps = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren;
// Note : Si vous utilisez 'className' et d'autres props directement sur les éléments HTML.

export function Card({ children, ...props }: CardComponentProps) {
  return <div className="border rounded-lg bg-white shadow-sm" {...props}>{children}</div>
}

export function CardContent({ children, ...props }: CardComponentProps) {
  return <div className="p-6" {...props}>{children}</div>
}

export function CardHeader({ children, ...props }: CardComponentProps) {
  return <div className="flex flex-col space-y-1.5 p-6" {...props}>{children}</div>
}

// Le titre de la carte utilise un élément <h3>, nous devons donc changer le type
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & React.PropsWithChildren;

export function CardTitle({ children, ...props }: CardTitleProps) {
  return <h3 className="text-2xl font-semibold leading-none tracking-tight" {...props}>{children}</h3>
}

// Description et Pied de page peuvent revenir au type de base CardComponentProps (basé sur div/p)
export function CardDescription({ children, ...props }: CardComponentProps) {
  return <p className="text-sm text-gray-500" {...props}>{children}</p>
}

export function CardFooter({ children, ...props }: CardComponentProps) {
  return <div className="flex items-center p-6 pt-0" {...props}>{children}</div>
}