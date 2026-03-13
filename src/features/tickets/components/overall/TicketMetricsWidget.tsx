"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { L2BAreaChart } from "@/shared/excomponent/charts/L2BAreaChart";
import { Info } from "lucide-react";
import { InfoCards } from "./InfoCards";

export function TicketMetricsWidget() {
  const apiPerformanceData = [
    { day: "1", score: 40 },
    { day: "2", score: 65 },
    { day: "3", score: 45 },
    { day: "4", score: 80 },
    { day: "5", score: 55 },
    { day: "6", score: 85 },
    { day: "7", score: 60 },
    { day: "8", score: 110 }, // The big peak!
    { day: "9", score: 75 },
    { day: "10", score: 90 },
    { day: "11", score: 65 },
    { day: "12", score: 100 },
    { day: "13", score: 85 },
    { day: "14", score: 105 },
    { day: "15", score: 70 },
    { day: "16", score: 80 },
  ];

  const apiBookingData = [
    { date: "Jan 5", total: 2500 },
    { date: "Jan 10", total: 3200 },
    { date: "Jan 15", total: 4100 },
  ];

  const ticketData = [
    { status: "resolved", count: 144, fill: "#6FC295" }, // Green
    { status: "unassigned", count: 14, fill: "#77A1D3" }, // Blue
    { status: "assigned", count: 70, fill: "#B9D1E8" }, // Light Blue
    { status: "escalated", count: 30, fill: "#D4E6F1" }, // Very Light Blue
  ];

  const ticketConfig = {
    count: { label: "Tickets" },
    resolved: { label: "Resolved" },
    unassigned: { label: "Unassigned" },
    assigned: { label: "Assigned" },
    escalated: { label: "Escalated" },
  };
  return (
    <>
      <div className="flex flex-col w-full gap-[38px]">
        <div className="w-full">
          <TableToolBar
            title="Overall Ticket"
            showSearch={false}
          ></TableToolBar>
        </div>
        <div className="flex ">
          <div className="w-1/2 flex">
            <div className="">
              <div className="flex flex-col gap-[18px]">
                <ChartPieDonut
                  data={ticketData}
                  config={ticketConfig}
                  dataKey="count" // The key containing the numbers
                  nameKey="status" // The key containing the labels
                  centerLabel="Total Tickets"
                  centerValue="134"
                  width={320} // Adjust size easily!
                  height={320}
                />
                <div className=" w-full flex flex-col p-[12px] gap-[18px]">
                  <div className="flex w-full justify-between">
                    <p className="text-[16px] font-normal">Work performance</p>
                    <p className="text-danger-1 text-[12px] font-normal">
                      -20.89%
                    </p>
                    <Info className="text-neutral-3 w-4 h-4"></Info>
                  </div>
                  <L2BAreaChart
                    data={apiPerformanceData}
                    xAxisKey="day"
                    dataKey="score"
                    color="#8DAFD1" // The soft blue from your image
                    height={130}
                    showXAxis={false} // Turning off axes for a clean look!
                    showYAxis={false}
                    showLegend={true}
                    legendLabel="Great Performance"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2">
            <InfoCards></InfoCards>
          </div>
        </div>
      </div>
    </>
  );
}
