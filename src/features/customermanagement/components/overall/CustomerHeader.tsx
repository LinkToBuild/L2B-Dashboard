"use client";

import React, { useState } from "react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ListFilter } from "lucide-react";
// import SectionWrapper from "../common/sectionwrapper";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { Calendar } from "@/components/ui/calendar";
// import {Calendar} from "@/shared/excomponent/ui/calender"
// import { navbar_filter_icon } from "@/components/ui/data/navbar";
import filter_icon from "@/public/images/filter-icon.png";
import { it } from "node:test";
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

  return (
    <>
      {/* <SectionWrapper className=" my-5">
      <div className="h-[48px] flex  w-full justify-between place-items-center ">
        <div className=" h-full flex  poppins-400 place-items-center gap-2">
          <p className="text-[#1F1F1F] xl:text-[24px] ">Overview</p>
          <p className="text-[12px] text-[#CACACA]">
            (Comparison based on previous week's performance.)
          </p>
        </div>
        <div className="flex gap-1">
          <div className="flex gap-[12px] relative place-items-end">
            <div className="relative">
              <button
                onClick={() => setShowStartCalendar(!showStartCalendar)}
                className="text-[16px] text-[#8E8E8E] px-[4px] py-[2px] border border-[#E1E1E1] w-[99px] h-[28px] rounded-[4px]"
              >
                {startDate ? startDate.toLocaleDateString() : "Start Date"}
              </button>
              {showStartCalendar && (
                <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      setStartDate(date);
                      setShowStartCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowEndCalendar(!showEndCalendar)}
                className="text-[16px] text-[#8E8E8E] px-[4px] py-[2px] border border-[#E1E1E1] w-[99px] h-[28px] rounded-[4px]"
              >
                {endDate ? endDate.toLocaleDateString() : "End Date"}
              </button>
              {showEndCalendar && (
                <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => {
                      setEndDate(date);
                      setShowEndCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer p-1">
                    <img
                      src={navbar_filter_icon[0]}
                      className="w-[20px] h-[15px]"
                      alt="filter"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32 text-[12px] poppins-400 text-[#8E8E8E] absolute z-50">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setFilter("Daily")}>
                    Daily
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilter("Weekly")}>
                    Weekly
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilter("Monthly")}>
                    Monthly
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilter("Yearly")}>
                    Yearly
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <UIButton className="w-[106px] h-[40px] rounded-[8px] bg-[#FEB637] text-[#FFFEF9] text-[24px] poppins-400" text="Rental"></UIButton>
            <UIButton className="w-[106px] h-[40px] rounded-[8px]  text-[#8E8E8E] text-[24px] poppins-400" text="Material"></UIButton>
          </div>
        </div>
      </div>
    </SectionWrapper> */}
      <div className="">
        <div className=" flex h-[52px]   justify-between ">
          <div className=" h-full flex  font-normal place-items-center gap-2">
            <p className="text-[#1F1F1F] xl:text-[24px] ">Overview</p>
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
                  onClick={() => setShowStartCalendar(!showStartCalendar)}
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
                  <div className="absolute top-10 right-0 z-50 bg-white border rounded-lg shadow-lg p-4">
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
                  onClick={() => setShowEndCalendar(!showEndCalendar)}
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

            <div className="flex gap-[5px] place-items-center  px-2 bg-neutral-6 rounded-[8px]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




