"use client";

import React, { useState } from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { Stats } from "fs";

export function InfoCards() {
    const infoCardsData = [
        {
          title: "Active Orders", 
          Stats: "10,90,00",
          percentage: -20.89,
          information: "Total number of active orders currently in progress."
        },
        {
          title: "Completed ", 
          Stats: "9,000",
          percentage: -20.89,
          information: "Total number of active orders currently in progress."
        },
         {
          title: "Failed Orders", 
          Stats: "203",
          percentage: -20.89,
          information: "Total number of active orders currently in progress."
        },
         {
          title: "Tickets", 
          Stats: "2009",
          percentage: -20.89,
          information: "Total number of active orders currently in progress."
        },
    ]

  return (
    <>
      <div className="flex ">
        <div className="    flex xl:gap-[10px] 2xl:gap-[20px] ">
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
      </div>
    </>
  );
}
