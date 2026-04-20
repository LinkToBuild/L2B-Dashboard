import React from "react";
import { CirclePlus } from "lucide-react";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

// 1. Define strict roles to prevent typos
// export type ProfileRole = "admin" | "individual" | "worker" | "vendor";

// 2. Define the exact props the component needs
export interface ProfileHeaderProps {
  title: string;
  role?: string;
  walletBalance?: string | number; 
  onWalletClick?: () => void;// Made optional since workers don't need it
}

export default function Header({ title, role, walletBalance = "0", onWalletClick }: ProfileHeaderProps) {
  // 3. Clean boolean logic for conditional rendering
  const showWallet = role !== "worker";

  return (
   
    <div className="flex h-[38px] justify-between w-full items-center ">
      
      <div className="flex gap-[15px] items-center h-full">
        <h1 className="text-2xl font-normal text-neutral-1 whitespace-nowrap">
          {title}
        </h1>
        
        {/* 4. Conditionally render the wallet block */}
        {showWallet && (
          <div className="flex justify-between place-items-center w-[209px] h-full rounded-[16px] px-[12px] py-[8px] border border-success-1 text-[12px] font-normal text-success-1">
            <span>Wallet Balance :</span>
            <span className="font-medium">{walletBalance}</span>
            <button type="button" 
              onClick={onWalletClick}
            className="hover:opacity-80 transition-opacity">
              <CirclePlus className="text-success-2 h-[20px] w-[20px]" />
            </button>
          </div>
        )}
      </div>

      <CustomInput sizeVariant="lg" placeholder="Search..." type="search" />
    </div>
  );
}