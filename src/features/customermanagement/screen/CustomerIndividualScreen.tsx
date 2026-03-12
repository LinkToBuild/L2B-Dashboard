import React from "react";
import { ProfileHeader } from "../../../shared/components/ProfileHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { OverviewSection } from "../components/individual/OverviewSection";

export default function CustomerIndividualScreen() {
  return (
    <SectionWrapper className="md:w-[90%] xl:w-[91%] 2xl:w-[93%]">
      <ProfileHeader
        name="Ramesh Jay"
        avatarUrl="/avatars/ramesh.png"
        joinDate="12/09/2025"
        profileProgress={100} // Shows the green Verified checkmark badge
        statusTitle="Active"
        statusColor="success" // Will use your green StatusBadge variant
        walletBalance="₹ 10,00,000"
        canEdit={true} // Turns the Edit button green and clickable
        fields={[
          { label: "Costumer Id", value: "0909091029", isCopyable: true },
          { label: "Mobile no.", value: "9090909090" },
          { label: "Email Id", value: "ramesh090@gmail.com" },
          { label: "User Type", value: "Admin" },
          { label: "Company Name", value: "Menthan Pvt.ltd" },
        ]}
      />
      <OverviewSection></OverviewSection>
    </SectionWrapper>
  );
}
