"use client";

import * as React from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

// 1. Define the props we expect from the ViewModel
export interface TableToolbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export function TableToolbar({
  searchQuery,
  onSearchChange,
  currentFilter,
  onFilterChange,
}: TableToolbarProps) {
  
  // 2. The dropdown now updates the parent (ViewModel) instead of local state
  const filterMenuItems = [
    { label: "High Value", onClick: () => onFilterChange("High Value") },
    { label: "Medium Value", onClick: () => onFilterChange("Medium Value") },
    { label: "Low Value", onClick: () => onFilterChange("Low Value") },
  ];

  return (
    <div>
      <div className="flex justify-between place-items-center">
        <div className="flex gap-[10px] place-items-center ">
          <p className="text-[24px] text-neutral-2 font-normal">All Equipments</p>
          <InfoTip label="All Equipments" />
        </div>
        <div className="flex gap-[18px]">
          <div className=" flex  text-[16px] text-success-2 gap-[20px] place-items-center min-mx-4">
            <a href="" className="underline underline-offset-2">View CSV</a>
            <a href="" className="underline underline-offset-2">Upload CSV</a>
          </div>

          {/* 3. Wire up the CustomInput to the URL search query */}
          <CustomInput
            sizeVariant="lg"
            label="Search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <L2BDropdownMenu
            trigger={
              <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
                <ListFilter size={25} />
              </button>
            }
            items={filterMenuItems}
          />
        </div>
      </div>
    </div>
  );
}