"use client";

import React from "react";
import { Header } from "../components/overall/Header";
import MatrixWidget from "../components/overall/MatrixWidget";
import SupplyDemandChart from "../components/overall/SupplyDemandChart";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { ColumnConfig } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { useOrdersViewModel } from "../viewModel/useOrdersViewModel";
import { OrdersFloorplanSkeleton } from "@/shared/components/skeletons";
import { L2BButton } from "@/design-system/components/L2BButton";

export default function OrderScreen() {
  const {
    currentTab,
    startDate,
    endDate,
    currentFilter,
    searchQuery,
    orders,
    matrixChartData,
    infoCards1,
    infoCards2,
    supplyDemandData,
    isLoading,
    setUrlFilter,
  } = useOrdersViewModel();

  const columns: ColumnConfig<any>[] = [
    {
      header: "Status",
      key: "status",
      width: 140,
      render: (value: string) => {
        const statusMap: Record<string, any> = {
          Completed: "successLight",
          Started: "infoLight",
          Arrived: "successLight", // Matching the green variant in your image
          Extended: "info", // Matching the dark blue pill
        };
        return (
          <StatusBadge status={statusMap[value] || "neutral"} label={value} />
        );
      },
    },
    { header: "Order Id", key: "orderId", width: 140 },
    { header: "Equipment", key: "equipment", width: 140 },
    { header: "Capacity", key: "capacity", width: 110 },
    { header: "Booking Date", key: "bookingDate", width: 170 }, // Increased width slightly for timestamps
    { header: "Starts On", key: "startsOn", width: 170 },
    { header: "End On", key: "endOn", width: 170 },
    { header: "Extended", key: "extended", width: 170 },
    { header: "1st Location", key: "firstLocation", width: 180 },
    { header: "2nd Location", key: "secondLocation", width: 180 },
    {
      header: "Customer Id",
      key: "customerId",
      width: 150,
      render: (val: string) => (
        <span className="text-aux-2 font-normal cursor-pointer hover:underline">
          {val}
        </span>
      ),
    },
    {
      header: "Vendor Id",
      key: "vendorId",
      width: 150,
      render: (val: string) => (
        <span className="text-aux-2 font-normal cursor-pointer hover:underline">
          {val}
        </span>
      ),
    },
    {
      header: "Operator Id",
      key: "operatorId",
      width: 150,
      render: (val: string) => (
        <span className="text-aux-2 font-normal cursor-pointer hover:underline">
          {val}
        </span>
      ), // Added link styling to match image
    },
    { header: "Ratings", key: "ratings", width: 100, align: "center" },
    { header: "Payment", key: "payment", width: 120 },
    { header: "Coupon", key: "coupon", width: 140 },
    {
      header: "Booking Details",
      key: "details",
      width: 140,
      render: () => (
        <L2BButton type="button" variant="bgNone" size="auto" className="text-success-1 font-normal hover:underline transition-colors">
          View Full
        </L2BButton>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      width: 100,
      render: () => (
        <L2BButton type="button" variant="bgNone" size="auto" className="text-aux-2 font-normal hover:underline transition-colors">
          Edit
        </L2BButton>
      ),
    },
  ];
  return (
    <>
      <SectionWrapper className="flex flex-col gap-6">
        <Header
          currentTab={currentTab}
          onTabChange={(tab) => setUrlFilter("tab", tab)}
          startDate={startDate}
          onStartDateChange={(date) =>
            setUrlFilter("startDate", date ? date.toISOString() : null)
          }
          endDate={endDate}
          onEndDateChange={(date) =>
            setUrlFilter("endDate", date ? date.toISOString() : null)
          }
          currentFilter={currentFilter}
          onFilterChange={(filter) => setUrlFilter("filter", filter)}
        />
        {isLoading ? (
          <OrdersFloorplanSkeleton showHeader={false} />
        ) : (
          <>
            <MatrixWidget
              chartData={matrixChartData}
              infoCards1={infoCards1}
              infoCards2={infoCards2}
            />
            <SupplyDemandChart data={supplyDemandData} />
            <DataTableWidget
              title={`All Orders (${currentTab})`}
              columns={columns}
              data={orders}
              searchQuery={searchQuery}
              onSearchChange={(val) => setUrlFilter("search", val)}
            />
          </>
        )}
      </SectionWrapper>
    </>
  );
}
