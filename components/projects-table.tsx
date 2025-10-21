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
      <div className="overflow-x-auto">
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

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing 1-5 of 12 projects</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <div className="flex gap-1">
            <Button variant="default" size="sm" className="h-8 w-8 p-0">
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
              3
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
