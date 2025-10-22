"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"
import { TrendingUp, FolderOpen, Award } from "lucide-react"

const data = [
  { type: "Kitchen", projects: 8, profit: 45200 },
  { type: "Bathroom", projects: 12, profit: 38900 },
  { type: "Living", projects: 6, profit: 52100 },
  { type: "Bedroom", projects: 9, profit: 31500 },
  { type: "Office", projects: 5, profit: 28700 },
]

const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444']

export function ProjectTypeChart() {
  // Calculate additional metrics
  const totalProjects = data.reduce((sum, item) => sum + item.projects, 0)
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0)
  const avgProfit = Math.round(totalProfit / totalProjects)

  const typeWithMostProjects = data.reduce((max, item) => 
    item.projects > max.projects ? item : max
  )

  const typeWithMostProfit = data.reduce((max, item) => 
    item.profit > max.profit ? item : max
  )

  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 10 }}>
          <XAxis
            dataKey="type"
            stroke="#6b7280"
            fontSize={11}
            angle={-45}
            textAnchor="end"
            height={60}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#6b7280" 
            fontSize={11} 
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `€${value / 1000}k`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                    <p className="font-medium text-primary-foreground">{label}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-gray-600">Profit:</span>
                        <span className="font-medium text-primary-foreground">
                          €{payload[0].value?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-gray-600">Projects:</span>
                        <span className="font-medium text-gray-900">
                          {data.find(d => d.type === label)?.projects}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar 
            dataKey="profit" 
            radius={[4, 4, 0, 0]}
            name="Profit"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Color Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
        {data.map((item, index) => (
          <div key={item.type} className="flex items-center gap-2">
            <div 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-gray-600">{item.type}</span>
          </div>
        ))}
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 gap-3 pt-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600">Avg. Profit per Project</span>
          </div>
          <span className="font-medium text-gray-900">€{avgProfit.toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">Most Projects</span>
          </div>
          <div className="text-right">
            <span className="font-medium text-gray-900">{typeWithMostProjects.type}</span>
            <span className="text-xs text-gray-500 ml-2">({typeWithMostProjects.projects} projects)</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-purple-500" />
            <span className="text-sm text-gray-600">Most Profitable</span>
          </div>
          <div className="text-right">
            <span className="font-medium text-gray-900">{typeWithMostProfit.type}</span>
            <span className="text-xs text-gray-500 ml-2">(€{typeWithMostProfit.profit.toLocaleString()})</span>
          </div>
        </div>
      </div>
    </div>
  )
}