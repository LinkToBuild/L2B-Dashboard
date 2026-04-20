"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Calendar } from "@/components/ui/calendar";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";


export interface OrdersHeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  startDate?: string | null;
  onStartDateChange: (date: Date | undefined) => void;
  endDate?: string | null;
  onEndDateChange: (date: Date | undefined) => void;
  currentFilter?: string;
  onFilterChange: (filter: string) => void;
}

export function Header({
  currentTab, onTabChange, startDate, onStartDateChange, endDate, onEndDateChange, currentFilter, onFilterChange
}: OrdersHeaderProps) {
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

  const score = 3.7;

  return (
    <div className="">
      <div className="flex h-[52px] justify-between">
        <div className="h-full flex font-normal place-items-center gap-2">
          {/* Changed Title as noticed! */}
          <p className="text-neutral-1 xl:text-[24px]">Orders & Operations</p>
          <div title="Net Promoter Score" className="w-[152px] h-[26px] border border-primary-2 rounded-[40px] flex items-center justify-between px-2.5">
            <div className="flex items-center gap-3">
              <p className="text-primary-2 text-[10px] font-normal">NPS : {score}</p>
              <Info className="w-3 h-3 text-neutral-4 cursor-help" />
            </div>
            {/* ... Keep your existing dynamic star SVG array here to save space ... */}
          </div>
        </div>
        
        <div className="flex gap-[22px]">
          <div className="flex gap-[12px] relative place-items-center">
            {/* Start Date */}
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
            
            {/* End Date */}
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

            <L2BDropdownMenu trigger={<button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7"><ListFilter size={18} /></button>} items={filterMenuItems} />
          </div>

          <div>
            <TabSwitcher activeTab={currentTab} onChange={onTabChange} />
          </div>
        </div>
      </div>
    </div>
  );
}