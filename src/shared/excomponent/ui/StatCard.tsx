import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Define the 4 exact values we want to pass into this card
export interface StatCardProps {
  title: string;
  value: string | number;
  percentage?: number | null;
  information: string;
}

export function StatCard({
  title,
  value,
  percentage,
  information,
}: StatCardProps) {
  // 2. Logic to determine if the stat is positive or negative
  const isPositive = percentage !== undefined && percentage !== null && percentage >= 0;
  
  // 3. Logic to check if a percentage was passed at all
  const hasPercentage = percentage !== undefined && percentage !== null;

  return (
    <div
      className="flex flex-col justify-between rounded-xl border-neutral-5 lg:w-[185px] lg:h-[90px] border 2xl:w-[239px] 2xl:h-[105px] shadow-md  gap-1 p-[10px]"
       style={{
        background: "linear-gradient(180deg, #F6FAFE 0%, #F6FAFE 55%, #FDFDFD 100%)",
      }}
    >
      {/* HEADER: Title, Percentage, and Info Icon */}
      <div className="flex w-full    h-[24px] 2xl:h-[30px]   ">
        {/* Left Side: Title & Percentage */}
        <div className="flex  place-items-center w-full justify-between gap-[7px] ">
          <div className="xl:text-[12px] 2xl:text-base font-normal text-neutral-2">
            {title}
          </div>

          <div
            title={information}
            className="cursor-help text-neutral-3 flex place-items-center hover:text-neutral-2 transition-colors"
          >
            <Info className="h-4 w-4 2xl:h-5 2xl:w-5" />
          </div>
        </div>
      </div>

      {/* CONTENT: The Main Big Number */}
      <div className="flex  justify-between place-items-center">
        <div className=" xl:text-[20px] 2xl:text-[24px] font-semibold text-neutral-2 tracking-tight">
          {value}
        </div>
          
          {/* 4. We wrap the percentage div so it ONLY shows if hasPercentage is true */}
          {hasPercentage && (
            <div
              className={cn(
                "flex xl:text-[9px]  2xl:text-[12px] font-normal",
                isPositive ? "text-success-1" : "text-danger-1",
              )}
            >
              {isPositive ? "+" : ""}
              {percentage}%
              {isPositive ? (
                <ChevronUp className="xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 ml-0.5" />
              ) : (
                <ChevronDown className="xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 ml-0.5" />
              )}
            </div>
          )}
          
      </div>
    </div>
  );
}