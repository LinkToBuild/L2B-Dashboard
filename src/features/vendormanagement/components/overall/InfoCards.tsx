"use client";

import React from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { InfoCardStat } from "@/features/vendormanagement/types/index" // Adjust path if needed

// We define the props this component expects to receive
interface InfoCardsProps {
  data: InfoCardStat[];
}

export function InfoCards({ data }: InfoCardsProps) {
  return (
    <div className="flex">
      <div className="flex justify-between w-full">
        {/* We map directly over the data prop without slicing here! */}
        {data.map((card, index) => (
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
  );
}