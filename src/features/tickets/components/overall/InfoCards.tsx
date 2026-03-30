"use client";

import React from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { InfoCardData } from "../../types";

export function InfoCards({ data }: { data: InfoCardData[] }) {
  return (
    <div className="place-items-center flex flex-col xl:gap-[10px] 2xl:gap-[40px]">
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
  );
}