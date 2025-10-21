import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: LucideIcon
  subtitle: string
}

export function MetricCard({ title, value, change, trend, icon: Icon, subtitle }: MetricCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              <span
                className={cn(
                  "flex items-center gap-1 text-xs font-medium",
                  trend === "up" ? "text-success" : "text-destructive",
                )}
              >
                {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {change}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
