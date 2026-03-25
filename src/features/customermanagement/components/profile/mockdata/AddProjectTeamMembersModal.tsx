// "use client";

// import * as React from "react";
// import { ChevronDown, ChevronsLeft } from "lucide-react";
// import { ActionTablePanel } from "@/shared/components/ActionTablePanel";
// import { DynamicTable, ColumnConfig } from "@/shared/components/Table";
// import { Button } from "@/shared/excomponent/ui/UIButton";
// import { CustomInput } from "@/shared/excomponent/ui/TextField";
// import {
//   L2BDropdownMenu,
//   DropdownItem,
// } from "@/shared/excomponent/ui/L2BDropdownMenu";

// export type AddProjectFormData = {
//   siteLocation: string;
//   plotOrHouseNo: string;
//   areaLocalityStreetName: string;
//   pinCode: string;
// };

// type TeamMemberRow = {
//   id: string;
//   name: string;
//   employeeId: string;
//   mobileNo: string;
//   role: string;
//   action: "Added" | "Select";
// };

// interface AddProjectTeamMembersModalProps {
//   open: boolean;
//   onClose: () => void;
//   onBack?: () => void;
//   projectDetails: AddProjectFormData | null;
//   onAddProject?: (payload: {
//     projectDetails: AddProjectFormData | null;
//     selectedMembers: TeamMemberRow[];
//   }) => void;
// }

// const ROLE_OPTIONS = [
//   "Site supervisor",
//   "Site manager",
//   "Worker",
// ];

// export function AddProjectTeamMembersModal({
//   open,
//   onClose,
//   onBack,
//   projectDetails,
//   onAddProject,
// }: AddProjectTeamMembersModalProps) {
//   const [teamMembers, setTeamMembers] = React.useState<TeamMemberRow[]>([
//     {
//       id: "1",
//       name: "Adesh reddy",
//       employeeId: "#DSV21444443",
//       mobileNo: "+91 9828446626",
//       role: "Site supervisor",
//       action: "Added",
//     },
//     {
//       id: "2",
//       name: "Suresh Reddy",
//       employeeId: "#DSV21444443",
//       mobileNo: "+91 9828446626",
//       role: "Site manager",
//       action: "Added",
//     },
//     {
//       id: "3",
//       name: "Suresh Reddy",
//       employeeId: "#DSV21444443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Added",
//     },
//     {
//       id: "4",
//       name: "Suresh Reddy",
//       employeeId: "#DSV21444443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Added",
//     },
//     {
//       id: "5",
//       name: "Suresh Reddy",
//       employeeId: "#DSV21444443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Added",
//     },
//     {
//       id: "6",
//       name: "Suresh Reddy",
//       employeeId: "#DSV21444443",
//       mobileNo: "+91 9828446626",
//       role: "Worker",
//       action: "Select",
//     },
//   ]);

//   const selectedMembers = teamMembers.filter((item) => item.action === "Added");

//   const projectName = projectDetails?.siteLocation?.trim() || "New bel road...";
//   const selectedTeamText = "Adesh reddy, Suresh Red...";

//   const handleRoleChange = (id: string, role: string) => {
//     setTeamMembers((prev) =>
//       prev.map((member) => (member.id === id ? { ...member, role } : member))
//     );
//   };

//   const handleActionToggle = (id: string) => {
//     setTeamMembers((prev) =>
//       prev.map((member) =>
//         member.id === id
//           ? {
//               ...member,
//               action: member.action === "Added" ? "Select" : "Added",
//             }
//           : member
//       )
//     );
//   };

//   const handleAddProject = () => {
//     onAddProject?.({
//       projectDetails,
//       selectedMembers,
//     });
//     onClose();
//   };

//   const getRoleItems = (row: TeamMemberRow): DropdownItem[] =>
//     ROLE_OPTIONS.map((role) => ({
//       label: role,
//       onClick: () => handleRoleChange(row.id, role),
//     }));

//   const teamMemberColumns: ColumnConfig<TeamMemberRow>[] = [
//     {
//       header: "Name",
//       key: "name",
//       render: (_value: string, row: TeamMemberRow) => (
//         <div className="flex flex-col items-center justify-center leading-[18px]">
//           <span className="text-[14px] font-medium text-[#7B7B7B]">
//             {row.name}
//           </span>
//           <span className="text-[14px] font-semibold text-[#9E9E9E]">
//             {row.employeeId}
//           </span>
//         </div>
//       ),
//     },
//     {
//       header: "Mobile no",
//       key: "mobileNo",
//       align: "center",
//       render: (value: string) => (
//         <span className="text-[14px] font-medium text-[#9E9E9E]">{value}</span>
//       ),
//     },
//     {
//       header: "Role",
//       key: "role",
//       align: "center",
//       render: (value: string, row: TeamMemberRow) => (
//         <div className="flex items-center justify-center">
//           <L2BDropdownMenu
//             align="center"
//             items={getRoleItems(row)}
//             className="w-[170px]"
//             trigger={
//               <button
//                 type="button"
//                 className="flex h-[30px] min-w-[145px] items-center justify-between gap-2 rounded-[6px] border-none bg-transparent px-2 text-[14px] font-medium text-[#8D8D8D] outline-none"
//               >
//                 <span className="truncate">{value}</span>
//                 <ChevronDown className="h-4 w-4 text-[#56C293]" />
//               </button>
//             }
//           />
//         </div>
//       ),
//     },
//     {
//       header: "Action",
//       key: "action",
//       align: "center",
//       render: (value: string, row: TeamMemberRow) => {
//         const isAdded = value === "Added";

