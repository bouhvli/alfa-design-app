"use client"

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
import { ReactNode } from "react"

interface UniversalDialogProps {
    // Button props
    buttonText: string
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    buttonSize?: "default" | "sm" | "lg" | "icon"
    buttonClassName?: string

    // Dialog content props
    dialogTitle: string
    dialogDescription?: string
    dialogSize?: "sm" | "md" | "lg" | "xl"

    // Form configuration
    showForm?: boolean
    formFields?: {
        id: string
        label: string
        type?: "text" | "email" | "password" | "number" | "tel" | "url"
        defaultValue?: string
        placeholder?: string
        required?: boolean
    }[]

    // Action configuration
    onSubmit?: (formData: Record<string, string>) => void
    onCancel?: () => void
    submitButtonText?: string
    cancelButtonText?: string
    showCancelButton?: boolean

    // Custom content
    customContent?: ReactNode
    children?: ReactNode
}

export function UniversalDialog({
    buttonText,
    buttonVariant = "default",
    buttonSize = "default",
    buttonClassName = "",
    dialogTitle,
    dialogDescription,
    dialogSize = "md",
    showForm = false,
    formFields = [],
    onSubmit,
    onCancel,
    submitButtonText = "Save changes",
    cancelButtonText = "Cancel",
    showCancelButton = true,
    customContent,
    children
}: UniversalDialogProps) {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!onSubmit) return

        const formData = new FormData(event.currentTarget)
        const data: Record<string, string> = {}

        formFields.forEach(field => {
            data[field.id] = formData.get(field.id) as string
        })

        onSubmit(data)
    }

    const getDialogSize = () => {
        const sizes = {
            sm: "sm:max-w-[325px]",
            md: "sm:max-w-[425px]",
            lg: "sm:max-w-[625px]",
            xl: "sm:max-w-[825px]"
        }
        return sizes[dialogSize]
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={buttonVariant}
                    size={buttonSize}
                    className={buttonClassName}
                >
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className={getDialogSize()}>
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    {dialogDescription && (
                        <DialogDescription>{dialogDescription}</DialogDescription>
                    )}
                </DialogHeader>

                {/* Custom content takes precedence */}
                {customContent && customContent}

                {/* Children content */}
                {children && children}

                {/* Form content */}
                {showForm && formFields.length > 0 && (
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            {formFields.map((field) => (
                                <div key={field.id} className="grid gap-3">
                                    <Label htmlFor={field.id}>{field.label}</Label>
                                    <Input
                                        id={field.id}
                                        name={field.id}
                                        type={field.type || "text"}
                                        defaultValue={field.defaultValue}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                </div>
                            ))}
                        </div>

                        <DialogFooter>
                            {showCancelButton && (
                                <DialogClose asChild>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={onCancel}
                                    >
                                        {cancelButtonText}
                                    </Button>
                                </DialogClose>
                            )}
                            <Button type="submit">{submitButtonText}</Button>
                        </DialogFooter>
                    </form>
                )}

                {/* Simple dialog without form */}
                {!showForm && !customContent && !children && (
                    <DialogFooter>
                        {showCancelButton && (
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onCancel}
                                >
                                    {cancelButtonText}
                                </Button>
                            </DialogClose>
                        )}
                        <DialogClose asChild>
                            <Button type="button">Close</Button>
                        </DialogClose>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    )
}