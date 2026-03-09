"use client";

import * as React from "react";

interface LegendDataProps {
  color: string;
  label: string;
  percentage?: string | number;
}

export function LegendData({ color, label, percentage }: LegendDataProps) {
  return (
    <div className="w-fit  flex gap-[4px] items-center ">
      <div
        className="w-[10px] h-[10px] rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex gap-[2px] xl:text-[9px] 2xl:text-[12px] font-normal text-neutral-2">
        <span>{label}</span>
        {percentage !== undefined && <span>{percentage}%</span>}
       
      </div>
    </div>
  );
}