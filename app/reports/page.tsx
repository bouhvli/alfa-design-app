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
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        <div className="w-full">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Financial insights and performance metrics</p>
            </div>
            <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
              <Select defaultValue="2024">
                <SelectTrigger className="w-full xs:w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full xs:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-success text-xs sm:text-sm font-medium">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  12.5%
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Total Revenue</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">€1,128,000</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>

            <Card className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-success text-xs sm:text-sm font-medium">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  8.3%
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Total Profit</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">€282,000</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>

            <Card className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-red-700 text-xs sm:text-sm font-medium">
                  <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  3.2%
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Projects Completed</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">63</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>

            <Card className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center text-success text-xs sm:text-sm font-medium">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  5.7%
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Avg. Profit Margin</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">25%</p>
              <p className="text-xs text-gray-500 mt-2">vs last year</p>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <Card className="p-4 sm:p-5">
              {/* Compact Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Revenue & Profit Trend</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Last 6 months</p>
                </div>
                <Select defaultValue="6months">
                  <SelectTrigger className="w-28 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">6 Months</SelectItem>
                    <SelectItem value="year">1 Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Inline Legend */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">Revenue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-600">Profit</span>
                </div>
              </div>

              {/* Compact Data Visualization */}
              <div>
                {monthlyData.map((data, index) => {
                  const revenuePercentage = (data.revenue / 200000) * 100;
                  const profitPercentage = (data.profit / 50000) * 100;

                  return (
                    <div key={data.month} className="group hover:bg-gray-50 rounded-md p-2 transition-colors">
                      {/* Compact Header Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 min-w-[32px]">{data.month}</span>

                        {/* Financial Data - Compact */}
                        <div className="flex items-center gap-3 text-xs">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="font-semibold text-primary-foreground">
                              €{(data.revenue / 1000).toFixed(0)}k
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            <span className="font-semibold text-indigo-600">
                              €{(data.profit / 1000).toFixed(0)}k
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Compact Progress Bars */}
                      <div className="">
                        {/* Revenue Bar */}
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${revenuePercentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">
                            {revenuePercentage.toFixed(0)}%
                          </span>
                        </div>

                        {/* Profit Bar */}
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${profitPercentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">
                            {profitPercentage.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Compact Summary */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">
                    Total: <span className="font-semibold text-gray-900">€{(monthlyData.reduce((sum, data) => sum + data.revenue, 0) / 1000).toFixed(0)}k</span>
                  </span>
                  <span className="text-indigo-600 font-semibold">
                    €{(monthlyData.reduce((sum, data) => sum + data.profit, 0) / 1000).toFixed(0)}k profit
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5">
              {/* Compact Header */}
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Project Distribution</h2>
                  <p className="text-xs text-gray-500 mt-0.5">By project type</p>
                </div>
                <Select defaultValue="type">
                  <SelectTrigger className="w-28 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type">By Type</SelectItem>
                    <SelectItem value="status">By Status</SelectItem>
                    <SelectItem value="client">By Client</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Distribution Bars with Enhanced Visuals */}
              <div className="">
                {[
                  { type: "Residential", percentage: 35, color: "bg-blue-500", count: 22 },
                  { type: "Commercial", percentage: 28, color: "bg-purple-500", count: 18 },
                  { type: "Hospitality", percentage: 22, color: "bg-amber-500", count: 14 },
                  { type: "Retail", percentage: 15, color: "bg-primary", count: 9 },
                ].map((item, index) => (
                  <div key={item.type} className="group hover:bg-gray-50 rounded-md p-2 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                        <span className="text-sm font-medium text-gray-700">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="font-semibold text-gray-900">{item.percentage}%</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{item.count} projects</span>
                      </div>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="flex items-center gap-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <div className="w-8 text-right">
                        <span className="text-xs text-gray-500 font-medium">{item.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Insight Card */}
              <div className="p-4 bg-gradient-to-r from-primary/10 to-success/10 rounded-lg border border-primary/20">
                {/* Main Insight Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">Performance Insights</p>
                      <p className="text-sm font-semibold text-gray-900">Commercial Projects Lead</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">Avg. Margin</p>
                    <p className="text-lg font-bold text-primary">28%</p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-center p-2 bg-white/50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Revenue Leader</p>
                    <p className="text-sm font-semibold text-gray-900">Residential</p>
                    <p className="text-xs text-success font-medium">€422k</p>
                  </div>
                  <div className="text-center p-2 bg-white/50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Growth Rate</p>
                    <p className="text-sm font-semibold text-gray-900">+15.2%</p>
                    <p className="text-xs text-success font-medium">QoQ</p>
                  </div>
                </div>

                {/* Project Summary */}
                <div className="pt-3 border-t border-primary/20">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-gray-600">Active Projects: </span>
                      <span className="font-semibold text-gray-900">47</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Completion Rate: </span>
                      <span className="font-semibold text-success">89%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <div>
                      <span className="text-gray-600">Avg. Duration: </span>
                      <span className="font-semibold text-gray-900">4.2 months</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Team Utilization: </span>
                      <span className="font-semibold text-primary">86%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Top Projects Table */}
          <Card className="p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Projects</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Project Name</th>
                    <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Revenue</th>
                    <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Profit</th>
                    <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Margin</th>
                    <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {topProjects.map((project, index) => (
                    <tr key={project.name} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 sm:py-4 px-2 sm:px-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-xs sm:text-sm font-semibold text-primary-foreground">{index + 1}</span>
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">{project.name}</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-900">€{project.revenue.toLocaleString()}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-green-600">
                        €{project.profit.toLocaleString()}
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-900">{project.margin}%</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 w-16 sm:w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-500 h-2 rounded-full"
                              style={{ width: `${(project.profit / 30000) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-600 hidden xs:inline">Excellent</span>
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