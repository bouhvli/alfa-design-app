"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, Calculator, Save, LayoutList, Anvil, HardHat } from "lucide-react"

export default function CostCalculationPage() {
  const [materials, setMaterials] = useState([{ id: 1, name: "", quantity: 0, unit: "m²", pricePerUnit: 0, total: 0 }])
  const [laborItems, setLaborItems] = useState([{ id: 1, task: "", hours: 0, hourlyRate: 65, total: 0 }])
  const [profitMargin, setProfitMargin] = useState(25)

  const addMaterial = () => {
    setMaterials([
      ...materials,
      {
        id: Date.now(),
        name: "",
        quantity: 0,
        unit: "m²",
        pricePerUnit: 0,
        total: 0,
      },
    ])
  }

  const addLaborItem = () => {
    setLaborItems([
      ...laborItems,
      {
        id: Date.now(),
        task: "",
        hours: 0,
        hourlyRate: 65,
        total: 0,
      },
    ])
  }

  const updateMaterial = (id: number, field: string, value: any) => {
    setMaterials(
      materials.map((m) => {
        if (m.id === id) {
          const updated = { ...m, [field]: value }
          updated.total = updated.quantity * updated.pricePerUnit
          return updated
        }
        return m
      }),
    )
  }

  const updateLabor = (id: number, field: string, value: any) => {
    setLaborItems(
      laborItems.map((l) => {
        if (l.id === id) {
          const updated = { ...l, [field]: value }
          updated.total = updated.hours * updated.hourlyRate
          return updated
        }
        return l
      }),
    )
  }

  const removeMaterial = (id: number) => {
    setMaterials(materials.filter((m) => m.id !== id))
  }

  const removeLabor = (id: number) => {
    setLaborItems(laborItems.filter((l) => l.id !== id))
  }

  const totalMaterials = materials.reduce((sum, m) => sum + m.total, 0)
  const totalLabor = laborItems.reduce((sum, l) => sum + l.total, 0)
  const subtotal = totalMaterials + totalLabor
  const profitAmount = subtotal * (profitMargin / 100)
  const totalPrice = subtotal + profitAmount

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cost Calculation</h1>
              <p className="text-gray-600 mt-1">Calculate project costs with materials and labor</p>
            </div>
            <Button>
              <Save className="w-4 h-4 mr-2" />
              Save Calculation
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Material Costs</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">€{totalMaterials.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Anvil className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Labor Costs</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">€{totalLabor.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HardHat className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Price</p>
                  <p className="text-2xl font-bold text-primary-foreground mt-1">€{totalPrice.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Materials</h2>
                <Button onClick={addMaterial} size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Material
                </Button>
              </div>

              <div className="space-y-4">
                {materials.map((material) => (
                  <div key={material.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs text-gray-600">Material Name</Label>
                        <Input
                          value={material.name}
                          onChange={(e) => updateMaterial(material.id, "name", e.target.value)}
                          placeholder="e.g., Oak Flooring"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-600">Unit</Label>
                        <Select
                          value={material.unit}
                          onValueChange={(value) => updateMaterial(material.id, "unit", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="m²">m²</SelectItem>
                            <SelectItem value="m">m</SelectItem>
                            <SelectItem value="pcs">pcs</SelectItem>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="L">L</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label className="text-xs text-gray-600">Quantity</Label>
                        <Input
                          type="number"
                          value={material.quantity}
                          onChange={(e) =>
                            updateMaterial(material.id, "quantity", Number.parseFloat(e.target.value) || 0)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-600">Price per Unit (€)</Label>
                        <Input
                          type="number"
                          value={material.pricePerUnit}
                          onChange={(e) =>
                            updateMaterial(material.id, "pricePerUnit", Number.parseFloat(e.target.value) || 0)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-600">Total (€)</Label>
                        <div className="mt-1 h-10 px-3 bg-white border rounded-md flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{material.total.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeMaterial(material.id)}
                            className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Labor</h2>
                <Button onClick={addLaborItem} size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Labor
                </Button>
              </div>

              <div className="space-y-4">
                {laborItems.map((labor) => (
                  <div key={labor.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                    <div>
                      <Label className="text-xs text-gray-600">Task Description</Label>
                      <Input
                        value={labor.task}
                        onChange={(e) => updateLabor(labor.id, "task", e.target.value)}
                        placeholder="e.g., Floor Installation"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label className="text-xs text-gray-600">Hours</Label>
                        <Input
                          type="number"
                          value={labor.hours}
                          onChange={(e) => updateLabor(labor.id, "hours", Number.parseFloat(e.target.value) || 0)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-600">Rate (€/hr)</Label>
                        <Input
                          type="number"
                          value={labor.hourlyRate}
                          onChange={(e) => updateLabor(labor.id, "hourlyRate", Number.parseFloat(e.target.value) || 0)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-600">Total (€)</Label>
                        <div className="mt-1 h-10 px-3 bg-white border rounded-md flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{labor.total.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeLabor(labor.id)}
                            className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Price Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Material Costs</span>
                <span className="font-semibold text-gray-900">€{totalMaterials.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Labor Costs</span>
                <span className="font-semibold text-gray-900">€{totalLabor.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">Profit Margin</span>
                  <Input
                    type="number"
                    value={profitMargin}
                    onChange={(e) => setProfitMargin(Number.parseFloat(e.target.value) || 0)}
                    className="w-20 h-8"
                  />
                  <span className="text-gray-600">%</span>
                </div>
                <span className="font-semibold text-primary-foreground">€{profitAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-primary/10 px-4 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">Total Client Price</span>
                <span className="text-2xl font-bold text-primary-foreground">€{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
