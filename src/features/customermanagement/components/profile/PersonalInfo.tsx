"use client";

import React, { useState } from "react";
import { Copy, ChevronDown } from "lucide-react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { LabeledField } from "@/shared/excomponent/ui/LabeledField";
import { L2BDropdownMenu } from "@/shared/excomponent/ui/L2BDropdownMenu";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

// 1. Define the shape of your dynamic data
export interface PersonalData {
  name: string;
  contactNo: string;
  referralNo: string;
  email: string;
  idLabel: string; // Dynamic! (e.g., "Customer ID", "Vendor ID", "Operator ID")
  idValue: string;
}

// 2. Define the component props
export interface PersonalInfoProps {
  avatarSrc?: string;
  initialRole?: string;
  // If you pass an array of roles, it becomes a dropdown. 
  // If you don't, it just renders as a static badge.
  availableRoles?: string[]; 
  onRoleChange?: (newRole: string) => void;
  data: PersonalData;
}

export default function PersonalInfo({
  avatarSrc = "/images/customer1.avif", // Fallback image
  initialRole = "Admin",
  availableRoles = [],
  onRoleChange,
  data,
}: PersonalInfoProps) {
  // Manage the state of the role/badge
  const [currentRole, setCurrentRole] = useState<string>(initialRole);

  // Build the dropdown menu items dynamically
  const roleMenuItems = availableRoles.map((role) => ({
    label: role,
    onClick: () => {
      setCurrentRole(role);
      if (onRoleChange) onRoleChange(role);
    },
  }));

  // Determine if it should be an interactive dropdown or just a static badge
  const isDropdown = availableRoles.length > 0;

  // The badge UI
  const Badge = (
    <button 
      type="button"
      className={`w-fit px-3 py-1 h-[26px] rounded-full bg-success-2 text-white flex justify-center items-center gap-1 text-[12px] ${isDropdown ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
    >
      {currentRole}
      {isDropdown && <ChevronDown className="w-3 h-3" />}
    </button>
  );

  return (
    <div className="w-full flex flex-col gap-[12px]">
      <h2 className="text-[20px] font-medium text-neutral-1">Personal info</h2>
      
      {/* Main Card Container */}
      <div className="w-full flex flex-col place-items-center p-5 bg-white border border-gray-100 rounded-[16px] shadow-sm">
        
        {/* Avatar & Role Badge */}
        <div className="flex flex-col place-items-center gap-[12px] mb-6">
          <div className="w-[100px] h-[100px] rounded-full p-1 relative">
            <img
              src={avatarSrc}
              alt={data.name}
              className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm"
            />
          </div>
          
          {/* Render either the Dropdown or the Static Badge */}
          {isDropdown ? (
            <L2BDropdownMenu trigger={Badge} items={roleMenuItems} align="center" />
          ) : (
            Badge
          )}
        </div>

        {/* Input Grid */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 w-full">
            
            {/* Full Width Row */}
            <div className="col-span-2">
              <LabeledField label="Name">
                <CustomInput fullWidth sizeVariant="md" defaultValue={data.name} />
              </LabeledField>
            </div>

            {/* Half Width Row 1 */}
            <LabeledField label="Contact no">
              <CustomInput fullWidth sizeVariant="md" defaultValue={data.contactNo} />
            </LabeledField>

            <LabeledField label="Referral no">
              <CustomInput fullWidth sizeVariant="md" defaultValue={data.referralNo} />
            </LabeledField>

            {/* Half Width Row 2 */}
            <LabeledField label="Email ID">
              <CustomInput fullWidth sizeVariant="md" defaultValue={data.email} />
            </LabeledField>

            <LabeledField label={data.idLabel}>
              <CustomInput 
                fullWidth 
                sizeVariant="md" 
                defaultValue={data.idValue} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="pr-2">
                      <IconButton 
                        size="small" 
                        edge="end" 
                        onClick={() => navigator.clipboard.writeText(data.idValue)}
                      >
                        <Copy className="w-4 h-4 text-neutral-500" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </LabeledField>

          </div>
        </div>
      </div>
    </div>
  );
}