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
                <Button className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader className="px-1 sm:px-0">
                    <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
                        Add New Project
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base">
                        Create a new project with all the necessary details. Fields marked with * are required.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 px-1 sm:px-0">
                    {/* Project Information Section */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
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
                                    className="h-10 text-sm sm:text-base"
                                    required
                                />
                            </div>

                            {/* Category & Status Row */}
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="category" className="text-sm font-medium">
                                        Category *
                                    </Label>
                                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                                        <SelectTrigger className="h-10 w-full text-sm sm:text-base">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category} className="text-sm">
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
                                        <SelectTrigger className="h-10 w-full text-sm sm:text-base">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statusOptions.map((status) => (
                                                <SelectItem key={status} value={status} className="text-sm">
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
                    <div className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
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
                                    className="h-10 text-sm sm:text-base"
                                    required
                                />
                            </div>

                            {/* Client Type */}
                            <div className="grid gap-2">
                                <Label htmlFor="clientType" className="text-sm font-medium">
                                    Client Type *
                                </Label>
                                <Select value={formData.clientType} onValueChange={(value) => handleInputChange("clientType", value)}>
                                    <SelectTrigger className="h-10 w-full text-sm sm:text-base">
                                        <SelectValue placeholder="Select client type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {clientTypes.map((type) => (
                                            <SelectItem key={type} value={type} className="text-sm">
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Timeline & Financial Section */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
                            {/* Date Range */}
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="startDate" className="text-sm font-medium">
                                        Start Date *
                                    </Label>
                                    <Input
                                        id="startDate"
                                        type="date"
                                        value={formData.startDate}
                                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                                        className="h-10 text-sm sm:text-base"
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
                                        className="h-10 text-sm sm:text-base"
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
                                        className="h-10 pr-12 text-sm sm:text-base"
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
                    <DialogFooter className="gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 sm:flex-none order-2 sm:order-1"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            className="flex-1 sm:flex-none order-1 sm:order-2"
                        >
                            Save Project
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}