"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, TrendingUp, TrendingDown, DollarSign, Clock, Briefcase } from "lucide-react"

export default function ReportsPage() {
  const monthlyData = [
    { month: "Jan", revenue: 145000, profit: 36250, projects: 8 },
    { month: "Feb", revenue: 168000, profit: 42000, projects: 10 },
    { month: "Mar", revenue: 152000, profit: 38000, projects: 9 },
    { month: "Apr", revenue: 189000, profit: 47250, projects: 12 },
    { month: "May", revenue: 176000, profit: 44000, projects: 11 },
    { month: "Jun", revenue: 198000, profit: 49500, projects: 13 },
  ]

  const topProjects = [
    { name: "Office Redesign", revenue: 120000, profit: 30000, margin: 25 },
    { name: "Restaurant Interior", revenue: 95000, profit: 23750, margin: 25 },
    { name: "Villa Renovation", revenue: 85000, profit: 21250, margin: 25 },
    { name: "Retail Store Design", revenue: 75000, profit: 18750, margin: 25 },
    { name: "Apartment Makeover", revenue: 45000, profit: 11250, margin: 25 },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="text-gray-600 mt-1">Financial insights and performance metrics</p>
            </div>
            <div className="flex gap-3">
              <Select defaultValue="2024">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="px-6 gap-0">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  12.5%
                </div>
              </div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">€1,128,000</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>

            <Card className="px-6 gap-0">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  8.3%
                </div>
              </div>
              <p className="text-sm text-gray-600">Total Profit</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">€282,000</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>

            <Card className="px-6 gap-0">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  3.2%
                </div>
              </div>
              <p className="text-sm text-gray-600">Projects Completed</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">63</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>

            <Card className="px-6 gap-0">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  5.7%
                </div>
              </div>
              <p className="text-sm text-gray-600">Avg. Profit Margin</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">25%</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Revenue & Profit Trend</h2>
                <Select defaultValue="6months">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">6 Months</SelectItem>
                    <SelectItem value="year">1 Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {monthlyData.map((data, index) => (
                  <div key={data.month}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{data.month}</span>
                      <div className="flex gap-4">
                        <span className="text-sm text-gray-600">
                          Revenue:{" "}
                          <span className="font-semibold text-primary">€{(data.revenue / 1000).toFixed(0)}k</span>
                        </span>
                        <span className="text-sm text-gray-600">
                          Profit:{" "}
                          <span className="font-semibold text-indigo-600">€{(data.profit / 1000).toFixed(0)}k</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(data.revenue / 200000) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(data.profit / 50000) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Project Distribution</h2>
                <Select defaultValue="type">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type">By Type</SelectItem>
                    <SelectItem value="status">By Status</SelectItem>
                    <SelectItem value="client">By Client</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Residential</span>
                    <span className="text-sm font-semibold text-gray-900">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Commercial</span>
                    <span className="text-sm font-semibold text-gray-900">28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "28%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Hospitality</span>
                    <span className="text-sm font-semibold text-gray-900">22%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: "22%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Retail</span>
                    <span className="text-sm font-semibold text-gray-900">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Most Profitable Type</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">Commercial</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Avg. Margin</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">28%</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Projects</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Project Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Revenue</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Profit</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Margin</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {topProjects.map((project, index) => (
                    <tr key={project.name} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary-foreground">{index + 1}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{project.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">€{project.revenue.toLocaleString()}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-green-600">
                        €{project.profit.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{project.margin}%</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{ width: `${(project.profit / 30000) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-600">Excellent</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
