"use client";

import React, { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // 1. Find the maximum stacked value to know how tall to make the grey empty bars
  const maxDataValue = Math.max(
    ...data.map((item) =>
      series.reduce((sum, s) => sum + (Number(item[s.dataKey]) || 0), 0)
    )
  );
  
  // Fallback to 5000 (like your image) if the calculated max is 0 or invalid
  const placeholderHeight = maxDataValue > 0 ? maxDataValue : 5000;

  // 2. Process the data: If a data point totals 0, give it a placeholder value
  const chartData = data.map((item) => {
    const totalValue = series.reduce(
      (sum, s) => sum + (Number(item[s.dataKey]) || 0),
      0
    );
    return {
      ...item,
      _emptyPlaceholder: totalValue === 0 ? placeholderHeight : 0,
    };
  });

  return (
    <div className="flex flex-col items-center w-full">
      <div
        style={{ width, height }}
        className="rounded-[16px] border-2 border-neutral-6"
      >
        {mounted && <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 10, left: 20, bottom: 20 }}
            barSize={barWidth}
          >
            <XAxis
              axisLine={false}
              tickLine={false}
              tick={false}
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

            {/* 3. Render the Empty Placeholder Bar First */}
            <Bar
              dataKey="_emptyPlaceholder"
              fill="#E5E7EB" // The light grey color from your image
              stackId="stack"
              radius={[10, 10, 0, 0]}
              // Note: You may need to filter out "_emptyPlaceholder" inside your custom ChartTooltipContent 
              // so it doesn't say "_emptyPlaceholder: 5000" when hovered.
            />

            {/* 4. Render the actual data bars on top */}
            {series.map((s, index) => {
              const isTopSegment = index === series.length - 1;

              return (
                <Bar
                  key={s.dataKey}
                  dataKey={s.dataKey}
                  name={s.label}
                  fill={s.color}
                  stackId="stack"
                  radius={isTopSegment ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                />
              );
            })}
          </BarChart>
        </ResponsiveContainer>}
      </div>

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