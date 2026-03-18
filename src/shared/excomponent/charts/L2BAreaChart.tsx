"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

// Import your custom legend (adjust the path if necessary!)
import { LegendData } from "@/shared/components/Legend"

// 1. This interface fixes the IntrinsicAttributes error by telling TypeScript exactly what to expect
export interface L2BAreaChartProps {
  data: any[];             
  xAxisKey: string;        
  dataKey: string;         
  color?: string;          
  width?: number | string;
  height?: number | string;
  showXAxis?: boolean;
  showYAxis?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  showLegend?: boolean;
  legendLabel?: string;
}

// 2. We pass the interface to the component signature
export function L2BAreaChart({
  data,
  xAxisKey,
  dataKey,
  color = "#3B82F6",
  width = "100%",
  height = 300,
  showXAxis = true,
  showYAxis = true,
  xAxisLabel,
  yAxisLabel,
  showLegend = false,
  legendLabel,
}: L2BAreaChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // 3. Dynamically generate the Shadcn config so tooltips show the correct label and color
  const chartConfig = {
    [dataKey]: {
      label: legendLabel || dataKey,
      color: color,
    },
  } satisfies ChartConfig;

  // 4. Generate a unique gradient ID so multiple charts on the same page don't bleed colors
  const gradientId = `fill-${dataKey}-${color.replace("#", "")}`;

  return (
    // Removed CardHeader and CardFooter to make this a pure, reusable widget
    <Card className="flex flex-col bg-transparent shadow-none border-0">
      <CardContent className="flex-1 p-0">
        <div style={{ width, height }}>
          {mounted && <ChartContainer config={chartConfig} className="w-full h-full aspect-auto">
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{
                top: 10,
                right: 12,
                left: showYAxis ? 0 : 12, 
                bottom: showXAxis ? 10 : 0,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.4} />
              
              {/* Dynamically render X-Axis based on the boolean prop */}
              {showXAxis && (
                <XAxis
                  dataKey={xAxisKey}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: "#8E8E8E", fontSize: 12 }}
                  label={
                    xAxisLabel
                      ? { value: xAxisLabel, position: "insideBottom", offset: -10, fill: "#8E8E8E", fontSize: 12 }
                      : undefined
                  }
                />
              )}

              {/* Dynamically render Y-Axis based on the boolean prop */}
              {showYAxis && (
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: "#8E8E8E", fontSize: 12 }}
                  label={
                    yAxisLabel
                      ? { value: yAxisLabel, angle: -90, position: "insideLeft", offset: 10, fill: "#8E8E8E", fontSize: 12 }
                      : undefined
                  }
                />
              )}

              <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
              
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.5} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              
              {/* The Single Data Line */}
              <Area
                dataKey={dataKey}
                type="monotone" // This gives it the smooth, rounded curves
                fill={`url(#${gradientId})`}
                stroke={color}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>}
        </div>

        {/* Dynamically render your custom Legend Component below the chart */}
        {showLegend && (
          <div className="mt-4 flex justify-center">
            <LegendData 
              color={color} 
              label={legendLabel || "Data"} 
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}