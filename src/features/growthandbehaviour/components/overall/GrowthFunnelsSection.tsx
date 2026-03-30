"use client";

import * as React from "react";
import { useMemo } from "react";
import { Info, ChevronDown } from "lucide-react";
import { FunnelBar } from "@/shared/excomponent/charts/FunnelChart";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { GBFunnelBarRow, GBFunnelMetrics } from "../../types";

function FunnelMetricCard({ metrics }: { metrics: GBFunnelMetrics }) {
  return (
    <div className="w-[166px] h-[92px] rounded-[12px] border border-neutral-6 bg-white p-[10px] flex flex-col justify-between shrink-0">
      <div className="grid grid-cols-[40px_16px_1fr] items-center gap-x-[8px] text-[12px] text-neutral-2">
        <span>CAC</span>
        <Info className="w-3 h-3 text-neutral-3" />
        <span className="px-[8px] py-[1px] rounded-[4px] bg-neutral-7 text-right justify-self-end">
          {metrics.cac}
        </span>
      </div>
      <div className="grid grid-cols-[40px_16px_1fr] items-center gap-x-[8px] text-[12px] text-neutral-2">
        <span>CTR</span>
        <Info className="w-3 h-3 text-neutral-3" />
        <span className="px-[8px] py-[1px] rounded-[4px] bg-neutral-7 text-right justify-self-end">
          {metrics.ctr}
        </span>
      </div>
      <div className="grid grid-cols-[40px_16px_1fr] items-center gap-x-[8px] text-[12px] text-neutral-2">
        <span>LTV</span>
        <Info className="w-3 h-3 text-neutral-3" />
        <span className="px-[8px] py-[1px] rounded-[4px] bg-neutral-7 text-right justify-self-end">
          {metrics.ltv}
        </span>
      </div>
      <div className="flex items-center justify-between text-[12px]">
        <div
          className={`flex items-center gap-[2px] ${metrics.trend === "down" ? "text-danger-1" : "text-success-1"}`}
        >
          <span>{metrics.percentage} %</span>
          <ChevronDown
            className={`w-3 h-3 ${metrics.trend === "up" && "rotate-180"}`}
          />
        </div>
        <span className="text-neutral-3">{metrics.since}</span>
      </div>
    </div>
  );
}

interface FunnelPanelProps {
  title: string;
  rows: GBFunnelBarRow[];
  metrics: GBFunnelMetrics;
  searchValue: string;
  onSearchChange: (value: string) => void;
  currentFilter: string;
  onFilterChange: (value: string) => void;
}

function FunnelPanel({
  title,
  rows,
  metrics,
  searchValue,
  onSearchChange,
  currentFilter,
  onFilterChange,
}: FunnelPanelProps) {
  const filterItems = [
    {
      label: "Default(no campaign)",
      onClick: () => onFilterChange("Default(no campaign)"),
    },
    { label: "Campaign 1", onClick: () => onFilterChange("Campaign 1") },
    { label: "Campaign 2", onClick: () => onFilterChange("Campaign 2") },
    { label: "Campaign 3", onClick: () => onFilterChange("Campaign 3") },
  ];

  const filteredRows = useMemo(() => {
    if (!searchValue) return rows;

    const lowerQuery = searchValue.toLowerCase();
    return rows.filter(
      (row) =>
        row.title.toLowerCase().includes(lowerQuery) ||
        // FIX: Add (row.subtitle || "") to safely handle undefined subtitles
        (row.subtitle || "").toLowerCase().includes(lowerQuery),
    );
  }, [rows, searchValue]);

  return (
    <div className="flex flex-col gap-[12px] min-w-0">
      <TableToolBar
        title={title}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        filterItems={filterItems}
      />
      <div className="relative min-h-[507px] min-w-0">
        <div className="w-full min-w-0">
          <FunnelBar rows={filteredRows} rowGap={14} minWidthPercent={0} />
        </div>
        <div className="absolute right-[18px] bottom-[42px] z-10">
          <FunnelMetricCard metrics={metrics} />
        </div>
      </div>
    </div>
  );
}

interface GrowthMetricsBottomProps {
  rentalFunnel: GBFunnelBarRow[];
  materialFunnel: GBFunnelBarRow[];
  rentalMetrics: GBFunnelMetrics;
  materialMetrics: GBFunnelMetrics;
  rentalSearch: string;
  onRentalSearchChange: (val: string) => void;
  rentalFilter: string;
  onRentalFilterChange: (val: string) => void;
  materialSearch: string;
  onMaterialSearchChange: (val: string) => void;
  materialFilter: string;
  onMaterialFilterChange: (val: string) => void;
}

export default function GrowthFunnelsSection({
  rentalFunnel,
  materialFunnel,
  rentalMetrics,
  materialMetrics,
  rentalSearch,
  onRentalSearchChange,
  rentalFilter,
  onRentalFilterChange,
  materialSearch,
  onMaterialSearchChange,
  materialFilter,
  onMaterialFilterChange,
}: GrowthMetricsBottomProps) {
  return (
    <div className="w-full grid grid-cols-2 gap-[80px] min-w-0">
      <div className="min-w-0">
        <FunnelPanel
          title="Rental Funnel"
          rows={rentalFunnel}
          metrics={rentalMetrics}
          searchValue={rentalSearch}
          onSearchChange={onRentalSearchChange}
          currentFilter={rentalFilter}
          onFilterChange={onRentalFilterChange}
        />
      </div>
      <div className="min-w-0">
        <FunnelPanel
          title="Material Funnel"
          rows={materialFunnel}
          metrics={materialMetrics}
          searchValue={materialSearch}
          onSearchChange={onMaterialSearchChange}
          currentFilter={materialFilter}
          onFilterChange={onMaterialFilterChange}
        />
      </div>
    </div>
  );
}