//         return (
//           <button
//             type="button"
//             onClick={() => handleActionToggle(row.id)}
//             className={`flex h-[28px] min-w-[79px] items-center justify-center rounded-[10px] border text-[13px] font-medium ${
//               isAdded
//                 ? "border-[#56C293] bg-[#F2FAF6] text-[#56C293]"
//                 : "border-[#E5E5E5] bg-white text-[#56C293]"
//             }`}
//           >
//             {value}
//           </button>
//         );
//       },
//     },
//   ];

//   return (
//     <ActionTablePanel
//       open={open}
//       onClose={onClose}
//       title="Project details"
//       showTitle={true}
//       showInfoIcon={false}
//       showCloseIcon={false}
//       width={"592px"}
//       maxHeight="max-h-[608px]"
//       showTextField={true}
//       textField={
//         <div className="flex flex-col gap-[14px]">
//           <div className="h-[102px] w-[559px] rounded-[16px] border border-[#E8E8E8] px-[14px] py-[12px]">
//             <div className="grid grid-cols-2 gap-[14px]">
//               <div className="flex flex-col gap-[8px]">
//                 <span className="pl-[6px] text-[14px] font-normal leading-[16px] text-[#8D8D8D]">
//                   Project name
//                 </span>
//                 <CustomInput
//                   fullWidth
//                   sizeVariant="xl"
//                   value={projectName}
//                   InputProps={{
//                     readOnly: true,
//                     endAdornment: (
//                       <button
//                         type="button"
//                         onClick={onBack}
//                         className="mr-[8px] text-[14px] font-medium text-[#56C293]"
//                       >
//                         Change
//                       </button>
//                     ),
//                   }}
//                 />
//               </div>

//               <div className="flex flex-col gap-[8px]">
//                 <span className="pl-[6px] text-[14px] font-normal leading-[16px] text-[#8D8D8D]">
//                   Select team
//                 </span>
//                 <CustomInput
//                   fullWidth
//                   sizeVariant="xl"
//                   value={selectedTeamText}
//                   InputProps={{
//                     readOnly: true,
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex w-[560px] items-center justify-between">
//             <h3 className="text-[18px] font-semibold text-[#2D2D2D]">
//               Add team member
//             </h3>
//             <span className="text-[18px] font-semibold text-[#2D2D2D]">
//               {String(teamMembers.length).padStart(2, "0")} member
//             </span>
//           </div>
//         </div>
//       }
//       showTable={true}
//       table={
//         <div className="w-[560px]">
//           <DynamicTable
//             columns={teamMemberColumns}
//             data={teamMembers}
//             maxHeight={294}
//             minWidth={560}
//           />
//         </div>
//       }
//       showButtons={true}
//       buttonCount={2}
//       buttons={
//         <div className="flex w-[560px] items-center justify-end gap-[18px] pb-[34px]">
//           <button
//             type="button"
//             onClick={onBack}
//             className="flex h-[44px] w-[24px] items-center justify-center text-[#3A3A3A]"
//           >
//             <ChevronsLeft className="h-6 w-6" />
//           </button>

//           <Button
//             onClick={handleAddProject}
//             className="h-[40px] w-[200px] rounded-[10px] !bg-[#F6B332] !text-black hover:!bg-[#e0a227]"
//           >
//             Add project
//           </Button>
//         </div>
//       }
//     />
//   );
// }

export const addProjectTeamMembersMockData = {
  projectName: "New bel road.",
  projectDetails: {
    siteLocation: "New bel road.",
    plotOrHouseNo: "gfgsgsgdws",
    areaLocalityStreetName: "wwrwetewte",
    pinCode: "413114",
  },
  roleOptions: ["Site supervisor", "Site manager", "Worker"],
  rows: [
    {
      id: "1",
      name: "Adesh reddy",
      employeeId: "#DSV21444443",
      mobileNo: "+91 9828446626",
      role: "Site supervisor",
      action: "Added",
    },
    {
      id: "2",
      name: "Suresh Reddy",
      employeeId: "#DSV21444443",
      mobileNo: "+91 9828446626",
      role: "Site manager",
      action: "Added",
    },
    {
      id: "3",
      name: "Suresh Reddy",
      employeeId: "#DSV21444443",
      mobileNo: "+91 9828446626",
      role: "Worker",
      action: "Select",
    },
  ],
};