"use client";

import React, { useMemo } from "react";
import { TableToolBar, FilterMenuItem } from "./TableToolBar"; 
import { DynamicTable, ColumnConfig } from "./Table"; 

interface DataTableWidgetProps<T> {
  title?: string;
  columns: ColumnConfig<T>[];
  data: T[];
  searchQuery?: string; 
  onSearchChange?: (value: string) => void; 
  // ADD THESE TWO PROPS
  currentFilter?: string;
  onFilterChange?: (filterValue: string) => void;
}

export function DataTableWidget<T>({ 
  title = "Campaign Report", 
  columns, 
  data,
  searchQuery = "", 
  onSearchChange,
  currentFilter = "All", // Default to showing everything
  onFilterChange
}: DataTableWidgetProps<T>) {

  // 1. Create the dynamic filter items based on whether onFilterChange exists
  const filterMenuItems: FilterMenuItem[] = onFilterChange ? [
    { label: "All", onClick: () => onFilterChange("All") },
    { label: "Resolved", onClick: () => onFilterChange("Resolved") },
    { label: "Escalated", onClick: () => onFilterChange("Escalated") },
  ] : [];

  // 2. Filter the data based on BOTH Search AND Dropdown Filter
  const filteredData = useMemo(() => {
    let result = data;

    // A. Apply the Dropdown Filter first
    if (currentFilter && currentFilter !== "All") {
      result = result.filter((row: any) => 
        // Assuming your rows have a 'status' property. Adjust if needed.
        row.status?.toLowerCase() === currentFilter.toLowerCase()
      );
    }

    // B. Apply the Search Bar Filter second
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter((row: any) => {
        return Object.values(row).some((val) =>
          String(val).toLowerCase().includes(lowerCaseQuery)
        );
      });
    }

    return result;
  }, [data, searchQuery, currentFilter]);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <TableToolBar 
        title={title}
        searchValue={searchQuery}
        onSearchChange={onSearchChange} 
        filterItems={filterMenuItems} // Pass the dynamic items here!
      />

      <DynamicTable
        columns={columns}
        data={filteredData}
      />
    </div>
  );
}