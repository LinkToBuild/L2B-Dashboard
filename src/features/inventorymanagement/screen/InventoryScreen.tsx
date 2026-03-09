"use client";

import * as React from "react";
import { Header } from "../components/overall/InventoryHeader";
import { InfoCards } from "../components/overall/InfoCards";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { TableToolbar } from "../components/overall/TableToolbar";
import { DynamicTable } from "@/shared/components/Table";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig } from "@/shared/components/Table";
import { AlertTriangle } from "lucide-react";

export function InventoryScreen() {
  const mockData = [
    {
      name: "Truck",
      capacity: "10-12 ft",
      brand: "-",
      analysis: "High Value",
      quantity: "20.7k",
      hasQuantityAlert: false,
      cost: "9.8k/km",
      fuel: "300/km",
      operatorFee: "200/hr",
      vendors: "12",
      searchRate: "-",
    },
    {
      name: "Bulldozer",
      capacity: "Truck Dozer",
      brand: "Volvo",
      analysis: "Medium Value",
      quantity: "12.8k",
      hasQuantityAlert: false,
      cost: "2.6k/8hr",
      fuel: "250/hr",
      operatorFee: "300/hr",
      vendors: "32",
      searchRate: "1.2%",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "Hitachi",
      analysis: "Low Value",
      quantity: "23.9k",
      hasQuantityAlert: false,
      cost: "1.3k/km",
      fuel: "-",
      operatorFee: "100/hr",
      vendors: "1",
      searchRate: "3.7%",
    },
    {
      name: "Tipper",
      capacity: "Conversion",
      brand: "Volvo",
      analysis: "Low Value",
      quantity: "11",
      hasQuantityAlert: true,
      cost: "7.7k/km",
      fuel: "300/km",
      operatorFee: "100/hr",
      vendors: "2",
      searchRate: "1.2%",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "Volvo",
      analysis: "Medium Value",
      quantity: "12.8k",
      hasQuantityAlert: false,
      cost: "1k/km",
      fuel: "-",
      operatorFee: "100/hr",
      vendors: "5",
      searchRate: "3.7%",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "-",
      analysis: "Medium Value",
      quantity: "12",
      hasQuantityAlert: true,
      cost: "2k/8hr",
      fuel: "-",
      operatorFee: "100/hr",
      vendors: "12",
      searchRate: "-",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "Hitachi",
      analysis: "Low Value",
      quantity: "23.9k",
      hasQuantityAlert: false,
      cost: "8k/8hr",
      fuel: "-",
      operatorFee: "100/hr",
      vendors: "43",
      searchRate: "1.2%",
    },
    {
      name: "Truck",
      capacity: "Drilling",
      brand: "Hitachi",
      analysis: "Low Value",
      quantity: "12.8k",
      hasQuantityAlert: false,
      cost: "8k/8hr",
      fuel: "300/km",
      operatorFee: "100/hr",
      vendors: "21",
      searchRate: "1.2%",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "Volvo",
      analysis: "Low Value",
      quantity: "23.9k",
      hasQuantityAlert: false,
      cost: "8k/km",
      fuel: "-",
      operatorFee: "300/hr",
      vendors: "32",
      searchRate: "3.7%",
    },
    {
      name: "Truck",
      capacity: "Drilling",
      brand: "-", // Blank in image
      analysis: "Low Value",
      quantity: "12.8k",
      hasQuantityAlert: false,
      cost: "8k/8hr",
      fuel: "300/km",
      operatorFee: "300/hr",
      vendors: "12",
      searchRate: "-",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "Hitachi",
      analysis: "Low Value",
      quantity: "12.8k",
      hasQuantityAlert: false,
      cost: "8k/8hr",
      fuel: "-",
      operatorFee: "300/hr",
      vendors: "6",
      searchRate: "1.2%",
    },
    {
      name: "Borewell",
      capacity: "Drilling",
      brand: "Hitachi",
      analysis: "Low Value",
      quantity: "23.9k",
      hasQuantityAlert: false,
      cost: "8k/km",
      fuel: "300/hr",
      operatorFee: "300/hr",
      vendors: "9",
      searchRate: "1.2%",
    },
    {
      name: "Borewell",
      capacity: "Identifying",
      brand: "Volvo",
      analysis: "Low Value",
      quantity: "12.8k",
      hasQuantityAlert: false,
      cost: "8k/km",
      fuel: "-",
      operatorFee: "300/hr",
      vendors: "10",
      searchRate: "3.7%",
    },
    {
      name: "Borewell",
      capacity: "Drilling",
      brand: "Hitachi",
      analysis: "Low Value",
      quantity: "100",
      hasQuantityAlert: true,
      cost: "8k/8hr",
      fuel: "-",
      operatorFee: "300/hr",
      vendors: "1",
      searchRate: "3.7%",
    },
  ];

  const columns: ColumnConfig<any>[] = [
    { header: "Name", key: "name", width: 120, align: "center" },
    { header: "Capacity", key: "capacity", width: 140, align: "center" },
    { header: "Brand", key: "brand", width: 120, align: "center" },
    {
      header: "Analysis",
      key: "analysis",
      width: 160,
      align: "center",
      render: (value: string) => {
        // Mapping the string values to your badge variants
        const statusMap: Record<string, any> = {
          "High Value": "successLight", // Usually green
          "Medium Value": "infoLight", // Usually blue
          "Low Value": "dangerLight", // Usually red/pink
        };
        return (
          <StatusBadge status={statusMap[value] || "neutral"} label={value} />
        );
      },
    },
    {
      header: "Quantity",
      key: "quantity",
      width: 120,
      align: "center",
      render: (val: string, item: any) => (
        <div className="flex items-center justify-center gap-2">
          <span>{val}</span>
          {/* Shows the red triangle only if hasQuantityAlert is true */}
          {item.hasQuantityAlert && (
            <AlertTriangle className="w-4 h-4 text-danger-1 fill-danger-1/20" />
          )}
        </div>
      ),
    },
    { header: "Cost /hour/km", key: "cost", width: 140, align: "center" },
    { header: "Fuel", key: "fuel", width: 120, align: "center" },
    { header: "Operator Fee", key: "operatorFee", width: 140, align: "center" },
    { header: "No. of vendor", key: "vendors", width: 140, align: "center" },
    { header: "Search Rate", key: "searchRate", width: 120, align: "center" },
  ];
  return (
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
        <Header></Header>
        <SectionWrapper className="flex flex-col gap-[30px]">
          <InfoCards></InfoCards>
          <TableToolbar></TableToolbar>
          <DynamicTable
            columns={columns}
            data={mockData}
            minWidth={1100} // Matches your Frame 427318563.jpg reference for many columns
          />
        </SectionWrapper>
      </div>
    </>
  );
}
