"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricCard } from "@/components/metric-card"
import { ProjectsTable } from "@/components/projects-table"
import { ProfitChart } from "@/components/profit-chart"
import { ProjectTypeChart } from "@/components/project-type-chart"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Clock, FolderOpen, AlertCircle, Users, Calendar, Target, PieChart } from "lucide-react"
import { ProjectStatusChart } from "./project-status"
import { TimelinePerformanceChart } from "./timeline-performance"
import { ClientBudgetChart } from "./clinet-budget"
import { UpcomingMilestonesChart } from "./up-comming-milestones-chart"
import { costAnalysisData } from "@/lib/cost-analysis-data"
import { CostAnalysisCard } from "./cost-analysis-card"
import { UniversalDialog } from "./universal-dialog"
import { AddProjectDialogEnhanced } from "./add-project-dialog-enhanced"
import { useEffect } from "react"

export function Dashboard() {
  // Prevent zooming
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) || 
          (e.ctrlKey && e.key === 'MouseScroll')) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8 fixed-scale" style={{ zoom: 1, transform: 'scale(1)' }}>
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Project Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Comprehensive overview of your interior design projects and business performance
            </p>
          </div>
          <div className="flex flex-row sm:flex-row items-stretch sm:items-center gap-3">
            <select 
              className="w-full sm:w-auto rounded-lg border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              style={{ fontSize: '14px', minHeight: '40px' }}
            >
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
              <option>All Time</option>
            </select>
            <AddProjectDialogEnhanced />
          </div>
        </div>
      </div>

      {/* Top Metrics - Enhanced */}
      <div className="mb-6 md:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        <MetricCard
          title="Active Projects"
          value="12"
          change="+2"
          trend="up"
          icon={FolderOpen}
          subtitle="3 New this month"
        />
        <MetricCard
          title="Total Revenue"
          value="€284,500"
          change="+12.5%"
          trend="up"
          icon={DollarSign}
          subtitle="€45,200 This month"
        />
        <MetricCard
          title="Avg. Profit Margin"
          value="32.8%"
          change="-2.1%"
          trend="down"
          icon={TrendingUp}
          subtitle="Target: 35%"
        />
        <MetricCard
          title="Client Satisfaction"
          value="94%"
          change="+3.2%"
          trend="up"
          icon={Users}
          subtitle="Based on 45 reviews"
        />
        <MetricCard
          title="On-time Delivery"
          value="87%"
          change="+5.1%"
          trend="up"
          icon={Calendar}
          subtitle="12/14 projects"
        />
      </div>

      {/* Main Charts Grid */}
      <div className="mb-6 md:mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Profit & Loss Trend */}
        <Card className="lg:col-span-2" style={{ minHeight: '300px' }}>
          <CardHeader className="flex flex-col items-start justify-between space-y-2">
            <CardTitle className="text-base font-medium">Profit & Loss Trend</CardTitle>
            <CardDescription className="text-sm">
              The profit and loss trend for last 8 months
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ProfitChart />
          </CardContent>
        </Card>

        {/* Project Status Distribution */}
        <ProjectStatusChart />
      </div>

      {/* Second Row Charts */}
      <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Project Type Performance */}
        <Card style={{ minHeight: '300px' }}>
          <CardHeader>
            <CardTitle className="text-base font-medium">Profit by Project Type</CardTitle>
            <CardDescription className="text-sm">
              Current project types distribution
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ProjectTypeChart />
          </CardContent>
        </Card>

        {/* Timeline Performance */}
        <TimelinePerformanceChart />

        {/* Client Budget Range */}
        <ClientBudgetChart />
      </div>

      {/* Cost Analysis - Enhanced */}
      <div className="mb-6 md:mb-8">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">Cost Analysis</h2>
          <Button variant="ghost" size="sm" className="text-primary w-full sm:w-auto justify-center">
            View Detailed Report
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {costAnalysisData.map((item) => (
            <CostAnalysisCard
              key={item.id}
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              description={item.description}
              trend={item.trend}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="mb-6 md:mb-8">
        <UpcomingMilestonesChart />
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-lg">All Projects</CardTitle>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full sm:w-auto rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                style={{ fontSize: '14px', minHeight: '36px' }}
              />
              <Button variant="outline" size="sm" className="w-full sm:w-auto justify-center">
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <ProjectsTable />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}