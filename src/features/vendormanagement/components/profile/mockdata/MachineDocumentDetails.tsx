import type { MachineDetailsModalData } from "@/shared/components/FloatingPanel/ActionTablePanel2";
import type { ColumnConfig } from "@/shared/components/Table";

type MachineDocumentRow = {
  id: string;
  document: string;
  docNo: string;
  validThru: string;
  photo: string;
  manage: string;
};

const machineDocumentColumns: ColumnConfig<MachineDocumentRow>[] = [
  {
    header: "Document",
    key: "document",
    render: (value) => (
      <span className="text-[12px] font-medium text-[#F6B332]">{String(value)}</span>
    ),
  },
  {
    header: "Doc/policy no",
    key: "docNo",
    align: "center",
    render: (value) => (
      <span className="text-[12px] font-medium text-neutral-400">{String(value)}</span>
    ),
  },
  {
    header: "Valid Thru",
    key: "validThru",
    align: "center",
    render: (value) => (
      <span className="text-[12px] font-medium text-neutral-400">{String(value)}</span>
    ),
  },
  {
    header: "Photo",
    key: "photo",
    align: "center",
    render: (value) => (
      <img
        src={String(value)}
        alt="photo"
        className="mx-auto h-[24px] w-[24px] rounded-[4px] object-cover"
      />
    ),
  },
  {
    header: "Manage",
    key: "manage",
    align: "center",
    render: (value) => {
      const chipClasses: Record<string, string> = {
        Disable: "bg-[#F48D8D] text-white",
        Remove: "bg-[#F48D8D] text-white",
        Approve: "bg-[#56C293] text-white",
        Approved: "bg-[#56C293] text-white",
        Rejected: "bg-[#F48D8D] text-white",
        Pending: "bg-[#E5E5E5] text-[#777777]",
        "On hold": "bg-[#E5E5E5] text-[#777777]",
      };

      const text = String(value);

      return (
        <span
          className={`inline-flex min-w-[58px] items-center justify-center rounded-full px-3 py-1 text-[10px] font-medium ${
            chipClasses[text] || "bg-neutral-100 text-neutral-500"
          }`}
        >
          {text}
        </span>
      );
    },
  },
];

export const machineDocumentDetailsMockData: MachineDetailsModalData = {
  title: "Machine Document Details",
  topActionType: "dropdown",
  selectedTopAction: "Disable",
  topActionOptions: [
    "Enable",
    "Disable",
    "Remove",
  ],
  columns: machineDocumentColumns as ColumnConfig<{ id: string; [key: string]: any }>[],
  rows: [
    {
      id: "1",
      document: "RC",
      docNo: "MH-12AB123456",
      validThru: "31 / 03 / 2024",
      photo: "/images/sample-photo.png",
      manage: "Approve",
    },
    {
      id: "2",
      document: "Insurance",
      docNo: "INS-XXXX-XXX",
      validThru: "31 / 03 / 2024",
      photo: "/images/sample-photo.png",
      manage: "Approve",
    },
    {
      id: "3",
      document: "TP",
      docNo: "TP-XXXX-XXX",
      validThru: "31 / 03 / 2024",
      photo: "/images/sample-photo.png",
      manage: "Approve",
    },
  ],
};