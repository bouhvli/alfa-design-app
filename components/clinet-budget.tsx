"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Home, Building, Castle, Crown, TrendingUp, Target, Lightbulb, BarChart3 } from "lucide-react"

const budgetData = [
    {
        range: "€0-€50K",
        projects: 4,
        percentage: 33,
        color: "bg-blue-500",
        icon: Home,
        profitMargin: 28,
        clientSatisfaction: 92,
        avgDuration: 21,
        insight: "Quick turnaround, high satisfaction"
    },
    {
        range: "€50K-€100K",
        projects: 5,
        percentage: 42,
        color: "bg-success",
        icon: Building,
        profitMargin: 35,
        clientSatisfaction: 88,
        avgDuration: 42,
        insight: "Sweet spot for profitability"
    },
    {
        range: "€100K-€200K",
        projects: 2,
        percentage: 17,
        color: "bg-purple-500",
        icon: Castle,
        profitMargin: 32,
        clientSatisfaction: 85,
        avgDuration: 84,
        insight: "High value, longer timelines"
    },
    {
        range: "€200K+",
        projects: 1,
        percentage: 8,
        color: "bg-amber-500",
        icon: Crown,
        profitMargin: 38,
        clientSatisfaction: 95,
        avgDuration: 126,
        insight: "Premium margins, elite clients"
    },
]

export function ClientBudgetChart() {
    const totalProjects = budgetData.reduce((sum, item) => sum + item.projects, 0)

    // Business intelligence calculations
    const mostProfitableRange = budgetData.reduce((max, item) =>
        item.profitMargin > max.profitMargin ? item : max
    )

    const highestSatisfaction = budgetData.reduce((max, item) =>
        item.clientSatisfaction > max.clientSatisfaction ? item : max
    )

    const fastestCompletion = budgetData.reduce((min, item) =>
        item.avgDuration < min.avgDuration ? item : min
    )

    const totalRevenueEstimate = budgetData.reduce((sum, item) => {
        const rangeMidpoint = getRangeMidpoint(item.range)
        return sum + (rangeMidpoint * item.projects)
    }, 0)

    function getRangeMidpoint(range: string): number {
        const matches = range.match(/€([\d,]+)/g)
        if (!matches) return 0

        if (range.includes('+')) {
            return parseInt(matches[0].replace('€', '').replace('K', '')) * 1000 + 50000
        }

        const values = matches.map(m => parseInt(m.replace('€', '').replace('K', '')))
        return ((values[0] + values[1]) / 2) * 1000
    }
    return (
        <Card >
            <CardHeader>
                <CardTitle className="text-base font-medium">Client Budget Range</CardTitle>
                <CardDescription>Client budget allocated by project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Main Progress Visualization */}
                <div className="space-y-4">
                    {budgetData.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div key={item.range} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <IconComponent className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm font-medium text-gray-900">{item.range}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-medium text-gray-900">{item.projects}</span>
                                        <span className="text-xs text-gray-500 ml-1">projects</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${item.percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-gray-600 w-8">
                                        {item.percentage}%
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Actionable Recommendations */}
                {/* borderTop: '1px solid #e5e7eb',
          paddingTop: '1rem */}
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 ">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-amber-600" />
                            Growth Opportunities
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                            <li>• <strong>Focus on €50K-€100K</strong> - Best balance of profit and volume</li>
                            <li>• <strong>Upsell €0-€50K clients</strong> - High satisfaction indicates trust</li>
                            <li>• <strong>Expand premium services</strong> - €200K+ projects deliver highest margins</li>
                            <li>• <strong>Optimize €100K-€200K timelines</strong> - Improve delivery efficiency</li>
                        </ul>
                    </div>
                </div>
                {/* Summary Stats */}
                {/* <div className="grid grid-cols-2 gap-4 pt-3 border-t">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
                        <div className="text-xs text-gray-600">Active Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                            {Math.max(...budgetData.map(d => d.profitMargin))}%
                        </div>
                        <div className="text-xs text-gray-600">Peak Margin</div>
                    </div>
                </div> */}
            </CardContent>
        </Card>
    )
}