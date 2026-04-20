import React from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { InfoCards } from "../overall/InfoCards";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { ChartConfig } from "@/components/ui/chart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { LegendData } from "@/shared/components/Legend";
import mapImg from "@/public/images/mapImg.png";
import Image from "next/image";
import { SideBoard } from "@/shared/components/SideBoard";

export default function DataMatrixSection() {
  const paymentConfig = {
    percentage: { label: "Percentage" },
    upi: { label: "UPI", color: "#356583" }, // Darkest Blue
    cod: { label: "COD", color: "#86A8C3" }, // Medium Blue
    netbanking: { label: "Net Banking", color: "#3F82B7" }, // Bright Blue
    paylater: { label: "Paylater", color: "#CDE0ED" }, // Lightest Blue
  } satisfies ChartConfig;

  const paymentData = [
    { method: "upi", percentage: 28, fill: "356583" },
    { method: "cod", percentage: 30, fill: "var(--color-cod)" },
    { method: "netbanking", percentage: 22, fill: "var(--color-netbanking)" },
    { method: "paylater", percentage: 20, fill: "var(--color-paylater)" },
  ];

  const infoCardsData = [
    {
      title: "Active Orders",
      Stats: "10,90,00",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
    {
      title: "Completed ",
      Stats: "9,000",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
  ];
  const customerData = [
    {
      label: "Total",
      percentage_change: -20.89,
      trend: "down",
      value: "809.8k",
    },
    {
      label: "Active",
      percentage_change: -20.89,
      trend: "down",
      value: "109.8k",
    },
    {
      label: "New",
      percentage_change: 20.89,
      trend: "up",
      value: "109k",
    },
    {
      label: "Repeat",
      percentage_change: 20.89,
      trend: "up",
      value: "309k",
    },
    {
      label: "Potential",
      percentage_change: -20.89,
      trend: "down",
      value: "109k",
    },
    {
      label: "At Risk",
      percentage_change: 20.89,
      trend: "up",
      value: "10k",
    },
    {
      label: "Dormant",
      percentage_change: 20.89,
      trend: "up",
      value: "9k",
    },
    {
      label: "Restricted",
      percentage_change: -20.89,
      trend: "down",
      value: "9k",
    },
  ];
  return (
    <div className="flex w-full gap-[34px]">
      <div className="flex flex-col gap-[30px] ">
        <InfoCards />
        <div className="  flex gap-[10px] 2xl:gap-[33px]">
          <div className=" w-[500px] h-[356px] 2xl:w-[635px] flex flex-col gap-[10px] ">
            <p className="text-[24px] font-normal">Earning</p>
            <div className="w-full flex    border border-neutral-5 justify-evenly p-4 2xl:p-6 rounded-[12px]">
              <div className="">
                <ChartPieDonut
                  data={paymentData}
                  config={paymentConfig}
                  dataKey="percentage" // The key containing the numbers
                  nameKey="method" // The key containing the labels
                  centerLabel="Total Tickets"
                  centerValue="134"
                  width={230} // Adjust size easily!
                  height={230}
                />
              </div>
              <div className=" xl:w-[40%] 2xl:w-[245px] h-[299px] flex flex-col gap-[27px] ">
                <div className="w-full flex flex-col gap-[27px]">
                  {infoCardsData.map((card, index) => (
                    <StatCard
                      key={index}
                      title={card.title}
                      value={card.Stats}
                      percentage={card.percentage}
                      information={card.information}
                    />
                  ))}
                </div>
                <div className=" h-[48px] grid grid-cols-2  ">
                  <LegendData color="#3B82F6" label="UPI" percentage={28} />
                  <LegendData color="#60A5FA" label="COD" percentage={30} />
                  <LegendData
                    color="#93C5FD"
                    label="Net Banking"
                    percentage={22}
                  />
                  <LegendData
                    color="#BFDBFE"
                    label="Paylater"
                    percentage={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[270px] flex flex-col gap-[10px]">
            <p className="text-[24px] text-neutral-1 font-normal">
              High Demand Area
            </p>
            <div className="w-full flex flex-col bg-white shadow-md rounded-[12px] h-[354px]">
              <div className="w-full">
                <Image
                  src={mapImg}
                  alt="Logo"
                  className="h-[280px] w-full rounded-[8px]"
                />
              </div>
              <div className=" flex flex-wrap justify-between gap-2 p-4">
                <LegendData color="#EB6F70" label="High Demand"></LegendData>
                <LegendData color="#8DAFD1" label="Less Demand"></LegendData>
                <LegendData
                  color="#FEC869"
                  label="Slightly Less Demand"
                ></LegendData>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SideBoard
          title="All Customers"
          overallPercentage={-20.89}
          overallTrend="down"
          data={customerData}
        ></SideBoard>
      </div>
    </div>
  );
}
