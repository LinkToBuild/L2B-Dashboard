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
                columns={teamTableColumns} 
                data={teamTableData} 
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