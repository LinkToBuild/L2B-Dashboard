"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Calendar } from "@/components/ui/calendar";
import { DownloadReportButton } from "@/shared/components/DownloadReportButton";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

interface GBHeaderProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  startDate?: string | null;
  onStartDateChange: (date: Date | undefined) => void;
  endDate?: string | null;
  onEndDateChange: (date: Date | undefined) => void;
}

export function Header({
  currentFilter,
  onFilterChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}: GBHeaderProps) {
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
    <>
      <div className="">
        <div className="flex h-[52px] justify-between">
          <div className="h-full flex font-normal place-items-center gap-3">
            <p className="text-neutral-1 xl:text-[24px]">
              Growth & Behaviour Metrics
            </p>

            <p className="text-[12px] text-[#CACACA]">
              <InfoTip label="Growth & Behaviour Metrics" size="xs" />
            </p>

            <StatusBadge
              status="successLight"
              label="API success: 99.5 %"
              className="bg-[#CDE3D5] text-[#47B881] px-[14px] py-[8px] text-[12px] font-normal rounded-full"
            />
          </div>

          <div className="flex gap-[3px] items-center">
            <DownloadReportButton />

            <div className="flex gap-[12px] relative place-items-center">
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
                  size="medium"
                >
                  {parsedStartDate
                    ? parsedStartDate.toLocaleDateString()
                    : "Start Date"}
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
                  size="medium"
                >
                  {parsedEndDate
                    ? parsedEndDate.toLocaleDateString()
                    : "End Date"}
                </L2BButton>
                {showEndCalendar && (
                  <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                    <Calendar
                      mode="single"
                      selected={parsedEndDate}
                      captionLayout="dropdown"
                      className="w-[230px] h-[260px]"
                      onSelect={(date) => {
                        onEndDateChange(date);
                        setShowEndCalendar(false);
                      }}
                    />
                  </div>
                )}
              </div>

              <L2BDropdownMenu
                trigger={
                  <L2BButton type="button" variant="outline" size="icon" radius="rounded-lg" className="bg-white border-neutral-6 text-neutral-2 hover:bg-neutral-7">
                    <ListFilter size={18} />
                  </L2BButton>
                }
                items={filterMenuItems}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
