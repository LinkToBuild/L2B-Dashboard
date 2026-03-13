"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function InfoCards() {
let infoCardsData = [
    {
      title: "Resolved", 
      Stats: "144",
      percentage: -20.89,
      information: "Total number of resolved tickets." // Updated context
    },
    {
      title: "Unassigned", 
      Stats: "14",
      percentage: null, // Set to null since the image doesn't show a percentage here
      information: "Total number of unassigned tickets."
    },
     {
      title: "Assigned", 
      Stats: "70",
      percentage: null, // Set to null since the image doesn't show a percentage here
      information: "Total number of assigned tickets."
    },
     {
      title: "Escalated", 
      Stats: "30",
      percentage: -20.89,
      information: "Total number of escalated tickets."
    },
  ];

  return (
    <>
        <div className=" place-items-center    flex flex-col xl:gap-[10px] 2xl:gap-[40px] ">
            {
                infoCardsData.map((card, index) => (
                    <StatCard 
                        key={index}     
                        title={card.title}
                        value={card.Stats}
                        percentage={card.percentage}
                        information={card.information}
                    />  
                ))
            }
        
        </div>
    </>
  );
}
