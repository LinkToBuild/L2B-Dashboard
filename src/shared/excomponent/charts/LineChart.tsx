"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts"
import { Info } from "lucide-react" // Import Info icon

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ReusableLineChartProps {
  title?: string
  description?: string
  infoDescription?: string // New prop for tooltip text on info icon
  data: any[]
  config: ChartConfig
  xAxisKey?: string
  yAxisLabel?: string
  height?: string
  xAxisMiddleLabel?: string // New prop for special center text e.g., "Jan 2026"
  showLegendLink?: boolean // New prop to control "see more" visibility
  legendLinkHref?: string // Link URL for "see more"
}

export function LineCharts({
  title,
  description,
  infoDescription,
  data,
  config,
  xAxisKey = "date",
  yAxisLabel,
  height = "h-[300px]",
  xAxisMiddleLabel,
  showLegendLink = false,
  legendLinkHref = "#",
}: ReusableLineChartProps) {
  // Dynamically extract the keys from the config to render the lines
  const lineKeys = Object.keys(config)

  // Find middle date for special label placement if required
  const middleIndex = Math.floor(data.length / 2);
  const middleDateVal = data[middleIndex]?.[xAxisKey];

  // Extend config support to check for "isDashed" property on specific campaign lines
  // This requires user to add 'isDashed: true' to their ChartConfig object

  return (
    <Card className="py-4 sm:py-0">
      {(title || description) && (
        <CardHeader className="p-6 pb-3">
          <div className="flex items-center gap-2"> {/* Wrapper flex for title + icon */}
            {title && <CardTitle className="leading-tight">{title}</CardTitle>}
            {infoDescription && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-xs">{infoDescription}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={config} className={`aspect-auto w-full ${height}`}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{ left: 24, right: 24, top: 12, bottom: 24 }} // Increase bottom margin for special labels
          >
            {/* Standard grid as seen in shadcn/ui examples */}
            <CartesianGrid vertical={false} strokeDasharray="5 5" opacity={0.5}/>
            
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              interval={4} // Match the spacing like "5, 10, 15..." if data is daily
              tickFormatter={(value) => {
                const date = new Date(value);
                // Return just the day number e.g., '5'
                return date.toLocaleDateString("en-US", { day: "numeric" });
              }}
            />
            
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              // Format 10000 -> 10k
              tickFormatter={(value) => `${value / 1000}k`}
              label={
                yAxisLabel 
                  ? { value: yAxisLabel, angle: -90, position: 'insideLeft', offset: -10 } 
                  : undefined
              }
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            
            {/* Using default Legend icon style, but placing outside requires more complex setup */}
            <Legend verticalAlign="bottom" height={36} iconType="circle" />

            {lineKeys.map((key) => {
                // Determine if a line should be dashed based on a new optional property in ChartConfig
                // Example config usage: campaign2: { label: "Campaign 2", color: "hsl(var(--muted-foreground))", isDashed: true }
                const isDashed = (config[key] as any)?.isDashed;
                
                return (
                    <Line
                        key={key}
                        dataKey={key}
                        type="monotone"
                        stroke={`var(--color-${key})`}
                        strokeWidth={2}
                        dot={false}
                        // Handle late-starting data gracefully
                        connectNulls={false}
                        // Apply dashed style if specified in config
                        strokeDasharray={isDashed ? "5 5" : "0"}
                    />
                );
            })}
          </LineChart>
        </ChartContainer>

        {/* Placing special middle label outside chart area for clean centering */}
        {xAxisMiddleLabel && (
          <div className="text-center text-xs text-muted-foreground -mt-5 mb-2 px-[80px]">
            {xAxisMiddleLabel}
          </div>
        )}

        {/* Placing 'see more' link below chart, right-aligned with standard shadcn card styling */}
        {showLegendLink && (
            <div className="flex justify-end pr-6 -mt-11 pb-2 h-0 items-center">
                <a href={legendLinkHref} className="text-xs text-muted-foreground hover:text-foreground hover:underline flex items-center gap-1">
                    see more
                    <span>&gt;</span> {/* Caret character or use chevron icon */}
                </a>
            </div>
        )}
      </CardContent>
    </Card>
  )
}