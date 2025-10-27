"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Modern Kitchen Renovation",
    client: "Van Der Berg Family",
    date: "15/01/2025",
    budget: "€45,000",
    spent: "€38,200",
    profit: "€6,800",
    margin: "15.1%",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Luxury Bathroom Design",
    client: "Janssens Residence",
    date: "08/01/2025",
    budget: "€28,500",
    spent: "€28,500",
    profit: "€9,120",
    margin: "32.0%",
    status: "Completed",
  },
  {
    id: 3,
    name: "Office Space Interior",
    client: "TechStart BV",
    date: "22/12/2024",
    budget: "€65,000",
    spent: "€52,300",
    profit: "€12,700",
    margin: "19.5%",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Living Room Makeover",
    client: "Peeters Family",
    date: "10/12/2024",
    budget: "€32,000",
    spent: "€32,000",
    profit: "€11,200",
    margin: "35.0%",
    status: "Completed",
  },
  {
    id: 5,
    name: "Master Bedroom Suite",
    client: "De Vries Residence",
    date: "05/12/2024",
    budget: "€38,000",
    spent: "€31,500",
    profit: "€6,500",
    margin: "17.1%",
    status: "In Progress",
  },
]

export function ProjectsTable() {
  return (
    <div>
      {/* Mobile Cards View */}
      <div className="lg:hidden space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-border rounded-lg p-4 bg-card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-border" />
                <div>
                  <h3 className="font-medium text-foreground text-sm">{project.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.client}</p>
                </div>
              </div>
              <Badge
                variant={project.status === "Completed" ? "default" : "secondary"}
                className={
                  project.status === "Completed"
                    ? "bg-success/10 text-success hover:bg-success/20 text-xs"
                    : "bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                }
              >
                {project.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-muted-foreground">Start Date</p>
                <p className="font-medium mt-1">{project.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Budget</p>
                <p className="font-medium mt-1">{project.budget}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Spent</p>
                <p className="font-medium mt-1">{project.spent}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Profit</p>
                <p className="font-medium text-success mt-1">{project.profit}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Margin</p>
                <p className="font-medium mt-1">{project.margin}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                <input type="checkbox" className="rounded border-border" />
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Project</th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Client</th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Start Date</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Budget</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Spent</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Profit</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Margin</th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-border last:border-0">
                <td className="py-4">
                  <input type="checkbox" className="rounded border-border" />
                </td>
                <td className="py-4">
                  <div className="font-medium text-foreground">{project.name}</div>
                </td>
                <td className="py-4 text-sm text-muted-foreground">{project.client}</td>
                <td className="py-4 text-sm text-muted-foreground">{project.date}</td>
                <td className="py-4 text-right text-sm text-foreground">{project.budget}</td>
                <td className="py-4 text-right text-sm text-foreground">{project.spent}</td>
                <td className="py-4 text-right text-sm font-medium text-success">{project.profit}</td>
                <td className="py-4 text-right text-sm font-medium text-foreground">{project.margin}</td>
                <td className="py-4">
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={
                      project.status === "Completed"
                        ? "bg-success/10 text-success hover:bg-success/20"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }
                  >
                    {project.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Responsive */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Showing 1-5 of 12 projects
        </p>
        <div className="flex flex-col xs:flex-row items-center gap-3">
          <div className="flex items-center gap-2 order-2 xs:order-1">
            <Button variant="outline" size="sm" disabled className="text-xs h-8">
              <ChevronLeft className="h-3 w-3" />
              <span className="hidden xs:inline ml-1">Previous</span>
            </Button>
            <div className="flex gap-1">
              <Button variant="default" size="sm" className="h-7 w-7 p-0 text-xs">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-7 w-7 p-0 text-xs bg-transparent">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-7 w-7 p-0 text-xs bg-transparent">
                3
              </Button>
            </div>
            <Button variant="outline" size="sm" className="text-xs h-8">
              <span className="hidden xs:inline mr-1">Next</span>
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}