"use client";

import * as React from "react";
import { Plus, ArrowRightLeft, Wallet, ListFilter } from "lucide-react";
import { Button } from "@/shared/excomponent/ui/UIButton";
import {
  L2BDropdownMenu,
  DropdownItem,
} from "@/shared/excomponent/ui/L2BDropdownMenu";

export type WalletCardType =
  | "customerWallet"
  | "vendorWallet"
  | "operatorWallet";

type TransactionItem = {
  id: string;
  title: string;
  date: string;
  amount: string;
  type: "credited" | "debited";
};

interface WalletPanelProps {
  type: WalletCardType;
  walletBalance: string;
  incentiveAmount?: string;
  transactions: readonly TransactionItem[];
  onAddMoney?: () => void;
  onTransfer?: () => void;
  onRequest?: () => void;
  onFilterClick?: (value: string) => void;
  title?: string;
}

const walletTypeConfig: Record<
  WalletCardType,
  {
    showIncentive: boolean;
    actions: Array<"addMoney" | "transfer" | "request">;
  }
> = {
  customerWallet: {
    showIncentive: false,
    actions: ["addMoney"],
  },
  vendorWallet: {
    showIncentive: true,
    actions: ["addMoney", "transfer"],
  },
  operatorWallet: {
    showIncentive: true,
    actions: ["request"],
  },
};

const filterItems: DropdownItem[] = [
  {
    label: "All",
    onClick: () => {},
  },
  {
    label: "Credited",
    onClick: () => {},
  },
  {
    label: "Debited",
    onClick: () => {},
  },
];

function WalletActionButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="flex h-[44px] min-w-[102px] items-center justify-center gap-[8px] rounded-[8px] border border-[#E4DDD0] bg-[#F8F4EB] px-[14px] !text-[13px] !font-medium !text-[#5B5B5B] shadow-none hover:bg-[#f2ebdd]"
    >
      <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-[#3B3B3B]">
        {icon}
      </span>
      <span>{label}</span>
    </Button>
  );
}

export function WalletPanel({
  type,
  walletBalance,
  incentiveAmount = "₹ 1,000",
  transactions,
  onAddMoney,
  onTransfer,
  onRequest,
  onFilterClick,
  title = "Earning & Incentive",
}: WalletPanelProps) {
  const config = walletTypeConfig[type];

  const dropdownItems: DropdownItem[] = [
    {
      label: "All",
      onClick: () => onFilterClick?.("All"),
    },
    {
      label: "Credited",
      onClick: () => onFilterClick?.("Credited"),
    },
    {
      label: "Debited",
      onClick: () => onFilterClick?.("Debited"),
    },
  ];

  return (
    <div className="w-[412px] rounded-[16px] bg-white p-[18px] shadow-md">
      <h2 className="text-[18px] font-semibold text-[#232323]">{title}</h2>

      <div className="mt-[16px] rounded-[14px] border border-[#E6DED0] bg-[linear-gradient(180deg,rgba(246,179,50,0.20)_0%,rgba(255,255,255,0.00)_100%)] px-[14px] py-[12px]">
        <div
          className={`grid gap-[12px] ${
            config.showIncentive ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-[8px] text-[14px] font-medium text-[#8A8A8A]">
              <Wallet className="h-[16px] w-[16px]" />
              <span>Wallet Balance</span>
            </div>
            <div className="mt-[8px] text-[18px] font-semibold text-[#2C2C2C]">
              {walletBalance}
            </div>
          </div>

          {config.showIncentive && (
            <div className="rounded-[8px] border border-[#EFE7D8] bg-white/35 px-[12px] py-[10px]">
              <div className="text-[14px] font-medium text-[#9B9B9B]">
                Incentive
              </div>
              <div className="mt-[6px] text-[18px] font-semibold text-[#2C2C2C]">
                {incentiveAmount}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[16px] flex items-center justify-center gap-[16px]">
        {config.actions.includes("addMoney") && (
          <WalletActionButton
            label="Add Money"
            icon={<Plus className="h-[12px] w-[12px]" />}
            onClick={onAddMoney}
          />
        )}

        {config.actions.includes("transfer") && (
          <WalletActionButton
            label="Transfer"
            icon={<ArrowRightLeft className="h-[12px] w-[12px]" />}
            onClick={onTransfer}
          />
        )}

        {config.actions.includes("request") && (
          <WalletActionButton
            label="Request"
            icon={<ArrowRightLeft className="h-[12px] w-[12px]" />}
            onClick={onRequest}
          />
        )}
      </div>

      <div className="mt-[18px] flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-[#232323]">
          Transaction History
        </h3>

        <L2BDropdownMenu
          align="end"
          items={dropdownItems}
          trigger={
            <button
              type="button"
              className="flex h-[24px] w-[24px] items-center justify-center rounded-[4px] text-[#666] hover:bg-[#F4F4F4]"
            >
              <ListFilter className="h-[16px] w-[16px]" />
            </button>
          }
        />
      </div>

      <div className="mt-[12px] rounded-[14px] border border-[#E7E7E7] bg-white px-[10px] py-[8px]">
        <div className="max-h-[220px] overflow-y-auto pr-[4px]">
          {transactions.map((item, index) => {
            const isCredited = item.type === "credited";

            return (
              <div
                key={item.id}
                className={`flex items-start justify-between py-[12px] ${
                  index !== transactions.length - 1
                    ? "border-b border-[#ECECEC]"
                    : ""
                }`}
              >
                <div className="flex items-start gap-[10px]">
                  <span
                    className={`mt-[4px] flex h-[16px] w-[16px] items-center justify-center rounded-full border text-[12px] ${
                      isCredited
                        ? "border-[#56C293] text-[#56C293]"
                        : "border-[#F6B332] text-[#F6B332]"
                    }`}
                  >
                    {isCredited ? "+" : "−"}
                  </span>

                  <div>
                    <div className="text-[14px] font-medium text-[#333333]">
                      {item.title}
                    </div>
                    <div className="mt-[4px] text-[11px] text-[#B1B1B1]">
                      {item.date}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[14px] font-semibold text-[#333333]">
                    {item.amount}
                  </div>
                  <div className="mt-[4px] text-[11px] text-[#C0C0C0]">
                    {isCredited ? "Credited" : "Debited"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}