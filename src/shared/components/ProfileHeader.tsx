"use client";

import React from "react";
import { Copy, Edit2, CheckCircle2 } from "lucide-react";
// Import your custom chip here!
// import { Chip } from "@/components/ui/Chip"; 
import { StatusBadge } from "@/shared/excomponent/ui/Chip";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import { L2BButton } from "@/design-system/components/L2BButton";

// 1. Define the strictly typed interfaces
export interface ProfileField {
  label: string;
  value: string | null | undefined;
  isCopyable?: boolean;
}

export interface RestrictedInfo {
  date: string;
  reason: string;
  author: string;
}

export interface ProfileHeaderProps {
  // Identity
  name: string;
  subTitle?: string; // e.g., "Figma world (Sole Proprietorship)"
  avatarUrl: string;
  joinDate: string;
  profileProgress: number; // 0 to 100
  
  // Status
  statusTitle: string; 
  statusColor: "danger" | "dangerLight" | "success" | "successLight" | "warning" | "warningLight" | "info" | "infoLight" | "neutral" | "softDanger"; // e.g., "success", "danger", "warning" (Depends on your Chip API)
  
  // Extras
  walletBalance?: string | null; // e.g., "₹ 10,00,000"
  canEdit?: boolean;
  onEditClick?: () => void;
  
  // Dynamic Grid Data
  fields: ProfileField[];
  
  // Conditional UI
  restrictedData?: RestrictedInfo | null;
}

export function ProfileHeader({
  name,
  subTitle,
  avatarUrl,
  joinDate,
  profileProgress,
  statusTitle,
  statusColor,
  walletBalance,
  canEdit = false,
  onEditClick,
  fields,
  restrictedData,
}: ProfileHeaderProps) {
  
  // Helper to handle copying to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can trigger a toast notification here!
  };

  const isVerified = profileProgress >= 100;

  return (
    <div className="flex  flex-col rounded-[12px] bg-neutral-7 border border-neutral-6 overflow-hidden w-full">
      
      {/* MAIN TOP SECTION */}
      <div className="flex p-6 gap-6">
        
        {/* Left Column: Avatar & Status Chip */}
        <div className="flex flex-col items-center gap-4 min-w-[100px]">
          <div className="relative ">
            {/* Avatar Image Wrapper with conditional border mapping */}
            <div 
              className={`w-[80px] h-[81px] rounded-full p-1 ${!isVerified ? 'bg-gradient-to-tr from-transparent to-red-500' : 'bg-transparent'}`}
              style={!isVerified ? { background: `conic-gradient(#FF4D4D ${profileProgress}%, transparent 0)` } : {}}
            >
              <img 
                src={avatarUrl} 
                alt={name} 
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>

            {/* Avatar Badge (Percentage OR Checkmark) */}
            {isVerified ? (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle2 className="w-6 h-6 text-success-1 fill-success-1 text-white" />
              </div>
            ) : (
              <div className="absolute -bottom-1 -right-2 bg-danger-1 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {profileProgress}%
              </div>
            )}
          </div>
          
          {/* Reusing your custom chip */}
          <StatusBadge label={statusTitle} status={statusColor} />
        </div>

        {/* Right Column: Information & Actions */}
        <div className="flex flex-col flex-1 gap-6 justify-center">
          
          {/* Header Row */}
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-3xl  font-semibold text-neutral-1">{name}</h1>
              
              {subTitle && (
                <span className="text-sm text-neutral-3">{subTitle}</span>
              )}
              
              <div className="flex items-center gap-1.5 text-xs text-neutral-3 ">
                <span>Join date : {joinDate}</span>
                <InfoTip label="Join date" size="sm" />
              </div>

              {walletBalance && (
                <span className="px-3 py-1 bg-white border border-success-1 text-success-1 text-xs rounded-full font-medium">
                  Wallet Balance : {walletBalance}
                </span>
              )}
            </div>

            {/* Edit Action Button */}
            <L2BButton
              type="button"
              variant="bgNone"
              size="auto"
              onClick={onEditClick}
              disabled={!canEdit}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                canEdit
                  ? "text-success-1 hover:text-success-2"
                  : "text-neutral-3 cursor-not-allowed"
              }`}
            >
              {canEdit ? "Edit" : "Ask to Edit"}
              <div className={`p-1 rounded ${canEdit ? "bg-success-1 text-white" : "bg-neutral-5 text-neutral-4"}`}>
                <Edit2 className="w-3.5 h-3.5" />
              </div>
            </L2BButton>
          </div>

          {/* Dynamic Fields Grid */}
          <div className="flex flex-wrap gap-x-18 gap-y-4">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 ">
                  <span className="text-[16px] font-normal text-neutral-3">{field.label}</span>
                  {field.isCopyable && field.value && (
                    <Copy 
                      className="w-3 h-3 text-neutral-4 cursor-pointer hover:text-primary-1 transition-colors" 
                      onClick={() => handleCopy(field.value as string)}
                    />
                  )}
                </div>
                {/* Fallback to "-" if no data is present yet */}
                <span className="text-[20px] font-normal text-neutral-2">
                  {field.value ? field.value : "—"}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CONDITIONAL RESTRICTED REASON SECTION */}
      {restrictedData && statusTitle === "Restricted" && (
        <div className="bg-[#FFF4F4] p-4 text-xs text-danger-1 border-t border-red-100 flex flex-col gap-1">
          <p>
            <span className="font-semibold">Reason to Restrict ({restrictedData.date}) : </span>
            {restrictedData.reason}
          </p>
          <span className="self-end font-medium italic mt-1">- {restrictedData.author}</span>
        </div>
      )}
    </div>
  );
}