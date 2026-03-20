import React from "react";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { ProfileHeader } from "@/shared/components/ProfileHeader";
import { DynamicTable } from "@/shared/components/Table";
import { ColumnConfig } from "@/shared/components/Table";

export default function L2profileLayout() {
  // 1. The Mock Data mapped exactly from the Permissions image
  const mockPermissionsData = [
    {
      permission: "All revenue metrics",
      canView: true,
      viewColor: "black",
      canEdit: false,
      editColor: "green",
      canDownload: false,
      downloadColor: "green",
    },
    {
      permission: "Customer Profile",
      canView: true,
      viewColor: "green",
      canEdit: true,
      editColor: "green",
      canDownload: false,
      downloadColor: "green",
    },
    {
      permission: "Vendor Profile",
      canView: true,
      viewColor: "green",
      canEdit: true,
      editColor: "green",
      canDownload: true,
      downloadColor: "green",
    },
    {
      permission: "Wallet",
      canView: true,
      viewColor: "green",
      canEdit: true,
      editColor: "black",
      canDownload: false,
      downloadColor: "green",
    },
    {
      permission: "Ticket",
      canView: true,
      viewColor: "green",
      canEdit: true,
      editColor: "green",
      canDownload: false,
      downloadColor: "green",
    },
    {
      permission: "Growth & Behavior",
      canView: true,
      viewColor: "black",
      canEdit: false,
      editColor: "green",
      canDownload: true,
      downloadColor: "black",
    },
    {
      permission: "Payment & Finance",
      canView: true,
      viewColor: "black",
      canEdit: false,
      editColor: "green",
      canDownload: false,
      downloadColor: "green",
    },
    {
      permission: "Order & Operation",
      canView: true,
      viewColor: "green",
      canEdit: false,
      editColor: "green",
      canDownload: false,
      downloadColor: "green",
    },
    {
      permission: "Market & Promotion",
      canView: true,
      viewColor: "green",
      canEdit: true,
      editColor: "black",
      canDownload: false,
      downloadColor: "green",
    },
  ];

  // Helper Component to render the Toggle switch exactly like the image
  const ToggleSwitch = ({
    isActive,
    activeColor,
    onToggle,
  }: {
    isActive: boolean;
    activeColor?: string;
    onToggle?: () => void;
  }) => {
    // Determine the background color based on state and color preference
    const bgColor = isActive
      ? activeColor === "black"
        ? "bg-[#252525]" // Dark gray/black for specific active toggles
        : "bg-[#48C084]" // Standard green active toggle
      : "bg-[#E5E7EB]"; // Inactive gray toggle

    // Push the white circle to the right if active
    const translate = isActive ? "translate-x-5" : "translate-x-1";

    return (
      <div className="flex justify-center w-full">
        <button
          onClick={onToggle}
          className={`w-11 h-6 rounded-full relative inline-flex items-center transition-colors ${bgColor}`}
        >
          <span
            className={`inline-block w-4 h-4 bg-white rounded-full transition-transform transform ${translate}`}
          />
        </button>
      </div>
    );
  };

  // 2. The Column Configuration
  const permissionsColumns: ColumnConfig<any>[] = [
    {
      header: "Permissions",
      key: "permission",
      width: 200,
      render: (value: string) => (
        <span className="text-gray-500 font-medium">{value}</span>
      ),
    },
    {
      header: "Can View",
      key: "canView",
      width: 120,
      align: "center",
      render: (value: boolean, row: any) => (
        <ToggleSwitch isActive={value} activeColor={row.viewColor} />
      ),
    },
    {
      header: "Can Edit",
      key: "canEdit",
      width: 120,
      align: "center",
      render: (value: boolean, row: any) => (
        <ToggleSwitch isActive={value} activeColor={row.editColor} />
      ),
    },
    {
      header: "Can Download",
      key: "canDownload",
      width: 120,
      align: "center",
      render: (value: boolean, row: any) => (
        <ToggleSwitch isActive={value} activeColor={row.downloadColor} />
      ),
    },
  ];
  return (
    <SectionWrapper className="md:w-[90%] xl:w-[91%] 2xl:w-[93%] flex flex-col gap-[48px] ">
      <ProfileHeader
        name="Abhishek"
        avatarUrl="/images/customer1.avif" // Replace with your actual path
        joinDate="12/09/2025"
        profileProgress={100}
        statusTitle="CS Manager" // Taken from the grey text next to name
        statusColor="success"
        // walletBalance="₹ 10,00,000" // Kept as per your previous setup
        canEdit={true}
        fields={[
          {
            label: "Employee Id",
            value: "ADC12233214",
            isCopyable: true,
          },
          {
            label: "Mobile no.",
            value: "9090909090",
          },
          {
            label: "Email Id",
            value: "abhishek@l2b.com",
          },
          {
            label: "Department",
            value: "Customer Support",
          },
          {
            label: "Level",
            value: "2",
          },
        ]}
      />
      <div className="w-full border flex ">
        <div className="w-1/2 border border-red-500 flex flex-col gap-[12px]">
          <p className="text-[24px] font-medium text-neutral-1">
            Your Permissions
          </p>
          <DynamicTable
            columns={permissionsColumns}
            data={mockPermissionsData}
            minWidth={1100} // Matches your Frame 427318563.jpg reference for many columns
          />
        </div>
        <div className="w-1/2 border border-green-500"></div>
      </div>
    </SectionWrapper>
  );
}
