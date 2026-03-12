"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Adjust these paths if your folders are structured differently!
import {
  ChartTooltipContent,
  ChartActiveDot,
} from "@/components/application/charts/charts-base";
import { LegendData } from "@/shared/components/Legend";

export interface LineConfig {
  dataKey: string;
  name: string;
  color: string;
}

interface InteractiveLineChartProps {
  data: any[];
  lines: LineConfig[];
  yAxisLabel?: string;
  width?: number | string;
  height?: number | string;
  xAxisKey?: string;
  yAxisKey?: string; // 👈 Added yAxisKey here
  xAxisProps?: React.ComponentProps<typeof XAxis>;
  yAxisProps?: React.ComponentProps<typeof YAxis>;
  showLegend?: boolean;
}

export function LineCharts({
  data,
  lines,
  yAxisLabel,
  width = "100%",
  height = 300,
  xAxisKey = "name",
  yAxisKey, // 👈 Destructured it here (left optional with no default)
  xAxisProps,
  yAxisProps,
  showLegend = true,
}: InteractiveLineChartProps) {
  // State now only tracks ONE active line at a time. Defaults to the first line in the array.
  const [activeLine, setActiveLine] = useState<string>(lines[0]?.dataKey || "");

  // Sets the clicked legend as the only active line
  const handleLegendClick = (dataKey: string) => {
    setActiveLine(dataKey);
  };

  return (
    // 🎨 FUTURE STYLING COMMENT:
    // If you need to add a background color, padding, borders, or shadows in the future,
    // add classes like 'bg-white p-6 border rounded-[16px]' to the className string below!
    <div className="flex flex-col  items-center  ">
      {/* The Graph Area (Now using dynamic width and height) */}
      <div
        style={{ width, height }}
        className="border-2 border-neutral-6 rounded-[12px] p-[12px] "
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="5 5"
              vertical={true}
              horizontal={false}
              stroke="#E5E7EB"
            />

            {/* Dynamic X-Axis */}
            <XAxis
              dataKey={xAxisKey}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              {...xAxisProps}
            />

            {/* Dynamic Y-Axis */}
            <YAxis
              dataKey={yAxisKey} // 👈 Applied it here!
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
              }}
              {...yAxisProps}
            />

            <Tooltip content={<ChartTooltipContent />} />

            {lines.map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.color}
                strokeWidth={2}
                dot={false}
                activeDot={<ChartActiveDot />}
                hide={activeLine !== line.dataKey} // 👈 Hides if it's NOT the single active line
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Your Custom Legend Area */}
      {showLegend && (
        <div className="flex gap-2  mt-6 items-center w-full justify-between ">
          {lines.map((line) => (
            <LegendData
              key={line.dataKey}
              label={line.name}
              color={line.color}
              isActive={activeLine === line.dataKey} // 👈 Checks if it's the active one
              onClick={() => handleLegendClick(line.dataKey)}
            />
          ))}

          <button className="text-[14px] text-neutral-3  hover:text-neutral-1 transition-colors">
            see more {">"}
          </button>
        </div>
      )}
    </div>
  );
}
