"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";


interface TableToolBarProps {
  title?: string;
  searchValue?: string;
  onSearchChange: (value: string) => void;
}

export function TableToolBar({ title = "Campaign Report", searchValue, onSearchChange }: TableToolBarProps) {
  const [filter, setFilter] = useState<string>("Completed");
  const filterMenuItems = [
    { label: "Completed", onClick: () => setFilter("Completed") },
    { label: "Schedule", onClick: () => setFilter("Started") },
    { label: "Active", onClick: () => setFilter("Arrived") },
    { label: "Pause", onClick: () => setFilter("Canceled") },
  ];
  return (
    <div>
      <div className="flex justify-between place-items-center">
        <div className="flex gap-[10px] place-items-center ">
          <p className="text-[24px] text-neutral-2 font-normal">Campaign Report</p>
          <Info className="w-4 h-4 text-neutral-3"></Info>
        </div>
        <div className="flex gap-[18px]">
         

          <CustomInput
            sizeVariant="lg"
            label="Search"
            type="search"
            value={searchValue}
            onChange={(e: any) => onSearchChange(e.target.value)}
            // helperText="Must be 8 characters"
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
