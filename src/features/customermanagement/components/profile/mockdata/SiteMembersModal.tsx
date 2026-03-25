// "use client";

// import * as React from "react";
// import { ColumnConfig, DynamicTable } from "@/shared/components/Table";
// import { ActionTablePanel } from "@/shared/components/ActionTablePanel";
// import ConfirmationModal from "@/shared/components/ConfirmationModal";

// type SiteMemberRow = {
//   id: string;
//   name: string;
//   employeeId: string;
//   mobileNo: string;
//   role: string;
//   action: "Remove" | "Add";
// };

// interface SiteMembersModalProps {
//   open: boolean;
//   onClose: () => void;
//   title?: string;
// }

// export function SiteMembersModal({
//   open,
//   onClose,
//   title = "Site A (20 members)",
// }: SiteMembersModalProps) {
//   const [isRemoveModalOpen, setIsRemoveModalOpen] = React.useState(false);
//   const [selectedMember, setSelectedMember] = React.useState<SiteMemberRow | null>(null);

//   const siteMembersData: SiteMemberRow[] = [
//     {
//       id: "1",
//       name: "Adesh reddy",
//       employeeId: "#DSV2144443",
//       mobileNo: "+91 9828446626",
//       role: "Site manager",
//       action: "Remove",
//     },
//     {
//       id: "2",
//       name: "Suresh Reddy",
//       employeeId: "#DSV2144443",
//       mobileNo: "+91 9828446626",
//       role: "Site supervisor",
//       action: "Remove",
//     },
//     {
//       id: "3",
//       name: "Suresh Reddy",
//       employeeId: "#DSV2144443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Remove",
//     },
//     {
//       id: "4",
//       name: "Suresh Reddy",
//       employeeId: "#DSV2144443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Add",
//     },
//     {
//       id: "5",
//       name: "Suresh Reddy",
//       employeeId: "#DSV2144443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Add",
//     },
//   ];

//   const handleActionClick = (row: SiteMemberRow) => {
//     if (row.action === "Remove") {
//       setSelectedMember(row);
//       setIsRemoveModalOpen(true);
//       return;
//     }

//     if (row.action === "Add") {
//       console.log("Add clicked", row);
//     }
//   };

//   const handleCloseRemoveModal = () => {
//     setIsRemoveModalOpen(false);
//     setSelectedMember(null);
//   };

//   const handleConfirmRemove = () => {
//     console.log("Remove confirmed", selectedMember);
//     setIsRemoveModalOpen(false);
//     setSelectedMember(null);
//   };

//   const siteMembersColumns: ColumnConfig<SiteMemberRow>[] = [
//     {
//       header: "Name",
//       key: "name",
//       render: (_value: string, row: SiteMemberRow) => {
//         const isHighlighted = row.action === "Remove";

//         return (
//           <div className="flex flex-col leading-[18px]">
//             <span
//               className={`text-[14px] font-medium ${
//                 isHighlighted ? "text-[#F5A623]" : "text-neutral-500"
//               }`}
//             >
//               {row.name}
//             </span>
//             <span
//               className={`text-[14px] font-semibold ${
//                 isHighlighted ? "text-[#F5A623]" : "text-neutral-400"
//               }`}
//             >
//               {row.employeeId}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       header: "Mobile no",
//       key: "mobileNo",
//       align: "center",
//       render: (value: string) => (
//         <span className="text-[14px] font-medium text-neutral-400">{value}</span>
//       ),
//     },
//     {
//       header: "Role",
//       key: "role",
//       align: "center",
//       render: (value: string) => (
//         <span className="text-[14px] font-medium text-neutral-400">{value}</span>
//       ),
//     },
//     {
//       header: "Action",
//       key: "action",
//       align: "center",
//       render: (value: string, row: SiteMemberRow) => {
//         const isRemove = value === "Remove";

//         return (
//           <button
//             type="button"
//             onClick={() => handleActionClick(row)}
//             className={`min-w-[88px] rounded-[10px] px-4 py-[6px] text-[13px] font-medium ${
//               isRemove
//                 ? "border border-[#FFD9D9] text-[#FF6B6B] bg-white"
//                 : "border border-[#D8F3E5] text-[#56C293] bg-white"
//             }`}
//           >
//             {value}
//           </button>
//         );
//       },
//     },
//   ];

//   return (
//     <>
//       <ActionTablePanel
//         open={open}
//         onClose={onClose}
//         title={title}
//         showTitle={true}
//         showInfoIcon={true}
//         showCloseIcon={true}
//         width="w-[564px]"
//         maxHeight="max-h-[383px]"
//         showTable={true}
//         table={
//           <DynamicTable
//             columns={siteMembersColumns}
//             data={siteMembersData}
//             maxHeight={294}
//             minWidth={532}
//           />
//         }
//         showButtons={false}
//       />

//       <ConfirmationModal
//         open={isRemoveModalOpen}
//         type="removeTeamMember"
//         onConfirm={handleConfirmRemove}
//         onCancel={handleCloseRemoveModal}
//       />
//     </>
//   );
// }

export const siteMembersMockData = {
  title: "Site A (20 members)",
  rows: [
    {
      id: "1",
      name: "Adesh reddy",
      employeeId: "#DSV2144443",
      mobileNo: "+91 9828446626",
      role: "Site manager",
      action: "Remove",
    },
    {
      id: "2",
      name: "Suresh Reddy",
      employeeId: "#DSV2144443",
      mobileNo: "+91 9828446626",
      role: "Site supervisor",
      action: "Remove",
    },
    {
      id: "3",
      name: "Suresh Reddy",
      employeeId: "#DSV2144443",
      mobileNo: "+91 9828446626",
      role: "Worker",
      action: "Add",
    },
  ],
};