"use client";

import React from "react";
import { StatCard } from "@/shared/excomponent/ui/StatCard";

export interface InfoCardData {
  title: string;
  Stats: string | number; 
  percentage?: number | null;
  information: string;
}

export interface InfoCardsProps {
  data: InfoCardData[];
  width?: string | number;
  height?: string | number;
  gap?: string;       // 👈 New gap prop
  className?: string; // 👈 Custom class names
}

export function InfoCards({ 
  data, 
  width, 
  height,
  gap = "xl:gap-[10px] 2xl:gap-[40px]", // Keeps your original design by default
  className = "" 
}: InfoCardsProps) {
  
  return (
    <div 
      // 👈 Injects the gap and any custom classes you pass in
      className={`flex flex-col place-items-center ${gap} ${className}`}
      style={{ width, height }}
    >
      {data.map((card, index) => (
        <StatCard
          key={index}
          title={card.title}
          value={card.Stats}
          percentage={card.percentage}
          information={card.information}
          className=""
        />
      ))}
    </div>
  );
}