"use client";

import * as React from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { ColumnConfig } from "@/shared/components/Table";
import { TicketMetricsWidget } from "../components/overall/TicketMetricsWidget";
import { SummaryTableWidget } from "../components/overall/SummaryTableWidget";
import { AlertTriangle } from "lucide-react";
import { useTicketsViewModel } from "../viewModel/useTicketsViewModel";
import { TicketItem } from "../types/index";

export function TicketScreen() {
  const {
    tickets,
    performanceArea,
    donutData,
    infoCards,
    deptPerformance,
    escalatedTickets,
    metricsFilter,
    tableFilter,
    searchQuery,
    setUrlFilter,
  } = useTicketsViewModel();

  const columns: ColumnConfig<TicketItem>[] = [
    {
      header: "Status",
      key: "status",
      width: 130,
      align: "center",
      render: (val: string) => (
        <span
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${val === "Resolved" ? "bg-[#EEF8F2] text-[#55B585]" : "bg-[#EEF4FB] text-[#6993C0]"}`}
        >
          {val}
        </span>
      ),
    },
    {
      header: "Due For",
      key: "dueFor",
      width: 140,
      align: "center",
      render: (value: string, row: TicketItem) => (
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-3">
          {row.hasWarning && (
            <AlertTriangle className="w-4 h-4 fill-danger-1 text-white" />
          )}
          <span>{value}</span>
        </div>
      ),
    },
    { header: "Raised On", key: "raisedOn", width: 120, align: "center" },
    { header: "Type Concern", key: "typeConcern", width: 130, align: "center" },
    {
      header: "Assigned to",
      key: "assignedTo",
      width: 160,
      align: "center",
      render: (val: string, row: TicketItem) => {
        if (row.isYou) {
          return (
            <span className="text-neutral-3 text-sm">
              (You){" "}
              <button className="text-[#3B82F6] underline ml-1 hover:text-blue-600">
                Transfer
              </button>
            </span>
          );
        }
        return <span className="text-neutral-3 text-sm">{val}</span>;
      },
    },
    { header: "Re opened", key: "reOpened", width: 110, align: "center" },
    {
      header: "Categories",
      key: "category",
      width: 120,
      align: "center",
      render: (val: string) => (
        <span
          className={`text-sm ${val === "Rental" ? "text-[#D99A29]" : "text-[#3B82F6]"}`}
        >
          {val}
        </span>
      ),
    },
    {
      header: "Ticket Id",
      key: "ticketId",
      width: 140,
      align: "center",
      render: (val: string) => (
        <button className="text-[#3B82F6] text-sm underline hover:text-blue-600">
          {val}
        </button>
      ),
    },
    {
      header: "Customer Id",
      key: "customerId",
      width: 140,
      align: "center",
      render: (val: string) => (
        <button className="text-[#3B82F6] text-sm underline hover:text-blue-600">
          {val}
        </button>
      ),
    },
    { header: "Order Id", key: "orderId", width: 140, align: "center" },
    { header: "Item", key: "item", width: 120, align: "center" },
    { header: "Topic", key: "topic", width: 150, align: "center" },
    { header: "Issue", key: "issue", width: 150, align: "center" },
    {
      header: "Manage",
      key: "manageAction",
      width: 100,
      align: "center",
      render: (val: string, row: TicketItem) => {
        const colorMap: Record<string, string> = {
          success: "text-success-1",
          info: "text-[#3B82F6]",
          danger: "text-danger-1",
        };
        const colorClass = colorMap[row.manageVariant] || "text-neutral-3";
        return (
          <button
            className={`${colorClass} text-sm font-medium underline transition-colors`}
          >
            {val}
          </button>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
        <SectionWrapper className="flex flex-col gap-[40px]">
          <div className="flex">
            <div className="w-1/2 ">
              <TicketMetricsWidget 
              performanceData={performanceArea} 
              donutData={donutData} 
              infoCardsData={infoCards}
              currentFilter={metricsFilter}
              onFilterChange={(val) => setUrlFilter("metricsFilter", val)}
            />
            </div>
            <SummaryTableWidget
              deptPerformance={deptPerformance}
              escalatedTickets={escalatedTickets}
            />
          </div>
          <DataTableWidget
          title="All Tickets"
          columns={columns}
          data={tickets}
          searchQuery={searchQuery}
          onSearchChange={(val) => setUrlFilter("search", val)}
          currentFilter={tableFilter} 
          onFilterChange={(val) => setUrlFilter("tableFilter", val === "All" ? null : val)}
        />
        </SectionWrapper>
      </div>
    </>
  );
}
