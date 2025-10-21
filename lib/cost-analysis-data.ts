export interface CostItem {
    id: string;
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

export const costAnalysisData: CostItem[] = [
    {
        id: "material",
        title: "Material Costs",
        value: "€156,800",
        percentage: 55,
        description: "of total costs",
        icon: "PieChart",
        color: "bg-blue-500",
    },
    {
        id: "labor",
        title: "Labor Costs",
        value: "€98,400",
        percentage: 35,
        description: "of total costs",
        icon: "Users",
        color: "bg-success",
    },
    {
        id: "overhead",
        title: "Overhead",
        value: "€29,300",
        percentage: 10,
        description: "of total costs",
        icon: "AlertCircle",
        color: "bg-orange-500",
    },
    {
        id: "efficiency",
        title: "Cost Efficiency",
        value: "92%",
        percentage: 92,
        description: "vs. last month",
        trend: {
        value: "+5%",
        isPositive: true,
        },
        icon: "Target",
        color: "bg-primary",
    },
];
