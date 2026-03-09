"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { TabSwitcher } from "@/shared/excomponent/ui/L2BTabSwitcher";
import filter_icon from "@/public/images/filter-icon.png";


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

  return (
    <>
      
      <SectionWrapper className="">
        <div className=" flex h-[52px]   justify-between ">
          <div className=" h-full flex  font-normal place-items-center gap-3">
            <p className="text-neutral-1 xl:text-[24px] ">Marketing & Promotion  Metrics</p>
            <p className="text-[12px] text-[#CACACA]">
              <Info className="w-3 h-3 cursor-help text-neutral-3"></Info>
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
                  onClick={() => {setShowStartCalendar(!showStartCalendar),setShowEndCalendar(false);}}
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
                  onClick={() => {setShowEndCalendar(!showEndCalendar),setShowStartCalendar(false);}}
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
            
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
