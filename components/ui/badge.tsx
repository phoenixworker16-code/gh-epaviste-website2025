export function Badge({ children, variant = "default", ...props }: any) {
  const variants = {
    default: "bg-yellow-500 text-black",
    secondary: "bg-gray-100 text-gray-900",
    destructive: "bg-red-500 text-white"
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`} {...props}>
      {children}
    </span>
  )
}