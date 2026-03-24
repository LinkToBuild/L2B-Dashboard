"use client";

import React, { useState, useMemo } from "react";
import { TableToolBar } from "./TableToolBar"; 
import { DynamicTable, ColumnConfig } from "./Table"; 

interface DataTableWidgetProps<T> {
  title?: string;
  columns: ColumnConfig<T>[];
  data: T[];
  searchQuery?: string; 
  onSearchChange?: (value: string) => void; 
}

export function DataTableWidget<T>({ 
  title = "Campaign Report", 
  columns, 
  data,
  searchQuery: externalSearch, 
  onSearchChange: onExternalChange
}: DataTableWidgetProps<T>) {

  // 1. Local state only used IF no external props are provided
  const [internalSearch, setInternalSearch] = useState("");

  // 2. Determine which search value to use (External vs Internal)
  const currentSearchValue = externalSearch !== undefined ? externalSearch : internalSearch;

  const handleSearchChange = (val: string) => {
    if (onExternalChange) {
      onExternalChange(val); // Updates URL/ViewModel
    } else {
      setInternalSearch(val); // Updates local state for legacy pages
    }
  };

  // 3. Combined Filter Logic (Declared only ONCE)
  const filteredData = useMemo(() => {
    if (!currentSearchValue) return data;
    const lowerCaseQuery = currentSearchValue.toLowerCase();

    return data.filter((row: any) => {
      return Object.values(row).some((val) =>
        String(val).toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [data, currentSearchValue]);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <TableToolBar 
        title={title}
        searchValue={currentSearchValue}
        onSearchChange={handleSearchChange} 
      />

      <DynamicTable
        columns={columns}
        data={filteredData}
      />
    </div>
  );
}