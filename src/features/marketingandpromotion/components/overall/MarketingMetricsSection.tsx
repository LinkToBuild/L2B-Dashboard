"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function GraphSection() {
  const campaignData = [
    { date: "5", campaign1: 25000, campaign2: 12000, campaign3: 0 },
    { date: "10", campaign1: 22000, campaign2: 12000, campaign3: 0 },
    { date: "15", campaign1: 31000, campaign2: 12000, campaign3: 32000 },
    { date: "20", campaign1: 34000, campaign2: 12000, campaign3: 15000 },
    { date: "25", campaign1: 38000, campaign2: 12000, campaign3: 8000 },
    { date: "30", campaign1: 28000, campaign2: 12000, campaign3: 29000 },
  ];

  const campaignConfig = {
    campaign1: {
      label: "Campaign 1",
      color: "#f59e0b", // Yellow/Orange
    },
    campaign2: {
      label: "Campaign 2",
      color: "#34d399", // Green
    },
    campaign3: {
      label: "Campaign 3",
      color: "#3b82f6", // Blue
    },
  };

  return (
    <>
      <div className="w-full">
        <div className="w-[382px] h-[211px]">
          <div>
            nnn
          </div>
          <div></div>
        </div>
        {/* <div></div>
        <div></div> */}
      </div>
    </>
  );
}
