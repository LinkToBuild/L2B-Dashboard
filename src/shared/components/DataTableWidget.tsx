"use client";

import React, { useState, useMemo } from "react";

// IMPORTANT: Adjust these import paths to match where your files are actually located!

import { TableToolBar } from "./TableToolBar"; // Adjust path as needed
import { DynamicTable, ColumnConfig } from "./Table"; 

interface DataTableWidgetProps<T> {
  title?: string;
  columns: ColumnConfig<T>[];
  data: T[];
}

export function DataTableWidget<T>({ 
  title = "Campaign Report", 
  columns, 
  data 
}: DataTableWidgetProps<T>) {
  
  // 1. Manage the search input state here
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Filter the data based on what the user types
  const filteredData = useMemo(() => {
    // If the search bar is empty, just return the original data
    if (!searchQuery) return data;

    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter through every row
    return data.filter((row: any) => {
      // Check every single column/value in that row for a match
      return Object.values(row).some((val) =>
        String(val).toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [data, searchQuery]);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* 3. Pass the state to the Toolbar so it updates when typed */}

      <TableToolBar 
  title={title}
  searchValue={searchQuery}
  onSearchChange={setSearchQuery} 
/>

      {/* 4. Pass only the FILTERED data to your Table */}
      <DynamicTable
        columns={columns}
        data={filteredData}
      />
    </div>
  );
}