"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Adjust this path to wherever your tooltip component lives!
import { ChartTooltipContent } from "@/components/application/charts/charts-base";
import { LegendData } from "@/shared/components/Legend";

export interface StackedSeriesConfig {
  dataKey: string;
  label: string;
  color: string;
}

interface StackedBarChartProps {
  data: any[];
  series: StackedSeriesConfig[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  width?: number | string;
  height?: number | string;
  barWidth?: number;
}

export function StackedBarChart({
  data,
  series,
  xAxisLabel = "Year 2026",
  yAxisLabel = "Total Impression",
  width = "100%",
  height = 350,
  barWidth = 8,
}: StackedBarChartProps) {
  return (
    <div className="flex flex-col items-center w-full  ">
      <div
        style={{ width, height }}
        className=" rounded-[16px] border-2 border-neutral-6 "
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 10, left: 20, bottom: 20 }}
            barSize={barWidth}
          >
            {/* X-Axis configured to hide individual ticks, showing only the bottom center label */}
            <XAxis
              axisLine={false}
              tickLine={false}
              tick={false} // Hides the individual text under each bar
              label={{
                value: xAxisLabel,
                position: "insideBottom",
                offset: -10,
                fill: "#9CA3AF",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000}k`
              }
              label={{
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                fill: "#9CA3AF",
                dy: 50,
                dx: -10,
              }}
            />

            <Tooltip
              content={<ChartTooltipContent />}
              cursor={{ fill: "transparent" }}
            />

            {/* We map over your series array to draw the segments.
               The MAGIC happens here: stackId="stack" tells Recharts to put them on top of each other!
            */}
            {series.map((s, index) => {
              // We only want rounded corners on the very top segment of the stack
              const isTopSegment = index === series.length - 1;

              return (
                <Bar
                  key={s.dataKey}
                  dataKey={s.dataKey}
                  name={s.label}
                  fill={s.color}
                  stackId="stack" // 👈 This stacks them!
                  radius={isTopSegment ? [10, 10, 0, 0] : [0, 0, 0, 0]} // Rounds the top of the stack
                />
              );
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Your Custom Legends */}
      <div className="flex gap-6 mt-4 items-center w-full justify-center flex-wrap">
        {series.map((item, index) => (
          <LegendData
            key={index}
            label={item.label}
            color={item.color}
            isActive={true}
          />
        ))}
      </div>
    </div>
  );
}
