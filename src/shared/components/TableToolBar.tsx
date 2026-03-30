"use client";

import * as React from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

// 1. Define what a filter item looks like
export interface FilterMenuItem {
  label: string;
  onClick: () => void;
}

interface TableToolBarProps {
  title?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showTitle?: boolean;
  showInfo?: boolean;
  showSearch?: boolean;
  showFilter?: boolean;
  // 2. Add the filter items as a prop so the parent controls them!
  filterItems?: FilterMenuItem[]; 
}

export function TableToolBar({ 
  title = "Campaign Report", 
  searchValue, 
  onSearchChange,
  showTitle = true,
  showInfo = true,
  showSearch = true,
  showFilter = true,
  filterItems = [] // Default to empty array
}: TableToolBarProps) {

  return (
    <div>
      <div className="flex justify-between place-items-center">
        
        {/* Left Side: Title and Info Icon */}
        <div className="flex gap-[10px] place-items-center ">
          {showTitle && <p className="text-[24px] text-neutral-2 font-normal">{title}</p>}
          {showInfo && <Info className="w-4 h-4 text-neutral-3" />}
        </div>

        {/* Right Side: Search and Filter */}
        <div className="flex gap-[18px]">
          {showSearch && (
            <CustomInput
              sizeVariant="lg"
              label="Search"
              type="search"
              value={searchValue}
              // Safely handle the event and fix the `any` type
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange && onSearchChange(e.target.value)} 
            />
          )}

          {/* 3. Only show the filter dropdown if there are actual items passed to it */}
          {showFilter && filterItems.length > 0 && (
            <L2BDropdownMenu
              trigger={
                <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
                  <ListFilter size={25} />
                </button>
              }
              items={filterItems}
            />
          )}
        </div>
        
      </div>
    </div>
  );
}