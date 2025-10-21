"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calculator,
  FolderOpen,
  Clock,
  TrendingUp,
  Settings,
  Package,
  Users,
  Briefcase,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Cost Calculation", href: "/cost-calculation", icon: Calculator },
  { name: "Time Registration", href: "/time-registration", icon: Clock },
  { name: "Clients", href: "/clients", icon: Briefcase },
  { name: "Materials", href: "/materials", icon: Package },
  { name: "Team", href: "/team", icon: Users },
  { name: "Reports", href: "/reports", icon: TrendingUp },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [loading, setLoading] = useState<string | null>(null)

  return (
    <div className="flex w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <span className="text-lg font-bold text-primary-foreground">AD</span>
        </div>
        <div>
          <h1 className="text-sm font-semibold text-foreground">Alfa Design</h1>
          <p className="text-xs text-muted-foreground">Project Manager</p>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setLoading(item.href)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary-foreground hover:bg-primary/20"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.name}</span>
              {loading === item.href && (
                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <span className="text-sm font-medium text-primary">JD</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">john@alfa-design.be</p>
          </div>
        </div>
      </div>
    </div>
  )
}
