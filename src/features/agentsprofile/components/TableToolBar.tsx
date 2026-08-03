"use client";

import React from "react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { L2BButton } from "@/design-system/components/L2BButton";

// 1. Define the shape of our filter options
export interface FilterOption {
  label: string;
  value: string;
}

// 2. Define exactly what this toolbar needs from its parent
export interface TableToolBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filterOptions: FilterOption[];
  activeFilter: string; // The currently selected filter
  onFilterChange: (value: string) => void;
}

export default function TableToolBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  filterOptions,
  activeFilter,
  onFilterChange,
}: TableToolBarProps) {
  
  // 3. Map our generic filter options to the specific format the Dropdown expects
  const filterMenuItems = filterOptions.map((option) => ({
    label: option.label,
    onClick: () => onFilterChange(option.value),
    // Optional: If your L2BDropdownMenu supports an 'isActive' or bolding for the selected item, 
    // you can pass that here comparing `activeFilter === option.value`
  }));

  return (
    <div className="flex items-center justify-between w-full pb-4">
      {/* Optional: Add a title or left-side elements here if needed later */}
      <h3 className="text-[24px] font-normal text-neutral-1">L2B Employee</h3>

      <div className="flex items-center gap-4">
        <CustomInput
          sizeVariant="lg"
          label="Search" // Removed the label prop so it looks like a clean search bar
       
          type="search"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        
        <L2BDropdownMenu
          trigger={
            <L2BButton type="button" variant="outline" size="icon" radius="rounded-lg" className="bg-white border-neutral-6 text-neutral-2 hover:bg-neutral-7">
              <ListFilter size={20} />
              {/* Show the currently active filter, or default to "Filter" */}
             
            </L2BButton>
          }
          items={filterMenuItems}
        />
      </div>
    </div>
  );
}