"use client";

import { CustomerScreen } from "@/features/customermanagement/screen/CustomerScreen";
import CustomerIndividualScreen from "@/features/customermanagement/screen/CustomerIndividualScreen";
import ProfileLayout from "@/features/customermanagement/screen/ProfileScreen";
import { ColumnConfig } from "@/shared/components/Table";
import { useState } from "react";

export default function CustomerManagementPage() {
  const [timeFilter, setTimeFilter] = useState("Site A");
  const mockTeamDetails = [
    {
      name: "Suresh Reddy",
      id: "#DSV2144443",
      associatedSite: "-",
      status: "unassigned",
    },
    {
      name: "Samadhan",
      id: "#DSV2144443",
      associatedSite: "+2",
      status: "assigned",
    },
    {
      name: "Suraj reddy",
      id: "#DSV2144443",
      associatedSite: "+5",
      status: "assigned",
    },
    {
      name: "Ramesh",
      id: "#DSV2144443",
      associatedSite: "+3",
      status: "assigned",
    },
    {
      name: "Adesh Reddy",
      id: "#DSV2144443",
      associatedSite: "+2",
      status: "assigned",
    },
    {
      name: "Ramesh Reddy",
      id: "#DSV2144443",
      associatedSite: "+4",
      status: "assigned",
    },
  ];

  const teamColumns: ColumnConfig<any>[] = [
    {
      header: "Name\\ID",
      key: "nameId",
      width: 200,
      render: (_, row) => (
        <div className="flex flex-col text-[14px]">
          <span className="text-neutral-600 font-medium">{row.name},</span>
          <span className="text-neutral-400 font-semibold">{row.id}</span>
        </div>
      ),
    },
    {
      header: "Associated site",
      key: "associatedSite",
      width: 150,
      align: "center",
      render: (val: string) => (
        <span className="text-neutral-500 font-medium">{val}</span>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      width: 180,
      align: "center",
      render: (_, row) => (
        <div className="flex items-center justify-center gap-3">
          {row.status === "assigned" && (
            <button className="px-4 py-1.5 border border-red-200 text-[#F05A5A] rounded-md text-[13px] font-medium hover:bg-red-50 transition-colors">
              Remove
            </button>
          )}
          <button className="px-4 py-1.5 border border-green-200 text-[#56C293] rounded-md text-[13px] font-medium hover:bg-green-50 transition-colors">
            Assign
          </button>
        </div>
      ),
    },
  ];



  const mockProjectDetails = [
    {
      siteName: "Guddipalii..",
      address: "5PX4+HQ Ga...",
      teamMembers: 20,
      receiverName: "Adesh Reddy",
      status: "assigned",
    },
    {
      siteName: "Guddipalii..",
      address: "5PX4+HQ Ga...",
      teamMembers: 20,
      receiverName: "Adesh Reddy",
      status: "unassigned",
    },
    {
      siteName: "Guddipalii..",
      address: "5PX4+HQ Ga...",
      teamMembers: 20,
      receiverName: "Adesh Reddy",
      status: "unassigned",
    },
    {
      siteName: "Guddipalii..",
      address: "5PX4+HQ Ga...",
      teamMembers: 20,
      receiverName: "Adesh Reddy",
      status: "unassigned",
    },
  ];

  const projectColumns: ColumnConfig<any>[] = [
    {
      header: "Site name",
      key: "siteName",
      width: 140,
      render: (val: string) => (
        <span className="text-neutral-500 font-medium">{val}</span>
      ),
    },
    {
      header: "Address",
      key: "address",
      width: 160,
      render: (val: string) => (
        <span className="text-neutral-500 font-medium">{val}</span>
      ),
    },
    {
      header: "Team me..",
      key: "teamMembers",
      width: 120,
      align: "center",
      render: (val: number) => (
        <div className="flex items-center justify-center gap-2">
          <span className="text-neutral-500 font-medium">{val}</span>
          <button className="text-[#56C293] text-[13px] font-medium underline hover:opacity-80 transition-opacity">
            View
          </button>
        </div>
      ),
    },
    {
      header: "Receiver..",
      key: "receiverName",
      width: 160,
      align: "center",
      render: (_, row) => (
        <div className="flex items-center justify-center gap-3">
          <span className="text-neutral-500 font-medium">
            {row.receiverName}
          </span>
          <button className="hover:opacity-80 transition-opacity flex items-center justify-center">
            {row.status === "assigned" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#F05A5A" />
                <path
                  d="M8 12H16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#56C293" />
                <path
                  d="M12 8V16M8 12H16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
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
    idLabel: "Customer ID",
    idValue: "ADC123214",
  };

  // 2. Define their payment info (if they have it)
  const paymentInfo = {
    bankName: "HDFC Bank Account",
    accountDetails: "A/c no ........ 0910",
  };
  return (
    <div className="px-8 py-5    min-h-screen bg-[#F8F9FA]">
      {/* <CustomerScreen /> */}
      {/* <CustomerIndividualScreen></CustomerIndividualScreen> */}
      <ProfileLayout
        role=""
        customerData={customerInfo}
        teamTableData={mockTeamDetails}
        teamTableColumns={teamColumns}
        projectTableData={mockProjectDetails}
        projectTableColumns={projectColumns}
        paymentData={paymentInfo}
      ></ProfileLayout>
    </div>
  );
}
