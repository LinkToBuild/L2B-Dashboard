"use client";

import React from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { OverviewSection } from "./OverviewSection";
import { InfoCards } from "./InfoCards";
import { StackedBarChart } from "@/shared/excomponent/charts/StackedBarGraph";
import { TableToolbar } from "./TableToolbar";
import { ColumnConfig } from "@/shared/components/Table";
import { DynamicTable } from "@/shared/components/Table";
import { ChevronDown } from "lucide-react";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

export default function MetricSection() {
  const stackchartSeries = [
    { dataKey: "organic", label: "Organic Impressions", color: "#FBBF24" }, // Yellow
    { dataKey: "paid", label: "Paid Impressions", color: "#4682B4" }, // Blue
  ];

  const stackchartData = [
    { day: 1, organic: 2900, paid: 900 }, // Total ~3800
    { day: 2, organic: 2200, paid: 600 },
    { day: 3, organic: 0, paid: 0 }, // Gap/Grey bar area
    { day: 4, organic: 1600, paid: 400 },
    { day: 5, organic: 2900, paid: 800 },
    { day: 6, organic: 2400, paid: 700 },
    { day: 7, organic: 2200, paid: 600 },
    { day: 8, organic: 500, paid: 100 },
    { day: 9, organic: 2600, paid: 700 },
    { day: 10, organic: 0, paid: 0 }, // Gap
    { day: 11, organic: 2400, paid: 700 },
    { day: 12, organic: 1300, paid: 300 },
    { day: 13, organic: 2600, paid: 700 },
    { day: 14, organic: 2600, paid: 700 },
    { day: 15, organic: 2900, paid: 800 },
    { day: 16, organic: 700, paid: 200 },
    { day: 17, organic: 0, paid: 0 }, // Gap
    { day: 18, organic: 0, paid: 0 }, // Gap
    { day: 19, organic: 2900, paid: 800 },
    { day: 20, organic: 3800, paid: 1200 }, // Peak ~5000
    { day: 21, organic: 2200, paid: 600 },
    { day: 22, organic: 1300, paid: 300 },
    { day: 23, organic: 2600, paid: 700 },
    { day: 24, organic: 0, paid: 0 }, // Gap
    { day: 25, organic: 2400, paid: 700 },
    { day: 26, organic: 1800, paid: 500 },
    { day: 27, organic: 2600, paid: 700 },
    { day: 28, organic: 3400, paid: 1100 },
    { day: 29, organic: 2900, paid: 800 },
    { day: 30, organic: 0, paid: 0 }, // Gap
  ];

  const mockData = [
    {
      category: "Rental",
      item: "Excavator",
      type: "10 tonnes",
      brand: "JCB",
      person: "#SH331425...",
      site: "5PX4+HQ G...",
      date: "19/09/2026",
    },
    {
      category: "Material",
      item: "Clay bricks",
      type: "Red Bricks",
      brand: "Ambuja",
      person: "Self",
      site: "5PX4+HQ G...",
      date: "27/12/2026",
    },
    {
      category: "Rental",
      item: "Bulldozer",
      type: "10 tonnes",
      brand: "JCB",
      person: "#HV41241...",
      site: "5PX4+HQ G...",
      date: "27/12/2026",
    },
    {
      category: "Material",
      item: "Aggregates",
      type: "White cement",
      brand: "Birla",
      person: "#SH331425...",
      site: "5PX4+HQ G...",
      date: "27/12/2026",
    },
  ];

  const columns: ColumnConfig<any>[] = [
    {
      header: "Category",
      key: "category",
      width: 150,
      align: "center",
    },
    {
      header: "Item",
      key: "item",
      width: 180,
      align: "center",
    },
    {
      header: "Type",
      key: "type",
      width: 180,
      align: "center",
    },
    {
      header: "Brand",
      key: "brand",
      width: 150,
      align: "center",
    },
    {
      header: "Person",
      key: "person",
      width: 180,
      align: "center",
    },
    {
      header: "Site",
      key: "site",
      width: 180,
      align: "center",
    },
    {
      header: "Date",
      key: "date",
      width: 150,
      align: "center",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[6px]">
          <OverviewSection></OverviewSection>
          <InfoCards></InfoCards>
        </div>
        <div className=" w-full flex h-[400px]">
          <div className="w-[47%] p-4 flex flex-col gap-[6px]">
            <div className="w-full flex justify-between">
              <div className="flex place-items-center gap-4">
                <p className="text-[24px] text-neutral-1 font normal">Spend</p>
                <InfoTip label="Spend" size="xs" />
              </div>
              <div className="flex text-danger-1 place-items-center gap-1">
                <p className="text-[12px] font-normal">-20.89%</p>
                <ChevronDown className="h-3 w-3"></ChevronDown>
              </div>
            </div>
            <StackedBarChart
              width="100%"
              height={300}
              data={stackchartData}
              series={stackchartSeries}
            ></StackedBarChart>
          </div>
          <div className="w-[52%]   flex flex-col gap-[6px] p-4">
            <TableToolbar></TableToolbar>
            <DynamicTable
              columns={columns}
              data={mockData}
              minWidth={734}
            ></DynamicTable>
          </div>
        </div>
      </div>
    </>
  );
}
