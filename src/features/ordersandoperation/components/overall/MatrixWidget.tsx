"use client";

import React from "react";
import { LineCharts } from "@/shared/excomponent/charts/LineChart";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { InfoCards } from "./InfoCards";
import {RateIndicator} from "./RateIndicator";
export default function MatrixWidget() {
  const chartData = [
    { day: "0", grossSale: 2500 },
    { day: "3", grossSale: 2200 },
    { day: "5", grossSale: 2700 },
    { day: "8", grossSale: 2300 },
    { day: "10", grossSale: 2400 },
    { day: "12", grossSale: 2900 },
    { day: "15", grossSale: 3300 },
    { day: "18", grossSale: 4100 }, // The highest peak
    { day: "20", grossSale: 3400 }, // The point selected in the tooltip
    { day: "22", grossSale: 3700 },
    { day: "23", grossSale: 3400 },
    { day: "25", grossSale: 3800 },
    { day: "28", grossSale: 3800 }, // The flat projection at the end
    { day: "30", grossSale: 3800 },
  ];

  const chartLines = [
    { dataKey: "grossSale", name: "Gross Sale", color: "#8E8E8E" }, // The single grey line
  ];

  let infoCardsData = [
    {
      title: "Gross Sale",
      Stats: "₹9,844",
      percentage: -20.89,
      information: "Total gross sales for the selected period.",
    },
    {
      title: "Net Sale",
      Stats: "₹ 987",
      percentage: -20.89,
      information: "Total net sales after deductions.",
    },
  ];

  let infoCardsData2 = [
    {
      title: "Error Rate",
      Stats: "9%",
      percentage: -20.89,
      information: "Percentage of orders processed with errors.",
    },
    {
      title: "Perfect Order Rate",
      Stats: "89%",
      percentage: -20.89,
      information: "Percentage of orders completed without any issues.",
    },
  ];
  return (
    <SectionWrapper className="w-full flex gap-[40px]">
      <div className="w-[50%] flex justify-between">
        <LineCharts
          data={chartData}
          lines={chartLines}
          xAxisKey="day" // Tells the chart to use the "day" property for the bottom labels
          yAxisLabel="Total Impression"
          height={246} // Gives it plenty of room to breathe vertically
          width={382}
          showLegend={false}
        />
        <div className="">
          <InfoCards data={infoCardsData} className="flex flex-col justify-between  h-full"></InfoCards>
        </div>
      </div>
      <div className="w-[50%] flex justify-between">
        <RateIndicator></RateIndicator>
         <div className="">
          <InfoCards data={infoCardsData2} className="flex flex-col justify-between  h-full"></InfoCards>
        </div>
      </div>
    </SectionWrapper>
  );
}
