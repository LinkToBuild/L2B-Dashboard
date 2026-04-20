"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter, Info } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Calendar } from "@/components/ui/calendar";

// 1. Ensure these are all imported perfectly from your ui/tabs file
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; 

export interface PFHeaderProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  startDate?: string | null;
  onStartDateChange: (date: Date | undefined) => void;
  endDate?: string | null;
  onEndDateChange: (date: Date | undefined) => void;
  globalTab: string;
  onGlobalTabChange: (tab: string) => void;
}

export function Header({ 
  currentFilter, onFilterChange, startDate, onStartDateChange, 
  endDate, onEndDateChange, globalTab, onGlobalTabChange 
}: PFHeaderProps) {
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
    <div className="">
      <div className="flex h-[52px] justify-between">
        <div className="h-full flex font-normal place-items-center gap-2">
          <p className="text-neutral-1 xl:text-[24px]">Payment & Finance Metrics</p>
          <Info className="w-3 h-3 cursor-help text-neutral-3" />
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
            
            {/* 2. The perfectly nested Tabs component */}
            <Tabs defaultValue={globalTab} value={globalTab} onValueChange={onGlobalTabChange} className="h-[48px] w-[225px]">
              <TabsList className="h-full w-full rounded-[8px] bg-neutral-6 p-[4px]">
                <TabsTrigger value="rental" className="flex-1 rounded-[6px] text-[16px] font-normal text-neutral-2 data-[state=active]:bg-[#F4B037] data-[state=active]:text-white">
                  Rental
                </TabsTrigger>
                <TabsTrigger value="material" className="flex-1 rounded-[6px] text-[16px] font-normal text-neutral-2 data-[state=active]:bg-[#F4B037] data-[state=active]:text-white">
                  Material
                </TabsTrigger>
              </TabsList>
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}