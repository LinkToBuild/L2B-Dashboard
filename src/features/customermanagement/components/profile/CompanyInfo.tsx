"use client";

import React from "react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { LabeledField } from "@/shared/excomponent/ui/LabeledField";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CompanyInfo() {
  const [gstStatus, setGstStatus] = useState("Approve");
  const [panStatus, setPanStatus] = useState("Approve");
  const [aadharStatus, setAadharStatus] = useState("Pending");

  const getDropdownItems = (setter: (val: string) => void) => [
    { label: "Approve", onClick: () => setter("Approve") },
    { label: "Rejected", onClick: () => setter("Rejected") },
    { label: "Pending", onClick: () => setter("Pending") },
    { label: "On hold", onClick: () => setter("On hold") },
  ];

  const renderTrigger = (status: string) => {
    const isApproved = status === "Approve";
    const textColor = isApproved ? "text-success-1" : "text-neutral-400";
    const iconBg = isApproved ? "bg-success-1" : "bg-neutral-300";

    return (
      <button
        type="button"
        className={`flex items-center gap-1 ${textColor} font-medium outline-none`}
      >
        {status}
        <ChevronDown
          className={`w-4 h-4 rounded-full ${iconBg} text-white p-[2px]`}
        />
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[400px]">
      {/* Card Header */}
      <h2 className="text-[20px] font-medium text-neutral-1">Company info</h2>

      {/* Card Body */}
      <div className="flex flex-col gap-5 p-5 bg-white border border-gray-100 rounded-[16px] shadow-sm">
        {/* 1. Company Name (Simple Field) */}
        <LabeledField label="Company name">
          <CustomInput
            fullWidth
            sizeVariant="md"
            defaultValue="Menthan Pvt.ltd"
          />
        </LabeledField>

        {/* 2. GST No (Label + View Link + Dropdown) */}
        <LabeledField
          label="GST no"
          labelAction="view"
          rightElement={
            <L2BDropdownMenu
              trigger={renderTrigger(gstStatus)}
              items={getDropdownItems(setGstStatus)}
            />
          }
        >
          <CustomInput
            fullWidth
            sizeVariant="md"
            defaultValue="ADB12233432535"
          />
        </LabeledField>

        {/* 3. PAN No (Label + View Link + Dropdown) */}
        <LabeledField
          label="Pan no"
          labelAction="view"
          rightElement={
            <L2BDropdownMenu
              trigger={renderTrigger(panStatus)}
              items={getDropdownItems(setPanStatus)}
            />
          }
        >
          <CustomInput fullWidth sizeVariant="md" defaultValue="PKYC1245" />
        </LabeledField>

        {/* 4. Aadhar Card (Label + Dropdown only) */}
        <LabeledField
          label="Aadhar card"
          rightElement={
            <L2BDropdownMenu
              trigger={renderTrigger(aadharStatus)}
              items={getDropdownItems(setAadharStatus)}
            />
          }
        >
          <CustomInput fullWidth sizeVariant="md" defaultValue="-" />
        </LabeledField>
      </div>
    </div>
  );
}
