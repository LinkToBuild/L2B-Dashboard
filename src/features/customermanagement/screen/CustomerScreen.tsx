"use client";

import React from "react";
import { useState } from "react";
import { Header } from "../components/overall/CustomerHeader";
import { InfoCards } from "../components/overall/InfoCards";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { LegendData } from "@/shared/components/Legend";
import mapImg from "@/public/images/mapImg.png";
import Image from "next/image";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { SideBoard } from "@/shared/components/SideBoard";
import { Info } from "lucide-react";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { DynamicTable } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig } from "@/shared/components/Table"; // Adjust path if needed
import { ChartConfig } from "@/components/ui/chart";
import DataMatrixSection from "../components/overall/DataMatrixSection";
import TableToolBar from "../components/overall/TableToolBar";
import { useCustomerViewModel } from "../viewModel/useCustomerViewModel";
import { OrderRow } from "../types";

export function CustomerScreen() {
  const [filter, setFilter] = useState<string>("Completed");

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
    <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  max-w-[1440px]">
      {/* Rendering the Header you just built */}
      <Header />
      {/* <SectionWrapper className="flex w-full gap-[34px] border border-red-500">
        <div className="flex flex-col gap-[30px]">
          <InfoCards />
          <div className="  flex gap-[10px] 2xl:gap-[33px]">
            <div className=" w-[500px] h-[356px] 2xl:w-[635px] flex flex-col gap-[10px] ">
              <p className="text-[24px] font-normal">Earning</p>
              <div className="w-full flex    border border-neutral-5 justify-evenly p-4 2xl:p-6 rounded-[12px]">
                <div className="">
                  <ChartPieDonut
                    data={paymentData}
                    config={paymentConfig}
                    dataKey="percentage" // The key containing the numbers
                    nameKey="method" // The key containing the labels
                    centerLabel="Total Tickets"
                    centerValue="134"
                    width={230} // Adjust size easily!
                    height={230}
                  />
                </div>
                <div className=" xl:w-[40%] 2xl:w-[245px] h-[299px] flex flex-col gap-[27px] ">
                  <div className="w-full flex flex-col gap-[27px]">
                    {infoCardsData.map((card, index) => (
                      <StatCard
                        key={index}
                        title={card.title}
                        value={card.Stats}
                        percentage={card.percentage}
                        information={card.information}
                      />
                    ))}
                  </div>
                  <div className=" h-[48px] grid grid-cols-2  ">
                    <LegendData color="#3B82F6" label="UPI" percentage={28} />
                    <LegendData color="#60A5FA" label="COD" percentage={30} />
                    <LegendData
                      color="#93C5FD"
                      label="Net Banking"
                      percentage={22}
                    />
                    <LegendData
                      color="#BFDBFE"
                      label="Paylater"
                      percentage={20}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[270px] flex flex-col gap-[10px]">
              <p className="text-[24px] text-neutral-1 font-normal">
                High Demand Area
              </p>
              <div className="w-full flex flex-col bg-white shadow-md rounded-[12px] h-[354px]">
                <div className="w-full">
                  <Image
                    src={mapImg}
                    alt="Logo"
                    className="h-[280px] w-full rounded-[8px]"
                  />
                </div>
                <div className=" flex flex-wrap justify-between gap-2 p-4">
                  <LegendData color="#EB6F70" label="High Demand"></LegendData>
                  <LegendData color="#8DAFD1" label="Less Demand"></LegendData>
                  <LegendData
                    color="#FEC869"
                    label="Slightly Less Demand"
                  ></LegendData>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SideBoard
            title="All Customers"
            overallPercentage={-20.89}
            overallTrend="down"
            data={customerData}
          ></SideBoard>
        </div>
      </SectionWrapper> */}

      <SectionWrapper className="">
        <DataMatrixSection
          paymentData={paymentData}
          infoCardsData={infoCardsData}
          customerData={customerData}
        />
      </SectionWrapper>
      <SectionWrapper className="flex flex-col gap-5">
        <TableToolBar
          currentFilter={currentStatusFilter}
          searchQuery={searchQuery}
          onFilterChange={setStatusFilter}
          onSearchChange={setSearchQuery}
        />
        {isLoading ? (
          <div className="w-full h-64 flex items-center justify-center text-neutral-500">
            Loading orders...
          </div>
        ) : (
          <DynamicTable columns={columns} data={orders} minWidth={1100} />
        )}
      </SectionWrapper>
    </div>
  );
}
