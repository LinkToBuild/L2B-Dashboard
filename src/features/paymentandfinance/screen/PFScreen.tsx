"use client";

import * as React from "react";
import { Header } from "../components/overall/PFHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { LegendData } from "@/shared/components/Legend";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import PaymentMetricsWidget from "../components/overall/PaymentMetricsWidget";
import { usePFViewModel } from "../viewModel/usePFViewModel";
import { mockPaymentModeConfig } from "../api/mockData";
import { AnalyticsFloorplanSkeleton } from "@/shared/components/skeletons";

export function PFScreen() {
  const {
    financeCards,
    metricsCards,
    paymentModeData,
    rentalOrders,
    materialOrders,
    headerFilter,
    startDate,
    endDate,
    globalTab,
    categoryTab,
    isLoading,
    setUrlFilter,
  } = usePFViewModel();

  return (
    <SectionWrapper className="flex flex-col gap-6">
      <Header
        currentFilter={headerFilter}
        onFilterChange={(val) => setUrlFilter("headerFilter", val)}
        startDate={startDate}
        onStartDateChange={(date) =>
          setUrlFilter("startDate", date ? date.toISOString() : null)
        }
        endDate={endDate}
        onEndDateChange={(date) =>
          setUrlFilter("endDate", date ? date.toISOString() : null)
        }
        globalTab={globalTab}
        onGlobalTabChange={(val) => setUrlFilter("globalTab", val)}
      />

      {isLoading ? (
        <AnalyticsFloorplanSkeleton showHeader={false} variant="payment" />
      ) : (
        <div className="">
          <div className="flex w-full xl:gap-[60px] 2xl:gap-[83px] justify-between ">
            <div className="w-[700px] h-[356px] 2xl:w-[730px] flex flex-col gap-[10px]">
              <div className="w-full h-full flex items-center gap-[10px] justify-evenly border border-neutral-5 p-[20px] rounded-[12px]">
                <div className="">
                  <ChartPieDonut
                    data={paymentModeData}
                    config={mockPaymentModeConfig}
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
                    {financeCards.map((card, index) => (
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

            <div className="w-full xl:w-[470px] 2xl:w-[530px] shrink-0 overflow-hidden p-2 ">
              <div className="flex flex-wrap justify-between w-full -mb-[4%]">
                {metricsCards.map((card, index) => (
                  <div key={index} className=" mb-[4%] flex ">
                    <StatCard
                      title={card.title}
                      value={card.Stats}
                      percentage={card.percentage}
                      information={card.information}
                      className="xl:w-[224px] xl:h-[98px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PaymentMetricsWidget
            activeTab={categoryTab}
            onTabChange={(val) => setUrlFilter("categoryTab", val)}
            rentalData={rentalOrders}
            materialData={materialOrders}
          />
        </div>
      )}
    </SectionWrapper>
  );
}
