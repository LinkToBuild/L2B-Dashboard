"use client";

import React, { useState } from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { MPInfoCardData } from "@/features/marketingandpromotion/types/index";

export function InfoCards({ data }: { data: MPInfoCardData[] }) {


  return (
    <>
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
    </>
  );
}
