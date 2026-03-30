"use client";

import React from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { VendorIndividualStat } from "../../types";

export function InfoCards({ stats }: { stats: VendorIndividualStat[] }) {
  return (
    <div className="flex justify-between">
      {stats.map((card, index) => (
        <StatCard key={index} title={card.title} value={card.Stats} percentage={card.percentage} information={card.information} />
      ))}
    </div>
  );
}