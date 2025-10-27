"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar, Clock, AlertTriangle, CheckCircle2, TrendingUp, Target, Users, BarChart3, Lightbulb, Zap, User, PiggyBank, LoaderCircle, CalendarClock } from "lucide-react"

const milestoneData = [
    {
        project: "Riverfront Apartment",
        milestone: "Final Delivery",
        date: "Dec 15, 2025",
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
        date: "Dec 18, 2025",
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
        date: "Dec 20, 2025",
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
        date: "Dec 22, 2025",
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

    const getPriorityBadge = (priority: string, isMobile: boolean = false) => {
        const styles = {
            critical: "bg-red-100 text-red-800 border-red-200",
            high: "bg-orange-100 text-orange-800 border-orange-200",
            medium: "bg-blue-100 text-blue-800 border-blue-200",
            low: "bg-gray-100 text-gray-800 border-gray-200"
        }
        
        const displayText = isMobile ? priority.charAt(0).toUpperCase() : priority.toUpperCase()
        
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
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 w-full">
                    {milestoneData.map((milestone, index) => (
                        <div
                            key={milestone.project}
                            className="w-full sm:basis-[calc(50%-0.5rem)] p-3 md:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 bg-white min-h-0"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                            {milestone.project}
                                        </h4>
                                        <span className={getPriorityBadge(milestone.priority)}>
                                            <span className="hidden sm:inline">{milestone.priority.toUpperCase()}</span>
                                            <span className="sm:hidden">{milestone.priority.charAt(0).toUpperCase()}</span>
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{milestone.milestone}</p>

                                    {/* Desktop: Show with icons */}
                                    <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500 mb-2">
                                        <span className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            {milestone.client}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <PiggyBank className="w-4 h-4" />
                                            {milestone.budget}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <CalendarClock className="w-4 h-4" />
                                            {milestone.daysLeft} days left
                                        </span>
                                    </div>

                                    {/* Mobile: Show without icons, stacked */}
                                    <div className="sm:hidden flex flex-col gap-1 text-xs text-gray-500 mb-2">
                                        <span>{milestone.client}</span>
                                        <span>{milestone.budget}</span>
                                        <span>{milestone.daysLeft} days left</span>
                                    </div>
                                </div>

                                <div className="text-right flex-shrink-0 ml-2">
                                    <div className="flex items-center gap-1 justify-end mb-1">
                                        {getStatusIcon(milestone.status)}
                                        {/* Hide status text on mobile, show on desktop */}
                                        <span className={`font-medium text-sm hidden sm:inline ${milestone.status === 'on-track' ? 'text-success' :
                                                milestone.status === 'at-risk' ? 'text-yellow-600' : 'text-red-600'
                                            }`}>
                                            {milestone.status.replace('-', ' ').toUpperCase()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">{milestone.date}</p>
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
                            <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                                <div>
                                    <div className="font-medium text-gray-700 mb-1 flex items-center gap-2">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span className="hidden sm:inline">Risk Factors:</span>
                                        <span className="sm:hidden">Risks</span>
                                    </div>
                                    <ul className="text-gray-600 space-y-1">
                                        {milestone.riskFactors.map((risk, i) => (
                                            <li key={i} className="break-words">• {risk}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-700 mb-1 flex items-center gap-2">
                                        <Zap className="h-4 w-4" />
                                        <span className="hidden sm:inline">Business Impact:</span>
                                        <span className="sm:hidden">Impact</span>
                                    </div>
                                    <p className="text-gray-600 break-words">• {milestone.impact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-4">
                    {/* Strategic Overview Panel */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 md:p-4 border border-green-200 w-full lg:w-1/2">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2 md:mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            Milestone Intelligence Dashboard
                        </h4>

                        <div className="grid grid-cols-1 xs:grid-cols-2  text-sm">
                            <div className="">
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-xs sm:text-sm"><strong>On Track Rate:</strong></span>
                                    <span className="font-semibold text-green-700 text-xs sm:text-sm">{completionRate}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-xs sm:text-sm"><strong>High Priority Items:</strong></span>
                                    <span className="font-semibold text-orange-700 text-xs sm:text-sm">{highPriorityCount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-xs sm:text-sm"><strong>Total Budget at Stake:</strong></span>
                                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">€{(totalBudgetAtStake / 1000).toFixed(0)}K</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-xs sm:text-sm"><strong>At Risk Projects:</strong></span>
                                    <span className="font-semibold text-red-700 text-xs sm:text-sm">{atRiskMilestones}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-xs sm:text-sm"><strong>Avg. Days to Deadline:</strong></span>
                                    <span className="font-semibold text-blue-700 text-xs sm:text-sm">
                                        {Math.round(milestoneData.reduce((sum, m) => sum + m.daysLeft, 0) / milestoneData.length)}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 text-xs sm:text-sm"><strong>Client Satisfaction:</strong></span>
                                    <span className="font-semibold text-green-700 text-xs sm:text-sm">89% avg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actionable Recommendations */}
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 w-full lg:w-1/2">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-amber-600" />
                            Critical Actions Required
                        </h4>
                        <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                            <li className="break-words">• <strong>Immediate attention needed</strong> for Office Renovation client review</li>
                            <li className="break-words">• <strong>Escalate stakeholder communication</strong> for Boutique Hotel approval</li>
                            <li className="break-words">• <strong>Prepare delivery team</strong> for Riverfront Apartment final handover</li>
                            <li className="break-words">• <strong>Schedule material supplier meetings</strong> for Luxury Villa selections</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}