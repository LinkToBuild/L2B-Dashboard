"use client";

import React, { useState, useEffect } from "react";
import { IndicatorChart } from "@/shared/excomponent/charts/IndicatorChart";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

interface RateIndicatorProps {
  width?: number | string;
  height?:number | string;
}

export function RateIndicator({ width = "100%" , height = '100%' }: RateIndicatorProps) {
  const [score, setScore] = useState(75);

  useEffect(() => {
    // Set up an interval to fire every 2000 milliseconds (2 seconds)
    const interval = setInterval(() => {
      setScore((prevScore) => {
        // Simulate a realistic fluctuation: move by -10 to +10 points
        const fluctuation = Math.floor(Math.random() * 21) - 10;
        let newScore = prevScore + fluctuation;

        // Safety check: Keep the needle from breaking past 0 or 100!
        if (newScore > 100) newScore = 100;
        if (newScore < 0) newScore = 0;

        return newScore;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div style={{ width , height }} className="border border-neutral-5 h-[216px] rounded-[12px] p-[12px] flex flex-col overflow-hidden">
        <div className="flex w-full justify-between shrink-0">
          <p className="text-[16px] font-normal">Fulfillment Rate</p>
          <p className="text-success-2 text-[12px] font-normal">+20.89%</p>
          <InfoTip label="Fulfillment Rate" />
        </div>
        <div className="min-h-0 flex-1">
          <IndicatorChart value={score} width="100%" height="100%" />
        </div>
      </div>
    </>
  );
}
