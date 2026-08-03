"use client";

import * as React from "react";
import { Header } from "../components/overall/MPHeader";
import { InfoCards } from "../components/overall/InfoCards";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { GraphSection } from "../components/overall/MarketingMetricsSection";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig } from "@/shared/components/Table";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { useMPViewModel } from "../viewModel/useMPViewModel";
import { CampaignReportItem } from "../types";
import { AnalyticsFloorplanSkeleton } from "@/shared/components/skeletons";
import { L2BButton } from "@/design-system/components/L2BButton";

export function MPScreen() {
  const {
    campaignReport,
    infoCards,
    campaignPerformance,
    channelDistribution,
    leadScore,
    searchQuery,
    tableFilter,
    headerFilter,
    startDate,
    endDate,
    isLoading,
    setUrlFilter,
  } = useMPViewModel();

  const columns: ColumnConfig<CampaignReportItem>[] = [
    { header: "Name", key: "name", width: 120, align: "center" },
    {
      header: "Status", key: "status", width: 140, align: "center",
      render: (value: string) => {
        const statusMap: Record<string, any> = { Active: "successLight", Schedule: "infoLight", Completed: "successLight" };
        return <StatusBadge status={statusMap[value] || "neutral"} label={value} />;
      },
    },
    { header: "Channel", key: "channel", width: 100, align: "center" },
    { header: "Goal", key: "goal", width: 140, align: "center" },
    { header: "Target size", key: "targetSize", width: 120, align: "center" },
    { header: "Actual size", key: "actualSize", width: 120, align: "center" },
    { header: "Impression", key: "impression", width: 120, align: "center" },
    { header: "Click", key: "click", width: 100, align: "center" },
    { header: "Engagement", key: "engagement", width: 120, align: "center" },
    { header: "Conversion", key: "conversion", width: 120, align: "center" },
    { header: "CPC", key: "cpc", width: 100, align: "center" },
    { header: "CPA", key: "cpa", width: 100, align: "center" },
    { header: "Revenue", key: "revenue", width: 120, align: "center" },
    {
      header: "Manage", key: "manage", width: 120, align: "center",
      render: () => <L2BButton type="button" variant="bgNone" size="auto" className="text-success-1 underline underline-offset-2 hover:text-success-2 transition-colors font-medium">View Full</L2BButton>,
    },
  ];

  return (
    <SectionWrapper className="flex flex-col gap-6">
      <Header 
        currentFilter={headerFilter}
        onFilterChange={(val) => setUrlFilter("headerFilter", val)}
        startDate={startDate}
        onStartDateChange={(date) => setUrlFilter("startDate", date ? date.toISOString() : null)}
        endDate={endDate}
        onEndDateChange={(date) => setUrlFilter("endDate", date ? date.toISOString() : null)}
      />
      {isLoading ? (
        <AnalyticsFloorplanSkeleton showHeader={false} variant="marketing" />
      ) : (
        <div className="flex flex-col gap-[37px]">
          <InfoCards data={infoCards} />
          <GraphSection
            campaignData={campaignPerformance}
            channelData={channelDistribution}
            leadScoreData={leadScore}
          />
          <DataTableWidget
            title="Campaign Report"
            columns={columns}
            data={campaignReport}
            searchQuery={searchQuery}
            onSearchChange={(val) => setUrlFilter("search", val)}
            currentFilter={tableFilter}
            onFilterChange={(val) =>
              setUrlFilter("tableFilter", val === "All" ? null : val)
            }
            filterOptions={["All", "Completed", "Schedule", "Active", "Pause"]}
          />
        </div>
      )}
    </SectionWrapper>
  );
}