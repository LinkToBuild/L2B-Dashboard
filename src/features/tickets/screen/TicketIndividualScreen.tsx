"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { TicketMetricsWidget } from "../components/individual/TicketMetricsWidget";
import { SummaryTableWidget } from "../components/individual/SummaryTableWidget";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { ColumnConfig } from "@/shared/components/Table";

type TicketRow = {
  status: string;
  dueFor: string;
  hasWarning: boolean;
  raisedOn: string;
  typeConcern: string;
  assignedTo: string;
  isYou: boolean;
  reOpened: string;
  category: string;
  ticketId: string;
  customerId: string;
  orderId: string;
  item: string;
  topic: string;
  issue: string;
  manageAction: string;
  manageVariant: "success" | "info" | "danger";
};

const mockTicketData: TicketRow[] = [
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
    topic: "Payment gatewa.",
    issue: "My home page g.",
    manageAction: "View",
    manageVariant: "success",
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
    topic: "Payment gatewa.",
    issue: "My home page g.",
    manageAction: "View",
    manageVariant: "info",
  },
  {
    status: "Escalated",
    dueFor: "23/09/2026",
    hasWarning: false,
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
    topic: "Payment gatewa.",
    issue: "My home page g.",
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
    topic: "Payment gatewa.",
    issue: "My home page g.",
    manageAction: "Recording",
    manageVariant: "success",
  },
  {
    status: "Escalated",
    dueFor: "19/09/2026",
    hasWarning: true,
    raisedOn: "13/09/2026",
    typeConcern: "Ticket",
    assignedTo: "",
    isYou: true,
    reOpened: "+6",
    category: "Material",
    ticketId: "VN090990999",
    customerId: "VN090920999",
    orderId: "#09909180909",
    item: "Cement",
    topic: "Payment gatewa.",
    issue: "My home page g.",
    manageAction: "Solve",
    manageVariant: "danger",
  },
];

const columns: ColumnConfig<TicketRow>[] = [
  {
    header: "Status",
    key: "status",
    width: 130,
    align: "center",
    render: (val: string) => {
      const isResolved = val === "Resolved";

      return (
        <span
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            isResolved
              ? "bg-[#EEF8F2] text-[#55B585]"
              : "bg-[#EEF4FB] text-[#6993C0]"
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
    render: (value: string, row: TicketRow) => (
      <div className="flex items-center justify-center gap-2 text-sm text-neutral-3">
        {row.hasWarning && (
          <AlertTriangle className="h-4 w-4 fill-danger-1 text-white" />
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
    render: (val: string, row: TicketRow) => {
      if (row.isYou) {
        return (
          <span className="text-sm text-neutral-3">
            (You){" "}
            <button className="ml-1 text-[#3B82F6] underline hover:text-blue-600">
              Transfer
            </button>
          </span>
        );
      }

      return <span className="text-sm text-neutral-3">{val}</span>;
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
          className={`text-sm ${
            isRental ? "text-[#D99A29]" : "text-[#3B82F6]"
          }`}
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
      <button className="text-sm text-[#3B82F6] underline hover:text-blue-600">
        {val}
      </button>
    ),
  },
  {
    header: "Costumer Id",
    key: "customerId",
    width: 140,
    align: "center",
    render: (val: string) => (
      <button className="text-sm text-[#3B82F6] underline hover:text-blue-600">
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
    render: (val: string, row: TicketRow) => {
      const colorMap: Record<TicketRow["manageVariant"], string> = {
        success: "text-success-1",
        info: "text-[#3B82F6]",
        danger: "text-danger-1",
      };

      return (
        <button
          className={`${colorMap[row.manageVariant]} text-sm font-medium underline transition-colors`}
        >
          {val}
        </button>
      );
    },
  },
];

export function IndividualTicketScreen() {
  return (
    <div className="flex w-full flex-col gap-6">
      <SectionWrapper className="flex flex-col gap-[40px]">
        <div className="flex w-full items-start gap-[24px]">
          <div className="w-1/2 min-w-0">
            <TicketMetricsWidget />
          </div>

          <div className="w-1/2 min-w-0">
            <SummaryTableWidget />
          </div>
        </div>

        <DataTableWidget
          title="All Tickets"
          columns={columns}
          data={mockTicketData}
        />
      </SectionWrapper>
    </div>
  );
}