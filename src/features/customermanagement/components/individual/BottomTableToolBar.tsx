"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

export function BottomTableToolbar() {
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
          <TabSwitcher></TabSwitcher>
          <InfoTip />
        </div>
        <div className="flex gap-[18px]">
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
