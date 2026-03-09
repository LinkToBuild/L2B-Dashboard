"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

export function TableToolbar() {
  const [filter, setFilter] = useState<string>("Completed");
  const filterMenuItems = [
    { label: "Completed", onClick: () => setFilter("Completed") },
    { label: "Started", onClick: () => setFilter("Started") },
    { label: "Arrived", onClick: () => setFilter("Arrived") },
    { label: "Canceled", onClick: () => setFilter("Canceled") },
    { label: "Extended", onClick: () => setFilter("Extended") },
  ];
  return (
    <div>
      <div className="flex justify-between place-items-center">
        <div className="flex gap-[10px] place-items-center ">
          <p className="text-[24px] text-neutral-2 font-normal">All Equipments</p>
          <Info className="w-4 h-4 text-neutral-3"></Info>
        </div>
        <div className="flex gap-[18px]">
          <div className=" flex  text-[16px] text-success-2 gap-[20px] place-items-center min-mx-4">
            <a href="" className="underline underline-offset-2">View CSV</a>
            <a href="" className="underline underline-offset-2">Upload CSV</a>
          </div>

          <CustomInput
            sizeVariant="lg"
            label="Search"
            type="search"
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
