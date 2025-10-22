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
import { Plus, Trash2, Calculator, Save, Anvil, HardHat, Download, Copy } from "lucide-react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define types for materials and labor items
type Material = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  total: number;
  type: "material";
};

type LaborItem = {
  id: number;
  task: string;
  hours: number;
  hourlyRate: number;
  total: number;
  type: "labor";
};

type CostItem = Material | LaborItem;

export default function CostCalculationPage() {
  // Initialize state with empty arrays
  const [costItems, setCostItems] = useState<CostItem[]>([]);
  const [profitMargin, setProfitMargin] = useState(25);
  const [activeTab, setActiveTab] = useState<"materials" | "labor">("materials");

  // State for the new material form
  const [newMaterial, setNewMaterial] = useState<Omit<Material, "id" | "total" | "type">>({
    name: "",
    quantity: 0,
    unit: "m²",
    pricePerUnit: 0,
  });

  // State for the new labor form
  const [newLabor, setNewLabor] = useState<Omit<LaborItem, "id" | "total" | "type">>({
    task: "",
    hours: 0,
    hourlyRate: 65,
  });

  // Function to add a new material from the form state
  const addMaterial = () => {
    if (newMaterial.name.trim() === "") return;

    const total = newMaterial.quantity * newMaterial.pricePerUnit;
    const material: Material = {
      id: Date.now(),
      ...newMaterial,
      total,
      type: "material",
    };
    setCostItems([...costItems, material]);

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
    if (newLabor.task.trim() === "") return;

    const total = newLabor.hours * newLabor.hourlyRate;
    const labor: LaborItem = {
      id: Date.now(),
      ...newLabor,
      total,
      type: "labor",
    };
    setCostItems([...costItems, labor]);

    // Reset the form state after adding
    setNewLabor({
      task: "",
      hours: 0,
      hourlyRate: 65,
    });
  };

  // Function to remove an item by ID
  const removeItem = (id: number) => {
    setCostItems(costItems.filter((item) => item.id !== id));
  };

  // Function to clear all items
  const clearAllItems = () => {
    setCostItems([]);
  };

  // Function to copy total price to clipboard
  const copyTotalPrice = () => {
    navigator.clipboard.writeText(`€${totalPrice.toFixed(2)}`);
  };

  // Calculate totals
  const materials = costItems.filter((item): item is Material => item.type === "material");
  const laborItems = costItems.filter((item): item is LaborItem => item.type === "labor");

  const totalMaterials = materials.reduce((sum, m) => sum + m.total, 0);
  const totalLabor = laborItems.reduce((sum, l) => sum + l.total, 0);
  const subtotal = totalMaterials + totalLabor;
  const profitAmount = subtotal * (profitMargin / 100);
  const totalPrice = subtotal + profitAmount;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cost Calculator</h1>
              <p className="text-gray-600 mt-1">Quickly calculate project costs and generate quotes</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={clearAllItems}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Save Quote
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT COLUMN - QUICK SUMMARY & FORMS */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-primary/10 border-primary">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-primary font-medium">Materials</p>
                      <p className="text-lg font-bold text-primary mt-1">
                        €{totalMaterials.toFixed(2)}
                      </p>
                      <p className="text-xs text-primary">{materials.length} items</p>
                    </div>
                    <Anvil className="w-8 h-8 text-primary" />
                  </div>
                </Card>

                <Card className="p-4 bg-green-50 border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-success font-medium">Labor</p>
                      <p className="text-lg font-bold text-success mt-1">
                        €{totalLabor.toFixed(2)}
                      </p>
                      <p className="text-xs text-success">{laborItems.length} tasks</p>
                    </div>
                    <HardHat className="w-8 h-8 text-success" />
                  </div>
                </Card>
              </div>

              {/* Tabbed Forms */}
              <Card className="p-6">
                <div className="flex border-b">
                  <button
                    className={`flex-1 py-2 text-sm font-medium ${activeTab === "materials"
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-500 hover:text-gray-700"
                      }`}
                    onClick={() => setActiveTab("materials")}
                  >
                    Add Material
                  </button>
                  <button
                    className={`flex-1 py-2 text-sm font-medium ${activeTab === "labor"
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                      }`}
                    onClick={() => setActiveTab("labor")}
                  >
                    Add Labor
                  </button>
                </div>

                {activeTab === "materials" ? (
                  <div className="space-y-4">
                    <div>
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

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label className="text-sm font-medium text-gray-700">Unit</Label>
                        <Select
                          value={newMaterial.unit}
                          onValueChange={(value) =>
                            setNewMaterial({ ...newMaterial, unit: value })
                          }
                        >
                          <SelectTrigger className="mt-1 w-full">
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
                        <Label className="text-sm font-medium text-gray-700">Qty</Label>
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
                        <Label className="text-sm font-medium text-gray-700">Price/Unit</Label>
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
                ) : (
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

                    <div className="grid grid-cols-2 gap-3">
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

                    <Button onClick={addLaborItem} className="w-full bg-success text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Labor
                    </Button>
                  </div>
                )}
              </Card>

              {/* Profit Margin Control */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Profit Settings</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Profit Margin</Label>
                    <div className="flex items-center gap-3 mt-2 w-full">
                      <Input
                        type="number"
                        value={profitMargin}
                        onChange={(e) =>
                          setProfitMargin(Number.parseFloat(e.target.value) || 0)
                        }
                        className="flex-1"
                        min="0"
                        max="100"
                      />
                      <span className="text-gray-600">%</span>
                    </div>
                    <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-success rounded-full transition-all duration-300"
                        style={{ width: `${profitMargin}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-center p-3 bg-success/10 rounded-lg border border-success/10">
                    <p className="text-sm text-success font-medium">Profit Amount</p>
                    <p className="text-xl font-bold text-success">€{profitAmount.toFixed(2)}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* RIGHT COLUMN - ITEMS LIST & FINAL QUOTE */}
            <div className="lg:col-span-2 space-y-6">
              {/* Items List */}
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Cost Breakdown</h2>
                  <span className="text-sm text-gray-500">
                    {costItems.length} total items
                  </span>
                </div>

                <div className="rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Description</TableHead>
                        <TableHead className="w-[100px]">Type</TableHead>
                        <TableHead className="w-[100px] text-right">Quantity</TableHead>
                        <TableHead className="w-[120px] text-right">Unit Price</TableHead>
                        <TableHead className="w-[120px] text-right">Total</TableHead>
                        <TableHead className="w-[80px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {costItems.map((item) => (
                        <TableRow key={item.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            {item.type === "material" ? item.name : item.task}
                          </TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.type === "material"
                                ? "bg-primary/10 text-primary"
                                : "bg-success/10 text-success"
                              }`}>
                              {item.type === "material" ? "Material" : "Labor"}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            {item.type === "material" ? (
                              <span className="text-sm text-gray-600">
                                {item.quantity} {item.unit}
                              </span>
                            ) : (
                              <span className="text-sm text-gray-600">
                                {item.hours} hours
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="text-sm text-gray-600">
                              {item.type === "material" ? (
                                <>€{item.pricePerUnit}/{item.unit}</>
                              ) : (
                                <>€{item.hourlyRate}/hour</>
                              )}
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            <span className={item.type === "material" ? "text-primary" : "text-success"}>
                              €{item.total.toFixed(2)}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    {costItems.length === 0 && (
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-12 text-gray-500">
                            <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p className="text-lg font-medium mb-2">No cost items added yet</p>
                            <p className="text-sm">Start by adding materials or labor tasks</p>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    )}
                    {costItems.length > 0 && (
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={4} className="font-medium">Subtotal</TableCell>
                          <TableCell className="text-right font-bold text-gray-900">
                            €{subtotal.toFixed(2)}
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableFooter>
                    )}
                  </Table>
                </div>
              </Card>

              {/* Final Quote */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-success/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Final Quote</h2>
                  <Button variant="outline" size="sm" onClick={copyTotalPrice}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Total
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material Costs</span>
                        <span className="font-semibold text-gray-900">
                          €{totalMaterials.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Labor Costs</span>
                        <span className="font-semibold text-gray-900">
                          €{totalLabor.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-gray-700 font-medium">Subtotal</span>
                        <span className="font-semibold text-gray-900">
                          €{subtotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-3 row-span-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Profit ({profitMargin}%)</span>
                        <span className="font-semibold text-success">
                          €{profitAmount.toFixed(2)}
                        </span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between items-center py-2 rounded-lg">
                          <span className="text-lg font-semibold text-gray-900">
                            Total Price
                          </span>
                          <span className="text-2xl font-bold text-primary">
                            €{totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Save Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}