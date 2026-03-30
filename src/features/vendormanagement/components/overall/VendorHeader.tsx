"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";

interface HeaderProps {
  currentTab: string;
  currentStartDate?: string | null;
  currentEndDate?: string | null;
  onTabChange: (tab: string) => void;
  onFilterChange: (filter: string) => void;
  onDateChange: (start: Date | undefined, end: Date | undefined) => void;
}

export function Header({
  currentTab,
  onTabChange,
  currentStartDate,
  currentEndDate,
  onFilterChange,
  onDateChange,
}: HeaderProps) {
  const [activeTab, setActiveTab] = useState<"Rental" | "Material">("Rental");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const [localStart, setLocalStart] = useState<Date | undefined>();
  const [localEnd, setLocalEnd] = useState<Date | undefined>();

  const [filter, setFilter] = useState<string>("Daily");

  const filterMenuItems = [
    { label: "Daily", onClick: () => onFilterChange("Daily") },
    { label: "Weekly", onClick: () => onFilterChange("Weekly") },
    { label: "Monthly", onClick: () => onFilterChange("Monthly") },
    { label: "Yearly", onClick: () => onFilterChange("Yearly") },
  ];

  return (
    <>
    
        <div className=" flex h-[52px]   justify-between ">
          <div className=" h-full flex  font-normal place-items-center gap-2">
            <p className="text-[#1F1F1F] xl:text-[24px] ">{currentTab} Overview</p>
            <p className="text-[12px] text-[#CACACA]">
              (Comparison based on previous week's performance.)
            </p>
          </div>
          <div className="flex gap-[22px] ">
            <div className="flex gap-[12px] relative place-items-center">
              <div className="relative">
                {/* <button
                onClick={() => setShowStartCalendar(!showStartCalendar)}
                className="text-[16px] text-[#8E8E8E] px-[4px] py-[2px] border border-[#E1E1E1] w-[99px] h-[28px] rounded-[4px]"
              >
                {startDate ? startDate.toLocaleDateString() : "Start Date"}
              </button> */}
                <L2BButton
                  onClick={() => {
                    (setShowStartCalendar(!showStartCalendar),
                      setShowEndCalendar(false));
                  }}
                  variant="outline"
                  textSize="text-[16px]"
                  textColor="text-neutral-3"
                  radius="rounded-[4px]"
                  fontWeight="font-normal"
                  size="medium"
                >
                  {currentStartDate
                    ? new Date(currentStartDate).toLocaleDateString("en-GB")
                    : "Start Date"}
                </L2BButton>
                {showStartCalendar && (
                  <div className="absolute top-10 left-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                    <Calendar
                      mode="single"
                      selected={localStart} // Use local state temporarily
                      captionLayout="dropdown"
                      className=" w-[230px] h-[260px]"
                      onSelect={(date) => {
                        setLocalStart(date); // Save locally
                        setShowStartCalendar(false); // Close calendar
                        onDateChange(date, localEnd); // SEND TO VIEWMODEL!
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="relative">
                <L2BButton
                  onClick={() => {
                    (setShowEndCalendar(!showEndCalendar),
                      setShowStartCalendar(false));
                  }}
                  variant="outline"
                  textSize="text-[16px]"
                  textColor="text-neutral-3"
                  radius="rounded-[4px]"
                  fontWeight="font-normal"
                  size="medium"
                >
                  {currentEndDate
                    ? new Date(currentEndDate).toLocaleDateString("en-GB")
                    : "End Date"}
                </L2BButton>
                {showEndCalendar && (
                  <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown"
                      className=" w-[230px] h-[260px]"
                      selected={localEnd}
                      onSelect={(date) => {
                        setLocalEnd(date);
                        setShowEndCalendar(false);
                        onDateChange(localStart, date); // SEND TO VIEWMODEL!
                      }}
                    />
                  </div>
                )}
              </div>

              <L2BDropdownMenu
                trigger={
                  <button className="p-2 bg-white border border-neutral-6 rounded-lg text-neutral-2 hover:bg-neutral-7 transition-colors">
                    <ListFilter size={18} />
                  </button>
                }
                items={filterMenuItems}
              />
            </div>

            {/* <div className="flex gap-[5px] place-items-center  px-2 bg-neutral-6 rounded-[8px]">
              <L2BButton
                variant="primary"
                textSize="text-[24px]"
                fontWeight="font-normal"
                radius="rounded-[8px]"
                size="medium"
              >
                Rental
              </L2BButton>
              <L2BButton
                variant="ghost"
                textSize="text-[24px]"
                fontWeight="font-normal"
                radius="rounded-[8px]"
                size="medium"
                textColor="text-neutral-3"
              >
                Material
              </L2BButton>
            </div> */}
            <div>
              <TabSwitcher activeTab={currentTab} onChange={onTabChange} />
            </div>
          </div>
        </div>
    </>
  );
}
