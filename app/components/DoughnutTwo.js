"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { category: "Food/Drink", Budget: 275, Spent: 200, fill: "orange" },
  { category: "Travel", Budget: 200, Spent: 200, fill: "#b21d3f" },
  { category: "Utilities", Budget: 287, Spent: 200, fill: "#006A4D" },
  { category: "Personal care", Budget: 173, Spent: 200, fill: "#006A4D" },
  { category: "Other", Budget: 190, Spent: 200, fill: "#b21d3f" },
  { category: "Services and Membership", Budget: 190, Spent: 200, fill: "#b21d3f" },
  { category: "Clothes", Budget: 190, Spent: 200, fill: "#b21d3f" },
  { category: "Essentials", Budget: 190, Spent: 200, fill: "#b21d3f" },
  { category: "Remaining", Budget: 1900, Spent: 200, fill: "#6B777C" },
]

const chartConfig = {
    Budget: {
    label: "Total Spent",
  },
  chrome: {
    label: "Food",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Travel",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Utilities",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Rent",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
  other: {
    label: "Remaining",
    color: "hsl(var(--chart-6))",
  },
}

export function DoughnutTwo() {
  const totalBudget = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.Budget, 0) - 1900
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Budget Spends by Category</CardTitle>
        <CardDescription>Nov - Dec 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto  rounded-lg max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
            />
            <Pie
              data={chartData}
              dataKey="Budget"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalBudget.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Spent
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Budget remaining this month 50.2% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total budget spent and remaining for the last month
        </div>
      </CardFooter>
    </Card>
  )
}

export default DoughnutTwo;