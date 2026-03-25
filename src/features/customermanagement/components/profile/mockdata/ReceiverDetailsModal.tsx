// "use client";

// import * as React from "react";
// import { ColumnConfig, DynamicTable } from "@/shared/components/Table";
// import { Button } from "@/shared/excomponent/ui/UIButton";
// import { ActionTablePanel } from "@/shared/components/ActionTablePanel";
// import ConfirmationModal from "@/shared/components/ConfirmationModal";

// type ReceiverStatus = "Remove" | "Select" | "Add";

// export type ReceiverDetailsRow = {
//   id: string;
//   name: string;
//   employeeId: string;
//   mobileNo: string;
//   role: string;
//   status: ReceiverStatus;
// };

// interface ReceiverDetailsModalProps {
//   open: boolean;
//   onClose: () => void;
//   onAssign: (data: ReceiverDetailsRow[]) => void;
//   receiverName?: string;
//   status?: string;
// }

// export function ReceiverDetailsModal({
//   open,
//   onClose,
//   onAssign,
//   receiverName = "Adesh reddy",
//   status,
// }: ReceiverDetailsModalProps) {
//   const [receiverTableData, setReceiverTableData] = React.useState<ReceiverDetailsRow[]>([]);
//   const [isRemoveModalOpen, setIsRemoveModalOpen] = React.useState(false);
//   const [selectedReceiver, setSelectedReceiver] =
//     React.useState<ReceiverDetailsRow | null>(null);

//   const getMockReceiverDetails = React.useCallback((): ReceiverDetailsRow[] => {
//     const isAssigned = status === "assigned";

//     if (isAssigned) {
//       return [
//         {
//           id: "1",
//           name: receiverName,
//           employeeId: "#DSV2144443",
//           mobileNo: "+91 9828446626",
//           role: "Site manager",
//           status: "Remove",
//         },
//         {
//           id: "2",
//           name: "Suresh Reddy",
//           employeeId: "#DSV2144443",
//           mobileNo: "+91 9828446626",
//           role: "Site supervisor",
//           status: "Select",
//         },
//         {
//           id: "3",
//           name: "Suresh Reddy",
//           employeeId: "#DSV2144443",
//           mobileNo: "+91 9828446626",
//           role: "Worker",
//           status: "Select",
//         },
//         {
//           id: "4",
//           name: "Suresh Reddy",
//           employeeId: "#DSV2144443",
//           mobileNo: "+91 9828446626",
//           role: "Worker",
//           status: "Select",
//         },
//       ];
//     }

//     return [
//       {
//         id: "1",
//         name: receiverName,
//         employeeId: "#DSV2144443",
//         mobileNo: "+91 9828446626",
//         role: "Site manager",
//         status: "Remove",
//       },
//       {
//         id: "2",
//         name: "Suresh Reddy",
//         employeeId: "#DSV2144443",
//         mobileNo: "+91 9828446626",
//         role: "Site supervisor",
//         status: "Select",
//       },
//       {
//         id: "3",
//         name: "Suresh Reddy",
//         employeeId: "#DSV2144443",
//         mobileNo: "+91 9828446626",
//         role: "Worker",
//         status: "Select",
//       },
//       {
//         id: "4",
//         name: "Suresh Reddy",
//         employeeId: "#DSV2144443",
//         mobileNo: "+91 9828446626",
//         role: "Worker",
//         status: "Select",
//       },
//     ];
//   }, [receiverName, status]);

//   React.useEffect(() => {
//     if (open) {
//       setReceiverTableData(getMockReceiverDetails());
//     }
//   }, [open, getMockReceiverDetails]);

//   const selectedReceiverCount = receiverTableData.filter(
//     (item) => item.status === "Remove"
//   ).length;

//   const handleStatusToggle = (id: string) => {
//     setReceiverTableData((prev) => {
//       const currentSelectedCount = prev.filter(
//         (item) => item.status === "Remove"
//       ).length;

//       return prev.map((item) => {
//         if (item.id !== id) return item;

