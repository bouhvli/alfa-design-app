"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Filter, MoreVertical, Tally5, LoaderCircle, CheckCheck, LayoutList } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Villa Renovation",
      client: "John Anderson",
      type: "Residential",
      status: "In Progress",
      budget: 85000,
      spent: 62000,
      progress: 73,
      startDate: "2024-01-05",
      deadline: "2024-03-15",
      team: 4,
    },
    {
      id: 2,
      name: "Office Redesign",
      client: "Tech Corp BV",
      type: "Commercial",
      status: "In Progress",
      budget: 120000,
      spent: 45000,
      progress: 38,
      startDate: "2024-01-10",
      deadline: "2024-04-20",
      team: 6,
    },
    {
      id: 3,
      name: "Apartment Makeover",
      client: "Sarah Williams",
      type: "Residential",
      status: "Planning",
      budget: 45000,
      spent: 5000,
      progress: 11,
      startDate: "2024-01-20",
      deadline: "2024-03-30",
      team: 3,
    },
    {
      id: 4,
      name: "Restaurant Interior",
      client: "Bistro Deluxe",
      type: "Hospitality",
      status: "Completed",
      budget: 95000,
      spent: 92000,
      progress: 100,
      startDate: "2023-11-01",
      deadline: "2024-01-10",
      team: 5,
    },
    {
      id: 5,
      name: "Retail Store Design",
      client: "Fashion Hub",
      type: "Retail",
      status: "In Progress",
      budget: 75000,
      spent: 58000,
      progress: 77,
      startDate: "2023-12-15",
      deadline: "2024-02-28",
      team: 4,
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
              <p className="text-gray-600 mt-1">Manage all your interior design projects</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10">
                  <Tally5 className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <LoaderCircle className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCheck className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Planning</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <LayoutList className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search projects..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="progress">In Progress</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-types">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </Card>

          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-100 text-success"
                            : project.status === "In Progress"
                              ? "bg-primary/10 text-primary-foreground"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Client: {project.client}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-5 gap-6 mb-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Budget</p>
                    <p className="text-sm font-semibold text-gray-900">€{project.budget.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Spent</p>
                    <p className="text-sm font-semibold text-gray-900">€{project.spent.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Start Date</p>
                    <p className="text-sm font-semibold text-gray-900">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Deadline</p>
                    <p className="text-sm font-semibold text-gray-900">{project.deadline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Team Size</p>
                    <p className="text-sm font-semibold text-gray-900">{project.team} members</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-semibold text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
