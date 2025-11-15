import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export function Breadcrumbs({ items, variant = 'dark' }: BreadcrumbsProps) {
  const isLight = variant === 'light'
  
  return (
    <nav 
      className={cn(
        "flex items-center space-x-2 text-sm mb-6",
        isLight && "px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm inline-flex"
      )}
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className={cn(
          "hover:text-[#0056A6] transition-colors flex items-center",
          isLight 
            ? "text-white/90 hover:text-white" 
            : "text-gray-500 hover:text-[#0056A6]"
        )}
      >
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight 
            className={cn(
              "w-4 h-4",
              isLight ? "text-white/70" : "text-gray-400"
            )} 
          />
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "transition-colors",
                isLight
                  ? "text-white/90 hover:text-white"
                  : "text-gray-500 hover:text-[#0056A6]"
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={cn(
                "font-medium",
                isLight 
                  ? "text-white" 
                  : "text-[#1A1A1A]"
              )}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

