"use client";

import * as React from "react";
import { Button } from "@/shared/excomponent/ui/UIButton";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

interface AddMoneyPanelProps {
  amount: string;
  onAmountChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
  quickAmounts?: string[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_QUICK_AMOUNTS = ["10,000", "20,000", "30,000"];

export function AddMoneyPanel({
  amount,
  onAmountChange,
  onCancel,
  onSubmit,
  quickAmounts = DEFAULT_QUICK_AMOUNTS,
  title = "Add money",
  subtitle = "Add money to your wallet for quick and hassle-free payments.",
}: AddMoneyPanelProps) {
  return (
    <div className="w-[572px] h-[312px] rounded-[16px] bg-white px-6 pt-6 pb-5 shadow-xl">
      <div className="flex flex-col">
        <h2 className="text-[18px] font-semibold text-neutral-2">{title}</h2>

        <p className="mt-[4px] text-[16px] font-normal leading-[22px] text-[#8D8D8D]">
          {subtitle}
        </p>

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
          {quickAmounts.map((item) => {
            const isActive = amount === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onAmountChange(item)}
                className={`flex h-[44px] w-[150px] items-center justify-center rounded-[8px] border text-[16px] font-medium transition-colors ${
                  isActive
                    ? "border-[#D8D8D8] bg-[#F7F7F7] text-[#4A4A4A]"
                    : "border-[#E5E5E5] bg-white text-[#8D8D8D]"
                }`}
              >
                {item}
              </button>
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
            Add money
          </Button>
        </div>
      </div>
    </div>
  );
}