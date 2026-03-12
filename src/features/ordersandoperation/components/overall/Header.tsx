"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
// import SectionWrapper from "../common/sectionwrapper";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";
// import {Calendar} from "@/shared/excomponent/ui/calender"
// import { navbar_filter_icon } from "@/components/ui/data/navbar";
import filter_icon from "@/public/images/filter-icon.png";
// import UIButton from "../common/UIButton";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export function Header() {
  const [activeTab, setActiveTab] = useState<"Rental" | "Material">("Rental");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [filter, setFilter] = useState<string>("Daily");

  const filterMenuItems = [
    { label: "Daily", onClick: () => setFilter("Daily") },
    { label: "Weekly", onClick: () => setFilter("Weekly") },
    { label: "Monthly", onClick: () => setFilter("Monthly") },
    { label: "Yearly", onClick: () => setFilter("Yearly") },
  ];

  const score = 3.7;
  const maxScore = 5;
  const tooltipText =
    "Net Promoter Score indicates overall customer satisfaction.";
  return (
    <>
      <SectionWrapper className="">
        <div className=" flex h-[52px]   justify-between ">
          <div className=" h-full flex  font-normal place-items-center gap-2">
            <p className="text-neutral-1 xl:text-[24px] ">
              Inventory Management
            </p>
            <div
              title={tooltipText}
              // Changed to items-center and added px-2 to give it some breathing room from the borders
              className="w-[152px] h-[26px] border border-primary-2 rounded-[40px] flex items-center justify-between px-2.5"
            >
              <div className="flex items-center  gap-3">
                <p className="text-primary-2  text-[10px] font-normal">
                  NPS : {score}
                </p>
                <Info className="w-3 h-3 text-neutral-4 cursor-help" />
              </div>

              {/* The Dynamic Star Array */}
              <div className="flex  ">
                {[...Array(maxScore)].map((_, index) => {
                  // Calculate how much of THIS specific star should be filled
                  const fillAmount = Math.max(0, Math.min(1, score - index));
                  const fillPercentage = fillAmount * 100;

                  return (
                    <div key={index} className=" relative  inline-block h-3 w-3">
                      {/* Base layer: The empty background star */}
                      <svg
                        className="h-[10px] w-[10px] absolute left-0 top-0  text-neutral-4 opacity-40"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>

                      {/* Top layer: The colored star, masked by the dynamic width */}
                      <div
                        className="absolute left-0 top-0 h-full overflow-hidden"
                        style={{ width: `${fillPercentage}%` }}
                      >
                        {/* Note: I'm using text-primary-2 here assuming it's that yellow/orange color from your theme */}
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
                  {startDate ? startDate.toLocaleDateString() : "Start Date"}
                </L2BButton>
                {showStartCalendar && (
                  <div className="absolute top-10 left-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      captionLayout="dropdown"
                      className=" w-[230px] h-[260px]"
                      onSelect={(date) => {
                        setStartDate(date);
                        setShowStartCalendar(false);
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
                  {endDate ? endDate.toLocaleDateString() : "End Date"}
                </L2BButton>
                {showEndCalendar && (
                  <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown"
                      className=" w-[230px] h-[260px]"
                      selected={endDate}
                      onSelect={(date) => {
                        setEndDate(date);
                        setShowEndCalendar(false);
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
              <TabSwitcher></TabSwitcher>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
