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
export function VendorScreen() {
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
  ];
  const mockMaterials = [
    {
      itemName: "Clay bricks",
      brand: "SVB Bricks",
      size: '9"×4"×3" (230×10...',
      units: "2000",
      vendors: "+9",
    },
    {
      itemName: "Clay bricks",
      brand: "SVB Bricks",
      size: '9"×4"×3" (230×10...',
      units: "200",
      vendors: "+10",
    },
    {
      itemName: "Clay bricks",
      brand: "SVB Bricks",
      size: '9"×4"×3" (230×10...',
      units: "1200",
      vendors: "+34",
    },
    // --- Extra Mock Data Below ---
    {
      itemName: "Cement",
      brand: "UltraTech",
      size: "50 Kg Bag",
      units: "500",
      vendors: "+5",
    },
    {
      itemName: "Steel TMT",
      brand: "Tata Tiscon",
      size: "12mm (12m length)",
      units: "350",
      vendors: "+12",
    },
    {
      itemName: "River Sand",
      brand: "Local",
      size: "1 Ton",
      units: "150",
      vendors: "+3",
    },
    {
      itemName: "Concrete Blocks",
      brand: "SVB Bricks",
      size: "400x200x200 mm",
      units: "4000",
      vendors: "+7",
    },
    {
      itemName: "Crushed Stone",
      brand: "Local",
      size: "20mm (1 Ton)",
      units: "100",
      vendors: "+4",
    },
  ];

  const mockData = [
    {
      status: "Completed",
      orderId: "#ORD-88293",
      equipment: "Mud-pump",
      capacity: "10 tons",
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
      payment: "Online",
      coupon: "FIRSTBUY50",
    },
    {
      status: "Started",
      orderId: "#ORD-88294",
      equipment: "Truck",
      capacity: "20 tons",
      bookingDate: "12/03/2026",
      startsOn: "12/03/2026",
      endOn: "14/03/2026",
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
      capacity: "20 tons",
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
      equipment: "Truck",
      capacity: "20 tons",
      bookingDate: "12/03/2026",
      startsOn: "12/03/2026",
      endOn: "14/03/2026",
      extended: "-",
      firstLocation: "HPM HQ, Banga...",
      secondLocation: "WXP HQ, Ban...",
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
      capacity: "20 tons",
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
      capacity: "20 tons",
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
      capacity: "20 tons",
      bookingDate: "12/03/2026",
      startsOn: "12/03/2026",
      endOn: "14/03/2026",
      extended: "-",
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
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
        <Header></Header>
        <SectionWrapper className="flex flex-col gap-[30px]">
          <div className=" w-full flex justify-between">
            <div className=" w-[76%] flex flex-col gap-[10px]">
              <div className="flex flex-col gap-y-[20px] mb-[32px]">
                <InfoCards></InfoCards>
                <InfoCards></InfoCards>
              </div>
              <TableToolbar></TableToolbar>
              <DynamicTable
                columns={columns}
                data={mockMaterials}
                minWidth={955} // Matches your Frame 427318563.jpg reference for many columns
                maxHeight={226} // Adjust as needed for your design
              />
            </div>
            <div className="">
              <SideBoard
                title="All Vendors"
                overallPercentage={-20.89}
                overallTrend="down"
                data={customerData}
              ></SideBoard>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <BottomTableToolbar></BottomTableToolbar>
            <DynamicTable
              columns={column}
              data={mockData}
              // Matches your Frame 427318563.jpg reference for many columns
              // maxHeight={226} // Adjust as needed for your design
            />
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
