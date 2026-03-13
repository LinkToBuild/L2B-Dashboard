"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

type SegmentKey = string;

export interface SegmentedBarRow {
  label: string;
  total?: number;
  segments: Record<SegmentKey, number>;
}

export interface SegmentConfig {
  key: SegmentKey;
  label?: string;
  color: string;
}

interface SegmentedHorizontalBarChartProps {
  data: SegmentedBarRow[];
  segmentConfig: SegmentConfig[];
  width?: number | string;
  height?: number | string;
  barSize?: number;
  rowGap?: number;
  labelWidth?: number;
  valueFormatter?: (value: number) => string;
  showLegend?: boolean;
  className?: string;
  rounded?: boolean;
}

type ChartRow = {
  label: string;
  total: number;
  [key: string]: string | number;
};

function buildChartData(
  rows: SegmentedBarRow[],
  segmentConfig: SegmentConfig[]
): ChartRow[] {
  return rows.map((row) => {
    const total =
      row.total ??
      segmentConfig.reduce(
        (sum, segment) => sum + (row.segments[segment.key] ?? 0),
        0
      );

    const nextRow: ChartRow = {
      label: row.label,
      total,
    };

    segmentConfig.forEach((segment) => {
      nextRow[segment.key] = row.segments[segment.key] ?? 0;
    });

    return nextRow;
  });
}

export function SegmentedHorizontalBarChart({
  data,
  segmentConfig,
  width = "100%",
  height = 240,
  barSize = 10,
  rowGap = 18,
  labelWidth = 140,
  valueFormatter = (value) => `${value}%`,
  showLegend = false,
  className = "",
  rounded = true,
}: SegmentedHorizontalBarChartProps) {
  const chartData = React.useMemo(
    () => buildChartData(data, segmentConfig),
    [data, segmentConfig]
  );

  const computedHeight =
    typeof height === "number"
      ? Math.max(height, chartData.length * (barSize + rowGap) + 24)
      : height;

  return (
    <div className={className} style={{ width, height: computedHeight }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 8, right: 8, bottom: showLegend ? 28 : 8, left: 8 }}
          barCategoryGap={rowGap}
        >
          <XAxis type="number" hide domain={[0, "dataMax"]} />
          <YAxis
            type="category"
            dataKey="label"
            width={labelWidth}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#334155" }}
          />

          {segmentConfig.map((segment, index) => {
            const isFirst = index === 0;
            const isLast = index === segmentConfig.length - 1;

            return (
              <Bar
                key={segment.key}
                dataKey={segment.key}
                stackId="stack"
                barSize={barSize}
                radius={
                  rounded
                    ? [
                        isFirst ? 999 : 0,
                        isLast ? 999 : 0,
                        isLast ? 999 : 0,
                        isFirst ? 999 : 0,
                      ]
                    : 0
                }
              >
                {chartData.map((_, cellIndex) => (
                  <Cell key={`${segment.key}-${cellIndex}`} fill={segment.color} />
                ))}

                {index === segmentConfig.length - 1 && (
                  <LabelList
                    dataKey="total"
                    position="right"
                    offset={10}
                    formatter={(value: number) => valueFormatter(value)}
                    style={{ fill: "#64748B", fontSize: 12 }}
                  />
                )}
              </Bar>
            );
          })}
        </BarChart>
      </ResponsiveContainer>

      {showLegend && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {segmentConfig.map((segment) => (
            <div key={segment.key} className="flex items-center gap-2 text-sm text-slate-600">
              <span
                className="inline-block h-3 w-3 rounded-sm"
                style={{ backgroundColor: segment.color }}
              />
              <span>{segment.label ?? segment.key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}