"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-colors border-none",
  {
    variants: {
      status: {
        // From Image: Restricted, Cancelled, Rejected
        danger: "bg-[#F64C4C] text-white", 
        dangerLight: "bg-[#FEF2F2] text-[#F64C4C]", 
        
        // From Image: Active, Approved, Completed, New User
        success: "bg-[#47B881] text-white",
        successLight: "bg-[#F2FAF6] text-[#47B881]",
        
        // From Image: Dormant, On Hold
        warning: "bg-[#FEB637] text-white",
        warningLight: "bg-[#FFEDCD] text-[#FEA405]",
        
        // From Image: Confirmed, Extended, Started, Pending
        info: "bg-[#8DAFD1] text-white",
        infoLight: "bg-[#EBF1F8] text-[#38678C]",
        
        // From Image: Order Placed, Neutral tags
        neutral: "bg-[#EEEEEE] text-[#4B4B4B]",
        
        // Special case: Serial Cancelers (Pinkish/Light Red)
        softDanger: "bg-[#FFCCD2] text-[#1F1F1F]",
      },
    },
    defaultVariants: {
      status: "neutral",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  label: string;
  icon?: LucideIcon; // For badges with icons like "Arrived"
}

function StatusBadge({ className, status, label, icon: Icon, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(badgeVariants({ status }), className)} {...props}>
      {label}
      {Icon && <Icon className="w-3.5 h-3.5" />}
    </div>
  );
}

export { StatusBadge, badgeVariants };