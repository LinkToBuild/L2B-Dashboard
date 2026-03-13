"use client";

import React from "react";
import { Info, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DualMetricCardProps {
  title: string;
  percentage: number;
  rentalValue: string | number;
  materialValue: string | number;
  information: string;
  width?: string;
  height?: string;
  rentalLabel?: string;
  materialLabel?: string;
}

export function DualMetricCard({
  title,
  percentage,
  rentalValue,
  materialValue,
  information,
  width = "w-[224px]",
  height = "h-[98px]",
  rentalLabel = "Rental",
  materialLabel = "Material",
}: DualMetricCardProps) {
  const isPositive = percentage >= 0;

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[12px] border border-neutral-5 shadow-md  p-[12px] gap-[4px] overflow-hidden lg:w-[185px] lg:h-[90px]  2xl:w-[239px] 2xl:h-[105px]",
        width,
        height
      )}
      style={{
        background: "linear-gradient(180deg, #F6FAFE 0%, #F6FAFE 55%, #FDFDFD 100%)",
      }}
    >
      <div className="flex items-center justify-between gap-[8px]">
        <div className="flex items-center min-w-0">
          <p className="text-[18px] leading-none font-normal text-neutral-2 truncate">
            {title}
          </p>
        </div>

        <div className="flex items-center gap-[8px] shrink-0">
          <div
            className={cn(
              "flex items-center text-[12px] leading-none font-normal",
              isPositive ? "text-success-1" : "text-danger-1"
            )}
          >
            {isPositive ? "+" : ""}
            {percentage}%
            {isPositive ? (
              <ChevronUp className="w-3 h-3 ml-0.5" />
            ) : (
              <ChevronDown className="w-3 h-3 ml-0.5" />
            )}
          </div>

          <div
            title={information}
            className="cursor-help text-neutral-3 flex items-center hover:text-neutral-2 transition-colors"
          >
            <Info className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[4px]">
          <p className="text-[14px] leading-none font-normal text-[#F5A623]">
            {rentalLabel}
          </p>
          <p className="text-[38px] leading-[0.9] font-semibold text-neutral-2">
            {rentalValue}
          </p>
        </div>

        <div className="flex flex-col gap-[4px] items-start">
          <p className="text-[14px] leading-none font-normal text-[#8DAFD1]">
            {materialLabel}
          </p>
          <p className="text-[38px] leading-[0.9] font-semibold text-neutral-2">
            {materialValue}
          </p>
        </div>
      </div>
    </div>
  );
}