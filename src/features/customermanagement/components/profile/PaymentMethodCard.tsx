"use client";

import React from "react";

export interface PaymentMethodCardProps {
  /** The title of the card (e.g., "HDFC Bank Account") */
  bankName: string;
  /** The subtitle or masked number (e.g., "A/c no ........ 0910") */
  accountDetails: string;
  /** The function to run when the action text is clicked. If missing, the button hides. */
  onRemove?: () => void;
  /** Optional text override (Defaults to "Remove") */
  actionText?: string;
}

export function PaymentMethodCard({
  bankName,
  accountDetails,
  onRemove,
  actionText = "Remove",
}: PaymentMethodCardProps) {
  return (
    <div className="flex items-center gap-4 w-full max-w-[450px] bg-white shadow-sm border border-gray-200 rounded-2xl px-5 py-3">
      
      {/* The Bordered Card */}
      <div className="flex-1 flex flex-col justify-center  ">
        <h4 className="text-[16px] font-medium text-neutral-800">
          {bankName}
        </h4>
        <p className="text-[14px] text-neutral-500 mt-1">
          {accountDetails}
        </p>
      </div>

      {/* The External Action Button */}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="text-[14px] font-medium text-[#F05A5A] hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          {actionText}
        </button>
      )}
      
    </div>
  );
}