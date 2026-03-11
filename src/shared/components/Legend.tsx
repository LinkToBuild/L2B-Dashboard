"use client";

import * as React from "react";

interface LegendDataProps {
  color: string;
  label: string;
  percentage?: string | number;
  isActive?: boolean; 
  onClick?: () => void;
}

export function LegendData({ color, label, percentage, isActive = true, onClick }: LegendDataProps) {
  // 1. Check if this specific legend is meant to be clicked
  const isInteractive = !!onClick;
  
  // 2. Dynamically choose the HTML tag based on interactivity
  const Wrapper = isInteractive ? "button" : "div";

  return (
    <Wrapper 
      onClick={onClick}
      className={`w-fit flex gap-[4px] items-center ${
        isInteractive 
          ? `cursor-pointer transition-opacity ${isActive ? "opacity-100" : "opacity-40"}` 
          : "opacity-100" // Defaults to fully visible if it's just a normal, static legend
      }`}
    >
      <div
        className="w-[10px] h-[10px] rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex gap-[2px] xl:text-[9px] 2xl:text-[12px] font-normal text-neutral-2">
        <span>{label}</span>
        {percentage !== undefined && <span>{percentage}%</span>}
      </div>
    </Wrapper>
  );
}