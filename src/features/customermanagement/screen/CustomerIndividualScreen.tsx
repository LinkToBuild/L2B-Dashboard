import React from "react";
import { ProfileHeader } from "../../../shared/components/ProfileHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { OverviewSection } from "../components/individual/OverviewSection";
import MetricSection from "../components/individual/MetricSection";
import TableDataSection from "../components/individual/TableDataSection";
import profileimage from "@/public/images/customer1.avif"


export default function CustomerIndividualScreen() {
  return (
    <SectionWrapper className="md:w-[90%] xl:w-[91%] 2xl:w-[93%] flex flex-col gap-[30px]">
      <ProfileHeader
        name="Ramesh Jay"
        avatarUrl="/images/customer1.avif"
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
      <MetricSection></MetricSection>
      <TableDataSection></TableDataSection>
     
    </SectionWrapper>
  );
}



//=================================For confirmation page=============================


// "use client";

// import React from "react";
// import { ProfileHeader } from "../../../shared/components/ProfileHeader";
// import SectionWrapper from "@/shared/components/SectionWrapper";
// import MetricSection from "../components/individual/MetricSection";
// import TableDataSection from "../components/individual/TableDataSection";

// import ConfirmationModal from "@/shared/components/ConfirmationModal";

// export default function CustomerIndividualScreen() {
//   const [isEditOpen, setIsEditOpen] = React.useState(false);

//   return (
//     <>
//       <SectionWrapper className="md:w-[90%] xl:w-[91%] 2xl:w-[93%] flex flex-col gap-[30px]">
//         <ProfileHeader
//           name="Ramesh Jay"
//           avatarUrl="/images/customer1.avif"
//           joinDate="12/09/2025"
//           profileProgress={100}
//           statusTitle="Active"
//           statusColor="success"
//           walletBalance="₹ 10,00,000"
//           canEdit={true}
//           onEditClick={() => setIsEditOpen(true)}
//           fields={[
//             { label: "Costumer Id", value: "0909091029", isCopyable: true },
//             { label: "Mobile no.", value: "9090909090" },
//             { label: "Email Id", value: "ramesh090@gmail.com" },
//             { label: "User Type", value: "Admin" },
//             { label: "Company Name", value: "Menthan Pvt.ltd" },
//           ]}
//         />

//         <MetricSection />
//         <TableDataSection />
//       </SectionWrapper>

//       <ConfirmationModal
//   open={isEditOpen}
//   type="disableMachine"
//   onConfirm={() => setIsEditOpen(false)}
//   onCancel={() => setIsEditOpen(false)}
// />
//     </>
//   );
// }