"use client";

import React from "react";
import { LineCharts } from "@/shared/excomponent/charts/LineChart";
import { Info } from "lucide-react";
import { BarGraph } from "@/shared/excomponent/charts/BarGraph";
import { StackedBarChart } from "@/shared/excomponent/charts/StackedBarGraph";
import { CampaignPerformanceData, ChannelDistributionData, LeadScoreData } from "@/features/marketingandpromotion/types/index";

interface GraphSectionProps {
  campaignData: CampaignPerformanceData[];
  channelData: ChannelDistributionData[];
  leadScoreData: LeadScoreData[];
}

export function GraphSection({ campaignData, channelData, leadScoreData }: GraphSectionProps) {
  const chartLines = [
    { dataKey: "campaign1", name: "Campaign 1", color: "#FBBF24" },
    { dataKey: "campaign2", name: "Campaign 2", color: "#3B82F6" },
    { dataKey: "campaign3", name: "Campaign 3", color: "#6BC497" },
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

  const stackchartSeries = [
    { dataKey: "organic", label: "Organic Impressions", color: "#FBBF24" },
    { dataKey: "paid", label: "Paid Impressions", color: "#4682B4" },
  ];

  return (
    <div className="w-full flex justify-between gap-[22px]">
      <div className="w-[382px] h-[211px]">
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-3 place-items-center">
            <p className="text-[18px] 2xl:text-[24px] font-normal text-neutral-1">Campaign Performance</p>
            <Info className="w-4 h-4 text-neutral-3" />
          </div>
          <LineCharts data={campaignData} lines={chartLines} xAxisKey="day" yAxisLabel="Total Impression" height={211} />
        </div>
      </div>
      <div className="w-[585px] flex flex-col gap-4">
        <div className="flex gap-3 place-items-center">
          <p className="text-[18px] 2xl:text-[24px] text-neutral-1 font-normal">Channel Distribution</p>
          <Info className="w-4 h-4 text-neutral-3" />
        </div>
        <div>
          <BarGraph data={channelData} series={chartSeries} xAxisKey="groupLabel" width={585} height={230} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 place-items-center">
          <p className="text-[18px] 2xl:text-[24px] text-neutral-1 font-normal">Avg Lead Score</p>
          <Info className="w-4 h-4 text-neutral-3" />
        </div>
        <StackedBarChart width='100%' height={230} data={leadScoreData} series={stackchartSeries} />
      </div>
    </div>
  );
}