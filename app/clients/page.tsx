"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Mail, Phone, MapPin, MoreVertical, HandCoins, Drill, ChartCandlestick } from "lucide-react"

export default function ClientsPage() {
  const clients = [
    {
      id: 1,
      name: "John Anderson",
      email: "john.anderson@email.com",
      phone: "+31 6 1234 5678",
      location: "Amsterdam",
      projects: 3,
      totalSpent: 215000,
      status: "Active",
    },
    {
      id: 2,
      name: "Tech Corp BV",
      email: "contact@techcorp.nl",
      phone: "+31 20 123 4567",
      location: "Rotterdam",
      projects: 2,
      totalSpent: 185000,
      status: "Active",
    },
    {
      id: 3,
      name: "Sarah Williams",
      email: "sarah.w@email.com",
      phone: "+31 6 9876 5432",
      location: "Utrecht",
      projects: 1,
      totalSpent: 45000,
      status: "Active",
    },
    {
      id: 4,
      name: "Bistro Deluxe",
      email: "info@bistrodeluxe.nl",
      phone: "+31 20 987 6543",
      location: "Amsterdam",
      projects: 1,
      totalSpent: 95000,
      status: "Completed",
    },
    {
      id: 5,
      name: "Fashion Hub",
      email: "hello@fashionhub.nl",
      phone: "+31 10 456 7890",
      location: "The Hague",
      projects: 2,
      totalSpent: 142000,
      status: "Active",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
              <p className="text-gray-600 mt-1">Manage your client relationships</p>
            </div>
            <Button className="lg:flex lg:items-center mt-6 sm:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 mb-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Clients</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">48</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HandCoins className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Clients</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">32</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Drill className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New This Month</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">7</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Project Value</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">€68k</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ChartCandlestick className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search clients by name, email, or location..." className="pl-10" />
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {clients.map((client) => (
              <Card key={client.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-4">
                  {/* Header with avatar and basic info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{client.name.charAt(0)}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900 truncate">{client.name}</h3>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${client.status === "Active" ? "bg-green-100 text-success" : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {client.status}
                        </span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="shrink-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Contact info - stacked vertically */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{client.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{client.location}</span>
                    </div>
                  </div>

                  {/* Stats in 3-column grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Projects</p>
                      <p className="text-sm font-semibold text-gray-900">{client.projects}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Total Spent</p>
                      <p className="text-sm font-semibold text-primary-foreground">€{client.totalSpent.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Avg/Project</p>
                      <p className="text-sm font-semibold text-gray-900">
                        €{Math.round(client.totalSpent / client.projects).toLocaleString()}
                      </p>
                    </div>
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
