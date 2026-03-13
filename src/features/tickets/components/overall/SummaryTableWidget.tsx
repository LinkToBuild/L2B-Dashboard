"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";
import { Info } from "lucide-react";
import { DynamicTable } from "@/shared/components/Table";
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { ColumnConfig } from "@/shared/components/Table";

export function SummaryTableWidget() {
  const mockPerformanceData = [
    {
      person: "CS (#0293048)",
      performance: -20.89,
      hasWarning: false,
      totalResolved: 109,
    },
    {
      person: "CS (#0293048)",
      performance: -80.89,
      hasWarning: true, // Triggers the red alert triangle
      totalResolved: 25,
    },
    {
      person: "CS (#0293048)",
      performance: 20.89,
      hasWarning: false,
      totalResolved: 55,
    },
  ];

  const columns: ColumnConfig<any>[] = [
    {
      header: "Person",
      key: "person",
      width: 200,
      render: (val: string) => <span className="text-neutral-2">{val}</span>,
    },
    {
      header: "Performance",
      key: "performance",
      width: 180,
      align: "center",
      render: (value: number, row: any) => {
        const isPositive = value >= 0;

        return (
          <div
            className={`flex items-center justify-center gap-1.5 text-sm ${isPositive ? "text-success-1" : "text-danger-1"}`}
          >
            {/* Render the warning triangle if the row has a warning */}
            {row.hasWarning && (
              <AlertTriangle className="w-4 h-4 fill-danger-1 text-white" />
            )}

            <span>
              {isPositive ? "+" : ""}
              {value} %
            </span>

            {/* Render the correct up/down arrow */}
            {isPositive ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </div>
        );
      },
    },
    {
      header: "Total Resolved",
      key: "totalResolved",
      width: 150,
      align: "center",
      render: (val: number) => <span className="text-neutral-3">{val}</span>,
    },
    {
      header: "Full Profile",
      key: "fullProfile",
      width: 150,
      align: "center",
      render: () => (
        <button className="text-success-1 font-normal underline hover:text-success-2 transition-colors">
          View all
        </button>
      ),
    },
  ];

  const mockEscalatedData = [
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: true, // Shows the red triangle
      typeConcern: "Chat",
    },
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: true,
      typeConcern: "Call",
    },
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: true,
      typeConcern: "Ticket",
    },
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: false, // No red triangle
      typeConcern: "Call",
    },
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: false,
      typeConcern: "Ticket",
    },
  ];

  const column: ColumnConfig<any>[] = [
    {
      header: "Status",
      key: "status",
      width: 150,
      align: "center",
      render: (val: string) => (
        // Creates the light blue pill with darker blue text
        <span className="bg-[#EEF4FB] text-[#6993C0] px-4 py-1.5 rounded-full text-sm font-medium">
          {val}
        </span>
      ),
    },
    {
      header: "Due For",
      key: "dueFor",
      width: 180,
      align: "center",
      render: (value: string, row: any) => (
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-3">
          {/* Render the warning triangle only if hasWarning is true */}
          {row.hasWarning && (
            <AlertTriangle className="w-4 h-4 fill-danger-1 text-white" />
          )}
          <span>{value}</span>
        </div>
      ),
    },
    {
      header: "Type Concern",
      key: "typeConcern",
      width: 150,
      align: "center",
      render: (val: string) => (
        <span className="text-neutral-3 text-sm">{val}</span>
      ),
    },
    {
      header: "Full Description",
      key: "fullDescription",
      width: 150,
      align: "center",
      render: () => (
        <button className="text-success-1 text-sm font-normal underline hover:text-success-2 transition-colors">
          View all
        </button>
      ),
    },
  ];
  return (
    <>
      <div className=" px-[16px] flex flex-col justify-between">
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-4 place-items-center">
            <p className="text-[24px] text-neutral-1 font-normal">
              Department Performance
            </p>
            <Info className="w-4 h-4"></Info>
          </div>
          <DynamicTable
            columns={columns}
            data={mockPerformanceData}
            maxHeight={208}
          />
        </div>
        {/* wjhefjk */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-4 place-items-center">
            <p className="text-[24px] text-neutral-1 font-normal">
              Escalated Ticket
            </p>
            <Info className="w-4 h-4"></Info>
          </div>
          <DynamicTable
            columns={column}
            data={mockEscalatedData}
            maxHeight={297}
          />
        </div>
      </div>
    </>
  );
}
