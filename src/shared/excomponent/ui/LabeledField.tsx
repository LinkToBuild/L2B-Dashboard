import React, { ReactNode } from "react";

export interface LabeledFieldProps {
  label: string;
  labelAction?: ReactNode; // For the green "view" link
  rightElement?: ReactNode; // For the "Approve" dropdown
  children: ReactNode;
  className?: string;
}

export function LabeledField({ 
  label, 
  labelAction, 
  rightElement, 
  children, 
  className = "" 
}: LabeledFieldProps) {
  return (
    <div className={`flex flex-col gap-[6px] w-full ${className}`}>
      {/* The Header Row */}
      <div className="flex justify-between items-end w-full pb-1">
        
        {/* Left Side: Label + View Link */}
        <div className="flex items-center gap-2">
          <label className="text-[14px] text-[#8E8E8E] font-normal leading-none">
            {label}
          </label>
          {labelAction && (
            <div className="text-[12px] text-success-1 underline cursor-pointer hover:opacity-80">
              {labelAction}
            </div>
          )}
        </div>

        {/* Right Side: Status Dropdown */}
        {rightElement && (
          <div className="text-[12px]">
            {rightElement}
          </div>
        )}
      </div>
      
      {/* The Input Box */}
      {children}
    </div>
  );
}