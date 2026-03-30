"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/shared/excomponent/ui/UIButton";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import {
  L2BDropdownMenu,
  DropdownItem,
} from "@/shared/excomponent/ui/L2BDropdownMenu";

export type MoneyActionPanelType =
  | "addMoney"
  | "requestMoney"
  | "transferMoney";

interface MoneyActionPanelProps {
  type: MoneyActionPanelType;
  amount: string;
  onAmountChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: () => void;

  receiver?: string;
  receiverOptions?: string[];
  onReceiverChange?: (value: string) => void;
}

const QUICK_AMOUNTS = ["10,000", "20,000", "30,000"];

const panelContent = {
  addMoney: {
    title: "Add money",
    subtitle: "Add money to your wallet for quick and hassle-free payments.",
    submitText: "Add money",
    showReceiver: false,
  },
  requestMoney: {
    title: "Request Money from Vendor",
    subtitle: "Enter amount to send a payment request.",
    submitText: "Request",
    showReceiver: false,
  },
  transferMoney: {
    title: "Transfer money",
    subtitle: "Transfer money securely to another user or account.",
    submitText: "Transfer now",
    showReceiver: true,
  },
} as const;

function QuickAmountButton({
  value,
  isActive,
  onClick,
}: {
  value: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[44px] w-[150px] items-center justify-center rounded-[8px] border text-[16px] font-medium transition-colors ${
        isActive
          ? "border-[#D8D8D8] bg-[#F7F7F7] text-[#4A4A4A]"
          : "border-[#E5E5E5] bg-white text-[#8D8D8D]"
      }`}
    >
      {value}
    </button>
  );
}

export function MoneyActionPanel({
  type,
  amount,
  onAmountChange,
  onCancel,
  onSubmit,
  receiver = "",
  receiverOptions = ["Samadhan kharat", "Shruti sheel", "Adesh Mendekar"],
  onReceiverChange,
}: MoneyActionPanelProps) {
  const content = panelContent[type];

  const receiverItems: DropdownItem[] = receiverOptions.map((item) => ({
    label: item,
    onClick: () => onReceiverChange?.(item),
  }));

  return (
       <div
  className={`w-[572px] rounded-[16px] bg-white px-6 pb-5 pt-6 shadow-xl ${
    type === "transferMoney" ? "min-h-[414px]" : "min-h-[318px]"
  }`}
>
      <div className="flex flex-col">
        <h2 className="text-[18px] font-semibold text-neutral-2">
          {content.title}
        </h2>

        <p className="mt-[4px] text-[16px] font-normal leading-[22px] text-[#8D8D8D]">
          {content.subtitle}
        </p>

        {content.showReceiver && (
          <div className="mt-[20px] flex flex-col">
            <span className="text-[16px] font-medium text-[#6B6B6B]">
              Select receiver
            </span>

            <div className="mt-[8px]">
              <L2BDropdownMenu
                align="end"
                items={receiverItems}
                trigger={
                  <button
                    type="button"
                    className="flex h-[44px] w-full items-center justify-between rounded-[8px] border border-[#D9D9D9] bg-white px-[14px] text-left text-[15px] font-medium text-[#4A4A4A]"
                  >
                    <span>{receiver || "Select receiver"}</span>
                    <span className="flex h-[14px] w-[14px] items-center justify-center rounded-[4px] bg-[#56C293]">
  <ChevronDown className="h-[10px] w-[10px] text-white" strokeWidth={2.5} />
</span>
                  </button>
                }
              />
            </div>
          </div>
        )}

        <div className="mt-[20px] flex flex-col">
          <span className="text-[16px] font-medium text-[#6B6B6B]">
            Enter amount
          </span>

          <div className="mt-[8px]">
            <CustomInput
              fullWidth
              sizeVariant="xl"
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-[20px] flex items-center gap-[14px]">
          {QUICK_AMOUNTS.map((item) => {
            const isActive = amount === item;

            return (
              <QuickAmountButton
                key={item}
                value={item}
                isActive={isActive}
                onClick={() => onAmountChange(item)}
              />
            );
          })}
        </div>

        <div className="mt-[20px] flex items-center justify-end gap-[12px]">
          <Button
            onClick={onCancel}
            className="h-[40px] w-[118px] rounded-[8px] border border-[#D8D8D8] bg-white !text-[#4A4A4A] shadow-none hover:bg-white"
          >
            Cancel
          </Button>

          <Button
            onClick={onSubmit}
            className="h-[40px] w-[118px] rounded-[8px] !bg-[#F6B332] !text-black hover:!bg-[#e0a227]"
          >
            {content.submitText}
          </Button>
        </div>
      </div>
    </div>
  );
}