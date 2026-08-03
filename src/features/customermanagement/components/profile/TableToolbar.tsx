"use client";

import React from "react";
import Link from "next/link";
import { ListFilter } from "lucide-react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { L2BButton } from "@/design-system/components/L2BButton";

export interface TableToolbarProps {
  title: string;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;

  filterOptions?: string[];
  activeFilter?: string;
  onFilterChange?: (newFilter: string) => void;

  filterElement?: React.ReactNode;
}

export default function TableToolbar({
  title,
  actionText,
  actionHref,
  onActionClick,
  filterOptions = [],
  activeFilter,
  onFilterChange,
  filterElement,
}: TableToolbarProps) {
  const filterMenuItems = filterOptions.map((option) => ({
    label: option,
    onClick: () => {
      if (onFilterChange) onFilterChange(option);
    },
  }));

  const renderAction = () => {
    if (!actionText) return null;

    if (onActionClick) {
      return (
        <L2BButton
          type="button"
          variant="bgNone"
          size="auto"
          onClick={onActionClick}
          className="text-[14px] text-success-1 font-medium hover:opacity-80 transition-opacity"
        >
          {actionText}
        </L2BButton>
      );
    }

    if (actionHref) {
      return (
        <Link
          href={actionHref}
          className="text-[14px] text-success-1 font-medium hover:opacity-80 transition-opacity"
        >
          {actionText}
        </Link>
      );
    }

    return null;
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <h3 className="text-[20px] font-medium text-neutral-1">{title}</h3>
        <InfoTip label={title} />
      </div>

      <div className="flex items-center gap-4">
        {renderAction()}

        {filterElement ? (
          filterElement
        ) : filterOptions.length > 0 ? (
          <L2BDropdownMenu
            trigger={
              <L2BButton
                type="button"
                variant="outline"
                size="icon"
                radius="rounded-lg"
                title={activeFilter ? `Filtered by: ${activeFilter}` : "Filter"}
                className="bg-white border-neutral-6 text-neutral-2 hover:bg-neutral-7"
              >
                <ListFilter size={18} />
              </L2BButton>
            }
            items={filterMenuItems}
          />
        ) : null}
      </div>
    </div>
  );
}