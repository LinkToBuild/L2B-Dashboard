"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Calendar } from "@/components/ui/calendar";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";


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
  const maxScore = 5;

  return (
    <div className="">
      <div className="flex h-[52px] justify-between">
        <div className="h-full flex font-normal place-items-center gap-2">
          <p className="text-neutral-1 xl:text-[24px]">Orders & Operations</p>
          <div
            title="Net Promoter Score"
            className="flex h-[26px] w-[152px] items-center justify-between rounded-[40px] border border-primary-2 px-2.5"
          >
            <div className="flex items-center gap-1">
              <p className="text-[10px] font-normal text-primary-2">
                NPS : {score}
              </p>
              <InfoTip label="Net Promoter Score" size="xs" />
            </div>

            <div className="flex">
              {[...Array(maxScore)].map((_, index) => {
                const fillAmount = Math.max(0, Math.min(1, score - index));
                const fillPercentage = fillAmount * 100;

                return (
                  <div key={index} className="relative inline-block h-3 w-3">
                    <svg
                      className="absolute left-0 top-0 h-[10px] w-[10px] text-neutral-4 opacity-40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <div
                      className="absolute left-0 top-0 h-full overflow-hidden"
                      style={{ width: `${fillPercentage}%` }}
                    >
                      <svg
                        className="h-[10px] w-[10px] text-primary-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
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

            <L2BDropdownMenu trigger={<L2BButton type="button" variant="outline" size="icon" radius="rounded-lg" className="bg-white border-neutral-6 text-neutral-2 hover:bg-neutral-7"><ListFilter size={18} /></L2BButton>} items={filterMenuItems} />
          </div>

          <div>
            <TabSwitcher activeTab={currentTab} onChange={onTabChange} />
          </div>
        </div>
      </div>
    </div>
  );
}