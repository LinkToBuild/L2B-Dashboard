"use client";

// import ProfileLayout from "@/features/customermanagement/screen/ProfileScreen";
import VendorIndividualScreen from "@/features/vendormanagement/screen/VendorIndividualScreen";
// import { VendorScreen } from "@/features/vendormanagement/screen/VendorScreen";
import { ColumnConfig } from "@/shared/components/Table";
import { useState ,Suspense} from "react";


export default function VendorManagementPage() {
  const [timeFilter, setTimeFilter] = useState("Site A");

  const mockTeamDetails = [
    {
      name: "Suresh Reddy",
      id: "#D213424341",
      noOfMachine: "2",
      dlNo: "MH14 20190012345",
    },
    {
      name: "Suresh Reddy",
      id: "#D213424341",
      noOfMachine: "3",
      dlNo: "MH14 20190012345",
    },
    {
      name: "Suresh Reddy",
      id: "#D213424341",
      noOfMachine: "2",
      dlNo: "MH14 20190012345",
    },
    {
      name: "Suresh Reddy",
      id: "#D213424341",
      noOfMachine: "1",
      dlNo: "MH14 20190012345",
    },
    {
      name: "Suresh Reddy",
      id: "#D213424341",
      noOfMachine: "--",
      dlNo: "MH14 20190012345",
    },
    {
      name: "Suresh Reddy",
      id: "#D213424341",
      noOfMachine: "--",
      dlNo: "MH14 20190012345",
    },
  ];

  const teamColumns: ColumnConfig<any>[] = [
    {
      header: "Name\\ID",
      key: "nameId",
      width: 180,
      render: (_: any, row: any) => (
        <div className="flex flex-col text-[14px]">
          <span className="font-medium text-neutral-600">{row.name}</span>
          <span className="font-semibold text-neutral-400">{row.id}</span>
        </div>
      ),
    },
    {
      header: "No.of Machine",
      key: "noOfMachine",
      width: 130,
      align: "center",
      render: (val: string) => (
        <span className="font-medium text-neutral-500">{val}</span>
      ),
    },
    {
      header: "DL no",
      key: "dlNo",
      width: 170,
      align: "center",
      render: (_: any, row: any) => (
        <div className="flex items-center justify-center gap-2">
          <button className="text-[13px] font-medium text-[#56C293] underline transition-opacity hover:opacity-80">
            View
          </button>
          <span className="font-medium text-neutral-400">{row.dlNo}</span>
        </div>
      ),
    },
  ];

  const mockProjectDetails = [
    {
      status: "Active",
      machine: "Excavator",
      brand: "Volvo",
      capacity: "10 tones",
      assigned: "Self",
      documents: "RC, DL...",
    },
    {
      status: "Booked",
      machine: "Tipper",
      brand: "MAN",
      capacity: "16 tones",
      assigned: "#AD123143",
      documents: "RC, TPU...",
    },
    {
      status: "Disable",
      machine: "Truck",
      brand: "Ashok Leyland",
      capacity: "10 tones",
      assigned: "#DVC12323",
      documents: "RC, TPU...",
    },
    {
      status: "Rejected",
      machine: "Excavator",
      brand: "SANY",
      capacity: "20 tones",
      assigned: "Self",
      documents: "RC, TPU...",
    },
    {
      status: "Pending",
      machine: "Dozer",
      brand: "Mahindra",
      capacity: "1 tones",
      assigned: "Self",
      documents: "RC, TPU...",
    },
  ];

  const projectColumns: ColumnConfig<any>[] = [
    {
      header: "Status",
      key: "status",
      width: 120,
      align: "center",
      render: (val: string) => {
        const statusClasses: Record<string, string> = {
          Active: "bg-[#E8F8EE] text-[#56C293]",
          Booked: "bg-[#FFF3D6] text-[#F6B332]",
          Disable: "bg-[#D9ECF8] text-[#4F8DBA]",
          Rejected: "bg-[#FDE7E7] text-[#F05A5A]",
          Pending: "bg-[#ECECEC] text-[#7A7A7A]",
        };

        return (
          <span
            className={`inline-flex min-w-[70px] items-center justify-center rounded-full px-3 py-1 text-[12px] font-medium ${
              statusClasses[val] || "bg-neutral-100 text-neutral-500"
            }`}
          >
            {val}
          </span>
        );
      },
    },
    {
      header: "Machine",
      key: "machine",
      width: 120,
      render: (val: string) => (
        <span className="font-medium text-neutral-500">{val}</span>
      ),
    },
    {
      header: "Brand",
      key: "brand",
      width: 120,
      render: (val: string) => (
        <span className="font-medium text-neutral-400">{val}</span>
      ),
    },
    {
      header: "Capacity",
      key: "capacity",
      width: 120,
      align: "center",
      render: (val: string) => (
        <span className="font-medium text-neutral-400">{val}</span>
      ),
    },
    {
      header: "Assigned",
      key: "assigned",
      width: 120,
      align: "center",
      render: (val: string) => (
        <span className="font-medium text-neutral-400">{val}</span>
      ),
    },
    {
      header: "Documents",
      key: "documents",
      width: 150,
      align: "center",
      render: (_: any, row: any) => (
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex h-[10px] w-[10px] rounded-full bg-[#56C293]" />
          <span className="font-medium text-neutral-400">{row.documents}</span>
          <button className="text-[13px] font-medium text-[#56C293] underline transition-opacity hover:opacity-80">
            View
          </button>
        </div>
      ),
    },
  ];

  const customerInfo = {
    name: "Ramesh Jay",
    contactNo: "+919822199937",
    referralNo: "#1234535525",
    email: "Adesh@veda...",
    idLabel: "Vendor ID",
    idValue: "ADC123214",
  };

  const paymentInfo = {
    bankName: "HDFC Bank Account",
    accountDetails: "A/c no ........ 0910",
  };

  return (
    <div className="px-8 py-5 min-h-screen bg-[#F8F9FA]">
      <Suspense fallback={<div className="p-10 text-neutral-400">Loading Vendor Details...</div>}>
      <VendorIndividualScreen></VendorIndividualScreen>
      {/* <VendorScreen></VendorScreen> */}
      {/* <ProfileLayout
  role=""
  customerData={customerInfo}
  teamTableData={mockTeamDetails}
  teamTableColumns={teamColumns}
  projectTableData={mockProjectDetails}
  projectTableColumns={projectColumns}
  paymentData={paymentInfo}
  headerTitle="Admin Vendor Profile"
  teamTitle="Operator\\Driver (87)"
  projectTitle="Machine details (90)"
  paymentTitle="Payment details"
/> */}
</Suspense>
    </div>
  );
}




