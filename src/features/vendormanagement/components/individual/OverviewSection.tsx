"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export function OverviewSection({ startDate, onStartDateChange, endDate, onEndDateChange, currentFilter, onFilterChange }: any) {
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const parsedStartDate = startDate ? new Date(startDate) : undefined;
  const parsedEndDate = endDate ? new Date(endDate) : undefined;

  const filterMenuItems = [
    { label: "Daily", onClick: () => onFilterChange("Daily") },
    { label: "Weekly", onClick: () => onFilterChange("Weekly") },
    { label: "Monthly", onClick: () => onFilterChange("Monthly") },
    { label: "Yearly", onClick: () => onFilterChange("Yearly") },
  ];

  return (
    <div className="flex h-[52px] justify-between">
      <div className="h-full flex font-normal place-items-center gap-3">
        <p className="text-neutral-1 xl:text-[24px]">Overview</p>
        <p className="text-[12px] font-normal text-neutral-4">(Comparison based on previous week's performance.)</p>
      </div>
      <div className="flex gap-[22px]">
        <div className="flex gap-[12px] relative place-items-center">
          
          <div className="relative">
            <L2BButton onClick={() => { setShowStartCalendar(!showStartCalendar); setShowEndCalendar(false); }} variant="outline" textSize="text-[16px]" textColor="text-neutral-3" radius="rounded-[4px]" size="medium">
              {parsedStartDate ? parsedStartDate.toLocaleDateString() : "Start Date"}
            </L2BButton>
            {showStartCalendar && (
              <div className="absolute top-10 left-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                <Calendar mode="single" selected={parsedStartDate} captionLayout="dropdown" className="w-[230px] h-[260px]" onSelect={(date) => { onStartDateChange(date); setShowStartCalendar(false); }} />
              </div>
            )}
          </div>

          <div className="relative">
            <L2BButton onClick={() => { setShowEndCalendar(!showEndCalendar); setShowStartCalendar(false); }} variant="outline" textSize="text-[16px]" textColor="text-neutral-3" radius="rounded-[4px]" size="medium">
              {parsedEndDate ? parsedEndDate.toLocaleDateString() : "End Date"}
            </L2BButton>
            {showEndCalendar && (
              <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                <Calendar mode="single" selected={parsedEndDate} captionLayout="dropdown" className="w-[230px] h-[260px]" onSelect={(date) => { onEndDateChange(date); setShowEndCalendar(false); }} />
              </div>
            )}
          </div>

          <L2BDropdownMenu trigger={<button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors"><ListFilter size={18} /></button>} items={filterMenuItems} />
        </div>
      </div>
    </div>
  );
}