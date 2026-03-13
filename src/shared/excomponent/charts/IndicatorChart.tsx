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
        startAngle: 180, // Starts at the far left
        endAngle: 0,     // Ends at the far right (makes a perfect half-circle)
        min: 0,
        max: 100,
        
        // 1. The colored track
        axisLine: {
          lineStyle: {
            width: 25, // How thick the colored band is
            color: [
              [0.33, "#ED6D6D"], // 0-33% is Red
              [0.66, "#F6B344"], // 33-66% is Yellow/Orange
              [1, "#72C596"],    // 66-100% is Green
            ],
          },
        },
        
        // 2. The needle
        pointer: {
          show: true,
          length: "55%",
          width: 5,
          itemStyle: {
            color: "#4B4B4B", // Dark grey needle to match your design
          },
        },
        
        // 3. Hide all the default ECharts mess (ticks, split lines, outside labels)
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
          offsetCenter: [0, "50%"], // Pushes the text down below the needle origin
        },
        
        // 5. The actual data being passed in
        data: [{ value: value }],
      },
    ],
  };

  return (
    <div className="flex justify-center items-center">
      <ReactECharts
        option={option}
        style={{ width, height }}
        opts={{ renderer: "svg" }} // SVG rendering makes it look incredibly crisp
      />
    </div>
  );
}