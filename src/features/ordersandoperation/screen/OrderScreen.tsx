"use client"

import React from "react";
import { Header } from "../components/overall/Header";
import MatrixWidget from "../components/overall/MatrixWidget";
import SupplyDemandChart from "../components/overall/SupplyDemandChart";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { ColumnConfig } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import SectionWrapper from "@/shared/components/SectionWrapper";

export default function OrderScreen() {
  const mockOrders = [
    {
      status: "Completed",
      orderId: "#ORD-88293",
      equipment: "Mobile Crane",
      capacity: "10 Tons",
      bookingDate: "12/03/2026 (12:30)",
      startsOn: "12/03/2026 (12:30)",
      endOn: "14/03/2026 (12:30)",
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
      capacity: "20 Tons",
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
      capacity: "20 Tons",
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
      equipment: "Mobile Crane",
      capacity: "20 Tons",
      bookingDate: "12/03/2026",
      startsOn: "12/03/2026",
      endOn: "14/03/2026",
      extended: "-",
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
      capacity: "20 Tons",
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
      capacity: "20 Tons",
      bookingDate: "12/03/2026",
      startsOn: "12/03/2026",
      endOn: "14/03/2026",
      extended: "-",
      firstLocation: "HPM HQ, Banga...",
      secondLocation: "WXP HQ, Ban...",
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
      capacity: "20 Tons",
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
        <button className="text-success-1 font-normal hover:underline transition-colors">
          View Full
        </button>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      width: 100,
      render: () => (
        <button className="text-aux-2 font-normal hover:underline transition-colors">
          Edit
        </button>
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]">
        <Header></Header>
        <MatrixWidget></MatrixWidget>
        <SupplyDemandChart></SupplyDemandChart>
        <SectionWrapper className="">
          
        <DataTableWidget
          title="All Orders (Rental)"
          columns={columns}
          data={mockOrders}
        ></DataTableWidget>
        </SectionWrapper>
      </div>
    </>
  );
}
