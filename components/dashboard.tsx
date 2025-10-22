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
    <div className="p-8 fixed-scale" style={{ zoom: 1, transform: 'scale(1)' }}>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground" style={{ fontSize: '24px' }}>Project Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground" style={{ fontSize: '14px' }}>
            Comprehensive overview of your interior design projects and business performance
          </p>
        </div>
        <div className="flex items-center gap-4">
          <select 
            className="rounded-lg border border-border bg-card px-4 py-2 pl-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            style={{ fontSize: '14px', height: '40px' }}
          >
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
          <AddProjectDialogEnhanced />
        </div>
      </div>

      {/* Top Metrics - Enhanced */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5" style={{ gap: '24px' }}>
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
      <div className="mb-8 grid gap-6 lg:grid-cols-3" style={{ gap: '24px' }}>
        {/* Profit & Loss Trend */}
        <Card className="lg:col-span-2" style={{ minHeight: '300px' }}>
          <CardHeader className="flex flex-col items-start justify-between">
            <CardTitle className="text-base font-medium" style={{ fontSize: '16px' }}>Profit & Loss Trend</CardTitle>
            <CardDescription style={{ fontSize: '14px' }}>The profit and loss trend for last 8 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfitChart />
          </CardContent>
        </Card>

        {/* Project Status Distribution */}
        <ProjectStatusChart />
      </div>

      {/* Second Row Charts */}
      <div className="mb-8 grid gap-6 lg:grid-cols-3" style={{ gap: '24px' }}>
        {/* Project Type Performance */}
        <Card style={{ minHeight: '300px' }}>
          <CardHeader>
            <CardTitle className="text-base font-medium" style={{ fontSize: '16px' }}>Profit by Project Type</CardTitle>
            <CardDescription style={{ fontSize: '14px' }}>Current project types distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectTypeChart />
          </CardContent>
        </Card>

        {/* Timeline Performance */}
        <TimelinePerformanceChart />

        {/* Client Budget Range */}
        <ClientBudgetChart />
      </div>

      {/* Cost Analysis - Enhanced */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground" style={{ fontSize: '20px' }}>Cost Analysis</h2>
          <Button variant="ghost" size="sm" className="text-primary" style={{ fontSize: '14px' }}>
            View Detailed Report
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '16px' }}>
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
      <div className="mb-8">
        <UpcomingMilestonesChart />
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle style={{ fontSize: '18px' }}>All Projects</CardTitle>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search projects..."
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                style={{ fontSize: '14px', height: '36px' }}
              />
              <Button variant="outline" size="sm" style={{ fontSize: '14px', height: '36px' }}>
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ProjectsTable />
        </CardContent>
      </Card>
    </div>
  )
}