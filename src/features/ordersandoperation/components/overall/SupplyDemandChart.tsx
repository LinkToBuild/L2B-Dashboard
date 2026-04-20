"use client";

import React from "react";
// import { LineCharts } from "@/shared/excomponent/charts/LineChart";
import SectionWrapper from "@/shared/components/SectionWrapper";
// import { InfoCards } from "./InfoCards";
// import { RateIndicator } from "./RateIndicator";
import { StackedBarChart } from "@/shared/excomponent/charts/StackedBarGraph";
import {  SupplyDemandData } from "@/features/ordersandoperation/types/index";
import { Info } from "lucide-react";
export default function SupplyDemandChart({ data }: { data: SupplyDemandData[] }) {
  const chartSeries = [ { dataKey: "availability", label: "Availability", color: "#FBB344" }, { dataKey: "requirement", label: "Requirement", color: "#8EADD5" } ];
 

  const supplyDemandData = [
    { name: "Excavators", availability: 3800, requirement: 1200 },
    { name: "Wheel Loader", availability: 2700, requirement: 900 },
    { name: "Backhoe Loader", availability: 2000, requirement: 600 },
    { name: "Bulldozer", availability: 3000, requirement: 1000 },
    { name: "Trailers", availability: 3300, requirement: 1100 },
    { name: "Trucks", availability: 500, requirement: 3400 }, // Huge requirement gap here!
    { name: "Tipper", availability: 2600, requirement: 800 },
    { name: "Transit Mixer", availability: 2600, requirement: 800 },
    { name: "Lift", availability: 2200, requirement: 700 },
    { name: "Crane", availability: 4800, requirement: 300 },
    { name: "Borewell", availability: 2200, requirement: 700 },
    { name: "Dewatering Pumps", availability: 2600, requirement: 800 },
    { name: "Generators", availability: 3300, requirement: 1100 },
    { name: "Compactors", availability: 3800, requirement: 1200 },
    { name: "Self Loader", availability: 4400, requirement: 0 },
  ];

  
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-5 place-items-center">
        <p className="text-[24px] font-normal">Supply Demand Gap (Rental)</p>
        <Info className="w-5 h-5"></Info>
      </div>
      <StackedBarChart
        data={supplyDemandData}
        series={chartSeries}
        yAxisLabel="Supply Demand Gap"
        xAxisLabel="" 
        barWidth={12} 
      />
    </div>
  );
}
