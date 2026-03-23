"use client";

import * as React from "react";
import { Header } from "../components/overall/PFHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { LegendData } from "@/shared/components/Legend";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import PaymentMetricsWidget from "../components/overall/PaymentMetricsWidget";
import { type ChartConfig } from "@/components/ui/chart";

export function PFScreen() {
  const [activeTab, setActiveTab] = React.useState<"rental" | "material">(
    "rental"
  );

  const financeCardsData = [
    {
      title: "Net Revenue",
      Stats: "₹ 8,90,000",
      percentage: -20.89,
      information: "Net revenue after deductions.",
    },
    {
      title: "Commission",
      Stats: "₹ 1,90,000",
      percentage: -20.89,
      information: "Commission earned from transactions.",
    },
  ];

  const metricsCardsData = [
    {
      title: "Orders",
      Stats: "3444",
      percentage: -20.89,
      information: "Total number of orders.",
    },
    {
      title: "AOV",
      Stats: "₹3,444",
      percentage: -20.89,
      information: "Average order value.",
    },
    {
      title: "Total Referral",
      Stats: "144",
      percentage: -20.89,
      information: "Total referral count.",
    },
    {
      title: "Sale thru Referral",
      Stats: "₹1,044",
      percentage: -20.89,
      information: "Revenue through referrals.",
    },
    {
      title: "Total Cancelation",
      Stats: "1,044",
      percentage: -20.89,
      information: "Total canceled orders.",
    },
    {
      title: "Chargebacks/Penalties",
      Stats: "₹3,444",
      percentage: -20.89,
      information: "Chargebacks and penalties.",
    },
  ];

  const paymentModeData = [
    { paymentMode: "UPI", count: 28, fill: "#38678C" },
    { paymentMode: "Paylater", count: 20, fill: "#CBDEEC" },
    { paymentMode: "COD", count: 30, fill: "#8DAFD1" },
    { paymentMode: "Net Banking", count: 22, fill: "#4889BC" },
  ];

  const paymentModeConfig = {
    upi: {
      label: "UPI",
      color: "#36678C",
    },
    cod: {
      label: "COD",
      color: "#8DAFD1",
    },
    netBanking: {
      label: "Net Banking",
      color: "#4889BC",
    },
    paylater: {
      label: "Paylater",
      color: "#CBDEEC",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]">
      <Header />

      <SectionWrapper className="">
        <div className="flex w-full gap-[83px]">
          <div className="w-[700px] h-[356px] 2xl:w-[730px] flex flex-col gap-[10px]">
            <div className="w-full h-full flex items-center justify-evenly border border-neutral-5 p-[20px] rounded-[12px]">
              <div className="">
                <ChartPieDonut
                  data={paymentModeData}
                  config={paymentModeConfig}
                  dataKey="count"
                  nameKey="paymentMode"
                  centerLabel="Gross Revenue"
                  centerValue="₹13,44,000"
                  width={320}
                  height={320}
                />
              </div>

              <div className="xl:w-[40%] 2xl:w-[245px] h-[299px] flex flex-col gap-[27px]">
                <div className="w-full flex flex-col gap-[27px]">
                  {financeCardsData.map((card, index) => (
                    <StatCard
                      key={index}
                      title={card.title}
                      value={card.Stats}
                      percentage={card.percentage}
                      information={card.information}
                    />
                  ))}
                </div>

                <div className="h-[48px] grid grid-cols-2">
                  <LegendData color="#36678C" label="UPI" percentage={28} />
                  <LegendData color="#8DAFD1" label="COD" percentage={30} />
                  <LegendData
                    color="#4889BC"
                    label="Net Banking"
                    percentage={22}
                  />
                  <LegendData
                    color="#CBDEEC"
                    label="Paylater"
                    percentage={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[400px] shrink-0">
            <div className="grid grid-cols-2 gap-x-[120px] gap-y-[20px]">
              {metricsCardsData.map((card, index) => (
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
        </div>

        <PaymentMetricsWidget />
      </SectionWrapper>
    </div>
  );
}