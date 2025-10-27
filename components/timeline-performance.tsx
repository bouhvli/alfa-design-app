"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  { project: "Kitchen", onTime: 42, delayed: 7 },
  { project: "Bathroom", onTime: 28, delayed: 0 },
  { project: "Living", onTime: 35, delayed: 5 },
  { project: "Bedroom", onTime: 21, delayed: 0 },
  { project: "Office", onTime: 56, delayed: 14 },
  { project: "Dining", onTime: 30, delayed: 3 },
]

export function TimelinePerformanceChart() {
  const totalProjects = chartData.length
  const onTimeProjects = chartData.filter(project => project.delayed === 0).length
  const onTimePercentage = Math.round((onTimeProjects / totalProjects) * 100)
  const avgDuration = Math.round(chartData.reduce((sum, project) => 
    sum + project.onTime + project.delayed, 0) / totalProjects
  )
  const delayedProjects = chartData.reduce((sum, project) => sum + (project.delayed > 0 ? 1 : 0), 0)

  return (
    <Card style={{ border: '1px solid #e5e7eb', borderRadius: '16px' }}>
      <CardHeader style={{ padding: '1rem 1rem 0.5rem' }}>
        <CardTitle style={{ fontSize: '1rem', fontWeight: 500, margin: 0 }}>Timeline Performance</CardTitle>
        <CardDescription style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
          Project completion timelines and delays
        </CardDescription>
      </CardHeader>
      <CardContent style={{ padding: '1rem' }}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} margin={{ top: 0, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="project" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              stroke="#6b7280"
              tickMargin={8}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              stroke="#6b7280"
              tickFormatter={(value) => `${value}d`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              formatter={(value, name) => [
                `${value} days`,
                name === 'onTime' ? 'On Time' : 'Delayed'
              ]}
            />
            <Legend 
              verticalAlign="top"
              height={36}
              content={({ payload }) => (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  {payload?.map((entry, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                      <div 
                        style={{ 
                          height: '8px', 
                          width: '8px', 
                          borderRadius: '50%', 
                          backgroundColor: entry.color 
                        }} 
                      />
                      <span style={{ color: '#6b7280' }}>{entry.value}</span>
                    </div>
                  ))}
                </div>
              )}
            />
            <Bar 
              dataKey="onTime" 
              stackId="a" 
              fill="#10b981" 
              name="On Time"
              radius={[0, 0, 4, 4]}
            />
            <Bar 
              dataKey="delayed" 
              stackId="a" 
              fill="#ef4444" 
              name="Delayed"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Key Metrics */}
        <div style={{ 
          marginTop: '1.5rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '2rem',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>{avgDuration}</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Avg. Days</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>{onTimePercentage}%</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>On Time</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>{delayedProjects}</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Delayed</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
            <span style={{ color: '#6b7280' }}>On Time Performance</span>
            <span style={{ fontWeight: 500 }}>{onTimePercentage}%</span>
          </div>
          <div style={{ 
            height: '8px', 
            width: '100%', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            backgroundColor: '#f3f4f6' 
          }}>
            <div 
              style={{ 
                height: '100%', 
                backgroundColor: '#10b981',
                width: `${onTimePercentage}%`,
                transition: 'all 0.5s'
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}