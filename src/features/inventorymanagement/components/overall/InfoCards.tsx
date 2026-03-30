"use client";

import React from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";

// 1. Define the shape of the data we expect from the API
export interface InfoCardData {
  title: string;
  Stats: string;
  percentage: number;
  information: string;
}

interface InfoCardsProps {
  data: InfoCardData[];
}

// 2. Accept the 'data' prop
export function InfoCards({ data }: InfoCardsProps) {
  return (
    <div className="flex ">
      <div className="flex justify-between w-full ">
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