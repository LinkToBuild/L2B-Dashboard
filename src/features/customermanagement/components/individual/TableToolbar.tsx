"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

export function TableToolbar() {
  const [filter, setFilter] = useState<string>("Completed");
  const filterMenuItems = [
    { label: "All", onClick: () => setFilter("CAll") },
    { label: "Rentals", onClick: () => setFilter("Rentals") },
    { label: "Materials", onClick: () => setFilter("Materials") },
  ];
  return (
    <div>
      <div className="flex justify-between place-items-center">
        <div className="flex gap-[10px] place-items-center ">
          <p className="text-[24px] text-neutral-2 font-normal">Requested / Wishlist</p>
          <InfoTip label="Requested / Wishlist" />
        </div>
        <div className="">
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
