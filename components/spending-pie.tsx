"use client"

import { useState } from "react"
import { FileSearch, Loader2, PieChart, Radar, Target } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { PieVariant } from "@/components/pie-variant"
import { RadarVariant } from "@/components/radar-variant"
import { RadialVariant } from "@/components/radial-variant"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type SpendingPieProps = {
  data?: {
    name: string
    value: number
  }[]
}

export const SpendingPie = ({ data = [] }: SpendingPieProps) => {
  const [chartType, setChartType] = useState("pie")

  const onTypeChange = (type: string) => setChartType(type)

  return (
    <Card className="border-none drop-shadow">
      <CardHeader className="flex space-y-2 md:space-y-0 md:flex-row md:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Categories</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className="md:w-auto h-9 px-3 rounded-md">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pie">
              <div className="flex items-center">
                <PieChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Pie Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="radar">
              <div className="flex items-center">
                <Radar className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Radar Chart</p>
              </div>
            </SelectItem>
            <SelectItem value="radial">
              <div className="flex items-center">
                <Target className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Radial Chart</p>
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
            {chartType === "pie" && <PieVariant data={data} />}
            {chartType === "radar" && <RadarVariant data={data} />}
            {chartType === "radial" && <RadialVariant data={data} />}
          </>
        )}
      </CardContent>
    </Card>
  )
}

export const SpendingPieLoading = () => {
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
