"use client";

import * as React from "react";
import { Info } from "lucide-react";
import { SegmentedHorizontalBarChart } from "@/shared/excomponent/charts/SegmentedHorizontalBarChart";

const segmentConfig = [
  { key: "aux1", label: "Auxiliary 1", color: "#38678C" },
  { key: "aux2", label: "Auxiliary 2", color: "#4F8FC3" },
  { key: "aux3", label: "Auxiliary 3", color: "#8FB1D2" },
  { key: "aux4", label: "Auxiliary 4", color: "#BDD1E2" },
  { key: "aux5", label: "Auxiliary 5", color: "#D7E1EA" },
];

const rentalOrdersData = [
  {
    label: "Earth Moving",
    total: 40,
    segments: {
      aux1: 18,
      aux2: 11,
      aux3: 6,
      aux4: 5,
      aux5: 0,
    },
  },
  {
    label: "Transportation",
    total: 20,
    segments: {
      aux1: 13,
      aux2: 7,
      aux3: 4,
      aux4: 3,
      aux5: 0,
    },
  },
  {
    label: "Lifts / Arial Equipment",
    total: 20,
    segments: {
      aux1: 24,
      aux2: 14,
      aux3: 6,
      aux4: 5,
      aux5: 0,
    },
  },
  {
    label: "Others",
    total: 20,
    segments: {
      aux1: 8,
      aux2: 4,
      aux3: 2,
      aux4: 1,
      aux5: 5,
    },
  },
];

const materialOrdersData = [
  {
    label: "Earth Moving",
    total: 40,
    segments: {
      aux1: 16,
      aux2: 12,
      aux3: 7,
      aux4: 5,
      aux5: 0,
    },
  },
  {
    label: "Transportation",
    total: 20,
    segments: {
      aux1: 10,
      aux2: 8,
      aux3: 4,
      aux4: 3,
      aux5: 0,
    },
  },
  {
    label: "Lifts / Arial Equipment",
    total: 20,
    segments: {
      aux1: 20,
      aux2: 16,
      aux3: 8,
      aux4: 6,
      aux5: 0,
    },
  },
  {
    label: "Others",
    total: 20,
    segments: {
      aux1: 6,
      aux2: 4,
      aux3: 3,
      aux4: 2,
      aux5: 5,
    },
  },
];

export default function PaymentMetricsWidget() {
  const [activeTab, setActiveTab] = React.useState<"rental" | "material">(
    "rental"
  );

  const chartData =
    activeTab === "rental" ? rentalOrdersData : materialOrdersData;

  return (
    <div className="w-full">
      <div className="mb-[14px] flex items-center gap-[6px]">
        <button
          type="button"
          onClick={() => setActiveTab("rental")}
          className={`text-[16px] leading-[20px] ${
            activeTab === "rental"
              ? "text-[#38678C] underline underline-offset-[3px]"
              : "text-neutral-2"
          }`}
        >
          Rental Orders
        </button>

        <span className="text-neutral-3">|</span>

        <button
          type="button"
          onClick={() => setActiveTab("material")}
          className={`text-[16px] leading-[20px] ${
            activeTab === "material"
              ? "text-[#38678C] underline underline-offset-[3px]"
              : "text-neutral-2"
          }`}
        >
          Material Orders
        </button>

        <Info className="h-[12px] w-[12px] text-neutral-3" />
      </div>

      <SegmentedHorizontalBarChart
        data={chartData}
        segmentConfig={segmentConfig}
        width="100%"
        height={220}
        barSize={16}
        rowGap={24}
        labelWidth={160}
        valueFormatter={(value: number) => `${value}%`}
        rounded={true}
        showLegend={false}
      />
    </div>
  );
}