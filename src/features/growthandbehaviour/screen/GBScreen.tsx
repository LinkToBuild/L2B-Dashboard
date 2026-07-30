"use client";

import * as React from "react";
import Image from "next/image";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";

import { Header } from "../components/overall/GBHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import GrowthMetricsWidget from "../components/overall/GrowthMetricsWidget";
import { ColumnConfig, DynamicTable } from "@/shared/components/Table";
import mapImg from "@/public/images/mapImg.png";
import GrowthMetricsBottom from "../components/overall/GrowthFunnelsSection";
import { useGBViewModel } from "../viewModel/useGBViewModel";
import { GBSearchRow } from "../types/index";
import { GrowthFloorplanSkeleton } from "@/shared/components/skeletons";

export function GBScreen() {
  const {
    searchData,
    locationStats,
    growthChartData,
    statCards,
    rfmData,
    rentalFunnel,
    materialFunnel,
    rentalMetrics,
    materialMetrics,
    headerFilter,
    startDate,
    endDate,
    rentalSearch,
    rentalFilter,
    materialSearch,
    materialFilter,
    isLoading,
    setUrlFilter,
  } = useGBViewModel();

  const searchColumns: ColumnConfig<GBSearchRow>[] = [
    { header: "Searches", key: "searches", width: 500, align: "left" },
    { header: "Location", key: "location", width: 115, align: "center" },
    { header: "No. of user", key: "users", width: 125, align: "center" },
    { header: "No of Clicks", key: "clicks", width: 125, align: "center" },
    { header: "No Result", key: "noResult", width: 115, align: "center" },
  ];

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
      />

      {isLoading ? (
        <GrowthFloorplanSkeleton showHeader={false} />
      ) : (
        <div className="flex flex-col gap-[20px]">
          <GrowthMetricsWidget
            chartData={growthChartData}
            statCardsData={statCards}
            rfmData={rfmData}
          />

          <div className="flex items-start gap-[54px]">
            <div className="w-2.5/3 h-[294px] bg-white rounded-[16px]">
              <DynamicTable
                columns={searchColumns}
                data={searchData}
                minWidth={1000}
                maxHeight={300}
              />
            </div>

            <div className="w-[280px] h-[300px] rounded-[16px] border border-neutral-6 bg-white p-[12px] shrink-0">
              <div className="relative h-[126px] w-full overflow-hidden rounded-[8px] bg-neutral-7">
                <Image
                  src={mapImg}
                  alt="Sessions by locations"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>

              <div className="mt-[12px]">
                <div className="mb-[14px] flex items-center gap-[8px]">
                  <p className="text-[16px] font-normal text-neutral-2">
                    Sessions by locations
                  </p>
                  <InfoTip
                    label="Sessions by locations"
                    size="sm"
                    iconClassName="h-[14px] w-[14px]"
                  />
                </div>

                <div className="flex flex-col gap-[14px]">
                  {locationStats.map((item) => (
                    <div key={item.label} className="flex flex-col gap-[6px]">
                      <div className="flex items-center justify-between text-[12px] text-neutral-3">
                        <span>{item.label}</span>
                        <span>({item.value})</span>
                      </div>
                      <div className="h-[6px] w-full rounded-full bg-neutral-7">
                        <div
                          className={`h-[6px] rounded-full bg-[#88A8D6] ${item.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <GrowthMetricsBottom
            rentalFunnel={rentalFunnel}
            materialFunnel={materialFunnel}
            rentalMetrics={rentalMetrics}
            materialMetrics={materialMetrics}
            rentalSearch={rentalSearch}
            onRentalSearchChange={(val) => setUrlFilter("rentalSearch", val)}
            rentalFilter={rentalFilter}
            onRentalFilterChange={(val) => setUrlFilter("rentalFilter", val)}
            materialSearch={materialSearch}
            onMaterialSearchChange={(val) =>
              setUrlFilter("materialSearch", val)
            }
            materialFilter={materialFilter}
            onMaterialFilterChange={(val) =>
              setUrlFilter("materialFilter", val)
            }
          />
        </div>
      )}
    </SectionWrapper>
  );
}
