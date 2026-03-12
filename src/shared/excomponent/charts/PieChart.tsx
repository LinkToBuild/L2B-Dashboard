"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// 1. Define the props to make everything dynamic
export interface DynamicDonutChartProps {
  data: any[];
  config: ChartConfig;
  dataKey: string;
  nameKey: string;
  centerLabel?: string;
  centerValue?: string | number;
  width?: number | string;
  height?: number | string;
  innerRadius?: string | number;
  outerRadius?: string | number;
}

export function ChartPieDonut({
  data,
  config,
  dataKey,
  nameKey,
  centerLabel = "Total",
  centerValue = "",
  width = 250,
  height = 250,
  innerRadius = "60%",
  outerRadius = "95%",
}: DynamicDonutChartProps) {
  return (
    <Card className="flex flex-col bg-transparent shadow-none border-0">
      <CardContent className="flex-1 p-0">
        {/* 2. Apply dynamic width and height to a wrapper */}
        <div style={{ width, height }}>
          <ChartContainer config={config} className="w-full h-full">
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={data}
                dataKey={dataKey}
                nameKey={nameKey}
                paddingAngle={5}
                cornerRadius={5}
                stroke="none"
                innerRadius={innerRadius}
                outerRadius={outerRadius} // Added this back from your commented code
                strokeWidth={0}
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
                          {/* 3. Render dynamic center text */}
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-neutral-1 text-sm"
                          >
                            {centerLabel}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 16}
                            className="fill-neutral-2 text-[24px] font-semibold"
                          >
                            {centerValue}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}