"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";
import { SegmentedHorizontalBarChart } from "@/shared/excomponent/charts/SegmentedHorizontalBarChart";
import { DynamicTable, ColumnConfig } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

type WeeklyTaskRow = {
  status: string;
  dueFor: string;
  typeConcern: string;
  fullDescription: string;
  isAlert?: boolean;
};

export function SummaryTableWidget() {
  const progressSegmentConfig = [
    { key: "red1", label: "Red 1", color: "#F4524D" },
    { key: "red2", label: "Red 2", color: "#E56B6B" },
    { key: "yellow1", label: "Yellow 1", color: "#F0BE5C" },
    { key: "yellow2", label: "Yellow 2", color: "#F7A400" },
    { key: "green1", label: "Green 1", color: "#69C193" },
    { key: "green2", label: "Green 2", color: "#50B97E" },
  ];

  const progressData = [
    {
      label: "Today Progress",
      total: 100,
      segments: {
        red1: 16,
        red2: 18,
        yellow1: 17,
        yellow2: 17,
        green1: 16,
        green2: 16,
      },
    },
  ];

  const weeklyTaskData: WeeklyTaskRow[] = [
    {
      status: "Pending",
      dueFor: "19/09/2026",
      typeConcern: "Chat",
      fullDescription: "View all",
      isAlert: false,
    },
    {
      status: "Pending",
      dueFor: "19/09/2026",
      typeConcern: "Call",
      fullDescription: "View all",
      isAlert: true,
    },
    {
      status: "Pending",
      dueFor: "19/09/2026",
      typeConcern: "Ticket",
      fullDescription: "View all",
      isAlert: false,
    },
    {
      status: "Pending",
      dueFor: "19/09/2026",
      typeConcern: "Call",
      fullDescription: "View all",
      isAlert: true,
    },
    {
      status: "Pending",
      dueFor: "19/09/2026",
      typeConcern: "Call",
      fullDescription: "View all",
      isAlert: true,
    },
    {
      status: "Pending",
      dueFor: "19/09/2026",
      typeConcern: "Ticket",
      fullDescription: "View all",
      isAlert: false,
    },
  ];

  const weeklyTaskColumns: ColumnConfig<WeeklyTaskRow>[] = [
    {
      key: "status",
      header: "Status",
      render: (value: string) => (
        <div className="flex justify-center">
          <StatusBadge
            label={value}
            status="info"
            className="min-w-[96px] justify-center px-[12px] py-[4px] text-[12px]"
          />
        </div>
      ),
    },
    {
      key: "dueFor",
      header: "Due For",
      render: (value: string, row: WeeklyTaskRow) => (
        <div className="flex items-center justify-center gap-[8px]">
          {row.isAlert ? (
            <AlertTriangle className="h-[14px] w-[14px] fill-[#FF4D4F] text-[#FF4D4F]" />
          ) : null}
          <span className="text-[12px] font-normal text-neutral-3">{value}</span>
        </div>
      ),
    },
    {
      key: "typeConcern",
      header: "Type Concern",
      render: (value: string) => (
        <div className="text-center text-[12px] font-normal text-neutral-3">
          {value}
        </div>
      ),
    },
    {
      key: "fullDescription",
      header: "Full Description",
      render: (value: string) => (
        <div className="text-center text-[12px] font-normal text-[#6CC39A] underline underline-offset-2">
          {value}
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col gap-[40px] pt-[55px]">
      <div className="h-[143px] w-full rounded-[16px] border border-neutral-5 bg-white px-[18px] py-[18px]">
        <div className="flex items-start justify-between gap-[12px]">
          <h3 className="text-[18px] font-medium leading-[28px] text-neutral-2">
            Your Today’s Progress
          </h3>
          <InfoTip
            label="Your Today's Progress"
            className="mt-[2px]"
            size="lg"
            iconClassName="h-[18px] w-[18px]"
          />
        </div>

        <p className="mt-[18px] text-[16px] font-normal leading-[24px] text-neutral-3">
          Gearing up. Let’s set the tone for a great session.
        </p>

        <div className="mt-[20px] px-[10px]">
          <SegmentedHorizontalBarChart
            data={progressData}
            segmentConfig={progressSegmentConfig}
            width="100%"
            barSize={24}
            rowGap={0}
            labelWidth={0}
            rounded={true}
            showLegend={false}
            showRowLabel={false}
            showRowTotal={false}
            segmentGap={4}
            showIndicator={true}
            indicatorRowIndex={0}
            indicatorSegmentKey="red1"
            indicatorColor="#5A9BD5"
            indicatorOuterColor="#EAF4FB"
            indicatorSize={12}
            indicatorOuterSize={24}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[8px]">
          <h3 className="text-[24px] font-normal leading-[32px] text-neutral-2">
            Weekly Task
          </h3>
          <InfoTip
            label="Weekly Task"
            size="md"
            iconClassName="h-[16px] w-[16px]"
          />
        </div>

        <div className="h-[345px] w-full rounded-[16px] bg-transparent px-[10px] py-[10px]">
          <DynamicTable
            columns={weeklyTaskColumns}
            data={weeklyTaskData}
            maxHeight={333}
          />
        </div>
      </div>
    </div>
  );
}