"use client";

import * as React from "react";
import { Header } from "../components/overall/VendorHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { InfoCards } from "../components/overall/InfoCards";
import { SideBoard } from "@/shared/components/SideBoard";
import { TableToolbar } from "../components/overall/TableToolbar";
import { DynamicTable } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig } from "@/shared/components/Table";
import { MapPin } from "lucide-react";
import { BottomTableToolbar } from "../components/overall/BottomTableToolBar";
import { useVendorViewModel } from "../viewModel/useVendorViewModel";
import { VendorFloorplanSkeleton } from "@/shared/components/skeletons";
import { L2BButton } from "@/design-system/components/L2BButton";

export function VendorScreen() {
  const {
    infoCards,
    stats,
    inventory,
    orders,
    currentTab,
    startDate,
    endDate,
    isLoading,
    isRefreshing,
    setUrlFilter,
  } = useVendorViewModel();

  const columns: ColumnConfig<any>[] = [
    {
      header: "Item name",
      key: "itemName",
      width: 200,
      align: "center",
    },
    {
      header: "Brand",
      key: "brand",
      width: 180,
      align: "center",
    },
    {
      header: "Size/Kg",
      key: "size",
      width: 250,
      align: "center",
    },
    {
      header: "No. of Units",
      key: "units",
      width: 150,
      align: "center",
    },
    {
      header: "No. of vendor",
      key: "vendors",
      width: 150,
      align: "center",
    },
  ];

  const column: ColumnConfig<any>[] = [
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

        // Adds the MapPin icon just for the "Arrived" status
        const labelElement =
          value === "Arrived" ? (
            <span className="flex items-center gap-1">
              {value} <MapPin className="w-3 h-3" />
            </span>
          ) : (
            value
          );

        return (
          <StatusBadge
            status={statusMap[value] || "neutral"}
            label={labelElement}
          />
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
        <L2BButton type="button" variant="bgNone" size="auto" className="text-success-1 font-medium underline">
          View Full
        </L2BButton>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      width: 100,
      render: () => (
        <L2BButton type="button" variant="bgNone" size="auto" className="text-aux-2 font-medium underline">
          Edit
        </L2BButton>
      ),
    },
  ];

  return (
    <>
      <SectionWrapper className="flex flex-col gap-[30px]">
        <Header
          currentTab={currentTab}
          onTabChange={(tab) => setUrlFilter("tab", tab)}
          currentStartDate={startDate}
          currentEndDate={endDate}
          onFilterChange={(filter) => setUrlFilter("filter", filter)}
          onDateChange={(start, end) => {
            if (start) setUrlFilter("startDate", start.toISOString());
            if (end) setUrlFilter("endDate", end.toISOString());
          }}
        />
        {isLoading ? (
          <VendorFloorplanSkeleton showHeader={false} />
        ) : (
          <div
            className={`flex flex-col gap-[30px] transition-opacity duration-200 ${
              isRefreshing ? "pointer-events-none opacity-60" : "opacity-100"
            }`}
            aria-busy={isRefreshing}
          >
            <div className=" w-full flex justify-between ">
              <div className=" xl:w-[72%] 2xl:w-[76%] flex flex-col gap-[10px] ">
                <div className="flex flex-col gap-y-[20px] mb-[32px]">
                  <InfoCards data={infoCards?.slice(0, 4) || []} />
                  <InfoCards data={infoCards?.slice(4, 8) || []} />
                </div>
                <TableToolbar></TableToolbar>
                <DynamicTable
                  columns={columns}
                  data={inventory}
                  minWidth={955}
                  maxHeight={226}
                />
              </div>
              <div className="">
                <SideBoard
                  title="All Vendors"
                  overallPercentage={-20.89}
                  overallTrend="down"
                  data={stats}
                ></SideBoard>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <BottomTableToolbar></BottomTableToolbar>
              <DynamicTable columns={column} data={orders} />
            </div>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
