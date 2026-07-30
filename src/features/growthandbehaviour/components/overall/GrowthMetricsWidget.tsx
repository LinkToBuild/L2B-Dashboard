"use client";

import * as React from "react";
import { LineCharts, LineConfig } from "@/shared/excomponent/charts/LineChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { SideBoard } from "@/shared/components/SideBoard";
import { GrowthMetricsPoint, GBStatCard, GBRFMItem } from "../../types";

interface GrowthMetricsProps {
  chartData: GrowthMetricsPoint[];
  statCardsData: GBStatCard[];
  rfmData: GBRFMItem[];
}

export default function GrowthMetricsWidget({ chartData, statCardsData, rfmData }: GrowthMetricsProps) {
  const chartLines: LineConfig[] = [
    { dataKey: "all", name: "All", color: "#8F8F8F" },
    { dataKey: "andhraPradesh", name: "Andhra Pradesh", color: "#F2AE2E" },
    { dataKey: "vijayawada", name: "Vijayawada", color: "#62C48D" },
    { dataKey: "karnataka", name: "Karnataka", color: "#4289C9" },
    { dataKey: "tamilNadu", name: "Tamil Nadu", color: "#E07A5F" },
    { dataKey: "maharashtra", name: "Maharashtra", color: "#9B5DE5" },
    { dataKey: "telangana", name: "Telangana", color: "#00BBF9" },
    { dataKey: "kerala", name: "Kerala", color: "#F15BB5" },
    { dataKey: "delhi", name: "Delhi", color: "#FEE440" },
  ];

  return (
    <div className="flex items-start gap-[12px] w-full justify-between">
      <div className="w-[382px] shrink-0">
        <LineCharts data={chartData} lines={chartLines} width={382} height={211} xAxisKey="day" yAxisKey="visitors" yAxisLabel="Total Visitors" showLegend={true} />
      </div>

      <div className="grid w-[500px] h-[232px] shrink-0 grid-cols-2 gap-[16px]">
        {statCardsData.map((card) => (
          <StatCard key={card.title} title={card.title} value={card.value} percentage={card.percentage} information={card.information} />
        ))}
      </div>

      <div className="w-[368px] h-[268px] shrink-0 ml-[35px] [&>div]:!w-full [&>div]:!h-full [&>div]:!p-[12px] [&>div]:!gap-[12px] [&>div>div:first-child>p:nth-child(2)]:hidden [&>div>div:last-child]:!gap-[8px] [&>div>div:last-child>div>div]:!justify-between [&>div>div:last-child>div>div]:!items-center [&>div>div:last-child>div>div>p:first-child]:!w-[120px] [&>div>div:last-child>div>div>p:nth-child(2)]:!w-[92px] [&>div>div:last-child>div>div>p:nth-child(2)]:!text-center [&>div>div:last-child>div>div>p:last-child]:!w-[64px] [&>div>div:last-child>div>div>p:last-child]:!text-right">
        <SideBoard title="RFM Score" overallPercentage={-20.89} overallTrend="down" data={rfmData} />
      </div>
    </div>
  );
}