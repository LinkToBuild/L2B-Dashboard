"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function InfoCards() {
let infoCardsData = [
  {
    title: "Active Orders",
    Stats: "10,90,00",
    percentage: -20.89,
    information: "Total number of active orders currently in progress.",
  },
  {
    title: "Completed",
    Stats: "90,00",
    percentage: -20.89,
    information: "Orders successfully delivered and closed.",
  },
  {
    title: "Failed Orders",
    Stats: "203",
    percentage: -20.89,
    information: "Orders that were canceled or failed.",
  },
  {
    title: "Ticket",
    Stats: "2009",
    percentage: -20.89,
    information: "Total support tickets raised.",
  },
  {
    title: "Fulfillment Rate",
    Stats: "55%",
    percentage: -20.89,
    information: "Percentage of orders successfully fulfilled.",
  },
  {
    title: "Ontime Delivery",
    Stats: "90%",
    percentage: -20.89,
    information: "Percentage of orders delivered on the scheduled date.",
  },
  {
    title: "Match Rate",
    Stats: "20%",
    percentage: -20.89,
    information: "Percentage of successful equipment matches.",
  },
  {
    title: "Commission",
    Stats: "₹20,09,000",
    percentage: -20.89,
    information: "Total commission earned from completed orders.",
  },
];

  return (
    <>
      <div className="flex ">
        <div className="flex justify-between w-full ">
          {infoCardsData.slice(0,4).map((card, index) => (
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
