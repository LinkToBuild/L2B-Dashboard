"use client";

import React, { useMemo } from "react";
import { ProfileHeader } from "@/shared/components/ProfileHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import MetrixSection from "../components/individual/MetrixSection";
import { DataTableWidget } from "@/shared/components/DataTableWidget";
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { ColumnConfig } from "@/shared/components/Table";
import { useVendorViewModel } from "../viewModel/useVendorViewModel";

export default function VendorIndividualScreen({ 
  vendorId 
}: { 
  vendorId?: string 
}) {
  const { 
    individualStats, paymentData, performanceData, detailedBookings,
    indStartDate, indEndDate, indFilter, indSearch, setUrlFilter 
  } = useVendorViewModel();

  const filteredBookings = useMemo(() => {
    if (!indSearch) return detailedBookings;
    const lowerQuery = indSearch.toLowerCase();
    return detailedBookings.filter(b => b.name.toLowerCase().includes(lowerQuery) || b.status.toLowerCase().includes(lowerQuery));
  }, [detailedBookings, indSearch]);

  const columns: ColumnConfig<any>[] = [
    { header: "Name", key: "name", width: 120, align: "center" },
    { header: "Status", key: "status", width: 140, align: "center", render: (val: string) => {
        const map: any = { Active: "successLight", Schedule: "infoLight", Completed: "successLight" };
        return <StatusBadge status={map[val] || "neutral"} label={val} />;
      }
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
    { header: "Manage", key: "manage", width: 120, align: "center", render: () => (
        <button className="text-[#00A85A] underline underline-offset-2 hover:text-green-700 transition-colors font-medium">View Full</button>
      )
    },
  ];

  return (
    <SectionWrapper className="md:w-[90%] xl:w-[91%] 2xl:w-[93%] flex flex-col gap-[30px] max-w-[1440px]  ">
      <ProfileHeader
        name="Ramesh Jay" avatarUrl="/images/customer1.avif" joinDate="12/09/2025" profileProgress={100} statusTitle="Active" statusColor="success" canEdit={true}
        fields={[
          { label: "Vendor Id", value: "ADC12233214", isCopyable: true }, { label: "Vendor Type", value: "Rental Admin" },
          { label: "Mobile no.", value: "9090909090" }, { label: "Email Id", value: "ramesh090@gmail.com" }, { label: "No. of Machines", value: "109" },
        ]}
      />
      <MetrixSection 
        stats={individualStats} paymentData={paymentData} performanceData={performanceData}
        startDate={indStartDate} onStartDateChange={(d: Date) => setUrlFilter("indStartDate", d ? d.toISOString() : null)}
        endDate={indEndDate} onEndDateChange={(d: Date) => setUrlFilter("indEndDate", d ? d.toISOString() : null)}
        currentFilter={indFilter} onFilterChange={(v: string) => setUrlFilter("indFilter", v)}
      />
      <DataTableWidget 
        title="Detailed Bookings" columns={columns} data={filteredBookings} 
        searchQuery={indSearch} onSearchChange={(v: string) => setUrlFilter("indSearch", v)}
      />
    </SectionWrapper>
  );
}