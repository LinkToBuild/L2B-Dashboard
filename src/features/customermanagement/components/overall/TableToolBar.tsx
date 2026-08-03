import React, { useState } from "react";
import { ListFilter } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { L2BButton } from "@/design-system/components/L2BButton";

interface TableToolBarProps {
  onFilterChange?: (filter: string) => void;
  onSearchChange?: (search: string) => void;
  currentFilter?: string;
  searchQuery?: string;
}

export default function TableToolBar({
  onFilterChange,
  onSearchChange,
  currentFilter = "Completed",
  searchQuery = "",
}: TableToolBarProps) {
  const [filter, setFilter] = useState<string>(currentFilter);
  const [search, setSearch] = useState<string>(searchQuery);

  const filterMenuItems = [
    { label: "Completed", onClick: () => {
      setFilter("Completed");
      onFilterChange?.("Completed");
    }},
    { label: "Started", onClick: () => {
      setFilter("Started");
      onFilterChange?.("Started");
    }},
    { label: "Arrived", onClick: () => {
      setFilter("Arrived");
      onFilterChange?.("Arrived");
    }},
    { label: "Canceled", onClick: () => {
      setFilter("Canceled");
      onFilterChange?.("Canceled");
    }},
    { label: "Extended", onClick: () => {
      setFilter("Extended");
      onFilterChange?.("Extended");
    }},
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange?.(value);
  };

  return (
    <div className="flex justify-between place-items-center">
      <div className="flex gap-[10px] place-items-center ">
        <p className="text-[24px] text-neutral-2 font-normal">All Orders</p>
        <InfoTip label="All Orders" />
      </div>
      <div className="flex gap-[12px]">
        <CustomInput
          sizeVariant="lg"
          label="Search"
          type="search"
          value={search}
          onChange={handleSearchChange}
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
  );
}
