"use client";

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// 1. Import your custom Legend component! Adjust the path if necessary.
import { LegendData } from "@/shared/components/Legend"; 

export interface BarSeriesConfig {
  dataKey: string;
  label: string;
  color: string;
}

interface DynamicBarChartProps {
  data: any[];
  xAxisKey: string;
  series: BarSeriesConfig[];
  yAxisLabel?: string;
  width?: number | string; // Added width here
  height?: number;
}

export function BarGraph({
  data,
  xAxisKey,
  series,
  yAxisLabel,
  width = "100%", // Defaulted to 100%
  height = 350,
}: DynamicBarChartProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div style={{ width }} className='border-2 border-neutral-6  gap-[12px] rounded-[13px]'>
        <BarChart
          dataset={data}
          xAxis={[
            { 
              scaleType: 'band', 
              dataKey: xAxisKey,
              tickPlacement: 'middle',
              tickLabelPlacement: 'middle',
            }
          ]}
          yAxis={[
            { 
              label: yAxisLabel 
            }
          ]}
          series={series.map((s) => ({
            dataKey: s.dataKey,
            label: s.label, // MUI uses this internally for tooltips
            color: s.color,
          }))}
          height={height}
          margin={{ left: 60, right: 20, top: 40, bottom: 0 }} // Reduced bottom margin to pull legends closer
          
          // 2. Hide the default MUI legend
          slotProps={{
            legend: { hidden: true } as any
          }}
        />
      </div>

      {/* 3. Your Custom Legend Area */}
      <div className="flex gap-6 mt-6 items-center w-full justify-center flex-wrap">
        {series.map((item, index) => (
          <LegendData
            key={index}
            label={item.label}
            color={item.color}
            isActive={true} // Since there is no toggling here, they are always fully visible
          />
        ))}
      </div>
    </div>
  );
}