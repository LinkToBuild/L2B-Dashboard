"use client";

import * as React from "react";
import { SegmentedHorizontalBarChart } from "@/shared/excomponent/charts/StackedBarChart";

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

interface PaymentMetricsWidgetProps {
  activeTab?: "rental" | "material";
}

export default function PaymentMetricsWidget({
  activeTab = "rental",
}: PaymentMetricsWidgetProps) {
  const chartData =
    activeTab === "rental" ? rentalOrdersData : materialOrdersData;

  return (
    <div className="w-full pt-[4px]">
      <SegmentedHorizontalBarChart
        data={chartData}
        segmentConfig={segmentConfig}
        width="100%"
        height={240}
        barSize={16}
        rowGap={26}
        labelWidth={180}
        valueFormatter={(value) => `${value}%`}
        rounded={true}
        showLegend={false}
        className="max-w-[860px]"
      />
    </div>
  );
}