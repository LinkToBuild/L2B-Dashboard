"use client";

import React from "react";
import { Header } from "../components/overall/CustomerHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { DynamicTable } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig } from "@/shared/components/Table";
import DataMatrixSection from "../components/overall/DataMatrixSection";
import TableToolBar from "../components/overall/TableToolBar";
import { useCustomerViewModel } from "../viewModel/useCustomerViewModel";
import { OverviewFloorplanSkeleton } from "@/shared/components/skeletons";

export function CustomerScreen() {
  const {
    orders,
    isLoading,
    currentStatusFilter,
    searchQuery,
    setStatusFilter,
    setSearchQuery,
    paymentData,
    infoCardsData,
    customerData,
    demandMap,
  } = useCustomerViewModel();

  const columns: ColumnConfig<any>[] = [
    {
      header: "Status",
      key: "status",
      width: 140,
      render: (value: string) => {
        const statusMap: Record<string, any> = {
          Completed: "successLight",
          Started: "infoLight",
          Arrived: "successLight",
          Extended: "info",
        };
        return (
          <StatusBadge status={statusMap[value] || "neutral"} label={value} />
        );
      },
    },
    { header: "Order Id", key: "orderId", width: 140 },
    { header: "Equipment", key: "equipment", width: 140 },
    { header: "Capacity", key: "capacity", width: 110 },
    { header: "Booking Date", key: "bookingDate", width: 140 },
    { header: "Starts On", key: "startsOn", width: 140 },
    { header: "End On", key: "endOn", width: 140 },
    { header: "Extended", key: "extended", width: 160 },
    { header: "1st Location", key: "firstLocation", width: 180 },
    { header: "2nd Location", key: "secondLocation", width: 180 },
    {
      header: "Customer Id",
      key: "customerId",
      width: 150,
      render: (val: string) => (
        <span className="text-aux-2 underline cursor-pointer">{val}</span>
      ),
    },
    {
      header: "Vendor Id",
      key: "vendorId",
      width: 150,
      render: (val: string) => (
        <span className="text-aux-2 underline cursor-pointer">{val}</span>
      ),
    },
    { header: "Operator Id", key: "operatorId", width: 150 },
    { header: "Ratings", key: "ratings", width: 100, align: "center" },
    { header: "Payment", key: "payment", width: 120 },
    { header: "Coupon", key: "coupon", width: 140 },
    {
      header: "Booking Details",
      key: "details",
      width: 140,
      render: () => (
        <button className="text-success-1 font-medium underline">
          View Full
        </button>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      width: 100,
      render: () => (
        <button className="text-aux-2 font-medium underline">Edit</button>
      ),
    },
  ];

  return (
    <SectionWrapper className="flex flex-col gap-6 ">
      <Header />
      {isLoading ? (
        <OverviewFloorplanSkeleton showHeader={false} />
      ) : (
        <>
          <DataMatrixSection
            paymentData={paymentData}
            infoCardsData={infoCardsData}
            customerData={customerData}
            demandMap={demandMap}
          />
          <div className="flex flex-col gap-5 ">
            <TableToolBar
              currentFilter={currentStatusFilter}
              searchQuery={searchQuery}
              onFilterChange={setStatusFilter}
              onSearchChange={setSearchQuery}
            />
            <DynamicTable columns={columns} data={orders} minWidth={1100} />
          </div>
        </>
      )}
    </SectionWrapper>
  );
}
