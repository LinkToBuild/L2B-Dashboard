"use client"

import React from "react";
import ReactECharts from "echarts-for-react";

export interface SpeedometerProps {
  value: number;            // The percentage to show (0 to 100)
  width?: string | number;
  height?: string | number;
}

export function IndicatorChart({ 
  value, 
  width = "100%", 
  height = 250 
}: SpeedometerProps) {
  
  // This object replaces the vanilla JS "option = {...}" from your snippet
  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "70%"],
        radius: "100%",
        min: 0,
        max: 100,
        
        // 1. The colored track
        axisLine: {
          lineStyle: {
            width: 25,
            color: [
              [0.33, "#ED6D6D"],
              [0.66, "#F6B344"],
              [1, "#72C596"],
            ],
          },
        },
        
        // 2. The needle
        pointer: {
          show: true,
          length: "80%",
          width: 5,
          itemStyle: {
            color: "#4B4B4B",
          },
        },
        
        // 3. Hide default ticks / labels
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        
        // 4. The big number at the bottom
        detail: {
          valueAnimation: true,
          formatter: "{value}%",
          color: "#4B4B4B",
          fontSize: 32,
          fontWeight: "semibold",
          offsetCenter: [0, "35%"],
        },
        
        data: [{ value: value }],
      },
    ],
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ReactECharts
        option={option}
        style={{ width, height }}
        opts={{ renderer: "svg" }}
        className="h-full w-full"
      />
    </div>
  );
}