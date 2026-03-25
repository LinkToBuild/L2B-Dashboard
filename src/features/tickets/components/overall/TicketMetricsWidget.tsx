"use client";

import React from "react";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { L2BAreaChart } from "@/shared/excomponent/charts/L2BAreaChart";
import { Info } from "lucide-react";
import { InfoCards } from "./InfoCards";
import { AreaChartData, DonutChartData, InfoCardData } from "../../types";

interface TicketMetricsProps {
  performanceData: AreaChartData[];
  donutData: DonutChartData[];
  infoCardsData: InfoCardData[];
  // ADD THESE TWO PROPS
  currentFilter: string;
  onFilterChange: (val: string) => void;
}

export function TicketMetricsWidget({ 
  performanceData, donutData, infoCardsData, currentFilter, onFilterChange 
}: TicketMetricsProps) {

  const metricsFilterItems = [
    { label: "Daily", onClick: () => onFilterChange("Daily") },
    { label: "Weekly", onClick: () => onFilterChange("Weekly") },
    { label: "Monthly", onClick: () => onFilterChange("Monthly") },
    { label: "Yearly", onClick: () => onFilterChange("Yearly") },
  ];


  const ticketConfig = {
    count: { label: "Tickets" },
    resolved: { label: "Resolved" },
    unassigned: { label: "Unassigned" },
    assigned: { label: "Assigned" },
    escalated: { label: "Escalated" },
  };

  return (
    <div className="flex flex-col w-full gap-[38px]">
      <div className="w-full">
        <TableToolBar 
          title="Overall Ticket" 
          showSearch={false} 
          filterItems={metricsFilterItems} // <-- Pass the items to the shared toolbar!
        />
      </div>
      <div className="flex">
        <div className="w-1/2 flex">
          <div className="flex flex-col gap-[18px]">
            <ChartPieDonut
              data={donutData}
              config={ticketConfig}
              dataKey="count"
              nameKey="status"
              centerLabel="Total Tickets"
              centerValue="134"
              width={320}
              height={320}
            />
            <div className="w-full flex flex-col p-[12px] gap-[18px]">
              <div className="flex w-full justify-between">
                <p className="text-[16px] font-normal">Work performance</p>
                <p className="text-danger-1 text-[12px] font-normal">-20.89%</p>
                <Info className="text-neutral-3 w-4 h-4" />
              </div>
              <L2BAreaChart
                data={performanceData}
                xAxisKey="day"
                dataKey="score"
                color="#8DAFD1"
                height={130}
                showXAxis={false}
                showYAxis={false}
                showLegend={true}
                legendLabel="Great Performance"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <InfoCards data={infoCardsData} />
        </div>
      </div>
    </div>
  );
}