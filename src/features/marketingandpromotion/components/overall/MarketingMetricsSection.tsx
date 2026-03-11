"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";
import { LineCharts, LineConfig } from "@/shared/excomponent/charts/LineChart";
import { Info } from "lucide-react";
import { BarGraph } from "@/shared/excomponent/charts/BarGraph";
import { StackedBarChart } from "@/shared/excomponent/charts/StackedBarGraph";

export function GraphSection() {
  // const chartLines: LineConfig[] = [
  //   { dataKey: "campaign1", name: "Campaign 1", color: "#FBBF24" }, // Yellow/Orange
  //   { dataKey: "campaign2", name: "Campaign 2", color: "#34D399" }, // Green
  //   { dataKey: "campaign3", name: "Campaign 3", color: "#3B82F6" }, // Blue
  // ];

  const chartData = [
    { day: "3", campaign1: 21000, campaign2: 11000 },
    { day: "5", campaign1: 26000, campaign2: 11000 },
    { day: "8", campaign1: 22000, campaign2: 11000 },
    { day: "10", campaign1: 24000, campaign2: 11000 },
    { day: "13", campaign1: 28000, campaign2: 12000 },
    { day: "15", campaign1: 31000, campaign2: 33000 }, // Blue peaks here
    { day: "18", campaign1: 40000, campaign2: 28000 }, // Orange peaks here
    { day: "20", campaign1: 34000, campaign2: 15000 },
    { day: "23", campaign1: 36000, campaign2: 5000 }, // Blue bottoms out here
    { day: "25", campaign1: 38000, campaign2: 7000 },
    { day: "28", campaign1: 30000, campaign2: 22000 },
    { day: "30", campaign1: 26000, campaign2: 29000 },
  ];

  const chartLines = [
    { dataKey: "campaign1", name: "Campaign 1", color: "#FBBF24" }, // The Orange/Yellow line
    { dataKey: "campaign2", name: "Campaign 2", color: "#3B82F6" }, // The Blue line
    { dataKey: "campaign3", name: "Campaign 3", color: "#6BC497" },
  ];

  const infoCardsData = [
    {
      title: "Total Impression",
      Stats: "12,091",
      percentage: -20.89,
      information:
        "Total number of times your ads or content were displayed to users.",
    },
    {
      title: "Total Clicks",
      Stats: "10,091",
      percentage: -20.89,
      information: "Total number of times users clicked on your ads or links.",
    },
    {
      title: "Conversion Rate",
      Stats: "19%",
      percentage: -20.89,
      information:
        "Percentage of clicks that resulted in a successful action or lead.",
    },
    {
      title: "Cost per Acquisition",
      Stats: "₹1209",
      percentage: -20.89,
      information:
        "Average cost spent on marketing to acquire a single customer.",
    },
    {
      title: "Revenue Generated",
      Stats: "₹9,039",
      percentage: -20.89,
      information:
        "Total income generated directly from these marketing campaigns.",
    },
  ];

  const barChartData = [
    {
      name: "Meta",
      costValue: 40000, // The actual Y-axis height
      displayCost: "₹12,000", // Top line of X-axis
      displayPercentage: "15%", // Bottom line of X-axis
      color: "#4682B4", // Blue
    },
    {
      name: "Google",
      costValue: 6000,
      displayCost: "₹100",
      displayPercentage: "5%",
      color: "#F6C15B", // Yellow
    },
    {
      name: "LinkedIn",
      costValue: 51000,
      displayCost: "₹20,000",
      displayPercentage: "30%",
      color: "#CFE1F0", // Light Blue
    },
    {
      name: "SMS",
      costValue: 6000,
      displayCost: "₹100",
      displayPercentage: "5%",
      color: "#C1E4CE", // Light Green
    },
    {
      name: "Push Notification",
      costValue: 46000,
      displayCost: "₹15,000",
      displayPercentage: "20%",
      color: "#CECECE", // Gray
    },
    {
      name: "Email",
      costValue: 40000,
      displayCost: "₹12,000",
      displayPercentage: "15%",
      color: "#FAD0D6", // Pink
    },
    {
      name: "In App",
      costValue: 38000,
      displayCost: "₹11,000",
      displayPercentage: "10%",
      color: "#FDE093", // Light Orange
    },
  ];

  const chartSeries = [
    { dataKey: "meta", label: "Meta", color: "#4682B4" },
    { dataKey: "google", label: "Google", color: "#F6C15B" },
    { dataKey: "linkedin", label: "LinkedIn", color: "#CFE1F0" },
    { dataKey: "sms", label: "SMS", color: "#C1E4CE" },
    { dataKey: "push", label: "Push Notification", color: "#CECECE" },
    { dataKey: "email", label: "Email", color: "#FAD0D6" },
    { dataKey: "inapp", label: "In App", color: "#FDE093" },
  ];

  const GraphData = [
    {
      groupLabel: "Cost & Percentage", // This string will sit at the bottom of the X-axis
      meta: 40000,
      google: 6000,
      linkedin: 51000,
      sms: 6000,
      push: 46000,
      email: 40000,
      inapp: 38000,
    },
  ];

  const stackchartSeries = [
    { dataKey: "organic", label: "Organic Impressions", color: "#FBBF24" }, // The Yellow bottom
    { dataKey: "paid", label: "Paid Impressions", color: "#4682B4" }, // The Blue top
  ];

  const stackchartData = [
    { organic: 8000, paid: 2000 },
    { organic: 35000, paid: 10000 },
    { organic: 39000, paid: 12000 },
    { organic: 35000, paid: 10000 },
    { organic: 13000, paid: 4000 },
    { organic: 16000, paid: 5000 },
    { organic: 35000, paid: 10000 },
    { organic: 24000, paid: 6000 },
    { organic: 30000, paid: 9000 },
    { organic: 35000, paid: 10000 },
    { organic: 28000, paid: 8000 },
    { organic: 34000, paid: 10000 },
  ];

  return (
    <>
      <div className="w-full flex justify-between">
        <div className="w-[382px] h-[211px]">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-3 place-items-center">
              <p className="text-[18px] 2xl:text-[24px] font-normal text-neutral-1">
                Campaign Performance{" "}
              </p>
              <Info className="w-4 h-4 text-neutral-3"></Info>
            </div>
            <LineCharts
              data={chartData}
              lines={chartLines}
              xAxisKey="day" // Tells the chart to use the "day" property for the bottom labels
              yAxisLabel="Total Impression"
              height={211} // Gives it plenty of room to breathe vertically
            />
          </div>
        </div>
        <div className="w-[585px] flex flex-col gap-4">
          <div className="flex gap-3 place-items-center">
            <p className="text-[18px] 2xl:text-[24px] text-neutral-1 font-normal">
              Channel Distribution
            </p>
            <Info className="w-4 h-4 text-neutral-3"></Info>
          </div>
          <div>
            <BarGraph
              data={GraphData}
              series={chartSeries}
              xAxisKey="groupLabel"
              width={585} // Pass a number for pixels
              height={230}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 place-items-center">
            <p className="text-[18px] 2xl:text-[24px] text-neutral-1 font-normal">
              Avg Lead Score
            </p>
            <Info className="w-4 h-4 text-neutral-3"></Info>
          </div>
          <StackedBarChart width={224} height={230} data={stackchartData} series={stackchartSeries} />
        </div>
      </div>
    </>
  );
}
