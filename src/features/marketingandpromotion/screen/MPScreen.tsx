"use client";

import * as React from "react";
import { Header } from "../components/overall/MPHeader";
import { InfoCards } from "../components/overall/InfoCards";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { GraphSection } from "../components/overall/MarketingMetricsSection";
import { TableToolBar } from "../components/overall/TableToolBar";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig, DynamicTable } from "@/shared/components/Table";
import { DataTableWidget } from "@/shared/components/DataTableWidget";

export function MPScreen() {
  const mockData = [
    {
      name: "Name 1",
      status: "Active",
      channel: "1",
      goal: "Engagements",
      targetSize: "10k",
      actualSize: "9.8k",
      impression: "98%",
      click: "30%",
      engagement: "20%",
      conversion: "5%",
      cpc: "70",
      cpa: "10",
      revenue: "90,000",
    },
    {
      name: "Name 2",
      status: "Schedule",
      channel: "+3",
      goal: "Conversion",
      targetSize: "10k",
      actualSize: "2.6k",
      impression: "98%",
      click: "30%",
      engagement: "-",
      conversion: "-",
      cpc: "-",
      cpa: "-",
      revenue: "-",
    },
    {
      name: "Name 3",
      status: "Completed",
      channel: "+3",
      goal: "Click",
      targetSize: "10k",
      actualSize: "1.3k",
      impression: "98%",
      click: "30%",
      engagement: "20%",
      conversion: "5%",
      cpc: "70",
      cpa: "10",
      revenue: "90,000",
    },
    {
      name: "Name 4",
      status: "Active",
      channel: "+3",
      goal: "Conversion",
      targetSize: "10k",
      actualSize: "7.7k",
      impression: "98%",
      click: "30%",
      engagement: "-",
      conversion: "-",
      cpc: "-",
      cpa: "-",
      revenue: "-",
    },
    {
      name: "Name 5",
      status: "Completed",
      channel: "+3",
      goal: "Click",
      targetSize: "10k",
      actualSize: "1k",
      impression: "98%",
      click: "30%",
      engagement: "20%",
      conversion: "5%",
      cpc: "70",
      cpa: "10",
      revenue: "90,000",
    },
    {
      name: "Name 6",
      status: "Active",
      channel: "1",
      goal: "Conversion",
      targetSize: "10k",
      actualSize: "2k",
      impression: "98%",
      click: "30%",
      engagement: "-",
      conversion: "-",
      cpc: "-",
      cpa: "-",
      revenue: "-",
    },
    {
      name: "Name 7",
      status: "Active",
      channel: "1",
      goal: "Click",
      targetSize: "10k",
      actualSize: "8k",
      impression: "98%",
      click: "30%",
      engagement: "20%",
      conversion: "5%",
      cpc: "70",
      cpa: "10",
      revenue: "90,000",
    },
  ];

  const columns: ColumnConfig<any>[] = [
    { header: "Name", key: "name", width: 120, align: "center" },
    {
      header: "Status",
      key: "status",
      width: 140,
      align: "center",
      render: (value: string) => {
        // Mapping the string values to your badge variants
        const statusMap: Record<string, any> = {
          Active: "successLight", // Green pill
          Schedule: "infoLight", // Blue pill
          Completed: "successLight", // Green pill (or use a neutral/gray variant if you have one)
        };
        return (
          <StatusBadge status={statusMap[value] || "neutral"} label={value} />
        );
      },
    },
    { header: "Channel", key: "channel", width: 100, align: "center" },
    { header: "Goal", key: "goal", width: 140, align: "center" },
    { header: "Target size", key: "targetSize", width: 120, align: "center" },
    { header: "Actual size", key: "actualSize", width: 120, align: "center" },
    { header: "Impression", key: "impression", width: 120, align: "center" },
    { header: "Click", key: "click", width: 100, align: "center" },
    { header: "Engagement", key: "engagement", width: 120, align: "center" },
    { header: "Conversion", key: "conversion", width: 120, align: "center" },
    { header: "CPC", key: "cpc", width: 100, align: "center" },
    { header: "CPA", key: "cpa", width: 100, align: "center" },
    { header: "Revenue", key: "revenue", width: 120, align: "center" },
    {
      header: "Manage",
      key: "manage",
      width: 120,
      align: "center",
     render: () => (
        // 👇 Updated this section to use explicit hex colors and underlines
        <button className="text-[#00A85A] underline underline-offset-2 hover:text-green-700 transition-colors font-medium ">
          View Full
        </button>
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
        <Header></Header>
        <SectionWrapper className="flex flex-col gap-[37px]">
          <InfoCards></InfoCards>
          <GraphSection></GraphSection>
          {/* <div className="flex flex-col gap-[10px]">
            <TableToolBar></TableToolBar>
            <DynamicTable columns={columns} data={mockData} />
          </div> */}
          <DataTableWidget
            title="Campaign Report"
            columns={columns}
            data={mockData}
          />
          
        </SectionWrapper>
      </div>
    </>
  );
}
