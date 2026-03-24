"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function InfoCards() {
  const infoCardsData = [
    {
      title: "Active Bookings",
      Stats: "12",
      percentage: -20.89,
      information: "Total number of active bookings currently in progress.",
    },
    {
      title: "Total Bookings",
      Stats: "134",
      percentage: null, // No percentage shown in image
      information: "Cumulative count of all bookings made.",
    },
    {
      title: "Total Earnings",
      Stats: "₹ 22,35,000",
      percentage: null, // No percentage shown in image
      information: "Total revenue generated from bookings.",
    },
    {
      title: "Failed Bookings",
      Stats: "12",
      percentage: -20.89,
      information: "Number of bookings that were not completed successfully.",
    },
    {
      title: "Ticket",
      Stats: "203/1000", // Image shows the ratio format
      percentage: null,
      information: "Support tickets raised against total capacity.",
    },
  ];

  return (
    <>
     
        <div className="    flex justify-between ">
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
    </>
  );
}
