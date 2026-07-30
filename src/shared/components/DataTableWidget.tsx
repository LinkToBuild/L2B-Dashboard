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
  currentFilter?: string;
  onFilterChange?: (filterValue: string) => void;
  /** Status labels for the shared filter dropdown (defaults to ticket statuses). */
  filterOptions?: string[];
}

export function DataTableWidget<T>({
  title = "Campaign Report",
  columns,
  data,
  searchQuery = "",
  onSearchChange,
  currentFilter = "All",
  onFilterChange,
  filterOptions,
}: DataTableWidgetProps<T>) {
  const filterMenuItems: FilterMenuItem[] = onFilterChange
    ? (filterOptions ?? ["All", "Resolved", "Escalated"]).map((label) => ({
        label,
        onClick: () => onFilterChange(label),
      }))
    : [];

  const filteredData = useMemo(() => {
    let result = data;

    if (currentFilter && currentFilter !== "All") {
      result = result.filter(
        (row: any) =>
          row.status?.toLowerCase() === currentFilter.toLowerCase(),
      );
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter((row: any) => {
        return Object.values(row).some((val) =>
          String(val).toLowerCase().includes(lowerCaseQuery),
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
        filterItems={filterMenuItems}
      />

      <DynamicTable columns={columns} data={filteredData} />
    </div>
  );
}
