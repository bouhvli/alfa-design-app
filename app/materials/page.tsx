"use client"

import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Package, TrendingUp, AlertCircle, SquareStack } from "lucide-react"

export default function MaterialsPage() {
  const materials = [
    {
      id: 1,
      name: "Oak Flooring Premium",
      category: "Flooring",
      supplier: "Wood Masters BV",
      unit: "m²",
      price: 85.5,
      stock: 245,
      minStock: 100,
      lastOrdered: "2024-01-10",
    },
    {
      id: 2,
      name: "Ceramic Tiles White",
      category: "Tiles",
      supplier: "Tile World",
      unit: "m²",
      price: 42.0,
      stock: 180,
      minStock: 150,
      lastOrdered: "2024-01-08",
    },
    {
      id: 3,
      name: "Interior Paint Matte",
      category: "Paint",
      supplier: "Color Pro",
      unit: "L",
      price: 28.5,
      stock: 65,
      minStock: 80,
      lastOrdered: "2024-01-05",
    },
    {
      id: 4,
      name: "LED Ceiling Lights",
      category: "Lighting",
      supplier: "Light Solutions",
      unit: "pcs",
      price: 125.0,
      stock: 45,
      minStock: 30,
      lastOrdered: "2024-01-12",
    },
    {
      id: 5,
      name: "Marble Countertop",
      category: "Stone",
      supplier: "Stone Gallery",
      unit: "m²",
      price: 320.0,
      stock: 28,
      minStock: 20,
      lastOrdered: "2024-01-14",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Materials Catalog</h1>
              <p className="text-gray-600 mt-1">Manage your materials inventory and pricing</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Material
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Materials</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <SquareStack className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Low Stock Items</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">€142k</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search materials..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="flooring">Flooring</SelectItem>
                  <SelectItem value="tiles">Tiles</SelectItem>
                  <SelectItem value="paint">Paint</SelectItem>
                  <SelectItem value="lighting">Lighting</SelectItem>
                  <SelectItem value="stone">Stone</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-stock">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-stock">All Stock</SelectItem>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Material</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Supplier</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Unit</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Stock</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material) => {
                    const stockStatus = material.stock < material.minStock ? "low" : "good"
                    return (
                      <tr key={material.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Package className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{material.name}</p>
                              <p className="text-xs text-gray-500">Last ordered: {material.lastOrdered}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {material.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">{material.supplier}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{material.unit}</td>
                        <td className="py-4 px-4 text-sm font-semibold text-gray-900">€{material.price.toFixed(2)}</td>
                        <td className="py-4 px-4">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {material.stock} {material.unit}
                            </p>
                            <p className="text-xs text-gray-500">Min: {material.minStock}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              stockStatus === "low" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-success"
                            }`}
                          >
                            {stockStatus === "low" ? "Low Stock" : "In Stock"}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              Order
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
