"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", Budget: 222, Spend: 150 },
  { date: "2024-04-02", Budget: 97, Spend: 180 },
  { date: "2024-04-03", Budget: 167, Spend: 120 },
  { date: "2024-04-04", Budget: 242, Spend: 260 },
  { date: "2024-04-05", Budget: 373, Spend: 290 },
  { date: "2024-04-06", Budget: 301, Spend: 340 },
  { date: "2024-04-07", Budget: 245, Spend: 180 },
  { date: "2024-04-08", Budget: 409, Spend: 320 },
  { date: "2024-04-09", Budget: 59, Spend: 110 },
  { date: "2024-04-10", Budget: 261, Spend: 190 },
  { date: "2024-04-11", Budget: 327, Spend: 350 },
  { date: "2024-04-12", Budget: 292, Spend: 210 },
  { date: "2024-04-13", Budget: 342, Spend: 380 },
  { date: "2024-04-14", Budget: 137, Spend: 220 },
  { date: "2024-04-15", Budget: 120, Spend: 170 },
  { date: "2024-04-16", Budget: 138, Spend: 190 },
  { date: "2024-04-17", Budget: 446, Spend: 360 },
  { date: "2024-04-18", Budget: 364, Spend: 410 },
  { date: "2024-04-19", Budget: 243, Spend: 180 },
  { date: "2024-04-20", Budget: 89, Spend: 150 },
  { date: "2024-04-21", Budget: 137, Spend: 200 },
  { date: "2024-04-22", Budget: 224, Spend: 170 },
  { date: "2024-04-23", Budget: 138, Spend: 230 },
  { date: "2024-04-24", Budget: 387, Spend: 290 },
  { date: "2024-04-25", Budget: 215, Spend: 250 },
  { date: "2024-04-26", Budget: 75, Spend: 130 },
  { date: "2024-04-27", Budget: 383, Spend: 420 },
  { date: "2024-04-28", Budget: 122, Spend: 180 },
  { date: "2024-04-29", Budget: 315, Spend: 240 },
  { date: "2024-04-30", Budget: 454, Spend: 380 },
  { date: "2024-05-01", Budget: 165, Spend: 220 },
  { date: "2024-05-02", Budget: 293, Spend: 310 },
  { date: "2024-05-03", Budget: 247, Spend: 190 },
  { date: "2024-05-04", Budget: 385, Spend: 420 },
  { date: "2024-05-05", Budget: 481, Spend: 390 },
  { date: "2024-05-06", Budget: 498, Spend: 520 },
  { date: "2024-05-07", Budget: 388, Spend: 300 },
  { date: "2024-05-08", Budget: 149, Spend: 210 },
  { date: "2024-05-09", Budget: 227, Spend: 180 },
  { date: "2024-05-10", Budget: 293, Spend: 330 },
  { date: "2024-05-11", Budget: 335, Spend: 270 },
  { date: "2024-05-12", Budget: 197, Spend: 240 },
  { date: "2024-05-13", Budget: 197, Spend: 160 },
  { date: "2024-05-14", Budget: 448, Spend: 490 },
  { date: "2024-05-15", Budget: 473, Spend: 380 },
  { date: "2024-05-16", Budget: 338, Spend: 400 },
  { date: "2024-05-17", Budget: 499, Spend: 420 },
  { date: "2024-05-18", Budget: 315, Spend: 350 },
  { date: "2024-05-19", Budget: 235, Spend: 180 },
  { date: "2024-05-20", Budget: 177, Spend: 230 },
  { date: "2024-05-21", Budget: 82, Spend: 140 },
  { date: "2024-05-22", Budget: 81, Spend: 120 },
  { date: "2024-05-23", Budget: 252, Spend: 290 },
  { date: "2024-05-24", Budget: 294, Spend: 220 },
  { date: "2024-05-25", Budget: 201, Spend: 250 },
  { date: "2024-05-26", Budget: 213, Spend: 170 },
  { date: "2024-05-27", Budget: 420, Spend: 460 },
  { date: "2024-05-28", Budget: 233, Spend: 190 },
  { date: "2024-05-29", Budget: 78, Spend: 130 },
  { date: "2024-05-30", Budget: 340, Spend: 280 },
  { date: "2024-05-31", Budget: 178, Spend: 230 },
  { date: "2024-06-01", Budget: 178, Spend: 200 },
  { date: "2024-06-02", Budget: 470, Spend: 410 },
  { date: "2024-06-03", Budget: 103, Spend: 160 },
  { date: "2024-06-04", Budget: 439, Spend: 380 },
  { date: "2024-06-05", Budget: 88, Spend: 140 },
  { date: "2024-06-06", Budget: 294, Spend: 250 },
  { date: "2024-06-07", Budget: 323, Spend: 370 },
  { date: "2024-06-08", Budget: 385, Spend: 320 },
  { date: "2024-06-09", Budget: 438, Spend: 480 },
  { date: "2024-06-10", Budget: 155, Spend: 200 },
  { date: "2024-06-11", Budget: 92, Spend: 150 },
  { date: "2024-06-12", Budget: 492, Spend: 420 },
  { date: "2024-06-13", Budget: 81, Spend: 130 },
  { date: "2024-06-14", Budget: 426, Spend: 380 },
  { date: "2024-06-15", Budget: 307, Spend: 350 },
  { date: "2024-06-16", Budget: 371, Spend: 310 },
  { date: "2024-06-17", Budget: 475, Spend: 520 },
  { date: "2024-06-18", Budget: 107, Spend: 170 },
  { date: "2024-06-19", Budget: 341, Spend: 290 },
  { date: "2024-06-20", Budget: 408, Spend: 450 },
  { date: "2024-06-21", Budget: 169, Spend: 210 },
  { date: "2024-06-22", Budget: 317, Spend: 270 },
  { date: "2024-06-23", Budget: 480, Spend: 530 },
  { date: "2024-06-24", Budget: 132, Spend: 180 },
  { date: "2024-06-25", Budget: 141, Spend: 190 },
  { date: "2024-06-26", Budget: 434, Spend: 380 },
  { date: "2024-06-27", Budget: 448, Spend: 490 },
  { date: "2024-06-28", Budget: 149, Spend: 200 },
  { date: "2024-06-29", Budget: 103, Spend: 160 },
  { date: "2024-06-30", Budget: 446, Spend: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Budget",
    color: "green",
  },
  mobile: {
    label: "Spend",
    color: "grey",
  },
}

export function Component() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Long term spending review</CardTitle>
          <CardDescription>
            Showing total budget vs spend for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-white">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Budget"
              type="natural"
              fill="A00406"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="Spend"
              type="natural"
              fill="#006A4D"
              stroke="var(--color-desktop)"
              stackId="a"
            />
           
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Component;