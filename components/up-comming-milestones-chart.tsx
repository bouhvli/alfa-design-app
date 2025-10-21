"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar, Clock, AlertTriangle, CheckCircle2, TrendingUp, Target, Users, BarChart3, Lightbulb, Zap, User, PiggyBank, LoaderCircle } from "lucide-react"

const milestoneData = [
    {
        project: "Riverfront Apartment",
        milestone: "Final Delivery",
        date: "Dec 15, 2023",
        daysLeft: 3,
        status: "on-track" as const,
        priority: "high" as const,
        client: "Sarah Johnson",
        budget: "€85,000",
        progress: 95,
        riskFactors: ["Client satisfaction: 92%", "Budget adherence: 98%"],
        impact: "High - Final payment of €25,000 due"
    },
    {
        project: "Office Renovation",
        milestone: "Client Review",
        date: "Dec 18, 2023",
        daysLeft: 6,
        status: "at-risk" as const,
        priority: "critical" as const,
        client: "TechCorp Inc.",
        budget: "€120,000",
        progress: 65,
        riskFactors: ["Material delays", "Client availability uncertain"],
        impact: "Medium - Project timeline at risk"
    },
    {
        project: "Luxury Villa",
        milestone: "Material Selection",
        date: "Dec 20, 2023",
        daysLeft: 8,
        status: "on-track" as const,
        priority: "medium" as const,
        client: "Robert Chen",
        budget: "€250,000",
        progress: 30,
        riskFactors: ["Premium material sourcing", "Custom fabrication lead times"],
        impact: "Low - Early stage decision point"
    },
    {
        project: "Boutique Hotel",
        milestone: "Design Approval",
        date: "Dec 22, 2023",
        daysLeft: 10,
        status: "delayed" as const,
        priority: "high" as const,
        client: "Grand Hotels Group",
        budget: "€180,000",
        progress: 45,
        riskFactors: ["Stakeholder alignment needed", "Regulatory compliance pending"],
        impact: "High - Contract renewal dependent"
    }
]

