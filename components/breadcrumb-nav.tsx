export function BreadcrumbNav({ children, ...props }: any) {
  return <nav className="flex items-center space-x-2 text-sm" {...props}>{children}</nav>
}