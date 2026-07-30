"use client";

import React from "react";
import Link from "next/link";
import { ListFilter } from "lucide-react";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

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
        <button
          type="button"
          onClick={onActionClick}
          className="text-[14px] text-success-1 font-medium hover:opacity-80 transition-opacity"
        >
          {actionText}
        </button>
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
              <button
                title={activeFilter ? `Filtered by: ${activeFilter}` : "Filter"}
                className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-500 hover:bg-neutral-50 transition-colors"
              >
                <ListFilter size={18} />
              </button>
            }
            items={filterMenuItems}
          />
        ) : null}
      </div>
    </div>
  );
}