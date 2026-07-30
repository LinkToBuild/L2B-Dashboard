"use client";

import * as React from "react";

interface LegendDataProps {
  color: string;
  label: string;
  percentage?: string | number | null ;
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
      className={`w-fit flex gap-[4px] items-center whitespace-nowrap ${
        isInteractive 
          ? `cursor-pointer transition-opacity ${isActive ? "opacity-100" : "opacity-40"}` 
          : "opacity-100"
      }`}
    >
      <div
        className="w-[10px] h-[10px] rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      ></div>

      <div className="text-[12px] font-normal text-neutral-2">
        <span>{label}</span>
        {percentage !== undefined && percentage !== null && (
          <span>{` ${percentage}%`}</span>
        )}
      </div>
    </Wrapper>
  );
}