//         if (item.status === "Remove") {
//           return { ...item, status: "Select" };
//         }

//         if (item.status === "Select" && currentSelectedCount < 2) {
//           return { ...item, status: "Remove" };
//         }

//         if (item.status === "Add" && currentSelectedCount < 2) {
//           return { ...item, status: "Remove" };
//         }

//         return item;
//       });
//     });
//   };

//   const handleStatusClick = (row: ReceiverDetailsRow) => {
//     if (row.status === "Remove") {
//       setSelectedReceiver(row);
//       setIsRemoveModalOpen(true);
//       return;
//     }

//     handleStatusToggle(row.id);
//   };

//   const handleCloseRemoveModal = () => {
//     setIsRemoveModalOpen(false);
//     setSelectedReceiver(null);
//   };

//   const handleConfirmRemove = () => {
//     if (selectedReceiver) {
//       handleStatusToggle(selectedReceiver.id);
//     }
//     setIsRemoveModalOpen(false);
//     setSelectedReceiver(null);
//   };

//   const handleAssignClick = () => {
//     onAssign(receiverTableData);
//   };

//   const receiverTableColumns: ColumnConfig<ReceiverDetailsRow>[] = [
//     {
//       header: "Name",
//       key: "name",
//       render: (_value: string, row: ReceiverDetailsRow) => {
//         const isHighlighted = row.status === "Remove";

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
//       header: "Status",
//       key: "status",
//       align: "center",
//       render: (value: string, row: ReceiverDetailsRow) => {
//         const normalized = String(value).toLowerCase();
//         const isRemove = normalized === "remove";
//         const isSelect = normalized === "select";
//         const isAdd = normalized === "add";

//         const shouldDisable = isSelect && selectedReceiverCount >= 2;

//         const statusClass = isRemove
//           ? "border border-[#FFD9D9] text-[#FF6B6B] bg-white"
//           : isAdd
//           ? "border border-[#D8F3E5] text-[#56C293] bg-white"
//           : shouldDisable
//           ? "border border-neutral-200 text-neutral-300 bg-white cursor-not-allowed opacity-70"
//           : "border border-[#D8F3E5] text-[#56C293] bg-white";

//         return (
//           <button
//             type="button"
//             disabled={shouldDisable}
//             onClick={() => handleStatusClick(row)}
//             className={`min-w-[88px] rounded-[10px] px-4 py-[6px] text-[13px] font-medium ${statusClass}`}
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
//         title="Receiver details"
//         showTitle={true}
//         showInfoIcon={true}
//         width="w-[598px]"
//         maxHeight="max-h-[412px]"
//         showTable={true}
//         table={
//           <DynamicTable
//             columns={receiverTableColumns}
//             data={receiverTableData}
//             maxHeight={249}
//             minWidth={544}
//           />
//         }
//         showButtons={true}
//         buttonCount={2}
//         buttons={
//           <div className="flex justify-end gap-3">
//             <Button
//               variant="outline"
//               onClick={onClose}
//               className="min-w-[200px] min-h-[40px] rounded-[8px]"
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleAssignClick}
//               className="min-w-[200px] min-h-[40px] rounded-[8px] !bg-[#FEB637] hover:!bg-[#e3a92f] !text-black"
//             >
//               Assign
//             </Button>
//           </div>
//         }
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

export const receiverDetailsMockData = {
  rows: [
    {
      id: "1",
      name: "Adesh reddy",
      employeeId: "#DSV2144443",
      mobileNo: "+91 9828446626",
      role: "Site manager",
      status: "Remove",
    },
    {
      id: "2",
      name: "Suresh Reddy",
      employeeId: "#DSV2144443",
      mobileNo: "+91 9828446626",
      role: "Site supervisor",
      status: "Select",
    },
    {
      id: "3",
      name: "Suresh Reddy",
      employeeId: "#DSV2144443",
      mobileNo: "+91 9828446626",
      role: "Worker",
      status: "Select",
    },
  ],
};