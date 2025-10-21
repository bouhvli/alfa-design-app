"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = [
  { month: "Jan", profit: 28500, revenue: 45200 },
  { month: "Feb", profit: 32100, revenue: 48900 },
  { month: "Mar", profit: 29800, revenue: 46500 },
  { month: "Apr", profit: 35600, revenue: 52300 },
  { month: "May", profit: 38200, revenue: 55100 },
  { month: "Jun", profit: 41500, revenue: 58700 },
  { month: "Jul", profit: 39800, revenue: 56200 },
  { month: "Aug", profit: 43200, revenue: 61500 },
]

// Fallback colors in case CSS variables aren't available
const colors = {
  primary: '#3b82f6', // blue
  chart2: '#10b981', // green
  border: '#e5e7eb', // gray-200
  muted: '#6b7280', // gray-500
}

export function ProfitChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
        <XAxis 
          dataKey="month" 
          stroke={colors.muted} 
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke={colors.muted} 
          fontSize={12} 
          tickFormatter={(value) => `€${value / 1000}k`}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-card p-3 shadow-sm">
                  <p className="font-medium text-foreground">{label}</p>
                  <div className="mt-2 space-y-1">
                    {payload.map((entry, index) => (
                      <div key={index} className="flex items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div 
                            className="h-2 w-2 rounded-full" 
                            style={{ backgroundColor: entry.color }}
                          />
                          <span className="text-muted-foreground">{entry.name}:</span>
                        </div>
                        <span className="font-medium text-foreground">
                          €{entry.value?.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Legend 
          verticalAlign="top"
          height={36}
          content={({ payload }) => (
            <div className="flex items-center justify-center gap-4 pb-2">
              {payload?.map((entry, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <div 
                    className="h-2 w-2 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-muted-foreground">{entry.value}</span>
                </div>
              ))}
            </div>
          )}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke={colors.primary}
          strokeWidth={2}
          dot={{ fill: colors.primary, strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: colors.primary, strokeWidth: 2 }}
          name="Profit"
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke={colors.chart2}
          strokeWidth={2}
          dot={{ fill: colors.chart2, strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: colors.chart2, strokeWidth: 2 }}
          name="Revenue"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}