export function UpcomingMilestonesChart() {
    const totalMilestones = milestoneData.length
    const onTrackMilestones = milestoneData.filter(m => m.status === 'on-track').length
    const atRiskMilestones = milestoneData.filter(m => m.status === 'at-risk' || m.status === 'delayed').length
    const completionRate = Math.round((onTrackMilestones / totalMilestones) * 100)

    const highPriorityCount = milestoneData.filter(m => m.priority === 'high' || m.priority === 'critical').length
    const totalBudgetAtStake = milestoneData.reduce((sum, m) => {
        const budget = parseInt(m.budget.replace('€', '').replace(',', ''))
        return sum + budget
    }, 0)

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'on-track': return <CheckCircle2 className="h-4 w-4 text-success" />
            case 'at-risk': return <AlertTriangle className="h-4 w-4 text-yellow-500" />
            case 'delayed': return <Clock className="h-4 w-4 text-red-500" />
            default: return <Calendar className="h-4 w-4 text-gray-500" />
        }
    }

    const getPriorityBadge = (priority: string) => {
        const styles = {
            critical: "bg-red-100 text-red-800 border-red-200",
            high: "bg-orange-100 text-orange-800 border-orange-200",
            medium: "bg-blue-100 text-blue-800 border-blue-200",
            low: "bg-gray-100 text-gray-800 border-gray-200"
        }
        return `px-2 py-1 rounded-full text-xs font-medium border ${styles[priority as keyof typeof styles]}`
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium flex items-center gap-2">
                        Project Milestones Intelligence
                    </CardTitle>
                </div>
                <CardDescription>Upcoming Milestones with strategic insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Milestones List with Enhanced Details */}
                <div className="flex flex-row flex-wrap gap-4 w-full">
                    {milestoneData.map((milestone, index) => (
                        <div
                            key={milestone.project}
                            className="basis-[calc(50%-0.5rem)] p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold text-gray-900">{milestone.project}</h4>
                                        <span className={getPriorityBadge(milestone.priority)}>
                                            {milestone.priority.toUpperCase()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{milestone.milestone}</p>

                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                        <span className="flex flex-row align-middle justify-center gap-2"><User className="w-4 h-4" /> {milestone.client}</span>
                                        <span className="flex flex-row gap-2"><PiggyBank className="w-4 h-4" /> {milestone.budget}</span>
                                        <span className="flex flex-row gap-2"><LoaderCircle className="w-4 h-4" /> {milestone.progress}% complete</span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="flex items-center gap-1 justify-end mb-1">
                                        {getStatusIcon(milestone.status)}
                                        <span className={`font-medium text-sm ${milestone.status === 'on-track' ? 'text-success' :
                                                milestone.status === 'at-risk' ? 'text-yellow-600' : 'text-red-600'
                                            }`}>
                                            {milestone.status.replace('-', ' ').toUpperCase()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">{milestone.date}</p>
                                    <p className="text-xs text-gray-400">{milestone.daysLeft} days left</p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-600 mb-1">
                                    <span>Project Progress</span>
                                    <span>{milestone.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${milestone.status === 'on-track' ? 'bg-success' :
                                                milestone.status === 'at-risk' ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}
                                        style={{ width: `${milestone.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Risk Factors & Impact */}
                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <div className="font-medium text-gray-700 mb-1 flex items-center gap-2">
                                        <AlertTriangle className="h-4 w-4" />
                                        Risk Factors:
                                    </div>
                                    <ul className="text-gray-600 space-y-1">
                                        {milestone.riskFactors.map((risk, i) => (
                                            <li key={i}>• {risk}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-700 mb-1 flex items-center gap-2">
                                        <Zap className="h-4 w-4" />
                                        Business Impact:
                                    </div>
                                    <p className="text-gray-600">{milestone.impact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-between gap-4">
                    {/* Strategic Overview Panel */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200 w-full">
                        <h4 className="font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            Milestone Intelligence Dashboard
                        </h4>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">On Track Rate:</span>
                                    <span className="font-semibold text-green-700">{completionRate}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">High Priority Items:</span>
                                    <span className="font-semibold text-orange-700">{highPriorityCount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Total Budget at Stake:</span>
                                    <span className="font-semibold text-gray-900">€{(totalBudgetAtStake / 1000).toFixed(0)}K</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">At Risk Projects:</span>
                                    <span className="font-semibold text-red-700">{atRiskMilestones}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Avg. Days to Deadline:</span>
                                    <span className="font-semibold text-blue-700">
                                        {Math.round(milestoneData.reduce((sum, m) => sum + m.daysLeft, 0) / milestoneData.length)}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Client Satisfaction:</span>
                                    <span className="font-semibold text-green-700">89% avg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actionable Recommendations */}
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 w-full">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-amber-600" />
                            Critical Actions Required
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                            <li>• <strong>Immediate attention needed</strong> for Office Renovation client review</li>
                            <li>• <strong>Escalate stakeholder communication</strong> for Boutique Hotel approval</li>
                            <li>• <strong>Prepare delivery team</strong> for Riverfront Apartment final handover</li>
                            <li>• <strong>Schedule material supplier meetings</strong> for Luxury Villa selections</li>
                        </ul>
                    </div>
                </div>
                {/* Quick Status Summary */}
                {/* <div className="grid grid-cols-4 gap-3 pt-3 border-t">
                    <div className="text-center">
                        <div className="text-xl font-bold text-green-600">{onTrackMilestones}</div>
                        <div className="text-xs text-gray-600">On Track</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold text-yellow-600">
                            {milestoneData.filter(m => m.status === 'at-risk').length}
                        </div>
                        <div className="text-xs text-gray-600">At Risk</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold text-red-600">
                            {milestoneData.filter(m => m.status === 'delayed').length}
                        </div>
                        <div className="text-xs text-gray-600">Delayed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{totalMilestones}</div>
                        <div className="text-xs text-gray-600">Total</div>
                    </div>
                </div> */}
            </CardContent>
        </Card>
    )
}