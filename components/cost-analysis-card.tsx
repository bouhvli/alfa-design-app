"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    PieChart,
    Users,
    AlertCircle,
    Target
} from "lucide-react"

interface CostAnalysisCardProps {
    title: string;
    value: string;
    percentage: number;
    description: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    icon: string;
    color: string;
}

const iconMap = {
    PieChart,
    Users,
    AlertCircle,
    Target
}

export function CostAnalysisCard({
    title,
    value,
    percentage,
    description,
    trend,
    icon,
    color
}: CostAnalysisCardProps) {
    const IconComponent = iconMap[icon as keyof typeof iconMap]

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <p className={`mt-1 text-xs ${trend ? 'text-success' : 'text-primary-foreground'}`}>
                    {trend ? (
                        <>
                            <span className="font-medium">{trend.value}</span> {description}
                        </>
                    ) : (
                        <>
                            <span className="font-medium">{percentage}%</span> {description}
                        </>
                    )}
                </p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                        className={`h-full ${color} transition-all duration-1000`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </CardContent>
        </Card>
    )
}