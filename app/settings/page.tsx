"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Building2, DollarSign, FileText, Bell } from "lucide-react"

export default function SettingsPage() {
  const [defaultMargin, setDefaultMargin] = useState(25)
  const [laborRate, setLaborRate] = useState(65)

  return (
    <div className="flex bg-gray-50 h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto w-full">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-1">Manage your business settings and preferences</p>
            </div>
            <Button className="text-primary-foreground">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Company Information</h2>
                  <p className="text-sm text-gray-600">Update your company details</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm text-gray-700">Company Name</Label>
                  <Input defaultValue="Alfa Design BV" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm text-gray-700">VAT Number</Label>
                  <Input defaultValue="NL123456789B01" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm text-gray-700">Email</Label>
                  <Input defaultValue="info@alfadesign.nl" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm text-gray-700">Phone</Label>
                  <Input defaultValue="+31 20 123 4567" className="mt-1" />
                </div>
                <div className="col-span-2">
                  <Label className="text-sm text-gray-700">Address</Label>
                  <Input defaultValue="Keizersgracht 123, 1015 CJ Amsterdam" className="mt-1" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Pricing & Margins</h2>
                  <p className="text-sm text-gray-600">Configure default pricing settings</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm text-gray-700">Default Profit Margin (%)</Label>
                    <Input
                      type="number"
                      value={defaultMargin}
                      onChange={(e) => setDefaultMargin(Number.parseFloat(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Applied to all new cost calculations</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Standard Labor Rate (€/hour)</Label>
                    <Input
                      type="number"
                      value={laborRate}
                      onChange={(e) => setLaborRate(Number.parseFloat(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Default hourly rate for labor costs</p>
                  </div>
                </div>

                <div>
                  <Label className="text-sm text-gray-700">Currency</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Margin Guidelines by Project Type</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Residential Projects</span>
                      <span className="font-semibold text-gray-900">20-25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Commercial Projects</span>
                      <span className="font-semibold text-gray-900">25-30%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Hospitality Projects</span>
                      <span className="font-semibold text-gray-900">28-35%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Invoice Settings</h2>
                  <p className="text-sm text-gray-600">Configure invoice preferences</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm text-gray-700">Invoice Prefix</Label>
                  <Input defaultValue="INV-" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm text-gray-700">Next Invoice Number</Label>
                  <Input defaultValue="2024001" className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm text-gray-700">Payment Terms (days)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-gray-700">VAT Rate (%)</Label>
                  <Input defaultValue="21" className="mt-1" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                  <p className="text-sm text-gray-600">Manage notification preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Project Updates</p>
                    <p className="text-xs text-gray-600">Get notified about project status changes</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Low Stock Alerts</p>
                    <p className="text-xs text-gray-600">Alert when materials are running low</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Payment Reminders</p>
                    <p className="text-xs text-gray-600">Remind about upcoming payment deadlines</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
