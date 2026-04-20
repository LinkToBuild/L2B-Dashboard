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
import { useInventoryViewModel } from "../viewModel/useInventoryViewModel";
import { useMemo } from "react";

export function InventoryScreen() {
  const {
    currentTab,
    searchQuery,
    currentFilter,
    setUrlFilter,
    infoCards,
    tableData,
    startDate,  
    endDate
  } = useInventoryViewModel();

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

const filteredData = useMemo(() => {
    let result = tableData;

    // A. Apply the Dropdown Filter first
    if (currentFilter && currentFilter !== "all") {
      // Clean the URL string: replace any "+" signs with a normal space
      const cleanFilter = currentFilter.replace(/\+/g, ' '); 
      
      result = result.filter((item) => item.analysis === cleanFilter);
    }

    // B. Apply the Search Bar Filter second
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseQuery) ||
          item.brand.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return result;
  }, [tableData, searchQuery, currentFilter]);


  return (
    <>
      <SectionWrapper className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  max-w-[1440px] [@media(min-width:1700px)]:mx-auto">
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
          onFilterChange={(filter) => setUrlFilter("headerFilter", filter)}
        />
        <div className="flex flex-col gap-[30px]">
          <InfoCards data={infoCards} />
          <TableToolbar
            searchQuery={searchQuery}
            onSearchChange={(value) => setUrlFilter("search", value)}
            currentFilter={currentFilter}
            onFilterChange={(value) => setUrlFilter("filter", value)}
          />
          <DynamicTable
            columns={columns}
            data={filteredData}
            minWidth={1100} // Matches your Frame 427318563.jpg reference for many columns
            
          />
        </div>
      </SectionWrapper>
    </>
  );
}
