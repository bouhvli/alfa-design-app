"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Calendar,
  Users,
  Target,
  ArrowUp,
  ArrowDown,
  Eye
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddProjectDialogEnhanced } from "@/components/add-project-dialog-enhanced"

// Mock data for projects
const initialProjects = [
  {
    id: 1,
    name: "Riverfront Apartment",
    type: "Residential",
    client: "Sarah Johnson",
    status: "In Progress",
    budget: 85000,
    spent: 65200,
    startDate: "2025-09-15",
    deadline: "2025-12-15",
    team: 4,
    progress: 76,
    profitMargin: 32
  },
  {
    id: 2,
    name: "Office Renovation",
    type: "Commercial",
    client: "TechCorp Inc.",
    status: "Planning",
    budget: 120000,
    spent: 28500,
    startDate: "2025-11-01",
    deadline: "2025-03-15",
    team: 6,
    progress: 24,
    profitMargin: 28
  },
  {
    id: 3,
    name: "Luxury Villa",
    type: "Residential",
    client: "Robert Chen",
    status: "Completed",
    budget: 250000,
    spent: 235000,
    startDate: "2025-05-10",
    deadline: "2025-11-30",
    team: 8,
    progress: 100,
    profitMargin: 35
  },
  {
    id: 4,
    name: "Boutique Hotel",
    type: "Hospitality",
    client: "Grand Hotels Group",
    status: "In Progress",
    budget: 180000,
    spent: 142000,
    startDate: "2024-08-20",
    deadline: "2025-02-28",
    team: 7,
    progress: 79,
    profitMargin: 31
  },
  {
    id: 5,
    name: "Medical Center",
    type: "Healthcare",
    client: "City Health Services",
    status: "Planning",
    budget: 300000,
    spent: 45000,
    startDate: "2024-01-15",
    deadline: "2025-08-30",
    team: 10,
    progress: 15,
    profitMargin: 29
  }
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Filter and sort projects
  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || project.status === statusFilter
      const matchesType = typeFilter === "all" || project.type === typeFilter
      return matchesSearch && matchesStatus && matchesType
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "budget":
          return b.budget - a.budget
        case "progress":
          return b.progress - a.progress
        case "deadline":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        default:
          return 0
      }
    })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "On Hold":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Residential":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Commercial":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Hospitality":
        return "bg-pink-100 text-pink-800 border-pink-200"
      case "Healthcare":
        return "bg-teal-100 text-teal-800 border-teal-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
              <p className="text-gray-600 mt-1">Manage and track all your interior design projects</p>
            </div>
            <div className="flex gap-3">
              <AddProjectDialogEnhanced />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Total Projects</CardTitle>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="text-green-600 font-medium">+2</span> this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Active Projects</CardTitle>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === "In Progress").length}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="text-primary-foreground font-medium">3</span> teams working
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Budget</CardTitle>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ArrowUp className="h-6 w-6 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  €{projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="text-green-600 font-medium">12%</span> vs last quarter
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Avg. Progress</CardTitle>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ArrowDown className="h-6 w-6 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="text-orange-600 font-medium">-3%</span> from target
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-6">
            <CardContent className="w-full p-4 sm:p-6">
              <div className="flex flex-col gap-4 w-full">
                {/* Search Input - Full width on all screens */}
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search projects or clients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>

                {/* Filters Row */}
                <div className="flex flex-row xs:flex-row gap-3 w-full">
                  {/* Status Filter */}
                  <div className="flex-1 min-w-0">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">All Status</option>
                      <option value="Planning">Planning</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="On Hold">On Hold</option>
                    </select>
                  </div>

                  {/* Type Filter */}
                  <div className="flex-1 min-w-0">
                    <select
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">All Types</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>

                  {/* Sort Filter */}
                  <div className="flex-1 min-w-0">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="name">Sort by Name</option>
                      <option value="budget">Sort by Budget</option>
                      <option value="progress">Sort by Progress</option>
                      <option value="deadline">Sort by Deadline</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{project.name}</h3>
                      <div className="flex items-center gap-1 flex-wrap">
                        <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getTypeColor(project.type)}`}>
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">Client: {project.client}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 flex-shrink-0 ml-2">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="text-sm">
                      <DropdownMenuItem className="text-xs sm:text-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs sm:text-sm">Edit Project</DropdownMenuItem>
                      <DropdownMenuItem className="text-xs sm:text-sm text-red-600">
                        Archive Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Budget</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">€{project.budget.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Spent</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">€{project.spent.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Start Date</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Deadline</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">{project.deadline}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-semibold text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-success h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{project.team} members</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-success">
                    {project.profitMargin}% margin
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                <AddProjectDialogEnhanced />
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}