"use client";

import React from "react";
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { DynamicTable, ColumnConfig } from "@/shared/components/Table";
import { DeptPerformanceData, EscalatedData } from "../../types";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { L2BButton } from "@/design-system/components/L2BButton";

interface SummaryTableProps {
  deptPerformance: DeptPerformanceData[];
  escalatedTickets: EscalatedData[];
}

export function SummaryTableWidget({ deptPerformance, escalatedTickets }: SummaryTableProps) {
  const perfColumns: ColumnConfig<DeptPerformanceData>[] = [
    { header: "Person", key: "person", width: 200, render: (val: string) => <span className="text-neutral-2">{val}</span> },
    {
      header: "Performance", key: "performance", width: 180, align: "center",
      render: (value: number, row: DeptPerformanceData) => {
        const isPositive = value >= 0;
        return (
          <div className={`flex items-center justify-center gap-1.5 text-sm ${isPositive ? "text-success-1" : "text-danger-1"}`}>
            {row.hasWarning && <AlertTriangle className="w-4 h-4 fill-danger-1 text-white" />}
            <span>{isPositive ? "+" : ""}{value} %</span>
            {isPositive ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </div>
        );
      },
    },
    { header: "Total Resolved", key: "totalResolved", width: 150, align: "center", render: (val: number) => <span className="text-neutral-3">{val}</span> },
    { header: "Full Profile", key: "fullProfile", width: 150, align: "center", render: () => <L2BButton type="button" variant="bgNone" size="auto" className="text-success-1 font-normal underline hover:text-success-2 transition-colors">View all</L2BButton> },
  ];

  const escColumns: ColumnConfig<EscalatedData>[] = [
    { header: "Status", key: "status", width: 150, align: "center", render: (val: string) => <span className="bg-[#EEF4FB] text-[#6993C0] px-4 py-1.5 rounded-full text-sm font-medium">{val}</span> },
    {
      header: "Due For", key: "dueFor", width: 180, align: "center",
      render: (value: string, row: EscalatedData) => (
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-3">
          {row.hasWarning && <AlertTriangle className="w-4 h-4 fill-danger-1 text-white" />}
          <span>{value}</span>
        </div>
      ),
    },
    { header: "Type Concern", key: "typeConcern", width: 150, align: "center", render: (val: string) => <span className="text-neutral-3 text-sm">{val}</span> },
    { header: "Full Description", key: "fullDescription", width: 150, align: "center", render: () => <L2BButton type="button" variant="bgNone" size="auto" className="text-success-1 text-sm font-normal underline hover:text-success-2 transition-colors">View all</L2BButton> },
  ];

  return (
    <div className="px-[16px] flex flex-col justify-between w-1/2">
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-4 place-items-center">
          <p className="text-[24px] text-neutral-1 font-normal">Department Performance</p>
          <InfoTip label="Department Performance" />
        </div>
        <DynamicTable columns={perfColumns} data={deptPerformance} maxHeight={208} />
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-4 place-items-center">
          <p className="text-[24px] text-neutral-1 font-normal">Escalated Ticket</p>
          <InfoTip label="Escalated Ticket" />
        </div>
        <DynamicTable columns={escColumns} data={escalatedTickets} maxHeight={297} />
      </div>
    </div>
  );
}