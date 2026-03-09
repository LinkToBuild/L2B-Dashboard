"use client";

import * as React from "react";
import { Header } from "../components/overall/MPHeader";
import { InfoCards } from "../components/overall/InfoCards";
import SectionWrapper from "@/shared/components/SectionWrapper";
import {GraphSection} from "../components/overall/MarketingMetricsSection";

export function MPScreen() {
  return (
    <>
      <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]  ">
        <Header></Header>
        <SectionWrapper className="">
          <InfoCards></InfoCards>
          <GraphSection></GraphSection>
        </SectionWrapper>
      </div>
    </>
  );
}
