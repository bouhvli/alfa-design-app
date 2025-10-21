"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, Calculator, Save, Anvil, HardHat } from "lucide-react";

// Define types for materials and labor items
type Material = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  total: number;
};

type LaborItem = {
  id: number;
  task: string;
  hours: number;
  hourlyRate: number;
  total: number;
};

export default function CostCalculationPage() {
  // Initialize state with empty arrays instead of initial items
  const [materials, setMaterials] = useState<Material[]>([]);
  const [laborItems, setLaborItems] = useState<LaborItem[]>([]);
  const [profitMargin, setProfitMargin] = useState(25);

  // State for the new material form
  const [newMaterial, setNewMaterial] = useState<Omit<Material, "id" | "total">>({
    name: "",
    quantity: 0,
    unit: "m²",
    pricePerUnit: 0,
  });

  // State for the new labor form
  const [newLabor, setNewLabor] = useState<Omit<LaborItem, "id" | "total">>({
    task: "",
    hours: 0,
    hourlyRate: 65, // Default hourly rate
  });

  // Function to add a new material from the form state
  const addMaterial = () => {
    if (newMaterial.name.trim() === "") return; // Prevent adding empty names

    const total = newMaterial.quantity * newMaterial.pricePerUnit;
    const material: Material = {
      id: Date.now(), // Use timestamp for unique ID
      ...newMaterial,
      total,
    };
    setMaterials([...materials, material]);

    // Reset the form state after adding
    setNewMaterial({
      name: "",
      quantity: 0,
      unit: "m²",
      pricePerUnit: 0,
    });
  };

  // Function to add a new labor item from the form state
  const addLaborItem = () => {
    if (newLabor.task.trim() === "") return; // Prevent adding empty tasks

    const total = newLabor.hours * newLabor.hourlyRate;
    const labor: LaborItem = {
      id: Date.now(), // Use timestamp for unique ID
      ...newLabor,
      total,
    };
    setLaborItems([...laborItems, labor]);

    // Reset the form state after adding
    setNewLabor({
      task: "",
      hours: 0,
      hourlyRate: 65,
    });
  };

  // Function to update an existing material
  const updateMaterial = (id: number, field: keyof Material, value: any) => {
    setMaterials(
      materials.map((m) => {
        if (m.id === id) {
          const updated = { ...m, [field]: value } as Material;
          updated.total = updated.quantity * updated.pricePerUnit;
          return updated;
        }
        return m;
      })
    );
  };

  // Function to update an existing labor item
  const updateLabor = (id: number, field: keyof LaborItem, value: any) => {
    setLaborItems(
      laborItems.map((l) => {
        if (l.id === id) {
          const updated = { ...l, [field]: value } as LaborItem;
          updated.total = updated.hours * updated.hourlyRate;
          return updated;
        }
        return l;
      })
    );
  };

  // Function to remove a material by ID
  const removeMaterial = (id: number) => {
    setMaterials(materials.filter((m) => m.id !== id));
  };

  // Function to remove a labor item by ID
  const removeLabor = (id: number) => {
    setLaborItems(laborItems.filter((l) => l.id !== id));
  };

  // Calculate totals
  const totalMaterials = materials.reduce((sum, m) => sum + m.total, 0);
  const totalLabor = laborItems.reduce((sum, l) => sum + l.total, 0);
  const subtotal = totalMaterials + totalLabor;
  const profitAmount = subtotal * (profitMargin / 100);
  const totalPrice = subtotal + profitAmount;

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
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    €{totalMaterials.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Anvil className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Labor Costs</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    €{totalLabor.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <HardHat className="w-6 h-6 text-success" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Price</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    €{totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* LEFT COLUMN - FORMS */}
            <div className="space-y-6">
              {/* Material Form */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Material</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label className="text-sm font-medium text-gray-700">Material Name *</Label>
                      <Input
                        value={newMaterial.name}
                        onChange={(e) =>
                          setNewMaterial({ ...newMaterial, name: e.target.value })
                        }
                        placeholder="e.g., Oak Flooring"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Unit</Label>
                      <Select
                        value={newMaterial.unit}
                        onValueChange={(value) =>
                          setNewMaterial({ ...newMaterial, unit: value })
                        }
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
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Quantity</Label>
                      <Input
                        type="number"
                        value={newMaterial.quantity}
                        onChange={(e) =>
                          setNewMaterial({
                            ...newMaterial,
                            quantity: Number.parseFloat(e.target.value) || 0,
                          })
                        }
                        className="mt-1"
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Price/Unit (€)</Label>
                      <Input
                        type="number"
                        value={newMaterial.pricePerUnit}
                        onChange={(e) =>
                          setNewMaterial({
                            ...newMaterial,
                            pricePerUnit: Number.parseFloat(e.target.value) || 0,
                          })
                        }
                        className="mt-1"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>

                  <Button onClick={addMaterial} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Material
                  </Button>
                </div>
              </Card>

              {/* Labor Form */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Labor</h2>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Task Description *</Label>
                    <Input
                      value={newLabor.task}
                      onChange={(e) =>
                        setNewLabor({ ...newLabor, task: e.target.value })
                      }
                      placeholder="e.g., Floor Installation"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Hours</Label>
                      <Input
                        type="number"
                        value={newLabor.hours}
                        onChange={(e) =>
                          setNewLabor({
                            ...newLabor,
                            hours: Number.parseFloat(e.target.value) || 0,
                          })
                        }
                        className="mt-1"
                        min="0"
                        step="0.5"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Rate (€/hr)</Label>
                      <Input
                        type="number"
                        value={newLabor.hourlyRate}
                        onChange={(e) =>
                          setNewLabor({
                            ...newLabor,
                            hourlyRate: Number.parseFloat(e.target.value) || 0,
                          })
                        }
                        className="mt-1"
                        min="0"
                        step="1"
                      />
                    </div>
                  </div>

                  <Button onClick={addLaborItem} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Labor
                  </Button>
                </div>
              </Card>
            </div>

            {/* RIGHT COLUMN - LISTS */}
            <div className="space-y-6">
              {/* Materials List */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Materials List</h2>
                  <span className="text-sm text-gray-500">{materials.length} items</span>
                </div>
                
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {materials.map((material) => (
                    <div key={material.id} className="p-3 border rounded-lg bg-white hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{material.name || "Unnamed Material"}</h4>
                          <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                            <span>{material.quantity} {material.unit}</span>
                            <span>@ €{material.pricePerUnit}/{material.unit}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">€{material.total.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeMaterial(material.id)}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <Label className="text-gray-500">Quantity</Label>
                          <Input
                            type="number"
                            value={material.quantity}
                            onChange={(e) =>
                              updateMaterial(material.id, "quantity", Number.parseFloat(e.target.value) || 0)
                            }
                            className="h-7 text-xs"
                            min="0"
                            step="0.1"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-500">Unit Price</Label>
                          <Input
                            type="number"
                            value={material.pricePerUnit}
                            onChange={(e) =>
                              updateMaterial(material.id, "pricePerUnit", Number.parseFloat(e.target.value) || 0)
                            }
                            className="h-7 text-xs"
                            min="0"
                            step="0.01"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-500">Unit</Label>
                          <Select
                            value={material.unit}
                            onValueChange={(value) => updateMaterial(material.id, "unit", value)}
                          >
                            <SelectTrigger className="h-7 text-xs">
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
                    </div>
                  ))}
                  
                  {materials.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Anvil className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                      <p>No materials added yet</p>
                      <p className="text-sm">Add materials using the form on the left</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Labor List */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Labor List</h2>
                  <span className="text-sm text-gray-500">{laborItems.length} tasks</span>
                </div>
                
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {laborItems.map((labor) => (
                    <div key={labor.id} className="p-3 border rounded-lg bg-white hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{labor.task || "Unnamed Task"}</h4>
                          <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                            <span>{labor.hours} hours</span>
                            <span>@ €{labor.hourlyRate}/hour</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">€{labor.total.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeLabor(labor.id)}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <Label className="text-gray-500">Hours</Label>
                          <Input
                            type="number"
                            value={labor.hours}
                            onChange={(e) =>
                              updateLabor(labor.id, "hours", Number.parseFloat(e.target.value) || 0)
                            }
                            className="h-7 text-xs"
                            min="0"
                            step="0.5"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-500">Hourly Rate</Label>
                          <Input
                            type="number"
                            value={labor.hourlyRate}
                            onChange={(e) =>
                              updateLabor(labor.id, "hourlyRate", Number.parseFloat(e.target.value) || 0)
                            }
                            className="h-7 text-xs"
                            min="0"
                            step="1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {laborItems.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <HardHat className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                      <p>No labor items added yet</p>
                      <p className="text-sm">Add labor tasks using the form on the left</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Price Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Material Costs</span>
                <span className="font-semibold text-gray-900">
                  €{totalMaterials.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Labor Costs</span>
                <span className="font-semibold text-gray-900">
                  €{totalLabor.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">
                  €{subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">Profit Margin</span>
                  <Input
                    type="number"
                    value={profitMargin}
                    onChange={(e) =>
                      setProfitMargin(Number.parseFloat(e.target.value) || 0)
                    }
                    className="w-20 h-8"
                    min="0"
                    max="100"
                  />
                  <span className="text-gray-600">%</span>
                </div>
                <span className="font-semibold text-primary">
                  €{profitAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-primary/10 px-4 rounded-lg border border-primary">
                <span className="text-lg font-semibold text-gray-900">
                  Total Client Price
                </span>
                <span className="text-2xl font-bold text-primary">
                  €{totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}