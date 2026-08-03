"use client";

import React, { useState } from "react";
import Header from "@/features/customermanagement/components/profile/Header";
import SectionWrapper from "@/shared/components/SectionWrapper";
import PersonalInfo from "@/features/customermanagement/components/profile/PersonalInfo";
import CompanyInfo from "@/features/customermanagement/components/profile/CompanyInfo";
import TableToolbar from "../components/profile/TableToolbar";
import { DynamicTable } from "@/shared/components/Table";
import { ColumnConfig } from "@/shared/components/Table"; // Adjust path if needed
import { PaymentMethodCard } from "../components/profile/PaymentMethodCard";

// 👉 1. We define all the data this screen expects to receive
export interface ProfileScreenProps {
  role?: string;
  customerData: any; // Pass the object for PersonalInfo
  teamTableData: any[]; // Data for the first table
  teamTableColumns: ColumnConfig<any>[]; // Columns for the first table
  projectTableData: any[]; // Data for the second table
  projectTableColumns: ColumnConfig<any>[]; // Columns for the second table
  paymentData?: {
    bankName: string;
    accountDetails: string;
  };
}

export default function ProfileLayout({ 
  role = "Customer Admin",
  customerData,
  teamTableData,
  teamTableColumns,
  projectTableData,
  projectTableColumns,
  paymentData
}: ProfileScreenProps) {
  
  const handleRemovePayment = () => {
    console.log("Removing payment method...");
  };
  const [timeFilter, setTimeFilter] = useState("Daily");
  const [siteFilter, setSiteFilter] = useState("All Sites");
  
  // ==========================================
  // BUSINESS LOGIC RULES
  // ==========================================
  const NO_PAYMENT_ROLES = ["Customer Worker"];
  const NO_TABLES_ROLES = ["Customer Individual"];
  const SINGLE_TABLE_ROLES = ["Individual Vendor", "Individual Operator", "L2B Operator"];

  const showPayment = !NO_PAYMENT_ROLES.includes(role);
  const showTables = !NO_TABLES_ROLES.includes(role);
  const isSingleTable = SINGLE_TABLE_ROLES.includes(role);
  // ==========================================

  return (
    <div className="flex flex-col gap-6 w-[65%] bg-[#FDFDFD]  ml-auto p-5 shadow-md">
      <Header title="Customer Profile" walletBalance="100000" />
      <div className=" flex gap-[24px]">
        <div className="w-1/2  flex flex-col gap-4 ">
          <PersonalInfo
            initialRole="Admin"
            availableRoles={["Admin", "Worker", "Individual"]}
            data={customerData} // 👉 Uses Prop
          ></PersonalInfo>
          <CompanyInfo></CompanyInfo>
        </div>
        
        {/* RIGHT COLUMN */}
        <div className="w-1/2  flex flex-col gap-[24px]">
          
          {/* Table 1: Team Details */}
          {showTables && (
            <div className="flex flex-col gap-[12px]">
              <TableToolbar
                title="Team details"
                filterOptions={["Site A", "Site B", "Site C", "Site D"]}
                activeFilter={timeFilter}
                onFilterChange={(val) => setTimeFilter(val)}
              />
              <DynamicTable
                columns={teamTableColumns} // 👉 Uses Prop
                data={teamTableData} // 👉 Uses Prop
                maxHeight={296}
              />
            </div>
          )}

          {/* Table 2: Project Details */}
          {showTables && !isSingleTable && (
            <div className="flex flex-col gap-[12px]">
              <TableToolbar
                title="Project details"
                filterOptions={["Site A", "Site B", "Site C", "Site D"]}
                actionText="Add new project"
                actionHref="/add-project"
                activeFilter={timeFilter}
                onFilterChange={(val) => setTimeFilter(val)}
              />
              <DynamicTable
                columns={projectTableColumns} // 👉 Uses Prop
                data={projectTableData} // 👉 Uses Prop
                maxHeight={224}
              />
            </div>
          )}

          {/* Payment Details */}
          {showPayment && paymentData && (
            <div className="flex flex-col">
              <TableToolbar
                title="Payment details"
                actionText="Add Payment method"
                actionHref="/settings/payments/add"
              />
              <PaymentMethodCard 
                bankName={paymentData.bankName} // 👉 Uses Prop
                accountDetails={paymentData.accountDetails} // 👉 Uses Prop
                onRemove={handleRemovePayment}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}



//================================test=========================================
// "use client";

// import React, { useMemo } from "react";
// import { Minus, Plus, Info } from "lucide-react";
// import Header from "@/features/customermanagement/components/profile/Header";
// import PersonalInfo from "@/features/customermanagement/components/profile/PersonalInfo";
// import CompanyInfo from "@/features/customermanagement/components/profile/CompanyInfo";
// import TableToolbar from "@/features/customermanagement/components/profile/TableToolbar";
// import { DynamicTable, ColumnConfig } from "@/shared/components/Table";
// import { PaymentMethodCard } from "@/features/customermanagement/components/profile/PaymentMethodCard";
// import { WalletPanel } from "@/shared/components/FloatingPanel/WalletPanel";
// import { MoneyActionPanel } from "@/shared/components/FloatingPanel/MoneyPanel";
// import { AddPaymentMethodPanel } from "@/shared/components/FloatingPanel/AddPaymentMethodPanel";
// import { AssignRemoveSiteModal } from "@/features/customermanagement/components/profile/mockdata/AssignRemoveSiteModal";
// // import ConfirmationModal from "@/shared/components/FloatingPanel/ConfirmationModal";
// import {
//   ActionPanel,
// } from "@/shared/components/FloatingPanel/ActionTablePanel";
// import { MachineDetailsModal } from "@/shared/components/FloatingPanel/ActionTablePanel2";
// import { machineDocumentDetailsMockData } from "@/features/vendormanagement/components/profile/mockdata/MachineDocumentDetails";
// import {
//   useProfileScreenController,
//   ProjectTableRow,
//   TeamTableRow,
// } from "@/shared/components/FloatingPanel/useProfileScreenController";

// export interface ProfileScreenProps {
//   role?: string;
//   customerData: any;
//   teamTableData: any[];
//   teamTableColumns: ColumnConfig<any>[];
//   projectTableData: ProjectTableRow[];
//   projectTableColumns: ColumnConfig<any>[];
//   paymentData?: {
//     bankName: string;
//     accountDetails: string;
//   };
//   headerTitle?: string;
//   teamTitle?: string;
//   projectTitle?: string;
//   paymentTitle?: string;
// }

// export default function ProfileLayout({
//   role = "Customer Admin",
//   customerData,
//   teamTableData,
//   teamTableColumns,
//   projectTableData,
//   projectTableColumns,
//   paymentData,
//   headerTitle = "Customer Profile",
//   teamTitle = "Team details",
//   projectTitle = "Project details",
//   paymentTitle = "Payment details",
// }: ProfileScreenProps) {
//   const controller = useProfileScreenController({
//     role,
//     headerTitle,
//   });

//   const enhancedTeamTableColumns: ColumnConfig<TeamTableRow>[] = useMemo(
//     () =>
//       teamTableColumns.map((column) => {
//         const normalizedKey = String(column.key).toLowerCase();
//         const normalizedHeader = String(column.header).toLowerCase();

//         const isManageColumn =
//           normalizedKey.includes("assign") ||
//           normalizedKey.includes("manage") ||
//           normalizedHeader.includes("assign") ||
//           normalizedHeader.includes("manage");

//         const isDlColumn =
//           normalizedKey.includes("dl") || normalizedHeader.includes("dl");

//         if (isDlColumn) {
//           return {
//             ...column,
//             render: (_value: any, row: TeamTableRow) => {
//               const dlValue =
//                 row.dlNo ||
//                 row.dlNumber ||
//                 row.licenseNo ||
//                 "MH14 20190012345";

//               return (
//                 <div className="flex items-center justify-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => controller.handleOpenAssignedMachines(row)}
//                     className="text-[13px] font-medium text-[#56C293] underline transition-opacity hover:opacity-80"
//                   >
//                     View
//                   </button>
//                   <span className="font-medium text-neutral-400">
//                     {dlValue}
//                   </span>
//                 </div>
//               );
//             },
//           } as ColumnConfig<TeamTableRow>;
//         }

//         if (isManageColumn) {
//           return {
//             ...column,
//             render: (_value: any, row: TeamTableRow) => {
//               const memberName =
//                 row.name || row.memberName || row.employeeName || "samadhan";
//               const memberCode =
//                 row.nameId || row.memberCode || row.employeeId || "#AD2435354";

//               const associatedValue =
//                 row.associatedSite ??
//                 row.associatedSites ??
//                 row.siteCount ??
//                 "-";

//               const hasNoAssociatedSite =
//                 associatedValue === "-" ||
//                 associatedValue === "" ||
//                 associatedValue === null ||
//                 associatedValue === undefined ||
//                 associatedValue === 0 ||
//                 associatedValue === "0";

//               if (hasNoAssociatedSite) {
//                 return (
//                   <div className="flex items-center justify-center">
//                     <Button
//                       onClick={() =>
//                         controller.handleOpenAssignRemoveSiteModal(
//                           memberName,
//                           memberCode
//                         )
//                       }
//                       className="h-[30px] min-w-[82px] rounded-[10px] border border-[#56C293] bg-white !px-[14px] !py-0 !text-[12px] !font-medium !text-[#56C293] shadow-none hover:bg-white"
//                     >
//                       Assign
//                     </Button>
//                   </div>
//                 );
//               }

//               return (
//                 <div className="flex items-center justify-center gap-[10px]">
//                   <Button
//                     onClick={controller.handleOpenRemoveTeamMemberModal}
//                     className="h-[30px] min-w-[82px] rounded-[10px] border border-[#F05A5A] bg-white !px-[14px] !py-0 !text-[13px] !font-medium !text-[#F05A5A] shadow-none hover:bg-white"
//                   >
//                     Remove
//                   </Button>

//                   <Button
//                     onClick={() =>
//                       controller.handleOpenAssignRemoveSiteModal(
//                         memberName,
//                         memberCode
//                       )
//                     }
//                     className="h-[30px] min-w-[82px] rounded-[10px] border border-[#56C293] bg-white !px-[14px] !py-0 !text-[13px] !font-medium !text-[#56C293] shadow-none hover:bg-white"
//                   >
//                     Assign
//                   </Button>
//                 </div>
//               );
//             },
//           } as ColumnConfig<TeamTableRow>;
//         }

//         return column as ColumnConfig<TeamTableRow>;
//       }),
//     [teamTableColumns, controller]
//   );

//   const enhancedProjectTableColumns: ColumnConfig<ProjectTableRow>[] = useMemo(
//     () =>
//       projectTableColumns.map((column) => {
//         const normalizedKey = String(column.key).toLowerCase();
//         const normalizedHeader = String(column.header).toLowerCase();

//         const isStatusColumn =
//           normalizedKey.includes("status") ||
//           normalizedHeader.includes("status");

//         const isTeamMemberColumn =
//           normalizedKey.includes("team") ||
//           normalizedKey.includes("member") ||
//           normalizedHeader.includes("team") ||
//           normalizedHeader.includes("member");

//         const isReceiverColumn =
//           normalizedKey.includes("receiver") ||
//           normalizedHeader.includes("receiver");

//         const isDocumentsColumn =
//           normalizedKey.includes("document") ||
//           normalizedHeader.includes("document");

//         if (isStatusColumn) {
//           return {
//             ...column,
//             render: (value: any, row: ProjectTableRow) => {
//               const statusClasses: Record<string, string> = {
//                 Active: "bg-[#E8F8EE] text-[#56C293]",
//                 Booked: "bg-[#FFF3D6] text-[#F6B332]",
//                 Disable: "bg-[#D9ECF8] text-[#4F8DBA]",
//                 Rejected: "bg-[#FDE7E7] text-[#F05A5A]",
//                 Pending: "bg-[#ECECEC] text-[#7A7A7A]",
//               };

//               const isDisable = value === "Disable";

//               return (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     if (isDisable) controller.handleOpenDisableMachineModal(row);
//                   }}
//                   className={`inline-flex min-w-[70px] items-center justify-center rounded-full px-3 py-1 text-[12px] font-medium ${
//                     statusClasses[String(value)] ||
//                     "bg-neutral-100 text-neutral-500"
//                   } ${isDisable ? "cursor-pointer" : "cursor-default"}`}
//                 >
//                   {value}
//                 </button>
//               );
//             },
//           } as ColumnConfig<ProjectTableRow>;
//         }

//         if (isTeamMemberColumn) {
//           return {
//             ...column,
//             render: (value: any, row: ProjectTableRow) => (
//               <div className="flex items-center justify-center gap-2">
//                 <span className="font-medium text-neutral-500">{value}</span>
//                 <button
//                   type="button"
//                   onClick={() => controller.handleOpenSiteMembers(row)}
//                   className="text-[13px] font-medium text-[#56C293] underline transition-opacity hover:opacity-80"
//                 >
//                   View
//                 </button>
//               </div>
//             ),
//           } as ColumnConfig<ProjectTableRow>;
//         }

//         if (isReceiverColumn) {
//           return {
//             ...column,
//             render: (_: any, row: ProjectTableRow) => {
//               const isAssigned = row.status === "assigned";

//               return (
//                 <div className="flex items-center justify-center gap-3">
//                   <span className="font-medium text-neutral-500">
//                     {row.receiverName}
//                   </span>

//                   <button
//                     type="button"
//                     onClick={() => controller.handleOpenReceiverDetails(row)}
//                     className="flex items-center justify-center transition-opacity hover:opacity-80"
//                   >
//                     {isAssigned ? (
//                       <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F05A5A]">
//                         <Minus className="h-3 w-3 text-white" />
//                       </div>
//                     ) : (
//                       <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#56C293]">
//                         <Plus className="h-3 w-3 text-white" />
//                       </div>
//                     )}
//                   </button>
//                 </div>
//               );
//             },
//           } as ColumnConfig<ProjectTableRow>;
//         }

//         if (isDocumentsColumn) {
//           return {
//             ...column,
//             render: (value: any, row: ProjectTableRow) => (
//               <div className="flex items-center justify-center gap-2">
//                 <span className="inline-flex h-[10px] w-[10px] rounded-full bg-[#56C293]" />
//                 <span className="font-medium text-neutral-400">{value}</span>
//                 <button
//                   type="button"
//                   onClick={() => controller.handleOpenMachineDocumentModal(row)}
//                   className="text-[13px] font-medium text-[#56C293] underline transition-opacity hover:opacity-80"
//                 >
//                   View
//                 </button>
//               </div>
//             ),
//           } as ColumnConfig<ProjectTableRow>;
//         }

//         return column as ColumnConfig<ProjectTableRow>;
//       }),
//     [projectTableColumns, controller]
//   );

//   return (
//     <>
//       <div className="ml-auto flex w-[65%] flex-col gap-6 bg-[#FDFDFD] p-5 shadow-md">
//         <Header
//           title={headerTitle}
//           walletBalance="100000"
//           onWalletClick={controller.handleOpenWalletModal}
//         />

//         <div className="flex gap-[24px]">
//           <div className="flex w-1/2 flex-col gap-4">
//             <PersonalInfo
//               initialRole="Admin"
//               availableRoles={["Admin", "Worker", "Individual"]}
//               data={customerData}
//             />
//             <CompanyInfo />
//           </div>

//           <div className="flex w-1/2 flex-col gap-[24px]">
//             {controller.showTables && (
//               <div className="flex flex-col gap-[12px]">
//                 <TableToolbar
//                   title={teamTitle}
//                   filterOptions={["Site A", "Site B", "Site C", "Site D"]}
//                   activeFilter={controller.teamFilter}
//                   onFilterChange={(val) => controller.setTeamFilter(val)}
//                 />
//                 <DynamicTable
//                   columns={enhancedTeamTableColumns}
//                   data={teamTableData}
//                   maxHeight={296}
//                 />
//               </div>
//             )}

//             {controller.showTables && !controller.isSingleTable && (
//               <div className="flex flex-col gap-[12px]">
//                 <TableToolbar
//                   title={projectTitle}
//                   filterOptions={["Site A", "Site B", "Site C", "Site D"]}
//                   activeFilter={controller.projectFilter}
//                   onFilterChange={(val) => controller.setProjectFilter(val)}
//                   actionText="Add new project"
//                   onActionClick={controller.handleOpenAddProjectModal}
//                 />

//                 <DynamicTable
//                   columns={enhancedProjectTableColumns}
//                   data={projectTableData}
//                   maxHeight={224}
//                 />
//               </div>
//             )}

//             {controller.showPayment && paymentData && (
//               <div className="flex flex-col">
//                 <div className="flex items-start justify-between gap-[12px]">
//                   <div className="flex min-w-0 items-center gap-2">
//                     <h2 className="whitespace-nowrap text-[18px] font-semibold text-neutral-2">
//                       {paymentTitle}
//                     </h2>
//                     <Info className="h-4 w-4 shrink-0 text-neutral-3" />
//                   </div>

//                   <button
//                     type="button"
//                     onClick={controller.handleOpenAddPaymentMethod}
//                     className="shrink-0 whitespace-nowrap text-[13px] font-medium text-[#56C293] transition-opacity hover:opacity-80"
//                   >
//                     Add Payment method
//                   </button>
//                 </div>

//                 <PaymentMethodCard
//                   bankName={paymentData.bankName}
//                   accountDetails={paymentData.accountDetails}
//                   onRemove={controller.handleRemovePayment}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {controller.actionPanelType && controller.actionPanelData && (
//         <ActionPanel
//           open={controller.isActionPanelOpen}
//           onClose={controller.handleCloseActionPanel}
//           type={controller.actionPanelType}
//           data={controller.actionPanelData}
//           onNext={controller.handleNextProjectDetails}
//           onBack={controller.handleBackToProjectDetails}
//           onAssign={controller.handleAssignReceiver}
//           onAddProject={(payload) => {
//             console.log("Final add project payload:", payload);
//             controller.handleCloseActionPanel();
//           }}
//           onActionClick={(row) => {
//             console.log("Action clicked", row);
//           }}
//         />
//       )}

//       <MachineDetailsModal
//         open={controller.isMachineDocumentModalOpen}
//         onClose={controller.handleCloseMachineDocumentModal}
//         type="machineDocumentDetails"
//         data={machineDocumentDetailsMockData}
//         onTopActionChange={controller.handleMachineDocumentTopActionChange}
//       />

//       {controller.isWalletModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
//           <button
//             type="button"
//             onClick={controller.handleCloseWalletModal}
//             className="absolute inset-0"
//             aria-label="Close wallet panel"
//           />

//           <div className="relative">
//             <WalletPanel
//               {...controller.walletPanelData}
//               onAddMoney={controller.handleAddMoney}
//               onTransfer={controller.handleTransfer}
//               onRequest={controller.handleRequest}
//               onFilterClick={controller.handleWalletFilterClick}
//             />
//           </div>
//         </div>
//       )}

//       {controller.isAddMoneyPanelOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
//           <button
//             type="button"
//             onClick={controller.handleCloseAddMoneyPanel}
//             className="absolute inset-0"
//             aria-label="Close add money panel"
//           />

//           <div className="relative">
//             <MoneyActionPanel
//               type="addMoney"
//               amount={controller.moneyAmount}
//               onAmountChange={controller.setMoneyAmount}
//               onCancel={controller.handleCloseAddMoneyPanel}
//               onSubmit={controller.handleSubmitAddMoney}
//             />
//           </div>
//         </div>
//       )}

//       {controller.isTransferMoneyPanelOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
//           <button
//             type="button"
//             onClick={controller.handleCloseTransferMoneyPanel}
//             className="absolute inset-0"
//             aria-label="Close transfer money panel"
//           />

//           <div className="relative">
//             <MoneyActionPanel
//               type="transferMoney"
//               amount={controller.moneyAmount}
//               onAmountChange={controller.setMoneyAmount}
//               receiver={controller.selectedReceiver}
//               onReceiverChange={controller.setSelectedReceiver}
//               onCancel={controller.handleCloseTransferMoneyPanel}
//               onSubmit={controller.handleSubmitTransferMoney}
//             />
//           </div>
//         </div>
//       )}

//       {controller.isRequestMoneyPanelOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
//           <button
//             type="button"
//             onClick={controller.handleCloseRequestMoneyPanel}
//             className="absolute inset-0"
//             aria-label="Close request money panel"
//           />

//           <div className="relative">
//             <MoneyActionPanel
//               type="requestMoney"
//               amount={controller.moneyAmount}
//               onAmountChange={controller.setMoneyAmount}
//               onCancel={controller.handleCloseRequestMoneyPanel}
//               onSubmit={controller.handleSubmitRequestMoney}
//             />
//           </div>
//         </div>
//       )}

//       {controller.isAddPaymentMethodOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
//           <button
//             type="button"
//             onClick={controller.handleCloseAddPaymentMethod}
//             className="absolute inset-0"
//             aria-label="Close add payment method"
//           />

//           <div className="relative">
//             <AddPaymentMethodPanel
//               onCancel={controller.handleCloseAddPaymentMethod}
//               onUpdate={controller.handleUpdatePaymentMethod}
//               panelWidth="w-[572px]"
//               panelHeight="h-[418px]"
//             />
//           </div>
//         </div>
//       )}

//       <AssignRemoveSiteModal
//         open={controller.isAssignRemoveSiteModalOpen}
//         onClose={controller.handleCloseAssignRemoveSiteModal}
//         memberName={controller.selectedMemberName}
//         memberCode={controller.selectedMemberCode}
//         onSave={controller.handleSaveAssignedSites}
//       />

      
//     </>
//   );
// }