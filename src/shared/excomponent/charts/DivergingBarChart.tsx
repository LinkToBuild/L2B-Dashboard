"use client";

import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";

type TicketDivergingBarChartItem = {
  label: string;
  positive: number;
  negativeNearZero?: number;
  negativeMain?: number;
  negativeSecondary?: number;
  negativeBottom?: number;
};

type TicketDivergingBarChartColors = {
  positive: string;
  negativeNearZero: string;
  negativeMain: string;
  negativeSecondary: string;
  negativeBottom: string;
  axisLine: string;
  splitLine: string;
  labelColor: string;
  yAxisLabelColor: string;
  tooltipBorder: string;
  tooltipText: string;
  tooltipShadow: string;
  zeroLine: string;
  background: string;
};

interface TicketDivergingBarChartProps {
  data: TicketDivergingBarChartItem[];
  width?: string | number;
  height?: string | number;
  className?: string;
  min?: number;
  max?: number;
  interval?: number;
  barWidth?: number;
  barCategoryGap?: string;
  showTooltip?: boolean;
  labelAreaHeight?: number;
  labelOffsetTop?: number;
  grid?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  colors?: Partial<TicketDivergingBarChartColors>;
}

const defaultColors: TicketDivergingBarChartColors = {
  positive: "#6CC39A",
  negativeNearZero: "#4E89C7",
  negativeMain: "#4E89C7",
  negativeSecondary: "#94B7D8",
  negativeBottom: "#C3D8E8",
  axisLine: "#AFAFAF",
  splitLine: "#CFCFCF",
  labelColor: "#B3B3B3",
  yAxisLabelColor: "#8D8D8D",
  tooltipBorder: "#D9D9D9",
  tooltipText: "#4A4A4A",
  tooltipShadow: "rgba(0,0,0,0.08)",
  zeroLine: "#9E9E9E",
  background: "#FFFFFF",
};

export function TicketDivergingBarChart({
  data,
  width = "100%",
  height = 420,
  className,
  min = -300,
  max = 350,
  interval = 50,
  barWidth = 22,
  barCategoryGap = "18%",
  showTooltip = true,
  labelAreaHeight = 92,
  labelOffsetTop = -8,
  grid,
  colors,
}: TicketDivergingBarChartProps) {
  const mergedColors = { ...defaultColors, ...colors };

  const numericHeight =
    typeof height === "number" ? height : parseInt(String(height), 10) || 420;

  const chartHeight = Math.max(numericHeight - labelAreaHeight, 120);

  const option = useMemo(() => {
    const categories = data.map((item) => item.label);
    const positiveData = data.map((item) => item.positive);
    const negativeNearZeroData = data.map((item) => item.negativeNearZero ?? 0);
    const negativeMainData = data.map((item) => item.negativeMain ?? 0);
    const negativeSecondaryData = data.map(
      (item) => item.negativeSecondary ?? 0
    );
    const negativeBottomData = data.map((item) => item.negativeBottom ?? 0);

    return {
      backgroundColor: mergedColors.background,
      animation: false,
      grid: {
        left: grid?.left ?? 48,
        right: grid?.right ?? 20,
        top: grid?.top ?? 12,
        bottom: grid?.bottom ?? 10,
        containLabel: true,
      },
      tooltip: showTooltip
        ? {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(0,0,0,0.04)",
              },
            },
            backgroundColor: "#ffffff",
            borderColor: mergedColors.tooltipBorder,
            borderWidth: 1,
            textStyle: {
              color: mergedColors.tooltipText,
              fontSize: 12,
            },
            extraCssText: `box-shadow: 0 4px 12px ${mergedColors.tooltipShadow}; border-radius: 8px;`,
          }
        : { show: false },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        data: categories,
        boundaryGap: true,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: mergedColors.axisLine,
            width: 1.2,
          },
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: mergedColors.splitLine,
            width: 1,
          },
        },
      },
      yAxis: {
        type: "value",
        min,
        max,
        interval,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: mergedColors.axisLine,
            width: 1.2,
          },
        },
        axisLabel: {
          color: mergedColors.yAxisLabelColor,
          fontSize: 12,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "Positive",
          type: "bar",
          stack: "positive",
          barWidth,
          barGap: "-100%",
          barCategoryGap,
          data: positiveData,
          itemStyle: {
            color: mergedColors.positive,
            borderRadius: [12, 12, 12, 12],
          },
          markLine: {
            silent: true,
            symbol: "none",
            label: { show: false },
            lineStyle: {
              color: mergedColors.zeroLine,
              width: 1.2,
            },
            data: [{ yAxis: 0 }],
          },
          z: 3,
        },
        {
          name: "Negative Near Zero",
          type: "bar",
          stack: "negative",
          barWidth,
          barGap: "-100%",
          barCategoryGap,
          data: negativeNearZeroData,
          itemStyle: {
            color: mergedColors.negativeNearZero,
            borderRadius: [12, 12, 12, 12],
          },
          z: 3,
        },
        {
          name: "Negative Main",
          type: "bar",
          stack: "negative",
          barWidth,
          barGap: "-100%",
          barCategoryGap,
          data: negativeMainData,
          itemStyle: {
            color: mergedColors.negativeMain,
            borderRadius: [12, 12, 12, 12],
          },
          z: 3,
        },
        {
          name: "Negative Secondary",
          type: "bar",
          stack: "negative",
          barWidth,
          barGap: "-100%",
          barCategoryGap,
          data: negativeSecondaryData,
          itemStyle: {
            color: mergedColors.negativeSecondary,
            borderRadius: [12, 12, 12, 12],
          },
          z: 3,
        },
        {
          name: "Negative Bottom",
          type: "bar",
          stack: "negative",
          barWidth,
          barGap: "-100%",
          barCategoryGap,
          data: negativeBottomData,
          itemStyle: {
            color: mergedColors.negativeBottom,
            borderRadius: [12, 12, 12, 12],
          },
          z: 3,
        },
      ],
    };
  }, [
    data,
    mergedColors,
    min,
    max,
    interval,
    barWidth,
    barCategoryGap,
    showTooltip,
    grid,
  ]);

  return (
    <div className={className} style={{ width, height }}>
      <div style={{ width: "100%", height: chartHeight }}>
        <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))`,
          height: labelAreaHeight,
          marginTop: `${labelOffsetTop}px`,
          paddingLeft: `${grid?.left ?? 48}px`,
          paddingRight: `${grid?.right ?? 20}px`,
        }}
      >
        {data.map((item) => (
          <div key={item.label} className="flex justify-center">
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: mergedColors.labelColor,
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "14px",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}