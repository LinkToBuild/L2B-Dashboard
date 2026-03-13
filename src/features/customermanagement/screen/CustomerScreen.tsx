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

export function CustomerScreen() {
  const [filter, setFilter] = useState<string>("Completed");

  let infoCardsData = [
    {
      title: "Active Orders",
      Stats: "10,90,00",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
    {
      title: "Completed ",
      Stats: "9,000",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
  ];

  let customerData = [
    {
      label: "Total",
      percentage_change: -20.89,
      trend: "down",
      value: "809.8k",
    },
    {
      label: "Active",
      percentage_change: -20.89,
      trend: "down",
      value: "109.8k",
    },
    {
      label: "New",
      percentage_change: 20.89,
      trend: "up",
      value: "109k",
    },
    {
      label: "Repeat",
      percentage_change: 20.89,
      trend: "up",
      value: "309k",
    },
    {
      label: "Potential",
      percentage_change: -20.89,
      trend: "down",
      value: "109k",
    },
    {
      label: "At Risk",
      percentage_change: 20.89,
      trend: "up",
      value: "10k",
    },
    {
      label: "Dormant",
      percentage_change: 20.89,
      trend: "up",
      value: "9k",
    },
    {
      label: "Restricted",
      percentage_change: -20.89,
      trend: "down",
      value: "9k",
    },
  ];

  const filterMenuItems = [
    { label: "Completed", onClick: () => setFilter("Completed") },
    { label: "Started", onClick: () => setFilter("Started") },
    { label: "Arrived", onClick: () => setFilter("Arrived") },
    { label: "Canceled", onClick: () => setFilter("Canceled") },
    { label: "Extended", onClick: () => setFilter("Extended") },
  ];

const mockOrders = [
  {
    status: "Completed",
    orderId: "#ORD-88293",
    equipment: "Mud-pump",
    capacity: "10 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "14/03/2026 (12:30)",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "-",
    customerId: "V-OD-12345",
    vendorId: "V-OD-12345",
    operatorId: "op-12345X-S",
    ratings: "5.0",
    payment: "COD",
    coupon: "FIRSTBUY50",
  },
  {
    status: "Started",
    orderId: "#ORD-88294",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "-",
    endOn: "-",
    extended: "-",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12346",
    vendorId: "V-OD-12346",
    operatorId: "op-12346X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Arrived",
    orderId: "#ORD-88295",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "-",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12347",
    vendorId: "V-OD-12347",
    operatorId: "op-12347X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Completed",
    orderId: "#ORD-88296",
    equipment: "Mud-pump",
    capacity: "10 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "Online", // Matching the "Online" text visible in row 4 of the image
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "-",
    customerId: "V-OD-12348",
    vendorId: "V-OD-12348",
    operatorId: "op-12348X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Completed",
    orderId: "#ORD-88297",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "-",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12349",
    vendorId: "V-OD-12349",
    operatorId: "op-12349X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Completed",
    orderId: "#ORD-88298",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "-",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "-",
    customerId: "V-OD-12350",
    vendorId: "V-OD-12350",
    operatorId: "op-12350X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Extended",
    orderId: "#ORD-88299",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "14/03/2026 (12:30)",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12351",
    vendorId: "V-OD-12351",
    operatorId: "op-12351X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
];

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
      return <StatusBadge status={statusMap[value] || "neutral"} label={value} />;
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
    render: (val: string) => <span className="text-aux-2 underline cursor-pointer">{val}</span> 
  },
  { 
    header: "Vendor Id", 
    key: "vendorId", 
    width: 150,
    render: (val: string) => <span className="text-aux-2 underline cursor-pointer">{val}</span> 
  },
  { header: "Operator Id", key: "operatorId", width: 150 },
  { header: "Ratings", key: "ratings", width: 100, align: "center" },
  { header: "Payment", key: "payment", width: 120 },
  { header: "Coupon", key: "coupon", width: 140 },
  { 
    header: "Booking Details", 
    key: "details", 
    width: 140,
    render: () => <button className="text-success-1 font-medium underline">View Full</button> 
  },
  { 
    header: "Manage", 
    key: "manage", 
    width: 100,
    render: () => <button className="text-aux-2 font-medium underline">Edit</button> 
  },
];

const paymentData = [
    { method: "upi", percentage: 28, fill: "#356583" },        // Darkest Blue
    { method: "cod", percentage: 30, fill: "#86A8C3" },        // Medium Blue
    { method: "netbanking", percentage: 22, fill: "#3F82B7" }, // Bright Blue
    { method: "paylater", percentage: 20, fill: "#CDE0ED" },   // Lightest Blue
  ];

  const paymentConfig = {
    percentage: { label: "Percentage" },
    upi: { label: "UPI" },
    cod: { label: "COD" },
    netbanking: { label: "Net Banking" },
    paylater: { label: "Paylater" },
  };

  return (
    <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
      {/* Rendering the Header you just built */}
      <Header />
      <SectionWrapper className="flex w-full gap-[34px]">
        <div className="flex flex-col gap-[30px]">
          <InfoCards />
          <div className="  flex gap-[10px] 2xl:gap-[33px]">
            <div className=" w-[500px] h-[356px] 2xl:w-[635px] flex flex-col gap-[10px] ">
              <p className="text-[24px] font-normal">Earning</p>
              <div className="w-full flex    border border-neutral-5 justify-evenly p-4 2xl:p-6 rounded-[12px]">
                <div className="">
                  <ChartPieDonut  data={paymentData}
                    config={paymentConfig}
                    dataKey="percentage" // The key containing the numbers
                    nameKey="method" // The key containing the labels
                    centerLabel="Total Tickets"
                    centerValue="134"
                    width={230} // Adjust size easily!
                    height={230}  />
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
      </SectionWrapper>
      <SectionWrapper className="">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between place-items-center">
            <div className="flex gap-[10px] place-items-center ">
              <p className="text-[24px] text-neutral-2 font-normal">
                All Orders
              </p>
              <Info className="w-4 h-4 text-neutral-3"></Info>
            </div>
            <div className="flex gap-[12px]">
              <CustomInput
                sizeVariant="lg"
                label="Search"
                type="search"
                // helperText="Must be 8 characters"
              />

              <L2BDropdownMenu
                trigger={
                  <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
                    <ListFilter size={25} />
                  </button>
                }
                items={filterMenuItems}
              />
            </div>
          </div>
          <div>
            <DynamicTable
              columns={columns}
              data={mockOrders}
              minWidth={1100} // Matches your Frame 427318563.jpg reference for many columns
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
