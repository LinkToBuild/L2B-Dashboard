"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { L2BButton } from "@/design-system/components/L2BButton";

interface TableToolBarProps {
  title?: string;
  searchValue?: string;
  onSearchChange: (value: string) => void;
}

export function TableToolBar({
  title = "Campaign Report",
  searchValue,
  onSearchChange,
}: TableToolBarProps) {
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
          <p className="text-[24px] text-neutral-2 font-normal">
            Campaign Report
          </p>
          <InfoTip label="Campaign Report" />
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
              <L2BButton type="button" variant="outline" size="icon" radius="rounded-lg" className="bg-white border-neutral-6 text-neutral-2 hover:bg-neutral-7">
                <ListFilter size={25} />
              </L2BButton>
            }
            items={filterMenuItems}
          />
        </div>
      </div>
    </div>
  );
}
