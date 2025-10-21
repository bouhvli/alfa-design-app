"use client";

import {
    Pie,
    PieChart,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
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
        <Card>
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-base font-medium">Project Status</CardTitle>
                <CardDescription>Current project distribution</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    {/* Pie Chart */}
                    <div className="w-full lg:w-1/2 h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
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
                                {/* <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    content={({ payload }) => (
                                        <div className="flex justify-center gap-4 mt-4">
                                            {payload?.map((entry, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-1 text-xs"
                                                >
                                                    <div
                                                        className="h-2 w-2 rounded-full"
                                                        style={{ backgroundColor: entry.color }}
                                                    />
                                                    <span className="text-gray-600">{entry.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                /> */}
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Stats */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <div className="text-center lg:text-left">
                            <div className="text-2xl font-bold text-foreground">
                                {totalProjects}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Total Projects
                            </div>
                        </div>

                        <div className="space-y-3">
                            {data.map((item, index) => {
                                const percentage = Math.round(
                                    (item.value / totalProjects) * 100
                                );
                                return (
                                    <div key={item.name} className="space-y-1">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="h-3 w-3 rounded-full"
                                                    style={{ backgroundColor: item.color }}
                                                />
                                                <span className="text-muted-foreground">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">{item.value}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    ({percentage}%)
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
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
