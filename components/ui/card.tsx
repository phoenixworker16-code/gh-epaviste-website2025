export function Card({ children, ...props }: any) {
  return <div className="border rounded-lg bg-white shadow-sm" {...props}>{children}</div>
}

export function CardContent({ children, ...props }: any) {
  return <div className="p-6" {...props}>{children}</div>
}