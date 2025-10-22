"use client";

import {
    Pie,
    PieChart,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const data = [
    { name: "In Progress", value: 6, color: "#3b82f6" },
    { name: "Planning", value: 4, color: "#f59e0b" },
    { name: "Completed", value: 2, color: "#10b981" },
];

const totalProjects = data.reduce((sum, item) => sum + item.value, 0);

export function ProjectStatusChart() {
    return (
        <Card className="w-full">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-base font-medium text-center sm:text-left">
                    Project Status
                </CardTitle>
                <CardDescription className="text-center sm:text-left">
                    Current project distribution
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="flex flex-col xl:flex-row items-center gap-6">
                    {/* Pie Chart - Fixed container with proper constraints */}
                    <div className="w-full xl:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] xl:h-[200px] flex justify-center">
                        <div className="w-full max-w-[280px] h-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="50%"
                                        outerRadius="70%"
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) => [`${value} projects`, "Count"]}
                                        contentStyle={{
                                            backgroundColor: "white",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Stats - Improved responsive layout */}
                    <div className="w-full xl:w-1/2 space-y-4">
                        <div className="text-center xl:text-left">
                            <div className="text-2xl sm:text-3xl font-bold text-foreground">
                                {totalProjects}
                            </div>
                            <div className="text-sm sm:text-base text-muted-foreground">
                                Total Projects
                            </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            {data.map((item, index) => {
                                const percentage = Math.round(
                                    (item.value / totalProjects) * 100
                                );
                                return (
                                    <div key={item.name} className="space-y-2">
                                        <div className="flex items-center justify-between text-sm sm:text-base">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div
                                                    className="h-3 w-3 sm:h-4 sm:w-4 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: item.color }}
                                                />
                                                <span className="text-muted-foreground whitespace-nowrap">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium whitespace-nowrap">
                                                    {item.value}
                                                </span>
                                                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                                                    ({percentage}%)
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h-2 sm:h-3 w-full overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className="h-full transition-all duration-500"
                                                style={{
                                                    width: `${percentage}%`,
                                                    backgroundColor: item.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}