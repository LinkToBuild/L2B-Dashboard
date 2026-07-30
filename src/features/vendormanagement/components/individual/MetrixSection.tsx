"use client";

import React from "react";
import { OverviewSection } from "./OverviewSection";
import { InfoCards } from "./InfoCards";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { LegendData } from "@/shared/components/Legend";
import { L2BAreaChart } from "@/shared/excomponent/charts/L2BAreaChart";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

export default function MetrixSection({
  stats, paymentData, performanceData, startDate, onStartDateChange, endDate, onEndDateChange, currentFilter, onFilterChange
}: any) {
  const paymentConfig = { percentage: { label: "Percentage" }, all: { label: "All" }, crane: { label: "Crane" }, truck: { label: "Truck" }, excavator: { label: "Excavator" } };

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[6px]">
        <OverviewSection startDate={startDate} onStartDateChange={onStartDateChange} endDate={endDate} onEndDateChange={onEndDateChange} currentFilter={currentFilter} onFilterChange={onFilterChange} />
        <InfoCards stats={stats} />
      </div>
      <div className="flex flex-col gap-[19px]">
        <div className="flex gap-4 place-items-center">
          <p className="text-neutral-1 text-[24px] font-medium">Booking & Earnings</p>
          <InfoTip label="Booking & Earnings" />
        </div>
        <div className="flex gap-[10px]">
          <div className="flex gap-[12px] w-[30%]">
            <ChartPieDonut data={paymentData} config={paymentConfig} dataKey="percentage" nameKey="method" centerLabel="Total Machines" centerValue="03" width={247} height={247} />
            <div className="w-[144px] h-[108px] flex flex-col gap-[12px]">
              <LegendData color="#FEB637" label="All" percentage={null} />
              <LegendData color="#CACACA" label="Crane" percentage={20} />
              <LegendData color="#CACACA" label="Truck" percentage={30} />
              <LegendData color="#CACACA" label="Excavator" percentage={50} />
            </div>
          </div>
          <div className="w-1/3">
            <L2BAreaChart data={performanceData} xAxisKey="day" dataKey="score" color="#FEC869" height={241} showLegend={false} />
          </div>
          <div className="w-1/3">
            <L2BAreaChart data={performanceData} xAxisKey="day" dataKey="score" color="#6BC497" height={241} showLegend={false} />
          </div>
        </div>
      </div>
    </div>
  );
}