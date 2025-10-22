// components/sidebar-client.tsx
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface SidebarClientProps {
  navigation: NavigationItem[]
  pathname: string
}

export function SidebarClient({ navigation, pathname }: SidebarClientProps) {
  const [loading, setLoading] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileOpen])

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-card border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">AD</span>
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground">Alfa Design</h1>
              </div>
            </div>
          </div>
          
          {/* Mobile Search Button */}
          <button
            onClick={() => {/* Add search functionality */}}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed lg:sticky top-0 left-0 z-50 h-screen flex flex-col border-r border-border bg-card transition-all duration-300 ease-in-out",
        "lg:translate-x-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full",
        isCollapsed ? "w-20" : "w-64"
      )}>
        {/* Desktop Header */}
        <div className={cn(
          "flex h-16 items-center border-b border-border transition-all duration-300",
          isCollapsed ? "justify-center px-0" : "justify-between px-6"
        )}>
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">AD</span>
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground">Alfa Design</h1>
                <p className="text-xs text-muted-foreground">Project Manager</p>
              </div>
            </div>
          )}
          
          {/* Desktop Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "p-2 rounded-lg hover:bg-accent transition-colors",
              isCollapsed ? "mx-auto" : ""
            )}
          >
            <Menu className={cn(
              "h-4 w-4 transition-transform duration-300",
              isCollapsed ? "rotate-180" : ""
            )} />
          </button>
        </div>

        {/* Search - Hidden when collapsed */}
        {!isCollapsed && (
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border border-border bg-background pl-10 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors group relative",
                  isActive
                    ? "bg-primary/10 text-primary-foreground hover:bg-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  isCollapsed ? "justify-center" : ""
                )}
                title={isCollapsed ? item.name : undefined}
                prefetch
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                    {item.name}
                  </div>
                )}
                
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.name}</span>
                    {loading === item.href && (
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary flex-shrink-0" />
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </nav>

        {/* User Profile - Hidden when collapsed */}
        {!isCollapsed && (
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-medium text-primary">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@alfa-design.be</p>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed User Profile */}
        {isCollapsed && (
          <div className="border-t border-border p-4">
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group relative">
                <span className="text-sm font-medium text-primary">JD</span>
                {/* Tooltip for collapsed user */}
                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                  John Doe
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-16" />
    </>
  )
}