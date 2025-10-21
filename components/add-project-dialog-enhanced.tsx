"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Calendar, Building, User, Target, Clock, Plus } from "lucide-react"

export function AddProjectDialogEnhanced() {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        projectName: "",
        category: "",
        clientName: "",
        clientType: "",
        startDate: "",
        endDate: "",
        status: "Planning",
        profitMargin: ""
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Show toast message
        toast({
            title: "Feature Under Construction",
            description: "The project creation feature is currently being developed.",
            variant: "default",
        })

        // Log the form data for debugging
        console.log("Project Data:", formData)
    }

    const categories = [
        "Residential",
        "Commercial",
        "Hospitality",
        "Healthcare",
        "Educational",
        "Industrial",
        "Retail",
        "Office",
        "Mixed-Use"
    ]

    const clientTypes = [
        "Individual",
        "Company",
        "Government",
        "Non-Profit"
    ]

    const statusOptions = [
        "Planning",
        "In Progress",
        "On Hold",
        "Completed",
        "Cancelled"
    ]

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        Add New Project
                    </DialogTitle>
                    <DialogDescription>
                        Create a new project with all the necessary details. Fields marked with * are required.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Information Section */}
                    <div className="space-y-4">

                        <div className="grid grid-cols-1 gap-4">
                            {/* Project Name */}
                            <div className="grid gap-2">
                                <Label htmlFor="projectName" className="text-sm font-medium">
                                    Project Name *
                                </Label>
                                <Input
                                    id="projectName"
                                    value={formData.projectName}
                                    onChange={(e) => handleInputChange("projectName", e.target.value)}
                                    placeholder="Enter project name"
                                    className="h-10"
                                    required
                                />
                            </div>

                            {/* Category & Status Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="category" className="text-sm font-medium">
                                        Category *
                                    </Label>
                                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="status" className="text-sm font-medium">
                                        Status
                                    </Label>
                                    <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statusOptions.map((status) => (
                                                <SelectItem key={status} value={status}>
                                                    {status}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Information Section */}
                    <div className="space-y-4">

                        <div className="grid grid-cols-1 gap-4">
                            {/* Client Name */}
                            <div className="grid gap-2">
                                <Label htmlFor="clientName" className="text-sm font-medium">
                                    Client Name *
                                </Label>
                                <Input
                                    id="clientName"
                                    value={formData.clientName}
                                    onChange={(e) => handleInputChange("clientName", e.target.value)}
                                    placeholder="Enter client name"
                                    className="h-10"
                                    required
                                />
                            </div>

                            {/* Client Type */}
                            <div className="grid gap-2">
                                <Label htmlFor="clientType" className="text-sm font-medium">
                                    Client Type *
                                </Label>
                                <Select value={formData.clientType} onValueChange={(value) => handleInputChange("clientType", value)}>
                                    <SelectTrigger className="h-10 w-full">
                                        <SelectValue placeholder="Select client type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {clientTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Timeline & Financial Section */}
                    <div className="space-y-4">

                        <div className="grid grid-cols-1 gap-4">
                            {/* Date Range */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="startDate" className="text-sm font-medium">
                                        Start Date *
                                    </Label>
                                    <Input
                                        id="startDate"
                                        type="date"
                                        value={formData.startDate}
                                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                                        className="h-10"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="endDate" className="text-sm font-medium">
                                        End Date *
                                    </Label>
                                    <Input
                                        id="endDate"
                                        type="date"
                                        value={formData.endDate}
                                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                                        className="h-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Profit Margin */}
                            <div className="grid gap-2">
                                <Label htmlFor="profitMargin" className="text-sm font-medium">
                                    Profit Margin (%) *
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="profitMargin"
                                        type="number"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        value={formData.profitMargin}
                                        onChange={(e) => handleInputChange("profitMargin", e.target.value)}
                                        placeholder="0.0"
                                        className="h-10 pr-12"
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <span className="text-gray-500 text-sm">%</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Enter the expected profit margin percentage for this project
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <DialogFooter className="gap-3 pt-4 border-t">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 sm:flex-none"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            className="flex-1 sm:flex-none"
                        >
                            Save Project
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}