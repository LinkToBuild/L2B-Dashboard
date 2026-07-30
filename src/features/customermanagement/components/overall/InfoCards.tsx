"use client";

import React from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";

export function InfoCards() {
  const infoCardsData = [
    {
      title: "Active Orders",
      Stats: "10,90,00",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
    {
      title: "Completed ",
      Stats: "9,000",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
    {
      title: "Failed Orders",
      Stats: "203",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
    {
      title: "Tickets",
      Stats: "2009",
      percentage: -20.89,
      information: "Total number of active orders currently in progress.",
    },
  ];

  return (
    <div className="flex w-full justify-between gap-3 2xl:gap-5">
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
  );
}
