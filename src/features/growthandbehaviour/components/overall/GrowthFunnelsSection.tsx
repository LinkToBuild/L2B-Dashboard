"use client";

import * as React from "react";
import { useState } from "react";
import { Info, ChevronDown } from "lucide-react";
import { FunnelBar, FunnelBarRow } from "@/shared/excomponent/charts/FunnelChart";
import { TableToolBar } from "@/shared/components/TableToolBar";

const rentalFunnelRows: FunnelBarRow[] = [
  {
    title: "Home Screen",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "90%" },
    ],
  },
  {
    title: "Selecting SKUs",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "100%" },
    ],
  },
  {
    title: "Work Details",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "80%" },
    ],
  },
  {
    title: "Schedule",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "70%" },
    ],
  },
  {
    title: "Notification",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "60%" },
    ],
  },
  {
    title: "Payment Mode",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "50%" },
    ],
  },
  {
    title: "Payment Gateway",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "40%" },
    ],
  },
  {
    title: "Payment Confirmation",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "30%" },
    ],
  },
];

const materialFunnelRows: FunnelBarRow[] = [
  {
    title: "Home Screen",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "100%" },
    ],
  },
  {
    title: "Selecting SKUs & Brand",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "90%" },
    ],
  },
  {
    title: "Cart",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "80%" },
    ],
  },
  {
    title: "Schedule",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Operator", value: "909" },
      { label: "Engagement", value: "70%" },
    ],
  },
  {
    title: "Notification",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "60%" },
    ],
  },
  {
    title: "Payment Mode",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "50%" },
    ],
  },
  {
    title: "Payment Gateway",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "40%" },
    ],
  },
  {
    title: "Payment Confirmation",
    subtitle: "Total user : 10,909",
    fields: [
      { label: "Admin", value: "10,000" },
      { label: "Engagement", value: "30%" },
    ],
  },
];

const rentalFilterItems = [
  { label: "Default(no campaign)" },
  { label: "Campaign 1" },
  { label: "Campaign 2" },
  { label: "Campaign 3" },
];

const materialFilterItems = [
  { label: "Default(no campaign)" },
  { label: "Campaign 1" },
  { label: "Campaign 2" },
  { label: "Campaign 3" },
];

function FunnelMetricCard() {
  return (
    <div className="w-[166px] h-[92px] rounded-[12px] border border-neutral-6 bg-white p-[10px] flex flex-col justify-between shrink-0">
      <div className="grid grid-cols-[40px_16px_1fr] items-center gap-x-[8px] text-[12px] text-neutral-2">
        <span>CAC</span>
        <Info className="w-3 h-3 cursor-help text-neutral-3" />
        <span className="px-[8px] py-[1px] rounded-[4px] bg-neutral-7 text-right justify-self-end">
          ₹3000
        </span>
      </div>

      <div className="grid grid-cols-[40px_16px_1fr] items-center gap-x-[8px] text-[12px] text-neutral-2">
        <span>CTR</span>
        <Info className="w-3 h-3 cursor-help text-neutral-3" />
        <span className="px-[8px] py-[1px] rounded-[4px] bg-neutral-7 text-right justify-self-end">
          30%
        </span>
      </div>

      <div className="grid grid-cols-[40px_16px_1fr] items-center gap-x-[8px] text-[12px] text-neutral-2">
        <span>LTV</span>
        <Info className="w-3 h-3 cursor-help text-neutral-3" />
        <span className="px-[8px] py-[1px] rounded-[4px] bg-neutral-7 text-right justify-self-end">
          989
        </span>
      </div>

      <div className="flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-[2px] text-danger-1">
          <span>-20.89 %</span>
          <ChevronDown className="w-3 h-3" />
        </div>
        <span className="text-neutral-3">from 20 Feb</span>
      </div>
    </div>
  );
}

function FunnelPanel({
  title,
  rows,
  searchValue,
  onSearchChange,
  filterItems,
}: {
  title: string;
  rows: FunnelBarRow[];
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterItems: { label: string; onClick?: () => void }[];
}) {
  return (
    <div className="flex flex-col gap-[12px] min-w-0">
      <TableToolBar
        title={title}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        showTitle={true}
        showInfo={true}
        showSearch={true}
        showFilter={true}
        // defaultFilterLabel="Default (no campaign)"
        // filterItems={filterItems}
      />

      <div className="relative min-h-[507px] min-w-0">
        <div className="w-full min-w-0">
          <FunnelBar rows={rows} rowGap={14} minWidthPercent={0} />
        </div>

        <div className="absolute right-[18px] bottom-[42px] z-10">
          <FunnelMetricCard />
        </div>
      </div>
    </div>
  );
}

export default function GrowthMetricsBottom() {
  const [rentalSearchValue, setRentalSearchValue] = useState("");
  const [materialSearchValue, setMaterialSearchValue] = useState("");

  return (
    <div className="w-full grid grid-cols-2 gap-[80px] min-w-0">
      <div className="min-w-0">
        <FunnelPanel
          title="Rental Funnel"
          rows={rentalFunnelRows}
          searchValue={rentalSearchValue}
          onSearchChange={setRentalSearchValue}
          filterItems={rentalFilterItems}
        />
      </div>

      <div className="min-w-0">
        <FunnelPanel
          title="Material Funnel"
          rows={materialFunnelRows}
          searchValue={materialSearchValue}
          onSearchChange={setMaterialSearchValue}
          filterItems={materialFilterItems}
        />
      </div>
    </div>
  );
}


