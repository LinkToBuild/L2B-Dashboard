import React from "react";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { InfoCards } from "../overall/InfoCards";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { ChartConfig } from "@/components/ui/chart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { LegendData } from "@/shared/components/Legend";
import { PaymentData, InfoCardData, CustomerMetric } from "../../types";
import { SideBoard } from "@/shared/components/SideBoard";
import {
  HighDemandAreaMap,
  type DemandMapViewModel,
} from "./HighDemandAreaMap";

interface DataMatrixSectionProps {
  paymentData: PaymentData[];
  infoCardsData: InfoCardData[];
  customerData: CustomerMetric[];
  demandMap: DemandMapViewModel;
}

export default function DataMatrixSection({
  paymentData,
  infoCardsData,
  customerData,
  demandMap,
}: DataMatrixSectionProps) {
  const paymentConfig = {
    percentage: { label: "Percentage" },
    upi: { label: "UPI", color: "#356583" },
    cod: { label: "COD", color: "#86A8C3" },
    netbanking: { label: "Net Banking", color: "#3F82B7" },
    paylater: { label: "Paylater", color: "#CDE0ED" },
  } satisfies ChartConfig;

  return (
    <div className="flex w-full items-start justify-between gap-[34px]">
      {/* Left: KPIs + Earning + High Demand — fills remaining width */}
      <div className="flex min-w-0 flex-1 flex-col gap-[30px]">
        <InfoCards />

        <div className="flex w-full items-stretch gap-[10px] 2xl:gap-[33px]">
          {/* Earning grows to fill leftover space */}
          <div className="flex min-w-0 flex-1 flex-col gap-[10px]">
            <div className="flex items-center gap-2">
              <p className="text-[24px] font-normal text-neutral-1">Earning</p>
              <InfoTip label="Payment mix and sales summary for the selected period." />
            </div>
            <div className="flex min-h-[360px] w-full flex-1 items-center gap-4 rounded-[12px] border border-neutral-5  px-4 2xl:gap-6 2xl:px-5">
              <div className="flex min-w-0 flex-1 items-center justify-center">
                <ChartPieDonut
                  data={paymentData}
                  config={paymentConfig}
                  dataKey="percentage"
                  nameKey="method"
                  centerLabel="Total Sale"
                  centerValue="₹13,44,000"
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex w-[224px] shrink-0 flex-col items-center justify-center gap-6">
                <div className="flex flex-col gap-5">
                  {infoCardsData?.map((card, index) => (
                    <StatCard
                      key={index}
                      title={card.title}
                      value={card.Stats}
                      percentage={card.percentage}
                      information={card.information}
                      className="h-[98px] w-[224px] max-w-[224px] shrink-0 lg:h-[98px] lg:w-[224px] 2xl:h-[98px] 2xl:w-[224px]"
                    />
                  ))}
                </div>
                <div className="grid w-[224px] grid-cols-2 gap-x-6 gap-y-3 content-start">
                  <LegendData color="#356583" label="UPI" percentage={28} />
                  <LegendData color="#86A8C3" label="COD" percentage={30} />
                  <LegendData
                    color="#3F82B7"
                    label="Net Banking"
                    percentage={22}
                  />
                  <LegendData
                    color="#CDE0ED"
                    label="Paylater"
                    percentage={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <HighDemandAreaMap demandMap={demandMap} />
        </div>
      </div>

      {/* All Customers — pinned to the right edge */}
      <div className="shrink-0">
        <SideBoard
          title="All Customers"
          overallPercentage={-20.89}
          overallTrend="down"
          data={customerData}
        />
      </div>
    </div>
  );
}
