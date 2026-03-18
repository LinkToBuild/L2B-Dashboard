"use client";

import React from "react";
import Link from "next/link";
import { Info, ListFilter } from "lucide-react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";

export interface TableToolbarProps {
  title: string;
  actionText?: string;
  actionHref?: string;
  
  // Dynamic Filter Props
  filterOptions?: string[]; // Array of strings (e.g., ["Daily", "Weekly"])
  activeFilter?: string; // The currently selected filter
  onFilterChange?: (newFilter: string) => void; // Function to run when clicked
  
  filterElement?: React.ReactNode;
}

export default function TableToolbar({
  title,
  actionText,
  actionHref,
  filterOptions = [], // Default to empty array
  activeFilter,
  onFilterChange,
  filterElement,
}: TableToolbarProps) {
  
  // Dynamically generate the dropdown items based on the props passed in
  const filterMenuItems = filterOptions.map((option) => ({
    label: option,
    // Add a checkmark or bold text if it's the active filter (optional UI polish)
    onClick: () => {
      if (onFilterChange) onFilterChange(option);
    },
  }));

  return (
    <div className="flex items-center justify-between w-full ">
      {/* Left Side: Title & Info Icon */}
      <div className="flex items-center gap-2 ">
        <h3 className="text-[20px] font-medium text-neutral-1">{title}</h3>
        <Info className="w-4 h-4 text-neutral-400 cursor-help" />
      </div>

      {/* Right Side: Action Link & Filter */}
      <div className="flex items-center gap-4">
        {actionText && actionHref && (
          <Link
            href={actionHref}
            className="text-[14px] text-success-1 font-medium hover:opacity-80 transition-opacity"
          >
            {actionText}
          </Link>
        )}

        {/* Render Filter Box */}
        {filterElement ? (
          filterElement
        ) : filterOptions.length > 0 ? (
          <L2BDropdownMenu
            trigger={
              <button 
                title={activeFilter ? `Filtered by: ${activeFilter}` : "Filter"}
                className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-500 hover:bg-neutral-50 transition-colors"
              >
                <ListFilter size={18} />
              </button>
            }
            items={filterMenuItems}
          />
        ) : null}
        {/* Note: If no filterOptions are passed, it won't render the icon at all! */}
      </div>
    </div>
  );
}