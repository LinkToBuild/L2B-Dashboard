"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <Card className="flex flex-col bg-transparent shadow-none border-0">
      <CardContent className="flex-1 p-0">
        {/* 2. Apply dynamic width and height to a wrapper */}
        <div style={{ width, height }} className="min-w-0 min-h-0">
          <ChartContainer
            config={config}
            className="!aspect-auto h-full w-full min-h-0 justify-center"
          >
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
                outerRadius={outerRadius}
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
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
                            y={(viewBox.cy || 0) - 14}
                            className="fill-neutral-2 text-[13px]"
                          >
                            {centerLabel}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 12}
                            className="fill-neutral-1 text-[20px] font-semibold"
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



