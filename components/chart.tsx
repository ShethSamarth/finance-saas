"use client"

import {
  AreaChart,
  BarChart,
  FileSearch,
  LineChart,
  Loader2
} from "lucide-react"
import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { BarVariant } from "@/components/bar-variant"
import { AreaVariant } from "@/components/area-variant"
import { LineVariant } from "@/components/line-variant"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ChartProps = {
  data?: {
    date: string
    income: number
    expenses: number
  }[]
}

export const Chart = ({ data = [] }: ChartProps) => {
  const [chartType, setChartType] = useState("area")

  const onTypeChange = (type: string) => setChartType(type)

  return (
    <Card className="border-none drop-shadow">
      <CardHeader className="flex space-y-2 md:space-y-0 md:flex-row md:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Transactions</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className="md:w-auto h-9 px-3 rounded-md">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="area">
              <div className="flex items-center">
                <AreaChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Area Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="bar">
              <div className="flex items-center">
                <BarChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Bar Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="line">
              <div className="flex items-center">
                <LineChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Line Chart</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
            <FileSearch className="size-6 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">
              No data for this period
            </p>
          </div>
        ) : (
          <>
            {chartType === "area" && <AreaVariant data={data} />}
            {chartType === "bar" && <BarVariant data={data} />}
            {chartType === "line" && <LineVariant data={data} />}
          </>
        )}
      </CardContent>
    </Card>
  )
}

export const ChartLoading = () => {
  return (
    <Card className="border-none drop-shadow">
      <CardHeader className="flex space-y-2 md:space-y-0 md:flex-row md:items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-full md:w-[120px]" />
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full flex items-center justify-center">
          <Loader2 className="size-6 text-slate-300 animate-spin" />
        </div>
      </CardContent>
    </Card>
  )
}
