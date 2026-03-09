"use client";

import * as React from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SideBoardItem {
  label: string;
  percentage_change: number | string;
  trend: string; // Changed from '"up" | "down"' to 'string' for API compatibility
  value: string | number;
}

export interface SideBoardProps {
  title: string;
  overallPercentage: number | string;
  overallTrend: string; // Changed to string
  data: SideBoardItem[];
}

export function SideBoard({ 
  title, 
  overallPercentage, 
  overallTrend, 
  data 
}: SideBoardProps) {
  return (
    <div className="lg:w-[278px]  2xl:w-[300px] border border-neutral-5 p-[12px] rounded-[12px] flex flex-col gap-[26px]">
      
      {/* HEADER SECTION */}
      <div className="flex w-full justify-between place-items-center">
        <p className="text-[16px] text-neutral-2 font-normal">{title}</p>
        
        <p className={cn(
            "flex place-items-center text-[12px] gap-1",
            overallTrend === "up" ? "text-success-1" : "text-danger-1"
        )}>
          {overallPercentage}% 
          {overallTrend === "up" ? <ChevronUp className="h-3 w-3 " /> : <ChevronDown className="h-3 w-3 " />}
        </p>
        
        <Info className="h-5 w-5 text-neutral-3" />
      </div>

      {/* LIST SECTION */}
      <div className="flex flex-col xl:gap-[32px] 2xl:gap-[42px]">
        {data.map((item, index) => (
          <div key={index} className="flex w-full place-items-center ">
            <div className="w-full flex flex-row place-items-center justify-between gap-1">
              <p className="text-[12px] text-neutral-2 font-normal">
                {item.label}
              </p>
              
              <p className={cn(
                  "flex place-items-center text-[12px] gap-1",
                  item.trend === "up" ? "text-success-1" : "text-danger-1",
                )}
              >
                {/* Note: We check if the trend string is exactly "up". 
                  If the API sends "down" or anything else, it defaults to the danger color.
                */}
                {item.percentage_change}%{" "}
                {item.trend === "up" ? (
                  <ChevronUp className="h-3 w-3 " />
                ) : (
                  <ChevronDown className="h-3 w-3 " />
                )}
              </p>
              
              <p className="text-[16px] text-neutral-1 font-semibold">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}