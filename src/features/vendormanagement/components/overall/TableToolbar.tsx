"use client";

import * as React from "react";
import { useState } from "react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { L2BButton } from "@/design-system/components/L2BButton";

export function TableToolbar() {
  const [filter, setFilter] = useState<string>("Completed");
  const filterMenuItems = [
    { label: "Clay Bricks", onClick: () => setFilter("Clay Bricks") },
    { label: "Aggregate", onClick: () => setFilter("Aggregate") },
    { label: "White Cement", onClick: () => setFilter("White Cement") },
    { label: "Red Bricks", onClick: () => setFilter("Red Bricks") },
    { label: "Fly ash brick", onClick: () => setFilter("Fly ash brick") },
    { label: "Concrete", onClick: () => setFilter("Concrete") },
    { label: "Tiles", onClick: () => setFilter("Tiles") },
  ];
  return (
    <div>
      <div className="flex justify-between place-items-center">
        <div className="flex gap-[10px] place-items-center ">
          <p className="text-[24px] text-neutral-2 font-normal">Inventory Overview</p>
          <InfoTip label="Inventory Overview" />
        </div>
        <div className="">
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
