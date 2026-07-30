"use client";

import React, { useEffect, useState } from "react";
import { ProfileHeader } from "@/shared/components/ProfileHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import MetricSection from "../components/individual/MetricSection";
import TableDataSection from "../components/individual/TableDataSection";
import {
  CustomerDetailFloorplanSkeleton,
  ProfileHeaderSkeleton,
} from "@/shared/components/skeletons";

export default function CustomerIndividualScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper className="flex flex-col gap-[30px]">
      {isLoading ? (
        <>
          <ProfileHeaderSkeleton />
          <CustomerDetailFloorplanSkeleton />
        </>
      ) : (
        <>
          <ProfileHeader
            name="Ramesh Jay"
            avatarUrl="/images/customer1.avif"
            joinDate="12/09/2025"
            profileProgress={100}
            statusTitle="Active"
            statusColor="success"
            walletBalance="₹ 10,00,000"
            canEdit={true}
            fields={[
              { label: "Costumer Id", value: "0909091029", isCopyable: true },
              { label: "Mobile no.", value: "9090909090" },
              { label: "Email Id", value: "ramesh090@gmail.com" },
              { label: "User Type", value: "Admin" },
              { label: "Company Name", value: "Menthan Pvt.ltd" },
            ]}
          />
          <MetricSection />
          <TableDataSection />
        </>
      )}
    </SectionWrapper>
  );
}
