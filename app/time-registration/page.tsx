"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, ListTodo, Plus, Stamp } from "lucide-react"

export default function TimeRegistrationPage() {
  const [isTracking, setIsTracking] = useState(false)
  const [currentTime, setCurrentTime] = useState("00:00:00")

  const timeEntries = [
    {
      id: 1,
      date: "2024-01-15",
      project: "Villa Renovation",
      task: "Floor Installation",
      hours: 8.5,
      status: "Approved",
    },
    { id: 2, date: "2024-01-15", project: "Office Redesign", task: "Wall Painting", hours: 6.0, status: "Pending" },
    {
      id: 3,
      date: "2024-01-14",
      project: "Apartment Makeover",
      task: "Furniture Assembly",
      hours: 4.5,
      status: "Approved",
    },
    { id: 4, date: "2024-01-14", project: "Villa Renovation", task: "Electrical Work", hours: 7.0, status: "Approved" },
    {
      id: 5,
      date: "2024-01-13",
      project: "Restaurant Interior",
      task: "Design Consultation",
      hours: 3.0,
      status: "Approved",
    },
    {
      id: 6,
      date: "2024-01-13",
      project: "Office Redesign",
      task: "Material Selection",
      hours: 5.5,
      status: "Pending",
    },
  ]

  const weekTotal = timeEntries.reduce((sum, entry) => sum + entry.hours, 0)
  const todayTotal = timeEntries.filter((e) => e.date === "2024-01-15").reduce((sum, entry) => sum + entry.hours, 0)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Time Registration</h1>
              <p className="text-gray-600 mt-1">Track and manage work hours</p>
            </div>
            <Button className="lg:flex lg:items-center mt-6 sm:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Add Manual Entry
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{todayTotal.toFixed(1)}h</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{weekTotal.toFixed(1)}h</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Approval</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">11.5h</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ListTodo className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">23.0h</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Stamp className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>

          {/* <Card className="p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Time Tracker</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm text-gray-700">Project</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="villa">Villa Renovation</SelectItem>
                      <SelectItem value="office">Office Redesign</SelectItem>
                      <SelectItem value="apartment">Apartment Makeover</SelectItem>
                      <SelectItem value="restaurant">Restaurant Interior</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm text-gray-700">Task</Label>
                  <Input placeholder="e.g., Floor Installation" className="mt-1" />
                </div>

                <div>
                  <Label className="text-sm text-gray-700">Description (Optional)</Label>
                  <Input placeholder="Add notes about the work" className="mt-1" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
                <div className="text-6xl font-bold text-gray-900 mb-6 font-mono">{currentTime}</div>
                <Button
                  size="lg"
                  onClick={() => setIsTracking(!isTracking)}
                  className={isTracking ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"}
                >
                  {isTracking ? (
                    <>
                      <Square className="w-5 h-5 mr-2" />
                      Stop Timer
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Timer
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card> */}

          <Card className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">Recent Time Entries</h2>
              <div className="flex justify-center sm:justify-end">
                <Select defaultValue="week">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Project</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Task</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Hours</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {timeEntries.map((entry) => (
                    <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900">{entry.date}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{entry.project}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{entry.task}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-900">{entry.hours}h</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${entry.status === "Approved" ? "bg-green-100 text-success" : "bg-amber-100 text-amber-800"
                            }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button size="sm" variant="ghost" className="text-amber-600 hover:text-primary-foreground">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {timeEntries.map((entry) => (
                <div key={entry.id} className="border border-gray-200 rounded-lg p-4 bg-white hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{entry.project}</h3>
                      <p className="text-xs text-gray-600 mt-1">{entry.task}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${entry.status === "Approved" ? "bg-green-100 text-success" : "bg-amber-100 text-amber-800"
                        }`}
                    >
                      {entry.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-medium text-gray-900 mt-1">{entry.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Hours</p>
                      <p className="font-semibold text-gray-900 mt-1">{entry.hours}h</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Button size="sm" variant="ghost" className="w-full text-amber-600 hover:text-primary-foreground text-xs">
                      Edit Time Entry
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
