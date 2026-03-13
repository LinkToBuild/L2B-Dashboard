import React from "react";
import { OverviewSection } from "./OverviewSection";
import { InfoCards } from "./InfoCards";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { LegendData } from "@/shared/components/Legend";
import { L2BAreaChart } from "@/shared/excomponent/charts/L2BAreaChart";
import { Info } from "lucide-react";

export default function MetrixSection() {
  const paymentData = [
    { method: "crane", percentage: 20, fill: "#FEB637" }, // Orange/Amber
    { method: "truck", percentage: 30, fill: "#FEB637" }, // Orange/Amber
    { method: "excavator", percentage: 50, fill: "#FEB637" }, // Orange/Amber
  ];

  const paymentConfig = {
    percentage: { label: "Percentage" },
    all: { label: "All" },
    crane: { label: "Crane" },
    truck: { label: "Truck" },
    excavator: { label: "Excavator" },
  };

  const apiPerformanceData = [
    { day: "1", score: 2500 },
    { day: "2", score: 2200 },
    { day: "3", score: 2600 },
    { day: "4", score: 2400 },
    { day: "5", score: 2750 },
    { day: "6", score: 2300 },
    { day: "7", score: 2450 },
    { day: "8", score: 2200 },
    { day: "9", score: 2500 },
    { day: "10", score: 2350 },
    { day: "11", score: 3000 },
    { day: "12", score: 2700 },
    { day: "13", score: 3100 },
    { day: "14", score: 3300 },
    { day: "15", score: 3150 },
    { day: "16", score: 2950 },
    { day: "17", score: 3100 },
    { day: "18", score: 4100 }, // The big peak!
    { day: "19", score: 3500 },
    { day: "20", score: 3750 },
    { day: "21", score: 3400 },
    { day: "22", score: 3800 },
    { day: "23", score: 3600 },
    { day: "24", score: 3600 },
    { day: "25", score: 4000 },
    { day: "26", score: 3500 },
    { day: "27", score: 3650 },
    { day: "28", score: 3100 },
    { day: "29", score: 3200 },
    { day: "30", score: 2850 },
    { day: "31", score: 3050 },
  ];
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[6px]">
        <OverviewSection></OverviewSection>
        <InfoCards></InfoCards>
      </div>
      <div className=" flex flex-col gap-[19px]">
        <div className="flex gap-4 place-items-center">
          <p className="text-neutral-1 text-[24px] font-medium">
            Booking & Earnings
          </p>
          <Info className="w-4 h-4 text-neutral-3"></Info>
        </div>
        <div className="flex gap-[10px]">
          <div className=" flex gap-[12px] w-[30%] ">
            <ChartPieDonut
              data={paymentData}
              config={paymentConfig}
              dataKey="percentage" // The key containing the numbers
              nameKey="method" // The key containing the labels
              centerLabel="Total Machines"
              centerValue="03"
              width={247} // Adjust size easily!
              height={247}
            />
            <div className=" w-[144px] h-[108px] flex flex-col gap-[12px]">
              <LegendData
                color="#FEB637"
                label="All"
                percentage={null}
              ></LegendData>
              <LegendData
                color="#CACACA"
                label="Crane"
                percentage={20}
              ></LegendData>
              <LegendData
                color="#CACACA"
                label="Truck"
                percentage={30}
              ></LegendData>
              <LegendData
                color="#CACACA"
                label="Excavator"
                percentage={50}
              ></LegendData>
            </div>
          </div>
          <div className="w-1/3 ">
            <L2BAreaChart
              data={apiPerformanceData}
              xAxisKey="day"
              dataKey="score"
              color="#FEC869" // The soft blue from your image
              height={241}
              showLegend={false}
              // legendLabel="Great Performance"
            />
          </div>
          <div className="w-1/3 ">
            <L2BAreaChart
              data={apiPerformanceData}
              xAxisKey="day"
              dataKey="score"
              color="#6BC497" // The soft blue from your image
              height={241}
              showLegend={false}
              // legendLabel="Great Performance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
