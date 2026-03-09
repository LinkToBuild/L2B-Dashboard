"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function InfoCards() {
 let infoCardsData = [
  {
    title: "Total Impression",
    Stats: "12,091",
    percentage: -20.89,
    information: "Total number of times the content or ad was displayed to users.",
  },
  {
    title: "Total Clicks",
    Stats: "10,091",
    percentage: -20.89,
    information: "Total number of times users clicked on the content or ad.",
  },
  {
    title: "Conversion Rate",
    Stats: "19%",
    percentage: -20.89,
    information: "Percentage of interactions that resulted in a desired action (conversion).",
  },
  {
    title: "Cost per Acquisition",
    Stats: "₹1209",
    percentage: -20.89,
    information: "Average cost spent to acquire a single paying customer.",
  },
  {
    title: "Revenue Generated",
    Stats: "₹9,039",
    percentage: -20.89,
    information: "Total amount of income generated from these conversions.",
  },
];

  return (
    <>
      <div className="flex ">
        <div className="flex justify-between w-full ">
          {infoCardsData.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.Stats}
              percentage={card.percentage}
              information={card.information}
            />
          ))}
        </div>
      </div>
    </>
  );
}
