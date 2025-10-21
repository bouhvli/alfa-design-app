"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Mail, Phone, Briefcase, Clock, PersonStanding, ShipWheel } from "lucide-react"

export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: "Emma van der Berg",
      role: "Senior Interior Designer",
      email: "emma@alfadesign.nl",
      phone: "+31 6 1234 5678",
      hourlyRate: 85,
      hoursThisMonth: 168,
      activeProjects: 4,
      status: "Active",
    },
    {
      id: 2,
      name: "Lucas Jansen",
      role: "Project Manager",
      email: "lucas@alfadesign.nl",
      phone: "+31 6 2345 6789",
      hourlyRate: 75,
      hoursThisMonth: 152,
      activeProjects: 6,
      status: "Active",
    },
    {
      id: 3,
      name: "Sophie de Vries",
      role: "Interior Designer",
      email: "sophie@alfadesign.nl",
      phone: "+31 6 3456 7890",
      hourlyRate: 65,
      hoursThisMonth: 144,
      activeProjects: 3,
      status: "Active",
    },
    {
      id: 4,
      name: "Thomas Bakker",
      role: "Installation Specialist",
      email: "thomas@alfadesign.nl",
      phone: "+31 6 4567 8901",
      hourlyRate: 55,
      hoursThisMonth: 176,
      activeProjects: 5,
      status: "Active",
    },
    {
      id: 5,
      name: "Lisa Mulder",
      role: "Junior Designer",
      email: "lisa@alfadesign.nl",
      phone: "+31 6 5678 9012",
      hourlyRate: 45,
      hoursThisMonth: 160,
      activeProjects: 2,
      status: "Active",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
              <p className="text-gray-600 mt-1">Manage your team and track performance</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Team Member
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Team Members</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PersonStanding className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">20</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Hours This Month</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">1,840</p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Utilization</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">87%</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ShipWheel className="w-6 h-6 text-primary-foreground rounded" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search team members..." className="pl-10" />
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-4">
                  {/* Header with avatar and basic info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900 truncate">{member.name}</h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-success shrink-0">
                          {member.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{member.role}</p>
                    </div>
                  </div>

                  {/* Contact info - stacked vertically */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  {/* Stats in 2x2 grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-600">Hourly Rate</p>
                      <p className="text-sm font-semibold text-gray-900">€{member.hourlyRate}/hr</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Hours This Month</p>
                      <p className="text-sm font-semibold text-gray-900">{member.hoursThisMonth}h</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Active Projects</p>
                      <p className="text-sm font-semibold text-amber-600">{member.activeProjects}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Monthly Revenue</p>
                      <p className="text-sm font-semibold text-green-600">
                        €{(member.hourlyRate * member.hoursThisMonth).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
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
