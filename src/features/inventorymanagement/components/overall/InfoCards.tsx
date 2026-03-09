"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function InfoCards() {
  let infoCardsData = [
    {
      title: "Total Equipment",
      Stats: "12,091",
      percentage: -20.89,
      information: "Total number of equipment currently in the inventory.",
    },
    {
      title: "To be assigned",
      Stats: "91",
      percentage: -20.89,
      information:
        "Equipment available and waiting to be assigned to a project.",
    },
    {
      title: "Booked",
      Stats: "123",
      percentage: -20.89,
      information: "Equipment currently booked for upcoming rentals.",
    },
    {
      title: "Active",
      Stats: "232",
      percentage: -20.89,
      information: "Equipment currently active and deployed in the field.",
    },
    {
      title: "Equipment Utilization",
      Stats: "19.2%",
      percentage: -20.89,
      information: "Percentage of total equipment currently in use.",
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
