"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Calendar } from "@/components/ui/calendar";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";

// 1. Define the props coming from the URL ViewModel
export interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  // Notice these are explicitly 'string | null', NOT 'Date'
  startDate?: string | null; 
  onStartDateChange: (date: Date | undefined) => void;
  endDate?: string | null;
  onEndDateChange: (date: Date | undefined) => void;
  currentFilter?: string;
  onFilterChange: (filter: string) => void;
}

export function Header({
  currentTab,
  onTabChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  currentFilter,
  onFilterChange,
}: HeaderProps) {
  // Local UI state for calendar popups stays here
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  // Parse the string dates from the URL back into Date objects for the Calendar
  const parsedStartDate = startDate ? new Date(startDate) : undefined;
  const parsedEndDate = endDate ? new Date(endDate) : undefined;

  const filterMenuItems = [
    { label: "Daily", onClick: () => onFilterChange("Daily") },
    { label: "Weekly", onClick: () => onFilterChange("Weekly") },
    { label: "Monthly", onClick: () => onFilterChange("Monthly") },
    { label: "Yearly", onClick: () => onFilterChange("Yearly") },
  ];

  return (
    <SectionWrapper className="">
      <div className="flex h-[52px] justify-between">
        <div className="h-full flex font-normal place-items-center gap-2">
          <p className="text-neutral-1 xl:text-[24px]">Inventory Management</p>
          <p className="text-[12px] text-[#CACACA]">
            <Info className="w-3 h-3 cursor-help text-neutral-3"></Info>
          </p>
        </div>
        
        <div className="flex gap-[22px]">
          <div className="flex gap-[12px] relative place-items-center">
            
            {/* Start Date Picker */}
            <div className="relative">
              <L2BButton
                onClick={() => {
                  setShowStartCalendar(!showStartCalendar);
                  setShowEndCalendar(false);
                }}
                variant="outline"
                textSize="text-[16px]"
                textColor="text-neutral-3"
                radius="rounded-[4px]"
                fontWeight="font-normal"
                size="medium"
              >
                {parsedStartDate ? parsedStartDate.toLocaleDateString() : "Start Date"}
              </L2BButton>
              {showStartCalendar && (
                <div className="absolute top-10 left-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                  <Calendar
                    mode="single"
                    selected={parsedStartDate}
                    captionLayout="dropdown"
                    className="w-[230px] h-[260px]"
                    onSelect={(date) => {
                      onStartDateChange(date);
                      setShowStartCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>

            {/* End Date Picker */}
            <div className="relative">
              <L2BButton
                onClick={() => {
                  setShowEndCalendar(!showEndCalendar);
                  setShowStartCalendar(false);
                }}
                variant="outline"
                textSize="text-[16px]"
                textColor="text-neutral-3"
                radius="rounded-[4px]"
                fontWeight="font-normal"
                size="medium"
              >
                {parsedEndDate ? parsedEndDate.toLocaleDateString() : "End Date"}
              </L2BButton>
              {showEndCalendar && (
                <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    className="w-[230px] h-[260px]"
                    selected={parsedEndDate}
                    onSelect={(date) => {
                      onEndDateChange(date);
                      setShowEndCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>

            {/* Header Filter */}
            <L2BDropdownMenu
              trigger={
                <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
                  <ListFilter size={18} />
                </button>
              }
              items={filterMenuItems}
            />
          </div>

          {/* 2. Tab Switcher wired to URL state! */}
          <div>
            <TabSwitcher 
              activeTab={currentTab} 
              onChange={onTabChange}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}