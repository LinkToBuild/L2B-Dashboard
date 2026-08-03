"use client";

import React from "react";
import { ProfileHeader } from "@/shared/components/ProfileHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import TeamCard from "../components/TeamCard";
import { TeamCardProps } from "../components/TeamCard";
import TableToolBar from "../components/TableToolBar";
import { ColumnConfig } from "@/shared/components/Table";
import { useState } from "react";
import { DynamicTable } from "@/shared/components/Table";
import { Copy } from "lucide-react";
import { L2BButton } from "@/design-system/components/L2BButton";

export default function L1profileLayout() {
  const [searchText, setSearchText] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  const teamsData: TeamCardProps[] = [
    {
      teamName: "Material Vendor Support",
      performance: "Good",
      badgeStatus: "successLight",
      managerName: "Lata . M",
      totalMembers: 19,
    },
    {
      teamName: "Rental Vendor Support",
      performance: "Bad",
      badgeStatus: "dangerLight", // Matches the red tag in your image
      managerName: "Mehta . M",
      totalMembers: 19,
    },
    {
      teamName: "Rental Customer Support",
      performance: "Decent",
      badgeStatus: "warningLight", // Matches the yellow tag in your image
      managerName: "Riya . M",
      totalMembers: 19,
    },
  ];

  const employeeFilters = [
    { label: "All Levels", value: "All" },
    { label: "Level 1", value: "L1" },
    { label: "Level 2", value: "L2" },
    { label: "Level 3", value: "L3" },
  ];

  const mockEmployeeData = [
    {
      name: "Riya . T",
      isActive: true, // true = green dot, false = red dot
      level: "1",
      team: "-",
      empId: "10920",
      email: "riya123@...",
    },
    {
      name: "Tesha . G",
      isActive: false,
      level: "2",
      team: "-",
      empId: "2112",
      email: "tesha13...",
    },
    {
      name: "Risha . S",
      isActive: false,
      level: "3",
      team: "CS T-1",
      empId: "21244",
      email: "rishag...",
    },
    {
      name: "Jim . L",
      isActive: true,
      level: "3",
      team: "CS T-1",
      empId: "13442",
      email: "jimlads...",
    },
    {
      name: "Jim . L",
      isActive: true,
      level: "3",
      team: "CS T-1",
      empId: "13442",
      email: "jimlads...",
    },
    {
      name: "Jim . L",
      isActive: true,
      level: "3",
      team: "-",
      empId: "13442",
      email: "jimlads...",
    },
    {
      name: "Jim . L",
      isActive: true,
      level: "3",
      team: "CS T-1",
      empId: "13442",
      email: "jimlads...",
    },
  ];

  // 2. The Column Configuration
  const employeeColumns: ColumnConfig<any>[] = [
    {
      header: "Name",
      key: "name",
      width: 150,
      render: (value: string, row: any) => (
        <div className="flex items-center justify-between w-[90px]">
          <span className="text-gray-600 font-medium">{value}</span>
          {/* Status Dot */}
          <span
            className={`w-2 h-2 rounded-full ${
              row.isActive ? "bg-[#48C084]" : "bg-[#F64C4C]"
            }`}
          ></span>
        </div>
      ),
    },
    {
      header: "Level",
      key: "level",
      width: 100,
      align: "center",
      render: (value: string) => <span className="text-gray-500">{value}</span>,
    },
    {
      header: "Team",
      key: "team",
      width: 120,
      align: "center",
      render: (value: string) => <span className="text-gray-500">{value}</span>,
    },
    {
      header: "Emp Id",
      key: "empId",
      width: 120,
      align: "center",
      render: (value: string) => <span className="text-gray-500">{value}</span>,
    },
    {
      header: "Email",
      key: "email",
      width: 180,
      render: (value: string) => (
        <div className="flex items-center justify-between w-[120px] text-gray-500">
          <span className="truncate">{value}</span>
          <L2BButton
            type="button"
            variant="ghost"
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent hover:text-gray-800 transition-colors"
            title="Copy Email"
          >
            <Copy size={16} strokeWidth={1.5} />
          </L2BButton>
        </div>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      width: 140,
      align: "center",
      render: () => (
        <div className="flex items-center gap-2 text-[14px]">
          <L2BButton type="button" variant="bgNone" size="auto" className="text-aux-2 font-medium hover:opacity-80 transition-opacity">
            Edit
          </L2BButton>
          <span className="text-gray-300">|</span>
          <L2BButton type="button" variant="bgNone" size="auto" className="text-danger-1 font-medium hover:opacity-80 transition-opacity">
            Remove
          </L2BButton>
        </div>
      ),
    },
  ];

  const handleEditClick = (teamName: string) => {
    console.log(`Edit clicked for ${teamName}`);
    // Open your edit modal here later
  };
  return (
    <SectionWrapper className="flex flex-col gap-[48px]">
      <ProfileHeader
        name="Sunil"
        avatarUrl="/images/avt2.jpg" // Replace with your actual path
        joinDate="12/09/2025"
        profileProgress={100}
        statusTitle="Founder" // Taken from the grey text next to name
        statusColor="success"
        walletBalance="₹ 10,00,000" // Kept as per your previous setup
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
            value: "Admin",
          },
          {
            label: "Level",
            value: "1",
          },
        ]}
      />
      <div className="w-full  flex gap-2">
        <div className="w-1/2   p-2 flex flex-col gap-4">
          <div className="w-full flex justify-between place-items-center">
            <p className="text-[24px] font-normal text-neutral-1"> Your Team</p>
            <p className="text-[12px] font-normal text-success-2">
              create Team
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {teamsData.map((team, index) => (
              <TeamCard
                key={index}
                teamName={team.teamName}
                performance={team.performance}
                badgeStatus={team.badgeStatus}
                managerName={team.managerName}
                totalMembers={team.totalMembers}
                onEdit={() => handleEditClick(team.teamName)}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2  flex flex-col gap-4 p-2">
          <TableToolBar
            searchValue={searchText}
            onSearchChange={setSearchText}
            searchPlaceholder="Search employees..."
            filterOptions={employeeFilters}
            activeFilter={currentFilter}
            onFilterChange={setCurrentFilter}
          />
          <DynamicTable
            columns={employeeColumns}
            data={mockEmployeeData}
            minWidth={1100} // Matches your Frame 427318563.jpg reference for many columns
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
