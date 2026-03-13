"use client";

import * as React from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { TableToolBar } from "@/shared/components/TableToolBar";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { ColumnConfig } from "@/shared/components/Table";
import { TicketMetricsWidget } from "../components/overall/TicketMetricsWidget";
import { SummaryTableWidget } from "../components/overall/SummaryTableWidget";
import { AlertTriangle } from "lucide-react";

export function TicketScreen() {
  const mockTicketData = [
    {
      status: "Resolved",
      dueFor: "18/09/2026",
      hasWarning: false,
      raisedOn: "13/09/2026",
      typeConcern: "Chat",
      assignedTo: "CS (#0293048)",
      isYou: false,
      reOpened: "-",
      category: "Rental",
      ticketId: "VN090990999",
      customerId: "VN090950999",
      orderId: "#09809180909",
      item: "Mobile Crane",
      topic: "Payment gatewa...",
      issue: "My home page g...",
      manageAction: "View",
      manageVariant: "success", // Green text
    },
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: true,
      raisedOn: "13/09/2026",
      typeConcern: "Call",
      assignedTo: "L2 (#5998948)",
      isYou: false,
      reOpened: "-",
      category: "Rental",
      ticketId: "VN090990899",
      customerId: "VN090880998",
      orderId: "#09809180909",
      item: "Tipper",
      topic: "Payment gatewa...",
      issue: "My home page g...",
      manageAction: "View",
      manageVariant: "info", // Blue text
    },
    {
      status: "Escalated",
      dueFor: "23/09/2026",
      hasWarning: false, // No triangle here in the image
      raisedOn: "13/09/2026",
      typeConcern: "Ticket",
      assignedTo: "L3 (#0939803)",
      isYou: false,
      reOpened: "-",
      category: "Rental",
      ticketId: "VN090090999",
      customerId: "VN090950999",
      orderId: "#09909180909",
      item: "Truck",
      topic: "Payment gatewa...",
      issue: "My home page g...",
      manageAction: "View",
      manageVariant: "info",
    },
    {
      status: "Resolved",
      dueFor: "18/09/2026",
      hasWarning: false,
      raisedOn: "13/09/2026",
      typeConcern: "Call",
      assignedTo: "L3 (#0939093)",
      isYou: false,
      reOpened: "+2",
      category: "Material",
      ticketId: "VN090990899",
      customerId: "VN090880998",
      orderId: "#09809180909",
      item: "Clay bricks",
      topic: "Payment gatewa...",
      issue: "My home page g...",
      manageAction: "Recording",
      manageVariant: "success",
    },
    {
      status: "Escalated",
      dueFor: "19/09/2026",
      hasWarning: true,
      raisedOn: "13/09/2026",
      typeConcern: "Ticket",
      assignedTo: "", // Handled by the 'isYou' flag below
      isYou: true,
      reOpened: "+6",
      category: "Material",
      ticketId: "VN090990999",
      customerId: "VN090920999",
      orderId: "#09909180909",
      item: "Cement",
      topic: "Payment gatewa...",
      issue: "My home page g...",
      manageAction: "Solve",
      manageVariant: "danger", // Red text
    },
  ];

  const columns: ColumnConfig<any>[] = [
    {
      header: "Status",
      key: "status",
      width: 130,
      align: "center",
      render: (val: string) => {
        // Switch colors based on Resolved vs Escalated
        const isResolved = val === "Resolved";
        return (
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              isResolved
                ? "bg-[#EEF8F2] text-[#55B585]" // Green pill
                : "bg-[#EEF4FB] text-[#6993C0]" // Blue pill
            }`}
          >
            {val}
          </span>
        );
      },
    },
    {
      header: "Due For",
      key: "dueFor",
      width: 140,
      align: "center",
      render: (value: string, row: any) => (
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
      render: (val: string, row: any) => {
        // Special render for the row assigned to the user
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
      render: (val: string) => {
        const isRental = val === "Rental";
        return (
          <span
            className={`text-sm ${isRental ? "text-[#D99A29]" : "text-[#3B82F6]"}`}
          >
            {val}
          </span>
        );
      },
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
      header: "Costumer Id", // Kept your exact spelling from the image
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
      render: (val: string, row: any) => {
        // Map the variant string to your tailwind text colors
        const colorMap: Record<string, string> = {
          success: "text-success-1",
          info: "text-[#3B82F6]", // matching the blue
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
              <TicketMetricsWidget />
            </div>
            <SummaryTableWidget></SummaryTableWidget>
          </div>
          <DataTableWidget
            title="All Tickets"
            columns={columns}
            data={mockTicketData}
          ></DataTableWidget>
        </SectionWrapper>
      </div>
    </>
  );
}
